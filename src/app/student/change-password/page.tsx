import { AccountForm } from "@/components/auth/account-form";

export default function StudentChangePasswordPage() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-ivory px-5 py-12">
      <section className="w-full max-w-lg border border-navy-950/10 bg-white p-6 sm:p-10">
        <p className="text-sm text-gold-700">Student account</p>
        <h1 className="mt-2 text-4xl text-navy-950">Change password</h1>
        <p className="mb-8 mt-3 text-sm leading-6 text-charcoal-soft">
          Use your current password to choose a new one. Changes are unavailable until sign-in
          services are connected.
        </p>
        <AccountForm mode="change" />
      </section>
    </main>
  );
}
