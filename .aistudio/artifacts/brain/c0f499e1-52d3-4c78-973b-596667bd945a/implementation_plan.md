# Redesign výsledků a grafické karty: Pastelový styl a minimalistická plakátová typografie

Tento implementační plán reaguje na zpětnou vazbu k vizuálnímu zpracování výsledků volební kalkulačky a definuje konkrétní kroky k odstranění tmavých elementů a nasazení čistého, pastelového a typograficky precizního designu.

---

## 1. Analýza současného stavu & požadavky uživatele

1. **Hlavní blok vítězné strany ve webovém zobrazení výsledků (`renderResultsView`)**:
   - V současnosti má tmavé černé pozadí (`bg-zinc-900`, `bg-zinc-800`, bílý text na černém), což působí tvrdě v kontrastu se zbytkem světlé aplikace a krémovým motivem.
   - **Cíl**: Změnit na příjemný, světlý pastelový podklad odvozený z barvy vítězné strany (jemné tónování ~6–10 % krytí syté barvy strany, ohraničení s 20–25 % krytím), čisté bílé vnitřní bloky a tmavě uhlovou čitelnou typografii.

2. **Grafická karta ke sdílení (Canvas PNG & sdílecí okno)**:
   - Dle preferencí uživatele aplikovat styl **minimalistické plakátové typografie s čistými linkami**:
     - Čistá geometrická kompozice s precizním písmem a vyváženými mezerami.
     - Výrazná barevná linka vítězné strany tvořící architektonický prvek karty.
     - Odstranění jakéhokoliv vizuálního balastu – pouze čisté linie, geometrické karty a 100% čitelné názvy stran.
     - Příjemné pastelové podbarvení indikátorů shody.

---

## 2. Architektura a technický návrh

### A. Webové rozhraní: Pastelový blok vítězné strany (`src/main.ts`)
- **Dynamická pastelová paleta**:
  - Na základě `topMatch.party.color` vygenerujeme jemné pastelové pozadí:
    - Podklad hlavního panelu: `background: ${partyColor}12;` (cca 7% průhlednost) nebo jemný pastelový přechod.
    - Lemování panelu: `border-color: ${partyColor}35;`.
    - Levý akcentní pilíř v plné barvě strany.
  - **Vnitřní karty**:
    - Pilíře programu a detailní popis: bílé poloprůhledné karty (`bg-white/85 backdrop-blur-xs border border-stone-200/60`).
    - Skóre a procento shody: elegantní bílá karta s jemným stínem a akcentem barvy strany, tmavé číslice v písmu `font-mono font-extrabold text-stone-900`.
    - Tlačítka "Sdílet" a "Detail strany": stylová tlačítka v odstínech kamenné šedi s hover efekty ladícími s pastelovým vyzněním.

### B. Canvas generátor: Minimalistická plakátová typografie (`src/services/ballotCardGenerator.ts`)
- **Proporce a rozvržení**:
  - Standardizovaný formát 1080 × 1260 px vhodný pro Instagram Stories, WhatsApp i feed sociálních sítí.
  - Krémový teplý papírový základ `#FAF7F2` s jemným orámováním `#E8E1D5`.
  - Architektonická horní linka v barvě vítězné strany o tloušťce 10 px.
- **Typografická hierarchie (Poster style)**:
  - Hlavička: Kicker `HISTORICKÁ VOLEBNÍ KALKULAČKA` + `VÝSLEDEK · VOLBY {year}` v silném moderním řezu s jemnou linkou.
  - 1. Místo:
    - Geometrická karta v čistě bílé barvě s pastelovým akcentním štítkem.
    - Zvýrazněné velké procento shody (`76 px font-mono/sans`).
    - Výrazná zkratka strany (např. *ČSDSD*, *OF*, *KSČ*, *ČSL*) a pod ní kompletní celý název bez krácení.
  - TOP 3 pořadí:
    - Dvě symetrické geometrické karty s tenkou linkou a pastelovým pruhem shody.
  - QR blok:
    - Čistý čtvercový QR kód s minimálním marginem a elegantní dvojicí řádků bez zbytečných adres.

### C. Modální okno ke sdílení (`src/components/BallotShareSection.ts`)
- Zajištění dokonale vystředěného okna v zorném poli (viewportu) bez jakéhokoliv scrollování.
- Pastelové prvky rámu odkazující na vítěznou stranu.
- Okamžitá odezva tlačítek pro nativní sdílení (mobil) a stažení PNG (desktop).

---

## 3. Plán implementace a ověření

1. **Úprava `renderResultsView` v `src/main.ts`**:
   - Nahrazení tříd `bg-zinc-900`, `bg-zinc-800`, `text-white` pastelovou variantou přizpůsobenou barvě vítězné strany.
   - Vyladění čitelnosti a kontrastu textů (`text-stone-900`, `text-stone-700`, `text-stone-500`).
2. **Doladění plakátové typografie v `src/services/ballotCardGenerator.ts`**:
   - Vyladění mezer, velikostí písem a čistých geometrických linií.
3. **Verifikace a testování**:
   - Kontrola sestavení aplikace přes `compile_applet`.
   - Kontrola čistoty kódu a typů přes `lint_applet`.
   - Vizuální kontrola zobrazení všech volebních let (1920, 1946, 1990) pro různé vítězné strany.
