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
  {
    course: "bc-statistics-12",
    title: "Central Limit Theorem",
    file: "beamer-central-limit-theorem.pdf",
  }, {
    course: "bc-pre-calc-12",
    title: "Log Inverses",
    file: "beamer-log-inverses.pdf",
  },
  {
    course: "bc-computer-science-11",
    title: "List Operations",
    file: "beamer-techniques-for-operating-on-lists.pdf",
  },
  {
    course: "ap-computer-science-a",
    title: "Recursion",
    file: "beamer-recursion.pdf",
  },
  {
    course: "bc-foundations-of-math-11",
    title: "Optimization",
    file: "beamer-optimization.pdf",
  },

];

/** Returns all decks for a given course slug. */
export function decksForCourse(course: string): BeamerDeck[] {
  return beamerDecks.filter((d) => d.course === course);
}
