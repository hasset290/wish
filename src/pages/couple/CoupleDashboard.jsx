import DashboardLayout from "../../components/layout/DashboardLayout";
import useCouple from "../../hooks/useCouple";


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


export default function CoupleDashboard() {
  const { couple } = useCouple("demo-couple");

  return (
    <DashboardLayout title="Couple Dashboard" subtitle="Manage your event wishlist." links={coupleLinks}>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card p-5"><p className="text-sm text-slate-500">Event</p><p className="text-2xl font-black">{couple?.eventType}</p></div>
        <div className="card p-5"><p className="text-sm text-slate-500">Registry Items</p><p className="text-2xl font-black">3</p></div>
        <div className="card p-5"><p className="text-sm text-slate-500">Claims</p><p className="text-2xl font-black">0</p></div>
      </div>
      <section className="mt-6 card p-5">
        <h2 className="font-bold">What this page does</h2>
        <p className="mt-2 text-sm text-slate-600">This is the event owner home screen. It summarizes registry, guests, claims, and event information.</p>
      </section>
    </DashboardLayout>
  );
}
