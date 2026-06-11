import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../common/Button";

export default function Navbar() {
  const { user, role, logout } = useAuth();

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-black text-brand-600">GiftWish</Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/registry/demo-couple" className="hover:text-brand-600">Public Registry</Link>
          {role === "couple" && <Link to="/couple/dashboard">Couple</Link>}
          {role === "shop" && <Link to="/shop/dashboard">Shop</Link>}
          {role === "admin" && <Link to="/admin">Admin</Link>}
          {user ? (
            <Button variant="secondary" onClick={logout}>Logout</Button>
          ) : (
            <Link className="btn-primary" to="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
