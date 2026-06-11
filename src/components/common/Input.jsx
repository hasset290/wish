export default function Input({ label, ...props }) {
  return (
    <label className="block space-y-1">
      {label && <span className="text-sm font-medium text-slate-700">{label}</span>}
      <input className="input" {...props} />
    </label>
  );
}
