"use server";
import { FirebaseCrudParameters } from "@app/utils/interfaces";
import { firebase_db } from "@lib/services";
import { ReadOptions } from "firebase-admin/firestore";

export const createFirebaseDocument = async <T>({
  collection,
  data,
}: Partial<FirebaseCrudParameters<T>>) => {
  if (!collection) {
    throw Error("Collection is a required paramter!");
  }
  if (!data) {
    throw Error("Data cannot be empty");
  }

  try {
    //   await set(ref(db, collection), data);
    const response = await firebase_db.doc(collection).create(data);
    console.log({createFirebaseDocumentResponse:response})
  } catch (error) {
    console.error(
      "An error occured while creating this document in firestore: ",
      error,
    );
  }
};

export const updateFirebaseDocument = async <T>({
  collection,
  data,
  id,
}: FirebaseCrudParameters<T>) => {
  try {
    await firebase_db.doc(`${collection}/${id}`).update(data);
  } catch (error) {
    console.error(
      "An error occured while creating this document in firestore: ",
      error,
    );
  }
};

export const deleteFirebaseDocument = async <T>({
  collection,
  id,
}: FirebaseCrudParameters<T>) => {
  try {
    await firebase_db.doc(`${collection}/${id}`).delete();
  } catch (error) {
    console.error(
      "An error occured while creating this document in firestore: ",
      error,
    );
  }
};

export const getFirebaseDocumentById = async <T>({
  collection,
  data,
  id,
}: FirebaseCrudParameters<T>) => {
  try {
    const snapshot = await firebase_db.doc(`${collection}/${id}`).get();
    if (snapshot.exists) {
      return snapshot.data();
    }
    return null;
  } catch (error) {
    console.error(
      "An error occured while creating this document in firestore: ",
      error,
    );
  }
};

export const getFirebaseDocuments = async <T>({
  collection,
}: FirebaseCrudParameters<T>) => {
  try {
    // const snapshot = await firebase_db.doc(collection).get();
    const snapshot = await firebase_db.collection(collection);
    if (snapshot) {
      return snapshot.get()
    }
    return null;
  } catch (error) {
    console.error(
      "An error occured while creating this document in firestore: ",
      error,
    );
  }
};
