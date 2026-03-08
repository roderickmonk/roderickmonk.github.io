export interface BeamerDeck {
  course: string;   // matches public/beamer/<course>/ folder
  title: string;    // display name and ?title= param
  file: string;     // filename inside the course folder
}

export const beamerDecks: BeamerDeck[] = [
  {
    course: "ap-calculus-bc",
    title: "Riemann Sums",
    file: "beamer-reiman-sums.pdf",
  },
];

/** Returns all decks for a given course slug. */
export function decksForCourse(course: string): BeamerDeck[] {
  return beamerDecks.filter((d) => d.course === course);
}
