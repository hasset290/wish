import DashboardLayout from "../../components/layout/DashboardLayout";


const shopLinks = [
  { to: "/shop/dashboard", label: "Dashboard" },
  { to: "/shop/profile", label: "Profile" },
  { to: "/shop/products", label: "Products" },
  { to: "/shop/add-product", label: "Add Product" },
  { to: "/shop/orders", label: "Orders" }
];


export default function ShopDashboard() {
  return (
    <DashboardLayout title="Shop Dashboard" subtitle="Manage products and orders." links={shopLinks}>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card p-5"><p className="text-sm text-slate-500">Status</p><p className="text-2xl font-black">Pending</p></div>
        <div className="card p-5"><p className="text-sm text-slate-500">Products</p><p className="text-2xl font-black">2</p></div>
        <div className="card p-5"><p className="text-sm text-slate-500">Orders</p><p className="text-2xl font-black">0</p></div>
      </div>
      <section className="mt-6 card p-5"><h2 className="font-bold">What this page does</h2><p className="mt-2 text-sm text-slate-600">This is the store dashboard. Shops manage their profile, products, and orders from here.</p></section>
    </DashboardLayout>
  );
}
