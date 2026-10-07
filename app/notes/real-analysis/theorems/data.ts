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
      \\text{Conversely, suppose } \\mathbf{x} \\text{ and } \\mathbf{y} \\text{ are collinear}. \\\\
      \\text{Then } \\exists t \\in \\mathbb{R} \\text{ s.t. } \\mathbf{y} = t \\mathbf{x}.
      \\text{Thus, } \\\\
      \\begin{aligned}
        & |\\langle \\mathbf{x,y} \\rangle| \\\\
        = & |\\langle \\mathbf{x}, t \\mathbf{x} \\rangle| \\\\
        = & |t| \\ |\\langle \\mathbf{x}, \\mathbf{x} \\rangle| \\\\
        = & |t| \\ |\\|\\mathbf{x} \\|^2| \\\\
        = & |t| \\ \\|\\mathbf{x}\\|^2 \\\\
        = & \\|\\mathbf{x}\\| \\|\\mathbf{y}\\| \\ \\ \\blacksquare
      \\end{aligned}
      `,
    },
  {
    kind: "Lemma",
    number: 2,
    chapter: 4,
    section: 1,
    title: "Properties of Orthonormal Sets",
    statement: `\\text{Let } \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\} \\subseteq \\mathbb{R}^n \\text{ be an orthonormal set.} \\\\[0.5em]
                \\text{(a) For } a_j \\in \\mathbb{R},\\ \\left\\lVert \\sum_{j=1}^{n} a_j \\mathbf{v}_j \\right\\rVert = \\left( \\sum_{j=1}^{n} a_j^2 \\right)^{1/2} \\\\[0.5em]
                \\text{(b) Any orthonormal set in } \\mathbb{R}^n \\text{ is linearly independent.} \\\\[0.5em]
                \\text{(c) An ONB in } \\mathbb{R}^n \\text{ is a basis and has exactly } n \\text{ elements.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{Let } S = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\} \\subseteq \\mathbb{R}^n. \\\\[0.5em]
                  \\text{1) } [[definition 1|Norm]] \\\\
                  \\text{2) } [[definition 5|Orthonormal]] \\\\
                  \\text{3) } [[definition 7|Linearly independent]] \\\\
                  \\text{4) } [[definition 6|ONB]] \\\\
                  \\text{5) } [[definition 8|Basis]] \\\\
                  \\text{6) A basis of } \\mathbb{R}^n \\text{ has } n \\text{ elements.}`,
      },
      {
        title: "Proof of (a)",
        content: `\\text{Assume } \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\} \\text{ is an orthonormal set. Then} \\\\
                  \\begin{aligned}
                    \\left\\lVert \\sum_{j=1}^{n} a_j \\mathbf{v}_j \\right\\rVert^2 &\\overset{(1)}{=} \\left\\langle \\sum_{j=1}^{n} a_j \\mathbf{v}_j, \\sum_{k=1}^{n} a_k \\mathbf{v}_k \\right\\rangle \\\\
                    &= \\sum_{j,k=1}^{n} a_j a_k \\langle \\mathbf{v}_j, \\mathbf{v}_k \\rangle \\\\
                    &\\overset{(2)}{=} \\sum_{j,k=1}^{n} a_j a_k \\delta_{jk} \\\\
                    &= \\sum_{j} a_j^2 \\cdot 1
                  \\end{aligned} \\\\
                  \\text{Thus } \\left\\lVert \\sum_{j=1}^{n} a_j \\mathbf{v}_j \\right\\rVert = \\left( \\sum_{j=1}^{n} a_j^2 \\right)^{1/2}
      `,
      },
      { 
        title: "Proof of (b)", 
        content: `\\text{Let } S = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\} \\text{ be an orthonormal set.} \\\\
                  \\text{We want to show it is linearly independent.} \\\\
                  \\text{Suppose } a_j \\in \\mathbb{R} \\text{ and } \\sum_{j=1}^{n} a_j \\mathbf{v}_j = \\mathbf{0}. \\\\
                  \\text{So we have } \\left\\lVert \\sum_{j=1}^{n} a_j \\mathbf{v}_j \\right\\rVert = 0. \\\\
                  \\text{Hence, by (a),} \\\\
                  0 = \\left\\lVert \\sum_{j=1}^{n} a_j \\mathbf{v}_j \\right\\rVert^2 = \\sum_{j=1}^{n} a_j^2, \\\\
                  \\text{which is a sum of non-negative values } (a_j^2 \\geq 0), \\\\
                  \\text{and so we have } \\forall j,\\ a_j^2 = 0 \\implies a_j = 0. \\\\
                  \\text{So } S \\text{ is linearly independent.}
        `
      },
      { title: "Proof of (c)", 
        content: `\\text{Let } S = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\} \\text{ be an orthonormal set.} \\\\
                  \\text{From (b) we know } S \\text{ is linearly independent,} \\\\
                  \\text{and by our definition of ONB (4)}, \\text{ S is spanning}. \\\\
                  \\text{Hence, } S \\text{ is a basis for } \\mathbb{R}^n.
        `
      },
    ],
  },
  {
    kind: "Lemma",
    number: 3,
    chapter: 4,
    section: 1,
    title: "Triangle Inequality",
    statement: `\\text{For all } \\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n,\\ \\lVert \\mathbf{x} + \\mathbf{y} \\rVert \\leq \\lVert \\mathbf{x} \\rVert + \\lVert \\mathbf{y} \\rVert. \\\\
                \\text{Moreover, the equality holds iff} \\\\
                \\mathbf{x} = \\mathbf{0} \\text{ or } \\exists c \\geq 0,\\ \\mathbf{y} = c\\mathbf{x}.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Norm]] \\\\
                  \\text{2) } [[theorem 1|Cauchy-Schwarz]]`,
      },
      {
        title: "Proof",
        content: `\\text{Let } \\mathbf{x,y} \\in \\mathbb{R}^n. \\text{ We first show the inequality.}
                  \\text{Note } 
                  \\text{Observe}
                  \\begin{aligned}
                  
                  \\end{aligned}
        `,
      },
    ],
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
