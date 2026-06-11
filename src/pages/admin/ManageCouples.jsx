import DashboardLayout from "../../components/layout/DashboardLayout";
import EmptyState from "../../components/common/EmptyState";
import ApprovalTable from "../../components/admin/ApprovalTable";


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


export default function ManageCouples() {
  const rows = [
    { id: "1", name: "Example pending item", status: "pending" },
    { id: "2", name: "Example approved item", status: "approved" }
  ];

  return (
    <DashboardLayout title="Manage Couples" subtitle="Admin views event owners/couples and their registries." links={adminLinks}>
      <EmptyState title="No records loaded" message="Connect this page to Firestore service functions." />
      <section className="mt-6 card p-5">
        <h2 className="font-bold">What this page does</h2>
        <p className="mt-2 text-sm text-slate-600">Admin views event owners/couples and their registries.</p>
      </section>
    </DashboardLayout>
  );
}
