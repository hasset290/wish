import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

export default function InvitePage() {
  const { token } = useParams();

  return (
    <>
      <Navbar />
      <main className="page max-w-2xl">
        <div className="card p-6">
          <h1 className="text-3xl font-black">Invite</h1>
          <p className="mt-2 text-slate-600">Invite token: {token}</p>
          <p className="mt-4 text-slate-600">
            In the real app, this page fetches the invite document by token and opens the related registry.
          </p>
          <Link className="btn-primary mt-6" to="/registry/demo-couple">Open Demo Registry</Link>
        </div>

        <section className="mt-6 card p-5">
          <h2 className="font-bold">What this page does</h2>
          <p className="mt-2 text-sm text-slate-600">
            This page connects an invite token to a couple/event and can track RSVP or invite usage.
          </p>
        </section>
      </main>
    </>
  );
}
