import { useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../../components/layout/Navbar";
import RegistryGrid from "../../components/registry/RegistryGrid";
import ClaimGiftModal from "../../components/registry/ClaimGiftModal";
import useCouple from "../../hooks/useCouple";
import useRegistry from "../../hooks/useRegistry";
import { claimRegistryItem } from "../../firebase/claimService";
import { demoGifts } from "../../firebase/demoData";
import { registryItemId, giftSnapshot } from "../../firebase/firebaseModel";

export default function PublicRegistry() {
  const { coupleId = "demo-couple" } = useParams();
  const { couple } = useCouple(coupleId);
  const { registry, reload } = useRegistry(coupleId);
  const [selected, setSelected] = useState(null);

  const fallbackRegistry = registry.length ? registry : demoGifts.map((gift) => ({
    id: registryItemId("demo-couple", gift.id),
    registryItemId: registryItemId("demo-couple", gift.id),
    coupleId: "demo-couple",
    itemId: gift.id,
    itemType: "gift",
    sourceCollection: "gifts",
    status: "available",
    giftSnapshot: giftSnapshot(gift)
  }));

  async function submitClaim(data) {
    try {
      await claimRegistryItem({ coupleId, registryItemId: selected.registryItemId || selected.id, ...data });
      setSelected(null);
      reload();
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="mb-6 card p-6">
          <p className="text-brand-600 font-bold">{couple?.eventType}</p>
          <h1 className="text-3xl font-black">{couple?.eventTitle || "Public Registry"}</h1>
          <p className="mt-2 text-slate-500">{couple?.location}</p>
        </div>

        <RegistryGrid items={fallbackRegistry} onClaim={(item) => setSelected(item)} />
        <ClaimGiftModal open={!!selected} item={selected} onClose={() => setSelected(null)} onSubmit={submitClaim} />

        <section className="mt-6 card p-5">
          <h2 className="font-bold">What this page does</h2>
          <p className="mt-2 text-sm text-slate-600">
            Guests open this public page from a shared link. They can reserve or mark a gift as bought.
          </p>
        </section>
      </main>
    </>
  );
}
