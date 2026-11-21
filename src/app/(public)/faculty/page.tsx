export interface FacultyProfile {
  name: string;
  qualifications: string[];
  subjects: string[];
  experience: string;
  portraitUrl: string;
  portraitAlt: string;
}

// T28 will supply approved teacher records. Never publish sample identities here.
const faculty: FacultyProfile[] = [];

export default function FacultyPage() {
  return (
    <main className="bg-ivory px-5 py-16 text-charcoal sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl border-b border-navy-950/10 pb-9">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold-700">
            The people behind the learning
          </p>
          <h1 className="text-4xl text-navy-950 sm:text-5xl">Our Faculty</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-charcoal-soft sm:text-lg">
            Meet the educators who guide each student&apos;s learning journey.
          </p>
        </header>

        {faculty.length === 0 ? (
          <p className="mt-12 border border-dashed border-navy-950/20 bg-white px-6 py-10 text-center text-charcoal-soft">
            Faculty profiles will appear here once they are approved.
          </p>
        ) : (
          <ul className="mt-12 grid list-none gap-x-10 gap-y-14 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.map((member) => (
              <li key={member.name} className="text-center">
                {/* eslint-disable-next-line @next/next/no-img-element -- remote teacher portraits will be managed through T28. */}
                <img
                  src={member.portraitUrl}
                  alt={member.portraitAlt}
                  className="mx-auto aspect-square w-52 rounded-full object-cover sm:w-60"
                  loading="lazy"
                />
                <h2 className="mt-6 font-serif text-2xl text-navy-950">{member.name}</h2>
                <p className="mt-2 text-sm text-charcoal-soft">
                  {member.qualifications.join(" · ")}
                </p>
                <p className="mt-3 text-sm text-charcoal-soft">
                  <span className="font-semibold text-navy-950">Subjects:</span>{" "}
                  {member.subjects.join(", ")}
                </p>
                <p className="mt-1 text-sm text-charcoal-soft">
                  <span className="font-semibold text-navy-950">Experience:</span>{" "}
                  {member.experience}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
