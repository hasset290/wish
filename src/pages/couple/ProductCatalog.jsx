import toast from "react-hot-toast";
import DashboardLayout from "../../components/layout/DashboardLayout";
import ProductCard from "../../components/shops/ProductCard";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import useProducts from "../../hooks/useProducts";
import { addItemToRegistry } from "../../firebase/registryService";


const coupleLinks = [
  { to: "/couple/dashboard", label: "Dashboard" },
  { to: "/couple/profile", label: "Profile" },
  { to: "/couple/gifts", label: "Seeded Gifts" },
  { to: "/couple/products", label: "Shop Products" },
  { to: "/couple/registry", label: "My Registry" },
  { to: "/couple/favorites", label: "Favorites" },
  { to: "/couple/guests", label: "Guests" },
  { to: "/couple/claims", label: "Claims" },
  { to: "/couple/thank-you", label: "Thank You" }
];


export default function ProductCatalog() {
  const { products, loading } = useProducts();

  async function add(product) {
    try { await addItemToRegistry("demo-couple", product); }
    catch (e) { toast.error(e.message); }
  }

  return (
    <DashboardLayout title="Shop Products" subtitle="Approved products uploaded by shops." links={coupleLinks}>
      {loading ? <LoadingSpinner /> : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.id} product={product} onAdd={add} />)}
        </div>
      )}
      <section className="mt-6 card p-5"><h2 className="font-bold">What this page does</h2><p className="mt-2 text-sm text-slate-600">This page shows Products where approvalStatus is approved and isActive is true.</p></section>
    </DashboardLayout>
  );
}
