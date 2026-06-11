import { addDoc, collection, getDocs, query, serverTimestamp, updateDoc, where, doc } from "firebase/firestore";
import { db } from "./firebase";
import { COLLECTIONS } from "./firebaseModel";

export async function createShopProfile(shop) {
  const ref = await addDoc(collection(db, COLLECTIONS.shops), {
    ...shop,
    status: shop.status || "pending",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  return ref.id;
}

export async function fetchShopByOwner(ownerId) {
  const q = query(collection(db, COLLECTIONS.shops), where("ownerId", "==", ownerId));
  const snap = await getDocs(q);
  return snap.empty ? null : { id: snap.docs[0].id, ...snap.docs[0].data() };
}

export async function updateShop(shopId, data) {
  await updateDoc(doc(db, COLLECTIONS.shops, shopId), {
    ...data,
    updatedAt: serverTimestamp()
  });
}
