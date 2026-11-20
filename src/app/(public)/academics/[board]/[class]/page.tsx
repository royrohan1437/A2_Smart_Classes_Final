import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandedLoading } from "@/components/layout/branded-loading";
import { academicBoards, getAcademicBoard, getAcademicClass } from "@/features/academics/catalog";

export function generateStaticParams() {
  return academicBoards.flatMap((board) =>
    board.classes.map((academicClass) => ({
      board: board.slug,
      class: academicClass.slug,
    })),
  );
}

export default function AcademicClassPage({
  params,
}: {
  params: Promise<{ board: string; class: string }>;
}) {
  return (
    <Suspense fallback={<BrandedLoading label="Loading course details" />}>
      <AcademicClassContent params={params} />
    </Suspense>
  );
}

async function AcademicClassContent({
  params,
}: {
  params: Promise<{ board: string; class: string }>;
}) {
  const { board: boardSlug, class: classSlug } = await params;
  const board = getAcademicBoard(boardSlug);
  const academicClass = getAcademicClass(boardSlug, classSlug);

  if (!board || !academicClass) {
    notFound();
  }

  return (
    <main className="bg-ivory px-5 py-14 text-charcoal sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-10 text-sm">
          <ol className="flex list-none flex-wrap items-center gap-2 p-0 text-charcoal-soft">
            <li>
              <Link className="underline decoration-gold-300 underline-offset-4" href="/academics">
                Courses
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>{board.name}</li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-navy-950">
              {academicClass.name}
            </li>
          </ol>
        </nav>

        <header className="flex flex-col gap-4 border-b border-navy-950/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold-700">
              {board.name} · example pathway
            </p>
            <h1 className="text-4xl text-navy-950 sm:text-5xl">{academicClass.name}</h1>
            <p className="mt-4 max-w-2xl leading-7 text-charcoal-soft">
              Subject information for this illustrative class catalogue.
            </p>
          </div>
          <Link
            href="/academics"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-navy-950 underline decoration-gold-300 underline-offset-4 hover:text-gold-700"
          >
            Browse all courses
          </Link>
        </header>

        <aside
          className="mt-7 border-l-4 border-gold-300 bg-white px-5 py-4 text-sm leading-6 text-charcoal-soft"
          aria-label="Catalogue notice"
        >
          <strong className="text-navy-950">Illustrative catalogue: demo content only.</strong>{" "}
          These examples are not verified academy offerings. Course mode, duration, and fees remain
          unconfirmed until the academic catalogue is managed in T29.
        </aside>

        {academicClass.subjects.length === 0 ? (
          <p className="mt-12 border border-dashed border-navy-950/20 bg-white px-6 py-10 text-center text-charcoal-soft">
            Subject details have not been added for this class yet.
          </p>
        ) : (
          <section aria-label="Subjects" className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {academicClass.subjects.map((subject) => (
              <article key={subject.name} className="group bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-navy-950/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={subject.image}
                    alt={`${subject.name} illustrative course photograph`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-2xl text-navy-950">{subject.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-charcoal-soft">{subject.description}</p>
                  <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 border-t border-navy-950/10 pt-5 text-sm">
                    <dt className="font-semibold text-navy-950">Course mode</dt>
                    <dd className="m-0 text-charcoal-soft">{subject.mode}</dd>
                    <dt className="font-semibold text-navy-950">Duration</dt>
                    <dd className="m-0 text-charcoal-soft">{subject.duration}</dd>
                    <dt className="font-semibold text-navy-950">Fees</dt>
                    <dd className="m-0 text-charcoal-soft">{subject.fees}</dd>
                  </dl>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
