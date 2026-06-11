const styles = {
  available: "bg-green-100 text-green-700",
  reserved: "bg-yellow-100 text-yellow-700",
  bought: "bg-blue-100 text-blue-700",
  cancelled: "bg-red-100 text-red-700"
};

export default function RegistryStatusBadge({ status = "available" }) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold ${styles[status] || styles.available}`}>
      {status}
    </span>
  );
}
