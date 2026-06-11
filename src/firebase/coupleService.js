import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { COLLECTIONS } from "./firebaseModel";
import { demoCouple } from "./demoData";

export async function fetchCoupleById(coupleId) {
  if (!coupleId) return demoCouple;
  try {
    const snap = await getDoc(doc(db, COLLECTIONS.couples, coupleId));
    return snap.exists() ? { id: snap.id, ...snap.data() } : demoCouple;
  } catch {
    return demoCouple;
  }
}

export async function createOrUpdateCouple(coupleId, data) {
  await setDoc(doc(db, COLLECTIONS.couples, coupleId), {
    ...data,
    updatedAt: serverTimestamp(),
    createdAt: data.createdAt || serverTimestamp()
  }, { merge: true });
}

export async function updateCouple(coupleId, data) {
  await updateDoc(doc(db, COLLECTIONS.couples, coupleId), {
    ...data,
    updatedAt: serverTimestamp()
  });
}
