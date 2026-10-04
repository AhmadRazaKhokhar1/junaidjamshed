import admin, { getApps, initializeApp } from "firebase-admin";
import { getEnvConfig } from "@lib/helpers";
import { getFirestore } from "firebase-admin/firestore";

const { FIREBASE_SERVICE_ACCOUNT } = getEnvConfig();

const firebaseAdminApp =
  getApps().length === 0
    ? initializeApp({
        credential: admin.cert(JSON.parse(FIREBASE_SERVICE_ACCOUNT || "")),
      })
    : getApps()[0];

export const firebase_db = getFirestore(firebaseAdminApp);
