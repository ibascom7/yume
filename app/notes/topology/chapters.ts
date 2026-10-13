import type { Chapter } from "@/app/components/notesFilter";

// Sections and subsections of the course notes shown in the filter above each tab (hidden while empty).
// Tag theorems, definitions, and exercises with `chapter` = notes section and `section` = subsection,
// e.g. subsection 1.2 (Bases) is chapter: 1, section: 2.
export const chapters: Chapter[] = [
  {
    number: 1,
    title: "Topology",
    sections: [
      { number: 1, title: "Introductory concepts" },
      { number: 2, title: "Bases" },
      { number: 3, title: "Subbases" },
      { number: 4, title: "Closed sets, closures and interiors" },
      { number: 5, title: "Boundary and accumulation points" },
      { number: 6, title: "The relative topology" },
      { number: 7, title: "Hausdorff topologies" },
    ],
  },
  {
    number: 2,
    title: "Convergence: nets and filters",
    sections: [
      { number: 1, title: "Axiomatic foundations" },
      { number: 2, title: "Nets" },
      { number: 3, title: "Filters" },
    ],
  },
];
