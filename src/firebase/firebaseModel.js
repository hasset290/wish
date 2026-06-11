import { collection, doc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export const COLLECTIONS = {
  users: "Users",
  couples: "Couples",
  gifts: "gifts",
  shops: "Shops",
  products: "Products",
  invites: "invites",
  registryItems: "registryItems"
};

export const SUBCOLLECTIONS = {
  favorites: "favorite",
  claims: "claims",
  guests: "guest",
  registry: "registry"
};

export const ROLES = {
  admin: "admin",
  couple: "couple",
  shop: "shop",
  guest: "guest"
};

export const ITEM_TYPES = {
  gift: "gift",
  product: "product"
};

export const SOURCE_COLLECTIONS = {
  gifts: COLLECTIONS.gifts,
  products: COLLECTIONS.products
};

export const REGISTRY_STATUS = {
  available: "available",
  reserved: "reserved",
  bought: "bought",
  cancelled: "cancelled"
};

export const CLAIM_STATUS = {
  reserved: "reserved",
  bought: "bought",
  cancelled: "cancelled"
};

export function now() {
  return serverTimestamp();
}

export function coupleRef(coupleId) {
  return doc(db, COLLECTIONS.couples, coupleId);
}

export function registryCollectionRef(coupleId) {
  return collection(db, COLLECTIONS.couples, coupleId, SUBCOLLECTIONS.registry);
}

export function registryDocRef(coupleId, registryItemId) {
  return doc(db, COLLECTIONS.couples, coupleId, SUBCOLLECTIONS.registry, registryItemId);
}

export function claimCollectionRef(coupleId) {
  return collection(db, COLLECTIONS.couples, coupleId, SUBCOLLECTIONS.claims);
}

export function guestCollectionRef(coupleId) {
  return collection(db, COLLECTIONS.couples, coupleId, SUBCOLLECTIONS.guests);
}

export function favoriteCollectionRef(coupleId) {
  return collection(db, COLLECTIONS.couples, coupleId, SUBCOLLECTIONS.favorites);
}

export function registryItemId(coupleId, itemId) {
  return `${coupleId}_${itemId}`;
}

export function giftSnapshot(item = {}) {
  return {
    name: item.name || item.title || "",
    description: item.description || "",
    imageUrl: item.imageUrl || "",
    price: Number(item.price || 0),
    currency: item.currency || "ETB",
    category: item.category || "",
    shopId: item.shopId || null,
    shopName: item.shopName || null,
    sourceType: item.sourceType || (item.shopId ? "shop" : "seeded")
  };
}

export function normalizeCatalogItem(item = {}) {
  const itemType = item.shopId ? ITEM_TYPES.product : ITEM_TYPES.gift;
  return {
    itemId: item.id,
    itemType,
    sourceCollection: itemType === ITEM_TYPES.product ? COLLECTIONS.products : COLLECTIONS.gifts,
    giftSnapshot: giftSnapshot(item)
  };
}
