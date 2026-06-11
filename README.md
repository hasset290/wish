# Gift Wishlist Full Starter

This is a React + Tailwind + Firebase starter for a gift wishlist system for weddings, birthdays, and baby showers.

## What is included

- Public pages: Home, Login, Register, Invite, Public Registry
- Couple pages: Dashboard, Profile, Gifts, Products, Registry, Favorites, Guests, Claims, Thank You Card
- Shop pages: Dashboard, Profile, Add/Edit Product, Products, Orders
- Admin pages: Dashboard, Couples, Shops, Products, Gifts, Claims, Invites, Settings
- Firebase model and service files
- Role-based routing
- Toast notifications with `react-hot-toast`
- Confirmation questions using toast buttons
- Demo fallback data so you can test without Firebase data first

## Install

```bash
npm install
npm run dev
```

## Firebase setup

Copy `.env.example` to `.env` and fill your Firebase project config.

```bash
cp .env.example .env
```

## Test login roles

The login page has demo role buttons. They let you test the UI as:

- admin
- couple
- shop
- guest

Real Firebase login is also included. For real roles, create a `Users/{uid}` document:

```js
{
  uid: "firebase-auth-uid",
  email: "user@example.com",
  role: "couple" // "admin" | "couple" | "shop" | "guest"
}
```

## Image storage recommendation

Do not store image files in Firestore. Firestore should store only:

```js
imageUrl: "https://...",
storagePath: "products/shopId/productId.jpg"
```

For this project:

1. Seeded gifts: use 30–80 curated gift images, upload them to Firebase Storage once, then save URLs in `gifts`.
2. Shop products: shops upload images to Firebase Storage when they add products.
3. If Firebase Storage space becomes a concern, use Cloudinary, Supabase Storage, ImageKit, or another CDN for images, and still save only the URL in Firestore.
4. Do not seed thousands of items manually for the 2-day version. Make a strong demo catalog first.

## Important files

- `src/firebase/firebaseModel.js`: collection names and helpers
- `src/firebase/registryService.js`: add/remove wishlist items
- `src/firebase/claimService.js`: guest claim logic
- `src/context/AuthContext.jsx`: auth and demo role state
- `src/routes/AppRoutes.jsx`: page routing
