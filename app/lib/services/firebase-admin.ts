import admin, { getApps, initializeApp } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

var serviceAccount = require("../../../junaid_jamshed_firebase_service_acc.json");
const firebaseAdminApp =
  getApps().length === 0
    ? initializeApp({
        credential: admin.cert(JSON.parse(JSON.stringify(serviceAccount))),
      })
    : getApps()[0]

export const firebase_db = getFirestore(firebaseAdminApp)
