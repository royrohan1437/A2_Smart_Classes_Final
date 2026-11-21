import Link from "next/link";

interface StudyMaterial {
  title: string;
  board: string;
  className: string;
  subject: string;
  chapter: string;
  category: "Notes" | "Sample Papers & PYQs";
  fileType: string;
  access: "FREE" | "RESTRICTED";
  href: string;
}

// Materials are populated by the T30 admin module; do not publish unverified files.
const materials: StudyMaterial[] = [];

export default function StudyMaterialsPage() {
  const categories = ["Notes", "Sample Papers & PYQs"] as const;

  return (
    <main className="bg-ivory px-5 py-16 text-charcoal sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl border-b border-navy-950/10 pb-9">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold-700">
            Learning library
          </p>
          <h1 className="text-4xl text-navy-950 sm:text-5xl">Study Materials</h1>
          <p className="mt-5 text-base leading-7 text-charcoal-soft sm:text-lg">
            Browse notes and sample papers by board, class, subject, and chapter.
          </p>
        </header>

        <nav aria-label="Material categories" className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category === "Notes" ? "notes" : "sample-papers"}`}
              className="border-b-2 border-gold-300 px-3 py-2 font-semibold text-navy-950 hover:border-gold-700 focus-visible:outline-offset-4"
            >
              {category}
            </a>
          ))}
        </nav>

        {categories.map((category) => {
          const id = category === "Notes" ? "notes" : "sample-papers";
          const entries = materials.filter((material) => material.category === category);
          const paths = [
            ...new Map(
              entries.map((item, index) => [
                [item.board, item.className, item.subject, item.chapter].join(" / "),
                index,
              ]),
            ).entries(),
          ];
          return (
            <section key={category} id={id} className="scroll-mt-28 py-10">
              <h2 className="font-serif text-3xl text-navy-950">{category}</h2>
              {entries.length === 0 ? (
                <p className="mt-5 border border-dashed border-navy-950/20 bg-white px-6 py-8 text-charcoal-soft">
                  No {category.toLowerCase()} have been published yet.
                </p>
              ) : (
                <>
                  <nav
                    aria-label={`${category} by board, class, subject, and chapter`}
                    className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm"
                  >
                    {paths.map(([path, entryIndex]) => (
                      <a
                        key={path}
                        href={`#${id}-item-${entryIndex}`}
                        className="text-gold-700 underline underline-offset-4"
                      >
                        {path}
                      </a>
                    ))}
                  </nav>
                  <ul className="mt-5 divide-y divide-navy-950/10 border-y border-navy-950/10">
                    {entries.map((item, index) => (
                      <li
                        key={item.href}
                        id={`${id}-item-${index}`}
                        className="flex flex-wrap items-center justify-between gap-4 py-5"
                      >
                        <div>
                          <h3 className="font-semibold text-navy-950">{item.title}</h3>
                          <p className="mt-1 text-sm text-charcoal-soft">
                            {item.board} · {item.className} · {item.subject} · {item.chapter}
                          </p>
                          <p className="mt-1 text-sm text-charcoal-soft">
                            {item.fileType} · {item.access}
                          </p>
                        </div>
                        {item.access === "FREE" ? (
                          <Link href={item.href} className="font-semibold text-gold-700 underline">
                            View / Download
                          </Link>
                        ) : (
                          <span className="text-sm font-semibold text-charcoal-soft">
                            Student login required
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </section>
          );
        })}
        <p className="border-l-4 border-gold-300 bg-white px-5 py-4 text-sm text-charcoal-soft">
          Published materials are grouped by board, class, subject, and chapter when approved files
          are available.
        </p>
      </div>
    </main>
  );
}
