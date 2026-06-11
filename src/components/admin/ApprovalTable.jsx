import Button from "../common/Button";

export default function ApprovalTable({ title, rows = [] }) {
  return (
    <div className="card overflow-hidden">
      <div className="border-b p-4">
        <h3 className="font-bold">{title}</h3>
      </div>
      <div className="divide-y">
        {rows.map((row) => (
          <div key={row.id} className="flex items-center justify-between gap-4 p-4">
            <div>
              <p className="font-semibold">{row.name}</p>
              <p className="text-sm text-slate-500">{row.status}</p>
            </div>
            <div className="flex gap-2">
              <Button>Approve</Button>
              <Button variant="danger">Reject</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
