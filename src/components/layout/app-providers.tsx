"use client";

import { Toaster } from "sonner";

export function AppProviders() {
  return (
    <Toaster
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast: "border border-navy-950/10 bg-white text-charcoal",
          success: "border-success/30",
          error: "border-danger/30",
          warning: "border-warning/30",
        },
      }}
    />
  );
}
