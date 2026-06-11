import Button from "./Button";

export default function ConfirmDialog({ title, message, onConfirm, onCancel }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-slate-600">{message}</p>
      <div className="flex gap-2">
        <Button variant="danger" onClick={onConfirm}>Yes</Button>
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
      </div>
    </div>
  );
}
