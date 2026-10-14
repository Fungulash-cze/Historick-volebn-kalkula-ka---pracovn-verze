import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  increment, 
  Firestore 
} from 'firebase/firestore';
import { ElectionYear, FirebaseStats } from './types.ts';

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
}

const STORAGE_KEY_FIREBASE_CONFIG = 'hist_calc_firebase_cfg';
const STORAGE_KEY_LOCAL_STATS = 'hist_calc_local_stats';
const STORAGE_KEY_VISITED = 'hist_calc_visited_session';

// Seeded realistic community baseline counts (representing thousands of previous players)
const BASELINE_STATS: FirebaseStats = {
  totalVisitors: 12480,
  resultsByYear: {
    1920: {
      cssd: 3240,
      rszml: 2650,
      csl: 1890,
      csns: 1540,
      csnd: 1280,
      dsap: 980,
      bdl: 450,
      sls: 820
    },
    1946: {
      ksc: 3890,
      csns: 2950,
      csl: 2410,
      ds: 1820,
      cssd: 1420,
      kss: 720
    },
    1990: {
      of: 5820,
      vpn: 1450,
      kscs: 1890,
      kdu: 1720,
      hsd_sms: 1140,
      sns: 620,
      sz: 840,
      css: 420
    }
  },
  totalSubmissionsByYear: {
    1920: 12850,
    1946: 13210,
    1990: 13900
  }
};

let appInstance: FirebaseApp | null = null;
let dbInstance: Firestore | null = null;
let isRealFirebaseActive = false;

