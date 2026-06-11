import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import InvitePage from "../pages/public/InvitePage";
import PublicRegistry from "../pages/public/PublicRegistry";

import CoupleRoute from "./CoupleRoute";
import CoupleDashboard from "../pages/couple/CoupleDashboard";
import CoupleProfile from "../pages/couple/CoupleProfile";
import GiftCatalog from "../pages/couple/GiftCatalog";
import ProductCatalog from "../pages/couple/ProductCatalog";
import MyRegistry from "../pages/couple/MyRegistry";
import Favorites from "../pages/couple/Favorites";
import Guests from "../pages/couple/Guests";
import Claims from "../pages/couple/Claims";
import ThankYouCard from "../pages/couple/ThankYouCard";

import ShopRoute from "./ShopRoute";
import ShopDashboard from "../pages/shop/ShopDashboard";
import ShopProfile from "../pages/shop/ShopProfile";
import AddProduct from "../pages/shop/AddProduct";
import EditProduct from "../pages/shop/EditProduct";
import ShopProducts from "../pages/shop/ShopProducts";
import ShopOrders from "../pages/shop/ShopOrders";

import AdminRoute from "./AdminRoute";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageCouples from "../pages/admin/ManageCouples";
import ManageShops from "../pages/admin/ManageShops";
import ManageProducts from "../pages/admin/ManageProducts";
import ManageGifts from "../pages/admin/ManageGifts";
import ManageClaims from "../pages/admin/ManageClaims";
import ManageInvites from "../pages/admin/ManageInvites";
import AdminSettings from "../pages/admin/AdminSettings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/invite/:token" element={<InvitePage />} />
      <Route path="/registry/:coupleId" element={<PublicRegistry />} />

      <Route path="/couple/dashboard" element={<CoupleRoute><CoupleDashboard /></CoupleRoute>} />
      <Route path="/couple/profile" element={<CoupleRoute><CoupleProfile /></CoupleRoute>} />
      <Route path="/couple/gifts" element={<CoupleRoute><GiftCatalog /></CoupleRoute>} />
      <Route path="/couple/products" element={<CoupleRoute><ProductCatalog /></CoupleRoute>} />
      <Route path="/couple/registry" element={<CoupleRoute><MyRegistry /></CoupleRoute>} />
      <Route path="/couple/favorites" element={<CoupleRoute><Favorites /></CoupleRoute>} />
      <Route path="/couple/guests" element={<CoupleRoute><Guests /></CoupleRoute>} />
      <Route path="/couple/claims" element={<CoupleRoute><Claims /></CoupleRoute>} />
      <Route path="/couple/thank-you" element={<CoupleRoute><ThankYouCard /></CoupleRoute>} />

      <Route path="/shop/dashboard" element={<ShopRoute><ShopDashboard /></ShopRoute>} />
      <Route path="/shop/profile" element={<ShopRoute><ShopProfile /></ShopRoute>} />
      <Route path="/shop/add-product" element={<ShopRoute><AddProduct /></ShopRoute>} />
      <Route path="/shop/edit-product/:productId" element={<ShopRoute><EditProduct /></ShopRoute>} />
      <Route path="/shop/products" element={<ShopRoute><ShopProducts /></ShopRoute>} />
      <Route path="/shop/orders" element={<ShopRoute><ShopOrders /></ShopRoute>} />

      <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      <Route path="/admin/couples" element={<AdminRoute><ManageCouples /></AdminRoute>} />
      <Route path="/admin/shops" element={<AdminRoute><ManageShops /></AdminRoute>} />
      <Route path="/admin/products" element={<AdminRoute><ManageProducts /></AdminRoute>} />
      <Route path="/admin/gifts" element={<AdminRoute><ManageGifts /></AdminRoute>} />
      <Route path="/admin/claims" element={<AdminRoute><ManageClaims /></AdminRoute>} />
      <Route path="/admin/invites" element={<AdminRoute><ManageInvites /></AdminRoute>} />
      <Route path="/admin/settings" element={<AdminRoute><AdminSettings /></AdminRoute>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
