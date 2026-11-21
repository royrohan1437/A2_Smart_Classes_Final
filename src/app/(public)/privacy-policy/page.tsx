import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy (Draft) | A2Smart Classes",
  description: "Draft privacy information for the A2Smart Classes website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-ivory px-5 py-16 text-charcoal sm:px-8 sm:py-20 lg:px-12">
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold-700">
          Draft for owner and legal review
        </p>
        <h1 className="text-4xl text-navy-950 sm:text-5xl">Privacy Policy</h1>
        <p className="mt-6 border-l-4 border-gold-300 bg-white px-5 py-4 text-sm text-charcoal-soft">
          This is draft website copy, not an approved policy. It must be reviewed and completed
          before publication as a final privacy commitment.
        </p>
        <div className="mt-10 space-y-8 leading-7 text-charcoal-soft">
          <section>
            <h2 className="font-serif text-2xl text-navy-950">Information submitted to us</h2>
            <p className="mt-3">
              The admissions enquiry form asks for a student name, class, board, date of birth,
              phone number, and email address. The current form does not store submissions; the
              backend submission service is not configured.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy-950">How information is used</h2>
            <p className="mt-3">
              Any future use, sharing, retention, security, and deletion practices must be stated
              here after the service and its operators are confirmed.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy-950">Questions and requests</h2>
            <p className="mt-3">
              The institute&apos;s verified privacy contact and the process for privacy requests
              must be added before this draft is approved.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
