import type { ChapterRef } from "@/app/components/notesFilter";
import type { TheoremKind } from "../components/TheoremCard";

interface Proof {
  title?: string;
  content: string;
}

interface Theorem extends ChapterRef {
  kind?: TheoremKind;
  number: number;
  title: string;
  statement: string;
  description?: string;
  proof?: string | Proof[];
}

export const theorems: Theorem[] = [
  // Example card: replace with your own
  {
      kind: "Theorem",
      number: 1,
      chapter: 4,
      section: 1,
      title: "Cauchy-Schwarz Inequality",
      statement: `\\text{For } \\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n, \\ |\\langle x, y \\rangle | \\leq \\| \\mathbf{x} \\| \\| \\mathbf{y} \\| \\\\
                  \\text{Equality holds iff } \\mathbf{x} \\text{ and } \\mathbf{y} \\text{ are collinear}.
      `,
      proof: `
      \\text{Let } \\mathbf{x} = (x_1, \\ldots, x_n),\\ \\mathbf{y} = (y_1, \\ldots, y_n) \\in \\mathbb{R}^n. \\\\
      \\text{We first check the inequality } |\\langle x, y \\rangle | \\leq \\| \\mathbf{x} \\| \\| \\mathbf{y} \\|. \\\\
      \\text{Note } \\\\
      \\begin{aligned}
        & |\\langle \\mathbf{x}, \\mathbf{y} \\rangle| \\leq \\lVert \\mathbf{x} \\rVert \\lVert \\mathbf{y} \\rVert \\\\
        \\iff & |\\langle \\mathbf{x}, \\mathbf{y} \\rangle|^2 \\leq \\lVert \\mathbf{x} \\rVert^2 \\lVert \\mathbf{y} \\rVert^2 \\\\
        \\iff & \\| \\mathbf{x} \\|^2 \\| \\| \\mathbf{y} \\|^2 - | \\langle \\mathbf{x, y} \\rangle | \\ge 0 \\\\
        \\iff & 2\\| \\mathbf{x} \\|^2 \\| \\| \\mathbf{y} \\|^2 - 2| \\langle \\mathbf{x, y} \\rangle | \\ge 0.
      \\end{aligned} \\\\
      \\text{So it suffices to show }  2\\| \\mathbf{x} \\|^2 \\| \\| \\mathbf{y} \\|^2 - 2| \\langle \\mathbf{x, y} \\rangle | \\ge 0. \\\\
      \\text{Observe } \\\\
      \\begin{aligned}
        &2 \\lVert \\mathbf{x} \\rVert^2 \\lVert \\mathbf{y} \\rVert^2 - 2 |\\langle \\mathbf{x}, \\mathbf{y} \\rangle|^2 \\\\
        = &2 \\left( \\sum_{i=1}^{n} x_i^2 \\right) \\left( \\sum_{j=1}^{n} y_j^2 \\right) - 2 \\left( \\sum_{i=1}^{n} x_i y_i \\right)^2 & \\text{ (By def of norm and inner product)} \\\\
        = &2 \\sum_{i=1}^{n} \\sum_{j=1}^{n} x_i^2 y_j^2 - 2 \\left( \\sum_{i=1}^{n} x_i y_i \\right)^2 \\\\
        = &\\sum_{i=1}^{n} \\sum_{j=1}^{n} x_i^2 y_j^2 + \\sum_{i=1}^{n} \\sum_{j=1}^{n} x_i^2 y_j^2 - 2 \\left( \\sum_{i=1}^{n} x_i y_i \\right)^2 \\\\
        = &\\sum_{i=1}^{n} \\sum_{j=1}^{n} x_i^2 y_j^2 + \\sum_{j=1}^{n} \\sum_{i=1}^{n} x_j^2 y_i^2 - 2 \\left( \\sum_{i=1}^{n} x_i y_i \\right)^2 & \\text{(Swap dummy variables)} \\\\
        = &\\sum_{i=1}^{n} \\sum_{j=1}^{n} x_i^2 y_j^2 + \\sum_{j=1}^{n} x_j^2 \\left( \\sum_{i=1}^{n} y_i^2 \\right) - 2 \\left( \\sum_{i=1}^{n} x_i y_i \\right)^2 \\\\
        = &\\sum_{i=1}^{n} \\sum_{j=1}^{n} x_i^2 y_j^2 + \\sum_{i=1}^{n} y_i^2 \\sum_{j=1}^{n} x_j^2 - 2 \\left( \\sum_{i=1}^{n} x_i y_i \\right)^2 \\\\
        = &\\sum_{i=1}^{n} \\sum_{j=1}^{n} x_i^2 y_j^2 + \\sum_{i=1}^{n} \\sum_{j=1}^{n} y_i^2 x_j^2 - \\sum_{i=1}^{n} \\sum_{j=1}^{n} 2 x_i y_i x_j y_j \\\\
        = &\\sum_{i=1}^{n} \\sum_{j=1}^{n} \\left[ x_i^2 y_j^2 + y_i^2 x_j^2 - 2 x_i y_i x_j y_j \\right] \\\\
        = &\\sum_{i=1}^{n} \\sum_{j=1}^{n} \\left[ (x_i y_j)^2 - 2 (x_i y_i)(x_j y_j) + (y_i x_j)^2 \\right] \\\\
        = &\\sum_{i=1}^{n} \\sum_{j=1}^{n} (x_i y_j - x_j y_i)^2 \\geq 0.
      \\end{aligned} \\\\
      \\text{To show equality, first suppose } \\mathbf{x} \\text{ and } \\mathbf{y} \\text{ are collinear}. \\\\
      \\text{Recall } 2 \\lVert \\mathbf{x} \\rVert^2 \\lVert \\mathbf{y} \\rVert^2 - 2 |\\langle \\mathbf{x}, \\mathbf{y} \\rangle|^2 = \\sum_{i=1}^{n} \\sum_{j=1}^{n} (x_i y_j - x_j y_i)^2 \\geq 0. \\\\
      \\text{So whenever } x_i y_j - x_j y_i = 0, \\text{we have equality.} \\\\
      \\text{If } \\mathbf{x} = \\mathbf{y} = 0 \\text{ then there is nothing to prove.} \\\\
      \\text{So we suppose at least } \\mathbf{x} \\text{ or } \\mathbf{y} \\text{ is not the zero vector.} \\\\
      \\text{WLOG, take } \\mathbf{x} \\neq 0 \\text{ and } x_1 \\neq 0.
      \\text{ Then } \\\\
      \\begin{aligned} 
        & x_i y_j - x_j y_i = 0 \\text{ for all } i \\text{ and } j \\\\
        \\implies & x_1 y_j - x_j y_1 = 0 \\text{ for all } j \\\\
        \\implies & y_j = \\frac{y_1}{x_1} x_j \\text{ for all } j \\\\
        \\implies &\\mathbf{y} = \\frac{y_1}{x_1} \\mathbf{x}.
      \\end{aligned} \\\\
      \\text{Hence, } \\mathbf{x} \\text{ and } \\mathbf{y} \\text{ are collinear.} \\\\
      \\text{Conversely, suppose } \\mathbf{x} \\text{ and } \\mathbf{y} \\text{ are collinear}.

      `,
    },
  // Template:
  // {
  //   kind: "Lemma", // optional: "Theorem" (default), "Lemma", or "Corollary"
  //   number: 1,
  //   chapter: 1,
  //   section: 1,
  //   title: "Theorem name",
  //   statement: `\\text{Statement...}`,
  //   proof: `\\text{Proof...}`,
  //   // or multiple proofs:
  //   // proof: [
  //   //   { title: "Proof of (a)", content: `\\text{...}` },
  //   //   { title: "Proof of (b)", content: `\\text{...}` },
  //   // ],
  // },
];
