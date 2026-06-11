export function createItemSnapshot(item = {}) {
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

export function itemSource(item = {}) {
  return item.shopId ? "Products" : "gifts";
}

export function itemType(item = {}) {
  return item.shopId ? "product" : "gift";
}
