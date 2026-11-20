import type { HTMLAttributes } from "react";

export function Skeleton({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div aria-hidden="true" className={`skeleton rounded-md ${className}`} {...props} />;
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="grid gap-2" aria-label="Loading content" role="status">
      {Array.from({ length: lines }, (_, index) => (
        <Skeleton key={index} className={`h-3 ${index === lines - 1 ? "w-2/3" : "w-full"}`} />
      ))}
    </div>
  );
}
