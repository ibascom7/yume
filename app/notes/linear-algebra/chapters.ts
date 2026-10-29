import type { Chapter } from "@/app/components/notesFilter";

// Textbook chapters and sections shown in the filter above each tab (hidden while empty).
// Tag theorems, definitions, and exercises with matching `chapter` and `section` numbers.
export const chapters: Chapter[] = [
  {
    number: 1,
    title: "Vector Spaces",
    sections: [
      { number: 1, title: "Introduction" },
      { number: 2, title: "Vector Spaces" },
      { number: 3, title: "Subspaces" },
      { number: 4, title: "Linear Combinations and Systems of Linear Equations" },
      { number: 5, title: "Linear Dependence and Linear Independence" },
      { number: 6, title: "Bases and Dimension" },
    ],
  },
  {
    number: 2,
    title: "Linear Transformations and Matrices",
    sections: [
      { number: 1, title: "Linear Transformations, Null Spaces, and Ranges" },
      { number: 2, title: "The Matrix Representation of a Linear Transformation" },
      { number: 3, title: "Composition of Linear Transformations and Matrix Multiplication" },
      { number: 4, title: "Invertibility and Isomorphisms" },
      { number: 5, title: "The Change of Coordinate Matrix" },
      { number: 6, title: "Dual Spaces" },
    ],
  },
  {
    number: 4,
    title: "Determinants",
    sections: [
      { number: 1, title: "Determinants of Order 2" },
      { number: 2, title: "Determinants of Order n" },
      { number: 3, title: "Properties of Determinants" },
      { number: 4, title: "Summary—Important Facts about Determinants" },
      { number: 5, title: "A Characterization of the Determinant" },
    ],
  },
];
