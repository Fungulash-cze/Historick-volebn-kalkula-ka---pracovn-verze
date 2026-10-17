import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase.ts';

export const ADMIN_EMAIL = 'LPfungi@gmail.com';

export interface AdminAuthResult {
  user: User | null;
  isAdmin: boolean;
  error?: string;
}

/**
 * Initiates Google Sign-In popup for admin access.
 */
export async function loginAdminWithGoogle(): Promise<AdminAuthResult> {
  try {
    const cred = await signInWithPopup(auth, googleProvider);
    const user = cred.user;
    const email = user.email?.toLowerCase();
    const isAdmin = email === ADMIN_EMAIL.toLowerCase();

    if (!isAdmin) {
      return {
        user,
        isAdmin: false,
        error: `Účet ${user.email} nemá oprávnění správce. Přístup je povolen pouze pro ${ADMIN_EMAIL}.`
      };
    }

    return { user, isAdmin: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      user: null,
      isAdmin: false,
      error: `Chyba při přihlašování přes Google: ${message}`
    };
  }
}

/**
 * Signs out the current user.
 */
export async function logoutAdmin(): Promise<void> {
  await signOut(auth);
}

/**
 * Subscribes to auth state changes and validates admin rights.
 */
export function onAdminAuthState(
  callback: (user: User | null, isAdmin: boolean) => void
): () => void {
  return onAuthStateChanged(auth, (user) => {
    const email = user?.email?.toLowerCase();
    const isAdmin = email === ADMIN_EMAIL.toLowerCase();
    callback(user, isAdmin);
  });
}

/**
 * Synchronous check whether current logged in user is admin.
 */
export function isCurrentUserAdmin(): boolean {
  const email = auth.currentUser?.email?.toLowerCase();
  return email === ADMIN_EMAIL.toLowerCase();
}
