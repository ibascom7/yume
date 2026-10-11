import type { ChapterRef } from "@/app/components/notesFilter";

interface Definition extends ChapterRef {
  number: number;
  term: string;
  definition: string;
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
    definition: `W \\subseteq V \\text{ is a } \\textbf{subspace} \\text{ of } V \\text{ if } W \\text{ is a vector space over } \\mathbb{F} \\\\
                 \\text{with the operations of addition and scalar} \\\\
                 \\text{multiplication defined on } V. \\\\[0.5em]
                 \\text{Equivalently, } W \\text{ is a subspace of } V \\text{ iff the following hold:} \\\\[1em]
                 \\begin{array}{ll}
                   \\text{(a)} & \\text{(Closed under addition)} \\\\
                               & x + y \\in W \\text{ whenever } x \\in W \\text{ and } y \\in W \\\\[0.6em]
                   \\text{(b)} & \\text{(Closed under scalar multiplication)} \\\\
                               & cx \\in W \\text{ whenever } c \\in \\mathbb{F} \\text{ and } x \\in W \\\\[0.6em]
                   \\text{(c)} & 0 \\in W \\\\[0.6em]
                   \\text{(d)} & \\text{Each vector in } W \\text{ has an additive inverse in } W
                 \\end{array}`,
  },
];
