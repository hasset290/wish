import DashboardLayout from "../../components/layout/DashboardLayout";
import AdminStatsCard from "../../components/admin/AdminStatsCard";


const adminLinks = [
  { to: "/admin", label: "Dashboard" },
  { to: "/admin/couples", label: "Couples" },
  { to: "/admin/shops", label: "Shops" },
  { to: "/admin/products", label: "Products" },
  { to: "/admin/gifts", label: "Seeded Gifts" },
  { to: "/admin/claims", label: "Claims" },
  { to: "/admin/invites", label: "Invites" },
  { to: "/admin/settings", label: "Settings" }
];


export default function AdminDashboard() {
  return (
    <DashboardLayout title="Admin Dashboard" subtitle="Control the whole platform." links={adminLinks}>
      <div className="grid gap-4 md:grid-cols-4">
        <AdminStatsCard label="Couples" value="12" />
        <AdminStatsCard label="Shops" value="5" />
        <AdminStatsCard label="Products" value="43" />
        <AdminStatsCard label="Claims" value="18" />
      </div>
      <section className="mt-6 card p-5"><h2 className="font-bold">What this page does</h2><p className="mt-2 text-sm text-slate-600">Admin sees platform statistics and can manage shops, products, gifts, claims, invites, and users.</p></section>
    </DashboardLayout>
  );
}
