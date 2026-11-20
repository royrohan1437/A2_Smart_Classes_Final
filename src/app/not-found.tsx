import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-ivory px-5 py-16 text-center">
      <div className="max-w-lg">
        <p className="font-serif text-7xl text-gold-700">404</p>
        <h1 className="mt-3 text-4xl text-navy-950">Page not found</h1>
        <p className="mt-4 leading-7 text-charcoal-soft">
          The page you requested may have moved or does not exist.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex min-h-11 items-center rounded-full bg-navy-950 px-6 py-3 text-sm font-bold text-white"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
