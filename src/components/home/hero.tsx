"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const imageColumns = [
  [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=82",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=700&q=82",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=82",
  ],
  [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=82",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=82",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=82",
  ],
  [
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=82",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=700&q=82",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=82",
  ],
];

export function HomepageHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [motionEnabled, setMotionEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setMotionEnabled(!reducedMotion.matches);
    updateMotionPreference();
    reducedMotion.addEventListener("change", updateMotionPreference);
    return () => reducedMotion.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!motionEnabled) return;

    let frame = 0;
    const updateColumns = () => {
      frame = 0;
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const progress = Math.max(
        -1,
        Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)),
      );
      const columns = heroRef.current.querySelectorAll<HTMLElement>("[data-parallax-column]");
      columns.forEach((column, index) => {
        const speeds = [-22, 18, -26];
        column.style.transform = `translate3d(0, ${progress * speeds[index]}px, 0)`;
      });
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateColumns);
    };

    updateColumns();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [motionEnabled]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-navy-950 text-white"
    >
      <div
        className="absolute right-[8%] top-14 size-32 rounded-full border border-gold-300/20"
        aria-hidden="true"
      />
      <div className="absolute bottom-16 left-[46%] h-px w-32 bg-gold-300/30" aria-hidden="true" />

      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-5 py-12 lg:grid-cols-[52%_48%] lg:px-10">
        <div className="relative z-10 max-w-xl text-left">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold-300">
            Learn with clarity
          </p>
          <h1 className="max-w-[11ch] text-[clamp(3.25rem,7vw,6.75rem)] leading-[0.88] text-white">
            Build a stronger academic future
          </h1>
          <p className="mt-5 font-calligraphic text-4xl leading-none text-gold-300 sm:text-5xl">
            Every subject, every step
          </p>
          <p className="mt-6 max-w-lg text-base leading-7 text-ivory/78 sm:text-lg">
            Structured learning, thoughtful guidance, and a premium academic experience for every
            student.
          </p>
          <div className="mt-8 grid gap-3 sm:flex">
            <Link
              href="/academics"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold-300 bg-gold-300 px-7 text-sm font-bold text-navy-950 transition-transform hover:-translate-y-0.5"
            >
              Explore Courses
            </Link>
            <Link
              href="/enquiry"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold-300/70 px-7 text-sm font-bold text-gold-300 transition-colors hover:bg-gold-300/10"
            >
              Enroll Now
            </Link>
          </div>
        </div>

        <div
          className="hidden h-[min(72vh,680px)] grid-cols-3 gap-3 overflow-hidden lg:grid"
          aria-label="A2Smart Classes educational image composition"
        >
          {imageColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              data-parallax-column
              className={`grid content-start gap-3 will-change-transform ${columnIndex === 1 ? "pt-12" : ""}`}
            >
              {column.map((src, imageIndex) => (
                <figure
                  key={src}
                  className={`relative h-47.5 overflow-hidden ${imageIndex === 1 ? "rounded-[999px]" : "rounded-[92px]"}`}
                >
                  {/* Temporary replaceable educational imagery; source/licensing record is in public/assets/hero/README.md. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="Students learning in an academic environment"
                    className="h-full w-full object-cover"
                    loading={imageIndex === 0 ? "eager" : "lazy"}
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>

        <div
          className="grid gap-3 lg:hidden"
          aria-label="A2Smart Classes educational image composition"
        >
          {imageColumns.map((column, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-3 gap-2">
              {column.map((src) => (
                <figure key={src} className="h-28 overflow-hidden rounded-full sm:h-40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="Students learning in an academic environment"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
