import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-ivory px-5 py-16 text-charcoal sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <header className="max-w-3xl border-b border-navy-950/10 pb-9">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold-700">
            Get in touch
          </p>
          <h1 className="text-4xl text-navy-950 sm:text-5xl">Contact A2Smart Classes</h1>
          <p className="mt-5 text-base leading-7 text-charcoal-soft sm:text-lg">
            Contact details and visiting information will be published after they are confirmed.
          </p>
        </header>
        <section className="mt-10 border-l-4 border-gold-300 bg-white px-6 py-6">
          <h2 className="font-serif text-2xl text-navy-950">Admissions questions</h2>
          <p className="mt-3 text-charcoal-soft">
            Use the enquiry form to share your interest. Submission remains unavailable until the
            enquiry service is configured.
          </p>
          <Link href="/enquiry" className="mt-5 inline-block font-semibold text-gold-700 underline">
            Go to the enquiry form
          </Link>
        </section>
        <p className="mt-8 text-sm text-charcoal-soft">
          Address, telephone, email, WhatsApp, map, and social links are intentionally omitted until
          the institute provides verified details.
        </p>
      </div>
    </main>
  );
}
