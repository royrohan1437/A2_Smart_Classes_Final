import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer (Draft) | A2Smart Classes",
  description: "Draft website disclaimer for A2Smart Classes.",
};

export default function DisclaimerPage() {
  return (
    <main className="bg-ivory px-5 py-16 text-charcoal sm:px-8 sm:py-20 lg:px-12">
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold-700">
          Draft for owner and legal review
        </p>
        <h1 className="text-4xl text-navy-950 sm:text-5xl">Disclaimer</h1>
        <p className="mt-6 border-l-4 border-gold-300 bg-white px-5 py-4 text-sm text-charcoal-soft">
          This draft is not an approved legal notice. Review it against the institute&apos;s
          services and applicable requirements before treating it as final.
        </p>
        <div className="mt-10 space-y-8 leading-7 text-charcoal-soft">
          <section>
            <h2 className="font-serif text-2xl text-navy-950">Website information</h2>
            <p className="mt-3">
              Some course catalogue entries and editorial content on this website are illustrative
              examples, not confirmed academy offerings. Confirm details directly with the institute
              before relying on them.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy-950">Educational content</h2>
            <p className="mt-3">
              Learning materials and video links, when published, should be reviewed for accuracy,
              availability, and suitability. Their publication does not promise a particular
              academic result.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy-950">External websites</h2>
            <p className="mt-3">
              External services may be linked or embedded. Their availability and privacy practices
              are controlled by their respective providers.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
