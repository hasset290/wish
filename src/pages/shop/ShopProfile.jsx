import toast from "react-hot-toast";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";


const shopLinks = [
  { to: "/shop/dashboard", label: "Dashboard" },
  { to: "/shop/profile", label: "Profile" },
  { to: "/shop/products", label: "Products" },
  { to: "/shop/add-product", label: "Add Product" },
  { to: "/shop/orders", label: "Orders" }
];


export default function ShopProfile() {
  return (
    <DashboardLayout title="Shop Profile" subtitle="Edit store information." links={shopLinks}>
      <form className="card space-y-4 p-6" onSubmit={(e) => { e.preventDefault(); toast.success("Shop profile saved"); }}>
        <Input label="Shop name" defaultValue="Addis Home Store" />
        <Input label="Email" defaultValue="shop@example.com" />
        <Input label="Phone" defaultValue="+251" />
        <Input label="Address" defaultValue="Addis Ababa" />
        <Button>Save</Button>
      </form>
      <section className="mt-6 card p-5"><h2 className="font-bold">What this page does</h2><p className="mt-2 text-sm text-slate-600">This page writes shop information to Shops/{shopId}. Admin can approve or reject the shop.</p></section>
    </DashboardLayout>
  );
}
