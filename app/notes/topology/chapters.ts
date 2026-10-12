import type { Chapter } from "@/app/components/notesFilter";

// Textbook chapters and sections shown in the filter above each tab (hidden while empty).
// Tag theorems, definitions, and exercises with matching `chapter` and `section` numbers.
export const chapters: Chapter[] = [
  {
    number: 1,
    title: "Topological Spaces and Continuous Functions",
    sections: [
      { number: 1, title: "Topology" },
      { number: 2, title: "Convergence: Nets and Filters" },
      { number: 3, title: "Continuous Functions" },
      { number: 4, title: "Initial, Final and Quotient Topologies" },
    ],
  },
];
