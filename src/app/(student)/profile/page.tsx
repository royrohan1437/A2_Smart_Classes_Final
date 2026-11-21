import { Card, CardBody } from "@/components/ui/card";

const fields = [
  "Full name",
  "Phone / Student ID",
  "Email",
  "Date of birth",
  "Board",
  "Class",
  "Academic session",
];

export default function StudentProfilePage() {
  return (
    <section className="mx-auto max-w-4xl">
      <p className="text-sm text-gold-700">Your account</p>
      <h1 className="mt-2 text-4xl text-navy-950">Profile</h1>
      <p className="mt-3 text-charcoal-soft">Your academy profile details will appear here.</p>
      <Card className="mt-8">
        <CardBody className="p-0">
          <dl className="divide-y divide-navy-950/10">
            {fields.map((field) => (
              <div key={field} className="grid gap-1 px-5 py-4 sm:grid-cols-[12rem_1fr] sm:gap-5">
                <dt className="text-sm font-semibold text-charcoal">{field}</dt>
                <dd className="text-sm text-muted">Available after your account is connected</dd>
              </div>
            ))}
          </dl>
        </CardBody>
      </Card>
      <p className="mt-4 text-sm text-muted">
        Profile information is read-only for students. Contact the academy to request a correction.
      </p>
    </section>
  );
}
