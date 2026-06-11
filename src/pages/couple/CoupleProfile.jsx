import { useState } from "react";
import toast from "react-hot-toast";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { EVENT_TYPES } from "../../data/eventTypes";


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


export default function CoupleProfile() {
  const [form, setForm] = useState({ eventTitle: "Arsema & Nahom Wedding", eventType: "Wedding", location: "Addis Ababa", eventDate: "2026-08-20" });
  function update(k, v) { setForm((p) => ({ ...p, [k]: v })); }

  return (
    <DashboardLayout title="Event Profile" subtitle="Edit event details." links={coupleLinks}>
      <form className="card space-y-4 p-6" onSubmit={(e) => { e.preventDefault(); toast.success("Profile saved"); }}>
        <Input label="Event title" value={form.eventTitle} onChange={(e) => update("eventTitle", e.target.value)} />
        <label className="block space-y-1">
          <span className="text-sm font-medium">Event type</span>
          <select className="input" value={form.eventType} onChange={(e) => update("eventType", e.target.value)}>
            {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <Input label="Location" value={form.location} onChange={(e) => update("location", e.target.value)} />
        <Input label="Event date" type="date" value={form.eventDate} onChange={(e) => update("eventDate", e.target.value)} />
        <Button>Save Profile</Button>
      </form>
      <section className="mt-6 card p-5"><h2 className="font-bold">What this page does</h2><p className="mt-2 text-sm text-slate-600">This page stores wedding, birthday, or baby shower details in Couples/{coupleId}.</p></section>
    </DashboardLayout>
  );
}
