// Kryptografický hash administrátorského hesla (SHA-256)
// Původní heslo není v kódu uloženo, je bezpečně ověřováno jednocestným hashem
const ADMIN_PASSWORD_HASH =
  '5614a6d6e50da470324efe250a5559292743deb688d68009251f83cce5cf4a49';

const ADMIN_SESSION_KEY = 'hvk_admin_session_auth';

/**
 * Spočítá SHA-256 hash zadaného textu pomocí nativního Web Crypto API v prohlížeči.
 */
async function sha256(text: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(text.trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Ověří zadané administrátorské heslo porovnáním jeho kryptografického otisku.
 */
export async function verifyAdminPassword(inputPassword: string): Promise<boolean> {
  if (!inputPassword || typeof inputPassword !== 'string') {
    return false;
  }
  const computedHash = await sha256(inputPassword);
  const isValid = computedHash === ADMIN_PASSWORD_HASH;

  if (isValid) {
    sessionStorage.setItem(ADMIN_SESSION_KEY, 'active_' + Date.now());
  }

  return isValid;
}

/**
 * Zkontroluje, zda je v aktuální relaci prohlížeče administrátor již přihlášen.
 */
export function isAdminSessionActive(): boolean {
  try {
    const session = sessionStorage.getItem(ADMIN_SESSION_KEY);
    return Boolean(session && session.startsWith('active_'));
  } catch {
    return false;
  }
}

/**
 * Odhlásí administrátora a smaže relaci z paměti prohlížeče.
 */
export function logoutAdminSession(): void {
  try {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  } catch {
    // Ignore error
  }
}
