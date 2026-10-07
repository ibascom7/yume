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
  // Template:
  // {
  //   number: 1,
  //   chapter: 1,
  //   section: 1,
  //   term: "Term",
  //   definition: `\\text{Definition...}`,
  // },
];
