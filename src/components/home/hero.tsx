import Image from "next/image";
import Link from "next/link";

export function HomepageHero() {
  return (
    <section className="relative isolate min-h-[min(760px,calc(100svh-5rem))] overflow-hidden bg-navy-950 text-white">
      <Image
        src="/assets/hero/classroom-study.png"
        alt="A student studying in a bright classroom"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[28%_center]"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,43,.04)_0%,rgba(7,20,43,.24)_34%,rgba(7,20,43,.88)_63%,#07142b_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/10 lg:hidden"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid min-h-[min(760px,calc(100svh-5rem))] max-w-7xl items-center px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div aria-hidden="true" />
        <div className="hero-copy max-w-xl lg:justify-self-end">
          <p className="mb-5 text-sm text-gold-300">A2Smart Classes</p>
          <h1 className="max-w-[12ch] text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            A clearer way to learn.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-ivory/85 sm:text-lg">
            Thoughtful teaching and a steady place to build confidence, one subject at a time.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academics"
              className="inline-flex min-h-12 items-center justify-center border border-gold-300 bg-gold-300 px-6 text-sm font-semibold text-navy-950 transition-colors hover:bg-white hover:border-white"
            >
              Explore academics
            </Link>
            <Link
              href="/enquiry"
              className="inline-flex min-h-12 items-center justify-center border border-white/60 px-6 text-sm font-semibold text-white transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              Make an enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
