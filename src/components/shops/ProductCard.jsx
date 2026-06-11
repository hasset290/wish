import Button from "../common/Button";
import { formatCurrency } from "../../utils/formatCurrency";

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="card overflow-hidden">
      <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-cover" />
      <div className="space-y-3 p-4">
        <div>
          <p className="text-xs font-semibold uppercase text-brand-600">{product.shopName}</p>
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-sm text-slate-500">{product.category}</p>
        </div>
        <p className="font-bold">{formatCurrency(product.price, product.currency)}</p>
        <Button onClick={() => onAdd?.(product)}>Add to Registry</Button>
      </div>
    </article>
  );
}
