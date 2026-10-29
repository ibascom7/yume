import type { ChapterRef } from "@/app/components/notesFilter";
import type { Example } from "../components/DefinitionCard";

interface Definition extends ChapterRef {
  number: number;
  term: string;
  definition: string;
  examples?: Example[];
}

export const definitions: Definition[] = [
  {
    number: 1,
    chapter: 1,
    section: 2,
    term: "Vector Space",
    definition: `\\text{A } \\textbf{vector space} \\text{ (or } \\textbf{linear space}\\text{) } V \\\\
                 \\text{over a field } \\mathbb{F} \\text{ consists of a set on which two} \\\\
                 \\text{operations (called } \\textbf{addition} \\text{ and} \\\\
                 \\textbf{scalar multiplication}\\text{) are defined so that} \\\\
                 \\text{for each pair of elements } x, y \\in V \\\\
                 \\text{there is a unique element } x + y \\in V\\text{, and} \\\\
                 \\text{for each } a \\in \\mathbb{F} \\text{ and } x \\in V \\\\
                 \\text{there is a unique element } ax \\in V\\text{,} \\\\
                 \\text{such that the following conditions hold:} \\\\[1em]
                 \\begin{array}{ll}
                   \\htmlId{vs-1}{\\text{(VS 1)}} & \\forall x, y \\in V,\\ x + y = y + x \\\\
                                & \\text{(commutativity of addition)} \\\\[0.4em]
                   \\htmlId{vs-2}{\\text{(VS 2)}} & \\forall x, y, z \\in V,\\ (x + y) + z = x + (y + z) \\\\
                                & \\text{(associativity of addition)} \\\\[0.4em]
                   \\htmlId{vs-3}{\\text{(VS 3)}} & \\exists\\, 0 \\in V \\text{ s.t. } x + 0 = x \\text{ for each } x \\in V \\\\[0.4em]
                   \\htmlId{vs-4}{\\text{(VS 4)}} & \\forall x \\in V,\\ \\exists\\, y \\in V \\text{ s.t. } x + y = 0 \\\\[0.4em]
                   \\htmlId{vs-5}{\\text{(VS 5)}} & \\forall x \\in V,\\ 1x = x \\\\[0.4em]
                   \\htmlId{vs-6}{\\text{(VS 6)}} & \\forall a, b \\in \\mathbb{F},\\ \\forall x \\in V,\\ (ab)x = a(bx) \\\\[0.4em]
                   \\htmlId{vs-7}{\\text{(VS 7)}} & \\forall a \\in \\mathbb{F},\\ \\forall x, y \\in V,\\ a(x + y) = ax + ay \\\\[0.4em]
                   \\htmlId{vs-8}{\\text{(VS 8)}} & \\forall a, b \\in \\mathbb{F},\\ \\forall x \\in V,\\ (a + b)x = ax + bx
                 \\end{array} \\\\[1em]
                 \\text{The elements } x + y \\text{ and } ax \\text{ are called} \\\\
                 \\text{the } \\textbf{sum} \\text{ of } x \\text{ and } y \\text{ and the } \\textbf{product} \\text{ of } a \\text{ and } x\\text{.} \\\\
                 \\text{The elements of } \\mathbb{F} \\text{ are called } \\textbf{scalars}\\text{,} \\\\
                 \\text{and the elements of } V \\text{ are called } \\textbf{vectors}\\text{.}`,
  },
  {
    number: 2,
    chapter: 1,
    section: 3,
    term: "Subspace",
    definition: `W \\subseteq V \\text{ is a } \\textbf{subspace} \\text{ of } V \\text{ iff the following hold:} \\\\[1em]
                 \\begin{array}{ll}
                   \\text{(a)} & \\text{(Closed under addition)} \\\\
                               & x + y \\in W \\text{ whenever } x \\in W \\text{ and } y \\in W \\\\[0.6em]
                   \\text{(b)} & \\text{(Closed under scalar multiplication)} \\\\
                               & cx \\in W \\text{ whenever } c \\in \\mathbb{F} \\text{ and } x \\in W \\\\[0.6em]
                   \\text{(c)} & \\text{(}W \\text{ has a zero vector)} \\\\
                               & \\exists\\, 0_W \\in W \\text{ s.t. } 0_W + x = x \\ \\ \\forall x \\in W \\\\[0.6em]
                   \\text{(d)} & \\text{Each vector in } W \\text{ has an additive inverse in } W
                 \\end{array}`,
  },
  {
    number: 3,
    chapter: 1,
    section: 3,
    term: "Transpose",
    definition: `\\text{The } \\textbf{transpose } A^T \\text{ of an } m \\times n \\text{ matrix } A \\text{ is the } n \\times m \\text{ matrix} \\\\
                 \\text{obtained by interchanging rows and columns.} \\\\
                 \\text{That is, } (A^T)_{ij} = A_{ji}.`,
    examples: [
      {
        title: "Transpose of a 2 × 3 matrix",
        content: `\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}.`,
      },
    ],
  },
  {
    number: 4,
    chapter: 1,
    section: 3,
    term: "Symmetric Matrix",
    definition: `\\text{A square matrix } A \\text{ is a } \\textbf{symmetric matrix} \\text{ if } A = A^T.`,
    examples: [
      {
        title: "A symmetric matrix",
        content: `A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 3 \\end{pmatrix} \\text{ is symmetric because} \\\\
                  \\begin{pmatrix} 1 & 2 \\\\ 2 & 3 \\end{pmatrix}^T = \\begin{pmatrix} 1 & 2 \\\\ 2 & 3 \\end{pmatrix}.`,
      },
    ],
  },
  {
    number: 5,
    chapter: 1,
    section: 4,
    term: "Linear Combination",
    definition: `\\text{Let } V \\text{ be a vector space and } S \\subseteq V \\text{ where } S \\neq \\varnothing. \\\\
                 v \\in V \\text{ is a } \\textbf{linear combination} \\text{ of vectors of } S \\text{ if} \\\\
                 \\exists\\, u_1, u_2, \\dots, u_n \\in S \\text{ and } a_1, \\dots, a_n \\in \\mathbb{F} \\text{ s.t.} \\\\[0.5em]
                 v = a_1 u_1 + a_2 u_2 + \\dots + a_n u_n. \\\\[0.5em]
                 \\text{In this case we say } v \\text{ is a linear combination of } u_1, \\dots, u_n \\\\
                 \\text{and call } a_1, \\dots, a_n \\text{ the } \\textbf{coefficients} \\text{ of the linear combination.}`,
    examples: [
      {
        title: "The zero vector",
        content: `0 \\text{ is a linear combination of any nonempty subset of } V\\text{,} \\\\
                  \\text{since } 0v = 0 \\text{ whenever } v \\in V \\text{ by }[[theorem 4|Theorem 1.2]]\\text{ (a).}`,
      },
      {
        title: "Linear combinations in P₃(ℝ)",
        content: `\\text{Consider} \\\\
                  S = \\{x^3 - 2x^2 - 5x - 3, \\ 3x^3 - 5x^2 - 4x - 9\\} \\subseteq P_3(\\mathbb{R}). \\\\
                  \\text{Show } 2x^3 - 2x^2 + 12x - 6 \\text{ is a linear combination of } S\\text{,} \\\\
                  \\text{but that } 3x^3 - 2x^2 + 7x + 8 \\text{ is not.} \\\\[1em]
                  \\textit{Proof.} \\\\
                  \\text{First, WTS } \\exists\\, a, b \\in \\mathbb{R} \\text{ s.t.} \\\\
                  \\begin{aligned}
                    2x^3 - 2x^2 + 12x - 6 &= a(x^3 - 2x^2 - 5x - 3) \\\\
                    &\\quad + b(3x^3 - 5x^2 - 4x - 9) \\\\
                    &= (a + 3b)x^3 + (-2a - 5b)x^2 \\\\
                    &\\quad + (-5a - 4b)x + (-3a - 9b).
                  \\end{aligned} \\\\
                  \\text{So we have the system of equations,} \\\\
                  \\begin{aligned}
                    a + 3b &= 2 \\\\
                    -2a - 5b &= -2 \\\\
                    -5a - 4b &= 12 \\\\
                    -3a - 9b &= -6.
                  \\end{aligned} \\\\
                  \\text{In matrix form we have,} \\\\
                  \\left(\\begin{array}{cc|c} 1 & 3 & 2 \\\\ -2 & -5 & -2 \\\\ -5 & -4 & 12 \\\\ -3 & -9 & -6 \\end{array}\\right)
                  \\to
                  \\left(\\begin{array}{cc|c} 1 & 3 & 2 \\\\ 0 & 1 & 2 \\\\ 0 & 11 & 22 \\\\ 0 & 0 & 0 \\end{array}\\right). \\\\
                  \\text{So we have} \\\\
                  \\begin{aligned}
                    a + 3b &= 2 \\\\
                    b &= 2 \\\\
                    11b &= 22 \\\\
                    0b &= 0,
                  \\end{aligned} \\\\
                  \\text{which implies } a = -4 \\text{ and } b = 2\\text{. Hence,} \\\\
                  \\begin{aligned}
                    2x^3 - 2x^2 + 12x - 6 &= -4(x^3 - 2x^2 - 5x - 3) \\\\
                    &\\quad + 2(3x^3 - 5x^2 - 4x - 9).
                  \\end{aligned} \\\\[1em]
                  \\text{Now WTS } \\nexists\\, a, b \\in \\mathbb{R} \\text{ s.t.} \\\\
                  \\begin{aligned}
                    3x^3 - 2x^2 + 7x + 8 &= a(x^3 - 2x^2 - 5x - 3) \\\\
                    &\\quad + b(3x^3 - 5x^2 - 4x - 9) \\\\
                    &= (a + 3b)x^3 + (-2a - 5b)x^2 \\\\
                    &\\quad + (-5a - 4b)x + (-3a - 9b).
                  \\end{aligned} \\\\
                  \\text{So we have,} \\\\
                  \\left(\\begin{array}{cc|c} 1 & 3 & 3 \\\\ -2 & -5 & -2 \\\\ -5 & -4 & 7 \\\\ -3 & -9 & 8 \\end{array}\\right)
                  \\to
                  \\left(\\begin{array}{cc|c} 1 & 3 & 3 \\\\ 0 & 1 & 4 \\\\ 0 & 11 & 22 \\\\ 0 & 0 & 17 \\end{array}\\right)\\text{,} \\\\
                  \\text{which implies} \\\\
                  \\begin{aligned}
                    a + 3b &= 3 \\\\
                    b &= 4 \\\\
                    11b &= 22 \\\\
                    0b &= 17.
                  \\end{aligned} \\\\
                  \\text{Since } 0b = 0 \\neq 17\\text{, the system has no solution,} \\\\
                  \\text{so } 3x^3 - 2x^2 + 7x + 8 \\\\
                  \\text{is not a linear combination of } S. \\ \\ \\blacksquare`,
      },
      {
        title: "Check your row reduction",
        content: `\\text{Row reduce a system one operation at a time, typing each new row} \\\\
                  \\text{yourself. It starts on the first system above.}`,
        widget: "row-reduce",
      },
    ],
  },
  {
    number: 6,
    chapter: 1,
    section: 4,
    term: "Span",
    definition: `\\text{Let } S \\subseteq V \\text{ with } S \\neq \\varnothing. \\\\
                 \\text{The } \\textbf{span} \\text{ of } S\\text{, denoted } \\operatorname{span}(S)\\text{,} \\\\
                 \\text{is the set of all }[[definition 5|linear combinations]] \\\\
                 \\text{of the vectors in } S. \\\\[0.5em]
                 \\text{By convention, we define } \\operatorname{span}(\\varnothing) = \\{0\\}.`,
    examples: [
      {
        title: "The xy-plane in ℝ³",
        content: `\\text{In } \\mathbb{R}^3\\text{,} \\\\
                  \\begin{aligned}
                    \\operatorname{span}\\left\\{ \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix} \\right\\}
                    &= \\left\\{ a\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix} + b\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix} : a, b \\in \\mathbb{R} \\right\\} \\\\
                    &= \\left\\{ \\begin{pmatrix} a \\\\ b \\\\ 0 \\end{pmatrix} : a, b \\in \\mathbb{R} \\right\\}.
                  \\end{aligned} \\\\
                  \\text{So } \\operatorname{span}\\left\\{ \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix} \\right\\} \\text{ is the } xy\\text{-plane.}`,
      },
      {
        title: "Explore spans in ℝ³",
        content: `\\text{Build a set } S \\subseteq \\mathbb{R}^3 \\text{ below to see } \\operatorname{span}(S)\\text{.} \\\\
                  \\text{Drag the picture to rotate it.}`,
        widget: "span-r3",
      },
    ],
  },
  {
    number: 7,
    chapter: 1,
    section: 4,
    term: "Generating Set",
    definition: `S \\subseteq V \\textbf{ generates} \\text{ (or } \\textbf{spans}\\text{) } V \\\\
                 \\text{if }[[definition 6|span]](S) = V. \\\\[0.5em]
                 \\text{In this case we also say the vectors of } S \\\\
                 \\text{generate (or span) } V\\text{.}`,
    examples: [
      {
        title: "A generating set for ℝ³",
        content: `(1, 1, 0),\\ (1, 0, 1),\\ (0, 1, 1) \\text{ generate } \\mathbb{R}^3.`,
      },
      {
        title: "A generating set for P₂(ℝ)",
        content: `x^2 + 3x - 2,\\ \\ 2x^2 + 5x - 3,\\ \\ -x^2 - 4x + 4 \\\\
                  \\text{generate } P_2(\\mathbb{R}).`,
      },
      {
        title: "A generating set for M₂ₓ₂(ℝ)",
        content: `\\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}, \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}, \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix}, \\begin{pmatrix} 0 & 1 \\\\ 1 & 1 \\end{pmatrix} \\\\
                  \\text{generate } M_{2 \\times 2}(\\mathbb{R}).`,
      },
    ],
  },
  {
    number: 8,
    chapter: 1,
    section: 5,
    term: "Linear Dependence",
    definition: `S \\subseteq V \\text{ is } \\textbf{linearly dependent} \\text{ if } \\exists \\text{ distinct } u_1, \\dots, u_n \\in S \\\\
                 \\text{and } a_1, \\dots, a_n \\in \\mathbb{F} \\text{ with } a_i \\neq 0 \\\\
                 \\text{for some } i \\in \\{1, \\dots, n\\} \\text{ s.t.} \\\\[0.5em]
                 a_1 u_1 + \\dots + a_n u_n = 0.`,
    examples: [
      {
        title: "A linearly dependent set in ℝ³",
        content: `\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix} \\text{ are linearly dependent, since} \\\\[0.5em]
                  \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix} = 0.`,
      },
    ],
  },
  {
    number: 9,
    chapter: 1,
    section: 5,
    term: "Linear Independence",
    definition: `S \\subseteq V \\text{ is } \\textbf{linearly independent} \\text{ if } S \\text{ is not} \\\\
                 [[definition 8|linearly dependent]]\\text{.} \\\\[0.5em]
                 \\text{Equivalently (by }[[theorem 8|Proposition 8]]\\text{ (iii)),} \\\\
                 S \\text{ is linearly independent iff for all distinct} \\\\
                 u_1, \\dots, u_n \\in S \\text{ and } a_1, \\dots, a_n \\in \\mathbb{F}\\text{,} \\\\[0.5em]
                 a_1 u_1 + \\dots + a_n u_n = 0 \\implies a_1 = \\dots = a_n = 0.`,
    examples: [
      {
        title: "How to prove linear independence",
        content: `\\text{Let} \\\\
                  S = \\left\\{ \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\\\ -1 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\\\ -1 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\\\ -1 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\\\ 1 \\end{pmatrix} \\right\\}. \\\\
                  \\text{Show that } S \\text{ is linearly independent.} \\\\[1em]
                  \\textit{Proof.} \\\\
                  \\text{Let } a_1, a_2, a_3, a_4 \\in \\mathbb{F} \\text{ s.t.} \\\\
                  \\begin{aligned}
                    &a_1 \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\\\ -1 \\end{pmatrix} + a_2 \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\\\ -1 \\end{pmatrix} \\\\
                    &\\quad + a_3 \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\\\ -1 \\end{pmatrix} + a_4 \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\\\ 0 \\end{pmatrix}.
                  \\end{aligned} \\\\
                  \\text{WTS } a_1 = a_2 = a_3 = a_4 = 0. \\\\
                  \\text{Take the matrix,} \\\\
                  \\left(\\begin{array}{cccc|c} 1 & 0 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 & 0 \\\\ 0 & 0 & 1 & 0 & 0 \\\\ -1 & -1 & -1 & 1 & 0 \\end{array}\\right). \\\\
                  \\text{The first three rows give } a_1 = 0\\text{, } a_2 = 0\\text{, } a_3 = 0\\text{,} \\\\
                  \\text{and then the last row gives } a_4 = 0. \\\\
                  \\text{Hence } S \\text{ is linearly independent by }[[theorem 8|Proposition 8]]\\text{ (iii).} \\ \\ \\blacksquare`,
      },
      {
        title: "A linearly independent set in Pₙ(𝔽)",
        content: `\\text{For } k = 0, 1, \\dots, n \\text{ let } p_k(x) = x^k + x^{k+1} + \\dots + x^n\\text{.} \\\\
                  \\text{Show } \\{p_0(x), p_1(x), \\dots, p_n(x)\\} \\text{ is linearly} \\\\
                  \\text{independent in } P_n(\\mathbb{F})\\text{.} \\\\[1em]
                  \\textit{Proof.} \\\\
                  \\text{Let } a_0, \\dots, a_n \\in \\mathbb{F} \\text{ s.t. } a_0 p_0(x) + \\dots + a_n p_n(x) = 0\\text{. Then} \\\\
                  \\begin{aligned}
                    0 &= a_0 p_0(x) + \\dots + a_n p_n(x) \\\\
                    &= a_0 + (a_0 + a_1)x + \\dots \\\\
                    &\\quad + (a_0 + a_1 + \\dots + a_n)x^n.
                  \\end{aligned} \\\\
                  \\text{Each coefficient must be } 0\\text{, so we have the matrix} \\\\
                  \\left(\\begin{array}{ccccc|c} 1 & 0 & 0 & \\cdots & 0 & 0 \\\\ 1 & 1 & 0 & \\cdots & 0 & 0 \\\\ 1 & 1 & 1 & \\cdots & 0 & 0 \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ 1 & 1 & 1 & \\cdots & 1 & 0 \\end{array}\\right). \\\\
                  \\text{The first row gives } a_0 = 0\\text{, and each following row} \\\\
                  \\text{then shows the next coefficient is } 0\\text{.} \\\\
                  \\text{Thus } a_0 = a_1 = \\dots = a_n = 0\\text{.} \\\\
                  \\text{So the set is linearly independent.} \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 10,
    chapter: 2,
    section: 1,
    term: "Linear Transformation",
    definition: `\\text{Let } V \\text{ and } W \\text{ be vector spaces over } \\mathbb{F}\\text{.} \\\\
                 T: V \\to W \\text{ is } \\textbf{linear} \\text{ if } \\forall x, y \\in V \\text{ and } c \\in \\mathbb{F}\\text{,} \\\\[1em]
                 \\begin{array}{ll}
                   \\htmlId{lt-a}{\\text{(a)}} & T(x + y) = T(x) + T(y) \\\\[0.6em]
                   \\htmlId{lt-b}{\\text{(b)}} & T(cx) = cT(x)
                 \\end{array}`,
    examples: [
      {
        title: "Is it linear?",
        content: `\\text{Pick a map } T: \\mathbb{R}^2 \\to \\mathbb{R}^2 \\text{ and test conditions (a) and (b)} \\\\
                  \\text{on vectors you choose.}`,
        widget: "linearity",
      },
    ],
  },
  {
    number: 11,
    chapter: 2,
    section: 1,
    term: "Null Space and Range",
    definition: `\\text{Let } V \\text{ and } W \\text{ be vector spaces} \\\\
                 \\text{and } T: V \\to W \\text{ be linear.} \\\\[1em]
                 \\begin{array}{ll}
                   \\text{(a)} & \\text{The } \\textbf{null space} \\text{ (}\\textbf{kernel}\\text{) of } T \\text{ is} \\\\
                               & N(T) = \\{x \\in V : T(x) = 0\\}. \\\\[0.6em]
                   \\text{(b)} & \\text{The } \\textbf{range} \\text{ (}\\textbf{image}\\text{) of } T \\text{ is} \\\\
                               & R(T) = \\{T(x) : x \\in V\\}.
                 \\end{array}`,
  },
  {
    number: 12,
    chapter: 4,
    section: 1,
    term: "Determinant of a 2 × 2 Matrix",
    definition: `\\text{Let } A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\in M_{2 \\times 2}(\\mathbb{F})\\text{.} \\\\
                 \\text{We define the } \\textbf{determinant} \\text{ of } A\\text{, } \\det(A)\\text{,} \\\\
                 \\text{to be the scalar } ad - bc.`,
    examples: [
      {
        title: "Determinants of 2 × 2 matrices",
        content: `\\begin{aligned}
                    \\det\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} &= 4 - 6 = -2, \\\\
                    \\det\\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix} &= 4 - 4 = 0.
                  \\end{aligned}`,
      },
      {
        title: "det is not linear",
        content: `\\text{We have} \\\\
                  \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix} + \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 2 & 4 \\\\ 5 & 8 \\end{pmatrix}\\text{,} \\\\[0.5em]
                  \\det\\begin{pmatrix} 2 & 4 \\\\ 5 & 8 \\end{pmatrix} = 16 - 20 = -4. \\\\[0.5em]
                  \\text{But} \\\\
                  \\det\\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix} + \\det\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = 0 + (-2) = -2 \\neq -4. \\\\[0.5em]
                  \\text{So } \\det: M_{2 \\times 2}(\\mathbb{F}) \\to \\mathbb{F} \\text{ is not }[[definition 10|linear]]\\text{,} \\\\
                  \\text{because } \\det(A + B) \\neq \\det(A) + \\det(B) \\text{ in general.}`,
      },
    ],
  },
  {
    number: 13,
    chapter: 4,
    section: 2,
    term: "Minor Matrix",
    definition: `\\text{Let } A \\in M_{n \\times n}(\\mathbb{F}) \\text{ with } n \\geq 2\\text{.} \\\\
                 \\text{For } 1 \\leq i, j \\leq n\\text{, the } (i, j) \\textbf{ minor matrix} \\text{ of } A\\text{,} \\\\
                 \\text{notated } \\tilde{A}_{ij}\\text{, is the } (n - 1) \\times (n - 1) \\text{ matrix} \\\\
                 \\text{obtained from } A \\text{ by deleting row } i \\text{ and column } j.`,
  },
  {
    number: 14,
    chapter: 4,
    section: 2,
    term: "Determinant of an n × n Matrix",
    definition: `\\text{Let } A \\in M_{n \\times n}(\\mathbb{F})\\text{.} \\\\
                 \\text{If } n = 1\\text{, so that } A = (A_{11})\\text{, then we define } \\det(A) = A_{11}. \\\\
                 \\text{If } n \\geq 2\\text{, we define} \\\\[0.5em]
                 \\det(A) = \\sum_{j=1}^n (-1)^{1+j} A_{1j} \\cdot \\det(\\tilde{A}_{1j})\\text{,} \\\\[0.5em]
                 \\text{where } \\tilde{A}_{1j} \\text{ is the }[[definition 13|minor matrix]]\\text{.} \\\\
                 \\text{We can also write the } \\textbf{cofactor} \\text{ as} \\\\[0.5em]
                 C_{ij} = (-1)^{i+j}\\det(\\tilde{A}_{ij}) \\\\[0.5em]
                 \\text{to get the formula} \\\\[0.5em]
                 \\det(A) = A_{11}C_{11} + A_{12}C_{12} + \\dots + A_{1n}C_{1n}.`,
    examples: [
      {
        title: "Cofactor expansion of a 3 × 3 matrix",
        content: `\\text{Take } A = \\begin{pmatrix} 1 & 3 & -3 \\\\ -3 & -5 & 2 \\\\ -4 & 4 & -6 \\end{pmatrix} \\in M_{3 \\times 3}(\\mathbb{R})\\text{. Then} \\\\
                  \\begin{aligned}
                    C_{11} &= (-1)^{1+1}\\det(\\tilde{A}_{11}) = \\det\\begin{pmatrix} -5 & 2 \\\\ 4 & -6 \\end{pmatrix} \\\\
                    &= 30 - 8 = 22, \\\\
                    C_{12} &= (-1)^{1+2}\\det(\\tilde{A}_{12}) = -\\det\\begin{pmatrix} -3 & 2 \\\\ -4 & -6 \\end{pmatrix} \\\\
                    &= -(18 + 8) = -26, \\\\
                    C_{13} &= (-1)^{1+3}\\det(\\tilde{A}_{13}) = \\det\\begin{pmatrix} -3 & -5 \\\\ -4 & 4 \\end{pmatrix} \\\\
                    &= -12 - 20 = -32.
                  \\end{aligned} \\\\
                  \\text{So} \\\\
                  \\begin{aligned}
                    \\det(A) &= 1(22) + 3(-26) + (-3)(-32) \\\\
                    &= 22 - 78 + 96 \\\\
                    &= 40.
                  \\end{aligned}`,
      },
      {
        title: "Multiply diagonally, then add together (3 × 3 only)",
        content: `\\text{My preferred strategy for } 3 \\times 3 \\text{ matrices is to} \\\\
                  \\text{“multiply diagonally and then add together”:} \\\\
                  \\text{add the products along the three down-right diagonals} \\\\
                  \\text{and subtract the products along the three down-left} \\\\
                  \\text{diagonals (wrapping around).} \\\\[0.5em]
                  \\begin{aligned}
                    &\\det\\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{pmatrix} \\\\
                    &= a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} \\\\
                    &\\quad - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} - a_{13}a_{22}a_{31}.
                  \\end{aligned} \\\\[0.5em]
                  \\text{So} \\\\
                  \\begin{aligned}
                    \\det\\begin{pmatrix} 7 & 2 & 1 \\\\ 0 & 3 & -1 \\\\ -3 & 4 & -2 \\end{pmatrix}
                    &= (-42) + (6) + (0) \\\\
                    &\\quad - (-28) - (0) - (-9) \\\\
                    &= 1.
                  \\end{aligned}`,
      },
    ],
  },
];
