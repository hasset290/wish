import { addDoc, collection, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { db } from "./firebase";
import { COLLECTIONS } from "./firebaseModel";

export function makeInviteToken() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

export async function createInvite({ coupleId, guestId = null }) {
  const token = makeInviteToken();
  const ref = await addDoc(collection(db, COLLECTIONS.invites), {
    coupleId,
    guestId,
    token,
    status: "active",
    createdAt: serverTimestamp()
  });
  return { id: ref.id, token };
}

export async function fetchInviteByToken(token) {
  const q = query(collection(db, COLLECTIONS.invites), where("token", "==", token), where("status", "==", "active"));
  const snap = await getDocs(q);
  return snap.empty ? null : { id: snap.docs[0].id, ...snap.docs[0].data() };
}
