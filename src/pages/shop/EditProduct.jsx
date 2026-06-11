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


export default function EditProduct() {
  return (
    <DashboardLayout title="Edit Product" subtitle="Update product details." links={shopLinks}>
      <ProductForm initial={{ name: "Coffee Machine", price: 12000, category: "Kitchen", stock: 8 }} onSubmit={() => toast.success("Product updated")} />
      <section className="mt-6 card p-5"><h2 className="font-bold">What this page does</h2><p className="mt-2 text-sm text-slate-600">This page updates an existing Products/{productId} document.</p></section>
    </DashboardLayout>
  );
}
