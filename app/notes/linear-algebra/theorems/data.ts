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
    kind: "Theorem",
    number: 5,
    chapter: 1,
    section: 3,
    title: "Subspace Test (Thm 1.3)",
    statement: `\\text{Let } V \\text{ be a vector space and } W \\subseteq V\\text{.} \\\\
                \\text{Then } W \\text{ is a subspace of } V \\text{ iff the following hold:} \\\\[0.5em]
                \\text{(i) } 0 \\in W. \\\\[0.5em]
                \\text{(ii) } x + y \\in W \\text{ whenever } x \\in W \\text{ and } y \\in W. \\\\[0.5em]
                \\text{(iii) } cx \\in W \\text{ whenever } x \\in W \\text{ and } c \\in \\mathbb{F}.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Vector Space]] \\text{ (VS 1), (VS 3), (VS 5), (VS 8)} \\\\
                  \\text{2) } [[definition 2|Subspace]] \\\\
                  \\text{3) } [[theorem 1|Cancellation Law]] \\\\
                  \\text{4) } [[theorem 4|Properties of Scalar Multiplication]]`,
      },
      {
        title: "Proof",
        content: `(\\Rightarrow) \\text{ Suppose } W \\text{ is a subspace of } V. \\\\
                  \\text{WTS (ii). By def of }[[definition 2|subspace]]\\text{, } W \\text{ is closed under addition.} \\\\
                  \\text{WTS (iii). By def of }[[definition 2|subspace]]\\text{, } W \\text{ is closed} \\\\
                  \\text{under scalar multiplication.} \\\\
                  \\text{WTS (i). By def of }[[definition 2|subspace]]\\text{,} \\\\
                  \\exists\\, 0_W \\in W \\text{ s.t. } \\forall x \\in W\\text{, } 0_W + x = x. \\\\
                  \\text{But } 0_V + x = x \\text{ by (VS 3) and (VS 1).} \\\\
                  \\text{Thus, taking any } x \\in W \\text{ (e.g. } x = 0_W\\text{),} \\\\
                  0_W = 0_V \\text{ by }[[theorem 1|cancellation law]]\\text{.} \\\\[0.5em]
                  (\\Leftarrow) \\text{ Suppose (i), (ii), (iii) hold.} \\\\
                  \\text{Immediately, (a), (b), and (c) of }[[definition 2|subspace]]\\text{ are satisfied,} \\\\
                  \\text{with } 0_W = 0_V \\text{ for (c).} \\\\
                  \\text{WTS (d). That is, WTS } \\forall x \\in W\\text{, } \\exists\\, (-x) \\in W. \\\\
                  \\text{Let } x \\in W\\text{. Since } W \\text{ is closed under scalar} \\\\
                  \\text{multiplication, } (-1) \\cdot x \\in W\\text{, and since } W \\text{ is} \\\\
                  \\text{closed under addition, } x + (-1) \\cdot x \\in W\\text{. But} \\\\
                  x + (-1) \\cdot x = (1 + (-1)) \\cdot x = 0 \\cdot x = 0 \\\\
                  \\text{by (VS 5), (VS 8), and }[[theorem 4|Theorem 1.2]]\\text{ (a).} \\\\
                  \\text{Hence } -x = (-1) \\cdot x \\in W. \\ \\ \\blacksquare`,
      },
    ],
    examples: [
      {
        title: "Pₙ(𝔽) is a subspace of P(𝔽)",
        content: `\\text{Let } P_n(\\mathbb{F}) = \\{\\text{polynomials with degree} \\leq n\\} \\text{ with } n \\in \\mathbb{N}\\text{.} \\\\
                  \\text{Show } P_n(\\mathbb{F}) \\text{ is a subspace of } P(\\mathbb{F})\\text{.} \\\\[1em]
                  \\textit{Proof.} \\\\
                  \\text{WTS (i): } 0 \\in P_n(\\mathbb{F}). \\\\
                  \\text{Note } 0 \\in P(\\mathbb{F}) \\text{ has degree } -1 \\leq n \\text{ whenever } n \\in \\mathbb{N}\\text{. So } 0 \\in P_n(\\mathbb{F}). \\\\[0.5em]
                  \\text{WTS (ii): } \\forall f, g \\in P_n(\\mathbb{F})\\text{, } f(x) + g(x) \\in P_n(\\mathbb{F}). \\\\
                  \\text{We can write} \\\\
                  \\begin{aligned}
                    f(x) &= a_0 x^0 + a_1 x^1 + \\dots + a_n x^n, \\\\
                    g(x) &= b_0 x^0 + b_1 x^1 + \\dots + b_n x^n,
                  \\end{aligned} \\\\
                  \\text{where some of the coefficients may be } 0\\text{. So} \\\\
                  f(x) + g(x) = (a_0 + b_0)x^0 + (a_1 + b_1)x^1 + \\dots + (a_n + b_n)x^n\\text{,} \\\\
                  \\text{and } \\deg(f(x) + g(x)) \\leq n\\text{. Hence } f(x) + g(x) \\in P_n(\\mathbb{F}). \\\\[0.5em]
                  \\text{WTS (iii): } \\forall f \\in P_n(\\mathbb{F}) \\text{ and } c \\in \\mathbb{F}\\text{, } cf(x) \\in P_n(\\mathbb{F}). \\\\
                  \\text{We can write} \\\\
                  \\begin{aligned}
                    cf(x) &= c(a_0 + a_1 x^1 + \\dots + a_n x^n) \\\\
                          &= ca_0 + ca_1 x^1 + \\dots + ca_n x^n.
                  \\end{aligned} \\\\
                  \\text{So } \\deg(cf(x)) \\leq n\\text{. Hence } cf(x) \\in P_n(\\mathbb{F}). \\\\[0.5em]
                  \\text{By }[[theorem 5|Theorem 1.3]]\\text{, } P_n(\\mathbb{F}) \\text{ is a subspace of } P(\\mathbb{F}). \\ \\ \\blacksquare`,
      },
      {
        title: "Subspaces of ℝ²?",
        content: `\\text{Test conditions (i), (ii), (iii) on some subsets } W \\subseteq \\mathbb{R}^2.`,
        widget: "subspace-test",
      },
    ],
  },
  {
    kind: "Theorem",
    number: 6,
    chapter: 1,
    section: 3,
    title: "Intersection of Subspaces is a Subspace (Thm 1.4)",
    statement: `\\text{Any intersection of subspaces of a vector space } V \\\\
                \\text{is a subspace of } V.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 2|Subspace]] \\\\
                  \\text{2) } [[theorem 5|Subspace Test]]`,
      },
      {
        title: "Proof",
        content: `\\text{Let } S = \\{W \\subseteq V : W \\text{ is a subspace of } V\\}\\text{,} \\\\
                  \\text{and let } \\{W_i : i \\in I\\} \\subseteq S \\text{ with } I \\neq \\varnothing. \\\\
                  \\text{Since every subspace contains } 0 \\text{ (}[[theorem 5|Theorem 1.3]]\\text{),} \\\\
                  0 \\in \\bigcap_{i \\in I} W_i. \\\\
                  \\text{WTS } \\bigcap_{i \\in I} W_i \\text{ is closed under addition} \\\\
                  \\text{and scalar multiplication.} \\\\
                  \\text{Let } x, y \\in \\bigcap_{i \\in I} W_i \\text{ and } c \\in \\mathbb{F}\\text{.} \\\\
                  \\text{Then } x, y \\in W_i \\ \\ \\forall i \\in I. \\\\
                  \\text{Because every } W_i \\text{ is closed under addition} \\\\
                  \\text{and scalar multiplication,} \\\\
                  x + y \\in W_i \\text{ and } cx \\in W_i \\ \\ \\forall i \\in I. \\\\
                  \\text{Thus } x + y \\in \\bigcap_{i \\in I} W_i \\text{ and } cx \\in \\bigcap_{i \\in I} W_i. \\\\
                  \\text{By }[[theorem 5|Theorem 1.3]]\\text{, } \\bigcap_{i \\in I} W_i \\text{ is a subspace of } V. \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 7,
    chapter: 1,
    section: 4,
    title: "The Span is the Smallest Subspace Containing S (Thm 1.5)",
    statement: `\\text{Let } S \\subseteq V\\text{. Then } \\operatorname{span}(S) \\text{ is a subspace of } V \\\\
                \\text{that contains } S\\text{.} \\\\[0.5em]
                \\text{Moreover, any subspace of } V \\text{ that contains } S \\\\
                \\text{must also contain } \\operatorname{span}(S)\\text{.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Vector Space]] \\text{ (VS 5)} \\\\
                  \\text{2) } [[definition 2|Subspace]] \\\\
                  \\text{3) } [[definition 5|Linear Combination]] \\\\
                  \\text{4) } [[definition 6|Span]] \\\\
                  \\text{5) } [[theorem 4|Properties of Scalar Multiplication]] \\\\
                  \\text{6) } [[theorem 5|Subspace Test]]`,
      },
      {
        title: "Proof",
        content: `\\text{If } S = \\varnothing\\text{, then } \\operatorname{span}(S) = \\{0\\} \\text{ by def, which is a} \\\\
                  \\text{subspace of } V \\text{ that contains } S \\text{ and is contained} \\\\
                  \\text{in any subspace of } V \\text{ (each contains } 0 \\text{ by }[[theorem 5|Theorem 1.3]]\\text{).} \\\\[0.5em]
                  \\text{Now suppose } S \\neq \\varnothing \\text{ and let } z \\in S. \\\\
                  \\text{WTS } \\operatorname{span}(S) \\text{ is a subspace of } V. \\\\
                  \\text{Let } x, y \\in \\operatorname{span}(S)\\text{. Then } \\exists\\, u_1, \\dots, u_m, v_1, \\dots, v_n \\in S \\\\
                  \\text{and } a_1, \\dots, a_m, b_1, \\dots, b_n \\in \\mathbb{F} \\text{ s.t.} \\\\
                  \\begin{aligned}
                    x &= a_1 u_1 + \\dots + a_m u_m, \\\\
                    y &= b_1 v_1 + \\dots + b_n v_n.
                  \\end{aligned} \\\\
                  \\text{Then} \\\\
                  x + y = a_1 u_1 + \\dots + a_m u_m + b_1 v_1 + \\dots + b_n v_n\\text{,} \\\\
                  \\text{so } x + y \\in \\operatorname{span}(S). \\\\
                  \\text{Let } c \\in \\mathbb{F}\\text{. Then} \\\\
                  cx = (ca_1)u_1 + \\dots + (ca_m)u_m\\text{,} \\\\
                  \\text{so } cx \\in \\operatorname{span}(S). \\\\
                  \\text{Finally, } 0z = 0 \\text{ by }[[theorem 4|Theorem 1.2]]\\text{ (a), so } 0 \\in \\operatorname{span}(S). \\\\
                  \\text{Thus } \\operatorname{span}(S) \\text{ is a subspace of } V \\text{ by }[[theorem 5|Theorem 1.3]]\\text{.} \\\\[0.5em]
                  \\text{Furthermore, if } v \\in S\\text{, then } v = 1 \\cdot v \\in \\operatorname{span}(S) \\\\
                  \\text{by (VS 5), so } S \\subseteq \\operatorname{span}(S). \\\\[0.5em]
                  \\text{Now WTS any subspace } W \\text{ of } V \\text{ where } S \\subseteq W \\\\
                  \\text{also satisfies } \\operatorname{span}(S) \\subseteq W. \\\\
                  \\text{Let } w \\in \\operatorname{span}(S)\\text{. Then } \\exists\\, w_1, \\dots, w_k \\in S \\\\
                  \\text{and } c_1, \\dots, c_k \\in \\mathbb{F} \\text{ s.t. } w = c_1 w_1 + \\dots + c_k w_k. \\\\
                  \\text{Since } S \\subseteq W\\text{, } w_1, \\dots, w_k \\in W. \\\\
                  \\text{Since } W \\text{ is closed under addition and scalar} \\\\
                  \\text{multiplication, } c_1 w_1 + \\dots + c_k w_k = w \\in W. \\\\
                  \\text{Since our choice of } w \\in \\operatorname{span}(S) \\text{ was arbitrary,} \\\\
                  \\text{it follows that } \\operatorname{span}(S) \\subseteq W. \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Proposition",
    number: 8,
    chapter: 1,
    section: 5,
    title: "Basic Facts about Linear Independence (Section 1.5)",
    statement: `\\text{Let } V \\text{ be a vector space. Then the following hold:} \\\\[0.5em]
                \\text{(i) } \\varnothing \\text{ is linearly independent.} \\\\[0.5em]
                \\text{(ii) If } S = \\{v\\} \\subseteq V \\text{ with } v \\neq 0\\text{,} \\\\
                \\qquad \\text{then } S \\text{ is linearly independent.} \\\\[0.5em]
                \\text{(iii) } S \\subseteq V \\text{ is linearly independent iff} \\\\
                \\qquad \\text{for all distinct } u_1, \\dots, u_n \\in S \\text{ and } a_1, \\dots, a_n \\in \\mathbb{F}\\text{,} \\\\
                \\qquad a_1 u_1 + \\dots + a_n u_n = 0 \\implies a_1 = \\dots = a_n = 0.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Vector Space]] \\text{ (VS 5), (VS 6)} \\\\
                  \\text{2) } [[definition 8|Linear Dependence]] \\\\
                  \\text{3) } [[definition 9|Linear Independence]] \\\\
                  \\text{4) } [[theorem 4|Properties of Scalar Multiplication]]`,
      },
      {
        title: "Proof of (i)",
        content: `\\nexists\\, u \\in \\varnothing\\text{, so } \\varnothing \\text{ is not linearly dependent.} \\\\
                  \\text{Therefore } \\varnothing \\text{ is linearly independent.} \\ \\ \\blacksquare`,
      },
      {
        title: "Proof of (ii)",
        content: `\\text{BWOC suppose } S = \\{v\\} \\subseteq V \\text{ with } v \\neq 0 \\\\
                  \\text{is linearly dependent.} \\\\
                  \\text{Then } \\exists\\, a \\in \\mathbb{F} \\text{ nonzero s.t. } av = 0\\text{. But} \\\\
                  v = 1v = (a^{-1}a)v = a^{-1}(av) = a^{-1}0 = 0 \\\\
                  \\text{by (VS 5), (VS 6), and }[[theorem 4|Theorem 1.2]]\\text{ (c),} \\\\
                  \\text{which contradicts } v \\neq 0. \\ \\ \\blacksquare`,
      },
      {
        title: "Proof of (iii)",
        content: `S \\subseteq V \\text{ is linearly independent} \\\\
                  \\text{iff } S \\text{ is not linearly dependent} \\\\
                  \\text{iff } \\nexists \\text{ distinct } u_1, \\dots, u_n \\in S \\text{ and } a_1, \\dots, a_n \\in \\mathbb{F} \\\\
                  \\qquad \\text{with some } a_i \\neq 0 \\text{ s.t. } a_1 u_1 + \\dots + a_n u_n = 0 \\\\
                  \\text{iff for all distinct } u_1, \\dots, u_n \\in S \\text{ and } a_1, \\dots, a_n \\in \\mathbb{F}\\text{,} \\\\
                  \\qquad a_1 u_1 + \\dots + a_n u_n = 0 \\implies a_1 = \\dots = a_n = 0. \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Proposition",
    number: 9,
    chapter: 2,
    section: 1,
    title: "Properties of Linear Transformations (Section 2.1)",
    statement: `\\text{Let } T: V \\to W\\text{. Then the following hold:} \\\\[0.5em]
                \\text{(i) If } T \\text{ is linear, then } T(0) = 0. \\\\[0.5em]
                \\text{(ii) } T \\text{ is linear iff} \\\\
                \\qquad T(cx + y) = cT(x) + T(y) \\ \\ \\forall x, y \\in V \\text{ and } c \\in \\mathbb{F}. \\\\[0.5em]
                \\text{(iii) If } T \\text{ is linear, then} \\\\
                \\qquad T(x - y) = T(x) - T(y) \\ \\ \\forall x, y \\in V. \\\\[0.5em]
                \\text{(iv) } T \\text{ is linear iff for all } n \\in \\mathbb{N}\\text{,} \\\\
                \\qquad x_1, \\dots, x_n \\in V \\text{ and } a_1, \\dots, a_n \\in \\mathbb{F}\\text{, we have} \\\\
                \\qquad T\\left(\\sum_{i=1}^n a_i x_i\\right) = \\sum_{i=1}^n a_i T(x_i).`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 10|Linear Transformation]] \\text{ [[LT a]], [[LT b]]} \\\\
                  \\text{2) } [[theorem 1|Cancellation Law]] \\\\
                  \\text{3) } [[theorem 4|Properties of Scalar Multiplication]] \\\\
                  \\text{4) } [[definition 1|Vector Space]] \\text{ (VS 5)}`,
      },
      {
        title: "Proof of (i)",
        content: `\\text{Suppose } T \\text{ is linear. Then} \\\\
                  T(0) = T(0 \\cdot 0) \\overset{[[LT b]]}{=} 0 \\cdot T(0) = 0 \\\\
                  \\text{by }[[theorem 4|Theorem 1.2]]\\text{ (a) (applied in } W\\text{).} \\ \\ \\blacksquare`,
      },
      {
        title: "Proof of (ii)",
        content: `(\\Rightarrow) \\text{ Suppose } T \\text{ is linear.} \\\\
                  \\text{Let } x, y \\in V \\text{ and } c \\in \\mathbb{F}\\text{. Then} \\\\
                  T(cx + y) \\overset{[[LT a]]}{=} T(cx) + T(y) \\overset{[[LT b]]}{=} cT(x) + T(y). \\\\[0.5em]
                  (\\Leftarrow) \\text{ Suppose } T(cx + y) = cT(x) + T(y) \\\\
                  \\forall x, y \\in V \\text{ and } c \\in \\mathbb{F}. \\\\
                  \\text{If } c = 1\\text{, then} \\\\
                  T(x + y) = T(1x + y) = 1T(x) + T(y) = T(x) + T(y) \\\\
                  \\text{by (VS 5), satisfying [[LT a]].} \\\\
                  \\text{If } c = 1 \\text{ and } x = y = 0\\text{, then} \\\\
                  T(0) = T(0) + T(0) = T(0) + 0\\text{,} \\\\
                  \\text{so } T(0) = 0 \\text{ by }[[theorem 1|cancellation law]]\\text{.} \\\\
                  \\text{So if } y = 0\\text{, then } T(cx) = cT(x) + T(0) = cT(x)\\text{,} \\\\
                  \\text{satisfying [[LT b]].} \\ \\ \\blacksquare`,
      },
      {
        title: "Proof of (iii)",
        content: `\\text{Suppose } T \\text{ is linear. Let } x, y \\in V\\text{. Then} \\\\
                  T(x - y) \\overset{[[LT a]]}{=} T(x) + T(-y) \\overset{[[LT b]]}{=} T(x) - T(y) \\\\
                  \\text{by }[[theorem 4|Theorem 1.2]]\\text{ (b), since } -y = (-1)y. \\ \\ \\blacksquare`,
      },
      {
        title: "Proof of (iv)",
        content: `(\\Rightarrow) \\text{ Suppose } T \\text{ is linear.} \\\\
                  \\text{Let } x_1, \\dots, x_n \\in V \\text{ and } a_1, \\dots, a_n \\in \\mathbb{F}\\text{. Then} \\\\
                  \\begin{aligned}
                    T\\left(\\sum_{i=1}^n a_i x_i\\right) &\\overset{[[LT a]]}{=} \\sum_{i=1}^n T(a_i x_i) \\\\
                    &\\overset{[[LT b]]}{=} \\sum_{i=1}^n a_i T(x_i)\\text{,}
                  \\end{aligned} \\\\
                  \\text{where the first equality applies [[LT a]] repeatedly} \\\\
                  \\text{(induction on } n\\text{).} \\\\[0.5em]
                  (\\Leftarrow) \\text{ Suppose for all } n \\in \\mathbb{N}\\text{, } x_1, \\dots, x_n \\in V \\\\
                  \\text{and } a_1, \\dots, a_n \\in \\mathbb{F}\\text{, we have} \\\\
                  T\\left(\\sum_{i=1}^n a_i x_i\\right) = \\sum_{i=1}^n a_i T(x_i). \\\\
                  \\text{If } n = 2 \\text{ and } a_1 = a_2 = 1\\text{, then} \\\\
                  T(x_1 + x_2) = T(x_1) + T(x_2) \\\\
                  \\text{by (VS 5), satisfying [[LT a]].} \\\\
                  \\text{If } n = 1\\text{, then } T(a_1 x_1) = a_1 T(x_1)\\text{, satisfying [[LT b]].} \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 10,
    chapter: 2,
    section: 1,
    title: "Null Space and Range are Subspaces (Thm 2.1)",
    statement: `\\text{Let } V \\text{ and } W \\text{ be vector spaces} \\\\
                \\text{and } T: V \\to W \\text{ be linear.} \\\\
                \\text{Then } N(T) \\text{ and } R(T) \\text{ are subspaces} \\\\
                \\text{of } V \\text{ and } W\\text{, respectively.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 2|Subspace]] \\\\
                  \\text{2) } [[definition 10|Linear Transformation]] \\text{ [[LT a]], [[LT b]]} \\\\
                  \\text{3) } [[definition 11|Null Space and Range]] \\\\
                  \\text{4) } [[theorem 4|Properties of Scalar Multiplication]] \\\\
                  \\text{5) } [[theorem 9|Properties of Linear Transformations]] \\\\
                  \\text{6) } [[theorem 5|Subspace Test]]`,
      },
      {
        title: "Proof",
        content: `\\text{WTS } N(T) \\text{ is a subspace of } V. \\\\
                  \\text{Since } T(0_V) = 0_W \\text{ by }[[theorem 9|Proposition 9]]\\text{ (i),} \\\\
                  \\text{we have } 0_V \\in N(T). \\\\
                  \\text{Let } x, y \\in N(T) \\text{ and } c \\in \\mathbb{F}\\text{. Then} \\\\
                  \\begin{aligned}
                    T(x + y) &\\overset{[[LT a]]}{=} T(x) + T(y) = 0_W + 0_W = 0_W, \\\\
                    T(cx) &\\overset{[[LT b]]}{=} cT(x) = c0_W = 0_W
                  \\end{aligned} \\\\
                  \\text{by (VS 3) and }[[theorem 4|Theorem 1.2]]\\text{ (c).} \\\\
                  \\text{Hence, } x + y \\in N(T) \\text{ and } cx \\in N(T)\\text{,} \\\\
                  \\text{so } N(T) \\text{ is a subspace of } V \\text{ by }[[theorem 5|Theorem 1.3]]\\text{.} \\\\[0.5em]
                  \\text{Now WTS } R(T) \\text{ is a subspace of } W. \\\\
                  \\text{Since } T(0_V) = 0_W\\text{, we have } 0_W \\in R(T). \\\\
                  \\text{Now let } x, y \\in R(T) \\text{ and } c \\in \\mathbb{F}\\text{.} \\\\
                  \\text{Then } \\exists\\, v, w \\in V \\text{ s.t. } T(v) = x \\text{ and } T(w) = y\\text{. So} \\\\
                  \\begin{aligned}
                    T(v + w) &\\overset{[[LT a]]}{=} T(v) + T(w) = x + y, \\\\
                    T(cv) &\\overset{[[LT b]]}{=} cT(v) = cx.
                  \\end{aligned} \\\\
                  \\text{Since } v + w,\\ cv \\in V\\text{,} \\\\
                  \\text{we have } x + y \\in R(T) \\text{ and } cx \\in R(T). \\\\
                  \\text{Hence, } R(T) \\text{ is a subspace of } W\\\\
                  \\text{by }[[theorem 5|Theorem 1.3]]\\text{.} \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 11,
    chapter: 2,
    section: 1,
    title: "The Range is Spanned by the Image of a Basis (Thm 2.2)",
    statement: `\\text{Let } V \\text{ and } W \\text{ be vector spaces} \\\\
                \\text{and } T: V \\to W \\text{ be linear.} \\\\
                \\text{If } \\beta = \\{v_1, \\dots, v_n\\} \\text{ is a basis for } V\\text{, then} \\\\[0.5em]
                R(T) = \\operatorname{span}(T(\\beta)) = \\operatorname{span}(\\{T(v_1), \\dots, T(v_n)\\}).`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 11|Null Space and Range]] \\\\
                  \\text{2) } [[theorem 9|Properties of Linear Transformations]] \\\\
                  \\text{3) } [[theorem 10|Null Space and Range are Subspaces]] \\\\
                  \\text{4) } [[theorem 7|The Span is the Smallest Subspace Containing S]]`,
      },
      {
        title: "Proof",
        content: `\\text{By def of }[[definition 11|range]]\\text{, } T(v_i) \\in R(T) \\ \\ \\forall i \\in \\{1, \\dots, n\\}. \\\\
                  \\text{Because } R(T) \\text{ is a subspace (}[[theorem 10|Theorem 2.1]]\\text{),} \\\\
                  \\operatorname{span}(T(\\beta)) = \\operatorname{span}(\\{T(v_1), \\dots, T(v_n)\\}) \\subseteq R(T) \\\\
                  \\text{by }[[theorem 7|Theorem 1.5]]\\text{.} \\\\[0.5em]
                  \\text{Now suppose } w \\in R(T)\\text{. Then } w = T(v) \\text{ for some } v \\in V. \\\\
                  \\text{Because } \\beta \\text{ is a basis for } V\\text{, we have} \\\\
                  v = \\sum_{i=1}^n a_i v_i \\text{ for some } a_1, \\dots, a_n \\in \\mathbb{F}. \\\\
                  \\text{Since } T \\text{ is linear, by }[[theorem 9|Proposition 9]]\\text{ (iv),} \\\\
                  w = T(v) = \\sum_{i=1}^n a_i T(v_i) \\in \\operatorname{span}(T(\\beta)). \\\\
                  \\text{So } R(T) \\subseteq \\operatorname{span}(\\{T(v_1), \\dots, T(v_n)\\}) \\\\
                  \\phantom{\\text{So } R(T)} = \\operatorname{span}(T(\\beta)). \\\\[0.5em]
                  \\text{Hence, } R(T) = \\operatorname{span}(T(\\beta)). \\ \\ \\blacksquare`,
      },
    ],
    examples: [
      {
        title: "Bases for the range and null space",
        content: `\\text{Define } T: P_2(\\mathbb{R}) \\to M_{2 \\times 2}(\\mathbb{R}) \\text{ by} \\\\
                  T(f(x)) = \\begin{pmatrix} f(1) - f(2) & 0 \\\\ 0 & f(0) \\end{pmatrix}. \\\\[0.5em]
                  \\text{Find a basis for the range of } T. \\\\
                  \\text{Since } \\beta = \\{1, x, x^2\\} \\text{ is a basis for } P_2(\\mathbb{R})\\text{,} \\\\
                  \\text{by }[[theorem 11|Theorem 2.2]]\\text{ we have} \\\\
                  \\begin{aligned}
                    R(T) &= \\operatorname{span}(T(\\beta)) \\\\
                    &= \\operatorname{span}(\\{T(1), T(x), T(x^2)\\}) \\\\
                    &= \\operatorname{span}\\left(\\left\\{ \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}, \\begin{pmatrix} -1 & 0 \\\\ 0 & 0 \\end{pmatrix}, \\begin{pmatrix} -3 & 0 \\\\ 0 & 0 \\end{pmatrix} \\right\\}\\right) \\\\
                    &= \\operatorname{span}\\left(\\left\\{ \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}, \\begin{pmatrix} -1 & 0 \\\\ 0 & 0 \\end{pmatrix} \\right\\}\\right)\\text{,}
                  \\end{aligned} \\\\
                  \\text{since } T(x^2) = 3T(x)\\text{.} \\\\
                  \\text{These two matrices are linearly independent, so} \\\\
                  \\left\\{ \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}, \\begin{pmatrix} -1 & 0 \\\\ 0 & 0 \\end{pmatrix} \\right\\} \\text{ is a basis for } R(T)\\text{,} \\\\
                  \\text{and } \\dim R(T) = 2. \\\\[1em]
                  \\text{Now we want to find a basis for } N(T)\\text{. Note} \\\\
                  f(x) \\in N(T) \\text{ iff } \\begin{pmatrix} f(1) - f(2) & 0 \\\\ 0 & f(0) \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}. \\\\[0.5em]
                  \\text{Let } f(x) = a + bx + cx^2\\text{. Then} \\\\
                  \\begin{aligned}
                    0 &= f(1) - f(2) \\\\
                    &= (a + b + c) - (a + 2b + 4c) \\\\
                    &= -b - 3c \\implies b = -3c, \\\\
                    0 &= f(0) = a.
                  \\end{aligned} \\\\
                  \\text{Hence} \\\\
                  f(x) = a + bx + cx^2 = -3cx + cx^2 = c(-3x + x^2)\\text{,} \\\\
                  \\text{so } N(T) = \\operatorname{span}(\\{-3x + x^2\\})\\text{.} \\\\
                  \\text{Since } {-3x + x^2} \\neq 0\\text{, this set is linearly independent.} \\\\
                  \\text{Therefore } \\{-3x + x^2\\} \\text{ is a basis for } N(T)\\text{,} \\\\
                  \\text{and } \\dim N(T) = 1.`,
      },
      {
        title: "See N(T) and R(T)",
        content: `\\text{Enter a matrix } A \\text{ for } T(x) = Ax\\text{. The range is the span of} \\\\
                  \\text{the images of the standard basis, as the theorem says.}`,
        widget: "linear-map",
      },
    ],
  },
  {
    kind: "Theorem",
    number: 12,
    chapter: 4,
    section: 1,
    title: "The Determinant is Linear in Each Row (Thm 4.1)",
    statement: `\\det: M_{2 \\times 2}(\\mathbb{F}) \\to \\mathbb{F} \\text{ is a linear function of each row} \\\\
                \\text{of a } 2 \\times 2 \\text{ matrix when the other row is held fixed.} \\\\
                \\text{That is, if } u, v, w \\in \\mathbb{F}^2 \\text{ and } k \\in \\mathbb{F}\\text{, then} \\\\[0.5em]
                \\det\\begin{pmatrix} u + kv \\\\ w \\end{pmatrix} = \\det\\begin{pmatrix} u \\\\ w \\end{pmatrix} + k\\det\\begin{pmatrix} v \\\\ w \\end{pmatrix} \\\\[0.5em]
                \\text{and} \\\\[0.5em]
                \\det\\begin{pmatrix} w \\\\ u + kv \\end{pmatrix} = \\det\\begin{pmatrix} w \\\\ u \\end{pmatrix} + k\\det\\begin{pmatrix} w \\\\ v \\end{pmatrix}.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 12|Determinant of a 2 × 2 Matrix]]`,
      },
      {
        title: "Proof",
        content: `\\text{Let } u = (a_1, a_2),\\ v = (b_1, b_2),\\ w = (c_1, c_2) \\in \\mathbb{F}^2 \\\\
                  \\text{and } k \\in \\mathbb{F}\\text{. Then} \\\\
                  \\begin{aligned}
                    &\\det\\begin{pmatrix} u \\\\ w \\end{pmatrix} + k\\det\\begin{pmatrix} v \\\\ w \\end{pmatrix} \\\\
                    &= \\det\\begin{pmatrix} a_1 & a_2 \\\\ c_1 & c_2 \\end{pmatrix} + k\\det\\begin{pmatrix} b_1 & b_2 \\\\ c_1 & c_2 \\end{pmatrix} \\\\
                    &= (a_1c_2 - a_2c_1) + k(b_1c_2 - b_2c_1) \\\\
                    &= (a_1 + kb_1)c_2 - (a_2 + kb_2)c_1 \\\\
                    &= \\det\\begin{pmatrix} a_1 + kb_1 & a_2 + kb_2 \\\\ c_1 & c_2 \\end{pmatrix} \\\\
                    &= \\det\\begin{pmatrix} u + kv \\\\ w \\end{pmatrix}.
                  \\end{aligned} \\\\
                  \\text{Similarly, we can check} \\\\
                  \\det\\begin{pmatrix} w \\\\ u + kv \\end{pmatrix} = \\det\\begin{pmatrix} w \\\\ u \\end{pmatrix} + k\\det\\begin{pmatrix} w \\\\ v \\end{pmatrix}. \\\\
                  \\text{This completes the proof.} \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 13,
    chapter: 4,
    section: 1,
    title: "Invertibility of 2 × 2 Matrices (Thm 4.2)",
    statement: `\\text{Let } A \\in M_{2 \\times 2}(\\mathbb{F})\\text{.} \\\\
                \\text{Then } \\det(A) \\neq 0 \\text{ iff } A \\text{ is invertible.} \\\\
                \\text{Moreover, if } A \\text{ is invertible, then} \\\\[0.5em]
                A^{-1} = \\frac{1}{\\det(A)}\\begin{pmatrix} A_{22} & -A_{12} \\\\ -A_{21} & A_{11} \\end{pmatrix}.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 12|Determinant of a 2 × 2 Matrix]]`,
      },
      {
        title: "Proof",
        content: `(\\Rightarrow) \\text{ Let } \\det(A) \\neq 0\\text{. Then we can define} \\\\[0.5em]
                  M = \\frac{1}{\\det(A)}\\begin{pmatrix} A_{22} & -A_{12} \\\\ -A_{21} & A_{11} \\end{pmatrix}. \\\\[0.5em]
                  \\text{Multiplying out, } AM = MA = I\\text{,} \\\\
                  \\text{so } A \\text{ is invertible and } M = A^{-1}. \\\\[0.5em]
                  (\\Leftarrow) \\text{ Conversely, suppose } A \\text{ is invertible.} \\\\
                  \\text{So } \\operatorname{rank}(A) = 2. \\\\
                  \\text{Hence the first column of } A \\text{ is nonzero,} \\\\
                  \\text{so } A_{11} \\neq 0 \\text{ or } A_{21} \\neq 0. \\\\
                  \\text{If } A_{11} \\neq 0\\text{, add } -A_{21}/A_{11} \\text{ times row 1 of } A \\\\
                  \\text{to row 2 to obtain the matrix} \\\\[0.5em]
                  \\begin{pmatrix} A_{11} & A_{12} \\\\ 0 & A_{22} - \\frac{A_{12}A_{21}}{A_{11}} \\end{pmatrix}. \\\\[0.5em]
                  \\text{Since elementary row operations are rank preserving,} \\\\
                  \\text{this matrix has rank 2, so it follows that} \\\\
                  A_{22} - \\frac{A_{12}A_{21}}{A_{11}} \\neq 0. \\\\
                  \\text{Multiplying by } A_{11} \\neq 0\\text{,} \\\\
                  \\det(A) = A_{11}A_{22} - A_{12}A_{21} \\neq 0. \\\\[0.5em]
                  \\text{OTOH if } A_{21} \\neq 0\\text{, we have } \\det(A) \\neq 0 \\text{ by adding} \\\\
                  -A_{11}/A_{21} \\text{ times row 2 of } A \\text{ to row 1} \\\\
                  \\text{and applying a similar argument.} \\\\
                  \\text{Thus in either case, } \\det(A) \\neq 0. \\ \\ \\blacksquare`,
      },
    ],
  },
];
