import { Card, CardBody } from "@/components/ui/card";

export function AdminModule({
  title,
  description,
  emptyTitle,
  emptyDescription,
}: {
  title: string;
  description: string;
  emptyTitle: string;
  emptyDescription: string;
}) {
  return (
    <section className="mx-auto max-w-7xl">
      <header className="flex flex-col justify-between gap-5 border-b border-navy-950/10 pb-7 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm text-gold-700">A2Smart Classes · Administration</p>
          <h1 className="mt-2 text-4xl text-navy-950">{title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-charcoal-soft">{description}</p>
        </div>
        <span className="text-sm text-muted">Management tools are being connected</span>
      </header>
      <div className="mt-7 grid gap-4 sm:grid-cols-[minmax(14rem,1fr)_auto] sm:items-end">
        <label className="grid gap-2 text-sm font-semibold" htmlFor="admin-search">
          Search {title.toLowerCase()}
          <input
            id="admin-search"
            disabled
            placeholder="Available when records are connected"
            className="min-h-11 w-full border border-navy-950/15 bg-white px-3 font-normal disabled:text-muted"
          />
        </label>
        <button
          type="button"
          disabled
          className="min-h-11 border border-navy-950/20 bg-navy-950 px-5 text-sm font-semibold text-white opacity-50"
        >
          Add {title.replace(/s$/, "")}
        </button>
      </div>
      <Card className="mt-5">
        <CardBody className="px-5 py-14 text-center sm:py-20">
          <h2 className="text-2xl text-navy-950">{emptyTitle}</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-charcoal-soft">
            {emptyDescription}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}
