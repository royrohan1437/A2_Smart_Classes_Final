import type { ReactNode } from "react";

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
            <a
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center justify-between rounded-md px-3 text-sm text-ivory/85 hover:bg-white/8 hover:text-gold-300"
            >
              <span>{item.label}</span>
              {item.indicator ? (
                <span className="size-2 rounded-full bg-gold-300" aria-label="New items" />
              ) : null}
            </a>
          ))}
        </nav>
      </aside>
      <div className="min-w-0">
        <header className="flex h-16 items-center justify-between border-b border-navy-950/10 bg-white px-4 md:px-8">
          <p className="font-serif text-xl text-navy-950">{title}</p>
          <button
            type="button"
            className="min-h-11 rounded-md border border-navy-950/15 px-3 text-sm md:hidden"
            aria-label="Open navigation drawer"
          >
            Menu
          </button>
        </header>
        <main className="p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
