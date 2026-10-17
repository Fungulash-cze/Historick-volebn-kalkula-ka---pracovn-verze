# Rozšířená volební kalkulačka 1946 (15 základních + 25 rozšiřujících otázek)

Tento plán detailně popisuje architekturu a postup přidání rozšířené varianty volební kalkulačky pro parlamentní volby do Ústavodárného národního shromáždění v květnu 1946. Kalkulačka bude mít k dispozici jak základní verzi (15 stěžejních otázek), tak plnou rozšířenou verzi (40 otázek), shodně s rokem 1920.

---

## 1. Uživatelská rozhodnutí a metodologický rámec

Na základě potvrzených preferencí:
1. **Struktura sady pro rok 1946:**
   - **Základní verze (15 otázek):** Zůstává 15 původních otázek (id: 1–15) pokrývajících zásadní poválečné otázky (odsun, Košický vládní program, znárodnění průmyslu, zahraniční orientace na SSSR vs. Západ, retribuční soudnictví atd.).
   - **Rozšířená verze (40 otázek):** Skládá se z původních 15 základních otázek (id: 1–15) + 25 nových tematických otázek (id: 16–40).
2. **Přísně neutrální a objektivní styl vysvětlivek:**
   - Texty v polích `context` a `historicalNote` nesmí vyzrazovat, které konkrétní strany hlasovaly PRO a které PROTI.
   - Kontext musí popsat věcný spor, historické dilema a argumenty obou stran bez hodnotících soudů a bez jmenování stranických zkratek, aby vysvětlivka nepředjímala výsledek respondenta.
   - Jazyk tvrzení dodržuje doporučující formát (*„stát by měl / neměl“*), bez expresivních slov.
3. **Fázování doplňování otázek:**
   - **Fáze 1 (okamžitá):** Příprava infrastruktury v `electionsData.ts` a nasazení kompletních otázek **16, 17 a 18** (včetně neutrálního kontextu a ověřených stranických postojů).
   - **Fáze 2 (navazující):** Doplnění otázek **19 až 40** podle finálního seznamu (otázka 19 byla načata: *Zrušení přídělového systému na potraviny*; zbývající otázky uživatel dodá nebo je doplníme v dohodnutém znění).

---

## 2. Navržené změny v kódu

### A. Datová vrstva (`src/data/electionsData.ts`)

1. **Definice `expandedQuestions` pro rok 1946:**
   - Přidání pole `expandedQuestions: Question[]` do objektu `ELECTIONS_DATA[1946]`.
   - Prvních 15 položek bude odpovídat stávajícím otázkám 1–15 z roku 1946, se zachováním jejich postojů stran `ksc`, `csns`, `csl`, `ds`, `cssd`, `kss` (příp. `ssl`, `sp`).
   - Přidání otázek 16–18:
     - **Otázka 16: Velikost přídělů půdy v pohraničí**
       - *Kategorie:* Zemědělství a osidlování
       - *Tvrzení:* Zkonfiskovaná půda v pohraničí by měla být rozdělena na menší příděly pro co nejvyšší počet bezzemků namísto vytváření větších selských statků.
       - *Kontext / HistoricalNote:* Objektivní popis sporu mezi snahou o sociální stabilitu drobných rolníků (usedlosti do 13 ha) versus hospodářskou efektivitou větších statků.
       - *Postoje:* `{ ksc: 1, csns: -1, csl: -1, ds: -1, cssd: 0, kss: 1 }`
     - **Otázka 17: Zachování zemského zřízení Čech a Moravy se Slezskem**
       - *Kategorie:* Státní správa a samospráva
       - *Tvrzení:* V nové ústavě by mělo být zachováno historické zemské zřízení Čech a Moravy se Slezskem namísto rozdělení státu na menší kraje.
       - *Kontext / HistoricalNote:* Spor o zachování tradiční zemské samosprávy s centry v Praze a Brně versus centralizovanější model menších krajů.
       - *Postoje:* `{ ksc: -1, csns: 1, csl: 1, ds: 0, cssd: 0, kss: -1 }`
     - **Otázka 18: Uvolnění vázaných vkladů z měnové reformy**
       - *Kategorie:* Měnová politika a finance
       - *Tvrzení:* Stát by měl občanům rychleji uvolnit peněžní úspory zmrazené na vázaných vkladech při měnové reformě z roku 1945.
       - *Kontext / HistoricalNote:* Dilema mezi uvolněním úspor drobných střadatelů pro podporu spotřeby a investic versus obavou z inflační spirály a přebytečné kupní síly.
       - *Postoje:* `{ ksc: -1, csns: 1, csl: 1, ds: 1, cssd: -1, kss: -1 }`
     - **Příprava slotů pro otázky 19–40.**

