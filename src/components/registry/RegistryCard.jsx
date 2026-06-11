import Button from "../common/Button";
import RegistryStatusBadge from "./RegistryStatusBadge";
import { formatCurrency } from "../../utils/formatCurrency";

export default function RegistryCard({ item, onClaim, onRemove }) {
  const gift = item.giftSnapshot || item;
  return (
    <article className="card overflow-hidden">
      <img src={gift.imageUrl} alt={gift.name} className="h-48 w-full object-cover" />
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold">{gift.name}</h3>
          <RegistryStatusBadge status={item.status} />
        </div>
        <p className="text-sm text-slate-500">{gift.category}</p>
        <p className="font-bold">{formatCurrency(gift.price, gift.currency)}</p>
        <div className="flex gap-2">
          {onClaim && item.status === "available" && <Button onClick={() => onClaim(item)}>Claim</Button>}
          {onRemove && <Button variant="danger" onClick={() => onRemove(item)}>Remove</Button>}
        </div>
      </div>
    </article>
  );
}
