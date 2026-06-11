import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../../components/layout/Navbar";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { registerWithRole } from "../../firebase/authService";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", displayName: "", role: "couple" });

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await registerWithRole(form);
      toast.success("Account created");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <Navbar />
      <main className="page max-w-xl">
        <form className="card space-y-4 p-6" onSubmit={handleRegister}>
          <h1 className="text-3xl font-black">Register</h1>
          <Input label="Display name" value={form.displayName} onChange={(e) => update("displayName", e.target.value)} />
          <Input label="Email" value={form.email} onChange={(e) => update("email", e.target.value)} />
          <Input label="Password" type="password" value={form.password} onChange={(e) => update("password", e.target.value)} />
          <label className="block space-y-1">
            <span className="text-sm font-medium">Account type</span>
            <select className="input" value={form.role} onChange={(e) => update("role", e.target.value)}>
              <option value="couple">Event owner / Couple</option>
              <option value="shop">Shop</option>
            </select>
          </label>
          <Button className="w-full">Create Account</Button>
        </form>

        <section className="mt-6 card p-5">
          <h2 className="font-bold">What this page does</h2>
          <p className="mt-2 text-sm text-slate-600">
            This creates a Firebase Auth user and a Users document with a role. The role controls which dashboard the user can access.
          </p>
        </section>
      </main>
    </>
  );
}
