import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

function getAdminApp() {
  if (getApps().length > 0) return getApps()[0];

  try {
    // Parse service account key from environment variable
    const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
    
    if (!serviceAccountKey) {
      console.error('FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set');
      throw new Error('Firebase service account key is required');
    }

    const serviceAccount = JSON.parse(serviceAccountKey);

    return initializeApp({
      credential: cert(serviceAccount),
      projectId: serviceAccount.project_id,
    });
  } catch (error) {
    console.error('Failed to initialize Firebase Admin SDK:', error.message);
    throw error;
  }
}

let adminDb;
try {
  const app = getAdminApp();
  adminDb = getFirestore(app);
} catch (error) {
  console.error('Firebase Admin initialization failed:', error.message);
  adminDb = null;
}

export { adminDb };
