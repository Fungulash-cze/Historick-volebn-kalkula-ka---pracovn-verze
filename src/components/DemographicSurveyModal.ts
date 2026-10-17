export const AGE_OPTIONS = [
  '18–24',
  '25–34',
  '35–44',
  '45–54',
  '55–64',
  '65+',
  'Nechci uvést'
];

export const VOTE_2021_OPTIONS = [
  'ANO 2011',
  'SPOLU',
  'Starostové a nezávislí',
  'Česká pirátská strana',
  'Svoboda a přímá demokracie',
  'Motoristé sobě',
  'Stačilo!',
  'Jiný subjekt',
  'Nechci uvést',
  'Nešel / nemohl jsem volit'
];

export interface SurveyState {
  selectedAge: string | null;
  selectedVote2021: string | null;
  customVoteText?: string;
  isSubmitting: boolean;
}

export function renderSurveyView(
  surveyState: SurveyState,
  year: number,
  mode: string
): string {
  const modeText = mode === 'expanded' ? 'rozšířené' : 'základní';

  return `
    <div class="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <!-- Karta dotazníku -->
      <div class="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 sm:p-8">
        
        <div class="text-center mb-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200">
            <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <span>Kalkulačka pro rok ${year} (${modeText} verze) dokončena!</span>
          </div>
          <h1 class="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
            Pomozte nám s anonymním výzkumem
          </h1>
          <p class="text-xs sm:text-sm text-zinc-600 mt-2 max-w-lg mx-auto leading-relaxed">
            Než vám zobrazíme podrobné výsledky shody s historickými stranami, budeme rádi za zodpovězení <strong>2 krátkých otázek</strong>.
          </p>
        </div>

        <!-- 1. Věková kategorie -->
        <div class="mb-8">
          <label class="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
            1. Vaše věková kategorie:
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            ${AGE_OPTIONS.map((age) => {
              const isSelected = surveyState.selectedAge === age;
              return `
                <button
                  type="button"
                  onclick="window.calcSelectSurveyAge('${age}')"
                  class="px-3 py-2.5 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                      : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200'
                  }"
                >
                  ${age}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 2. Současná voličská preference -->
        <div class="mb-8">
          <label class="block text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
            2. Vaše voličská preference:
          </label>
          <div class="space-y-2">
            ${VOTE_2021_OPTIONS.map((vote) => {
              const isSelected = surveyState.selectedVote2021 === vote;
              const isOther = vote === 'Jiný subjekt';
              return `
                <div>
                  <button
                    type="button"
                    onclick="window.calcSelectSurveyVote('${vote.replace(/'/g, "\\'")}')"
                    class="w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-medium border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                        : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200'
                    }"
                  >
                    <span>${vote}</span>
                    <span class="w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                      isSelected ? 'border-white bg-white' : 'border-zinc-300 bg-white'
                    }">
                      ${
                        isSelected
                          ? '<span class="w-2 h-2 rounded-full bg-zinc-900"></span>'
                          : ''
                      }
                    </span>
                  </button>
                  ${
                    isOther && isSelected
                      ? `
                    <div class="mt-2 px-1">
                      <input
                        type="text"
                        id="custom-vote-input"
                        value="${(surveyState.customVoteText || '').replace(/"/g, '&quot;')}"
                        oninput="window.calcUpdateCustomVote(this.value)"
                        placeholder="Napište název jiného subjektu..."
                        class="w-full px-3.5 py-2.5 text-xs rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 shadow-inner"
                        autofocus
                      />
                    </div>
                  `
                      : ''
                  }
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Garance anonymity -->
        <div class="bg-zinc-50 rounded-xl p-3.5 border border-zinc-200 mb-6 flex items-start gap-2.5 text-[11px] text-zinc-500 leading-normal">
          <svg class="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <div>
            <strong>100% anonymní:</strong> Neukládáme žádné identifikační údaje, IP adresy ani sledovací cookies. Odpovědi jsou zaznamenány bez vazby na vaši osobu a slouží výhradně pro souhrnné statistiky.
          </div>
        </div>

        <!-- Akční tlačítka -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-zinc-100">
          <button
            type="button"
            onclick="window.calcSkipSurvey()"
            class="w-full sm:w-auto text-center px-4 py-2.5 text-xs text-zinc-500 hover:text-zinc-800 font-medium transition-colors cursor-pointer"
          >
            Přeskočit a zobrazit výsledky přímo →
          </button>

          <button
            type="button"
            onclick="window.calcSubmitSurvey()"
            ${surveyState.isSubmitting ? 'disabled' : ''}
            class="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm tracking-tight transition-all text-center flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-50"
          >
            <span>${surveyState.isSubmitting ? 'Ukládám...' : 'Uložit a zobrazit mé výsledky'}</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </div>
  `;
}
