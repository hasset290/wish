import toast from "react-hot-toast";
import DashboardLayout from "../../components/layout/DashboardLayout";
import ProductForm from "../../components/shops/ProductForm";


const shopLinks = [
  { to: "/shop/dashboard", label: "Dashboard" },
  { to: "/shop/profile", label: "Profile" },
  { to: "/shop/products", label: "Products" },
  { to: "/shop/add-product", label: "Add Product" },
  { to: "/shop/orders", label: "Orders" }
];


export default function AddProduct() {
  return (
    <DashboardLayout title="Add Product" subtitle="Upload product information." links={shopLinks}>
      <ProductForm onSubmit={() => toast.success("Product saved as pending approval")} />
      <section className="mt-6 card p-5"><h2 className="font-bold">What this page does</h2><p className="mt-2 text-sm text-slate-600">This page creates a Products document. Product images should go to Storage, and only the imageUrl should be saved in Firestore.</p></section>
    </DashboardLayout>
  );
}
