import {
  Badge,
  Button,
  Card,
  CardBody,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Input,
  Skeleton,
  TextSkeleton,
} from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory px-5 py-10 text-charcoal sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="border-b border-navy-950/10 pb-8">
          <p className="font-calligraphic text-3xl text-gold-700">A2Smart Classes</p>
          <h1 className="mt-2 max-w-3xl text-4xl text-navy-950 sm:text-5xl">
            Luxury editorial × premium academic
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-charcoal-soft">
            Shared design tokens and accessible interface primitives for the public website, student
            experience, and Super Admin portal.
          </p>
        </header>

        <section className="grid gap-8 py-10 lg:grid-cols-2" aria-labelledby="color-heading">
          <div>
            <h2 id="color-heading" className="text-3xl text-navy-950">
              Approved palette
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Deep Navy", "bg-navy-950 text-white"],
                ["Secondary Navy", "bg-navy-800 text-white"],
                ["Deep Gold", "bg-gold-700 text-white"],
                ["Light Gold", "bg-gold-300 text-navy-950"],
                ["Ivory", "bg-ivory text-navy-950 border border-navy-950/10"],
                ["White", "bg-white text-navy-950 border border-navy-950/10"],
                ["Charcoal", "bg-charcoal text-white"],
                ["Soft Charcoal", "bg-charcoal-soft text-white"],
              ].map(([name, classes]) => (
                <div
                  key={name}
                  className={`flex min-h-24 items-end rounded-md p-3 text-sm font-semibold ${classes}`}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardBody>
              <h2 className="text-3xl text-navy-950">Interactive elements</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button>Primary action</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Destructive</Button>
                <Button loading>Loading</Button>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Badge variant="navy">Navy</Badge>
                <Badge variant="gold">Gold</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Error</Badge>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="grid gap-8 pb-10 lg:grid-cols-2" aria-labelledby="forms-heading">
          <Card>
            <CardBody>
              <h2 id="forms-heading" className="text-3xl text-navy-950">
                Form fields
              </h2>
              <div className="mt-5 grid gap-4">
                <Input name="name" label="Name" placeholder="Enter student name" />
                <Input
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="student@example.com"
                  hint="Used only for account communication."
                />
                <Input name="phone" label="Phone" error="A valid phone number is required." />
              </div>
            </CardBody>
          </Card>

          <div className="grid gap-4">
            <Card>
              <CardBody>
                <h2 className="text-3xl text-navy-950">Loading states</h2>
                <div className="mt-5 grid gap-3">
                  <Skeleton className="h-28 w-full" />
                  <TextSkeleton lines={3} />
                  <div className="brand-loading-line w-full" aria-label="Loading" />
                </div>
              </CardBody>
            </Card>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open confirmation dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Confirm the action</DialogTitle>
                <DialogDescription>
                  Destructive actions require clear confirmation before they can proceed.
                </DialogDescription>
                <div className="mt-6 flex justify-end gap-3">
                  <DialogTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogTrigger>
                  <Button variant="danger">Confirm</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </div>
    </main>
  );
}
