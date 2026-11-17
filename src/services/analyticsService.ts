import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  increment
} from 'firebase/firestore';
import { db } from '../firebase.ts';
import { CalculatorSubmission, AnalyticsSummary, DailyMetricDoc } from '../types.ts';
import { isAdminSessionActive } from './adminAuthService.ts';
import { fetchAllFeedback } from './feedbackService.ts';

function getTodayString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Anonymously records a page view once per browser session and unique visitor once per browser per day.
 * Skips automated headless browsers and active admin sessions.
 */
export async function recordPageView(): Promise<void> {
  try {
    if (typeof navigator !== 'undefined' && navigator.webdriver) {
      return;
    }
    if (isAdminSessionActive()) {
      return;
    }

    const today = getTodayString();
    const sessionKey = 'historicka_kalkulacka_pv_' + today;
    const uniqueKey = 'hvk_uv_' + today;

    const hasSessionView = Boolean(sessionStorage.getItem(sessionKey));
    let hasUniqueVisitor = false;
    try {
      hasUniqueVisitor = Boolean(localStorage.getItem(uniqueKey));
    } catch {
      hasUniqueVisitor = hasSessionView;
    }

    if (hasSessionView && hasUniqueVisitor) {
      return;
    }

    const metricRef = doc(db, 'site_metrics', today);

    await setDoc(
      metricRef,
      {
        date: today,
        pageViews: increment(hasSessionView ? 0 : 1),
        uniqueVisitors: increment(hasUniqueVisitor ? 0 : 1),
        updatedAt: new Date().toISOString()
      },
      { merge: true }
    );

    if (!hasSessionView) {
      sessionStorage.setItem(sessionKey, '1');
    }
    if (!hasUniqueVisitor) {
      try {
        localStorage.setItem(uniqueKey, '1');
      } catch {
        // Ignore storage errors in private mode
      }
    }
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
 * Fetches metrics, calculator submissions, and user feedback for the admin dashboard.
 */
export async function fetchAnalyticsSummary(): Promise<AnalyticsSummary> {
  const summary: AnalyticsSummary = {
    totalPageViews: 0,
    totalUniqueVisitors: 0,
    totalQuizStarts: 0,
    totalSubmissions: 0,
    submissionsByYear: { 1920: 0, 1946: 0, 1990: 0 },
    submissionsByMode: { standard: 0, expanded: 0 },
    ageDistribution: {},
    voted2021Distribution: {},
    topMatchesByYear: { 1920: {}, 1946: {}, 1990: {} },
    correlations: {},
    recentSubmissions: [],
    dailyMetrics: [],
    feedbacks: []
  };

  try {
    // 1. Sum up all daily metrics (no limit(100) cap)
    const metricsSnap = await getDocs(collection(db, 'site_metrics'));
    const dailyList: DailyMetricDoc[] = [];

    metricsSnap.forEach((docSnap) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(docSnap.id)) return;
      const data = docSnap.data() as DailyMetricDoc;
      const pv = Number(data.pageViews || 0);
      const uv = Number(data.uniqueVisitors || 0);
      const qs = Number(data.quizStarts || 0);
      const qc = Number(data.quizCompletions || 0);

      summary.totalPageViews += pv;
      summary.totalUniqueVisitors += uv;
      summary.totalQuizStarts += qs;

      dailyList.push({
        date: data.date || docSnap.id,
        pageViews: pv,
        uniqueVisitors: uv,
        quizStarts: qs,
        quizCompletions: qc,
        updatedAt: data.updatedAt
      });
    });

    dailyList.sort((a, b) => b.date.localeCompare(a.date));
    summary.dailyMetrics = dailyList;
  } catch (e) {
    console.warn('Error loading site metrics:', e);
  }

  try {
    // 2. Load all submissions for client-side aggregation
    const submissionsSnap = await getDocs(
      collection(db, 'calculator_submissions')
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

  try {
    // 3. Load all feedback entries
    summary.feedbacks = await fetchAllFeedback();
  } catch (e) {
    console.warn('Error loading feedback:', e);
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
