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
  {
    kind: "Theorem",
    number: 1,
    chapter: 1,
    section: 2,
    title: "Cancellation Law for Vector Addition (Thm 1.1)",
    statement: `\\text{If } x, y, z \\in V \\text{ such that } x + z = y + z\\text{, then } x = y.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Vector Space]] \\text{ (VS 2), (VS 3), (VS 4)}`,
      },
      {
        title: "Proof",
        content: `\\exists\\, v \\in V \\text{ s.t. } z + v = 0 \\text{ (VS 4). Thus,} \\\\
                  \\begin{aligned}
                    x &= x + 0 = x + (z + v) = (x + z) + v \\\\
                      &= (y + z) + v = y + (z + v) = y + 0 = y
                  \\end{aligned} \\\\
                  \\text{by (VS 2) and (VS 3).} \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Corollary",
    number: 2,
    chapter: 1,
    section: 2,
    title: "Uniqueness of the Zero Vector (Cor. 1 to Thm 1.1)",
    statement: `0 \\in V \\text{ is unique.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Vector Space]] \\text{ (VS 1), (VS 3)} \\\\
                  \\text{2) } [[theorem 1|Cancellation Law]]`,
      },
      {
        title: "Proof",
        content: `\\text{Suppose } a, b \\in V \\text{ satisfy (VS 3).} \\\\
                  \\text{Then for } x \\in V \\text{ we have } x + a = x = x + b\\text{,} \\\\
                  \\text{so } a + x = b + x \\text{ by (VS 1).} \\\\
                  \\text{Then } [[theorem 1|cancellation law]] \\text{ says } a = b. \\\\
                  \\text{Hence, } 0 \\in V \\text{ is unique.} \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Corollary",
    number: 3,
    chapter: 1,
    section: 2,
    title: "The Additive Inverse is Unique (Cor. 2 to Thm 1.1)",
    statement: `y \\in V \\text{ that satisfy (VS 4) are unique.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Vector Space]] \\text{ (VS 1), (VS 4)} \\\\
                  \\text{2) } [[theorem 1|Cancellation Law]] \\\\
                  \\text{3) } [[theorem 2|Uniqueness of the Zero Vector]]`,
      },
      {
        title: "Proof",
        content: `\\text{Let } x \\in V \\text{ and suppose } a, b \\in V \\text{ satisfy (VS 4) for } x. \\\\
                  \\text{Then we have } x + a = 0 \\text{ and } x + b = 0. \\\\
                  \\text{Since } 0 \\text{ is unique by }[[theorem 2|previous corollary]]\\text{, } x + a = x + b\\text{,} \\\\
                  \\text{so } a + x = b + x \\text{ by (VS 1),} \\\\
                  \\text{and by }[[theorem 1|cancellation law]]\\text{, } a = b. \\\\
                  \\text{Hence, the additive inverse is unique.} \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 4,
    chapter: 1,
    section: 2,
    title: "Properties of Scalar Multiplication (Thm 1.2)",
    statement: `\\text{Let } V \\text{ be a vector space. Then the following are true:} \\\\[0.5em]
                \\text{(a) } 0x = 0 \\ \\ \\forall x \\in V \\\\[0.5em]
                \\text{(b) } (-a)x = -(ax) = a(-x) \\ \\ \\forall a \\in \\mathbb{F} \\text{ and } x \\in V \\\\[0.5em]
                \\text{(c) } a0 = 0 \\ \\ \\forall a \\in \\mathbb{F}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Vector Space]] \\text{ (VS 1), (VS 3), (VS 5), (VS 6), (VS 7), (VS 8)} \\\\
                  \\text{2) } [[theorem 1|Cancellation Law]] \\\\
                  \\text{3) } [[theorem 3|The Additive Inverse is Unique]]`,
      },
      {
        title: "Proof of (a)",
        content: `\\text{Observe} \\\\
                  0x + 0x = (0 + 0)x = 0x = 0x + 0 = 0 + 0x \\\\
                  \\text{by (VS 8), (VS 3), and (VS 1).} \\\\
                  \\text{Hence } 0x = 0 \\text{ by }[[theorem 1|cancellation law]]\\text{.} \\ \\ \\blacksquare`,
      },
      {
        title: "Proof of (b)",
        content: `\\text{Observe} \\\\
                  ax + (-a)x = (a + (-a))x = 0x = 0 \\\\
                  \\text{by (VS 8) and (a).} \\\\
                  \\text{So by }[[theorem 3|Cor. 2 of Theorem 1.1]]\\text{, we must have } (-a)x = -(ax). \\\\
                  \\text{In particular, } (-1)x = -(1x) = -x \\text{ by (VS 5). So,} \\\\
                  a(-x) = a((-1)x) = (a(-1))x = (-a)x \\\\
                  \\text{by (VS 6).} \\\\
                  \\text{Hence } (-a)x = -(ax) = a(-x). \\ \\ \\blacksquare`,
      },
      {
        title: "Proof of (c)",
        content: `\\text{Observe} \\\\
                  a0 + a0 = a(0 + 0) = a0 = a0 + 0 = 0 + a0 \\\\
                  \\text{by (VS 7), (VS 3), and (VS 1).} \\\\
                  \\text{Hence } a0 = 0 \\text{ by }[[theorem 1|cancellation law]]\\text{.} \\\\
                  \\text{(Note how this is practically identical to the proof of (a).)} \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Proposition",
    number: 5,
    chapter: 2,
    section: 1,
    title: "Properties of Linear Transformations (Section 2.1)",
    statement: `\\text{Let } T: V \\to W\\text{. Then the following hold:} \\\\[0.5em]
                \\text{(i) If } T \\text{ is linear, then } T(0) = 0. \\\\[0.5em]
                \\text{(ii) } T \\text{ is linear iff } T(cx + y) = cT(x) + T(y) \\ \\ \\forall x, y \\in V \\text{ and } c \\in \\mathbb{F}. \\\\[0.5em]
                \\text{(iii) If } T \\text{ is linear, then } T(x - y) = T(x) - T(y) \\ \\ \\forall x, y \\in V. \\\\[0.5em]
                \\text{(iv) } T \\text{ is linear iff for all } n \\in \\mathbb{N}\\text{, } x_1, \\dots, x_n \\in V \\text{ and } a_1, \\dots, a_n \\in \\mathbb{F}\\text{, we have} \\\\
                T\\left(\\sum_{i=1}^n a_i x_i\\right) = \\sum_{i=1}^n a_i T(x_i).`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 3|Linear Transformation]] \\text{ (a), (b)} \\\\
                  \\text{2) } [[theorem 1|Cancellation Law]] \\\\
                  \\text{3) } [[theorem 4|Properties of Scalar Multiplication]] \\\\
                  \\text{4) } [[definition 1|Vector Space]] \\text{ (VS 5)}`,
      },
      {
        title: "Proof of (i)",
        content: `\\text{Suppose } T \\text{ is linear. Then} \\\\
                  T(0) = T(0 \\cdot 0) \\overset{(b)}{=} 0 \\cdot T(0) = 0 \\\\
                  \\text{by }[[theorem 4|Theorem 1.2]]\\text{ (a) (applied in } W\\text{).} \\ \\ \\blacksquare`,
      },
      {
        title: "Proof of (ii)",
        content: `(\\Rightarrow) \\text{ Suppose } T \\text{ is linear. Let } x, y \\in V \\text{ and } c \\in \\mathbb{F}\\text{. Then} \\\\
                  T(cx + y) \\overset{(a)}{=} T(cx) + T(y) \\overset{(b)}{=} cT(x) + T(y). \\\\[0.5em]
                  (\\Leftarrow) \\text{ Suppose } T(cx + y) = cT(x) + T(y) \\ \\ \\forall x, y \\in V \\text{ and } c \\in \\mathbb{F}. \\\\
                  \\text{If } c = 1\\text{, then } T(x + y) = T(1x + y) = 1T(x) + T(y) = T(x) + T(y) \\\\
                  \\text{by (VS 5), satisfying (a).} \\\\
                  \\text{If } c = 1 \\text{ and } x = y = 0\\text{, then } T(0) = T(0) + T(0) = T(0) + 0\\text{,} \\\\
                  \\text{so } T(0) = 0 \\text{ by }[[theorem 1|cancellation law]]\\text{.} \\\\
                  \\text{So if } y = 0\\text{, then } T(cx) = cT(x) + T(0) = cT(x)\\text{, satisfying (b).} \\ \\ \\blacksquare`,
      },
      {
        title: "Proof of (iii)",
        content: `\\text{Suppose } T \\text{ is linear. Let } x, y \\in V\\text{. Then} \\\\
                  T(x - y) \\overset{(a)}{=} T(x) + T(-y) \\overset{(b)}{=} T(x) - T(y) \\\\
                  \\text{by }[[theorem 4|Theorem 1.2]]\\text{ (b), since } -y = (-1)y. \\ \\ \\blacksquare`,
      },
      {
        title: "Proof of (iv)",
        content: `(\\Rightarrow) \\text{ Suppose } T \\text{ is linear. Let } x_1, \\dots, x_n \\in V \\text{ and } a_1, \\dots, a_n \\in \\mathbb{F}\\text{. Then} \\\\
                  T\\left(\\sum_{i=1}^n a_i x_i\\right) \\overset{(a)}{=} \\sum_{i=1}^n T(a_i x_i) \\overset{(b)}{=} \\sum_{i=1}^n a_i T(x_i)\\text{,} \\\\
                  \\text{where the first equality applies (a) repeatedly (induction on } n\\text{).} \\\\[0.5em]
                  (\\Leftarrow) \\text{ Suppose for all } n \\in \\mathbb{N}\\text{, } x_1, \\dots, x_n \\in V \\text{ and } a_1, \\dots, a_n \\in \\mathbb{F}\\text{, we have} \\\\
                  T\\left(\\sum_{i=1}^n a_i x_i\\right) = \\sum_{i=1}^n a_i T(x_i). \\\\
                  \\text{If } n = 2 \\text{ and } a_1 = a_2 = 1\\text{, then } T(x_1 + x_2) = T(x_1) + T(x_2) \\\\
                  \\text{by (VS 5), satisfying (a).} \\\\
                  \\text{If } n = 1\\text{, then } T(a_1 x_1) = a_1 T(x_1)\\text{, satisfying (b).} \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 6,
    chapter: 2,
    section: 1,
    title: "Null Space and Range are Subspaces (Thm 2.1)",
    statement: `\\text{Let } V \\text{ and } W \\text{ be vector spaces and } T: V \\to W \\text{ be linear.} \\\\
                \\text{Then } N(T) \\text{ and } R(T) \\text{ are subspaces of } V \\text{ and } W\\text{, respectively.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 2|Subspace]] \\\\
                  \\text{2) } [[definition 3|Linear Transformation]] \\text{ (a), (b)} \\\\
                  \\text{3) } [[definition 4|Null Space and Range]] \\\\
                  \\text{4) } [[theorem 4|Properties of Scalar Multiplication]] \\\\
                  \\text{5) } [[theorem 5|Properties of Linear Transformations]]`,
      },
      {
        title: "Proof",
        content: `\\text{WTS } N(T) \\text{ is a subspace of } V. \\\\
                  \\text{Since } T(0_V) = 0_W \\text{ by }[[theorem 5|Proposition 5]]\\text{ (i), we have } 0_V \\in N(T). \\\\
                  \\text{Let } x, y \\in N(T) \\text{ and } c \\in \\mathbb{F}\\text{. Then} \\\\
                  \\begin{aligned}
                    T(x + y) &\\overset{(a)}{=} T(x) + T(y) = 0_W + 0_W = 0_W, \\\\
                    T(cx) &\\overset{(b)}{=} cT(x) = c0_W = 0_W
                  \\end{aligned} \\\\
                  \\text{by (VS 3) and }[[theorem 4|Theorem 1.2]]\\text{ (c).} \\\\
                  \\text{Hence, } x + y \\in N(T) \\text{ and } cx \\in N(T)\\text{, so } N(T) \\text{ is a subspace of } V \\\\
                  \\text{by Theorem 1.3.} \\\\[0.5em]
                  \\text{Now WTS } R(T) \\text{ is a subspace of } W. \\\\
                  \\text{Since } T(0_V) = 0_W\\text{, we have } 0_W \\in R(T). \\\\
                  \\text{Now let } x, y \\in R(T) \\text{ and } c \\in \\mathbb{F}\\text{. Then } \\exists\\, v, w \\in V \\text{ s.t. } T(v) = x \\text{ and } T(w) = y\\text{. So} \\\\
                  \\begin{aligned}
                    T(v + w) &\\overset{(a)}{=} T(v) + T(w) = x + y, \\\\
                    T(cv) &\\overset{(b)}{=} cT(v) = cx.
                  \\end{aligned} \\\\
                  \\text{Since } v + w,\\ cv \\in V\\text{, we have } x + y \\in R(T) \\text{ and } cx \\in R(T). \\\\
                  \\text{Hence, } R(T) \\text{ is a subspace of } W \\text{ by Theorem 1.3.} \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 7,
    chapter: 2,
    section: 1,
    title: "The Range is Spanned by the Image of a Basis (Thm 2.2)",
    statement: `\\text{Let } V \\text{ and } W \\text{ be vector spaces and } T: V \\to W \\text{ be linear.} \\\\
                \\text{If } \\beta = \\{v_1, \\dots, v_n\\} \\text{ is a basis for } V\\text{, then} \\\\[0.5em]
                R(T) = \\operatorname{span}(T(\\beta)) = \\operatorname{span}(\\{T(v_1), \\dots, T(v_n)\\}).`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 4|Null Space and Range]] \\\\
                  \\text{2) } [[theorem 5|Properties of Linear Transformations]] \\\\
                  \\text{3) } [[theorem 6|Null Space and Range are Subspaces]]`,
      },
      {
        title: "Proof",
        content: `\\text{By def of }[[definition 4|range]]\\text{, } T(v_i) \\in R(T) \\ \\ \\forall i \\in \\{1, \\dots, n\\}. \\\\
                  \\text{Because } R(T) \\text{ is a subspace (}[[theorem 6|Theorem 2.1]]\\text{),} \\\\
                  \\operatorname{span}(T(\\beta)) = \\operatorname{span}(\\{T(v_1), \\dots, T(v_n)\\}) \\subseteq R(T) \\\\
                  \\text{by Theorem 1.5.} \\\\[0.5em]
                  \\text{Now suppose } w \\in R(T)\\text{. Then } w = T(v) \\text{ for some } v \\in V. \\\\
                  \\text{Because } \\beta \\text{ is a basis for } V\\text{, we have } v = \\sum_{i=1}^n a_i v_i \\text{ for some } a_1, \\dots, a_n \\in \\mathbb{F}. \\\\
                  \\text{Since } T \\text{ is linear, by }[[theorem 5|Proposition 5]]\\text{ (iv),} \\\\
                  w = T(v) = \\sum_{i=1}^n a_i T(v_i) \\in \\operatorname{span}(T(\\beta)). \\\\
                  \\text{So } R(T) \\subseteq \\operatorname{span}(\\{T(v_1), \\dots, T(v_n)\\}) = \\operatorname{span}(T(\\beta)). \\\\[0.5em]
                  \\text{Hence, } R(T) = \\operatorname{span}(T(\\beta)). \\ \\ \\blacksquare`,
      },
    ],
    examples: [
      {
        title: "Bases for the range and null space",
        content: `\\text{Define } T: P_2(\\mathbb{R}) \\to M_{2 \\times 2}(\\mathbb{R}) \\text{ by} \\\\
                  T(f(x)) = \\begin{pmatrix} f(1) - f(2) & 0 \\\\ 0 & f(0) \\end{pmatrix}. \\\\[0.5em]
                  \\text{Find a basis for the range of } T. \\\\
                  \\text{Since } \\beta = \\{1, x, x^2\\} \\text{ is a basis for } P_2(\\mathbb{R})\\text{, by }[[theorem 7|Theorem 2.2]]\\text{ we have} \\\\
                  \\begin{aligned}
                    R(T) &= \\operatorname{span}(T(\\beta)) = \\operatorname{span}(\\{T(1), T(x), T(x^2)\\}) \\\\
                    &= \\operatorname{span}\\left(\\left\\{ \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}, \\begin{pmatrix} -1 & 0 \\\\ 0 & 0 \\end{pmatrix}, \\begin{pmatrix} -3 & 0 \\\\ 0 & 0 \\end{pmatrix} \\right\\}\\right) \\\\
                    &= \\operatorname{span}\\left(\\left\\{ \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}, \\begin{pmatrix} -1 & 0 \\\\ 0 & 0 \\end{pmatrix} \\right\\}\\right)\\text{,}
                  \\end{aligned} \\\\
                  \\text{since } T(x^2) = 3T(x)\\text{. These two matrices are linearly independent, so} \\\\
                  \\left\\{ \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}, \\begin{pmatrix} -1 & 0 \\\\ 0 & 0 \\end{pmatrix} \\right\\} \\text{ is a basis for } R(T)\\text{, and } \\dim R(T) = 2. \\\\[1em]
                  \\text{Now we want to find a basis for } N(T)\\text{. Note} \\\\
                  f(x) \\in N(T) \\text{ iff } \\begin{pmatrix} f(1) - f(2) & 0 \\\\ 0 & f(0) \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}. \\\\[0.5em]
                  \\text{Let } f(x) = a + bx + cx^2\\text{. Then} \\\\
                  \\begin{aligned}
                    0 &= f(1) - f(2) = (a + b + c) - (a + 2b + 4c) = -b - 3c \\implies b = -3c, \\\\
                    0 &= f(0) = a.
                  \\end{aligned} \\\\
                  \\text{Hence } f(x) = a + bx + cx^2 = -3cx + cx^2 = c(-3x + x^2)\\text{,} \\\\
                  \\text{so } N(T) = \\operatorname{span}(\\{-3x + x^2\\})\\text{. Since } {-3x + x^2} \\neq 0\\text{, this set is linearly independent.} \\\\
                  \\text{Therefore } \\{-3x + x^2\\} \\text{ is a basis for } N(T)\\text{, and } \\dim N(T) = 1.`,
      },
    ],
  },
];
