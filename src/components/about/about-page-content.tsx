import Link from "next/link";

const storyImages = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1100&q=82",
    alt: "Students learning together in an academic setting",
  },
  {
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=82",
    alt: "A student reviewing study materials",
  },
];

export function AboutPageContent() {
  return (
    <main>
      <section
        className="relative grid min-h-105 place-items-end overflow-hidden bg-navy-950 px-5 py-14 sm:px-8 lg:min-h-130 lg:px-12"
        aria-label="Inspirational quote"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=82"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,43,.92),rgba(7,20,43,.42),rgba(7,20,43,.76))]" />
        <blockquote className="relative mx-auto w-full max-w-7xl text-white">
          <p className="max-w-3xl font-serif text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
            “Learning with purpose creates progress that lasts.”
          </p>
          <p className="mt-5 font-calligraphic text-3xl text-gold-300">
            Temporary editorial quotation
          </p>
        </blockquote>
      </section>

      <section
        className="bg-ivory px-5 py-20 text-charcoal sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="story-heading"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gold-700">
              Our story
            </p>
            <h1
              id="story-heading"
              className="text-4xl leading-[1.02] text-navy-950 sm:text-5xl lg:text-6xl"
            >
              Our Story
            </h1>
            <div className="mt-6 max-w-xl space-y-5 text-base leading-8 text-charcoal-soft sm:text-lg">
              <p>
                A2Smart Classes is presented as a learning community focused on structured
                preparation, clear teaching and steady academic support.
              </p>
              <p>
                The full institute history, verified milestones and approved story copy are pending
                owner confirmation. This temporary editorial text does not state facts that have not
                been supplied.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_0.72fr] items-end gap-3 sm:gap-5">
            {storyImages.map((image, index) => (
              <figure
                key={image.src}
                className={`overflow-hidden ${
                  index === 0
                    ? "h-97.5 rounded-[180px_180px_24px_24px] sm:h-130"
                    : "mb-10 h-65 rounded-[140px_140px_20px_20px] sm:h-85"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
        aria-labelledby="join-heading"
      >
        <div className="mx-auto max-w-7xl border border-navy-950/10 bg-ivory px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-700">
              Admissions
            </p>
            <h2 id="join-heading" className="mt-3 text-4xl text-navy-950 sm:text-5xl">
              Join Us
            </h2>
            <p className="mt-4 font-calligraphic text-3xl text-gold-700">
              Let us walk towards success together.
            </p>
          </div>
          <Link
            href="/enquiry"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-gold-700 bg-gold-300 px-7 text-sm font-bold text-navy-950 shadow-[4px_4px_10px_rgba(7,20,43,.12),-2px_-2px_8px_white] transition-transform hover:-translate-y-0.5 lg:mt-0"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </main>
  );
}
