export function formatCurrency(amount = 0, currency = "ETB") {
  const value = Number(amount || 0);
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(value);
}
