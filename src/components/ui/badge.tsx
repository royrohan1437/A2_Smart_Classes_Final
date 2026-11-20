import type { HTMLAttributes } from "react";

export type BadgeVariant = "navy" | "gold" | "success" | "warning" | "danger" | "neutral";

const variantClasses: Record<BadgeVariant, string> = {
  navy: "bg-navy-950 text-white",
  gold: "bg-gold-300 text-navy-950",
  success: "bg-[#e9f4ef] text-[#1c684b]",
  warning: "bg-[#fbf3df] text-[#81510c]",
  danger: "bg-[#fbeaea] text-[#991b14]",
  neutral: "bg-[#edf0f4] text-charcoal-soft",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ variant = "neutral", className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex min-h-6 items-center rounded-full px-2.5 py-1 text-xs font-semibold ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
