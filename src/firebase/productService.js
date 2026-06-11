import { addDoc, collection, getDocs, limit, orderBy, query, serverTimestamp, updateDoc, where, doc } from "firebase/firestore";
import { db } from "./firebase";
import { COLLECTIONS } from "./firebaseModel";
import { demoProducts } from "./demoData";

export async function fetchApprovedProducts(limitCount = 100) {
  try {
    const q = query(
      collection(db, COLLECTIONS.products),
      where("approvalStatus", "==", "approved"),
      where("isActive", "==", true),
      orderBy("createdAt", "desc"),
      limit(limitCount)
    );
    const snap = await getDocs(q);
    const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    return data.length ? data : demoProducts;
  } catch (error) {
    console.warn("Using demo products because Firestore products failed:", error.message);
    return demoProducts;
  }
}

export async function createProduct(product) {
  const ref = await addDoc(collection(db, COLLECTIONS.products), {
    ...product,
    sourceType: "shop",
    approvalStatus: product.approvalStatus || "pending",
    isActive: product.isActive ?? true,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  return ref.id;
}

export async function updateProduct(productId, data) {
  await updateDoc(doc(db, COLLECTIONS.products, productId), {
    ...data,
    updatedAt: serverTimestamp()
  });
}
