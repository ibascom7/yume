import type { Chapter } from "@/app/components/notesFilter";

// Textbook chapters and sections shown in the filter above each tab.
// Tag theorems, definitions, and exercises with matching `chapter` and `section` numbers.
export const chapters: Chapter[] = [
  {
    number: 4,
    title: "Topology of ℝⁿ",
    sections: [
      { number: 1, title: "n-Dimensional Space" },
      { number: 2, title: "Section title" },
    ],
  },
];
