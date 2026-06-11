import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import DashboardLayout from "../../components/layout/DashboardLayout";
import GiftGrid from "../../components/gifts/GiftGrid";
import GiftSearchBar from "../../components/gifts/GiftSearchBar";
import GiftFilters from "../../components/gifts/GiftFilters";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import useGifts from "../../hooks/useGifts";
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


export default function GiftCatalog() {
  const { gifts, loading } = useGifts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filtered = useMemo(() => gifts.filter((g) =>
    (!category || g.category === category) &&
    g.name.toLowerCase().includes(search.toLowerCase())
  ), [gifts, search, category]);

  async function add(gift) {
    try { await addItemToRegistry("demo-couple", gift); }
    catch (e) { toast.error(e.message); }
  }

  return (
    <DashboardLayout title="Seeded Gift Catalog" subtitle="Default gift ideas added by admin." links={coupleLinks}>
      <div className="mb-5 grid gap-3 md:grid-cols-[1fr_240px]">
        <GiftSearchBar value={search} onChange={setSearch} />
        <GiftFilters category={category} setCategory={setCategory} />
      </div>
      {loading ? <LoadingSpinner /> : <GiftGrid gifts={filtered} onAdd={add} onFavorite={() => toast.success("Added to favorites")} />}
      <section className="mt-6 card p-5"><h2 className="font-bold">What this page does</h2><p className="mt-2 text-sm text-slate-600">This page shows seeded gifts from the gifts collection and lets the couple add them to registry.</p></section>
    </DashboardLayout>
  );
}
