import { addDoc, doc, getDoc, runTransaction, serverTimestamp, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "./firebase";
import { claimCollectionRef, registryDocRef } from "./firebaseModel";

export async function claimRegistryItem({ coupleId, registryItemId, guestName, guestEmail, status = "reserved" }) {
  if (!guestName) throw new Error("Guest name is required");

  const registryRef = registryDocRef(coupleId, registryItemId);

  await runTransaction(db, async (transaction) => {
    const registrySnap = await transaction.get(registryRef);
    if (!registrySnap.exists()) throw new Error("Registry item not found");

    const item = registrySnap.data();
    if (item.status !== "available") {
      throw new Error("This gift is already reserved or bought");
    }

    const claimData = {
      coupleId,
      registryItemId,
      itemId: item.itemId,
      itemType: item.itemType,
      guestName,
      guestEmail: guestEmail || "",
      quantity: 1,
      status,
      giftSnapshot: item.giftSnapshot,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    const claimRef = doc(claimCollectionRef(coupleId));
    transaction.set(claimRef, claimData);
    transaction.update(registryRef, {
      status,
      claimedQuantity: 1,
      updatedAt: serverTimestamp()
    });
  });

  toast.success(status === "bought" ? "Gift marked as bought" : "Gift reserved");
}
