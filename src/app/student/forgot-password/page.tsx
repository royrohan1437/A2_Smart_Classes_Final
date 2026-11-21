import { AccountForm } from "@/components/auth/account-form";

export default function StudentForgotPasswordPage() {
  return (
    <main className="grid min-h-[calc(100svh-5rem)] place-items-center bg-ivory px-5 py-12">
      <section className="w-full max-w-lg border border-navy-950/10 bg-white p-6 sm:p-10">
        <p className="text-sm text-gold-700">Student account</p>
        <h1 className="mt-2 text-4xl text-navy-950">Reset your password</h1>
        <p className="mb-8 mt-3 text-sm leading-6 text-charcoal-soft">
          Enter the contact details linked to your account. Verification and email delivery will be
          enabled with the recovery service.
        </p>
        <AccountForm mode="recovery" />
      </section>
    </main>
  );
}
