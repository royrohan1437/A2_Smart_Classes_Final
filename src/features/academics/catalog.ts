export interface AcademicSubject {
  name: string;
  description: string;
  mode: string;
  duration: string;
  fees: string;
  image: string;
}

export interface AcademicClass {
  slug: string;
  name: string;
  subjects: AcademicSubject[];
}

export interface AcademicBoard {
  slug: string;
  name: string;
  classes: AcademicClass[];
}

const exampleSubjects: AcademicSubject[] = [
  {
    name: "Science",
    description: "An illustrative subject entry for the course directory preview.",
    mode: "Online / Offline (example)",
    duration: "To be confirmed",
    fees: "To be confirmed",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=82",
  },
  {
    name: "Mathematics",
    description: "An illustrative subject entry for the course directory preview.",
    mode: "Online / Offline (example)",
    duration: "To be confirmed",
    fees: "To be confirmed",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=82",
  },
  {
    name: "English",
    description: "An illustrative subject entry for the course directory preview.",
    mode: "Online / Offline (example)",
    duration: "To be confirmed",
    fees: "To be confirmed",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=82",
  },
];

function makeClass(number: number): AcademicClass {
  return {
    slug: `class-${number}`,
    name: `Class ${number}`,
    subjects: exampleSubjects,
  };
}

/** Temporary examples from the PRD. Replace with the T29 academic data source. */
export const academicBoards: AcademicBoard[] = [
  {
    slug: "cbse",
    name: "CBSE",
    classes: [9, 10, 11, 12].map(makeClass),
  },
  {
    slug: "icse",
    name: "ICSE",
    classes: [9, 10].map(makeClass),
  },
];

export function getAcademicClass(boardSlug: string, classSlug: string) {
  const board = academicBoards.find((item) => item.slug === boardSlug);
  return board?.classes.find((item) => item.slug === classSlug);
}

export function getAcademicBoard(boardSlug: string) {
  return academicBoards.find((item) => item.slug === boardSlug);
}
