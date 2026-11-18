import type { Chapter } from "@/app/components/notesFilter";

// Textbook chapters and sections shown in the filter above each tab.
// Tag theorems, definitions, and exercises with matching `chapter` and `section` numbers.
export const chapters: Chapter[] = [
  {
    number: 4,
    title: "Topology of ℝⁿ",
    sections: [
      { number: 1, title: "n-Dimensional Space" },
      { number: 2, title: "Convergence and Completeness in ℝⁿ" },
      { number: 3, title: "Closed and Open Subsets of ℝⁿ" },
      { number: 4, title: "Compact Sets" },
    ],
  },
  {
    number: 5,
    title: "Functions",
    sections: [
      { number: 1, title: "Limits and Continuity" },
      { number: 2, title: "Discontinuous Functions" },
    ],
  },
];
