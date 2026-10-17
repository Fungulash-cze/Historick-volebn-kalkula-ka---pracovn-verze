# Rozšířená volební kalkulačka 1990 (15 základních + 25 rozšiřujících otázek)

Tento plán popisuje postup aktualizace základní sady (otázky 1–15) a vytvoření kompletní rozšířené sady (otázky 1–40) pro první svobodné volby v červnu 1990. Tím budou mít všechny tři historické volby (1920, 1946, 1990) sjednocenou strukturu s volbou mezi základní (15 otázek) a rozšířenou (40 otázek) verzí.

---

## 1. Uživatelský záměr a shrnutí podkladů

Uživatel poskytl kompletní sadu všech 40 otázek v jednom zadání (není nutné je posílat po částech):
1. **Část I – Základní sada (otázky 1–15):**
   - Kompletně aktualizované znění stávajících otázek 1–15 s vyčištěnými formulacemi a upřesněnými postoji stran.
   - Nahradí dosavadních 16 položek v poli `questions` u roku 1990.
2. **Část II – Rozšiřující sada (otázky 16–40):**
   - 25 nových tematických otázek (trest smrti, Temelín, církevní lesy, zbrojovky, jazykový zákon, rozpad federace, devalvace, atd.).
   - Společně s otázkami 1–15 vytvoří pole `expandedQuestions` o celkovém počtu **40 otázek**.
3. **Mapování stranických postojů:**
   - Všech 8 kandidujících subjektů z roku 1990 má v kódu stabilní identifikátory:
     - `of`: Občanské fórum
     - `vpn`: Verejnosť proti násiliu
     - `kscs`: Komunistická strana Československa
     - `kdu`: Křesťanská a demokratická unie (KDU/KDH)
     - `hsd_sms`: Hnutí za samosprávnou demokracii – Společnost pro Moravu a Slezsko
     - `sns`: Slovenská národná strana
     - `css`: Československá strana socialistická
     - `sz`: Strana zelených

---

## 2. Navržené změny v kódu

### `src/data/electionsData.ts`
- **Aktualizace `questions` (1–15):**
  - Dosadit nová znění tvrzení, kategorií, neutrálních vysvětlivek a postojů stran pro otázky 1 až 15.
- **Implementace `expandedQuestions` (1–40):**
  - Vložit všech 40 otázek s unifikovanou strukturou:
    - `id`: 1 až 40
    - `title`: stručný výstižný název otázky
    - `category`: tematická kategorie
    - `statement`: vyvážené tvrzení
    - `historicalNote` & `context`: objektivní historické pozadí bez vyzrazování stranických postojů
    - `partyStances`: ověřené postoje 8 stran `{ of, vpn, kscs, kdu, hsd_sms, sns, css, sz }`

### `src/main.ts`
- Šablona na hlavní stránce již obsahuje dynamický přepínač:
  `${meta.expandedQuestions && meta.expandedQuestions.length > 0 ? ... : ''}`
- Jakmile `expandedQuestions` přidáme, u karty roku 1990 se automaticky aktivují tlačítka:
  - `Základní (15)`
  - `Rozšířená (40)`
- Ve stavu aplikace je již předpřipraveno `state.selectedYearMode[1990]`.

---

## 3. Plán verifikace

1. **Syntaktická a typová kontrola:**
   - Spuštění `lint_applet` a `compile_applet`.
2. **Konzistence datové vrstvy:**
   - Ověření, že všech 40 otázek má správné klíče v `partyStances` (včetně `hsd_sms`).
   - Kontrola, že délka základní sady je 15 a rozšířené sady 40.
3. **Uživatelské rozhraní:**
   - Ověření zobrazení přepínače verzí na kartě 1990.
   - Spuštění kvízu v obou režimech a ověření výpočtu shody s 8 subjekty.

---

## 4. Stav realizace

- [x] **Hotovo v plném rozsahu:**
  - Základní sada (`questions`) pro rok 1990 byla aktualizována na přesně 15 otázek s vyčištěnými formulacemi a ověřenými postoji.
  - Rozšířená sada (`expandedQuestions`) pro rok 1990 byla kompletně implementována o počtu **přesně 40 otázek** (1–15 základních + 25 nových rozšiřujících 16–40).
  - Všech 8 kandidujících politických subjektů (`of`, `vpn`, `kscs`, `kdu`, `hsd_sms`, `sns`, `css`, `sz`) má u všech 40 otázek kompletní a validované postoje (`-1`, `0`, `1`).
  - Odstraněna redundantní duplicita objektu `expandedQuestions` v `src/data/electionsData.ts`.
  - Přepínač základní (15) vs. rozšířené (40) verze na kartě roku 1990 funguje automaticky a dynamicky v souladu s rokem 1920 a 1946.
  - Úspěšně proběhl `lint_applet` a `compile_applet` bez jediné chyby či varování.
