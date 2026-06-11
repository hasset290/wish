import { deleteDoc, doc, getDocs, setDoc, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import {
  COLLECTIONS,
  registryCollectionRef,
  registryDocRef,
  registryItemId,
  giftSnapshot
} from "./firebaseModel";

export async function fetchCoupleRegistry(coupleId) {
  if (!coupleId) return [];
  const snap = await getDocs(registryCollectionRef(coupleId));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function addItemToRegistry(coupleId, item) {
  if (!coupleId || !item?.id) throw new Error("Missing couple or item");

  const id = registryItemId(coupleId, item.id);
  const isProduct = Boolean(item.shopId);

  const registryData = {
    coupleId,
    registryItemId: id,
    itemId: item.id,
    itemType: isProduct ? "product" : "gift",
    sourceCollection: isProduct ? COLLECTIONS.products : COLLECTIONS.gifts,
    quantity: 1,
    claimedQuantity: 0,
    status: "available",
    giftSnapshot: giftSnapshot(item),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };

  await setDoc(registryDocRef(coupleId, id), registryData, { merge: true });
  await setDoc(doc(registryCollectionRef(coupleId).firestore, COLLECTIONS.registryItems, id), registryData, { merge: true });

  toast.success("Added to registry");
  return id;
}

export async function removeRegistryItem(coupleId, itemId) {
  await deleteDoc(registryDocRef(coupleId, itemId));
  toast.success("Removed from registry");
}
