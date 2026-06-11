import DashboardLayout from "../../components/layout/DashboardLayout";
import ProductCard from "../../components/shops/ProductCard";
import useProducts from "../../hooks/useProducts";


const shopLinks = [
  { to: "/shop/dashboard", label: "Dashboard" },
  { to: "/shop/profile", label: "Profile" },
  { to: "/shop/products", label: "Products" },
  { to: "/shop/add-product", label: "Add Product" },
  { to: "/shop/orders", label: "Orders" }
];


export default function ShopProducts() {
  const { products } = useProducts();

  return (
    <DashboardLayout title="Shop Products" subtitle="Products uploaded by your shop." links={shopLinks}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      <section className="mt-6 card p-5"><h2 className="font-bold">What this page does</h2><p className="mt-2 text-sm text-slate-600">This page should query Products where shopId equals the current shop id.</p></section>
    </DashboardLayout>
  );
}
