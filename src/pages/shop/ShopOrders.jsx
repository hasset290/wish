import DashboardLayout from "../../components/layout/DashboardLayout";
import EmptyState from "../../components/common/EmptyState";


const shopLinks = [
  { to: "/shop/dashboard", label: "Dashboard" },
  { to: "/shop/profile", label: "Profile" },
  { to: "/shop/products", label: "Products" },
  { to: "/shop/add-product", label: "Add Product" },
  { to: "/shop/orders", label: "Orders" }
];


export default function ShopOrders() {
  return (
    <DashboardLayout title="Shop Orders" subtitle="Orders from guest purchases." links={shopLinks}>
      <EmptyState title="No orders yet" message="Orders will appear when guests buy shop products." />
      <section className="mt-6 card p-5"><h2 className="font-bold">What this page does</h2><p className="mt-2 text-sm text-slate-600">This page is optional for version 1. It becomes important when you add real payment/orders.</p></section>
    </DashboardLayout>
  );
}
