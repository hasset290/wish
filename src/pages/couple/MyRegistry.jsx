import toast from "react-hot-toast";
import DashboardLayout from "../../components/layout/DashboardLayout";
import RegistryGrid from "../../components/registry/RegistryGrid";
import useRegistry from "../../hooks/useRegistry";
import { removeRegistryItem } from "../../firebase/registryService";
import { confirmToast } from "../../utils/toastConfirm";


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


export default function MyRegistry() {
  const { registry, reload } = useRegistry("demo-couple");

  function remove(item) {
    confirmToast("Are you sure you want to remove this item?", async () => {
      try {
        await removeRegistryItem("demo-couple", item.id || item.registryItemId);
        reload();
      } catch (e) {
        toast.error(e.message);
      }
    });
  }

  return (
    <DashboardLayout title="My Registry" subtitle="Items added to your wishlist." links={coupleLinks}>
      <RegistryGrid items={registry} onRemove={remove} />
      <section className="mt-6 card p-5"><h2 className="font-bold">What this page does</h2><p className="mt-2 text-sm text-slate-600">This page reads Couples/{coupleId}/registry and lets the couple remove wishlist items.</p></section>
    </DashboardLayout>
  );
}
