export function EditorialStory() {
  return (
    <section
      className="bg-ivory px-5 py-20 text-charcoal sm:px-8 lg:px-12 lg:py-28"
      aria-labelledby="story-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <div className="relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gold-700">
            Our approach
          </p>
          <h2
            id="story-heading"
            className="max-w-xl text-4xl leading-[1.02] text-navy-950 sm:text-5xl lg:text-6xl"
          >
            Learning becomes lasting when guidance feels personal.
          </h2>
          <p className="mt-6 font-calligraphic text-3xl text-gold-700">
            Built around every learner
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-charcoal-soft sm:text-lg">
            A2Smart Classes brings structured preparation, focused teaching and thoughtful academic
            support together in one premium learning environment. Each step is designed to build
            understanding, confidence and steady progress.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_0.72fr] items-end gap-3 sm:gap-5">
          <figure className="h-97.5 overflow-hidden rounded-[180px_180px_24px_24px] sm:h-130">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82"
              alt="Students participating in a guided academic discussion"
              className="h-full w-full object-cover"
            />
          </figure>
          <figure className="mb-10 h-65 overflow-hidden rounded-[140px_140px_20px_20px] sm:h-85">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=700&q=82"
              alt="Student reviewing academic study material"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
