import { CATEGORIES } from "../../data/categories";

export default function GiftFilters({ category, setCategory }) {
  return (
    <select className="input max-w-xs" value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="">All categories</option>
      {CATEGORIES.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
    </select>
  );
}
