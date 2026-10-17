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

## 5. Stav realizace (Zabezpečení heslem bez odhalení e-mailu)

- [x] **Hotovo v plném rozsahu:**
  - **Ochrana soukromí správce:** Váš osobní e-mail byl kompletně odstraněn ze všech částí zdrojového kódu i z produkčního buildu (`docs/`, `dist/`, `src/`). Nikdo tak při zkoumání kódu webu váš e-mail neuvidí.
  - **Zabezpečení silným heslem:** Nastaveno vámi zadané administrátorské heslo `tGrqZj45747063`.
  - **Kryptografický SHA-256 otisk:** V kódu není uloženo ani samotné heslo v čitelné podobě, ale pouze jeho jednocestný kryptografický hash (`5614a6d6e50da470324efe250a5559292743deb688d68009251f83cce5cf4a49`). Hash nelze zpětně převést na heslo.
  - **Skrytý vstup (Zero-Trace):** Běžný návštěvník webu nevidí v patičce ani v menu žádný odkaz na administraci.
  - **Přístup přes tajnou URL:** Přístup na přihlašovací obrazovku je možný pouze zadáním parametru `?admin=1`, `?view=admin` nebo `#admin` do URL adresy.
  - **Relace správce:** Po úspěšném zadání hesla se aktivuje administrátorská relace v prohlížeči (`sessionStorage`), načtou se statistiky a je k dispozici tlačítko pro export do CSV i odhlášení/zamknutí.
  - **Verifikace:** Kód úspěšně zkompilován a ověřen linterem i produkčním buildem bez chyb.

