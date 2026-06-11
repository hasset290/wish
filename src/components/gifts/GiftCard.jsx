import Button from "../common/Button";
import { formatCurrency } from "../../utils/formatCurrency";

export default function GiftCard({ gift, onAdd, onFavorite }) {
  return (
    <article className="card overflow-hidden">
      <img src={gift.imageUrl} alt={gift.name} className="h-48 w-full object-cover" />
      <div className="space-y-3 p-4">
        <div>
          <p className="text-xs font-semibold uppercase text-brand-600">{gift.category}</p>
          <h3 className="text-lg font-bold">{gift.name}</h3>
          <p className="line-clamp-2 text-sm text-slate-500">{gift.description}</p>
        </div>
        <p className="font-bold">{formatCurrency(gift.price, gift.currency)}</p>
        <div className="flex gap-2">
          <Button className="flex-1" onClick={() => onAdd?.(gift)}>Add</Button>
          <Button variant="secondary" onClick={() => onFavorite?.(gift)}>♡</Button>
        </div>
      </div>
    </article>
  );
}
