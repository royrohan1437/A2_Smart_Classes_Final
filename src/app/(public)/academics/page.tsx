import Link from "next/link";
import { academicBoards } from "@/features/academics/catalog";

export default function AcademicsPage() {
  return (
    <main className="bg-ivory px-5 py-16 text-charcoal sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl border-b border-navy-950/10 pb-9">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold-700">
            Learning pathways
          </p>
          <h1 className="text-4xl text-navy-950 sm:text-5xl">Courses &amp; Academics</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-charcoal-soft sm:text-lg">
            Browse subjects by board and class. Choose a class to explore its subject information.
          </p>
        </header>

        <aside
          className="mt-8 border-l-4 border-gold-300 bg-white px-5 py-4 text-sm leading-6 text-charcoal-soft"
          aria-label="Catalogue notice"
        >
          <strong className="text-navy-950">Illustrative catalogue: demo content only.</strong>{" "}
          Board, class, and subject examples below are not verified academy offerings. Course
          details will be confirmed when the academic catalogue is managed in T29.
        </aside>

        {academicBoards.length === 0 ? (
          <p className="mt-14 border border-dashed border-navy-950/20 bg-white px-6 py-10 text-center text-charcoal-soft">
            Academic offerings have not been added yet. Please check back later.
          </p>
        ) : (
          <div className="mt-14 space-y-14">
            {academicBoards.map((board) => (
              <section
                key={board.slug}
                aria-labelledby={`${board.slug}-heading`}
                className="border-b border-navy-950/10 pb-12 last:border-0"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                      Board
                    </p>
                    <h2 id={`${board.slug}-heading`} className="text-3xl text-navy-950 sm:text-4xl">
                      {board.name}
                    </h2>
                  </div>
                  <p className="text-sm text-charcoal-soft">
                    {board.classes.length} example classes
                  </p>
                </div>

                <ul className="mt-6 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
                  {board.classes.map((academicClass) => (
                    <li key={academicClass.slug}>
                      <Link
                        href={`/academics/${board.slug}/${academicClass.slug}`}
                        className="group flex min-h-20 items-center justify-between border border-navy-950/10 bg-white px-5 py-4 text-navy-950 transition-colors hover:border-gold-700 focus-visible:outline-offset-4"
                      >
                        <span className="font-serif text-xl">{academicClass.name}</span>
                        <span
                          aria-hidden="true"
                          className="text-lg text-gold-700 transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
