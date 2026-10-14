# Rozšířená volební kalkulačka 1920 & Jazyková neutralizace otázek

Revidovaný plán pro rozšířenou verzi volební kalkulačky pro parlamentní volby 1920 (režim 15 základních vs. 37 otázek v rozšířené verzi), doplnění historických vysvětlivek a celkovou revizi jazyka otázek i kontextů (odstranění citově zabarvených slov a zjemnění formulací).

---

### Uživatelské shrnutí & Potvrzená rozhodnutí

> [!IMPORTANT]
> **Klíčové požadavky a rozhodnutí:**
> 1. **Jazyková neutralita a zjemnění (v celém kvízu):**
>    - Odstranění emotivních, přepjatých a absolutních výrazů (např. *obrovská*, *výrazně*, *kritický*, *naprostý*, *absolutní*).
>    - Nahrazení striktních imperativů typu *musí* a *nesmí* za doporučující formy *měl by* a *neměl by*.
>    - Zajištění maximální objektivity v otázkách i vysvětlivkách, aby text respondenta nenaváděl a neprozrazoval stranické preference.
> 2. **Struktura otázek 1920:**
>    - **Základní verze:** 15 původních otázek s doplněnými historickými vysvětlivkami a zjemněnými formulacemi.
>    - **Rozšířená verze:** 37 otázek (15 základních + 22 doplňujících tematických otázek).
> 3. **Postupné doplnění doplňujících otázek:**
>    - Otázky 1–5 a 6–10 (celkem 10 z 22 dodatečných) jsou plně formulovány a připraveny k nasazení.
>    - Pro zbývající otázky 11–22 bude připravena struktura pro okamžité doplnění po zaslání uživatelem.

---

## 1. Jazykový a stylistický standard (Tone of Voice)

Všechna tvrzení a vysvětlivky projdou jazykovou korekturou podle těchto pravidel:

| Původní / nevhodný styl | Upravený neutrální styl | Odůvodnění |
| :--- | :--- | :--- |
| *Stát musí zabavit...* | *Stát by měl převzít...* | Odstranění imperativu *musí* ve prospěch hodnotícího *měl by* |
| *Stát nesmí dovolit...* | *Stát by neměl umožňovat...* | Zjemnění striktního zákazu *nesmí* |
| *Obrovská inflace / kritický nedostatek* | *Zvýšená inflace / nedostatek bytů* | Odstranění emotivních a zveličujících přívlastků |
| *Výrazně omezit / naprosto zakázat* | *Omezit / regulovat* | Odstranění zesilujících zájmen a příslovcí |
| *Absolutní rovnost* | *Rovné postavení* | Vyváženější a věcnější formulace |

---

## 2. Uživatelská zkušenost & UI Design

### Tok uživatele (User Flows)
1. **Volba verze kalkulačky u voleb 1920:**
   - Přepínač na úvodní kartě voleb 1920:
     - `Základní verze (15 otázek)` – rychlé porovnání stěžejních témat.
     - `Rozšířená verze (37 otázek)` – detailní historická analýza (15 základních + 22 doplňujících).
2. **Průběh kalkulačky:**
   - Indikátor postupu (např. *Otázka 6 z 37* vs. *Otázka 6 z 15*).
   - Text otázky se zjemněnou a vyváženou formulací.
   - Decentní ikona `(?)` vedle tvrzení – po najetí myší nebo klepnutí na mobilu otevře kontextový box s historickým pozadím.
   - Texty v kontextovém boxu i informačních blocích formátovány se zarovnáním do bloku (`text-justify hyphens-auto`).
3. **Vyhodnocení shody:**
   - Výpočet procentuální shody se všemi 8 parlamentními stranami roku 1920 (ČSSD, RSZML, ČSL, ČSNS, ČSND, DSAP, BdL, SĽS).
   - Transparentní rozpad shody po jednotlivých otázkách.

---

## 3. Datový model & Architektura

