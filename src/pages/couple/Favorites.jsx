import DashboardLayout from "../../components/layout/DashboardLayout";
import EmptyState from "../../components/common/EmptyState";


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


export default function Favorites() {
  return (
    <DashboardLayout title="Favorites" subtitle="Saved gifts and products." links={coupleLinks}>
      <EmptyState title="No favorites yet" message="Favorite gifts/products from catalog pages." />
      <section className="mt-6 card p-5"><h2 className="font-bold">What this page does</h2><p className="mt-2 text-sm text-slate-600">This page will read Couples/{coupleId}/favorite. Favorites are liked items not yet added to registry.</p></section>
    </DashboardLayout>
  );
}
