import { NavLink } from "react-router-dom";

export default function Sidebar({ links = [] }) {
  return (
    <aside className="card p-4">
      <nav className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block rounded-xl px-3 py-2 text-sm font-medium ${
                isActive ? "bg-brand-100 text-brand-700" : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