```
┌────────────────────────────────────────────────────────────────────────┐
│                        electionsData.ts                                │
├────────────────────────────────────────────────────────────────────────┤
│ 1920 Election Definition:                                              │
│  ├── questions: Question[] (15 položek s historickými kontexty)        │
│  │    └── jazykově zjemněno (nahrazeno "musí/nesmí", smazány superlativy)│
│  └── expandedQuestions: Question[] (37 položek celkem)                 │
│       ├── [1..15] 15 základních otázek                                 │
│       ├── [16..20] Doplňující otázky 1-5 (Dávka, Celibát, Tituly...)   │
│       ├── [21..25] Doplňující otázky 6-10 (Armáda, Rolníci, Vojáci...) │
│       └── [26..37] Doplňující otázky 11-22 (připravený slot pro data)  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                       Quiz / App Components                            │
├────────────────────────────────────────────────────────────────────────┤
│  ├── Mode Switcher: Základní (15) / Rozšířená (37)                     │
│  ├── Question Context Tooltip & Modal: Neutrální historické vysvětlení │
│  └── Match Calculator: Podpora dynamického počtu otázek                │
└────────────────────────────────────────────────────────────────────────┘
```

### Přehled dosud dodaných dodatečných otázek (1 až 10 z 22) se zjemněným jazykem:
1. **Dávka z majetku (Mimořádné zdanění majetku):** Stát by měl zavést jednorázovou daň z majetku nabytého během války, aby pomohl stáhnout znehodnocené peníze a vyrovnal dluhy.
2. **Zrušení celibátu učitelek:** Učitelky by měly mít právo se vdát a založit rodinu, aniž by tím automaticky ztratily místo ve státní škole.
3. **Odstranění šlechtických titulů:** Stát by neměl tolerovat další užívání aristokratických titulů, protože v demokratické republice by si měli být všichni rovni bez ohledu na původ.
4. **Státní podpora bytových družstev a ochrana nájemníků:** Stát by měl chránit nájemníky regulací nájmů a finančně podporovat výstavbu dělnických bytů.
5. **Omezování alkoholu:** Stát by měl omezit prodej alkoholických nápojů a zakázat jejich podávání mladistvým.
6. **Branná povinnost a armáda:** Československo by se mělo vyhnout budování stálé armády a nahradit ji dobrovolnickými milicemi, případně zkrátit povinnou vojenskou službu.
7. **Nemocenské a úrazové pojištění rolníků:** Státní sociální pojištění by se mělo rozšířit i na samostatně hospodařící rolníky, nikoliv chránit pouze dělníky v továrnách.
8. **Volební právo vojáků:** Vojáci v činné službě by neměli mít volební právo, aby se předešlo politizaci ozbrojených složek.
9. **Zrovnoprávnění nemanželských dětí:** Zákon by měl zajistit, aby nemanželské děti měly v dědickém právu rovné postavení jako děti narozené v manželském svazku.
10. **Zastoupení menšin ve státní správě:** Místa úředníků, policistů a soudců v pohraničí by se měla obsazovat loajálními občany Československa i za cenu toho, že budou uvolněni dosavadní zaměstnanci německé národnosti.

---

## 4. Fáze realizace

1. **Fáze 1: Jazyková neutralizace stávajících otázek a kontextů**
   - Projít všech 15 základních otázek z roku 1920 i otázky z dalších volebních roků.
   - Odstranit silná slova (*obrovský*, *výrazně*, *kritický*, *absolutní*), nahradit direktivní tvary *musí/nesmí* mírnějšími *měl by/neměl by*.
2. **Fáze 2: Doplnění historických vysvětlivek k základním 15 otázkám roku 1920**
   - Zformulovat věcný a nestranný historický kontext pro každou z 15 základních otázek roku 1920.
3. **Fáze 3: Integrace doplňujících otázek 1–10 do `expandedQuestions`**
   - Začlenit dodaných 10 otázek se specifikovanými stranickými postoji do rozšířené sady pro rok 1920.
   - Připravit datové rozhraní pro vložení otázek 11–22.
4. **Fáze 4: UI implementace přepínače a vysvětlivek**
   - Implementovat přepínač mezi základním a rozšířeným režimem na detailu voleb 1920.
   - Přidat interaktivní zobrazení historického kontextu (otazníček) s podporou zarovnání do bloku.
5. **Fáze 5: Verifikace a sestavení aplikace**
   - Spustit kontrolu typů a sestavení pomocí `compile_applet`.
