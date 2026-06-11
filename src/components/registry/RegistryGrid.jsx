import RegistryCard from "./RegistryCard";
import EmptyState from "../common/EmptyState";

export default function RegistryGrid({ items = [], onClaim, onRemove }) {
  if (!items.length) {
    return <EmptyState title="Registry is empty" message="Add gifts or products to show them here." />;
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <RegistryCard key={item.id || item.registryItemId} item={item} onClaim={onClaim} onRemove={onRemove} />
      ))}
    </div>
  );
}
