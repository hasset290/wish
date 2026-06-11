import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./firebase";
import { COLLECTIONS } from "./firebaseModel";

export async function registerWithRole({ email, password, role, displayName }) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, COLLECTIONS.users, cred.user.uid), {
    uid: cred.user.uid,
    email,
    role,
    displayName: displayName || "",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  return cred.user;
}

export async function loginWithEmail(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function logoutUser() {
  await signOut(auth);
}

export async function resetPassword(email) {
  await sendPasswordResetEmail(auth, email);
}

export async function fetchUserRole(uid) {
  if (!uid) return null;
  const snap = await getDoc(doc(db, COLLECTIONS.users, uid));
  return snap.exists() ? snap.data().role : null;
}
