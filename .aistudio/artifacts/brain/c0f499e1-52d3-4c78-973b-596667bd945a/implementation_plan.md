# Implementační plán: Neprolomitelné zabezpečení statistik a administrace (Admin-Only)

Tento plán detailně popisuje implementaci striktního zabezpečení statistik a surových dat z kalkulačky na úrovni serverových pravidel databáze Firebase Firestore a klientské vrstvy. Tím bude zaručeno, že k datům **nemá přístup nikdo jiný kromě správce projektu (`LPfungi@gmail.com`)**, a to ani v případě, že by se kdokoli pokusil zkoumat zdrojový kód, síťový provoz nebo posílat přímé požadavky do databáze.

---

## 1. Architektura zabezpečení (Server-Side Database Rules)

Zabezpečení nesmí spoléhat na pouhé skrytí tlačítek v prohlížeči. Ochrana bude vynucena přímo servery Google Cloud / Firestore:

1. **Striktní bezpečnostní pravidlo (`firestore.rules`):**
   - Vytvoříme helper funkci ověřující kryptograficky podepsaný identifikační token od Googlu:
     ```javascript
     function isAdmin() {
       return request.auth != null &&
              request.auth.token.email == "LPfungi@gmail.com" &&
              request.auth.token.email_verified == true;
     }
     ```
   - **Kolekce `calculator_submissions` (anonymní odpovědi a výsledky):**
     - `allow create`: povoleno anonymně s přísnou validací schématu (veřejný zápis výsledků kalkulačky).
     - `allow read`: **POUZE `if isAdmin();`** – jakýkoli jiný pokus o stažení vrátí `PERMISSION_DENIED`.
     - `allow update, delete`: zakázáno pro všechny.
   - **Kolekce `site_metrics` (denní návštěvnost a agregáty):**
     - `allow create, update`: povoleno anonymně pouze pro atomické inkrementy návštěv.
     - `allow read`: **POUZE `if isAdmin();`** – nikdo jiný nevidí počty návštěvníků.
     - `allow delete`: zakázáno pro všechny.

---

## 2. Uživatelské rozhraní a skrytý přístup (Zero-Trace UI)

1. **Odstranění odkazu z patičky webu:**
   - Z patičky (`renderFooter`) bude zcela odstraněn odkaz *„Statistiky projektu“*.
   - Pro běžného návštěvníka i jakéhokoli robota web vypadá jako čistě prezentační aplikace bez jakékoli stopy po administraci.
2. **Přístup přes skrytou URL adresu:**
   - Vstup do administrace bude možný pouze zadáním tajného parametru v URL adrese:
     - např. `https://.../?admin=1` nebo `https://.../#admin`.
   - Aplikace při startu i při změně URL zkontroluje tento parametr.
3. **Autentizační brána (Admin Login Screen):**
   - Pokud admin přijde na skrytou URL a není přihlášen:
     - Zobrazí se čistá přihlašovací obrazovka: *„Administrátorský přístup – Historická volební kalkulačka“*.
     - Tlačítko: **„Přihlásit se účtem Google (LPfungi@gmail.com)“** přes bezpečné okno `signInWithPopup`.
   - Pokud se uživatel přihlásí správným účtem (`LPfungi@gmail.com`):
     - Zobrazí se kompletní statistický dashboard (KPI návštěvnosti, vyplněné kalkulačky, věkové rozložení, korelace 2021 vs. historie a CSV exportér).
     - V hlavičce dashboardu přibude tlačítko pro **odhlášení**.
   - Pokud by se někdo přihlásil jiným Google účtem:
     - Zobrazí se hlášení: *„Přístup odepřen: Účet [email] nemá administrátorská oprávnění.“* s tlačítkem pro odhlášení.

---

## 3. Změny v kódu aplikace

1. **`firestore.rules`:**
   - Změna oprávnění `allow read: if isAdmin();` pro obě kolekce.
2. **`src/firebase.ts`:**
   - Inicializace a export `auth = getAuth(app)` a nastavení Google Auth Providera (`GoogleAuthProvider`).
3. **`src/services/adminAuthService.ts`:**
   - Pomocné metody pro:
     - `loginWithGoogle()`
     - `logoutAdmin()`
     - `getCurrentAdminUser()`
     - `onAdminAuthStateChanged()`
4. **`src/main.ts`:**
   - Odstranění odkazu z patičky.
   - Posluchač na hash `#admin` a URL parametr `?admin=1`.
   - Přidání stavu `adminUser` a přihlašovacího dialogu při požadavku na administrátorský pohled.

---

## 4. Verifikace zabezpečení

1. **Test neoprávněného přístupu (simulace útočníka):**
   - Volání Firestore čtení bez přihlášení -> okamžitá chyba `PERMISSION_DENIED` z databáze.
   - Přihlášení nepovoleným Google účtem -> zamítnutí na úrovni UI i bezpečnostních pravidel Firestore.
2. **Test administrátorského přístupu:**
   - Zadání `?admin=1` nebo `#admin` do URL -> zobrazení přihlášení -> po přihlášení `LPfungi@gmail.com` se dashboard načte a CSV export funguje.
3. **Test běžného uživatele:**
   - Vyplnění kalkulačky a uložení anonymních odpovědí funguje bez jakéhokoli přihlašování a bez zobrazení jakýchkoli admin prvků.

---

## 5. Stav realizace

- [x] **Hotovo v plném rozsahu:**
  - V `firestore.rules` nastavena striktní pravidla: čtení z `calculator_submissions` i `site_metrics` je umožněno výhradně pro `request.auth.token.email == "LPfungi@gmail.com"`.
  - Odstraněn jakýkoli odkaz na administraci z patičky webu (pro běžné návštěvníky je web 100% čistý bez stop po administraci).
  - Vytvořena služba `adminAuthService.ts` s Google Sign-In a ověřením admin identity.
  - Vytvořena přihlašovací brána v `AnalyticsDashboardView.ts` s tlačítkem pro Google přihlášení a okamžitým zamítnutím nepovolených účtů.
  - Implementována detekce tajné URL adresy (`?admin=1`, `?view=admin`, `#admin`).
  - Úspěšně zkompilováno a zkontrolováno linterem bez chyb.

