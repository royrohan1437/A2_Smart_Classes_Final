import { Card, CardBody } from "@/components/ui/card";

export default function StudentFeesPage() {
  return (
    <section className="mx-auto max-w-5xl">
      <p className="text-sm text-gold-700">Account information</p>
      <h1 className="mt-2 text-4xl text-navy-950">Fees</h1>
      <p className="mt-3 max-w-2xl text-charcoal-soft">
        Review monthly fee records and payment history once they are available for your account.
      </p>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-b border-navy-950/10 pb-5">
        <label className="grid gap-2 text-sm font-semibold" htmlFor="fee-year">
          Academic year
          <select
            id="fee-year"
            className="min-h-11 min-w-48 border border-navy-950/20 bg-white px-3 font-normal"
          >
            <option>Available after sign in</option>
          </select>
        </label>
        <p className="text-sm text-muted">Fee records are private to your account.</p>
      </div>
      <Card className="mt-8">
        <CardBody className="py-12 text-center">
          <h2 className="text-2xl text-navy-950">No fee statement to show</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-charcoal-soft">
            Your academic year, monthly schedule, payments, and outstanding balance will appear here
            when the account is connected.
          </p>
        </CardBody>
      </Card>
    </section>
  );
}
