import { addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import { guestCollectionRef } from "./firebaseModel";

export async function fetchGuests(coupleId) {
  const snap = await getDocs(guestCollectionRef(coupleId));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function addGuest(coupleId, guest) {
  const ref = await addDoc(guestCollectionRef(coupleId), {
    ...guest,
    inviteStatus: guest.inviteStatus || "not_sent",
    rsvpStatus: guest.rsvpStatus || "pending",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  return ref.id;
}
