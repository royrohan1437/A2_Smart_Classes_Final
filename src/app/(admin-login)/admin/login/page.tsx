import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Access | A2Smart Classes",
  robots: { index: false, follow: false },
};

export default function AdminLoginPlaceholderPage() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-ivory px-5 py-16 text-charcoal">
      <section className="w-full max-w-xl border-l-4 border-gold-300 bg-white px-6 py-8 sm:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-700">Admin access</p>
        <h1 className="mt-3 font-serif text-3xl text-navy-950">
          Secure sign-in is not available yet
        </h1>
        <p className="mt-4 leading-7 text-charcoal-soft">
          The administrator login will be enabled after the authentication setup is complete. No
          credentials are requested or accepted on this page.
        </p>
      </section>
    </main>
  );
}
