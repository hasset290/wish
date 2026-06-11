import toast from "react-hot-toast";

export function confirmToast(message, onConfirm) {
  toast((t) => (
    <div className="space-y-3">
      <p className="font-medium text-slate-800">{message}</p>
      <div className="flex gap-2">
        <button
          className="rounded-lg bg-red-600 px-3 py-1 text-sm font-medium text-white"
          onClick={() => {
            toast.dismiss(t.id);
            onConfirm?.();
          }}
        >
          Yes
        </button>
        <button
          className="rounded-lg bg-slate-200 px-3 py-1 text-sm font-medium"
          onClick={() => toast.dismiss(t.id)}
        >
          Cancel
        </button>
      </div>
    </div>
  ), { duration: 6000 });
}
