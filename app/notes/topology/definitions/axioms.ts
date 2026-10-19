// Basis properties, previewed when hovering a "(B1)" / "(B2)" in any card.
// Keep in sync with the rows of Definition 5 (Basis), which link here via \htmlId{b-N}.
export const basisAxioms: { number: number; name: string; statement: string }[] = [
  { number: 1, name: "Basis covers X", statement: `\\forall x \\in X \\ \\exists B \\in \\mathcal{B} \\text{ s.t. } x \\in B` },
  {
    number: 2,
    name: "Intersections of basis elements",
    statement: `\\forall B_1, B_2 \\in \\mathcal{B} \\text{ and } \\forall x \\in B_1 \\cap B_2, \\\\
                \\exists B_3 \\in \\mathcal{B} \\text{ s.t. } x \\in B_3 \\subseteq B_1 \\cap B_2`,
  },
];
