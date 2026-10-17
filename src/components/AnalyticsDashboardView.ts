import { AnalyticsSummary } from '../types.ts';
import { ADMIN_EMAIL } from '../services/adminAuthService.ts';

export interface DashboardState {
  summary: AnalyticsSummary | null;
  isLoading: boolean;
  selectedCorrelationParty: string | null;
  authEmail: string | null;
  authError: string | null;
  isLoggingIn: boolean;
}

export function renderAnalyticsDashboardView(state: DashboardState): string {
  const isAuthorized =
    state.authEmail && state.authEmail.toLowerCase() === ADMIN_EMAIL.toLowerCase();

  // 1. Nepřihlášený uživatel nebo nepovolený účet -> Zobrazit přihlašovací bránu
  if (!isAuthorized) {
    return `
      <div class="max-w-md mx-auto px-4 py-16 sm:py-24">
        <div class="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 sm:p-8 text-center">
          
          <div class="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mx-auto mb-4 text-zinc-900">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>

          <h1 class="text-xl font-black text-zinc-900 tracking-tight mb-2">
            Administrátorský přístup
          </h1>
          <p class="text-xs text-zinc-500 mb-6 leading-relaxed">
            Statistiky projektu a surová data jsou chráněna na úrovni databáze. Přístup je povolen pouze pro ověřený Google účet správce.
          </p>

          ${
            state.authError
              ? `
            <div class="mb-5 p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs text-left">
              <strong>Přístup odepřen:</strong> ${state.authError}
            </div>
          `
              : ''
          }

          <div class="space-y-3">
            <button
              type="button"
              onclick="window.calcAdminLogin()"
              ${state.isLoggingIn ? 'disabled' : ''}
              class="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm tracking-tight transition-all flex items-center justify-center gap-2.5 shadow-sm cursor-pointer disabled:opacity-50"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>${state.isLoggingIn ? 'Přihlašuji...' : `Přihlásit se přes Google (${ADMIN_EMAIL})`}</span>
            </button>

            ${
              state.authEmail && !isAuthorized
                ? `
              <button
                type="button"
                onclick="window.calcAdminLogout()"
                class="w-full py-2.5 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Odhlásit současný účet (${state.authEmail})
              </button>
            `
                : ''
            }

            <button
              type="button"
              onclick="window.calcSetView('home')"
              class="w-full text-center py-2 text-xs text-zinc-500 hover:text-zinc-800 font-medium transition-colors cursor-pointer"
            >
              ← Zpět na úvodní stránku
            </button>
          </div>

        </div>
      </div>
    `;
  }

  // 2. Probíhá načítání dat z Firestore
  if (state.isLoading || !state.summary) {
    return `
      <div class="max-w-4xl mx-auto px-4 py-20 text-center">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-zinc-200 border-t-zinc-900 mb-4"></div>
        <h2 class="text-base font-bold text-zinc-900">Načítám zabezpečená data projektu...</h2>
        <p class="text-xs text-zinc-500 mt-1">Ověřuji administrátorská oprávnění na serveru Google.</p>
      </div>
    `;
  }

  const {
    totalPageViews,
    totalSubmissions,
    submissionsByYear,
    submissionsByMode,
    ageDistribution,
    voted2021Distribution,
    correlations,
    recentSubmissions
  } = state.summary;

  const totalCompleted = totalSubmissions || 1; // avoid division by 0

  // Correlation party list
  const correlationParties = Object.keys(correlations);
  const activeParty = state.selectedCorrelationParty || correlationParties[0] || null;
  const activeCorrelations = activeParty ? correlations[activeParty] || {} : {};

  return `
    <div class="max-w-5xl mx-auto px-4 py-8 sm:py-12">
      
      <!-- Horní navigační lišta dashboardu -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200">
        <div>
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 text-[11px] font-bold mb-1.5 uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Zabezpečená administrace projektu (Admin-Only)
          </div>
          <h1 class="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
            Statistiky návštěvnosti a výsledků
          </h1>
          <p class="text-xs text-zinc-500 mt-1">
            Přihlášen jako správce: <strong class="text-zinc-800">${state.authEmail}</strong>
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onclick="window.calcRefreshStats()"
            class="px-3 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer border border-zinc-200"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.03 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Obnovit</span>
          </button>

          <button
            type="button"
            onclick="window.calcExportCSV()"
            class="px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Export do CSV</span>
          </button>

          <button
            type="button"
            onclick="window.calcAdminLogout()"
            class="px-3 py-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold transition-colors cursor-pointer border border-red-200"
          >
            Odhlásit
          </button>

          <button
            type="button"
            onclick="window.calcSetView('home')"
            class="px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            ← Zpět na web
          </button>
        </div>
      </div>

      <!-- Karta 1: Hlavní ukazatele (KPI) -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
        
        <div class="bg-white p-4 sm:p-5 rounded-xl border border-zinc-200 shadow-xs">
          <div class="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
            Návštěvnost webu
          </div>
          <div class="text-2xl sm:text-3xl font-black text-zinc-900">
            ${totalPageViews.toLocaleString('cs-CZ')}
          </div>
          <div class="text-[11px] text-zinc-400 mt-1">zobrazení stránek celkem</div>
        </div>

        <div class="bg-white p-4 sm:p-5 rounded-xl border border-zinc-200 shadow-xs">
          <div class="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
            Vyplněné kalkulačky
          </div>
          <div class="text-2xl sm:text-3xl font-black text-zinc-900">
            ${totalSubmissions.toLocaleString('cs-CZ')}
          </div>
          <div class="text-[11px] text-zinc-400 mt-1">dokončených průchodů</div>
        </div>

        <div class="bg-white p-4 sm:p-5 rounded-xl border border-zinc-200 shadow-xs">
          <div class="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
            Oblíbený ročník
          </div>
          <div class="text-2xl sm:text-3xl font-black text-zinc-900">
            ${getTopYear(submissionsByYear)}
          </div>
          <div class="text-[11px] text-zinc-400 mt-1">nejvíce vyplňovaný</div>
        </div>

        <div class="bg-white p-4 sm:p-5 rounded-xl border border-zinc-200 shadow-xs">
          <div class="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
            Poměr verzí
          </div>
          <div class="text-sm sm:text-base font-bold text-zinc-900 mt-1">
            ${Math.round((submissionsByMode.expanded / totalCompleted) * 100)} % rozšířená
          </div>
          <div class="text-[11px] text-zinc-400 mt-0.5">
            ${submissionsByMode.expanded} × 40 ot. / ${submissionsByMode.standard} × 15 ot.
          </div>
        </div>

      </div>

      <!-- Karta 2 & 3: Rozdělení dle ročníků a verzí -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        <!-- Rozdělení dle volebních roků -->
        <div class="bg-white p-5 rounded-xl border border-zinc-200 shadow-xs">
          <h2 class="text-sm font-bold text-zinc-900 mb-4 flex items-center justify-between">
            <span>Zájem o jednotlivé historické volby</span>
            <span class="text-xs font-normal text-zinc-500">${totalSubmissions} celkem</span>
          </h2>
          <div class="space-y-3">
            ${renderYearProgress(1920, submissionsByYear[1920] || 0, totalCompleted, '#2563eb')}
            ${renderYearProgress(1946, submissionsByYear[1946] || 0, totalCompleted, '#dc2626')}
            ${renderYearProgress(1990, submissionsByYear[1990] || 0, totalCompleted, '#059669')}
          </div>
        </div>

        <!-- Věkové rozložení -->
        <div class="bg-white p-5 rounded-xl border border-zinc-200 shadow-xs">
          <h2 class="text-sm font-bold text-zinc-900 mb-4 flex items-center justify-between">
            <span>Věková struktura účastníků</span>
            <span class="text-xs font-normal text-zinc-500">samostatně uvedeno</span>
          </h2>
          <div class="space-y-2.5">
            ${Object.entries(ageDistribution)
              .sort((a, b) => b[1] - a[1])
              .map(([age, count]) => {
                const pct = Math.round((count / totalCompleted) * 100);
                return `
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <span class="font-medium text-zinc-700">${age}</span>
                      <span class="text-zinc-500 font-mono">${count} (${pct} %)</span>
                    </div>
                    <div class="w-full bg-zinc-100 rounded-full h-2">
                      <div class="bg-zinc-800 h-2 rounded-full" style="width: ${pct}%"></div>
                    </div>
                  </div>
                `;
              })
              .join('')}
            ${
              Object.keys(ageDistribution).length === 0
                ? '<p class="text-xs text-zinc-400 py-4 text-center">Zatím nebyly zaznamenány žádné věkové údaje.</p>'
                : ''
            }
          </div>
        </div>

      </div>

      <!-- Karta 4: Volby 2021 a historické korelace -->
      <div class="bg-white p-6 rounded-xl border border-zinc-200 shadow-xs mb-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 class="text-base font-bold text-zinc-900">
              Korelace: Voliči 2021 vs. Vítězné historické strany
            </h2>
            <p class="text-xs text-zinc-500 mt-0.5">
              Zjistěte, které historické strany vycházely voličům dnešních politických stran.
            </p>
          </div>
        </div>

        <!-- Výběr současné strany -->
        <div class="flex flex-wrap gap-1.5 mb-6">
          ${correlationParties.map((partyName) => {
            const isSel = partyName === activeParty;
            return `
              <button
                type="button"
                onclick="window.calcSelectCorrelationParty('${partyName.replace(/'/g, "\\'")}')"
                class="px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  isSel
                    ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                    : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200'
                }"
              >
                ${partyName}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Výsledky korelací pro zvolenou stranu -->
        ${
          activeParty
            ? `
          <div class="bg-zinc-50 rounded-xl p-4 border border-zinc-200">
            <h3 class="text-xs font-bold text-zinc-700 uppercase tracking-wider mb-3">
              Historická shoda pro voliče „${activeParty}“:
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              ${Object.entries(activeCorrelations)
                .sort((a, b) => b[1] - a[1])
                .map(([histParty, count]) => {
                  return `
                    <div class="bg-white p-3 rounded-lg border border-zinc-200 flex items-center justify-between">
                      <span class="text-xs font-bold text-zinc-900">${histParty}</span>
                      <span class="text-xs font-mono font-bold text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded">
                        ${count} ×
                      </span>
                    </div>
                  `;
                })
                .join('')}
              ${
                Object.keys(activeCorrelations).length === 0
                  ? '<p class="text-xs text-zinc-400 col-span-3 text-center py-4">Pro tuto stranu zatím nebyl zaznamenán dostatek dat.</p>'
                  : ''
              }
            </div>
          </div>
        `
            : '<p class="text-xs text-zinc-400 py-6 text-center">Zatím nejsou k dispozici data pro výpočet korelací.</p>'
        }
      </div>

      <!-- Karta 5: Poslední anonymní záznamy -->
      <div class="bg-white rounded-xl border border-zinc-200 shadow-xs overflow-hidden mb-8">
        <div class="p-5 border-b border-zinc-200 flex items-center justify-between">
          <div>
            <h2 class="text-sm font-bold text-zinc-900">Poslední anonymní dokončení kalkulačky</h2>
            <p class="text-[11px] text-zinc-500 mt-0.5">Zobrazeno až 15 nejnovějších anonymních záznamů</p>
          </div>
          <button
            type="button"
            onclick="window.calcExportCSV()"
            class="text-xs text-emerald-700 hover:text-emerald-900 font-bold underline cursor-pointer"
          >
            Stáhnout vše (CSV) →
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs text-zinc-700">
            <thead class="bg-zinc-50 text-[11px] font-bold text-zinc-500 uppercase tracking-wider border-b border-zinc-200">
              <tr>
                <th class="px-4 py-2.5">Čas</th>
                <th class="px-4 py-2.5">Rok</th>
                <th class="px-4 py-2.5">Verze</th>
                <th class="px-4 py-2.5">Vítězná strana</th>
                <th class="px-4 py-2.5">Shoda</th>
                <th class="px-4 py-2.5">Věk</th>
                <th class="px-4 py-2.5">Volba 2021</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-200">
              ${recentSubmissions.slice(0, 15).map((s) => {
                const dateStr = s.createdAt
                  ? new Date(s.createdAt).toLocaleDateString('cs-CZ', {
                      day: 'numeric',
                      month: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })
                  : 'Neznámý';
                return `
                  <tr class="hover:bg-zinc-50 transition-colors">
                    <td class="px-4 py-2 text-zinc-500 whitespace-nowrap">${dateStr}</td>
                    <td class="px-4 py-2 font-bold text-zinc-900">${s.year}</td>
                    <td class="px-4 py-2 text-zinc-500">${s.mode === 'expanded' ? 'Rozšířená (40)' : 'Základní (15)'}</td>
                    <td class="px-4 py-2 font-bold text-zinc-900">${s.topPartyId.toUpperCase()}</td>
                    <td class="px-4 py-2 font-mono font-bold text-emerald-700">${s.topPartyMatch} %</td>
                    <td class="px-4 py-2 text-zinc-600">${s.ageGroup}</td>
                    <td class="px-4 py-2 text-zinc-600">${s.votedParty2021}</td>
                  </tr>
                `;
              }).join('')}
              ${
                recentSubmissions.length === 0
                  ? '<tr><td colspan="7" class="px-4 py-6 text-center text-zinc-400">Zatím nebyly zaznamenány žádné dokončené kalkulačky.</td></tr>'
                  : ''
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

function getTopYear(submissionsByYear: Record<number, number>): string {
  const entries = Object.entries(submissionsByYear);
  if (entries.length === 0) return '–';
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0][1] > 0 ? entries[0][0] : '–';
}

function renderYearProgress(
  year: number,
  count: number,
  total: number,
  colorHex: string
): string {
  const pct = Math.round((count / total) * 100);
  return `
    <div>
      <div class="flex justify-between text-xs mb-1">
        <span class="font-bold text-zinc-800">Volby ${year}</span>
        <span class="text-zinc-500 font-mono">${count} vyplnění (${pct} %)</span>
      </div>
      <div class="w-full bg-zinc-100 rounded-full h-2">
        <div class="h-2 rounded-full" style="width: ${pct}%; background-color: ${colorHex}"></div>
      </div>
    </div>
  `;
}