### B. Uživatelské rozhraní (`src/main.ts`)

1. **Automatické zobrazení přepínače verzí pro rok 1946:**
   - Karta roku 1946 na hlavní stránce již v šabloně obsahuje podmínku `${meta.expandedQuestions && meta.expandedQuestions.length > 0 ? ... : ''}`. Jakmile bude `expandedQuestions` přítomno, přepínač *Základní (15)* vs. *Rozšířená (40)* se u roku 1946 okamžitě a bezpečně aktivuje.
2. **Přepínání stavu a volba počtu otázek:**
   - Ve `state.selectedYearMode[1946]` bude možnost volit mezi `'standard'` a `'expanded'`.
   - V kvízu i výsledcích se správně zobrazí počet otázek (např. *Otázka 1 z 40*).

---

## 3. Plán verifikace

1. **Typová kontrola a build:**
   - Spuštění `compile_applet` pro ověření bezchybné kompilace TypeScriptu a Vite bundle.
2. **Funkční ověření:**
   - Otevření úvodní stránky: ověření, že u roku 1946 se zobrazuje volba režimu (15 vs. 40 otázek).
   - Spuštění kalkulačky pro rok 1946 v základním i rozšířeném režimu.
   - Kontrola zobrazení kontextového okna s neutrálním vysvětlením (žádné prozrazení postojů stran).
   - Kontrola správného výpočtu procentuální shody se stranami (KSČ, ČSNS, ČSL, DS, ČSSD, KSS).

---

## 4. Stav realizace

- [x] **Fáze 1 (Hotovo):**
  - Do `ELECTIONS_DATA[1946]` bylo implementováno pole `expandedQuestions`.
  - Začleněno 15 základních otázek (id 1–15) s doplněnými stručnými názvy (`title`) a historickými kontexty.
  - Úspěšně přidány otázky 16, 17 a 18 s neutrálními, objektivními texty bez prozrazení postojů stran:
    - **16:** Velikost přídělů půdy v pohraničí
    - **17:** Zachování zemského zřízení Čech a Moravy se Slezskem
    - **18:** Uvolnění vázaných vkladů z měnové reformy
  - Aplikace zkompilována a otestována bez chyb (`compile_applet` & `lint_applet` proběhly úspěšně).
  - Přepínač základní/rozšířené verze na kartě roku 1946 se automaticky zobrazil a je funkční.

- [x] **Fáze 2 (Hotovo v plném rozsahu):**
  - Do `expandedQuestions` pro rok 1946 bylo úspěšně integrováno všech 25 rozšiřujících otázek (id: 16–40).
  - Celkový počet otázek v rozšířené sadě roku 1946 nyní činí **přesně 40 otázek** (15 základních + 25 rozšiřujících).
  - Všechny otázky (27–40):
    - **27:** Volební právo od 18 let
    - **28:** Daňové zrovnoprávnění živnostníků a družstev
    - **29:** Obnova Senátu v nové ústavě
    - **30:** Zachování víceletých gymnázií
    - **31:** Rozdělování nadměrných bytů ve městech
    - **32:** Zrušení všeobecné pracovní povinnosti
    - **33:** Přesun průmyslových strojů z českého pohraničí na Slovensko
    - **34:** Platové ohodnocení úředníků a inteligence
    - **35:** Sjednocení zdravotního a sociálního pojištění
    - **36:** Vyplacení náhrad za majetek znárodněný v roce 1945
    - **37:** Rozdělování zemědělské techniky
    - **38:** Vrácení majetku obětem nacistické perzekuce
    - **39:** Pravomoci prezidenta republiky v nové ústavě
    - **40:** Ochrana církevního pozemkového majetku
  - Všechna tvrzení a vysvětlivky zachovávají maximální neutralitu, věcnost a absenci jakéhokoliv prozrazování stranických postojů.
  - Tlačítko na úvodní kartě nyní automaticky nabízí: `Základní (15)` a `Rozšířená (40)`.
  - Projekt bezchybně kompiluje a prošel typovou kontrolou.

