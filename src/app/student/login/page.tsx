import { LoginForm } from "@/components/auth/login-form";

export default function StudentLoginPage() {
  return (
    <main className="grid min-h-[calc(100svh-5rem)] bg-ivory px-5 py-12 text-charcoal lg:grid-cols-[1fr_1fr] lg:px-0 lg:py-0">
      <section className="hidden bg-navy-950 px-12 py-20 text-white lg:flex lg:flex-col lg:justify-end">
        <p className="mb-4 text-sm text-gold-300">Your learning space</p>
        <h1 className="max-w-lg text-5xl leading-tight">Pick up where your learning left off.</h1>
        <p className="mt-5 max-w-md leading-7 text-ivory/75">
          Sign in to find your study materials and student information.
        </p>
      </section>
      <section className="mx-auto flex w-full max-w-md flex-col justify-center py-8 lg:px-10">
        <p className="text-sm text-gold-700">A2Smart Classes</p>
        <h1 className="mt-3 text-4xl text-navy-950">Student sign in</h1>
        <p className="mt-3 mb-8 leading-6 text-charcoal-soft">
          Use the phone number or student ID provided by the academy.
        </p>
        <LoginForm role="student" />
      </section>
    </main>
  );
}
