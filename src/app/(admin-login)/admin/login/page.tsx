import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Admin Access | A2Smart Classes",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-ivory px-5 py-16 text-charcoal">
      <section className="w-full max-w-xl border-l-4 border-gold-300 bg-white px-6 py-8 sm:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-700">Admin access</p>
        <h1 className="mt-3 font-serif text-3xl text-navy-950">Administrator sign in</h1>
        <p className="mt-4 mb-7 leading-7 text-charcoal-soft">
          Access is reserved for the academy administrator.
        </p>
        <LoginForm role="admin" />
      </section>
    </main>
  );
}
