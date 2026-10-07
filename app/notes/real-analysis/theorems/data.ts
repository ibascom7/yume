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
      proof: [
        {
          title: "Recall",
          content: `\\text{1) } [[definition 1|Norm]] \\\\
                    \\text{2) } [[definition 3|Dot Product / Inner Product]] \\\\
                    \\text{3) } [[definition 4|Collinear]]`,
        },
        {
          title: "Proof",
          content: `
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
        = &2 \\left( \\sum_{i=1}^{n} x_i^2 \\right) \\left( \\sum_{j=1}^{n} y_j^2 \\right) - 2 \\left( \\sum_{i=1}^{n} x_i y_i \\right)^2 & \\text{ (By def of [[definition 1|norm]] and [[definition 3|inner product]])} \\\\
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
      ],
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
        title: "Proof of inequality",
        content: `\\text{Let } \\mathbf{x,y} \\in \\mathbb{R}^n. \\\\
                  \\text{Observe} \\\\
                  \\begin{aligned}
                    \\| \\mathbf{x} + \\mathbf{y} \\|^2 &\\overset{(1)}= \\langle \\mathbf{x} + \\mathbf{y}, \\mathbf{x} + \\mathbf{y} \\rangle \\\\
                      &= \\langle \\mathbf{x}, \\mathbf{x} \\rangle + \\langle \\mathbf{x}, \\mathbf{y} \\rangle + \\langle \\mathbf{y}, \\mathbf{x} \\rangle + \\langle \\mathbf{y}, \\mathbf{y} \\rangle \\\\
                      &= \\| \\mathbf{x} \\|^2 + \\langle \\mathbf{x}, \\mathbf{y} \\rangle + \\langle \\mathbf{x}, \\mathbf{y} \\rangle + \\| \\mathbf{y} \\|^2 \\\\
                      &= \\| \\mathbf{x} \\|^2 + 2 \\langle \\mathbf{x}, \\mathbf{y} \\rangle + \\| \\mathbf{y} \\|^2 \\\\
                      &\\leq \\| \\mathbf{x} \\|^2 + 2 | \\langle \\mathbf{x}, \\mathbf{y} \\rangle | + \\| \\mathbf{y} \\|^2 \\\\
                      &\\overset{(2)}{\\leq} \\| \\mathbf{x} \\|^2 + 2 \\| \\mathbf{x} \\| \\| \\mathbf{y} \\| + \\| \\mathbf{y} \\|^2 \\\\
                      &= (\\| \\mathbf{x} \\| + \\| \\mathbf{y} \\|)^2
                  \\end{aligned} \\\\
                  \\text{By taking square roots, } \\\\
                  \\| \\mathbf{x} + \\mathbf{y} \\|^2 \\le (\\| \\mathbf{x} \\| + \\| \\mathbf{x} \\|)^2  \\implies \\| \\mathbf{x} + \\mathbf{y} \\| \\le \\| \\mathbf{x} \\| + \\| \\mathbf{x} \\|.
        `,
      },
      {
        title: "Proof of equality",
        content: `\\text{Let } \\mathbf{x,y} \\in \\mathbb{R}^n. \\\\
                  \\text{Suppose } \\lVert \\mathbf{x} + \\mathbf{y} \\rVert = \\lVert \\mathbf{x} \\rVert + \\lVert \\mathbf{y} \\rVert. \\\\
                  \\text{From our computations in the proof of inequality, we have} \\\\
                  \\begin{aligned}
                    \\| \\mathbf{x} + \\mathbf{y} \\|^2 &\\leq \\| \\mathbf{x} \\|^2 + 2 | \\langle \\mathbf{x}, \\mathbf{y} \\rangle | + \\| \\mathbf{y} \\|^2 \\\\
                      &\\overset{(2)}{\\leq} \\| \\mathbf{x} \\|^2 + 2 \\| \\mathbf{x} \\| \\| \\mathbf{y} \\| + \\| \\mathbf{y} \\|^2 \\\\
                      &= (\\| \\mathbf{x} \\| + \\| \\mathbf{y} \\|)^2
                  \\end{aligned} \\\\
                  \\text{But by our assumption we force } \\\\
                  \\| \\mathbf{x} \\|^2 + 2 | \\langle \\mathbf{x}, \\mathbf{y} \\rangle | + \\| \\mathbf{y} \\|^2
                      = \\| \\mathbf{x} \\|^2 + 2 \\| \\mathbf{x} \\| \\| \\mathbf{y} \\| + \\| \\mathbf{y} \\|^2. \\\\
                  \\text{Which implies } | \\langle \\mathbf{x}, \\mathbf{y} \\rangle | = \\| \\mathbf{x} \\| \\| \\mathbf{y} \\|. \\\\
                  \\text{So (2) requires that } \\exists t \\in \\mathbb{R} \\text{ s.t. } \\mathbf{y} = t \\mathbf{x}. \\\\
                  \\text{If } \\mathbf{x} = 0, \\text{ then there is nothing to prove}. \\\\
                  \\text{If } \\mathbf{x} \\neq 0, \\text{ then we have } \\\\
                  0 \\le \\langle \\mathbf{x,y} \\rangle = \\langle \\mathbf{x}, t\\mathbf{x} \\rangle = t \\langle \\mathbf{x}, \\mathbf{x} \\rangle. \\\\
                  \\text{So } t \\ge 0.
        `
      }
    ],
  },
  {
    kind: "Lemma",
    number: 4,
    chapter: 4,
    section: 2,
    title: "Convergence via Norms",
    statement: `\\text{Let } (\\mathbf{x}_k) \\subseteq \\mathbb{R}^n. \\text{ Then} \\\\
                \\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a} \\iff \\lim_{k \\to \\infty} \\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert = 0.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 9|Convergence]] \\\\
                  \\text{2) } [[definition 1|Norm]]`,
      },
      {
        title: "Proof",
        content: `\\text{Let } \\varepsilon > 0.
                  \\\\ \\text{Suppose } \\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}. 
                  \\\\ \\text{Then } \\exists N \\in \\mathbb{N} \\text{ s.t. } \\| \\mathbf{x}_k - \\mathbf{a} \\| < \\varepsilon \\ \\forall k \\ge N.
                  \\\\ \\text{Let } m_k = \\| \\mathbf{x}_k - \\mathbf{a} \\| \\text{ be a sequence in } \\mathbb{R}.
                  \\\\ \\text{So for } k \\ge N, |m_k| = m_k < \\varepsilon.
                  \\\\[1em] \\text{Conversely, suppose } \\lim_{k \\to \\infty} \\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert = 0.
                  \\\\ \\text{Then } \\exists N \\in \\mathbb{N} \\text{ s.t. } \\| \\mathbf{x}_k - \\mathbf{a} \\| < \\varepsilon \\ \\forall k \\ge N.
                  \\\\ \\text{This is the definition (1) of } \\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}.

        `
      }
    ],
  },
  {
    kind: "Lemma",
    number: 5,
    chapter: 4,
    section: 2,
    title: "Coordinatewise Convergence",
    statement: `\\text{A sequence } (\\mathbf{x}_k) \\subseteq \\mathbb{R}^n, \\ \\mathbf{x}_k = \\begin{pmatrix} x_{k,1} \\\\ \\vdots \\\\ x_{k,n} \\end{pmatrix}, \\\\
                \\text{converges to $\\mathbf{a} = (a_1, \\ldots, a_n)$ iff} \\\\
                \\text{each coordinate converges,} \\\\
                \\text{i.e. } \\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a} \\iff \\\\
                \\text{for each coordinate } j = 1, \\ldots, n, \\ \\lim_{k \\to \\infty} x_{k,j} = a_j.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 9|Convergence]] 
                  \\\\ \\text{2) } [[definition 1|Norm]]`,
      },
      {
        title: "Proof",
        content: `\\text{($\\Rightarrow$). Let $\\varepsilon > 0$. Assume $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$.} \\\\
                  \\text{Then $\\exists N \\in \\mathbb{N}$, $\\forall k \\geq N$, $\\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert < \\varepsilon$.} \\\\
                  \\text{Let $j \\in \\{1, \\ldots, n\\}$. Note} \\\\
                  \\begin{aligned}
                    |x_{k,j} - a_j| &= \\sqrt{(x_{k,j} - a_j)^2} \\\\
                    &\\leq \\sqrt{\\sum_{i=1}^{n} (x_{k,i} - a_i)^2} \\\\
                    &= \\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert
                  \\end{aligned} \\\\
                  \\text{since $(x_{k,j} - a_j)^2$ is a term in the sum for $\\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert$.} \\\\
                  \\text{Thus, for $k \\geq N$,} \\\\
                  |x_{k,j} - a_j| \\leq \\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert < \\varepsilon. \\\\[1em]
                  \\text{($\\Leftarrow$). Let $\\varepsilon > 0$. Know for each $j \\in \\{1, \\ldots, n\\}$,} \\\\
                  \\lim_{k \\to \\infty} x_{k,j} = a_j. \\\\
                  \\text{Hence, $\\exists N_j \\in \\mathbb{N}$, $\\forall k \\geq N_j$, $|x_{k,j} - a_j| < \\frac{\\varepsilon}{n}$.} \\\\
                  \\text{Note for each $j$, $N_j = N(\\varepsilon, j)$.} \\\\
                  \\text{Let $N = \\max\\{N_1, \\ldots, N_n\\}$.} \\\\
                  \\text{Then for $k \\geq N$,} \\\\
                  \\begin{aligned}
                    \\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert &= \\sqrt{\\sum_{j=1}^{n} (x_{k,j} - a_j)^2} < \\sqrt{\\sum_{j=1}^{n} \\left( \\frac{\\varepsilon}{n} \\right)^2} \\\\
                    &= \\sqrt{n \\cdot \\frac{\\varepsilon^2}{n^2}} = \\frac{\\varepsilon}{\\sqrt{n}} \\leq \\varepsilon. \\ \\blacksquare
                  \\end{aligned}`,
      },
    ],
  },
  {
    kind: "Lemma",
    number: 6,
    chapter: 4,
    section: 2,
    title: "Convergent Sequences are Cauchy",
    statement: `\\text{Every convergent sequence is Cauchy.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 9|Convergence]] \\\\
                  \\text{2) } [[definition 10|Cauchy sequence]] \\\\
                  \\text{3) } [[theorem 3| Triangle Inequality]]
                  `,
      },
      {
        title: "Proof",
        content: `\\text{Let } (\\mathbf{x}_k) \\subseteq \\mathbb{R}^n \\text{ be a sequence that converges to } \\mathbf{a} \\in \\mathbb{R}^n.
                  \\\\ \\text{Then } \\exists N \\in \\N. \\text{ s.t. } \\| \\mathbf{x}_k - \\mathbf{a} \\| < \\frac{\\varepsilon}{2} \\ \\forall k \\ge N.
                  \\\\ \\text{Let } k, \\ell \\ge N, 
                  \\\\ \\begin{aligned}
                    \\| \\mathbf{x}_k - \\mathbf{x}_{\\ell} \\| &\\le \\| \\mathbf{x}_k - \\mathbf{a} \\| + \\| \\mathbf{a} - \\mathbf{x}_{\\ell} \\|
                    \\\\ &= \\| \\mathbf{x}_k - \\mathbf{a} \\| + \\| \\mathbf{x}_{\\ell} - \\mathbf{a} \\|
                    \\\\ &< \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon
                  \\\\ \\end{aligned}
                  \\\\ \\text{Hence, convergent } (\\mathbf{x}_k) \\subseteq \\mathbb{R}^n \\text{ are Cauchy.}
                  
        `
      }
    ],
  },
  {
    kind: "Theorem",
    number: 7,
    chapter: 4,
    section: 2,
    title: "Completeness Theorem for ℝⁿ",
    statement: `\\text{Every Cauchy sequence in $\\mathbb{R}^n$ converges.} \\\\
                \\text{Thus, $\\mathbb{R}^n$ is complete.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 10|Cauchy sequence]] \\\\
                  \\text{2) } [[definition 9|Convergence]] \\\\
                  \\text{3) } [[definition 11|Complete]] \\\\
                  \\text{4) } \\mathbb{R} \\text{ is complete} \\\\
                  \\text{5) } [[definition 1|Norm]]`,
      },
      {
        title: "Proof",
        content: `\\text{Let } 
                  \\text{By } [[theorem 5|previous lemma]], 
        `
      }
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
