export default function Button({ children, className = "", variant = "primary", ...props }) {
  const base = variant === "danger" ? "btn-danger" : variant === "secondary" ? "btn-secondary" : "btn-primary";
  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
