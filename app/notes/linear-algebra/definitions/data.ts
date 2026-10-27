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
    chapter: 2,
    section: 1,
    term: "Linear Transformation",
    definition: `\\text{Let } V \\text{ and } W \\text{ be vector spaces over } \\mathbb{F}\\text{.} \\\\
                 T: V \\to W \\text{ is } \\textbf{linear} \\text{ if } \\forall x, y \\in V \\text{ and } c \\in \\mathbb{F}\\text{,} \\\\[1em]
                 \\begin{array}{ll}
                   \\htmlId{lt-a}{\\text{(a)}} & T(x + y) = T(x) + T(y) \\\\[0.6em]
                   \\htmlId{lt-b}{\\text{(b)}} & T(cx) = cT(x)
                 \\end{array}`,
  },
  {
    number: 6,
    chapter: 2,
    section: 1,
    term: "Null Space and Range",
    definition: `\\text{Let } V \\text{ and } W \\text{ be vector spaces and } T: V \\to W \\text{ be linear.} \\\\[1em]
                 \\begin{array}{ll}
                   \\text{(a)} & \\text{The } \\textbf{null space} \\text{ (}\\textbf{kernel}\\text{) of } T \\text{ is } N(T) = \\{x \\in V : T(x) = 0\\}. \\\\[0.6em]
                   \\text{(b)} & \\text{The } \\textbf{range} \\text{ (}\\textbf{image}\\text{) of } T \\text{ is } R(T) = \\{T(x) : x \\in V\\}.
                 \\end{array}`,
  },
];
