import { ElectionYear, PartyScore } from '../types.ts';

export interface BallotShareState {
  previewDataUrl: string | null;
  isGenerating: boolean;
  isModalOpen: boolean;
}

/**
 * Vykreslí modální shrnující okno ke sdílení výsledku, které se otevře
 * po kliknutí na tlačítko "Sdílet výsledek".
 * Okno je dokonale vycentrované v zorném poli (viewportu) bez nutnosti scrollovat,
 * v krémových a pastelových tónech.
 */
export function renderBallotShareSection(
  year: ElectionYear,
  quizMode: 'standard' | 'expanded',
  scores: PartyScore[],
  state: BallotShareState
): string {
  if (!state.isModalOpen) return '';

  const topMatch = scores[0];
  const partyColor = topMatch ? topMatch.party.color : '#B45309';

  return `
    <div 
      id="ballot-modal-backdrop"
      onclick="if (event.target === this) window.calcCloseBallotModal();"
      class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
    >
      <div class="relative max-w-md sm:max-w-lg w-full max-h-[90vh] bg-[#FAF7F2] border border-[#E8E1D5] rounded-3xl shadow-2xl p-4 sm:p-6 flex flex-col items-center overflow-hidden my-auto">
        
        <!-- Barevná linka odkazující na vítěznou stranu -->
        <div 
          class="absolute top-0 left-0 right-0 h-2"
          style="background-color: ${partyColor};"
        ></div>

        <!-- Zavírací tlačítko -->
        <button 
          onclick="window.calcCloseBallotModal()"
          class="absolute top-3.5 right-3.5 text-stone-400 hover:text-stone-800 p-1.5 rounded-full hover:bg-stone-200/60 transition-colors cursor-pointer"
          aria-label="Zavřít"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Hlavička modálního okna -->
        <div class="text-center mt-1 mb-3">
          <span class="text-[11px] font-bold text-stone-500 uppercase tracking-widest block mb-0.5">
            Sdílení výsledku
          </span>
          <h3 id="share-modal-title" class="text-lg sm:text-xl font-extrabold text-stone-900 tracking-tight">
            Váš výsledek – Volby ${year}
          </h3>
        </div>

        <!-- Náhled grafického výsledku (perfektně dimenzovaný, aby byl celý okamžitě vidět bez scrollování) -->
        <div class="w-full flex-1 max-h-[52vh] sm:max-h-[56vh] overflow-hidden rounded-2xl border border-[#E5DEC3]/80 bg-white shadow-xs mb-4 p-2 flex items-center justify-center">
          ${state.previewDataUrl ? `
            <img 
              src="${state.previewDataUrl}" 
              alt="Výsledek voleb ${year}"
              class="max-h-[50vh] sm:max-h-[54vh] w-auto h-auto object-contain rounded-xl block mx-auto"
            />
          ` : `
            <div class="w-full aspect-[4/5] bg-stone-50 rounded-xl flex flex-col items-center justify-center p-6 text-center">
              <svg class="w-8 h-8 text-stone-400 mb-2 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              <span class="text-xs font-semibold text-stone-600">Připravuji obrázek výsledku...</span>
            </div>
          `}
        </div>

        <!-- Akční tlačítka ke sdílení a stažení -->
        <div class="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full shrink-0">
          <button 
            onclick="window.calcShareBallot()"
            id="modal-share-btn"
            class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs tracking-tight transition-all shadow-sm cursor-pointer active:scale-95"
          >
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>Sdílet výsledek</span>
          </button>

          <button 
            onclick="window.calcDownloadBallot()"
            id="modal-download-btn"
            class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-[#DDD5C7] font-semibold text-xs tracking-tight transition-all cursor-pointer active:scale-95 shadow-2xs"
          >
            <svg class="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Stáhnout PNG</span>
          </button>
        </div>

      </div>
    </div>
  `;
}
