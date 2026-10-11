// Vector space axioms, previewed when hovering a "(VS N)" in any card.
// Keep in sync with the rows of Definition 1 (Vector Space), which link here via \htmlId{vs-N}.
export const axioms: { number: number; name: string; statement: string }[] = [
  { number: 1, name: "Commutativity of Addition", statement: `\\forall x, y \\in V,\\ x + y = y + x` },
  { number: 2, name: "Associativity of Addition", statement: `\\forall x, y, z \\in V,\\ (x + y) + z = x + (y + z)` },
  { number: 3, name: "Zero Vector", statement: `\\exists\\, 0 \\in V \\text{ s.t. } x + 0 = x \\text{ for each } x \\in V` },
  { number: 4, name: "Additive Inverses", statement: `\\forall x \\in V,\\ \\exists\\, y \\in V \\text{ s.t. } x + y = 0` },
  { number: 5, name: "Scalar Identity", statement: `\\forall x \\in V,\\ 1x = x` },
  { number: 6, name: "Associativity of Scalar Multiplication", statement: `\\forall a, b \\in \\mathbb{F},\\ \\forall x \\in V,\\ (ab)x = a(bx)` },
  { number: 7, name: "Distributivity over Vector Addition", statement: `\\forall a \\in \\mathbb{F},\\ \\forall x, y \\in V,\\ a(x + y) = ax + ay` },
  { number: 8, name: "Distributivity over Scalar Addition", statement: `\\forall a, b \\in \\mathbb{F},\\ \\forall x \\in V,\\ (a + b)x = ax + bx` },
];
