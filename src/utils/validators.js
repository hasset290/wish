export function requireText(value, fieldName = "Field") {
  if (!String(value || "").trim()) {
    return `${fieldName} is required`;
  }
  return "";
}

export function requirePositiveNumber(value, fieldName = "Number") {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) {
    return `${fieldName} must be greater than zero`;
  }
  return "";
}

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || ""));
}
