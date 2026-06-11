import { useState } from "react";
import toast from "react-hot-toast";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Button from "../../components/common/Button";


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


export default function ThankYouCard() {
  const [message, setMessage] = useState("");

  function generate() {
    setMessage("Dear guest, thank you for celebrating our special event with us and for your thoughtful gift. Your love and support made our day unforgettable.");
    toast.success("Thank-you card generated");
  }

  return (
    <DashboardLayout title="Thank You Card" subtitle="Generate thank-you message after the event." links={coupleLinks}>
      <div className="card space-y-4 p-6">
        <Button onClick={generate}>Generate Card</Button>
        {message && <div className="rounded-2xl bg-brand-50 p-6 text-lg leading-relaxed text-slate-700">{message}</div>}
      </div>
      <section className="mt-6 card p-5"><h2 className="font-bold">What this page does</h2><p className="mt-2 text-sm text-slate-600">This page can generate personalized thank-you cards using event data, guest name, and claimed gift.</p></section>
    </DashboardLayout>
  );
}
