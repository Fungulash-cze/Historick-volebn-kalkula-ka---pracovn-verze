import './index.css';
import confetti from 'canvas-confetti';
import { ELECTIONS_DATA } from './data/electionsData.ts';
import { calculatePartyScores } from './calculator.ts';
import { ElectionYear, UserAnswerValue, PartyScore, Party } from './types.ts';
import {
  recordPageView,
  recordQuizStart,
  submitQuizResult,
  fetchAnalyticsSummary,
  downloadSubmissionsCSV
} from './services/analyticsService.ts';
import {
  verifyAdminPassword,
  isAdminSessionActive,
  logoutAdminSession
} from './services/adminAuthService.ts';
import { renderSurveyView, SurveyState } from './components/DemographicSurveyModal.ts';
import { renderAnalyticsDashboardView, DashboardState } from './components/AnalyticsDashboardView.ts';
import { renderBallotShareSection, BallotShareState } from './components/BallotShareSection.ts';
import {
  generateBallotCardDataUrl,
  downloadBallotCard,
  shareBallotCard
} from './services/ballotCardGenerator.ts';

interface AppState {
  view: 'home' | 'quiz' | 'results' | 'survey' | 'admin';
  year: ElectionYear;
  quizMode: 'standard' | 'expanded';
  selectedYearMode: Record<ElectionYear, 'standard' | 'expanded'>;
  questionIndex: number;
  answers: Record<number, UserAnswerValue>;
  partyScores: PartyScore[];
  showHistoricalNote: boolean;
  activeContextTooltipId: number | null;
  toastMessage: string | null;
  comparisonFilter: 'all' | 'agree' | 'disagree';
  selectedPartyForDetails: string | null;
  expandedPartiesYear: ElectionYear | null;
  sliderYearFilter: 'all' | ElectionYear;
  activeModalParty: { party: Party; year: ElectionYear } | null;
  activeModalSystemYear: ElectionYear | null;
  surveyState: SurveyState;
  dashboardState: DashboardState;
  ballotShareState: BallotShareState;
}

const state: AppState = {
  view: 'home',
  year: 1920,
  quizMode: 'standard',
  selectedYearMode: {
    1920: 'standard',
    1946: 'standard',
    1990: 'standard'
  },
  questionIndex: 0,
  answers: {},
  partyScores: [],
  showHistoricalNote: false,
  activeContextTooltipId: null,
  toastMessage: null,
  comparisonFilter: 'all',
  selectedPartyForDetails: null,
  expandedPartiesYear: null,
  sliderYearFilter: 'all',
  activeModalParty: null,
  activeModalSystemYear: null,
  surveyState: {
    selectedAge: null,
    selectedVote2021: null,
    customVoteText: '',
    isSubmitting: false
  },
  dashboardState: {
    summary: null,
    isLoading: false,
    selectedCorrelationParty: null,
    isAuthenticated: isAdminSessionActive(),
    authError: null,
    isVerifying: false
  },
  ballotShareState: {
    previewDataUrl: null,
    isGenerating: false,
    isModalOpen: false
  }
};

function initBallotShareCard() {
  if (state.partyScores.length === 0) return;
  state.ballotShareState.isGenerating = true;
  generateBallotCardDataUrl({
    year: state.year,
    quizMode: state.quizMode,
    scores: state.partyScores
  })
    .then((url) => {
      state.ballotShareState.previewDataUrl = url;
      state.ballotShareState.isGenerating = false;
      renderApp();
    })
    .catch((err) => {
      console.error('Chyba při generování volebního lístku:', err);
      state.ballotShareState.isGenerating = false;
      renderApp();
    });
}

function getCurrentQuestions(year: ElectionYear, mode: 'standard' | 'expanded') {
  const currentElection = ELECTIONS_DATA[year];
  if (mode === 'expanded' && currentElection.expandedQuestions && currentElection.expandedQuestions.length > 0) {
    return currentElection.expandedQuestions;
  }
  return currentElection.questions;
}

function showToast(msg: string) {
  state.toastMessage = msg;
  renderApp();
  setTimeout(() => {
    state.toastMessage = null;
    renderApp();
  }, 3000);
}

