import type { ReactNode } from "react";
import Link from "next/link";

export interface PortalNavItem {
  label: string;
  href: string;
  indicator?: boolean;
}

export function PortalShell({
  title,
  items,
  children,
  kind,
}: {
  title: string;
  items: PortalNavItem[];
  children: ReactNode;
  kind: "student" | "admin";
}) {
  return (
    <div className="min-h-screen bg-ivory text-charcoal md:grid md:grid-cols-[240px_1fr]">
      <aside className="hidden border-r border-navy-950/10 bg-navy-950 p-5 text-ivory md:block">
        <p className="font-serif text-xl">A2Smart Classes</p>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold-300">{kind} portal</p>
        <nav className="mt-8 grid gap-1" aria-label={`${kind} navigation`}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center justify-between rounded-md px-3 text-sm text-ivory/85 hover:bg-white/8 hover:text-gold-300"
            >
              <span>{item.label}</span>
              {item.indicator ? (
                <span className="size-2 rounded-full bg-gold-300" aria-label="New items" />
              ) : null}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="min-w-0">
        <header className="flex h-16 items-center justify-between border-b border-navy-950/10 bg-white px-4 md:px-8">
          <p className="font-serif text-xl text-navy-950">{title}</p>
          <span className="text-xs text-muted">Account services pending</span>
        </header>
        <nav
          aria-label={`${kind} navigation`}
          className="flex gap-1 overflow-x-auto border-b border-navy-950/10 bg-white px-3 py-2 md:hidden"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 px-3 py-2 text-sm text-navy-950 hover:text-gold-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <main className="p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
