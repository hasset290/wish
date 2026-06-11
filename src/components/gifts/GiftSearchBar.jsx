export default function GiftSearchBar({ value, onChange }) {
  return (
    <input
      className="input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search gifts..."
    />
  );
}
