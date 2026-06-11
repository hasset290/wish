import { useState } from "react";
import toast from "react-hot-toast";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Input from "../../components/common/Input";
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


export default function Guests() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState([]);

  function addGuest(e) {
    e.preventDefault();
    if (!name.trim()) return toast.error("Guest name is required");
    setGuests((prev) => [...prev, { id: Date.now(), name }]);
    setName("");
    toast.success("Guest added");
  }

  return (
    <DashboardLayout title="Guests" subtitle="Manage invited guests." links={coupleLinks}>
      <form className="card mb-5 flex gap-3 p-4" onSubmit={addGuest}>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Guest name" />
        <Button>Add</Button>
      </form>
      <div className="card divide-y">
        {guests.map((g) => <div key={g.id} className="p-4 font-medium">{g.name}</div>)}
        {!guests.length && <div className="p-4 text-slate-500">No guests added yet.</div>}
      </div>
      <section className="mt-6 card p-5"><h2 className="font-bold">What this page does</h2><p className="mt-2 text-sm text-slate-600">This page manages Couples/{coupleId}/guest. Guests can be connected to invites and claims.</p></section>
    </DashboardLayout>
  );
}
