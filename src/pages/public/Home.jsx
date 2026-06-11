import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page">
        <section className="grid items-center gap-8 py-12 lg:grid-cols-2">
          <div>
            <p className="font-bold text-brand-600">Wedding • Birthday • Baby Shower</p>
            <h1 className="mt-3 text-5xl font-black leading-tight">Share wishlists with relatives and guests.</h1>
            <p className="mt-4 text-lg text-slate-600">
              Create an event wishlist, add gifts or shop products, share your link, and let guests reserve gifts.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/register" className="btn-primary">Get Started</Link>
              <Link to="/registry/demo-couple" className="btn-secondary">View Demo Registry</Link>
            </div>
          </div>
          <div className="card p-6">
            <h2 className="text-2xl font-bold">Core flow</h2>
            <ol className="mt-4 space-y-3 text-slate-600">
              <li>1. Event owner creates profile.</li>
              <li>2. Adds seeded gifts and shop products.</li>
              <li>3. Shares public registry link.</li>
              <li>4. Guests reserve or buy gifts.</li>
              <li>5. Thank-you card is generated after event.</li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
