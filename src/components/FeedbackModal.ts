import { ElectionYear } from '../types.ts';
import { CalculatorLengthLabel, FEEDBACK_MAX_LENGTH } from '../services/feedbackService.ts';

export interface FeedbackState {
  isOpen: boolean;
  text: string;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderFeedbackModal(
  feedbackState: FeedbackState,
  context: {
    electionId: ElectionYear | null;
    calculatorLength: CalculatorLengthLabel | null;
  }
): string {
  if (!feedbackState.isOpen) return '';

  const contextLabel = context.electionId
    ? `Volby ${context.electionId}${context.calculatorLength ? ` · ${context.calculatorLength} verze` : ''}`
    : null;

  return `
    <div
      id="feedback-modal-backdrop"
      class="fixed inset-0 z-50 bg-zinc-900/65 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-modal-title"
      onclick="if (event.target.id === 'feedback-modal-backdrop') window.calcCloseFeedbackModal();"
    >
      <div
        class="max-w-lg w-full bg-white rounded-sm border border-zinc-300 shadow-2xl overflow-hidden text-zinc-900 animate-fadeIn relative"
        onclick="event.stopPropagation();"
      >
        <div class="h-1.5 w-full bg-zinc-900"></div>

        <button
          type="button"
          onclick="window.calcCloseFeedbackModal()"
          aria-label="Zavřít"
          class="absolute top-4 right-4 w-8 h-8 rounded-sm bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
        >
          ✕
        </button>

        <div class="p-6 sm:p-8">
          <div class="pr-8 mb-4">
            <h2 id="feedback-modal-title" class="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight leading-snug">
              Zpětná vazba
            </h2>
            ${
              contextLabel && !feedbackState.isSubmitted
                ? `<p class="text-[11px] font-mono text-zinc-500 mt-1">Kontext: ${contextLabel}</p>`
                : ''
            }
          </div>

          ${
            feedbackState.isSubmitted
              ? `
            <div class="py-6 text-center space-y-4">
              <div class="w-12 h-12 rounded-sm bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-lg font-bold text-zinc-900">
                Díky moc!
              </p>
              <button
                type="button"
                onclick="window.calcCloseFeedbackModal()"
                class="px-5 py-2.5 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm tracking-tight transition-colors cursor-pointer"
              >
                Zavřít
              </button>
            </div>
          `
              : `
            <form onsubmit="event.preventDefault(); window.calcSubmitFeedback();" class="space-y-4">
              ${
                feedbackState.error
                  ? `
                <div class="p-3 rounded-sm bg-red-50 border border-red-200 text-red-800 text-xs font-medium">
                  ${escapeHtml(feedbackState.error)}
                </div>
              `
                  : ''
              }

              <div>
                <textarea
                  id="feedback-textarea"
                  rows="5"
                  maxlength="${FEEDBACK_MAX_LENGTH}"
                  placeholder="Máte tip na zlepšení nebo jste našli chybu? Napište mi."
                  oninput="window.calcUpdateFeedbackText(this.value)"
                  ${feedbackState.isSubmitting ? 'disabled' : ''}
                  class="w-full px-3.5 py-3 rounded-sm border border-zinc-300 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 transition-all resize-y"
                >${escapeHtml(feedbackState.text)}</textarea>
              </div>

              <div class="flex items-center justify-end gap-2.5 pt-1">
                <button
                  type="button"
                  onclick="window.calcCloseFeedbackModal()"
                  class="px-4 py-2.5 rounded-sm bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold text-xs tracking-tight transition-colors cursor-pointer border border-zinc-200"
                >
                  Zrušit
                </button>
                <button
                  type="submit"
                  ${feedbackState.isSubmitting ? 'disabled' : ''}
                  class="px-5 py-2.5 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm tracking-tight transition-colors cursor-pointer shadow-xs disabled:opacity-50"
                >
                  ${feedbackState.isSubmitting ? 'Odesílám...' : 'Odeslat zpětnou vazbu'}
                </button>
              </div>
            </form>
          `
          }
        </div>
      </div>
    </div>
  `;
}
