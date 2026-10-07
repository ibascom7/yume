import type { ChapterRef } from "@/app/components/notesFilter";

interface Definition extends ChapterRef {
  number: number;
  term: string;
  definition: string;
}

export const definitions: Definition[] = [
  {
    number: 1,
    chapter: 4,
    section: 1,
    term: "Euclidean Norm",
    definition: `\\text{The Euclidean norm on } \\mathbb{R}^n\\text{, denoted by } \\lVert \\mathbf{x} \\rVert \\\\
                 \\text{for } \\mathbf{x} = (x_1, \\ldots, x_n) \\in \\mathbb{R}^n\\text{, is defined as} \\\\
                 \\lVert \\mathbf{x} \\rVert := \\left( \\sum_{j=1}^{n} x_j^2 \\right)^{1/2} = \\sqrt{x_1^2 + x_2^2 + \\cdots + x_n^2}`,
  },
  {
    number: 2,
    chapter: 4,
    section: 1,
    term: "Distance",
    definition: `\\text{The distance between two points} \\\\
                 \\mathbf{x} = (x_1, \\ldots, x_n),\\ \\mathbf{y} = (y_1, \\ldots, y_n) \\in \\mathbb{R}^n \\text{ is defined as} \\\\
                 \\begin{aligned}
                   \\lVert \\mathbf{x} - \\mathbf{y} \\rVert &= \\lVert (x_1 - y_1, \\ldots, x_n - y_n) \\rVert \\\\
                   &= \\left( \\sum_{i=1}^{n} (x_i - y_i)^2 \\right)^{1/2} \\\\
                   &= \\sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2 + \\cdots + (x_n - y_n)^2}
                 \\end{aligned}`,
  },
  {
    number: 3,
    chapter: 4,
    section: 1,
    term: "Dot Product / Inner Product",
    definition: `\\text{For two vectors } \\mathbf{x} = (x_1, \\ldots, x_n),\\ \\mathbf{y} = (y_1, \\ldots, y_n) \\in \\mathbb{R}^n\\text{,} \\\\
                 \\text{the dot product, denoted by } \\langle \\mathbf{x}, \\mathbf{y} \\rangle \\text{, is defined as} \\\\
                 \\langle \\mathbf{x}, \\mathbf{y} \\rangle := \\sum_{j=1}^{n} x_j y_j = x_1 y_1 + \\cdots + x_n y_n \\\\[1em]
                 \\text{Recall, the dot product is linear in each variable:} \\\\
                 \\text{for } \\mathbf{x}, \\mathbf{y}, \\mathbf{z} \\in \\mathbb{R}^n,\\ t, s \\in \\mathbb{R}\\text{,} \\\\
                 \\begin{aligned}
                   \\langle t\\mathbf{x} + s\\mathbf{y}, \\mathbf{z} \\rangle &= t \\langle \\mathbf{x}, \\mathbf{z} \\rangle + s \\langle \\mathbf{y}, \\mathbf{z} \\rangle \\\\
                   \\langle \\mathbf{x}, t\\mathbf{y} + s\\mathbf{z} \\rangle &= t \\langle \\mathbf{x}, \\mathbf{y} \\rangle + s \\langle \\mathbf{x}, \\mathbf{z} \\rangle
                 \\end{aligned} \\\\[1em]
                 \\text{Also, it is symmetric:} \\\\
                 \\text{for } \\mathbf{x} = (x_1, \\ldots, x_n),\\ \\mathbf{y} = (y_1, \\ldots, y_n) \\in \\mathbb{R}^n\\text{,} \\\\
                 \\langle \\mathbf{x}, \\mathbf{y} \\rangle = \\sum_{j=1}^{n} x_j y_j = \\sum_{j=1}^{n} y_j x_j = \\langle \\mathbf{y}, \\mathbf{x} \\rangle \\\\[1em]
                 \\text{Also note, for } \\mathbf{x} = (x_1, \\ldots, x_n) \\in \\mathbb{R}^n\\text{,} \\\\
                 \\langle \\mathbf{x}, \\mathbf{x} \\rangle = \\sum_{j=1}^{n} x_j \\cdot x_j = \\sum_{j=1}^{n} x_j^2 = \\lVert \\mathbf{x} \\rVert^2`,
  },
  {
    number: 4,
    chapter: 4,
    section: 1,
    term: "Collinear",
    definition: `\\text{Let } \\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n. \\\\
                 \\mathbf{x} \\text{ and } \\mathbf{y} \\text{ are collinear iff } \\ \\exists t \\in \\mathbb{R} \\text{ s.t. } \\mathbf{y} = t \\mathbf{x}.

    `,
  },
  {
    number: 5,
    chapter: 4,
    section: 1,
    term: "Orthonormal",
    definition: `\\text{A set } \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\} \\subseteq \\mathbb{R}^n \\text{ of vectors} \\\\
                 \\text{is orthonormal iff} \\\\
                 \\langle \\mathbf{v}_i, \\mathbf{v}_j \\rangle = \\delta_{ij} := \\begin{cases} 1 & \\text{if } i = j \\\\ 0 & \\text{if } i \\neq j. \\end{cases} \\\\[1em]
                 \\text{Note } \\lVert \\mathbf{v}_j \\rVert = \\sqrt{\\langle \\mathbf{v}_j, \\mathbf{v}_j \\rangle} = \\sqrt{1} = 1`,
  },
  {
    number: 6,
    chapter: 4,
    section: 1,
    term: "Orthonormal Basis (ONB)",
    definition: `\\text{A set } S = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\} \\subseteq \\mathbb{R}^n \\text{ of vectors} \\\\
                 \\text{is an orthonormal basis (ONB) if } S \\\\
                 \\text{is orthonormal and } \\operatorname{span}(S) = \\mathbb{R}^n.`,
  },
  {
    number: 7,
    chapter: 4,
    section: 1,
    term: "Linearly Independent",
    definition: `\\text{A set } S = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\} \\subseteq \\mathbb{R}^n \\text{ of vectors} \\\\
                 \\text{is linearly independent iff for } a_1, \\ldots, a_n \\in \\mathbb{R}, \\\\
                 \\sum_{j=1}^{n} a_j \\mathbf{v}_j = \\mathbf{0} \\implies a_j = 0 \\ \\forall j.`,
  },
  {
    number: 8,
    chapter: 4,
    section: 1,
    term: "Basis",
    definition: `\\text{A set } S = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\} \\subseteq \\mathbb{R}^n \\text{ of vectors} \\\\
                 \\text{is a basis iff } S \\text{ is } [[definition 7|linearly independent]] \\\\
                 \\text{and } \\operatorname{span}(S) = \\mathbb{R}^n.`,
  },
  {
    number: 9,
    chapter: 4,
    section: 2,
    term: "Convergence of a Sequence",
    definition: `\\text{A sequence of points } (\\mathbf{x}_k) \\subseteq \\mathbb{R}^n \\\\
                 \\text{converges to a point } \\mathbf{a} \\in \\mathbb{R}^n \\text{ if} \\\\
                 \\forall \\varepsilon > 0,\\ \\exists N \\in \\mathbb{N},\\ \\forall k \\geq N,\\ \\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert < \\varepsilon. \\\\
                 \\text{In this case, we notate this by } \\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}.`,
  },
  {
    number: 10,
    chapter: 4,
    section: 2,
    term: "Cauchy Sequence",
    definition: `\\text{A sequence } (\\mathbf{x}_k) \\subseteq \\mathbb{R}^n \\text{ is Cauchy if} \\\\
                 \\forall \\varepsilon > 0,\\ \\exists N \\in \\mathbb{N},\\ \\forall k, l \\geq N,\\ \\lVert \\mathbf{x}_k - \\mathbf{x}_l \\rVert < \\varepsilon.`,
  },
  {
    number: 11,
    chapter: 4,
    section: 2,
    term: "Complete",
    definition: `\\text{A set } S \\subseteq \\mathbb{R}^n \\text{ is complete if every} \\\\
                 [[definition 10|Cauchy sequence]] \\text{ in } S \\text{ } [[definition 9|converges]] \\text{ to a point in } S. \\\\[0.5em]
                 (\\mathbf{x}_k) \\subseteq S,\\ (\\mathbf{x}_k) \\text{ Cauchy} \\implies \\exists \\mathbf{a} \\in \\mathbb{R}^n,\\ \\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a} \\in S`,
  },
  {
    number: 12,
    chapter: 4,
    section: 3,
    term: "Limit Point",
    definition: `\\text{A point } \\mathbf{x} \\in \\mathbb{R}^n \\text{ is a limit point of a set } A \\subseteq \\mathbb{R}^n \\\\
                 \\text{if } \\exists (\\mathbf{a}_k) \\subseteq A \\text{ such that } \\lim_{k \\to \\infty} \\mathbf{a}_k = \\mathbf{x}.`,
  },
  {
    number: 13,
    chapter: 4,
    section: 3,
    term: "Closed",
    definition: `\\text{A set } A \\subseteq \\mathbb{R}^n \\text{ is closed if it contains} \\\\
                 \\text{all of its [[definition 12|limit points]].} \\\\[1em]
                 \\text{In other words,} \\text{ Closed means } \\{\\text{limit pts of } A\\} \\subseteq A. \\\\[1em]
                 \\text{Note for any } \\mathbf{a} \\in A, \\text{ we may consider the constant} \\\\
                 \\text{sequence } \\mathbf{a}_k \\equiv \\mathbf{a}\\ \\forall k \\text{ to see } \\mathbf{a} \\in \\{\\text{limit pts of } A\\}. \\\\
                 \\text{That is, } \\{\\text{limit pts of } A\\} \\supseteq A \\text{ always holds.} \\\\
                 \\text{So } A \\text{ is closed iff } A = \\{\\text{limit pts of } A\\}, \\text{ and to show} \\\\
                 A \\text{ is closed we only need to show all limit points are in } A.`,
  },
  {
    number: 14,
    chapter: 4,
    section: 3,
    term: "Closure",
    definition: `\\text{Let } A \\subseteq \\mathbb{R}^n. \\text{ The closure of } A \\text{ is the set } \\overline{A} \\\\
                 \\text{consisting of all of its [[definition 12|limit points]].} \\\\[1em]
                 \\text{Note } A \\text{ [[definition 13|closed]]} \\iff \\overline{A} \\subseteq A.`,
  },
  // Template:
  // {
  //   number: 1,
  //   chapter: 1,
  //   section: 1,
  //   term: "Term",
  //   definition: `\\text{Definition...}`,
  // },
];