function getStoredFirebaseConfig(): FirebaseConfig | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_FIREBASE_CONFIG);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Chyba při čtení konfigurace Firebase z localStorage:', e);
  }

  // Check Vite environment variables
  const envKey = import.meta.env.VITE_FIREBASE_API_KEY;
  const envProject = import.meta.env.VITE_FIREBASE_PROJECT_ID;
  if (envKey && envProject) {
    return {
      apiKey: envKey,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${envProject}.firebaseapp.com`,
      projectId: envProject,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || `${envProject}.appspot.com`,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
      appId: import.meta.env.VITE_FIREBASE_APP_ID || ''
    };
  }

  return null;
}

export function initFirebase(): boolean {
  const cfg = getStoredFirebaseConfig();
  if (!cfg || !cfg.apiKey || !cfg.projectId) {
    isRealFirebaseActive = false;
    return false;
  }

  try {
    if (!getApps().length) {
      appInstance = initializeApp(cfg);
    } else {
      appInstance = getApps()[0];
    }
    dbInstance = getFirestore(appInstance);
    isRealFirebaseActive = true;
    return true;
  } catch (err) {
    console.warn('Nepodařilo se připojit k reálnému Firebase Firestore, přechod na lokální režim:', err);
    isRealFirebaseActive = false;
    return false;
  }
}

export function isFirebaseConfigured(): boolean {
  return isRealFirebaseActive && dbInstance !== null;
}

export function saveCustomFirebaseConfig(config: FirebaseConfig): boolean {
  try {
    localStorage.setItem(STORAGE_KEY_FIREBASE_CONFIG, JSON.stringify(config));
    return initFirebase();
  } catch (e) {
    console.error(e);
    return false;
  }
}

export function getCustomFirebaseConfig(): FirebaseConfig | null {
  return getStoredFirebaseConfig();
}

function getLocalStats(): FirebaseStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LOCAL_STATS);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Chyba při čtení lokálních statistik:', e);
  }
  return JSON.parse(JSON.stringify(BASELINE_STATS));
}

function saveLocalStats(stats: FirebaseStats) {
  try {
    localStorage.setItem(STORAGE_KEY_LOCAL_STATS, JSON.stringify(stats));
  } catch (e) {
    console.error('Chyba při zápisu do lokálních statistik:', e);
  }
}

/**
 * Zaznamená návštěvu webu (celkové počítadlo).
 * Pokud je dostupné Firebase Firestore, použije atomický increment v dokumentu stats/visitors.
 */
export async function trackVisitor(): Promise<number> {
  const isFirstVisit = !sessionStorage.getItem(STORAGE_KEY_VISITED);
  sessionStorage.setItem(STORAGE_KEY_VISITED, 'true');

  const local = getLocalStats();
  if (isFirstVisit) {
    local.totalVisitors += 1;
    saveLocalStats(local);
  }

  if (isFirebaseConfigured() && dbInstance) {
    try {
      const visitorDocRef = doc(dbInstance, 'statistics', 'visitors');
      const snap = await getDoc(visitorDocRef);
      if (!snap.exists()) {
        await setDoc(visitorDocRef, { count: local.totalVisitors });
        return local.totalVisitors;
      } else {
        if (isFirstVisit) {
          await updateDoc(visitorDocRef, { count: increment(1) });
          return (snap.data()?.count || local.totalVisitors) + 1;
        }
        return snap.data()?.count || local.totalVisitors;
      }
    } catch (err) {
      console.warn('Chyba při zápisu návštěvníka do Firestore:', err);
    }
  }

  return local.totalVisitors;
}

/**
 * Zkontroluje, zda uživatel již pro daný rok výsledek uložil (ochrana proti spamu pomocí localStorage).
 */
export function hasUserSubmittedForYear(year: ElectionYear): boolean {
  return localStorage.getItem(`hist_calc_submitted_${year}`) !== null;
}

export function getUserSavedWinningParty(year: ElectionYear): string | null {
  return localStorage.getItem(`hist_calc_submitted_${year}`);
}

/**
 * Uloží výsledek kalkulačky.
 * Splňuje křehkou podmínku: započítá pouze první dokončený výsledek uživatele pro konkrétní rok.
 */
export async function submitElectionResult(year: ElectionYear, winningPartyId: string): Promise<boolean> {
  // Kontrola spamu - pokud již v localStorage existuje záznam pro tento rok, neukládáme duplicitně
  if (hasUserSubmittedForYear(year)) {
    return false;
  }

  // Označíme v localStorage, že tento uživatel pro daný rok již hlasoval
  localStorage.setItem(`hist_calc_submitted_${year}`, winningPartyId);

  // Aktualizace lokálních statistik
  const local = getLocalStats();
  if (!local.resultsByYear[year][winningPartyId]) {
    local.resultsByYear[year][winningPartyId] = 0;
  }
  local.resultsByYear[year][winningPartyId] += 1;
  local.totalSubmissionsByYear[year] += 1;
  saveLocalStats(local);

  // Zápis do Firebase Firestore
  if (isFirebaseConfigured() && dbInstance) {
    try {
      const docRef = doc(dbInstance, 'election_stats', `year_${year}`);
      const snap = await getDoc(docRef);

      if (!snap.exists()) {
        const initialData = {
          total: local.totalSubmissionsByYear[year],
          parties: local.resultsByYear[year]
        };
        await setDoc(docRef, initialData);
      } else {
        await updateDoc(docRef, {
          total: increment(1),
          [`parties.${winningPartyId}`]: increment(1)
        });
      }
      return true;
    } catch (err) {
      console.warn('Chyba při odesílání výsledku do Firestore:', err);
    }
  }

  return true;
}

/**
 * Načte agregované statistiky ostatních uživatelů pro konkrétní rok z Firestore nebo lokálního úložiště.
 */
export async function getAggregatedStatsForYear(year: ElectionYear): Promise<{
  totalSubmissions: number;
  partyVotes: Record<string, number>;
  partyPercentages: Record<string, number>;
  source: 'firebase' | 'local';
}> {
  if (isFirebaseConfigured() && dbInstance) {
    try {
      const docRef = doc(dbInstance, 'election_stats', `year_${year}`);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        const data = snap.data();
        const partyVotes: Record<string, number> = data.parties || {};
        const totalSubmissions: number = data.total || Object.values(partyVotes).reduce((a, b) => a + b, 0) || 1;

        const partyPercentages: Record<string, number> = {};
        for (const [pId, count] of Object.entries(partyVotes)) {
          partyPercentages[pId] = totalSubmissions > 0 ? Number(((count / totalSubmissions) * 100).toFixed(1)) : 0;
        }

        return {
          totalSubmissions,
          partyVotes,
          partyPercentages,
          source: 'firebase'
        };
      }
    } catch (err) {
      console.warn('Nepodařilo se stáhnout data z Firestore, použijeme lokální statistiky:', err);
    }
  }

  // Lokální záloha
  const local = getLocalStats();
  const partyVotes = local.resultsByYear[year] || {};
  const totalSubmissions = local.totalSubmissionsByYear[year] || Object.values(partyVotes).reduce((a, b) => a + b, 0) || 1;
  const partyPercentages: Record<string, number> = {};

  for (const [pId, count] of Object.entries(partyVotes)) {
    partyPercentages[pId] = totalSubmissions > 0 ? Number(((count / totalSubmissions) * 100).toFixed(1)) : 0;
  }

  return {
    totalSubmissions,
    partyVotes,
    partyPercentages,
    source: 'local'
  };
}
