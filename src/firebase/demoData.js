export const demoGifts = [
  {
    id: "gift_air_fryer",
    name: "Digital Air Fryer",
    description: "A useful kitchen gift for fast healthy meals.",
    price: 6500,
    currency: "ETB",
    category: "Kitchen",
    imageUrl: "https://images.unsplash.com/photo-1612198790700-0ff08cb726e5?auto=format&fit=crop&w=900&q=80",
    sourceType: "seeded",
    isActive: true
  },
  {
    id: "gift_dinnerware",
    name: "Dinnerware Set",
    description: "Elegant plates and bowls for a new home.",
    price: 4200,
    currency: "ETB",
    category: "Dining",
    imageUrl: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=900&q=80",
    sourceType: "seeded",
    isActive: true
  },
  {
    id: "gift_baby_stroller",
    name: "Baby Stroller",
    description: "Comfortable stroller for baby shower wishlist.",
    price: 18500,
    currency: "ETB",
    category: "Baby",
    imageUrl: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=80",
    sourceType: "seeded",
    isActive: true
  }
];

export const demoProducts = [
  {
    id: "product_coffee_machine",
    shopId: "shop_addis_home",
    shopName: "Addis Home Store",
    ownerId: "demo-shop",
    name: "Coffee Machine",
    description: "Modern coffee machine from a registered shop.",
    price: 12000,
    currency: "ETB",
    category: "Kitchen",
    imageUrl: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80",
    stock: 8,
    isActive: true,
    approvalStatus: "approved",
    sourceType: "shop"
  },
  {
    id: "product_bed_lamp",
    shopId: "shop_addis_home",
    shopName: "Addis Home Store",
    ownerId: "demo-shop",
    name: "Bedside Lamp",
    description: "Soft warm lamp for bedroom decor.",
    price: 2800,
    currency: "ETB",
    category: "Home Decor",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    stock: 15,
    isActive: true,
    approvalStatus: "approved",
    sourceType: "shop"
  }
];

export const demoCouple = {
  id: "demo-couple",
  ownerId: "demo-couple",
  email: "couple@example.com",
  eventType: "Wedding",
  eventTitle: "Arsema & Nahom Wedding",
  personOneName: "Arsema",
  personTwoName: "Nahom",
  eventDate: "2026-08-20",
  location: "Addis Ababa",
  isPublic: true,
  publicSlug: "arsema-nahom"
};