function setView(view: AppState['view']) {
  state.view = view;
  if (view === 'results' && !state.ballotShareState.previewDataUrl && state.partyScores.length > 0) {
    initBallotShareCard();
  }
  if (view === 'admin') {
    state.dashboardState.isAuthenticated = isAdminSessionActive();
    if (state.dashboardState.isAuthenticated) {
      loadDashboardStats();
    } else {
      state.dashboardState.authError = null;
    }
  } else {
    // Pokud uživatel odchází ze statistik zpět na web, vyčistíme hash z adresního řádku
    const currentHash = (window.location.hash || '').toLowerCase();
    if (currentHash === '#admin' || currentHash === '#statistiky' || currentHash === '#stats') {
      try {
        history.pushState(null, '', window.location.pathname + window.location.search);
      } catch {
        window.location.hash = '';
      }
    }
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

function loadDashboardStats() {
  state.dashboardState.isLoading = true;
  state.dashboardState.authError = null;
  renderApp();

  fetchAnalyticsSummary()
    .then((summary) => {
      state.dashboardState.summary = summary;
      state.dashboardState.isLoading = false;
      state.dashboardState.authError = null;
      renderApp();
    })
    .catch((err) => {
      console.warn('Dashboard fetch warning:', err);
      state.dashboardState.isLoading = false;
      state.dashboardState.authError =
        'Nepodařilo se načíst statistiky z databáze. Zkontrolujte připojení k internetu.';
      renderApp();
    });
}

async function handleVerifyAdminPassword() {
  const inputEl = document.getElementById('admin-pass-input') as HTMLInputElement | null;
  const password = inputEl ? inputEl.value : '';

  if (!password.trim()) {
    state.dashboardState.authError = 'Zadejte prosím administrátorské heslo.';
    renderApp();
    return;
  }

  state.dashboardState.isVerifying = true;
  state.dashboardState.authError = null;
  renderApp();

  const isValid = await verifyAdminPassword(password);
  state.dashboardState.isVerifying = false;

  if (isValid) {
    state.dashboardState.isAuthenticated = true;
    state.dashboardState.authError = null;
    loadDashboardStats();
  } else {
    state.dashboardState.authError = 'Nesprávné heslo. Zkuste to prosím znovu.';
    renderApp();
  }
}

function handleAdminLogout() {
  logoutAdminSession();
  state.dashboardState.isAuthenticated = false;
  state.dashboardState.summary = null;
  state.dashboardState.authError = null;
  renderApp();
}


function startQuiz(year: ElectionYear, mode?: 'standard' | 'expanded') {
  state.year = year;
  state.quizMode = mode || state.selectedYearMode[year] || 'standard';
  state.questionIndex = 0;
  state.answers = {};
  state.partyScores = [];
  state.showHistoricalNote = false;
  state.activeContextTooltipId = null;
  state.view = 'quiz';
  recordQuizStart();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

function handleAnswer(val: UserAnswerValue) {
  const currentQuestions = getCurrentQuestions(state.year, state.quizMode);
  const currentQuestion = currentQuestions[state.questionIndex];
  state.answers[currentQuestion.id] = val;

  if (state.questionIndex < currentQuestions.length - 1) {
    state.questionIndex++;
    state.showHistoricalNote = false;
    state.activeContextTooltipId = null;
    renderApp();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const currentElection = ELECTIONS_DATA[state.year];
  const currentQuestions = getCurrentQuestions(state.year, state.quizMode);
  const scores = calculatePartyScores(currentElection, state.answers, currentQuestions);
  state.partyScores = scores;
  state.selectedPartyForDetails = scores[0]?.party.id || null;
  state.surveyState = {
    selectedAge: null,
    selectedVote2021: null,
    customVoteText: '',
    isSubmitting: false
  };
  state.ballotShareState = {
    previewDataUrl: null,
    isGenerating: false,
    isModalOpen: false
  };
  state.view = 'survey';

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

async function handleSurveySubmit() {
  state.surveyState.isSubmitting = true;
  renderApp();

  const partyMatches: Record<string, number> = {};
  state.partyScores.forEach((ps) => {
    partyMatches[ps.party.id] = ps.matchPercentage;
  });

  const topParty = state.partyScores[0];

  let votedPreference = state.surveyState.selectedVote2021 || 'Neuvedeno';
  if (votedPreference === 'Jiný subjekt') {
    const custom = state.surveyState.customVoteText?.trim();
    if (custom) {
      votedPreference = `Jiný: ${custom}`.slice(0, 60);
    }
  }

  try {
    await submitQuizResult({
      year: state.year,
      mode: state.quizMode,
      topPartyId: topParty?.party.id || 'unknown',
      topPartyMatch: topParty?.matchPercentage || 0,
      partyMatches,
      ageGroup: state.surveyState.selectedAge || 'Neuvedeno',
      votedParty2021: votedPreference,
      answersCount: Object.keys(state.answers).length
    });
  } catch (err) {
    console.warn('Survey submission warning:', err);
  }

  state.surveyState.isSubmitting = false;
  state.view = 'results';
  initBallotShareCard();

  try {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  } catch (e) {
    console.error(e);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

function handleSurveySkip() {
  const partyMatches: Record<string, number> = {};
  state.partyScores.forEach((ps) => {
    partyMatches[ps.party.id] = ps.matchPercentage;
  });

  const topParty = state.partyScores[0];

  submitQuizResult({
    year: state.year,
    mode: state.quizMode,
    topPartyId: topParty?.party.id || 'unknown',
    topPartyMatch: topParty?.matchPercentage || 0,
    partyMatches,
    ageGroup: 'Přeskočeno',
    votedParty2021: 'Přeskočeno',
    answersCount: Object.keys(state.answers).length
  }).catch(() => {});

  state.view = 'results';
  initBallotShareCard();

  try {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  } catch (e) {
    console.error(e);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}


function openPartyModal(partyId: string, year: ElectionYear) {
  const election = ELECTIONS_DATA[year];
  const party = election.parties.find(p => p.id === partyId);
  if (party) {
    state.activeModalParty = { party, year };
    renderApp();
  }
}

function closePartyModal() {
  state.activeModalParty = null;
  renderApp();
}

function openSystemModal(year: ElectionYear) {
  state.activeModalSystemYear = year;
  renderApp();
}

function closeSystemModal() {
  state.activeModalSystemYear = null;
  renderApp();
}

function scrollPartySlider(direction: 'left' | 'right') {
  const container = document.getElementById('party-slider-scroll');
  if (container) {
    const scrollAmount = direction === 'left' ? -320 : 320;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// -------------------------------------------------------------
// RENDERERS (Bílošedý Moderní Minimalistický Design)
// -------------------------------------------------------------

function renderHeader(): string {
  return `
    <header class="bg-white border-b border-zinc-200 sticky top-0 z-30">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        <!-- Logo / Brand s HVK -->
        <button onclick="window.calcSetView('home')" class="flex items-center gap-3 text-left group cursor-pointer">
          <div class="w-9 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-extrabold text-xs tracking-wider shadow-xs border border-zinc-800 transition-colors group-hover:bg-zinc-800">
            HVK
          </div>
          <div>
            <span class="font-bold text-sm text-zinc-900 block leading-tight">
              Historická volební kalkulačka
            </span>
            <span class="text-[11px] text-zinc-500 font-medium block">
              1920 · 1946 · 1990
            </span>
          </div>
        </button>

        <!-- Navigace v bílošedém stylu -->
        <nav class="flex items-center gap-2.5 text-xs font-medium">
          <button 
            onclick="window.calcSetView('home')" 
            class="px-3 py-1.5 rounded-md transition-colors cursor-pointer ${state.view === 'home' ? 'bg-zinc-100 text-zinc-900 font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
          >
            Výběr voleb
          </button>
          ${state.view === 'quiz' || state.view === 'results' ? `
            <span class="text-zinc-300">/</span>
            <span class="text-zinc-800 font-semibold px-2 py-0.5 bg-zinc-100 rounded text-[11px] border border-zinc-200">
              Volby ${state.year}
            </span>
          ` : ''}
        </nav>
      </div>
    </header>
  `;
}

function renderHomeView(): string {
  const years: ElectionYear[] = [1920, 1946, 1990];

  return `
    <main class="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex-1 animate-fadeIn">
      
      <!-- Minimalistický Editorial Úvod -->
      <section class="max-w-2xl mb-10">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-3">
          Koho byste volili v minulosti?
        </h1>
        <p class="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
          Zvolte si jedny ze tří zlomových voleb. Můžete si vyzkoušet základní (15 otázek) i rozšířenou (40 otázek) verzi kalkulačky a zjistit, ke komu byste tehdy měli názorově nejblíž.
        </p>
      </section>

      <!-- 3 Karty Volebních Období (Bílošedý design) -->
      <section class="space-y-4 mb-14">
        ${years.map((y) => {
          const meta = ELECTIONS_DATA[y];
          const isExpanded = state.expandedPartiesYear === y;

          return `
            <div class="election-card p-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <!-- Levý obsah -->
              <div class="flex-1">
                <!-- Rok & Meta řádek -->
                <div class="flex items-center gap-2.5 mb-2">
                  <span class="text-2xl font-extrabold text-zinc-900 font-mono tracking-tight">
                    ${meta.year}
                  </span>
                  <span class="text-zinc-300">·</span>
                  <span class="text-xs font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                    ${meta.date}
                  </span>
                  <span class="text-zinc-300">·</span>
                  <span class="text-xs text-zinc-500 font-medium">
                    Účast ${meta.turnout}
                  </span>
                </div>

                <!-- Název a podstata voleb -->
                <h2 class="text-lg font-bold text-zinc-900 mb-1.5">
                  ${meta.title}
                </h2>
                
                <p class="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-3 text-justify [hyphens:auto]">
                  ${meta.stakes}
                </p>

                <!-- Přehled stran -->
                <div class="text-xs text-zinc-500">
                  <span>Kandidující subjekty (${meta.parties.length}): </span>
                  <span class="text-zinc-700 font-medium">
                    ${meta.parties.map(p => p.shortName).slice(0, 4).join(', ')}${meta.parties.length > 4 ? ` a další ${meta.parties.length - 4}` : ''}
                  </span>
                  <button 
                    onclick="window.calcToggleParties(${y})"
                    class="text-zinc-700 hover:text-zinc-900 underline ml-1 text-xs font-medium cursor-pointer"
                  >
                    ${isExpanded ? 'skrýt přehled' : 'zobrazit všechny'}
                  </button>
                </div>

                ${isExpanded ? `
                  <div class="mt-3 p-3 bg-zinc-50 rounded-lg border border-zinc-200 text-xs text-zinc-700 animate-fadeIn">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      ${meta.parties.map(p => `
                        <div 
                          onclick="window.calcOpenPartyModal('${p.id}', ${y})" 
                          class="flex items-center gap-2.5 p-1.5 rounded hover:bg-zinc-100 transition-colors cursor-pointer group"
                        >
                          <div class="w-1.5 h-5 rounded-full shrink-0" style="background-color: ${p.color};"></div>
                          <strong class="text-zinc-900 font-semibold group-hover:underline">${p.shortName}:</strong>
                          <span class="text-zinc-500 truncate">${p.fullName}</span>
                          <span class="text-[10px] text-zinc-400 ml-auto group-hover:text-zinc-700">info ↗</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
              </div>

              <!-- Tlačítka akcí (Volební systém + Volba verze + Spustit kalkulačku) -->
              <div class="shrink-0 pt-2 md:pt-0 flex flex-col gap-2.5 w-full md:w-56">
                <button 
                  onclick="window.calcOpenSystemModal(${y})"
                  class="w-full px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-100 text-zinc-800 font-semibold text-xs tracking-tight transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer border border-zinc-300 group"
                  title="Informace o volebním systému, kdo mohl volit a zajímavosti"
                >
                  <svg class="w-4 h-4 text-zinc-500 group-hover:text-zinc-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Volební systém a další info</span>
                </button>

                ${meta.expandedQuestions && meta.expandedQuestions.length > 0 ? `
                  <!-- Přepínač verze otázek -->
                  <div class="bg-zinc-100 p-1 rounded-lg border border-zinc-200 flex items-center gap-1 text-[11px] font-medium w-full">
                    <button 
                      type="button"
                      onclick="window.calcSetYearMode(${y}, 'standard')"
                      class="flex-1 py-1.5 px-2 rounded-md transition-all cursor-pointer text-center ${state.selectedYearMode[y] === 'standard' ? 'bg-white text-zinc-900 font-bold shadow-xs border border-zinc-200' : 'text-zinc-600 hover:text-zinc-900'}"
                    >
                      Základní (${meta.questions.length})
                    </button>
                    <button 
                      type="button"
                      onclick="window.calcSetYearMode(${y}, 'expanded')"
                      class="flex-1 py-1.5 px-2 rounded-md transition-all cursor-pointer text-center ${state.selectedYearMode[y] === 'expanded' ? 'bg-white text-zinc-900 font-bold shadow-xs border border-zinc-200' : 'text-zinc-600 hover:text-zinc-900'}"
                    >
                      Rozšířená (${meta.expandedQuestions.length})
                    </button>
                  </div>
                ` : ''}

                <button 
                  onclick="window.calcStartQuiz(${y})"
                  class="w-full px-6 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm tracking-tight transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer border border-zinc-800"
                >
                  <span>Spustit kalkulačku</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          `;
        }).join('')}
      </section>

      <!-- Vzdělávací pozadí projektu -->
      <section class="border-t border-zinc-200 pt-8">
        <h3 class="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
          O projektu a historických datech
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-zinc-600 leading-relaxed text-justify [hyphens:auto]">
          <div>
            <strong class="text-zinc-900 block mb-1 font-semibold">Základní (15) i rozšířená (40) verze</strong>
            Můžete si vybrat rychlou základní verzi (15 otázek) nebo podrobnou rozšířenou verzi (40 otázek). Otázky pokrývají klíčová hospodářská, společenská, zahraničněpolitická i státoprávní témata.
          </div>
          <div>
            <strong class="text-zinc-900 block mb-1 font-semibold">Historicky doložené postoje stran</strong>
            Všechny odpovědi politických subjektů vycházejí ze skutečných volebních manifestů, tiskovin, programů a parlamentních hlasování.
          </div>
          <div>
            <strong class="text-zinc-900 block mb-1 font-semibold">Skutečné volební výsledky</strong>
            Po dokončení kalkulačky získáte nejen procentuální shodu, ale také přehled o tom, jak volby reálně dopadly a jaké měly důsledky.
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderQuizView(): string {
  const currentElection = ELECTIONS_DATA[state.year];
  const questionsToUse = getCurrentQuestions(state.year, state.quizMode);
  const totalQuestions = questionsToUse.length;
  const q = questionsToUse[state.questionIndex];
  const progressPercent = Math.round(((state.questionIndex + 1) / totalQuestions) * 100);
  const currentAnswer = state.answers[q.id];

  return `
    <main class="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 animate-fadeIn">
      
      <!-- Progress Bar & Krok otázky -->
      <div class="mb-6">
        <div class="flex items-center justify-between text-xs mb-2">
          <button 
            onclick="window.calcSetView('home')" 
            class="text-zinc-500 hover:text-zinc-900 transition-colors font-medium flex items-center gap-1 cursor-pointer"
          >
            <span>←</span>
            <span>Výběr roku</span>
          </button>
          
          <div class="flex items-center gap-2">
            <span class="font-bold text-zinc-900">Volby ${state.year}</span>
            ${state.quizMode === 'expanded' ? `
              <span class="text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full">
                Rozšířená verze
              </span>
            ` : `
              <span class="text-[10px] font-medium text-zinc-600 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded-full">
                Základní verze
              </span>
            `}
            <span class="text-zinc-300">·</span>
            <span class="text-zinc-600 font-medium">
              Otázka ${state.questionIndex + 1} z ${totalQuestions}
            </span>
          </div>
        </div>

        <div class="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
          <div 
            class="bg-zinc-900 h-full transition-all duration-300 ease-out" 
            style="width: ${progressPercent}%;"
          ></div>
        </div>
      </div>

      <!-- Hlavní dotazníková karta v bílošedém stylu -->
      <div class="bg-white border border-zinc-200 rounded-xl p-6 sm:p-8 shadow-xs mb-6 relative">
        
        <!-- Kategorie a Otazníček s dobovým kontextem -->
        <div class="flex items-center justify-between gap-3 mb-3 relative">
          <span class="text-[11px] font-bold text-zinc-500 uppercase tracking-wider bg-zinc-100 px-2.5 py-1 rounded border border-zinc-200">
            ${q.category}
          </span>

          ${(q.context || q.historicalNote) ? `
            <div class="relative group/tooltip">
              <button 
                type="button"
                onclick="window.calcToggleContextTooltip(${q.id})"
                class="w-7 h-7 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 hover:text-zinc-950 border border-zinc-300 font-bold text-xs flex items-center justify-center transition-all cursor-help shadow-2xs focus:outline-none focus:ring-2 focus:ring-zinc-400"
                title="Dobový kontext otázky (najetím myší nebo kliknutím zobrazíte vysvětlení)"
                aria-label="Dobový kontext otázky"
              >
                ?
              </button>

              <!-- Tooltip bublina (zobrazí se při najetí myší i při kliknutí/tapnutí) -->
              <div 
                id="context-tooltip-${q.id}"
                class="${state.activeContextTooltipId === q.id ? 'block' : 'hidden group-hover/tooltip:block'} absolute right-0 top-full mt-2 w-72 sm:w-88 md:w-96 p-4 bg-zinc-900 text-zinc-100 text-xs leading-relaxed rounded-xl shadow-2xl z-50 border border-zinc-800 text-justify [hyphens:auto] animate-fadeIn"
              >
                <div class="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800">
                  <div class="flex items-center gap-1.5 text-zinc-200 font-semibold text-[11px]">
                    <span class="text-amber-400">💡</span> Dobový kontext otázky
                  </div>
                  <button 
                    type="button"
                    onclick="event.stopPropagation(); window.calcCloseContextTooltip()"
                    class="text-zinc-400 hover:text-white p-0.5 text-xs font-bold leading-none cursor-pointer"
                    title="Zavřít"
                  >
                    ✕
                  </button>
                </div>
                <p class="text-zinc-300 font-normal leading-relaxed text-justify [hyphens:auto]">
                  ${q.context || q.historicalNote}
                </p>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Tvrzení -->
        <h2 class="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight leading-snug mb-8">
          ${q.statement}
        </h2>

        <!-- 3 Volební tlačítka (Ano / Nevím / Ne) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          <!-- Souhlasím (+1) -->
          <button 
            onclick="window.calcHandleAnswer(1)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${currentAnswer === 1 ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm' : 'bg-white hover:bg-emerald-50 text-zinc-900 border-zinc-300 hover:border-emerald-600'}"
          >
            <span class="text-base text-emerald-600 ${currentAnswer === 1 ? 'text-white' : ''}">✔</span>
            <span>Ano / Souhlasím</span>
          </button>

          <!-- Nevím / Neutrální (0) -->
          <button 
            onclick="window.calcHandleAnswer(0)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${currentAnswer === 0 ? 'bg-zinc-800 text-white border-zinc-800 shadow-sm' : 'bg-white hover:bg-zinc-100 text-zinc-700 border-zinc-300 hover:border-zinc-400'}"
          >
            <span class="text-base text-zinc-400 ${currentAnswer === 0 ? 'text-white' : ''}">—</span>
            <span>Nevím / Neutrální</span>
          </button>

          <!-- Nesouhlasím (-1) -->
          <button 
            onclick="window.calcHandleAnswer(-1)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${currentAnswer === -1 ? 'bg-rose-700 text-white border-rose-700 shadow-sm' : 'bg-white hover:bg-rose-50 text-zinc-900 border-zinc-300 hover:border-rose-600'}"
          >
            <span class="text-base text-rose-600 ${currentAnswer === -1 ? 'text-white' : ''}">✖</span>
            <span>Ne / Nesouhlasím</span>
          </button>

        </div>

      </div>

      <!-- Navigace mezi otázkami (Předchozí / Přeskočit) -->
      <div class="flex items-center justify-between text-xs text-zinc-500 mb-4 px-1">
        <button 
          ${state.questionIndex > 0 ? `onclick="window.calcPrevQuestion()"` : 'disabled'}
          class="hover:text-zinc-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-medium flex items-center gap-1.5 cursor-pointer py-1.5 px-3 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-50 shadow-2xs"
        >
          <span>←</span>
          <span>Předchozí otázka</span>
        </button>

        <span class="text-xs font-medium text-zinc-500">
          Otázka ${state.questionIndex + 1} z ${totalQuestions}
        </span>

        <button 
          onclick="window.calcHandleAnswer(0)"
          class="hover:text-zinc-900 transition-colors font-medium flex items-center gap-1.5 cursor-pointer py-1.5 px-3 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-50 shadow-2xs"
        >
          <span>Přeskočit</span>
          <span>→</span>
        </button>
      </div>

      <!-- Číselník otázek: zarovnaný přesně na šířku okna s otázkou ve více řádcích -->
      <div class="w-full bg-white border border-zinc-200 rounded-xl p-4 sm:p-5 shadow-xs">
        <div class="flex items-center justify-between text-xs text-zinc-500 font-medium mb-3 pb-2 border-b border-zinc-100">
          <span class="text-zinc-800 font-semibold">Číselník otázek:</span>
          <span>Zodpovězeno ${Object.keys(state.answers).length} z ${totalQuestions}</span>
        </div>

        <div class="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 gap-1.5 sm:gap-2 w-full">
          ${questionsToUse.map((item, idx) => {
            const isAnswered = state.answers[item.id] !== undefined;
            const isCurrent = idx === state.questionIndex;
            return `
              <button 
                onclick="window.calcJumpQuestion(${idx})"
                title="Přejít na otázku ${idx + 1}: ${item.title || item.category}"
                class="h-8 rounded-lg flex items-center justify-center text-xs font-mono font-medium transition-all cursor-pointer border ${isCurrent ? 'bg-zinc-900 text-white border-zinc-900 font-bold shadow-xs ring-2 ring-zinc-400 ring-offset-1' : isAnswered ? 'bg-zinc-100 text-zinc-800 border-zinc-300 hover:bg-zinc-200 font-semibold' : 'bg-white text-zinc-400 border-zinc-200 hover:border-zinc-300 hover:text-zinc-700 hover:bg-zinc-50'}"
              >
                ${idx + 1}
              </button>
            `;
          }).join('')}
        </div>
      </div>

    </main>
  `;
}

function renderResultsView(): string {
  const currentElection = ELECTIONS_DATA[state.year];
  const questionsToUse = getCurrentQuestions(state.year, state.quizMode);
  const topMatch = state.partyScores[0];
  const selectedPartyId = state.selectedPartyForDetails || topMatch?.party.id;
  const selectedParty = currentElection.parties.find(p => p.id === selectedPartyId) || topMatch?.party;

  return `
    <main class="max-w-4xl mx-auto px-4 sm:px-6 py-10 flex-1 animate-fadeIn">
      
      <!-- Titulek výsledků -->
      <div class="mb-8">
        <div class="flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
          <span>Výsledky kalkulačky</span>
          <span>·</span>
          <span>Volby ${state.year}</span>
          ${state.quizMode === 'expanded' ? `
            <span>·</span>
            <span class="text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200 normal-case font-bold">
              Rozšířená verze (${questionsToUse.length} otázek)
            </span>
          ` : `
            <span>·</span>
            <span class="text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200 normal-case font-medium">
              Základní verze (${questionsToUse.length} otázek)
            </span>
          `}
        </div>
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            Vaše názorová shoda s kandidujícími stranami
          </h1>
          <button 
            onclick="window.calcOpenBallotModal()"
            class="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs tracking-tight shadow-sm transition-all cursor-pointer active:scale-95 shrink-0"
            title="Otevřít shrnutí a sdílet výsledek"
          >
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>Sdílet výsledek</span>
          </button>
        </div>
      </div>

      <!-- Hlavní vítězná strana (jemný pastelový podklad v barvě strany) -->
      ${topMatch ? `
        <div 
          class="rounded-2xl p-6 sm:p-8 mb-8 shadow-xs border relative overflow-hidden transition-all"
          style="background-color: ${topMatch.party.color}0D; border-color: ${topMatch.party.color}35;"
        >
          <!-- Barevná linka vítězné strany nahoře -->
          <div 
            class="absolute top-0 left-0 right-0 h-1.5"
            style="background-color: ${topMatch.party.color};"
          ></div>

          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-1">
            <div class="max-w-xl">
              <div class="mb-3">
                <div 
                  class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold tracking-wider uppercase mb-1.5"
                  style="background-color: ${topMatch.party.color}1E; color: ${topMatch.party.color};"
                >
                  <span class="w-1.5 h-1.5 rounded-full" style="background-color: ${topMatch.party.color};"></span>
                  <span>Nejvyšší programová shoda</span>
                </div>
                <h2 class="text-xl sm:text-2xl font-extrabold tracking-tight text-stone-900">
                  ${topMatch.party.fullName} (${topMatch.party.shortName})
                </h2>
              </div>

              <div class="text-xs text-stone-600 mb-3 font-medium">
                ${topMatch.party.ideology} · Osobnosti: <strong class="text-stone-800">${topMatch.party.leaders.join(', ')}</strong>
              </div>
              <p class="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal mb-4 text-justify [hyphens:auto]">
                ${topMatch.party.description}
              </p>
              <div class="p-3.5 rounded-xl bg-white/90 border border-stone-200/80 text-xs text-stone-800 text-justify [hyphens:auto] shadow-2xs">
                <strong class="text-stone-900">Programové pilíře:</strong> ${topMatch.party.programHighlight}
              </div>
            </div>

            <div class="flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm min-w-[145px] shrink-0 self-center sm:self-auto text-center">
              <span class="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900 font-mono">
                ${topMatch.matchPercentage}%
              </span>
              <span class="text-[11px] uppercase tracking-wider text-stone-500 mt-1 font-bold">
                Shoda
              </span>
              <div class="mt-3 flex flex-col gap-2 w-full">
                <button 
                  onclick="window.calcOpenPartyModal('${topMatch.party.id}', ${state.year})"
                  class="text-[11px] text-stone-600 hover:text-stone-900 underline font-medium cursor-pointer"
                >
                  Detail strany ↗
                </button>
                <button 
                  onclick="window.calcOpenBallotModal()"
                  class="px-2.5 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-[11px] font-semibold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>Sdílet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Kompletní žebříček stran -->
      <div class="bg-white border border-zinc-200 rounded-xl p-6 mb-8 shadow-xs">
        <h3 class="text-base font-bold text-zinc-900 mb-1">
          Celkové pořadí všech kandidujících stran
        </h3>
        <p class="text-xs text-zinc-500 mb-5">
          Klepnutím na libovolnou stranu zobrazíte podrobný rozbor konkrétních otázek.
        </p>

        <div class="space-y-3">
          ${state.partyScores.map((score, index) => {
            const isSelected = selectedParty?.id === score.party.id;
            return `
              <div 
                onclick="window.calcSelectPartyDetails('${score.party.id}')"
                class="p-3.5 rounded-lg border transition-all cursor-pointer ${isSelected ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-200 hover:border-zinc-300 bg-white'}"
              >
                <div class="flex items-center justify-between mb-2 text-xs">
                  <div class="flex items-center gap-3">
                    <span class="w-5 h-5 rounded bg-zinc-100 text-zinc-700 font-bold flex items-center justify-center text-[10px]">
                      ${index + 1}
                    </span>
                    <div class="w-1.5 h-6 rounded-full shrink-0" style="background-color: ${score.party.color};"></div>
                    <div>
                      <strong class="text-zinc-900 text-sm font-semibold">${score.party.shortName}</strong>
                      <span class="text-zinc-500 text-xs hidden sm:inline ml-1">– ${score.party.fullName}</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <button 
                      onclick="event.stopPropagation(); window.calcOpenPartyModal('${score.party.id}', ${state.year})"
                      class="text-[11px] text-zinc-400 hover:text-zinc-900 font-medium underline"
                    >
                      profil
                    </button>
                    <div class="font-mono font-bold text-sm text-zinc-900">
                      ${score.matchPercentage}%
                    </div>
                  </div>
                </div>

                <!-- Match bar -->
                <div class="w-full bg-zinc-100 h-2.5 rounded-full overflow-hidden mb-1.5">
                  <div 
                    class="h-full rounded-full transition-all duration-300" 
                    style="width: ${score.matchPercentage}%; background-color: ${score.party.color};"
                  ></div>
                </div>

                <div class="flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Shoda: <strong>${score.agreeCount}</strong> · Rozpor: <strong>${score.disagreeCount}</strong></span>
                  <span>Skutečný výsledek ${state.year}: <strong class="text-zinc-800">${score.party.historicalPercentage}%</strong></span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Rozbor otázek -->
      ${selectedParty ? `
        <div class="bg-white border border-zinc-200 rounded-xl p-6 mb-8 shadow-xs">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-zinc-100 mb-5">
            <div class="flex items-center gap-3">
              <div class="w-2 h-10 rounded-full shrink-0" style="background-color: ${selectedParty.color};"></div>
              <div>
                <span class="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">Podrobný rozbor</span>
                <h3 class="text-base font-bold text-zinc-900">
                  Vaše odpovědi vs. ${selectedParty.fullName} (${selectedParty.shortName})
                </h3>
              </div>
            </div>

            <!-- Filtry shody / rozporu -->
            <div class="flex items-center gap-1 p-1 bg-zinc-100 rounded-lg text-xs font-medium">
              <button 
                onclick="window.calcSetComparisonFilter('all')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${state.comparisonFilter === 'all' ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
              >
                Všechny (${questionsToUse.length})
              </button>
              <button 
                onclick="window.calcSetComparisonFilter('agree')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${state.comparisonFilter === 'agree' ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
              >
                Shoda
              </button>
              <button 
                onclick="window.calcSetComparisonFilter('disagree')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${state.comparisonFilter === 'disagree' ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
              >
                Rozpor
              </button>
            </div>
          </div>

          <div class="space-y-3">
            ${questionsToUse
              .filter(q => {
                const userVal = state.answers[q.id] ?? 0;
                const partyVal = q.partyStances[selectedParty.id] ?? 0;
                if (state.comparisonFilter === 'agree') {
                  return userVal !== 0 && partyVal !== 0 && userVal === partyVal;
                }
                if (state.comparisonFilter === 'disagree') {
                  return userVal !== 0 && partyVal !== 0 && userVal !== partyVal;
                }
                return true;
              })
              .map(q => {
                const userVal = state.answers[q.id] ?? 0;
                const partyVal = q.partyStances[selectedParty.id] ?? 0;
                const isMatch = userVal !== 0 && partyVal !== 0 && userVal === partyVal;
                const isOpposite = userVal !== 0 && partyVal !== 0 && userVal !== partyVal;

                const labelUser = userVal === 1 ? 'Ano' : userVal === -1 ? 'Ne' : 'Nevím';
                const labelParty = partyVal === 1 ? 'Ano' : partyVal === -1 ? 'Ne' : 'Neutrální';

                return `
                  <div class="p-3.5 rounded-lg border text-xs ${isMatch ? 'border-emerald-200 bg-emerald-50/20' : isOpposite ? 'border-rose-200 bg-rose-50/20' : 'border-zinc-200 bg-white'}">
                    <div class="flex items-center justify-between mb-1.5">
                      <span class="text-zinc-500 font-semibold uppercase text-[10px]">${q.category}</span>
                      <span class="text-[11px] font-semibold px-2 py-0.5 rounded ${isMatch ? 'text-emerald-700 bg-emerald-100' : isOpposite ? 'text-rose-700 bg-rose-100' : 'text-zinc-600 bg-zinc-100'}">
                        ${isMatch ? '✔ Shoda' : isOpposite ? '✖ Rozpor' : '— Neutrální'}
                      </span>
                    </div>

                    <p class="font-medium text-zinc-900 mb-2 leading-relaxed">
                      ${q.statement}
                    </p>

                    <div class="grid grid-cols-2 gap-3 pt-2 border-t border-zinc-100">
                      <div>
                        <span class="text-zinc-500 block text-[10px]">Váš hlas:</span>
                        <strong class="${userVal === 1 ? 'text-emerald-700' : userVal === -1 ? 'text-rose-700' : 'text-zinc-700'} font-semibold">
                          ${labelUser}
                        </strong>
                      </div>
                      <div>
                        <span class="text-zinc-500 block text-[10px]">Postoj ${selectedParty.shortName}:</span>
                        <strong class="${partyVal === 1 ? 'text-emerald-700' : partyVal === -1 ? 'text-rose-700' : 'text-zinc-700'} font-semibold">
                          ${labelParty}
                        </strong>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Skutečné historické výsledky -->
      <div class="bg-white border border-zinc-200 rounded-xl p-6 mb-8 shadow-xs">
        <h3 class="text-base font-bold text-zinc-900 mb-1">
          Jak tyto volby v roce ${state.year} skutečně dopadly?
        </h3>
        <p class="text-xs text-zinc-600 leading-relaxed mb-5 text-justify [hyphens:auto]">
          ${currentElection.historicalContext}
        </p>

        <div class="p-4 bg-zinc-50 rounded-lg border border-zinc-200 text-xs text-zinc-800 leading-relaxed mb-6 text-justify [hyphens:auto]">
          <strong>Povolební vývoj:</strong> ${currentElection.outcomeSummary}
        </div>

        <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
          Oficiální volební zisk stran (${state.year})
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          ${currentElection.parties.map(p => `
            <div 
              onclick="window.calcOpenPartyModal('${p.id}', ${state.year})"
              class="p-3 rounded-lg bg-zinc-50 border border-zinc-200 text-xs hover:border-zinc-300 hover:bg-zinc-100 transition-colors cursor-pointer group"
            >
              <div class="flex items-center justify-between mb-1.5">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-5 rounded-full shrink-0" style="background-color: ${p.color};"></div>
                  <div>
                    <strong class="text-zinc-900 font-semibold group-hover:underline block">${p.shortName}</strong>
                    <span class="text-[10px] text-zinc-500 truncate block">${p.fullName}</span>
                  </div>
                </div>
                <span class="font-mono font-bold text-zinc-900">${p.historicalPercentage}%</span>
              </div>
              <div class="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden mb-1.5">
                <div class="h-full rounded-full" style="width: ${Math.min(100, p.historicalPercentage * 2.2)}%; background-color: ${p.color};"></div>
              </div>
              <div class="text-[11px] text-zinc-500 flex justify-between">
                <span>Mandátů: <strong>${p.historicalSeats > 0 ? p.historicalSeats : '0'}</strong></span>
                <span class="group-hover:text-zinc-900">profil ↗</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Akční tlačítka -->
      <div class="flex flex-wrap items-center justify-center gap-3">
        <button 
          onclick="window.calcOpenBallotModal()"
          class="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs tracking-tight transition-all cursor-pointer shadow-sm border border-stone-800 flex items-center gap-2 active:scale-95"
        >
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span>Sdílet výsledek</span>
        </button>
        <button 
          onclick="window.calcShareResult()"
          class="px-5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-semibold text-xs tracking-tight transition-colors cursor-pointer"
        >
          Kopírovat text
        </button>
        <button 
          onclick="window.calcSetView('home')"
          class="px-5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-semibold text-xs tracking-tight transition-colors cursor-pointer"
        >
          Vyzkoušet jiný volební rok
        </button>
      </div>

    </main>
  `;
}

// -------------------------------------------------------------
// SLIDOVACÍ BAR DOLE NA STRÁNCE S LOGY A PROKLIKEM NA WIKIPEDII
// -------------------------------------------------------------

function renderPartySlider(): string {
  const years: ElectionYear[] = [1920, 1946, 1990];

  // Filtrovaný seznam všech stran
  const allPartiesWithYear: Array<{ party: Party; year: ElectionYear }> = [];
  years.forEach(y => {
    if (state.sliderYearFilter === 'all' || state.sliderYearFilter === y) {
      ELECTIONS_DATA[y].parties.forEach(party => {
        allPartiesWithYear.push({ party, year: y });
      });
    }
  });

  return `
    <section class="border-t border-zinc-200 bg-white py-8 px-4 sm:px-6 mt-12 shadow-xs">
      <div class="max-w-5xl mx-auto">
        
        <!-- Hlavička slidovacího baru -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-zinc-900"></span>
              <h3 class="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight">
                Strany a hnutí
              </h3>
            </div>
            <p class="text-xs text-zinc-500 mt-0.5">
              Klikněte na libovolnou stranu pro zobrazení historického profilu, programu a odkazu na Wikipedii.
            </p>
          </div>

          <!-- Filtry období & Šipky posuvu -->
          <div class="flex items-center gap-3">
            <!-- Záložky období -->
            <div class="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg text-xs font-medium">
              <button 
                onclick="window.calcSetSliderFilter('all')" 
                class="px-2.5 py-1 rounded transition-colors cursor-pointer ${state.sliderYearFilter === 'all' ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
              >
                Vše (22)
              </button>
              <button 
                onclick="window.calcSetSliderFilter(1920)" 
                class="px-2.5 py-1 rounded transition-colors cursor-pointer ${state.sliderYearFilter === 1920 ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
              >
                1920
              </button>
              <button 
                onclick="window.calcSetSliderFilter(1946)" 
                class="px-2.5 py-1 rounded transition-colors cursor-pointer ${state.sliderYearFilter === 1946 ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
              >
                1946
              </button>
              <button 
                onclick="window.calcSetSliderFilter(1990)" 
                class="px-2.5 py-1 rounded transition-colors cursor-pointer ${state.sliderYearFilter === 1990 ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
              >
                1990
              </button>
            </div>

            <!-- Posuvná navigační tlačítka -->
            <div class="flex items-center gap-1.5">
              <button 
                onclick="window.calcScrollSlider('left')" 
                aria-label="Posunout doleva" 
                class="w-8 h-8 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-800 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                ◀
              </button>
              <button 
                onclick="window.calcScrollSlider('right')" 
                aria-label="Posunout doprava" 
                class="w-8 h-8 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-800 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                ▶
              </button>
            </div>
          </div>
        </div>

        <!-- Samotný vodorovný slidovací bar -->
        <div 
          id="party-slider-scroll" 
          class="party-slider flex items-stretch gap-3 overflow-x-auto no-scrollbar py-2 px-0.5"
        >
          ${allPartiesWithYear.map(({ party, year }) => `
            <div 
              onclick="window.calcOpenPartyModal('${party.id}', ${year})"
              class="w-[230px] sm:w-[250px] shrink-0 bg-white rounded-xl border border-zinc-200 p-4 hover:border-zinc-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <!-- Barevný proužek nahoře v typické barvě strany -->
                <div class="h-1.5 w-full rounded-t-xl -mt-4 -mx-4 mb-3" style="background-color: ${party.color};"></div>

                <!-- Vrchní lišta: Rok & Výsledek -->
                <div class="flex items-center justify-between mb-2.5">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                    Volby ${year}
                  </span>
                  <span class="text-xs font-mono font-bold text-zinc-900">
                    ${party.historicalPercentage}%
                  </span>
                </div>

                <!-- Barevný proužek a název strany v době voleb -->
                <div class="flex items-start gap-2.5 mb-2">
                  <div class="w-1.5 h-9 rounded-full shrink-0 mt-0.5" style="background-color: ${party.color};"></div>
                  <div class="overflow-hidden">
                    <h4 class="font-extrabold text-sm text-zinc-900 truncate group-hover:underline">
                      ${party.shortName}
                    </h4>
                    <p class="text-[11px] text-zinc-700 font-medium line-clamp-1" title="${party.fullName}">
                      ${party.fullName}
                    </p>
                  </div>
                </div>

                <div class="mb-2">
                  <span class="inline-block px-1.5 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600 border border-zinc-200 truncate max-w-full">
                    ${party.ideology}
                  </span>
                </div>

                <p class="text-[11px] text-zinc-600 line-clamp-3 leading-relaxed mb-3 text-justify [hyphens:auto]">
                  ${party.description}
                </p>
              </div>

              <!-- Spodní proklik na popis & Wikipedii -->
              <div class="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500 group-hover:text-zinc-900">
                <span class="font-medium">Popis & Wikipedie</span>
                <span class="font-bold text-xs group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// -------------------------------------------------------------
// MODÁLNÍ OKNO DETAILU STRANY (POPIS + WIKIPEDIE)
// -------------------------------------------------------------

function renderPartyModal(): string {
  if (!state.activeModalParty) return '';
  const { party, year } = state.activeModalParty;

  return `
    <div 
      id="party-modal-backdrop"
      class="fixed inset-0 z-50 bg-zinc-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onclick="if (event.target.id === 'party-modal-backdrop') window.calcClosePartyModal();"
    >
      <div 
        class="max-w-xl w-full bg-white rounded-2xl border border-zinc-200 shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto animate-fadeIn text-zinc-900 overflow-hidden"
        onclick="event.stopPropagation();"
      >
        <!-- Barevný proužek nahoře v barvě strany -->
        <div class="h-2 w-full rounded-t-2xl -mt-6 sm:-mt-8 -mx-6 sm:-mx-8 mb-6" style="background-color: ${party.color};"></div>
        
        <!-- Zavírací tlačítko -->
        <button 
          onclick="window.calcClosePartyModal()" 
          aria-label="Zavřít"
          class="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
        >
          ✕
        </button>

        <!-- Hlavička s barevným proužkem a dobovým názvem -->
        <div class="flex items-start gap-3.5 mb-5 pr-8">
          <div class="w-2 h-14 rounded-full shrink-0 shadow-xs" style="background-color: ${party.color};"></div>
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1.5">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-zinc-900 text-white font-mono">
                Volby ${year}
              </span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                ${party.ideology}
              </span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-zinc-900 leading-tight">
              ${party.fullName}
            </h3>
            <div class="flex items-center gap-2 mt-1.5">
              <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${party.color};"></span>
              <span class="text-xs text-zinc-600 font-medium">
                Dobový název a zkratka: <strong class="text-zinc-900 font-bold">${party.shortName}</strong>
              </span>
            </div>
          </div>
        </div>

        <!-- Statistiky volebního výsledku -->
        <div class="grid grid-cols-2 gap-3 p-3.5 bg-zinc-50 rounded-xl border border-zinc-200 mb-5 text-xs">
          <div>
            <span class="text-zinc-500 block text-[11px]">Skutečný volební zisk v roce ${year}:</span>
            <strong class="text-base font-extrabold text-zinc-900 font-mono">${party.historicalPercentage} %</strong>
          </div>
          <div>
            <span class="text-zinc-500 block text-[11px]">Získaných poslaneckých mandátů:</span>
            <strong class="text-base font-extrabold text-zinc-900 font-mono">${party.historicalSeats > 0 ? party.historicalSeats : '0 křesel'}</strong>
          </div>
        </div>

        <!-- Významné osobnosti -->
        <div class="mb-4 text-xs">
          <span class="text-zinc-400 uppercase tracking-wider font-bold block mb-1">Klíčové osobnosti</span>
          <p class="font-semibold text-zinc-800">
            ${party.leaders.join(' · ')}
          </p>
        </div>

        <!-- Historický popis (Wikipedie data) -->
        <div class="mb-4 text-xs sm:text-sm text-zinc-700 leading-relaxed space-y-2">
          <span class="text-zinc-400 uppercase tracking-wider font-bold block text-xs">Historický profil & kontext</span>
          <p class="text-justify [hyphens:auto]">
            ${party.description}
          </p>
        </div>

        <!-- Programový pilíř -->
        <div class="p-3.5 rounded-lg bg-zinc-100 border border-zinc-200 text-xs text-zinc-800 leading-relaxed mb-6 text-justify [hyphens:auto]">
          <strong class="text-zinc-900">Hlavní programová teze:</strong> ${party.programHighlight}
        </div>

        <!-- Akční tlačítka v patce modálu -->
        <div class="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-zinc-200">
          ${party.wikipediaUrl ? `
            <a 
              href="${party.wikipediaUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-full sm:w-auto flex-1 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs tracking-tight transition-colors text-center flex items-center justify-center gap-1.5 shadow-xs cursor-pointer border border-zinc-800"
            >
              <span>Otevřít článek na Wikipedii</span>
              <span class="text-xs">↗</span>
            </a>
          ` : ''}

          <button 
            onclick="window.calcStartQuiz(${year}); window.calcClosePartyModal();"
            class="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold text-xs tracking-tight transition-colors text-center cursor-pointer border border-zinc-200"
          >
            Spustit kalkulačku pro rok ${year}
          </button>
        </div>

      </div>
    </div>
  `;
}

function renderSystemModal(): string {
  if (!state.activeModalSystemYear) return '';
  const year = state.activeModalSystemYear;
  const meta = ELECTIONS_DATA[year];
  const sys = meta.electionSystem;

  return `
    <div 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-xs animate-fadeIn"
      onclick="if (event.target === this) window.calcCloseSystemModal()"
    >
      <div class="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-200">
        
        <!-- Hlavička modálu -->
        <div class="flex items-start justify-between gap-4 pb-4 border-b border-zinc-200 mb-6">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-bold text-zinc-500 uppercase tracking-wider font-mono">
                Volební systém a pravidla · ${year}
              </span>
              <span class="text-zinc-300">·</span>
              <span class="text-xs text-zinc-500 font-medium">Účast ${meta.turnout}</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight leading-snug">
              ${meta.title}
            </h3>
            <p class="text-xs sm:text-sm text-zinc-600 mt-1">
              ${meta.subtitle}
            </p>
          </div>

          <!-- Zavírací křížek -->
          <button 
            onclick="window.calcCloseSystemModal()"
            class="text-zinc-400 hover:text-zinc-800 p-1 rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer shrink-0"
            aria-label="Zavřít"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- 4 Sekce informací -->
        <div class="space-y-4 mb-6">
          
          <!-- 1. Do jakého tělesa se volilo -->
          <div class="p-4 rounded-lg bg-zinc-50 border border-zinc-200">
            <div class="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-wider mb-1.5">
              <svg class="w-4 h-4 text-zinc-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Zastupitelské těleso (Parlament)</span>
            </div>
            <p class="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify [hyphens:auto]">
              ${sys.body}
            </p>
          </div>

          <!-- 2. Volební systém a pravidla -->
          <div class="p-4 rounded-lg bg-zinc-50 border border-zinc-200">
            <div class="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-wider mb-1.5">
              <svg class="w-4 h-4 text-zinc-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span>Volební systém & přepočet mandátů</span>
            </div>
            <p class="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify [hyphens:auto]">
              ${sys.system}
            </p>
          </div>

          <!-- Dvousloupec: Kdo mohl volit vs Kdo mohl být zvolen -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <!-- Aktivní volební právo -->
            <div class="p-4 rounded-lg bg-zinc-50 border border-zinc-200">
              <div class="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-wider mb-1.5">
                <svg class="w-4 h-4 text-zinc-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Kdo mohl volit (Aktivní právo)</span>
              </div>
              <p class="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify [hyphens:auto]">
                ${sys.franchise}
              </p>
            </div>

            <!-- Pasivní volební právo -->
            <div class="p-4 rounded-lg bg-zinc-50 border border-zinc-200">
              <div class="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-wider mb-1.5">
                <svg class="w-4 h-4 text-zinc-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Kdo mohl kandidovat (Pasivní právo)</span>
              </div>
              <p class="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify [hyphens:auto]">
                ${sys.eligibility}
              </p>
            </div>

          </div>

          <!-- Zajímavosti k volbám -->
          <div class="p-4 rounded-lg bg-zinc-100/70 border border-zinc-200">
            <div class="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-wider mb-2">
              <svg class="w-4 h-4 text-zinc-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Zajímavosti a historické reálie</span>
            </div>
            <ul class="space-y-2 text-xs sm:text-sm text-zinc-700">
              ${sys.trivia.map(t => `
                <li class="flex items-start gap-2">
                  <span class="text-zinc-400 font-bold select-none">•</span>
                  <span class="text-justify [hyphens:auto]">${t}</span>
                </li>
              `).join('')}
            </ul>
          </div>

        </div>

        <!-- Akční tlačítka v patce modálu -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-zinc-200">
          <button 
            onclick="window.calcCloseSystemModal()"
            class="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold text-xs tracking-tight transition-colors text-center cursor-pointer border border-zinc-200"
          >
            Zavřít okno
          </button>

          <button 
            onclick="window.calcStartQuiz(${year}); window.calcCloseSystemModal();"
            class="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm tracking-tight transition-colors text-center flex items-center justify-center gap-2 shadow-xs cursor-pointer border border-zinc-800"
          >
            <span>Spustit kalkulačku pro rok ${year}</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </div>
  `;
}

function renderToast(): string {
  if (!state.toastMessage) return '';
  return `
    <div class="fixed bottom-6 right-6 z-50 bg-zinc-900 text-white px-4 py-2.5 rounded-lg shadow-lg text-xs font-medium animate-fadeIn border border-zinc-700">
      <span>${state.toastMessage}</span>
    </div>
  `;
}

function renderFooter(): string {
  return `
    <footer class="border-t border-zinc-200 py-8 px-4 sm:px-6 text-zinc-500 text-xs bg-[#f4f4f5]">
      <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div class="text-[11px] text-zinc-500">
          vytvořil po večerech Adam Simota :)
        </div>
        <div class="flex items-center gap-2">
          <span class="font-bold text-zinc-900">Historická volební kalkulačka (HVK)</span>
          <span class="text-zinc-300">·</span>
          <span>1920 · 1946 · 1990</span>
        </div>
      </div>
    </footer>
  `;
}

function renderApp() {
  const root = document.getElementById('app');
  if (!root) {
    console.error('Historická kalkulačka: Element s id="app" nebyl v dokumentu nalezen.');
    return;
  }

  try {
    let viewContent = '';
    switch (state.view) {
      case 'home':
        viewContent = renderHomeView();
        break;
      case 'quiz':
        viewContent = renderQuizView();
        break;
      case 'survey':
        viewContent = renderSurveyView(state.surveyState, state.year, state.quizMode);
        break;
      case 'results':
        viewContent = renderResultsView();
        break;
      case 'admin':
        viewContent = renderAnalyticsDashboardView(state.dashboardState);
        break;
    }

    const showSlider = state.view !== 'survey' && state.view !== 'admin';

    root.innerHTML = `
      ${renderHeader()}
      ${viewContent}
      ${showSlider ? renderPartySlider() : ''}
      ${renderFooter()}
      ${renderPartyModal()}
      ${renderSystemModal()}
      ${renderBallotShareSection(state.year, state.quizMode, state.partyScores, state.ballotShareState)}
      ${renderToast()}
    `;

    attachEventListeners();
  } catch (err) {
    console.error('Chyba při vykreslování Historické kalkulačky:', err);
    root.innerHTML = `
      <div class="max-w-xl mx-auto my-12 p-6 bg-white rounded-xl border border-zinc-200 text-center font-sans">
        <h2 class="text-base font-bold text-zinc-900 mb-2">Historická volební kalkulačka se načítá...</h2>
        <p class="text-xs text-zinc-500 mb-4">Pokud tato zpráva nezmizí, zkuste prosím obnovit stránku (F5 / Ctrl+R).</p>
      </div>
    `;
  }
}

function attachEventListeners() {
  // Event listeners hooked via window declarations
}

// Klávesa Escape zavírá modální okna
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (state.ballotShareState?.isModalOpen) {
      state.ballotShareState.isModalOpen = false;
      document.body.classList.remove('overflow-hidden');
      renderApp();
      return;
    }
    if (state.activeModalParty) {
      closePartyModal();
    }
    if (state.activeModalSystemYear) {
      closeSystemModal();
    }
  }
});

// Globální window metody pro HTML handlery
declare global {
  interface Window {
    calcStartQuiz: (year: ElectionYear) => void;
    calcHandleAnswer: (val: UserAnswerValue) => void;
    calcPrevQuestion: () => void;
    calcJumpQuestion: (index: number) => void;
    calcSetView: (view: AppState['view']) => void;
    calcSelectPartyDetails: (partyId: string) => void;
    calcSetComparisonFilter: (filter: 'all' | 'agree' | 'disagree') => void;
    calcToggleParties: (year: ElectionYear) => void;
    calcShareResult: () => void;
    calcShareBallot: () => void;
    calcDownloadBallot: () => void;
    calcOpenBallotModal: () => void;
    calcCloseBallotModal: () => void;
    calcOpenShareModal: () => void;
    calcCloseShareModal: () => void;
    calcSetSliderFilter: (filter: 'all' | ElectionYear) => void;
    calcScrollSlider: (direction: 'left' | 'right') => void;
    calcOpenPartyModal: (partyId: string, year: ElectionYear) => void;
    calcClosePartyModal: () => void;
    calcOpenSystemModal: (year: ElectionYear) => void;
    calcCloseSystemModal: () => void;
    calcSetYearMode: (year: ElectionYear, mode: 'standard' | 'expanded') => void;
    calcToggleContextTooltip: (qId: number) => void;
    calcCloseContextTooltip: () => void;
    calcSelectSurveyAge: (age: string) => void;
    calcSelectSurveyVote: (vote: string) => void;
    calcUpdateCustomVote: (text: string) => void;
    calcSubmitSurvey: () => void;
    calcSkipSurvey: () => void;
    calcRefreshStats: () => void;
    calcExportCSV: () => void;
    calcSelectCorrelationParty: (partyName: string) => void;
    calcVerifyPassword: () => void;
    calcAdminLogout: () => void;
  }
}

window.calcStartQuiz = (y) => startQuiz(y);
window.calcHandleAnswer = (val) => handleAnswer(val);
window.calcPrevQuestion = () => {
  if (state.questionIndex > 0) {
    state.questionIndex--;
    state.showHistoricalNote = false;
    state.activeContextTooltipId = null;
    renderApp();
  }
};
window.calcJumpQuestion = (idx) => {
  state.questionIndex = idx;
  state.showHistoricalNote = false;
  state.activeContextTooltipId = null;
  renderApp();
};
window.calcSetView = (v) => setView(v);
window.calcSelectPartyDetails = (pId) => {
  state.selectedPartyForDetails = pId;
  renderApp();
};
window.calcSetComparisonFilter = (f) => {
  state.comparisonFilter = f;
  renderApp();
};
window.calcToggleParties = (y) => {
  state.expandedPartiesYear = state.expandedPartiesYear === y ? null : y;
  renderApp();
};
window.calcSetSliderFilter = (f) => {
  state.sliderYearFilter = f;
  renderApp();
};
window.calcScrollSlider = (dir) => scrollPartySlider(dir);
window.calcOpenPartyModal = (pId, y) => openPartyModal(pId, y);
window.calcClosePartyModal = () => closePartyModal();
window.calcOpenSystemModal = (y) => openSystemModal(y);
window.calcCloseSystemModal = () => closeSystemModal();
window.calcSetYearMode = (y, m) => {
  state.selectedYearMode[y] = m;
  renderApp();
};
window.calcToggleContextTooltip = (qId) => {
  state.activeContextTooltipId = state.activeContextTooltipId === qId ? null : qId;
  renderApp();
};
window.calcCloseContextTooltip = () => {
  state.activeContextTooltipId = null;
  renderApp();
};

window.calcSelectSurveyAge = (age) => {
  state.surveyState.selectedAge = age;
  renderApp();
};

window.calcSelectSurveyVote = (vote) => {
  state.surveyState.selectedVote2021 = vote;
  renderApp();
};

window.calcUpdateCustomVote = (text) => {
  state.surveyState.customVoteText = text;
};

window.calcSubmitSurvey = () => {
  handleSurveySubmit();
};

window.calcSkipSurvey = () => {
  handleSurveySkip();
};

window.calcRefreshStats = () => {
  loadDashboardStats();
};

window.calcExportCSV = () => {
  if (state.dashboardState.summary?.recentSubmissions) {
    downloadSubmissionsCSV(state.dashboardState.summary.recentSubmissions);
  } else {
    showToast('Zatím nejsou načtena data pro export');
  }
};

window.calcSelectCorrelationParty = (partyName) => {
  state.dashboardState.selectedCorrelationParty = partyName;
  renderApp();
};

window.calcVerifyPassword = () => {
  handleVerifyAdminPassword();
};

window.calcAdminLogout = () => {
  handleAdminLogout();
};

window.calcShareBallot = async () => {
  showToast('Připravuji výsledek ke sdílení...');
  try {
    const res = await shareBallotCard({
      year: state.year,
      quizMode: state.quizMode,
      scores: state.partyScores
    });
    if (res.method === 'share' && res.success) {
      showToast('Výsledek byl úspěšně sdílen!');
    } else if (res.method === 'download') {
      showToast('Výsledek byl stažen (PNG)');
    }
  } catch (err) {
    console.error('Chyba při sdílení výsledku:', err);
    showToast('Stahuji výsledek...');
    await downloadBallotCard({
      year: state.year,
      quizMode: state.quizMode,
      scores: state.partyScores
    });
  }
};

window.calcDownloadBallot = async () => {
  showToast('Stahuji výsledek v HD rozlišení...');
  try {
    await downloadBallotCard({
      year: state.year,
      quizMode: state.quizMode,
      scores: state.partyScores
    });
    showToast('Výsledek byl stažen (PNG)');
  } catch (err) {
    console.error('Chyba při stahování:', err);
    showToast('Nepodařilo se stáhnout výsledek');
  }
};

window.calcOpenBallotModal = () => {
  state.ballotShareState.isModalOpen = true;
  document.body.classList.add('overflow-hidden');
  renderApp();
};

window.calcCloseBallotModal = () => {
  state.ballotShareState.isModalOpen = false;
  document.body.classList.remove('overflow-hidden');
  renderApp();
};

window.calcOpenShareModal = window.calcOpenBallotModal;
window.calcCloseShareModal = window.calcCloseBallotModal;

window.calcShareResult = () => {
  const top = state.partyScores[0];
  const shareText = top 
    ? `V Historické volební kalkulačce pro rok ${state.year} mi vyšla nejvyšší shoda s: ${top.party.fullName} (${top.matchPercentage} %)!`
    : `Vyzkoušejte Historickou volební kalkulačku (1920, 1946, 1990)!`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareText).then(() => {
      showToast('Zkopírováno do schránky');
    }).catch(() => {
      showToast(shareText);
    });
  } else {
    showToast(shareText);
  }
};

// Detekce skryté adresy statistik pouze přes URL (#statistiky, #stats, ?statistiky, ?stats, #admin atd.)
function checkAdminRoute() {
  const hash = (window.location.hash || '').toLowerCase();
  const search = (window.location.search || '').toLowerCase();
  const path = (window.location.pathname || '').toLowerCase();
  const urlParams = new URLSearchParams(window.location.search);

  const isStatsRoute =
    hash === '#statistiky' ||
    hash === '#stats' ||
    hash === '#admin' ||
    urlParams.has('statistiky') ||
    urlParams.has('stats') ||
    urlParams.get('admin') === '1' ||
    urlParams.get('view') === 'admin' ||
    urlParams.get('view') === 'statistiky' ||
    urlParams.get('view') === 'stats' ||
    search.includes('statistiky') ||
    search.includes('stats') ||
    path.endsWith('/statistiky') ||
    path.endsWith('/stats') ||
    path.endsWith('/admin');

  if (isStatsRoute) {
    setView('admin');
  }
}

window.addEventListener('hashchange', checkAdminRoute);
window.addEventListener('popstate', checkAdminRoute);

// Záznam anonymního zobrazení stránky
recordPageView();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    checkAdminRoute();
    renderApp();
  });
} else {
  checkAdminRoute();
  renderApp();
}


