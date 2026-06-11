import Sidebar from "../layout/Sidebar";

export default function AdminSidebar() {
  return <Sidebar links={[
    { to: "/admin", label: "Dashboard" },
    { to: "/admin/couples", label: "Couples" },
    { to: "/admin/shops", label: "Shops" },
    { to: "/admin/products", label: "Products" },
    { to: "/admin/gifts", label: "Gifts" },
    { to: "/admin/claims", label: "Claims" },
    { to: "/admin/invites", label: "Invites" },
    { to: "/admin/settings", label: "Settings" }
  ]} />;
}
