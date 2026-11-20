import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="bg-navy-950 text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div>
          <p className="font-serif text-2xl">A2Smart Classes</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-ivory/70">
            Premium academic guidance and structured learning support.
          </p>
        </div>
        <nav aria-label="Quick links">
          <h2 className="font-serif text-lg text-gold-300">Quick Links</h2>
          <div className="mt-4 grid gap-3 text-sm text-ivory/80">
            <Link href="/about">About</Link>
            <Link href="/faculty">Teachers</Link>
            <Link href="/academics">Courses</Link>
            <Link href="/gallery">Gallery</Link>
          </div>
        </nav>
        <nav aria-label="Study links">
          <h2 className="font-serif text-lg text-gold-300">Study Resources</h2>
          <div className="mt-4 grid gap-3 text-sm text-ivory/80">
            <Link href="/study-materials">Study Materials</Link>
            <Link href="/videos">Video Lectures</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
        <div>
          <h2 className="font-serif text-lg text-gold-300">Contact</h2>
          <p className="mt-4 text-sm leading-6 text-ivory/80">
            Contact details are pending owner approval and will be configured without invented
            information.
          </p>
        </div>
      </div>
      <div className="border-t border-gold-300/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© 2026 A2Smart Classes</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
