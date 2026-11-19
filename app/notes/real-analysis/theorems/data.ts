import type { ChapterRef } from "@/app/components/notesFilter";
import type { TheoremKind } from "../components/TheoremCard";
import type { Example } from "../components/DefinitionCard";

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
  examples?: Example[];
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
    examples: [
      {
        title: "Watch the proof",
        content: `\\text{Pick a sequence in } \\mathbb{R}^2 \\text{ and an } \\varepsilon\\text{. Each coordinate gets its own } N_j\\text{,} \\\\
                  \\text{and } N = \\max\\{N_1, N_2\\} \\text{ puts the tail inside the } \\varepsilon\\text{-ball.}`,
        widget: "coordinatewise",
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
                  \\\\ \\text{Let } \\varepsilon > 0.
                  \\\\ \\text{Then } \\exists N \\in \\mathbb{N} \\text{ s.t. } \\| \\mathbf{x}_k - \\mathbf{a} \\| < \\frac{\\varepsilon}{2} \\ \\forall k \\ge N.
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
        content: `\\text{Suppose that $\\mathbf{x}_k = (x_{k,1}, x_{k,2}, \\ldots, x_{k,n})$ is Cauchy in $\\mathbb{R}^n$.} \\\\
                  \\text{Let $\\varepsilon > 0$. By definition, this means} \\\\
                  \\exists N \\in \\mathbb{N},\\ \\forall k, l \\geq N,\\ \\lVert \\mathbf{x}_k - \\mathbf{x}_l \\rVert < \\varepsilon. \\\\
                  \\text{But then for each $j \\in \\{1, \\ldots, n\\}$ and $k, l \\geq N$,} \\\\
                  |x_{k,j} - x_{l,j}| \\leq \\lVert \\mathbf{x}_k - \\mathbf{x}_l \\rVert < \\varepsilon. \\\\
                  \\text{Thus, $(x_{k,j})$ is Cauchy. By completeness of $\\mathbb{R}$,} \\\\
                  \\text{$(x_{k,j})$ is convergent. So $\\exists a_j \\in \\mathbb{R}$, $\\lim_{k \\to \\infty} x_{k,j} = a_j$.} \\\\
                  \\text{Let $\\mathbf{a} = (a_1, a_2, \\ldots, a_n) \\in \\mathbb{R}^n$.} \\\\
                  \\text{Since for $(\\mathbf{x}_k)$ we have $\\lim_{k \\to \\infty} x_{k,j} = a_j$ for all $j$,} \\\\
                  \\text{$\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$ by [[theorem 5|previous lemma]].} \\\\
                  \\text{Hence $(\\mathbf{x}_k)$ is convergent, so $\\mathbb{R}^n$ is complete.} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Proposition",
    number: 8,
    chapter: 4,
    section: 3,
    title: "Unions and Intersections of Closed Sets",
    statement: `\\text{If } A, B \\subseteq \\mathbb{R}^n \\text{ are closed, then } A \\cup B \\text{ is closed.} \\\\
                \\text{If } \\{A_j\\} \\text{ is a family of closed subsets of } \\mathbb{R}^n, \\\\
                \\text{then } \\bigcap_j A_j \\text{ is closed.} \\\\
                \\text{(The family can be finite, countable, or uncountable.)}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 13|Closed]] \\\\
                  \\text{2) } [[definition 12|Limit point]]`,
      },
      {
        title: "Plan for Part 1",
        content: `\\text{(a) If $(\\mathbf{x}_k) \\subseteq A \\cup B$, then infinitely many terms of the} \\\\
                  \\text{sequence lie in $A$, or infinitely many lie in $B$ (or both).} \\\\
                  \\text{(b) Those terms form a subsequence; since $A$ (or $B$) is} \\\\
                  \\text{closed, its limit lies in $A$ (or $B$), hence in $A \\cup B$.}`,
      },
      {
        title: "Proof of Part 1",
        content: `\\text{Suppose $A, B \\subseteq \\mathbb{R}^n$ are closed. We want $A \\cup B$ closed, so} \\\\
                  \\text{let $\\mathbf{x}$ be a limit point of $A \\cup B$. Then there is} \\\\
                  \\text{$(\\mathbf{x}_k) \\subseteq A \\cup B$ with $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{x}$.} \\\\[0.5em]
                  \\text{Every index $k$ has $\\mathbf{x}_k \\in A$ or $\\mathbf{x}_k \\in B$. Since there are} \\\\
                  \\text{infinitely many indices, at least one of the sets} \\\\
                  \\{k : \\mathbf{x}_k \\in A\\} \\text{ or } \\{k : \\mathbf{x}_k \\in B\\} \\\\
                  \\text{is infinite. WLOG $\\{k : \\mathbf{x}_k \\in A\\}$ is infinite; list its elements} \\\\
                  \\text{as $k_1 < k_2 < \\cdots$. Then $(\\mathbf{x}_{k_j}) \\subseteq A$ is a subsequence of} \\\\
                  \\text{$(\\mathbf{x}_k)$, so $\\lim_{j \\to \\infty} \\mathbf{x}_{k_j} = \\mathbf{x}$.} \\\\[0.5em]
                  \\text{Since $A$ is closed, $\\mathbf{x} \\in A$. Since $A \\subseteq A \\cup B$, $\\mathbf{x} \\in A \\cup B$.} \\\\
                  \\text{Thus $A \\cup B$ is closed.} \\ \\blacksquare`,
      },
      {
        title: "Proof of Part 2",
        content: `\\text{Recall $\\mathbf{x} \\in \\bigcap_j A_j$ means $\\mathbf{x} \\in A_j$ for all $j$.} \\\\
                  \\text{Let $\\mathbf{x}$ be a limit point of $\\bigcap_j A_j$. Then there is} \\\\
                  \\text{$(\\mathbf{a}_k) \\subseteq \\bigcap_j A_j$ with $\\lim_{k \\to \\infty} \\mathbf{a}_k = \\mathbf{x}$.} \\\\
                  \\text{Since $(\\mathbf{a}_k) \\subseteq \\bigcap_j A_j$, for each $j$ we have $(\\mathbf{a}_k) \\subseteq A_j$.} \\\\
                  \\text{Since $A_j$ is closed, $\\mathbf{x} = \\lim_{k \\to \\infty} \\mathbf{a}_k \\in A_j$.} \\\\
                  \\text{Since $j$ was arbitrary, $\\mathbf{x} \\in A_j$ for all $j$, so $\\mathbf{x} \\in \\bigcap_j A_j$.} \\\\
                  \\text{Thus an arbitrary limit point of $\\bigcap_j A_j$ is in $\\bigcap_j A_j$, so} \\\\
                  \\text{$\\bigcap_j A_j$ is closed.} \\ \\blacksquare`,
      },
      {
        title: "Remark",
        content: `\\text{Note the asymmetry: \\textit{finite} unions of closed sets are closed} \\\\
                  \\text{(apply Part 1 repeatedly), but \\textit{arbitrary} intersections are.} \\\\
                  \\text{Infinite unions can fail:} \\\\
                  \\bigcup_{k \\geq 1} \\left[ \\tfrac{1}{k}, 1 \\right] = (0, 1] \\text{ is not closed.}`,
      },
    ],
  },
  {
    kind: "Lemma",
    number: 9,
    chapter: 4,
    section: 3,
    title: "Closure is the Smallest Closed Set",
    statement: `\\text{Let } A \\subseteq \\mathbb{R}^n. \\text{ Then } \\overline{A} \\text{ is the smallest closed set containing } A. \\\\
                \\text{In particular, } \\overline{\\overline{A}} = \\overline{A}.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 13|Closed]]\\text{: $A$ closed $\\iff$ $A \\supseteq \\overline{A}$.} \\\\
                  \\text{2) } [[definition 12|Limit point]]\\text{: $\\mathbf{x}$ is a limit point of $A$ $\\iff$} \\\\
                  \\text{there is $(\\mathbf{a}_k) \\subseteq A$ with $\\lim_{k \\to \\infty} \\mathbf{a}_k = \\mathbf{x}$.} \\\\
                  \\text{3) } [[definition 14|Closure]]\\text{: $\\overline{A} = \\{\\text{limit points of } A\\}$.} \\\\
                  \\text{4) } [[definition 9|Convergence]] \\\\
                  \\text{5) } [[theorem 4|Convergence via Norms]]\\text{:} \\\\
                  \\lim_{k \\to \\infty} \\mathbf{a}_k = \\mathbf{x} \\iff \\lim_{k \\to \\infty} \\lVert \\mathbf{a}_k - \\mathbf{x} \\rVert = 0.`,
      },
      {
        title: "Plan",
        content: `\\text{Show} \\\\
                  \\text{(a) $\\overline{A} \\supseteq A$;} \\\\
                  \\text{(b) $\\overline{A}$ is closed;} \\\\
                  \\text{(c) $\\overline{A}$ is the smallest: if $C \\supseteq A$ and $C$ is closed, then} \\\\
                  \\text{$C \\supseteq \\overline{A}$;} \\\\
                  \\text{(d) $\\overline{\\overline{A}} = \\overline{A}$.}`,
      },
      {
        title: "Proof of (a)",
        content: `\\text{We want $A \\subseteq \\overline{A}$. Let $\\mathbf{a} \\in A$; we want $(\\mathbf{a}_k) \\subseteq A$ with} \\\\
                  \\text{$\\mathbf{a}_k \\to \\mathbf{a}$. Take the constant sequence $\\mathbf{a}_k = \\mathbf{a} \\in A$ for all $k \\geq 1$.} \\\\
                  \\text{Then} \\\\
                  \\lim_{k \\to \\infty} \\lVert \\mathbf{a}_k - \\mathbf{a} \\rVert = \\lim_{k \\to \\infty} \\lVert \\mathbf{a} - \\mathbf{a} \\rVert = 0. \\ \\blacksquare`,
      },
      {
        title: "Proof of (b)",
        content: `\\text{We want $\\overline{A}$ to contain all limit points of $\\overline{A}$.} \\\\
                  \\text{(Careful: we cannot assume $\\overline{A}$ is closed just because it is} \\\\
                  \\text{a set of limit points. That is what we are proving.)} \\\\[0.5em]
                  \\text{Let $\\mathbf{x}$ be a limit point of $\\overline{A}$; the goal is $\\mathbf{x} \\in \\overline{A}$. There is} \\\\
                  \\text{$(\\mathbf{a}_k) \\subseteq \\overline{A}$ with $\\mathbf{a}_k \\to \\mathbf{x}$.} \\\\
                  \\text{Since each $\\mathbf{a}_k \\in \\overline{A}$, each $\\mathbf{a}_k$ is a limit point of $A$: there} \\\\
                  \\text{is a sequence $(\\mathbf{b}_{k,j})_j \\subseteq A$ with $\\lim_{j \\to \\infty} \\mathbf{b}_{k,j} = \\mathbf{a}_k$.} \\\\[0.5em]
                  \\text{Fix $k$. Take $\\varepsilon = \\frac{1}{k}$: there is $N$ such that for all $j \\geq N$,} \\\\
                  \\text{$\\lVert \\mathbf{a}_k - \\mathbf{b}_{k,j} \\rVert < \\frac{1}{k}$. Pick one such term and call it $\\mathbf{c}_k$} \\\\
                  \\text{(e.g. $\\mathbf{c}_k = \\mathbf{b}_{k,N}$).} \\\\
                  \\text{Doing this for each $k$ builds a sequence $(\\mathbf{c}_k) \\subseteq A$ with} \\\\
                  \\lVert \\mathbf{a}_k - \\mathbf{c}_k \\rVert < \\tfrac{1}{k} \\quad \\text{for all } k \\geq 1. \\\\
                  \\text{By the squeeze theorem, $0 \\leq \\lVert \\mathbf{a}_k - \\mathbf{c}_k \\rVert < \\frac{1}{k} \\to 0$, so} \\\\
                  \\text{$\\lim_{k \\to \\infty} (\\mathbf{c}_k - \\mathbf{a}_k) = \\mathbf{0}$. Then} \\\\
                  \\begin{aligned}
                    \\lim_{k \\to \\infty} \\mathbf{c}_k &= \\lim_{k \\to \\infty} \\big[ \\mathbf{a}_k + (\\mathbf{c}_k - \\mathbf{a}_k) \\big] \\\\
                    &= \\lim_{k \\to \\infty} \\mathbf{a}_k + \\lim_{k \\to \\infty} (\\mathbf{c}_k - \\mathbf{a}_k) \\\\
                    &= \\mathbf{x} + \\mathbf{0} = \\mathbf{x}.
                  \\end{aligned} \\\\
                  \\text{Since $(\\mathbf{c}_k) \\subseteq A$, $\\mathbf{x}$ is a limit point of $A$, i.e. $\\mathbf{x} \\in \\overline{A}$.} \\\\
                  \\text{So $\\overline{A}$ is closed.} \\ \\blacksquare`,
      },
      {
        title: "Proof of (c)",
        content: `\\text{Let $C$ be closed with $C \\supseteq A$; we want $C \\supseteq \\overline{A}$.} \\\\
                  \\text{Let $\\mathbf{x} \\in \\overline{A}$. Then there is $(\\mathbf{a}_k) \\subseteq A$ with $\\mathbf{a}_k \\to \\mathbf{x}$.} \\\\
                  \\text{Since $A \\subseteq C$, also $(\\mathbf{a}_k) \\subseteq C$, so $\\mathbf{x}$ is a limit point of $C$.} \\\\
                  \\text{Since $C$ is closed, $\\mathbf{x} \\in C$.} \\ \\blacksquare`,
      },
      {
        title: "Proof of (d)",
        content: `\\text{By (c), for every closed $C \\supseteq \\overline{A}$ we have $\\overline{\\overline{A}} \\subseteq C$ (apply (c)} \\\\
                  \\text{to the set $\\overline{A}$). By (b), $\\overline{A}$ itself is closed, so take $C = \\overline{A}$:} \\\\
                  \\text{this gives $\\overline{\\overline{A}} \\subseteq \\overline{A}$.} \\\\
                  \\text{On the other hand, $\\overline{\\overline{A}} \\supseteq \\overline{A}$ by (a). Hence $\\overline{\\overline{A}} = \\overline{A}$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 10,
    chapter: 4,
    section: 3,
    title: "Open iff Complement is Closed",
    statement: `\\text{A set } A \\subseteq \\mathbb{R}^n \\text{ is open if and only if its complement} \\\\
                A^c = \\{ \\mathbf{x} \\in \\mathbb{R}^n : \\mathbf{x} \\notin A \\} \\text{ is closed.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 17|Open]] \\\\
                  \\text{2) } [[definition 13|Closed]] \\\\
                  \\text{3) } [[definition 14|Closure]] \\\\
                  \\text{4) } [[definition 16|Ball]] \\\\
                  \\text{5) } [[definition 9|Convergence]]`,
      },
      {
        title: "Proof of (⇒)",
        content: `\\text{Let $A$ be open. We want $A^c$ closed, i.e. $\\overline{A^c} \\subseteq A^c$.} \\\\
                  \\text{Let $\\mathbf{x} \\in \\overline{A^c}$, so there is $(\\mathbf{x}_k) \\subseteq A^c$ with $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{x}$.} \\\\
                  \\text{Goal: $\\mathbf{x} \\in A^c$.} \\\\[0.5em]
                  \\text{For the sake of contradiction, suppose $\\mathbf{x} \\notin A^c$, so $\\mathbf{x} \\in A$.} \\\\
                  \\text{Since $A$ is open, there is $r > 0$ with $B_r(\\mathbf{x}) \\subseteq A$.} \\\\
                  \\text{Since $\\mathbf{x}_k \\to \\mathbf{x}$, taking $\\varepsilon = r$ in the definition of} \\\\
                  \\text{convergence gives $N \\in \\mathbb{N}$ such that for all $k \\geq N$,} \\\\
                  \\text{$\\lVert \\mathbf{x}_k - \\mathbf{x} \\rVert < r$, i.e. $\\mathbf{x}_k \\in B_r(\\mathbf{x})$.} \\\\
                  \\text{So for $k = N$: $\\mathbf{x}_N \\in B_r(\\mathbf{x}) \\subseteq A$, and also $\\mathbf{x}_N \\in A^c$.} \\\\
                  \\text{Then $\\mathbf{x}_N \\in A \\cap A^c = \\emptyset$, a contradiction.} \\ \\blacksquare`,
      },
      {
        title: "Proof of (⇐)",
        content: `\\text{Assume $A^c$ is closed. We want $A$ open.} \\\\
                  \\text{For the sake of contradiction, suppose $A$ is not open. By the} \\\\
                  \\text{[[definition 17|negation]], there is $\\mathbf{a} \\in A$ such that for all $r > 0$ there} \\\\
                  \\text{is $\\mathbf{b} \\in B_r(\\mathbf{a})$ with $\\mathbf{b} \\notin A$.} \\\\
                  \\text{Let $r = \\frac{1}{k}$ for $k \\in \\mathbb{N}$: there is $\\mathbf{b}_k \\in B_{1/k}(\\mathbf{a})$ with $\\mathbf{b}_k \\notin A$.} \\\\
                  \\text{By the definition of the ball, $\\lVert \\mathbf{b}_k - \\mathbf{a} \\rVert < \\frac{1}{k}$.} \\\\
                  \\text{So $(\\mathbf{b}_k) \\subseteq A^c$ and $\\lim_{k \\to \\infty} \\lVert \\mathbf{b}_k - \\mathbf{a} \\rVert = 0$, i.e.} \\\\
                  \\text{$\\lim_{k \\to \\infty} \\mathbf{b}_k = \\mathbf{a}$ ([[theorem 4|Lemma 4.2.2]]).} \\\\
                  \\text{Since $A^c$ is closed, $\\mathbf{a} \\in A^c$. On the other hand, $\\mathbf{a} \\in A$, a} \\\\
                  \\text{contradiction.} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Proposition",
    number: 11,
    chapter: 4,
    section: 3,
    title: "Intersections and Unions of Open Sets",
    statement: `\\text{If } U \\text{ and } V \\text{ are open in } \\mathbb{R}^n, \\text{ then } U \\cap V \\text{ is open in } \\mathbb{R}^n. \\\\
                \\text{If } \\{U_j\\} \\text{ is a family of open sets in } \\mathbb{R}^n \\text{ (any indexing set,} \\\\
                \\text{e.g. uncountable, is allowed), then } \\bigcup_j U_j \\text{ is open.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 17|Open]] \\\\
                  \\text{2) } [[definition 16|Ball]]`,
      },
      {
        title: "Proof",
        content: `\\text{\\textit{Intersection.} Let $\\mathbf{a} \\in U \\cap V$. Since $U$ and $V$ are open, there} \\\\
                  \\text{are $r_1, r_2 > 0$ with $B_{r_1}(\\mathbf{a}) \\subseteq U$ and $B_{r_2}(\\mathbf{a}) \\subseteq V$.} \\\\
                  \\text{Let $r = \\min\\{r_1, r_2\\} > 0$. Then $B_r(\\mathbf{a}) \\subseteq B_{r_1}(\\mathbf{a}) \\subseteq U$ and} \\\\
                  \\text{$B_r(\\mathbf{a}) \\subseteq B_{r_2}(\\mathbf{a}) \\subseteq V$, so $B_r(\\mathbf{a}) \\subseteq U \\cap V$.} \\\\[0.5em]
                  \\text{\\textit{Union.} Let $\\mathbf{a} \\in \\bigcup_j U_j$. Then $\\mathbf{a} \\in U_{j_0}$ for some $j_0$. Since $U_{j_0}$} \\\\
                  \\text{is open, there is $r > 0$ with $B_r(\\mathbf{a}) \\subseteq U_{j_0} \\subseteq \\bigcup_j U_j$.} \\ \\blacksquare`,
      },
      {
        title: "Remark",
        content: `\\text{This is [[theorem 8|Proposition 4.3.3]] again, through complements: by} \\\\
                  \\text{[[theorem 10|Theorem 4.3.8]] and De Morgan's laws,} \\\\
                  (U \\cap V)^c = U^c \\cup V^c \\text{ and } \\Big( \\bigcup_j U_j \\Big)^c = \\bigcap_j U_j^c.`,
      },
    ],
  },
  {
    kind: "Remark",
    number: 12,
    chapter: 4,
    section: 3,
    title: "Ball Characterization of Closure",
    statement: `\\mathbf{x} \\notin \\overline{A} \\iff \\exists r > 0,\\ B_r(\\mathbf{x}) \\cap A = \\emptyset. \\\\
                \\text{Equivalently, } \\mathbf{x} \\in \\overline{A} \\iff \\text{every ball around } \\mathbf{x} \\text{ meets } A.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 14|Closure]] \\\\
                  \\text{2) } [[definition 12|Limit point]] \\\\
                  \\text{3) } [[definition 16|Ball]] \\\\
                  \\text{4) } [[definition 9|Convergence]]`,
      },
      {
        title: "Proof of (⇒)",
        content: `\\text{We prove the contrapositive: if $B_r(\\mathbf{x}) \\cap A \\neq \\emptyset$ for all $r > 0$,} \\\\
                  \\text{then $\\mathbf{x} \\in \\overline{A}$.} \\\\
                  \\text{Take $r = \\frac{1}{k}$ for $k \\in \\mathbb{N}$. Then $B_{1/k}(\\mathbf{x}) \\cap A \\neq \\emptyset$ for all $k \\geq 1$,} \\\\
                  \\text{so there is $\\mathbf{b}_k \\in B_{1/k}(\\mathbf{x})$ with $\\mathbf{b}_k \\in A$.} \\\\
                  \\text{So for all $k \\geq 1$, $\\lVert \\mathbf{b}_k - \\mathbf{x} \\rVert < \\frac{1}{k}$ and $(\\mathbf{b}_k) \\subseteq A$. Letting} \\\\
                  \\text{$k \\to \\infty$, $\\lim_{k \\to \\infty} \\mathbf{b}_k = \\mathbf{x}$. So $\\mathbf{x} \\in \\overline{A}$.} \\ \\blacksquare`,
      },
      {
        title: "Proof of (⇐)",
        content: `\\text{We prove the contrapositive: if $\\mathbf{x} \\in \\overline{A}$, then $B_r(\\mathbf{x}) \\cap A \\neq \\emptyset$} \\\\
                  \\text{for every $r > 0$.} \\\\
                  \\text{Assume $\\mathbf{x} \\in \\overline{A}$. By the definition of $\\overline{A}$ and limit points, there} \\\\
                  \\text{is $(\\mathbf{b}_k) \\subseteq A$ with $\\lim_{k \\to \\infty} \\mathbf{b}_k = \\mathbf{x}$.} \\\\
                  \\text{Let $r > 0$. By the definition of convergence with $\\varepsilon = \\frac{r}{2}$,} \\\\
                  \\text{there is $N \\in \\mathbb{N}$ such that for all $k \\geq N$, $\\lVert \\mathbf{b}_k - \\mathbf{x} \\rVert < \\frac{r}{2} < r$.} \\\\
                  \\text{In particular $\\mathbf{b}_N \\in A$ and $\\mathbf{b}_N \\in B_r(\\mathbf{x})$, so $B_r(\\mathbf{x}) \\cap A \\neq \\emptyset$.} \\ \\blacksquare`,
      },
      {
        title: "Remark",
        content: `\\text{Any $\\varepsilon \\leq r$ works; $\\varepsilon = r$ itself is fine since $\\lVert \\mathbf{b}_k - \\mathbf{x} \\rVert < r$} \\\\
                  \\text{is already strict.}`,
      },
    ],
  },
  {
    kind: "Lemma",
    number: 13,
    chapter: 4,
    section: 3,
    title: "Interior of the Complement",
    statement: `\\text{For any set } A \\subseteq \\mathbb{R}^n, \\ \\operatorname{int}(A^c) = (\\overline{A})^c.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 18|Interior]] \\\\
                  \\text{2) } [[definition 14|Closure]] \\\\
                  \\text{3) } [[theorem 9|Lemma 4.3.5]] \\\\
                  \\text{4) } [[theorem 10|Theorem 4.3.8]]`,
      },
      {
        title: "Plan",
        content: `\\text{Let $B = (\\overline{A})^c$. Then $B = \\operatorname{int}(A^c)$ if} \\\\
                  \\text{(a) $B$ is open,} \\\\
                  \\text{(b) $B \\subseteq A^c$, and} \\\\
                  \\text{(c) $B$ is the largest: if $U \\subseteq A^c$ is open, then $U \\subseteq B$.}`,
      },
      {
        title: "Proof",
        content: `\\text{\\textit{(a)} $\\overline{A}$ is closed ([[theorem 9|Lemma 4.3.5]]), so $B = (\\overline{A})^c$ is open by} \\\\
                  \\text{[[theorem 10|Theorem 4.3.8]].} \\\\[0.5em]
                  \\text{\\textit{(b)} Let $\\mathbf{x} \\in B$, so $\\mathbf{x} \\notin \\overline{A}$. Since $A \\subseteq \\overline{A}$, $\\mathbf{x} \\notin A$, i.e.} \\\\
                  \\text{$\\mathbf{x} \\in A^c$. So $B \\subseteq A^c$. (In general $X \\subseteq Y \\Rightarrow Y^c \\subseteq X^c$.)} \\\\[0.5em]
                  \\text{\\textit{(c)} Let $U$ be open with $U \\subseteq A^c$. Since $U$ is open, $U^c$ is closed.} \\\\
                  \\text{Since $U \\subseteq A^c$, taking complements gives $U^c \\supseteq A$.} \\\\
                  \\text{So $U^c$ is a closed set containing $A$. Since $\\overline{A}$ is the smallest} \\\\
                  \\text{closed set containing $A$, $U^c \\supseteq \\overline{A}$.} \\\\
                  \\text{Taking complements again, $U \\subseteq (\\overline{A})^c = B$.} \\\\[0.5em]
                  \\text{Hence $\\operatorname{int}(A^c) = (\\overline{A})^c$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Lemma",
    number: 14,
    chapter: 4,
    section: 4,
    title: "Compact Sets are Closed and Bounded",
    statement: `\\text{If } K \\subseteq \\mathbb{R}^n \\text{ is compact, then } K \\text{ is closed and bounded.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 19|Compact]] \\\\
                  \\text{2) } [[definition 13|Closed]] \\\\
                  \\text{3) } [[definition 14|Closure]] \\\\
                  \\text{4) } [[definition 20|Bounded]] \\\\
                  \\text{5) } [[definition 16|Ball]]`,
      },
      {
        title: "Proof that K is closed",
        content: `\\text{WTS $K$ closed. That is, WTS $\\overline{K} \\subseteq K$.} \\\\
                  \\text{Let $\\mathbf{x} \\in \\overline{K}$. By def of limit point, $\\exists (\\mathbf{x}_n) \\subseteq K$ s.t.} \\\\
                  \\text{$\\lim_{n \\to \\infty} \\mathbf{x}_n = \\mathbf{x}$.} \\\\
                  \\text{Since $(\\mathbf{x}_n) \\subseteq K$ and $K$ cpt, $\\exists (\\mathbf{x}_{n_m}) \\subseteq K$ s.t.} \\\\
                  \\text{$\\lim_{m \\to \\infty} \\mathbf{x}_{n_m} = \\mathbf{x}$ (a subsequence of a convergent sequence} \\\\
                  \\text{has the same limit), and we must have $\\mathbf{x} \\in K$.} \\\\
                  \\text{Thus, $K$ is closed.} \\ \\blacksquare`,
      },
      {
        title: "Proof that K is bounded",
        content: `\\text{Now WTS $K$ bounded. That is, WTS $\\exists R > 0$ s.t. $K \\subseteq B_R(\\mathbf{0})$.} \\\\
                  \\text{BWOC spse $\\forall R > 0$ $\\exists \\mathbf{x}_R \\in K$ s.t. $\\mathbf{x}_R \\notin B_R(\\mathbf{0})$.} \\\\
                  \\text{Take $R = k$ for $k \\in \\mathbb{N}$.} \\\\
                  \\text{Then $\\forall k > 0$, $\\exists \\mathbf{x}_k \\in K$ s.t. $\\mathbf{x}_k \\notin B_k(\\mathbf{0})$, i.e. $\\lVert \\mathbf{x}_k \\rVert \\geq k$.} \\\\
                  \\text{Since $K$ cpt, $\\exists \\mathbf{x}_{k_j} \\in K$ s.t. $\\lim_{j \\to \\infty} \\mathbf{x}_{k_j} = \\mathbf{x} \\in K$.} \\\\
                  \\text{By previous HW, we have $\\lim_{j \\to \\infty} \\lVert \\mathbf{x}_{k_j} \\rVert = \\lVert \\mathbf{x} \\rVert$.} \\\\
                  \\text{By def of convergence, with $\\varepsilon = 1$, we have $\\exists N \\in \\mathbb{N}$ s.t.} \\\\
                  \\text{$\\forall j \\geq N$, $\\big| \\lVert \\mathbf{x}_{k_j} \\rVert - \\lVert \\mathbf{x} \\rVert \\big| < 1$} \\\\
                  \\begin{aligned}
                    &\\iff -1 < \\lVert \\mathbf{x}_{k_j} \\rVert - \\lVert \\mathbf{x} \\rVert < 1 \\\\
                    &\\iff -1 + \\lVert \\mathbf{x} \\rVert < \\lVert \\mathbf{x}_{k_j} \\rVert < 1 + \\lVert \\mathbf{x} \\rVert.
                  \\end{aligned} \\\\
                  \\text{But $\\lVert \\mathbf{x}_{k_j} \\rVert \\geq k_j \\geq j$. Choosing $j \\geq N$ with $j \\geq 1 + \\lVert \\mathbf{x} \\rVert$} \\\\
                  \\text{gives} \\\\
                  j \\leq \\lVert \\mathbf{x}_{k_j} \\rVert < 1 + \\lVert \\mathbf{x} \\rVert \\leq j, \\\\
                  \\text{which is a contradiction.} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Lemma",
    number: 15,
    chapter: 4,
    section: 4,
    title: "Closed Subsets of Compact Sets are Compact",
    statement: `\\text{Let } K \\subseteq \\mathbb{R}^n \\text{ be compact. If } C \\subseteq K \\text{ is closed,} \\\\
                \\text{then } C \\text{ is compact.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 19|Compact]] \\\\
                  \\text{2) } [[definition 13|Closed]] \\\\
                  \\text{3) } [[definition 14|Closure]]`,
      },
      {
        title: "Proof",
        content: `\\text{WTS $C$ is cpt. That is, WTS} \\\\
                  \\forall (\\mathbf{x}_k) \\subseteq C,\\ \\exists (\\mathbf{x}_{k_j}) \\text{ s.t. } \\mathbf{x}_{k_j} \\to \\mathbf{x} \\in C. \\\\
                  \\text{So let $(\\mathbf{x}_k) \\subseteq C$ be arbitrary.} \\\\
                  \\text{Since $C \\subseteq K$, $(\\mathbf{x}_k) \\subseteq K$.} \\\\
                  \\text{Since $K$ cpt, $\\exists (\\mathbf{x}_{k_j})$ s.t. $\\mathbf{x}_{k_j} \\to \\mathbf{x} \\in K$.} \\\\
                  \\text{Since $(\\mathbf{x}_k) \\subseteq C$, $(\\mathbf{x}_{k_j}) \\subseteq C$.} \\\\
                  \\text{Since $C$ closed, $\\overline{C} \\subseteq C$, so $\\mathbf{x} \\in C$.} \\\\
                  \\text{Hence, $C$ is compact.} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Lemma",
    number: 16,
    chapter: 4,
    section: 4,
    title: "Cubes are Compact",
    statement: `\\text{The cube } [a, b]^n \\text{ is compact for all } a \\leq b.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 21|Cube]] \\\\
                  \\text{2) } [[definition 19|Compact]] \\\\
                  \\text{3) Bolzano–Weierstrass} \\\\
                  \\text{4) } [[theorem 5|Coordinatewise Convergence]]`,
      },
      {
        title: "Proof",
        content: `\\text{WTS the cube is cpt. That is WTS} \\\\
                  \\forall (\\mathbf{x}_k) \\subseteq [a, b]^n,\\ \\exists (\\mathbf{x}_{k_j}) \\text{ s.t. } \\mathbf{x}_{k_j} \\to \\mathbf{x} \\\\
                  \\text{for some $\\mathbf{x} \\in [a, b]^n$.} \\\\
                  \\text{Take $(\\mathbf{x}_k) \\subseteq [a, b]^n$. Say $(\\mathbf{x}_k) = (\\mathbf{a}_j) \\subseteq [a, b]^n$.} \\\\
                  \\text{Consider $(a_{j,1}) \\subseteq [a, b]$.} \\\\
                  \\text{By Bolzano–Weierstrass, $\\exists (a_{j_i,1})$ s.t. $a_{j_i,1} \\to z_1 \\in [a, b]$.} \\\\
                  \\text{Consider $(a_{j_i,2})_i \\subseteq [a, b]$.} \\\\
                  \\text{By Bolzano–Weierstrass, $\\exists (a_{j_{i_l},2})$ s.t. $a_{j_{i_l},2} \\to z_2 \\in [a, b]$.} \\\\
                  \\text{Repeating this procedure for each component, we obtain} \\\\
                  \\text{$(\\mathbf{x}_{k_j}) \\subseteq (\\mathbf{x}_k)$ s.t.} \\\\
                  \\begin{aligned}
                    x_{k_j,1} &\\to z_1 \\in [a, b], \\\\
                    x_{k_j,2} &\\to z_2 \\in [a, b], \\\\
                    &\\ \\ \\vdots \\\\
                    x_{k_j,n} &\\to z_n \\in [a, b].
                  \\end{aligned} \\\\
                  \\text{Say $\\mathbf{z} = (z_1, \\ldots, z_n) \\in [a, b]^n$ and $\\lim_{j \\to \\infty} \\mathbf{x}_{k_j} = \\mathbf{z}$.} \\\\
                  \\text{Since $(\\mathbf{x}_k)$ was arbitrary, we have} \\\\
                  \\forall (\\mathbf{x}_k) \\subseteq [a, b]^n,\\ \\exists (\\mathbf{x}_{k_j}) \\text{ s.t. } \\mathbf{x}_{k_j} \\to \\mathbf{z} \\in [a, b]^n. \\\\
                  \\text{Hence $[a, b]^n$ is cpt.} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 17,
    chapter: 4,
    section: 4,
    title: "Heine–Borel Theorem",
    statement: `C \\subseteq \\mathbb{R}^n \\text{ is compact iff } C \\text{ is closed and bounded.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 19|Compact]] \\\\
                  \\text{2) } [[definition 20|Bounded]] \\\\
                  \\text{3) } [[definition 21|Cube]] \\\\
                  \\text{4) } [[theorem 14|Lemma 4.4.3]] \\\\
                  \\text{5) } [[theorem 15|Lemma 4.4.4]] \\\\
                  \\text{6) } [[theorem 16|Lemma 4.4.5]]`,
      },
      {
        title: "Proof",
        content: `\\text{($\\Rightarrow$). By [[theorem 14|previous lemma]], $C$ is closed and bounded.} \\\\[0.5em]
                  \\text{($\\Leftarrow$). WTS $C$ is contained in a cube.} \\\\
                  \\text{Since $C$ bounded, $\\exists M > 0$ s.t. $C \\subseteq B_M(\\mathbf{0})$.} \\\\
                  \\text{For $\\mathbf{x} \\in C$, we have $\\lVert \\mathbf{x} \\rVert \\leq M$.} \\\\
                  \\text{Indeed, $\\forall i = 1, \\ldots, n$,} \\\\
                  |x_i| \\leq \\lVert \\mathbf{x} \\rVert \\leq M \\iff -M \\leq x_i \\leq M \\text{ for } \\mathbf{x} \\in C. \\\\
                  \\text{That is, $C \\subseteq [-M, M]^n$.} \\\\
                  \\text{By [[theorem 16|prev lemma]], $[-M, M]^n$ is cpt.} \\\\
                  \\text{By [[theorem 15|another lemma]], since $C$ is a closed subset of cpt} \\\\
                  \\text{$[-M, M]^n$, $C$ is also cpt.} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 18,
    chapter: 4,
    section: 4,
    title: "Cantor's Intersection Theorem",
    statement: `\\text{If } (A_i) \\text{ is a sequence of sets in } \\mathbb{R}^n \\text{ such that} \\\\
                \\text{(a) Decreasing: } A_j \\supseteq A_{j+1}, \\\\
                \\text{(b) Nonempty,} \\\\
                \\text{(c) Compact,} \\\\
                \\text{then } \\bigcap_{k \\geq 1} A_k \\neq \\emptyset.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 19|Compact]] \\\\
                  \\text{2) } [[theorem 14|Lemma 4.4.3]]`,
      },
      {
        title: "Proof",
        content: `\\text{Since for $k \\geq 1$, $A_k \\neq \\emptyset$, $\\exists \\mathbf{a}_k \\in A_k$.} \\\\
                  \\text{Then the sequence $(\\mathbf{a}_k) \\subseteq A_1$, since $(A_i)$ is decreasing.} \\\\
                  \\text{Since $A_1$ cpt, $\\exists (\\mathbf{a}_{k_j})$ s.t. $\\mathbf{a}_{k_j} \\to \\mathbf{a} \\in A_1$.} \\\\
                  \\text{WTS $\\mathbf{a} \\in \\bigcap_{k \\geq 1} A_k$.} \\\\
                  \\text{Equivalently, let $m \\geq 1$ be arbitrary, WTS $\\mathbf{a} \\in A_m$.} \\\\
                  \\text{Because $k_j$ is unbounded, $\\exists J \\in \\mathbb{N}$ s.t. $k_J \\geq m$.} \\\\
                  \\text{(Archimedean Property)} \\\\
                  \\text{For this index $k_J$, we have $\\mathbf{a}_{k_J} \\in A_{k_J} \\subseteq A_m$,} \\\\
                  \\text{since $(A_i)$ is decreasing and $m \\leq k_J$.} \\\\
                  \\text{Note } \\mathbf{a}_{k_{J+1}} \\in A_{k_{J+1}} \\subseteq A_m,\\ \\mathbf{a}_{k_{J+2}} \\in A_{k_{J+2}} \\subseteq A_m,\\ \\ldots \\\\
                  \\text{This extracts a sequence $(\\mathbf{a}_{k_j})_{j \\geq J} \\subseteq A_m$ with $\\mathbf{a}_{k_j} \\to \\mathbf{a}$.} \\\\
                  \\text{Since $A_m$ is cpt, $A_m$ is [[theorem 14|closed]], so $\\mathbf{a} \\in A_m$.} \\\\
                  \\text{Thus, for $m \\geq 1$, $\\mathbf{a} \\in A_m$.} \\\\
                  \\text{Hence, $\\mathbf{a} \\in \\bigcap_{m \\geq 1} A_m$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Remark",
    number: 19,
    chapter: 5,
    section: 1,
    title: "Functions are Continuous at Isolated Points",
    statement: `\\text{Let } S \\subseteq \\mathbb{R}^n. \\text{ If } \\mathbf{a} \\in S \\text{ is an isolated point,} \\\\
                \\text{then } f : S \\to \\mathbb{R}^m \\text{ is always continuous at } \\mathbf{a}.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 26|Isolated point]] \\\\
                  \\text{2) } [[definition 23|Continuity at a point]]`,
      },
      {
        title: "Proof",
        content: `\\text{Let $\\varepsilon > 0$.} \\\\
                  \\text{Since $\\mathbf{a} \\in S$ is an isolated point,} \\\\
                  \\text{$\\exists r > 0$ s.t. $B_r(\\mathbf{a}) \\cap S = \\{\\mathbf{a}\\}$. Fix $\\mathbf{x} \\in S$.} \\\\
                  \\text{If $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$, then $\\mathbf{x} = \\mathbf{a}$, which implies} \\\\
                  \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert = \\lVert f(\\mathbf{a}) - f(\\mathbf{a}) \\rVert = 0 < \\varepsilon. \\\\
                  \\text{Hence, $f$ is cts at $\\mathbf{a}$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Proposition",
    number: 20,
    chapter: 5,
    section: 1,
    title: "Lipschitz Functions are Continuous",
    statement: `\\text{Every Lipschitz function is continuous.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 27|Lipschitz]] \\\\
                  \\text{2) } [[definition 23|Continuity at a point]]\\text{, } [[definition 24|on a set]]`,
      },
      {
        title: "Proof",
        content: `\\text{By hypothesis, $\\exists C > 0$ s.t. $\\forall \\mathbf{x}, \\mathbf{y} \\in S$,} \\\\
                  \\lVert f(\\mathbf{x}) - f(\\mathbf{y}) \\rVert \\leq C \\lVert \\mathbf{x} - \\mathbf{y} \\rVert. \\\\
                  \\text{Let $\\mathbf{a} \\in S$ and $\\varepsilon > 0$. Choose $r < \\frac{\\varepsilon}{C}$.} \\\\
                  \\text{Suppose $\\mathbf{x} \\in S$ s.t. $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$. Then} \\\\
                  \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert \\leq C \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < Cr < C \\frac{\\varepsilon}{C} = \\varepsilon. \\\\
                  \\text{Hence $f$ is cts on $S$.} \\ \\blacksquare`,
      },
    ],
    examples: [
      {
        title: "Coordinate functions",
        content: `\\pi_j : \\mathbb{R}^n \\to \\mathbb{R}, \\text{ for } j = 1, \\ldots, n, \\quad \\pi_j(x_1, \\ldots, x_n) = x_j. \\\\
                  \\text{Coordinate functions are Lipschitz, and thus, cts.} \\\\[1em]
                  \\text{\\textit{Proof.}} \\\\
                  \\text{Set $C = 1$. Let $\\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n$. Observe} \\\\
                  |\\pi_j(\\mathbf{x}) - \\pi_j(\\mathbf{y})| = |x_j - y_j| \\leq \\Big( \\sum_{i=1}^n (x_i - y_i)^2 \\Big)^{1/2} = \\lVert \\mathbf{x} - \\mathbf{y} \\rVert. \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Corollary",
    number: 21,
    chapter: 5,
    section: 1,
    title: "Linear Maps are Lipschitz",
    statement: `\\text{Every linear map } A : \\mathbb{R}^n \\to \\mathbb{R}^m \\text{ is Lipschitz,} \\\\
                \\text{and thus, is also continuous.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 27|Lipschitz]] \\\\
                  \\text{2) } [[theorem 1|Cauchy-Schwarz]] \\\\
                  \\text{3) } [[theorem 20|Proposition 5.1.6]]`,
      },
      {
        title: "Scratch",
        content: `\\text{WTS $\\exists C > 0$ s.t. $\\lVert A\\mathbf{x} - A\\mathbf{y} \\rVert \\leq C \\lVert \\mathbf{x} - \\mathbf{y} \\rVert$ $\\forall \\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n$.} \\\\
                  \\begin{aligned}
                    \\lVert A\\mathbf{x} - A\\mathbf{y} \\rVert &= \\lVert A(\\mathbf{x} - \\mathbf{y}) \\rVert \\\\
                    &= \\Bigg( \\sum_{i=1}^m \\Big( \\sum_{j=1}^n a_{ij}(x_j - y_j) \\Big)^2 \\Bigg)^{1/2} \\\\
                    &= \\Bigg( \\sum_{i=1}^m \\big( \\langle \\mathbf{a}_i, \\mathbf{x} - \\mathbf{y} \\rangle \\big)^2 \\Bigg)^{1/2} \\\\
                    &\\leq \\Bigg( \\sum_{i=1}^m \\big( \\lVert \\mathbf{a}_i \\rVert \\lVert \\mathbf{x} - \\mathbf{y} \\rVert \\big)^2 \\Bigg)^{1/2} \\quad \\text{(By [[theorem 1|CS]])} \\\\
                    &= \\Bigg( \\sum_{i=1}^m \\Big( \\sum_{j=1}^n a_{ij}^2 \\Big) \\Bigg)^{1/2} \\lVert \\mathbf{x} - \\mathbf{y} \\rVert.
                  \\end{aligned}`,
      },
      {
        title: "Proof",
        content: `\\text{Choose } C = \\Big( \\sum_{i=1}^m \\sum_{j=1}^n a_{ij}^2 \\Big)^{1/2} \\\\
                  \\text{(if $A = 0$, take $C = 1$ instead). Let $\\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n$. Then} \\\\
                  \\begin{aligned}
                    \\lVert A\\mathbf{x} - A\\mathbf{y} \\rVert &= \\lVert A(\\mathbf{x} - \\mathbf{y}) \\rVert \\\\
                    &= \\Bigg( \\sum_{i=1}^m \\Big( \\sum_{j=1}^n a_{ij}(x_j - y_j) \\Big)^2 \\Bigg)^{1/2} \\\\
                    &\\leq \\Bigg( \\sum_{i=1}^m \\sum_{j=1}^n a_{ij}^2 \\Bigg)^{1/2} \\lVert \\mathbf{x} - \\mathbf{y} \\rVert \\\\
                    &= C \\lVert \\mathbf{x} - \\mathbf{y} \\rVert.
                  \\end{aligned} \\\\
                  \\text{Thus $A$ is Lipschitz.} \\\\
                  \\text{By [[theorem 20|previous prop]], $A$ is also cts.} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 22,
    chapter: 5,
    section: 3,
    title: "Characterizations of Continuity",
    statement: `\\text{Let } S \\subseteq \\mathbb{R}^n, \\ f : S \\to \\mathbb{R}^m. \\text{ Then the following are equivalent:} \\\\
                \\text{(a) } f \\text{ is continuous on } S. \\\\
                \\text{(b) For all } (\\mathbf{x}_k) \\subseteq S \\text{ with } \\mathbf{x}_k \\to \\mathbf{a} \\in S, \\text{ we have } f(\\mathbf{x}_k) \\to f(\\mathbf{a}). \\\\
                \\text{(c) For all open } U \\subseteq \\mathbb{R}^m, \\\\
                \\qquad f^{-1}(U) := \\{ \\mathbf{x} \\in S : f(\\mathbf{x}) \\in U \\} \\text{ is open in } S.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 23|Continuity at a point]]\\text{, } [[definition 24|on a set]]\\text{, } [[definition 25|discontinuity]] \\\\
                  \\text{2) } [[definition 9|Convergence]] \\\\
                  \\text{3) } [[definition 17|Open]] \\\\
                  \\text{4) } [[definition 33|Relatively open]] \\\\
                  \\text{5) } [[theorem 4|Convergence via Norms]]`,
      },
      {
        title: "Proof of (a) ⇒ (b)",
        content: `\\text{Let $(\\mathbf{x}_k) \\subseteq S$ with $\\mathbf{x}_k \\to \\mathbf{a} \\in S$.} \\\\
                  \\text{Let $\\varepsilon > 0$. Since $f$ is cts,} \\\\
                  \\exists r > 0,\\ \\forall \\mathbf{x} \\in S,\\ \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\Rightarrow \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert < \\varepsilon. \\\\
                  \\text{Since $(\\mathbf{x}_k)$ converges, $\\exists N \\in \\mathbb{N}$ s.t. $\\forall k \\geq N$, $\\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert < r$.} \\\\
                  \\text{By continuity of $f$, $\\forall k \\geq N$,} \\\\
                  \\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert < r \\Rightarrow \\lVert f(\\mathbf{x}_k) - f(\\mathbf{a}) \\rVert < \\varepsilon. \\\\
                  \\text{Therefore, $f(\\mathbf{x}_k) \\to f(\\mathbf{a})$.} \\ \\blacksquare`,
      },
      {
        title: "Proof of (b) ⇒ (a)",
        content: `\\text{By way of contraposition, suppose $f$ is not cts on $S$. That is,} \\\\
                  \\exists \\mathbf{a} \\in S,\\ \\exists \\varepsilon > 0,\\ \\forall r > 0,\\ \\exists \\mathbf{x} \\in S \\\\
                  \\text{where } \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\text{ and } \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert \\geq \\varepsilon. \\\\
                  \\text{Let $r = \\frac{1}{k}$ for $k \\in \\mathbb{N}$. So $\\forall k \\in \\mathbb{N}$ $\\exists \\mathbf{x}_k \\in S$ s.t.} \\\\
                  \\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert < \\tfrac{1}{k} \\text{ and } \\lVert f(\\mathbf{x}_k) - f(\\mathbf{a}) \\rVert \\geq \\varepsilon. \\\\
                  \\text{By squeeze theorem, $\\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert \\to 0$, and by [[theorem 4|lemma]], $\\mathbf{x}_k \\to \\mathbf{a}$.} \\\\
                  \\text{However, by assumption, $\\lVert f(\\mathbf{x}_k) - f(\\mathbf{a}) \\rVert \\geq \\varepsilon$ for all $k$, so} \\\\
                  \\text{$f(\\mathbf{x}_k) \\not\\to f(\\mathbf{a})$, and (b) fails.} \\ \\blacksquare`,
      },
      {
        title: "Proof of (a) ⇒ (c)",
        content: `\\text{Suppose $f$ cts on $S$. WTS} \\\\
                  \\forall \\text{ open } U \\subseteq \\mathbb{R}^m,\\ \\forall \\mathbf{a} \\in f^{-1}(U),\\ \\exists r > 0,\\ B_r(\\mathbf{a}) \\cap S \\subseteq f^{-1}(U). \\\\
                  \\text{Let $U$ be open in $\\mathbb{R}^m$ and let $\\mathbf{a} \\in f^{-1}(U)$.} \\\\
                  \\text{Then $f(\\mathbf{a}) \\in U$, and since $U$ is open,} \\\\
                  \\text{$\\exists \\varepsilon > 0$ s.t. $B_\\varepsilon(f(\\mathbf{a})) \\subseteq U$.} \\\\
                  \\text{Since $f$ is cts at $\\mathbf{a}$, $\\exists r > 0$, $\\forall \\mathbf{x} \\in S$,} \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\Rightarrow \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert < \\varepsilon. \\\\
                  \\text{That is, $\\exists r > 0$, $\\forall \\mathbf{x} \\in S$, if $\\mathbf{x} \\in B_r(\\mathbf{a}) \\cap S$, then} \\\\
                  \\text{$f(\\mathbf{x}) \\in B_\\varepsilon(f(\\mathbf{a}))$. So} \\\\
                  \\begin{aligned}
                    & f(B_r(\\mathbf{a}) \\cap S) \\subseteq B_\\varepsilon(f(\\mathbf{a})) \\subseteq U \\\\
                    \\Rightarrow\\ & B_r(\\mathbf{a}) \\cap S \\subseteq f^{-1}(B_\\varepsilon(f(\\mathbf{a}))) \\subseteq f^{-1}(U).
                  \\end{aligned} \\\\
                  \\text{Thus, $f^{-1}(U)$ is open in $S$.} \\ \\blacksquare`,
      },
      {
        title: "Proof of (c) ⇒ (a)",
        content: `\\text{Let $\\mathbf{a} \\in S$. Let $\\varepsilon > 0$. WTS} \\\\
                  \\exists r > 0,\\ \\forall \\mathbf{x} \\in S,\\ \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\Rightarrow \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert < \\varepsilon. \\\\
                  \\text{Equivalently, WTS} \\\\
                  \\exists r > 0,\\ \\forall \\mathbf{x} \\in S,\\ \\mathbf{x} \\in B_r(\\mathbf{a}) \\Rightarrow f(\\mathbf{x}) \\in B_\\varepsilon(f(\\mathbf{a})). \\\\
                  \\text{Let $U := B_\\varepsilon(f(\\mathbf{a}))$. Since $f^{-1}(U)$ is open in $S$,} \\\\
                  \\text{$\\exists r > 0$ s.t. $B_r(\\mathbf{a}) \\cap S \\subseteq f^{-1}(U)$.} \\\\
                  \\text{So for $\\mathbf{x} \\in B_r(\\mathbf{a}) \\cap S$, we have $\\mathbf{x} \\in f^{-1}(U)$. Note} \\\\
                  \\mathbf{x} \\in B_r(\\mathbf{a}) \\cap S \\Rightarrow \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r, \\\\
                  \\text{and} \\\\
                  \\mathbf{x} \\in f^{-1}(U) \\Rightarrow f(\\mathbf{x}) \\in U = B_\\varepsilon(f(\\mathbf{a})) \\Rightarrow \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert < \\varepsilon. \\\\
                  \\text{Hence, $f$ is cts on $S$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 23,
    chapter: 5,
    section: 3,
    title: "Algebra of Limits",
    statement: `\\text{Let } f, g : S \\to \\mathbb{R}^m, \\ S \\subseteq \\mathbb{R}^n \\text{ and } \\mathbf{a} \\in S \\text{ such that} \\\\
                \\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = \\mathbf{u} \\in \\mathbb{R}^m \\text{ and } \\lim_{\\mathbf{x} \\to \\mathbf{a}} g(\\mathbf{x}) = \\mathbf{v} \\in \\mathbb{R}^m. \\text{ Then} \\\\
                \\text{(a) } \\lim_{\\mathbf{x} \\to \\mathbf{a}} (f(\\mathbf{x}) + g(\\mathbf{x})) = \\mathbf{u} + \\mathbf{v}. \\\\
                \\text{(b) For all } \\alpha \\in \\mathbb{R}, \\ \\lim_{\\mathbf{x} \\to \\mathbf{a}} (\\alpha f(\\mathbf{x})) = \\alpha \\mathbf{u}. \\\\[0.5em]
                \\text{For } m = 1 \\ (f, g : S \\to \\mathbb{R}), \\\\
                \\text{(c) } \\lim_{\\mathbf{x} \\to \\mathbf{a}} (f(\\mathbf{x}) g(\\mathbf{x})) = uv. \\\\
                \\text{(d) If } v \\neq 0, \\ \\lim_{\\mathbf{x} \\to \\mathbf{a}} \\left( \\frac{f(\\mathbf{x})}{g(\\mathbf{x})} \\right) = \\frac{u}{v}.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 22|Limit of a function]] \\\\
                  \\text{2) } [[theorem 3|Triangle inequality]]`,
      },
      {
        title: "Proof of (a)",
        content: `\\text{By def of limit, $\\forall \\varepsilon > 0$, $\\exists r_1 > 0$, $\\forall \\mathbf{x} \\in S$,} \\\\
                  0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_1 \\Rightarrow \\lVert f(\\mathbf{x}) - \\mathbf{u} \\rVert < \\tfrac{\\varepsilon}{2}. \\\\
                  \\text{Similarly, $\\forall \\varepsilon > 0$, $\\exists r_2 > 0$, $\\forall \\mathbf{x} \\in S$,} \\\\
                  0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_2 \\Rightarrow \\lVert g(\\mathbf{x}) - \\mathbf{v} \\rVert < \\tfrac{\\varepsilon}{2}. \\\\
                  \\text{Let $\\varepsilon > 0$. Choose $r = \\min\\{r_1, r_2\\}$.} \\\\
                  \\text{Suppose $\\mathbf{x} \\in S$ s.t. $0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$. Then} \\\\
                  \\text{$\\lVert f(\\mathbf{x}) - \\mathbf{u} \\rVert < \\frac{\\varepsilon}{2}$ and $\\lVert g(\\mathbf{x}) - \\mathbf{v} \\rVert < \\frac{\\varepsilon}{2}$. So} \\\\
                  \\begin{aligned}
                    \\lVert f(\\mathbf{x}) + g(\\mathbf{x}) - (\\mathbf{u} + \\mathbf{v}) \\rVert &\\leq \\lVert f(\\mathbf{x}) - \\mathbf{u} \\rVert + \\lVert g(\\mathbf{x}) - \\mathbf{v} \\rVert \\\\
                    &< \\tfrac{\\varepsilon}{2} + \\tfrac{\\varepsilon}{2} = \\varepsilon.
                  \\end{aligned} \\\\
                  \\text{Thus, $\\lim_{\\mathbf{x} \\to \\mathbf{a}} (f(\\mathbf{x}) + g(\\mathbf{x})) = \\mathbf{u} + \\mathbf{v}$.} \\ \\blacksquare`,
      },
      {
        title: "Proof of (b)",
        content: `\\text{Let $\\varepsilon > 0$. Since $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = \\mathbf{u}$, $\\exists r > 0$, $\\forall \\mathbf{x} \\in S$,} \\\\
                  0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\Rightarrow \\lVert f(\\mathbf{x}) - \\mathbf{u} \\rVert < \\frac{\\varepsilon}{|\\alpha| + 1}. \\\\
                  \\text{Let $\\mathbf{x} \\in S$ s.t. $0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$. Then} \\\\
                  \\lVert \\alpha f(\\mathbf{x}) - \\alpha \\mathbf{u} \\rVert = |\\alpha| \\lVert f(\\mathbf{x}) - \\mathbf{u} \\rVert < \\frac{|\\alpha| \\varepsilon}{|\\alpha| + 1} < \\varepsilon. \\\\
                  \\text{Thus, $\\lim_{\\mathbf{x} \\to \\mathbf{a}} (\\alpha f(\\mathbf{x})) = \\alpha \\mathbf{u}$.} \\ \\blacksquare`,
      },
      {
        title: "Proof of (c)",
        content: `\\text{Suppose $m = 1$ and let $\\varepsilon > 0$.} \\\\[0.5em]
                  \\text{[Scratch.} \\\\
                  \\begin{aligned}
                    |f(\\mathbf{x}) g(\\mathbf{x}) - uv| &= |f(\\mathbf{x}) g(\\mathbf{x}) - f(\\mathbf{x}) v + f(\\mathbf{x}) v - uv| \\\\
                    &\\leq |f(\\mathbf{x})(g(\\mathbf{x}) - v)| + |v(f(\\mathbf{x}) - u)| \\\\
                    &= |f(\\mathbf{x})| \\, |g(\\mathbf{x}) - v| + |v| \\, |f(\\mathbf{x}) - u|.
                  \\end{aligned} \\\\
                  \\text{Need to cap $|f(\\mathbf{x})|$ first. If $|f(\\mathbf{x}) - u| < 1$, then} \\\\
                  |f(\\mathbf{x})| \\leq |f(\\mathbf{x}) - u| + |u| < 1 + |u|. \\\\
                  \\text{We need $(|u| + 1) |g(\\mathbf{x}) - v| < \\frac{\\varepsilon}{2}$, so ask for} \\\\
                  \\text{$|g(\\mathbf{x}) - v| < \\frac{\\varepsilon}{2(|u| + 1)}$.} \\\\
                  \\text{We also need $|v| \\, |f(\\mathbf{x}) - u| < \\frac{\\varepsilon}{2}$, so ask for} \\\\
                  \\text{$|f(\\mathbf{x}) - u| < \\frac{\\varepsilon}{2(|v| + 1)}$.]} \\\\[0.5em]
                  \\text{Since $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = u$ and $\\lim_{\\mathbf{x} \\to \\mathbf{a}} g(\\mathbf{x}) = v$, $\\exists r_1, r_2, r_3 > 0$ s.t.} \\\\
                  \\text{$\\forall \\mathbf{x} \\in S$,} \\\\
                  \\begin{aligned}
                    0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_1 &\\Rightarrow |f(\\mathbf{x}) - u| < 1, \\\\
                    0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_2 &\\Rightarrow |f(\\mathbf{x}) - u| < \\tfrac{\\varepsilon}{2(|v| + 1)}, \\text{ and} \\\\
                    0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_3 &\\Rightarrow |g(\\mathbf{x}) - v| < \\tfrac{\\varepsilon}{2(|u| + 1)}.
                  \\end{aligned} \\\\
                  \\text{Choose $r = \\min\\{r_1, r_2, r_3\\}$. Let $\\mathbf{x} \\in S$ s.t. $0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$.} \\\\
                  \\text{Note $|f(\\mathbf{x})| \\leq |f(\\mathbf{x}) - u| + |u| < 1 + |u|$. Then} \\\\
                  \\begin{aligned}
                    |f(\\mathbf{x}) g(\\mathbf{x}) - uv| &= |f(\\mathbf{x})(g(\\mathbf{x}) - v) + v(f(\\mathbf{x}) - u)| \\\\
                    &\\leq |f(\\mathbf{x})| \\, |g(\\mathbf{x}) - v| + |v| \\, |f(\\mathbf{x}) - u| \\\\
                    &< (|u| + 1) \\left( \\tfrac{\\varepsilon}{2(|u| + 1)} \\right) + |v| \\left( \\tfrac{\\varepsilon}{2(|v| + 1)} \\right) \\\\
                    &< \\tfrac{\\varepsilon}{2} + \\tfrac{\\varepsilon}{2} = \\varepsilon.
                  \\end{aligned} \\\\
                  \\text{Thus, $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) g(\\mathbf{x}) = uv$.} \\ \\blacksquare`,
      },
      {
        title: "Proof of (d)",
        content: `\\text{Suppose $m = 1$, $v \\neq 0$, and let $\\varepsilon > 0$.} \\\\[0.5em]
                  \\text{[Scratch.} \\\\
                  \\begin{aligned}
                    \\left| \\frac{f(\\mathbf{x})}{g(\\mathbf{x})} - \\frac{u}{v} \\right| &= \\left| \\frac{f(\\mathbf{x}) v - g(\\mathbf{x}) u}{g(\\mathbf{x}) v} \\right| \\\\
                    &= \\left| \\frac{f(\\mathbf{x}) v - uv + uv - g(\\mathbf{x}) u}{g(\\mathbf{x}) v} \\right| \\\\
                    &= \\left| \\frac{v(f(\\mathbf{x}) - u) - u(g(\\mathbf{x}) - v)}{g(\\mathbf{x}) v} \\right|.
                  \\end{aligned} \\\\
                  \\text{$|g(\\mathbf{x})|$ depends on $\\mathbf{x}$ and could be near $0$, so bound below by} \\\\
                  \\text{asking for $|g(\\mathbf{x}) - v| < \\frac{|v|}{2}$. Then} \\\\
                  |g(\\mathbf{x})| \\geq |v| - |g(\\mathbf{x}) - v| > |v| - \\tfrac{|v|}{2} = \\tfrac{|v|}{2}, \\\\
                  \\text{so $\\frac{1}{|g(\\mathbf{x})| \\, |v|} < \\frac{2}{|v|^2}$. Now} \\\\
                  \\begin{aligned}
                    \\left| \\frac{f(\\mathbf{x})}{g(\\mathbf{x})} - \\frac{u}{v} \\right| &< \\frac{2}{|v|^2} \\big( |v| \\, |f(\\mathbf{x}) - u| + |u| \\, |g(\\mathbf{x}) - v| \\big) \\\\
                    &= \\frac{2}{|v|} |f(\\mathbf{x}) - u| + \\frac{2|u|}{|v|^2} |g(\\mathbf{x}) - v|.
                  \\end{aligned} \\\\
                  \\text{To get $\\frac{2}{|v|} |f(\\mathbf{x}) - u| < \\frac{\\varepsilon}{2}$, ask for $|f(\\mathbf{x}) - u| < \\frac{\\varepsilon |v|}{4}$.} \\\\
                  \\text{To get $\\frac{2|u|}{|v|^2} |g(\\mathbf{x}) - v| < \\frac{\\varepsilon}{2}$, ask for} \\\\
                  \\text{$|g(\\mathbf{x}) - v| < \\frac{\\varepsilon |v|^2}{4(|u| + 1)}$.]} \\\\[0.5em]
                  \\text{Since $v \\neq 0$, $\\frac{|v|}{2}, \\frac{\\varepsilon |v|}{4}, \\frac{\\varepsilon |v|^2}{4(|u| + 1)} > 0$.} \\\\
                  \\text{Since $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = u$ and $\\lim_{\\mathbf{x} \\to \\mathbf{a}} g(\\mathbf{x}) = v$, $\\exists r_1, r_2, r_3 > 0$ s.t.} \\\\
                  \\text{$\\forall \\mathbf{x} \\in S$,} \\\\
                  \\begin{aligned}
                    0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_1 &\\Rightarrow |g(\\mathbf{x}) - v| < \\tfrac{|v|}{2}, \\\\
                    0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_2 &\\Rightarrow |f(\\mathbf{x}) - u| < \\tfrac{\\varepsilon |v|}{4}, \\\\
                    0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_3 &\\Rightarrow |g(\\mathbf{x}) - v| < \\tfrac{\\varepsilon |v|^2}{4(|u| + 1)}.
                  \\end{aligned} \\\\
                  \\text{Let $r = \\min\\{r_1, r_2, r_3\\}$. Let $\\mathbf{x} \\in S$ s.t. $0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$.} \\\\
                  \\text{Since $|g(\\mathbf{x}) - v| < \\frac{|v|}{2}$,} \\\\
                  |g(\\mathbf{x})| \\geq |v| - |g(\\mathbf{x}) - v| > |v| - \\tfrac{|v|}{2} = \\tfrac{|v|}{2} > 0. \\\\
                  \\text{So $g(\\mathbf{x}) \\neq 0$ and $\\frac{1}{|g(\\mathbf{x})|} < \\frac{2}{|v|}$. Then} \\\\
                  \\begin{aligned}
                    \\left| \\frac{f(\\mathbf{x})}{g(\\mathbf{x})} - \\frac{u}{v} \\right| &= \\frac{|v(f(\\mathbf{x}) - u) - u(g(\\mathbf{x}) - v)|}{|g(\\mathbf{x})| \\, |v|} \\\\
                    &< \\frac{2}{|v|^2} \\big( |v| \\, |f(\\mathbf{x}) - u| + |u| \\, |g(\\mathbf{x}) - v| \\big) \\\\
                    &< \\frac{2}{|v|^2} \\left( |v| \\frac{\\varepsilon |v|}{4} + |u| \\frac{\\varepsilon |v|^2}{4(|u| + 1)} \\right) \\\\
                    &= \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} \\left( \\frac{|u|}{|u| + 1} \\right) \\\\
                    &< \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon.
                  \\end{aligned} \\\\
                  \\text{Hence, $\\lim_{\\mathbf{x} \\to \\mathbf{a}} \\left( \\frac{f(\\mathbf{x})}{g(\\mathbf{x})} \\right) = \\frac{u}{v}$ whenever $v \\neq 0$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 24,
    chapter: 5,
    section: 3,
    title: "Algebra of Continuous Functions",
    statement: `\\text{Let } f, g : S \\to \\mathbb{R}^m, \\ S \\subseteq \\mathbb{R}^n \\text{ be continuous at } \\mathbf{a} \\in S. \\text{ Then} \\\\
                \\text{(a) } f + g \\text{ is continuous at } \\mathbf{a}. \\\\
                \\text{(b) For all } \\alpha \\in \\mathbb{R}, \\ \\alpha f \\text{ is continuous at } \\mathbf{a}. \\\\[0.5em]
                \\text{For } m = 1, \\\\
                \\text{(c) } fg \\text{ is continuous at } \\mathbf{a}. \\\\
                \\text{(d) If } g(\\mathbf{a}) \\neq 0, \\ \\tfrac{f}{g} \\text{ is continuous at } \\mathbf{a}.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 23|Continuity at a point]] \\\\
                  \\text{2) } [[theorem 3|Triangle inequality]] \\\\
                  \\text{3) } [[theorem 23|Algebra of Limits]]`,
      },
      {
        title: "Proof of (a)",
        content: `\\text{WTS $\\forall \\varepsilon > 0$, $\\exists r > 0$, $\\forall \\mathbf{x} \\in S$,} \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\Rightarrow \\lVert f(\\mathbf{x}) + g(\\mathbf{x}) - (f(\\mathbf{a}) + g(\\mathbf{a})) \\rVert < \\varepsilon. \\\\
                  \\text{Let $\\varepsilon > 0$. Since $f$ is cts at $\\mathbf{a}$, $\\exists r_1 > 0$ s.t. $\\forall \\mathbf{x} \\in S$,} \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_1 \\Rightarrow \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert < \\tfrac{\\varepsilon}{2}. \\\\
                  \\text{Since $g$ is cts at $\\mathbf{a}$, $\\exists r_2 > 0$ s.t. $\\forall \\mathbf{x} \\in S$,} \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_2 \\Rightarrow \\lVert g(\\mathbf{x}) - g(\\mathbf{a}) \\rVert < \\tfrac{\\varepsilon}{2}. \\\\
                  \\text{Choose $r = \\min\\{r_1, r_2\\}$. Let $\\mathbf{x} \\in S$ s.t. $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$. Then} \\\\
                  \\begin{aligned}
                    \\lVert (f + g)(\\mathbf{x}) - (f + g)(\\mathbf{a}) \\rVert &= \\lVert (f(\\mathbf{x}) - f(\\mathbf{a})) + (g(\\mathbf{x}) - g(\\mathbf{a})) \\rVert \\\\
                    &\\leq \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert + \\lVert g(\\mathbf{x}) - g(\\mathbf{a}) \\rVert \\\\
                    &< \\tfrac{\\varepsilon}{2} + \\tfrac{\\varepsilon}{2} = \\varepsilon.
                  \\end{aligned} \\ \\blacksquare`,
      },
      {
        title: "Proof of (b)",
        content: `\\text{Let $\\varepsilon > 0$ and $\\alpha \\in \\mathbb{R}$. WTS $\\exists r > 0$, $\\forall \\mathbf{x} \\in S$,} \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\Rightarrow \\lVert \\alpha f(\\mathbf{x}) - \\alpha f(\\mathbf{a}) \\rVert < \\varepsilon. \\\\[0.5em]
                  \\text{[Scratch. $\\lVert \\alpha f(\\mathbf{x}) - \\alpha f(\\mathbf{a}) \\rVert = |\\alpha| \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert$.} \\\\
                  \\text{Need to ask for $\\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert < \\frac{\\varepsilon}{|\\alpha| + 1}$.]} \\\\[0.5em]
                  \\text{Since $f$ is cts at $\\mathbf{a}$, $\\exists r > 0$ s.t. $\\forall \\mathbf{x} \\in S$,} \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\Rightarrow \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert < \\frac{\\varepsilon}{|\\alpha| + 1}. \\\\
                  \\text{Let $\\mathbf{x} \\in S$ s.t. $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$. Then} \\\\
                  \\lVert \\alpha f(\\mathbf{x}) - \\alpha f(\\mathbf{a}) \\rVert = |\\alpha| \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert < \\frac{\\varepsilon}{|\\alpha| + 1} |\\alpha| < \\varepsilon. \\ \\blacksquare`,
      },
      {
        title: "Proof of (c)",
        content: `\\text{Suppose $m = 1$ and let $\\varepsilon > 0$. WTS $\\exists r > 0$ s.t. $\\forall \\mathbf{x} \\in S$,} \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\Rightarrow |f(\\mathbf{x}) g(\\mathbf{x}) - f(\\mathbf{a}) g(\\mathbf{a})| < \\varepsilon. \\\\[0.5em]
                  \\text{[Scratch.} \\\\
                  \\begin{aligned}
                    &|f(\\mathbf{x}) g(\\mathbf{x}) - f(\\mathbf{x}) g(\\mathbf{a}) + f(\\mathbf{x}) g(\\mathbf{a}) - f(\\mathbf{a}) g(\\mathbf{a})| \\\\
                    &= |f(\\mathbf{x})(g(\\mathbf{x}) - g(\\mathbf{a})) + g(\\mathbf{a})(f(\\mathbf{x}) - f(\\mathbf{a}))| \\\\
                    &\\leq |f(\\mathbf{x})| \\, |g(\\mathbf{x}) - g(\\mathbf{a})| + |g(\\mathbf{a})| \\, |f(\\mathbf{x}) - f(\\mathbf{a})|.
                  \\end{aligned} \\\\
                  \\text{Need to bound $|f(\\mathbf{x})|$. Need to ask for $|f(\\mathbf{x}) - f(\\mathbf{a})| < 1$} \\\\
                  \\Rightarrow |f(\\mathbf{x})| \\leq |f(\\mathbf{x}) - f(\\mathbf{a})| + |f(\\mathbf{a})| < 1 + |f(\\mathbf{a})|. \\\\
                  \\text{Now need $(1 + |f(\\mathbf{a})|) |g(\\mathbf{x}) - g(\\mathbf{a})| < \\frac{\\varepsilon}{2}$, so ask for} \\\\
                  \\text{$|g(\\mathbf{x}) - g(\\mathbf{a})| < \\frac{\\varepsilon}{2(1 + |f(\\mathbf{a})|)}$.} \\\\
                  \\text{Also need $|g(\\mathbf{a})| \\, |f(\\mathbf{x}) - f(\\mathbf{a})| < \\frac{\\varepsilon}{2}$, so ask for} \\\\
                  \\text{$|f(\\mathbf{x}) - f(\\mathbf{a})| < \\frac{\\varepsilon}{2(|g(\\mathbf{a})| + 1)}$.]} \\\\[0.5em]
                  \\text{Since $f$ and $g$ are cts at $\\mathbf{a}$, $\\exists r_1, r_2, r_3 > 0$ s.t. $\\forall \\mathbf{x} \\in S$,} \\\\
                  \\begin{aligned}
                    \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_1 &\\Rightarrow |f(\\mathbf{x}) - f(\\mathbf{a})| < 1, \\\\
                    \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_2 &\\Rightarrow |g(\\mathbf{x}) - g(\\mathbf{a})| < \\tfrac{\\varepsilon}{2(|f(\\mathbf{a})| + 1)}, \\\\
                    \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_3 &\\Rightarrow |f(\\mathbf{x}) - f(\\mathbf{a})| < \\tfrac{\\varepsilon}{2(|g(\\mathbf{a})| + 1)}.
                  \\end{aligned} \\\\
                  \\text{Set $r = \\min\\{r_1, r_2, r_3\\}$. Let $\\mathbf{x} \\in S$ s.t. $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$.} \\\\
                  \\text{Since $|f(\\mathbf{x}) - f(\\mathbf{a})| < 1$, $|f(\\mathbf{x})| < 1 + |f(\\mathbf{a})|$. Therefore,} \\\\
                  \\begin{aligned}
                    |f(\\mathbf{x}) g(\\mathbf{x}) - f(\\mathbf{a}) g(\\mathbf{a})| &\\leq |f(\\mathbf{x})| \\, |g(\\mathbf{x}) - g(\\mathbf{a})| + |g(\\mathbf{a})| \\, |f(\\mathbf{x}) - f(\\mathbf{a})| \\\\
                    &\\leq (1 + |f(\\mathbf{a})|) |g(\\mathbf{x}) - g(\\mathbf{a})| + |g(\\mathbf{a})| \\, |f(\\mathbf{x}) - f(\\mathbf{a})| \\\\
                    &< (1 + |f(\\mathbf{a})|) \\tfrac{\\varepsilon}{2(1 + |f(\\mathbf{a})|)} + |g(\\mathbf{a})| \\tfrac{\\varepsilon}{2(|g(\\mathbf{a})| + 1)} \\\\
                    &< \\tfrac{\\varepsilon}{2} + \\tfrac{\\varepsilon}{2} \\\\
                    &= \\varepsilon.
                  \\end{aligned} \\ \\blacksquare`,
      },
      {
        title: "Proof of (d)",
        content: `\\text{Suppose $m = 1$, $g(\\mathbf{a}) \\neq 0$, and let $\\varepsilon > 0$. WTS $\\exists r > 0$, $\\forall \\mathbf{x} \\in S$,} \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\Rightarrow \\left| \\frac{f(\\mathbf{x})}{g(\\mathbf{x})} - \\frac{f(\\mathbf{a})}{g(\\mathbf{a})} \\right| < \\varepsilon. \\\\[0.5em]
                  \\text{[Scratch.} \\\\
                  \\begin{aligned}
                    \\left| \\frac{f(\\mathbf{x})}{g(\\mathbf{x})} - \\frac{f(\\mathbf{a})}{g(\\mathbf{a})} \\right| &= \\left| \\frac{f(\\mathbf{x}) g(\\mathbf{a}) - f(\\mathbf{a}) g(\\mathbf{x})}{g(\\mathbf{x}) g(\\mathbf{a})} \\right| \\\\
                    &= \\left| \\frac{f(\\mathbf{x}) g(\\mathbf{a}) - f(\\mathbf{a}) g(\\mathbf{a}) + f(\\mathbf{a}) g(\\mathbf{a}) - f(\\mathbf{a}) g(\\mathbf{x})}{g(\\mathbf{x}) g(\\mathbf{a})} \\right| \\\\
                    &= \\left| \\frac{g(\\mathbf{a})(f(\\mathbf{x}) - f(\\mathbf{a})) + f(\\mathbf{a})(g(\\mathbf{a}) - g(\\mathbf{x}))}{g(\\mathbf{x}) g(\\mathbf{a})} \\right| \\\\
                    &= \\left| \\frac{g(\\mathbf{a})(f(\\mathbf{x}) - f(\\mathbf{a})) - f(\\mathbf{a})(g(\\mathbf{x}) - g(\\mathbf{a}))}{g(\\mathbf{x}) g(\\mathbf{a})} \\right|.
                  \\end{aligned} \\\\
                  \\text{Want a lower bound for $g(\\mathbf{x}) g(\\mathbf{a})$.} \\\\
                  |g(\\mathbf{a})| \\leq |g(\\mathbf{a}) - g(\\mathbf{x})| + |g(\\mathbf{x})| \\Rightarrow |g(\\mathbf{x})| \\geq |g(\\mathbf{a})| - |g(\\mathbf{x}) - g(\\mathbf{a})|. \\\\
                  \\text{So ask for $|g(\\mathbf{x}) - g(\\mathbf{a})| < \\frac{|g(\\mathbf{a})|}{2}$. Then} \\\\
                  |g(\\mathbf{x})| > |g(\\mathbf{a})| - \\tfrac{|g(\\mathbf{a})|}{2} = \\tfrac{|g(\\mathbf{a})|}{2}. \\\\
                  \\text{So $\\frac{1}{|g(\\mathbf{x})| \\, |g(\\mathbf{a})|} < \\frac{2}{|g(\\mathbf{a})|^2}$. So we have} \\\\
                  \\left| \\frac{f(\\mathbf{x})}{g(\\mathbf{x})} - \\frac{f(\\mathbf{a})}{g(\\mathbf{a})} \\right| < \\frac{2}{|g(\\mathbf{a})|^2} \\big( |g(\\mathbf{a})| \\, |f(\\mathbf{x}) - f(\\mathbf{a})| + |f(\\mathbf{a})| \\, |g(\\mathbf{x}) - g(\\mathbf{a})| \\big). \\\\
                  \\text{Need $\\frac{2}{|g(\\mathbf{a})|} |f(\\mathbf{x}) - f(\\mathbf{a})| < \\frac{\\varepsilon}{2}$, so ask for} \\\\
                  \\text{$|f(\\mathbf{x}) - f(\\mathbf{a})| < \\frac{\\varepsilon |g(\\mathbf{a})|}{4}$.} \\\\
                  \\text{Need $\\frac{2|f(\\mathbf{a})|}{|g(\\mathbf{a})|^2} |g(\\mathbf{x}) - g(\\mathbf{a})| < \\frac{\\varepsilon}{2}$, so ask for} \\\\
                  \\text{$|g(\\mathbf{x}) - g(\\mathbf{a})| < \\frac{\\varepsilon |g(\\mathbf{a})|^2}{4(|f(\\mathbf{a})| + 1)}$.]} \\\\[0.5em]
                  \\text{Since $f$ and $g$ are cts at $\\mathbf{a}$, $\\exists r_1, r_2, r_3 > 0$, $\\forall \\mathbf{x} \\in S$,} \\\\
                  \\begin{aligned}
                    \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_1 &\\Rightarrow |g(\\mathbf{x}) - g(\\mathbf{a})| < \\tfrac{|g(\\mathbf{a})|}{2}, \\\\
                    \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_2 &\\Rightarrow |f(\\mathbf{x}) - f(\\mathbf{a})| < \\tfrac{\\varepsilon |g(\\mathbf{a})|}{4}, \\\\
                    \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r_3 &\\Rightarrow |g(\\mathbf{x}) - g(\\mathbf{a})| < \\tfrac{\\varepsilon |g(\\mathbf{a})|^2}{4(|f(\\mathbf{a})| + 1)}.
                  \\end{aligned} \\\\
                  \\text{Choose $r = \\min\\{r_1, r_2, r_3\\}$. Let $\\mathbf{x} \\in S$ s.t. $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$.} \\\\
                  \\text{Note $|g(\\mathbf{x}) - g(\\mathbf{a})| < \\frac{|g(\\mathbf{a})|}{2} \\Rightarrow |g(\\mathbf{x})| > \\frac{|g(\\mathbf{a})|}{2}$.} \\\\
                  \\text{So since $g(\\mathbf{a}) \\neq 0$, $g(\\mathbf{x}) \\neq 0$. Therefore,} \\\\
                  \\begin{aligned}
                    \\left| \\frac{f(\\mathbf{x})}{g(\\mathbf{x})} - \\frac{f(\\mathbf{a})}{g(\\mathbf{a})} \\right| &< \\frac{2}{|g(\\mathbf{a})|^2} \\big( |g(\\mathbf{a})| \\, |f(\\mathbf{x}) - f(\\mathbf{a})| + |f(\\mathbf{a})| \\, |g(\\mathbf{x}) - g(\\mathbf{a})| \\big) \\\\
                    &< \\frac{2}{|g(\\mathbf{a})|} \\frac{\\varepsilon |g(\\mathbf{a})|}{4} + \\frac{2|f(\\mathbf{a})|}{|g(\\mathbf{a})|^2} \\frac{\\varepsilon |g(\\mathbf{a})|^2}{4(|f(\\mathbf{a})| + 1)} \\\\
                    &< \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} \\\\
                    &= \\varepsilon.
                  \\end{aligned} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 25,
    chapter: 5,
    section: 3,
    title: "Compositions of Continuous Functions",
    statement: `\\text{Let } S \\subseteq \\mathbb{R}^n, \\ T \\subseteq \\mathbb{R}^m, \\ f : S \\to T, \\ g : T \\to \\mathbb{R}^\\ell. \\\\
                \\text{Suppose } f \\text{ is continuous at } \\mathbf{a} \\in S \\text{ and } g \\text{ is continuous at } f(\\mathbf{a}). \\\\
                \\text{Then } g \\circ f \\text{ is continuous at } \\mathbf{a}.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 34|Composition]] \\\\
                  \\text{2) } [[definition 23|Continuity at a point]] \\\\
                  \\text{3) } [[theorem 22|Theorem 5.3.1]]`,
      },
      {
        title: "Proof",
        content: `\\text{Let $(\\mathbf{x}_k) \\subseteq S$ s.t. $\\mathbf{x}_k \\to \\mathbf{a} \\in S$.} \\\\
                  \\text{Since $f$ is cts at $\\mathbf{a}$, $f(\\mathbf{x}_k) \\to f(\\mathbf{a})$.} \\\\
                  \\text{Since $g$ is cts at $f(\\mathbf{a})$ and $(f(\\mathbf{x}_k)) \\subseteq T$, $g(f(\\mathbf{x}_k)) \\to g(f(\\mathbf{a}))$.} \\\\
                  \\text{Therefore, $(g \\circ f)(\\mathbf{x}_k) \\to (g \\circ f)(\\mathbf{a})$.} \\\\
                  \\text{So $g \\circ f$ is cts at $\\mathbf{a}$.} \\ \\blacksquare`,
      },
      {
        title: "Another Proof (ε-r)",
        content: `\\text{Let $\\varepsilon > 0$. WTS $\\exists r > 0$, $\\forall \\mathbf{x} \\in S$,} \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\Rightarrow \\lVert g(f(\\mathbf{x})) - g(f(\\mathbf{a})) \\rVert < \\varepsilon. \\\\[0.5em]
                  \\text{[Scratch. Work backwards: $g$ cts at $f(\\mathbf{a})$ tells us how close $f(\\mathbf{x})$} \\\\
                  \\text{needs to be to $f(\\mathbf{a})$, then $f$ cts at $\\mathbf{a}$ tells us how close $\\mathbf{x}$} \\\\
                  \\text{needs to be to $\\mathbf{a}$.]} \\\\[0.5em]
                  \\text{Since $g$ is cts at $f(\\mathbf{a})$, $\\exists \\delta > 0$ s.t. $\\forall \\mathbf{y} \\in T$,} \\\\
                  \\lVert \\mathbf{y} - f(\\mathbf{a}) \\rVert < \\delta \\Rightarrow \\lVert g(\\mathbf{y}) - g(f(\\mathbf{a})) \\rVert < \\varepsilon. \\\\
                  \\text{Since $f$ is cts at $\\mathbf{a}$ (using $\\delta$ in place of $\\varepsilon$), $\\exists r > 0$ s.t.} \\\\
                  \\text{$\\forall \\mathbf{x} \\in S$,} \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\Rightarrow \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert < \\delta. \\\\
                  \\text{Let $\\mathbf{x} \\in S$ s.t. $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$. Then $\\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert < \\delta$.} \\\\
                  \\text{Since $f(\\mathbf{x}) \\in T$, take $\\mathbf{y} = f(\\mathbf{x})$ to get} \\\\
                  \\lVert g(f(\\mathbf{x})) - g(f(\\mathbf{a})) \\rVert < \\varepsilon. \\\\
                  \\text{That is, $\\lVert (g \\circ f)(\\mathbf{x}) - (g \\circ f)(\\mathbf{a}) \\rVert < \\varepsilon$.} \\\\
                  \\text{Hence, $g \\circ f$ is cts at $\\mathbf{a}$.} \\ \\blacksquare`,
      },
    ],
    examples: [
      {
        title: "Continuity of component functions",
        content: `\\text{Let $S \\subseteq \\mathbb{R}^n$, $f : S \\to \\mathbb{R}^m$ given by $f(\\mathbf{x}) = (f_1(\\mathbf{x}), \\ldots, f_m(\\mathbf{x}))$} \\\\
                  \\text{for $\\mathbf{x} \\in S$. Show $f$ is cts iff $f_j$ is cts for $j = 1, \\ldots, m$.} \\\\[1em]
                  \\text{\\textit{Proof.}} \\\\
                  \\text{($\\Rightarrow$). Let $j \\in \\{1, \\ldots, m\\}$. Note $f_j(\\mathbf{x}) = (\\pi_j \\circ f)(\\mathbf{x})$.} \\\\
                  \\text{So since [[theorem 20|$\\pi_j$]] and $f$ are cts, $f_j$ is cts.} \\\\[0.5em]
                  \\text{($\\Leftarrow$). Note} \\\\
                  \\begin{aligned}
                    f(\\mathbf{x}) = (f_1(\\mathbf{x}), \\ldots, f_m(\\mathbf{x})) &= \\sum_{j=1}^m f_j(\\mathbf{x}) \\mathbf{e}_j \\\\
                    &= \\sum_{j=1}^m E_j(f_j(\\mathbf{x})) \\\\
                    &= \\sum_{j=1}^m (E_j \\circ f_j)(\\mathbf{x}),
                  \\end{aligned} \\\\
                  \\text{where $E_j : \\mathbb{R} \\to \\mathbb{R}^m$, $E_j(t) = t \\mathbf{e}_j$.} \\\\
                  \\text{$E_j$ and $f_j$ are cts $\\forall j \\in \\{1, \\ldots, m\\}$, so $f$ is cts, because} \\\\
                  \\text{compositions of cts functions are cts and [[theorem 24|sums of cts]]} \\\\
                  \\text{[[theorem 24|functions are cts]].} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 26,
    chapter: 5,
    section: 4,
    title: "Continuous Image of a Compact Set",
    statement: `\\text{Let } A \\subseteq \\mathbb{R}^n \\text{ be compact and } f : A \\to \\mathbb{R}^m \\text{ be continuous.} \\\\
                \\text{Then } f(A) \\text{ is compact.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 19|Compact]] \\\\
                  \\text{2) } [[definition 24|Continuous on a set]] \\\\
                  \\text{3) } [[theorem 22|Theorem 5.3.1]]`,
      },
      {
        title: "Proof",
        content: `\\text{Let $(\\mathbf{y}_k) \\subseteq f(A)$.} \\\\
                  \\text{$\\forall k$ $\\mathbf{y}_k \\in f(A)$ so $\\exists \\mathbf{x}_k \\in A$ s.t. $f(\\mathbf{x}_k) = \\mathbf{y}_k$.} \\\\
                  \\text{But $(\\mathbf{x}_k) \\subseteq A$ and $A$ is cpt, so $\\exists (\\mathbf{x}_{k_j}) \\subseteq (\\mathbf{x}_k)$ s.t.} \\\\
                  \\text{$\\mathbf{x}_{k_j} \\to \\mathbf{a} \\in A$.} \\\\
                  \\text{Since $f$ is cts, $f(\\mathbf{x}_{k_j}) \\to f(\\mathbf{a}) \\in f(A)$ ([[theorem 22|Theorem 5.3.1]]).} \\\\
                  \\text{Say $\\mathbf{y} = f(\\mathbf{a}) \\in f(A)$.} \\\\
                  \\text{Then $\\mathbf{y}_{k_j} \\to \\mathbf{y}$, and thus, $f(A)$ is cpt.} \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 27,
    chapter: 5,
    section: 4,
    title: "Extreme Value Theorem",
    statement: `\\text{Let } A \\subseteq \\mathbb{R}^n \\text{ be compact and } f : A \\to \\mathbb{R} \\text{ continuous. Then} \\\\
                \\exists \\mathbf{a}, \\mathbf{b} \\in A,\\ \\forall \\mathbf{x} \\in A,\\ f(\\mathbf{a}) \\leq f(\\mathbf{x}) \\leq f(\\mathbf{b}). \\\\
                \\text{That is, } \\mathbf{a}, \\mathbf{b} \\text{ attain the min and max values of } f \\text{ on } A.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[theorem 26|Theorem 5.4.3]] \\\\
                  \\text{2) } [[theorem 17|Heine–Borel]] \\\\
                  \\text{3) } [[definition 13|Closed]] \\\\
                  \\text{4) } [[definition 20|Bounded]]`,
      },
      {
        title: "Proof",
        content: `\\text{Since $A$ is cpt and $f$ is cts on $A$, $f(A)$ is cpt by [[theorem 26|previous thm]].} \\\\
                  \\text{By [[theorem 17|Heine–Borel]], $f(A)$ is closed and bounded.} \\\\
                  \\text{Since $f(A)$ is bounded,} \\\\
                  \\inf_{\\mathbf{x} \\in A} f(\\mathbf{x}) = m > -\\infty \\text{ and } \\sup_{\\mathbf{x} \\in A} f(\\mathbf{x}) = M < \\infty. \\\\
                  \\text{Let $\\varepsilon = \\frac{1}{k}$ for $k \\in \\mathbb{N}$.} \\\\
                  \\text{Then $m + \\frac{1}{k}$ is not a lower bound $\\forall k$, so $\\exists \\mathbf{a}_k \\in A$ s.t.} \\\\
                  m \\leq f(\\mathbf{a}_k) < m + \\tfrac{1}{k}. \\\\
                  \\text{By squeeze thm, $f(\\mathbf{a}_k) \\to m$ where $(\\mathbf{a}_k) \\subseteq A$.} \\\\
                  \\text{Similarly, $M - \\frac{1}{k}$ is not an upper bound $\\forall k$, so $\\exists \\mathbf{b}_k \\in A$ s.t.} \\\\
                  M - \\tfrac{1}{k} < f(\\mathbf{b}_k) \\leq M. \\\\
                  \\text{By squeeze thm, $f(\\mathbf{b}_k) \\to M$ where $(\\mathbf{b}_k) \\subseteq A$.} \\\\
                  \\text{Since $(f(\\mathbf{a}_k)), (f(\\mathbf{b}_k)) \\subseteq f(A)$ and $f(A)$ is closed, $m, M \\in f(A)$.} \\\\
                  \\text{So $\\exists \\mathbf{a}, \\mathbf{b} \\in A$ s.t. $f(\\mathbf{a}) = m$ and $f(\\mathbf{b}) = M$.} \\\\
                  \\text{Thus $\\exists \\mathbf{a}, \\mathbf{b} \\in A$ s.t. $\\forall \\mathbf{x} \\in A$, $f(\\mathbf{a}) \\leq f(\\mathbf{x}) \\leq f(\\mathbf{b})$.} \\ \\blacksquare`,
      },
    ],
    examples: [
      {
        title: "Domain not closed",
        content: `\\text{$f(x) = -x$ on $(0, 1]$.} \\\\
                  \\text{Note $\\sup_{x \\in (0, 1]} f(x) = 0$ but is never attained.} \\\\
                  \\text{This is because the domain is not [[definition 13|closed]].}`,
      },
      {
        title: "Domain not bounded",
        content: `\\text{$g(\\mathbf{x}) = \\lVert \\mathbf{x} \\rVert$ on $\\mathbb{R}^n$.} \\\\
                  \\text{$g$ is unbounded and so max is never attained.} \\\\
                  \\text{This is because the domain is not [[definition 20|bounded]].}`,
      },
      {
        title: "Function not continuous",
        content: `f : [-1, 1] \\to \\mathbb{R}, \\quad f(x) = \\begin{cases} -x + 1, & x > 0 \\\\ x, & x \\leq 0. \\end{cases} \\\\
                  \\text{$\\sup_{x \\in [-1, 1]} f(x) = 1$ but is never attained.} \\\\
                  \\text{This is because $f$ is not [[definition 24|cts]].}`,
      },
    ],
  },
  // Template:
  // {
  //   kind: "Lemma", // optional: "Theorem" (default), "Lemma", "Corollary", or "Proposition"
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
