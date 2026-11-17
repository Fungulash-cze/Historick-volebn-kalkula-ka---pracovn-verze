import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase.ts';
import { ElectionYear } from '../types.ts';

export type CalculatorLengthLabel = 'zkrácená' | 'rozšířená';

export interface FeedbackSubmissionPayload {
  text: string;
  electionId: ElectionYear | null;
  calculatorLength: CalculatorLengthLabel | null;
}

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write'
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email
        })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export const FEEDBACK_MAX_LENGTH = 2000;

/**
 * Uloží textovou zpětnou vazbu uživatele do kolekce `feedback` ve Firestore.
 */
export async function submitFeedback(payload: FeedbackSubmissionPayload): Promise<string> {
  const trimmedText = payload.text.trim().slice(0, FEEDBACK_MAX_LENGTH);
  if (!trimmedText) {
    throw new Error('Text zpětné vazby nesmí být prázdný.');
  }

  const path = 'feedback';
  try {
    const docRef = await addDoc(collection(db, path), {
      text: trimmedText,
      timestamp: serverTimestamp(),
      electionId: payload.electionId ?? null,
      calculatorLength: payload.calculatorLength ?? null
    });
    return docRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}
