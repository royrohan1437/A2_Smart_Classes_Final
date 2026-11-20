import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-gold-700 bg-navy-950 text-white shadow-[4px_4px_10px_rgba(7,20,43,.18),-2px_-2px_8px_rgba(229,193,106,.12)] hover:-translate-y-0.5 hover:border-gold-300 active:translate-y-px active:shadow-inner",
  secondary:
    "border-gold-300 bg-gold-300 text-navy-950 hover:-translate-y-0.5 hover:bg-[#f0cf78] active:translate-y-px",
  outline: "border-navy-800 bg-transparent text-navy-950 hover:border-gold-700 hover:text-gold-700",
  ghost: "border-transparent bg-transparent text-navy-950 hover:bg-navy-950/5",
  danger: "border-danger bg-danger text-white hover:bg-[#991b14] active:translate-y-px",
};

export function Button({
  className = "",
  variant = "primary",
  loading = false,
  disabled,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-55 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {loading ? <span className="brand-loading-line w-5" aria-hidden="true" /> : null}
      {children}
    </button>
  );
}
