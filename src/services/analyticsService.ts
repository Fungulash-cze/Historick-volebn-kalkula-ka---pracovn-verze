import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  query,
  limit,
  increment
} from 'firebase/firestore';
import { db } from '../firebase.ts';
import { CalculatorSubmission, AnalyticsSummary, ElectionYear } from '../types.ts';

function getTodayString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Anonymously records a page view once per browser session.
 */
export async function recordPageView(): Promise<void> {
  try {
    const sessionKey = 'historicka_kalkulacka_pv_' + getTodayString();
    if (sessionStorage.getItem(sessionKey)) {
      return; // already counted in this session for today
    }

    const today = getTodayString();
    const metricRef = doc(db, 'site_metrics', today);

    await setDoc(
      metricRef,
      {
        date: today,
        pageViews: increment(1),
        updatedAt: new Date().toISOString()
      },
      { merge: true }
    );

    sessionStorage.setItem(sessionKey, '1');
  } catch (err) {
    // Graceful silent fallback: analytics failure should never interrupt user
    console.warn('Analytics page view notice:', err);
  }
}

/**
 * Anonymously records the start of a quiz.
 */
export async function recordQuizStart(): Promise<void> {
  try {
    const today = getTodayString();
    const metricRef = doc(db, 'site_metrics', today);

    await setDoc(
      metricRef,
      {
        date: today,
        pageViews: increment(0),
        quizStarts: increment(1),
        updatedAt: new Date().toISOString()
      },
      { merge: true }
    );
  } catch (err) {
    console.warn('Analytics quiz start notice:', err);
  }
}

/**
 * Anonymously submits the completed calculator results together with voluntary demographics.
 */
export async function submitQuizResult(
  payload: Omit<CalculatorSubmission, 'id' | 'createdAt'>
): Promise<string | null> {
  try {
    const today = getTodayString();

    // 1. Increment completions counter
    const metricRef = doc(db, 'site_metrics', today);
    setDoc(
      metricRef,
      {
        date: today,
        pageViews: increment(0),
        quizCompletions: increment(1),
        updatedAt: new Date().toISOString()
      },
      { merge: true }
    ).catch(() => {});

    // 2. Add submission record
    const submissionsRef = collection(db, 'calculator_submissions');
    const docRef = await addDoc(submissionsRef, {
      ...payload,
      createdAt: new Date().toISOString()
    });

    return docRef.id;
  } catch (err) {
    console.warn('Analytics quiz submission notice:', err);
    return null;
  }
}

/**
 * Fetches metrics and calculator submissions to calculate dashboard stats.
 */
export async function fetchAnalyticsSummary(): Promise<AnalyticsSummary> {
  const summary: AnalyticsSummary = {
    totalPageViews: 0,
    totalSubmissions: 0,
    submissionsByYear: { 1920: 0, 1946: 0, 1990: 0 },
    submissionsByMode: { standard: 0, expanded: 0 },
    ageDistribution: {},
    voted2021Distribution: {},
    topMatchesByYear: { 1920: {}, 1946: {}, 1990: {} },
    correlations: {},
    recentSubmissions: []
  };

  try {
    // 1. Sum up daily metrics
    const metricsSnap = await getDocs(query(collection(db, 'site_metrics'), limit(100)));
    metricsSnap.forEach((docSnap) => {
      const data = docSnap.data();
      summary.totalPageViews += Number(data.pageViews || 0);
    });
  } catch (e) {
    console.warn('Error loading site metrics:', e);
  }

  try {
    // 2. Load recent submissions (up to 500 for fast client-side aggregation)
    const submissionsSnap = await getDocs(
      query(collection(db, 'calculator_submissions'), limit(500))
    );

    const submissions: CalculatorSubmission[] = [];

    submissionsSnap.forEach((docSnap) => {
      const data = docSnap.data() as CalculatorSubmission;
      data.id = docSnap.id;
      submissions.push(data);

      summary.totalSubmissions++;

      // Breakdown by year
      if (data.year === 1920 || data.year === 1946 || data.year === 1990) {
        summary.submissionsByYear[data.year] = (summary.submissionsByYear[data.year] || 0) + 1;

        // Top match party count per year
        const partyCounts = summary.topMatchesByYear[data.year];
        partyCounts[data.topPartyId] = (partyCounts[data.topPartyId] || 0) + 1;
      }

      // Breakdown by mode
      if (data.mode === 'expanded') {
        summary.submissionsByMode.expanded++;
      } else {
        summary.submissionsByMode.standard++;
      }

      // Age distribution
      const age = data.ageGroup || 'Neuvedeno';
      summary.ageDistribution[age] = (summary.ageDistribution[age] || 0) + 1;

      // 2021 vote distribution
      const vote2021 = data.votedParty2021 || 'Neuvedeno';
      summary.voted2021Distribution[vote2021] = (summary.voted2021Distribution[vote2021] || 0) + 1;

      // Correlation: 2021 vote -> Historic match
      if (vote2021 !== 'skipped' && vote2021 !== 'Nechci uvést') {
        if (!summary.correlations[vote2021]) {
          summary.correlations[vote2021] = {};
        }
        const histKey = `${data.year}: ${data.topPartyId.toUpperCase()}`;
        summary.correlations[vote2021][histKey] = (summary.correlations[vote2021][histKey] || 0) + 1;
      }
    });

    // Sort by createdAt desc
    submissions.sort((a, b) => {
      const tA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const tB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return tB - tA;
    });

    summary.recentSubmissions = submissions;
  } catch (e) {
    console.warn('Error loading submissions:', e);
  }

  // Ensure minimum pageViews is at least equal to submissions
  if (summary.totalPageViews < summary.totalSubmissions) {
    summary.totalPageViews = summary.totalSubmissions;
  }

  return summary;
}

/**
 * Generates and downloads a clean UTF-8 CSV file with all anonymous records.
 */
export function downloadSubmissionsCSV(submissions: CalculatorSubmission[]): void {
  if (submissions.length === 0) {
    alert('Zatím nejsou k dispozici žádná data k exportu.');
    return;
  }

  const headers = [
    'ID',
    'Datum a čas',
    'Volební rok',
    'Verze kalkulačky',
    'Počet zodpovězených otázek',
    'Vítězná strana',
    'Shoda (%)',
    'Věková kategorie',
    'Volba do PS PČR 2021'
  ];

  const escapeCSV = (value: string | number | undefined): string => {
    if (value === undefined || value === null) return '""';
    const str = String(value).replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = submissions.map((s) => [
    escapeCSV(s.id),
    escapeCSV(s.createdAt ? new Date(s.createdAt).toLocaleString('cs-CZ') : ''),
    escapeCSV(s.year),
    escapeCSV(s.mode === 'expanded' ? 'Rozšířená (40)' : 'Základní (15)'),
    escapeCSV(s.answersCount),
    escapeCSV(s.topPartyId.toUpperCase()),
    escapeCSV(s.topPartyMatch),
    escapeCSV(s.ageGroup),
    escapeCSV(s.votedParty2021)
  ]);

  const csvContent =
    '\uFEFF' + // UTF-8 BOM for Excel compatibility
    [headers.join(';'), ...rows.map((r) => r.join(';'))].join('\r\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `historicka-volebni-kalkulacka-export-${getTodayString()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
