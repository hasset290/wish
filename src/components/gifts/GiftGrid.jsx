import GiftCard from "./GiftCard";
import EmptyState from "../common/EmptyState";

export default function GiftGrid({ gifts = [], onAdd, onFavorite }) {
  if (!gifts.length) return <EmptyState title="No gifts found" />;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {gifts.map((gift) => (
        <GiftCard key={gift.id} gift={gift} onAdd={onAdd} onFavorite={onFavorite} />
      ))}
    </div>
  );
}
