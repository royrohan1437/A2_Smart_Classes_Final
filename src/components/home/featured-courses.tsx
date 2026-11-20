import Link from "next/link";

const featuredCourses = [
  {
    name: "Science",
    board: "CBSE",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=82",
  },
  {
    name: "Mathematics",
    board: "CBSE",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=82",
  },
  {
    name: "English",
    board: "ICSE",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=82",
  },
];

export function FeaturedCourses() {
  return (
    <section
      className="bg-white px-5 py-20 text-charcoal sm:px-8 lg:px-12 lg:py-28"
      aria-labelledby="courses-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-b border-navy-950/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold-700">
              Featured courses
            </p>
            <h2 id="courses-heading" className="text-4xl text-navy-950 sm:text-5xl">
              Explore academic pathways
            </h2>
          </div>
          <Link
            href="/academics"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-navy-950 px-6 text-sm font-bold text-navy-950 transition-colors hover:border-gold-700 hover:text-gold-700"
          >
            More Courses
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featuredCourses.map((course) => (
            <article key={`${course.board}-${course.name}`} className="group">
              <figure className="h-72 overflow-hidden rounded-[160px_160px_18px_18px] sm:h-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.image}
                  alt={`${course.name} course for ${course.board}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </figure>
              <div className="px-2 pt-5">
                <h3 className="font-serif text-2xl text-navy-950">{course.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-gold-700">
                  {course.board}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
