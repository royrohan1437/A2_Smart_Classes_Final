"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Teachers", href: "/faculty" },
  { label: "Courses", href: "/academics" },
  { label: "Study Materials", href: "/study-materials" },
  { label: "Class Videos", href: "/videos" },
  { label: "Gallery", href: "/gallery" },
];

export function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLoginOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-gold-300/15 bg-navy-950/92 shadow-lg backdrop-blur-md"
          : "bg-navy-950"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 text-white"
          aria-label="A2Smart Classes home"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold-300/70 font-serif text-lg text-gold-300">
            A2
          </span>
          <span className="min-w-0">
            <span className="block font-serif text-lg leading-none sm:text-xl">
              A2Smart Classes
            </span>
            <span className="mt-1 hidden truncate text-[10px] uppercase tracking-[0.18em] text-gold-300/80 sm:block">
              Premium Academic Guidance
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link relative py-3 text-xs font-semibold text-ivory/90 transition-colors hover:text-gold-300 xl:text-sm"
            >
              {item.label}
              {pathname === item.href ? (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gold-300 transition-all duration-300" />
              ) : null}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              className="min-h-11 rounded-md border border-gold-300/50 px-4 text-sm font-semibold text-gold-300 transition-colors hover:border-gold-300 hover:bg-gold-300/10"
              aria-haspopup="menu"
              aria-expanded={loginOpen}
              onClick={() => setLoginOpen((open) => !open)}
            >
              Login
            </button>
            {loginOpen ? (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-44 rounded-md border border-navy-800/10 bg-white p-2 shadow-xl"
              >
                <Link
                  role="menuitem"
                  href="/student/login"
                  className="block rounded px-3 py-2.5 text-sm text-charcoal hover:bg-ivory"
                  onClick={() => setLoginOpen(false)}
                >
                  Student Login
                </Link>
                <Link
                  role="menuitem"
                  href="/admin/login"
                  className="block rounded px-3 py-2.5 text-sm text-charcoal hover:bg-ivory"
                  onClick={() => setLoginOpen(false)}
                >
                  Admin Login
                </Link>
              </div>
            ) : null}
          </div>
          <Link
            href="/enquiry"
            className="inline-flex min-h-11 items-center border border-gold-300 bg-gold-300 px-4 text-sm font-semibold text-navy-950 transition-colors hover:bg-white hover:border-white"
          >
            Enroll Now
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="grid size-11 place-items-center rounded-md border border-gold-300/40 text-xl text-gold-300 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen ? (
        <nav
          className="border-t border-gold-300/15 bg-navy-950 px-5 py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="grid gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-3 py-3 text-base text-ivory"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              className="rounded px-3 py-3 text-left text-base text-ivory"
              aria-expanded={loginOpen}
              onClick={() => setLoginOpen((open) => !open)}
            >
              Login
            </button>
            {loginOpen ? (
              <div className="ml-3 grid border-l border-gold-300/30 pl-3">
                <Link
                  href="/student/login"
                  className="py-2.5 text-sm text-gold-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Student Login
                </Link>
                <Link
                  href="/admin/login"
                  className="py-2.5 text-sm text-gold-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Admin Login
                </Link>
              </div>
            ) : null}
            <Link
              href="/enquiry"
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-gold-300 px-5 text-sm font-bold text-navy-950"
              onClick={() => setMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
