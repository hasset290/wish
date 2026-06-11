import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "./firebase";
import { COLLECTIONS } from "./firebaseModel";
import { demoGifts } from "./demoData";

export async function fetchCatalogGifts(limitCount = 100) {
  try {
    const q = query(
      collection(db, COLLECTIONS.gifts),
      where("isActive", "==", true),
      orderBy("createdAt", "desc"),
      limit(limitCount)
    );
    const snap = await getDocs(q);
    const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    return data.length ? data : demoGifts;
  } catch (error) {
    console.warn("Using demo gifts because Firestore gifts failed:", error.message);
    return demoGifts;
  }
}
