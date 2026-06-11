import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../../components/layout/Navbar";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import useAuth from "../../hooks/useAuth";
import { loginWithEmail } from "../../firebase/authService";

export default function Login() {
  const navigate = useNavigate();
  const { loginAsDemo } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      toast.success("Logged in successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  }

  function demo(role) {
    loginAsDemo(role);
    if (role === "admin") navigate("/admin");
    else if (role === "shop") navigate("/shop/dashboard");
    else if (role === "couple") navigate("/couple/dashboard");
    else navigate("/registry/demo-couple");
  }

  return (
    <>
      <Navbar />
      <main className="page max-w-xl">
        <div className="card p-6">
          <h1 className="text-3xl font-black">Login</h1>
          <p className="mt-2 text-slate-500">Use Firebase login or demo role buttons for testing.</p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button className="w-full">Login</Button>
          </form>

          <div className="mt-6 grid grid-cols-2 gap-2">
            <Button variant="secondary" onClick={() => demo("admin")}>Demo Admin</Button>
            <Button variant="secondary" onClick={() => demo("couple")}>Demo Couple</Button>
            <Button variant="secondary" onClick={() => demo("shop")}>Demo Shop</Button>
            <Button variant="secondary" onClick={() => demo("guest")}>Demo Guest</Button>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            No account? <Link to="/register" className="text-brand-600">Register</Link>
          </p>
        </div>

        <section className="mt-6 card p-5">
          <h2 className="font-bold">What this page does</h2>
          <p className="mt-2 text-sm text-slate-600">
            This page authenticates users. Demo buttons let you test all roles quickly before your Firebase users are complete.
          </p>
        </section>
      </main>
    </>
  );
}
