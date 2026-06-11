import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ title, subtitle, links, children }) {
  return (
    <>
      <Navbar />
      <main className="page">
        <div className="mb-6">
          <h1 className="text-3xl font-black">{title}</h1>
          {subtitle && <p className="mt-1 text-slate-500">{subtitle}</p>}
        </div>
        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          <Sidebar links={links} />
          <section>{children}</section>
        </div>
      </main>
    </>
  );
}
