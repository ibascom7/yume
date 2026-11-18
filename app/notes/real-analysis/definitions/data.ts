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
                 \\mathbf{x} \\text{ and } \\mathbf{y} \\text{ are collinear iff } \\ \\exists t \\in \\mathbb{R} \\text{ such that } \\mathbf{y} = t \\mathbf{x}.

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
                 \\text{In this case, we notate this by } \\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}. \\\\
                 \\text{We may also write } \\mathbf{x}_k \\xrightarrow[k \\to \\infty]{} \\mathbf{a} \\text{ or } \\mathbf{x}_k \\to \\mathbf{a}.`,
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
    examples: [
      {
        title: "∅ and ℝⁿ are closed",
        content: `\\text{$\\emptyset$ has no sequences in it, so it has no limit points, and it} \\\\
                  \\text{is closed vacuously.} \\\\
                  \\text{For $\\mathbb{R}^n$: if $\\mathbf{a}$ is a limit point of $\\mathbb{R}^n$, there is $(\\mathbf{a}_k) \\subseteq \\mathbb{R}^n$} \\\\
                  \\text{with $\\mathbf{a}_k \\to \\mathbf{a}$, and $\\mathbf{a} \\in \\mathbb{R}^n$ automatically.}`,
      },
      {
        title: "Closed intervals and the closed ball",
        content: `\\text{$[a, b]$ is closed in $\\mathbb{R}$, and the closed unit ball} \\\\
                  \\{ \\mathbf{x} \\in \\mathbb{R}^n : \\lVert \\mathbf{x} \\rVert \\leq 1 \\} \\\\
                  \\text{is closed in $\\mathbb{R}^n$.}`,
      },
      {
        title: "Non-example: the open ball",
        content: `\\text{The open unit ball $\\{ \\mathbf{x} \\in \\mathbb{R}^n : \\lVert \\mathbf{x} \\rVert < 1 \\}$ is not closed.} \\\\
                  \\text{In $\\mathbb{R}^2$, take $\\mathbf{x}_k = \\left( 1 - \\frac{1}{k}, 0 \\right)$. Each $\\mathbf{x}_k$ is in the open} \\\\
                  \\text{ball, but $\\mathbf{x}_k \\to (1, 0)$, and $\\lVert (1, 0) \\rVert = 1 \\not< 1$.} \\\\
                  \\text{So the open ball is missing one of its limit points.}`,
      },
    ],
  },
  {
    number: 14,
    chapter: 4,
    section: 3,
    term: "Closure",
    definition: `\\text{Let } A \\subseteq \\mathbb{R}^n. \\text{ The closure of } A \\text{ is the set } \\overline{A} \\\\
                 \\text{consisting of all of its [[definition 12|limit points]].} \\\\[1em]
                 \\text{Note } A \\text{ [[definition 13|closed]]} \\iff \\overline{A} \\subseteq A.`,
    examples: [
      {
        title: "The closure of [7, 10)",
        content: `\\text{Show $\\overline{[7, 10)} = [7, 10]$.} \\\\[0.5em]
                  \\text{\\textit{$\\supseteq$.} $[7, 10) \\subseteq \\overline{[7, 10)}$ by taking constant sequences. For} \\\\
                  \\text{the point $10$: take $a_k = 10 - \\frac{1}{k}$. Then $a_k \\in [7, 10)$ for all $k \\geq 1$} \\\\
                  \\text{and $\\lim_{k \\to \\infty} a_k = 10$, so $10 \\in \\overline{[7, 10)}$. Hence} \\\\
                  \\text{$\\overline{[7, 10)} \\supseteq [7, 10]$.} \\\\[0.5em]
                  \\text{\\textit{$\\subseteq$.} Let $x \\in \\overline{[7, 10)}$. Then there is $(a_k) \\subseteq [7, 10)$ with} \\\\
                  \\text{$a_k \\to x$; the goal is $x \\in [7, 10]$.} \\\\
                  \\text{We have $7 \\leq a_k < 10$ for all $k$, and limits preserve non-strict} \\\\
                  \\text{inequalities, so $7 \\leq \\lim_{k \\to \\infty} a_k = x \\leq 10$.} \\\\
                  \\text{(The strict $a_k < 10$ only survives as $x \\leq 10$; that is exactly} \\\\
                  \\text{how $10$ gets in.)} \\\\[0.5em]
                  \\text{So $\\overline{[7, 10)} = [7, 10]$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 15,
    chapter: 4,
    section: 3,
    term: "Dense",
    definition: `\\text{A set } A \\text{ is dense in } B \\text{ if } A \\subseteq B \\subseteq \\overline{A}. \\\\[1em]
                 \\text{e.g. } \\mathbb{Q} \\text{ is dense in } \\mathbb{R}, \\text{ since } \\overline{\\mathbb{Q}} = \\mathbb{R}.`,
    examples: [
      {
        title: "ℚ is dense in ℝ",
        content: `\\text{We show $\\overline{\\mathbb{Q}} = \\mathbb{R}$. Let $y \\in \\mathbb{R}$. For each $k$, there is a rational} \\\\
                  \\text{$q_k$ with $y - \\frac{1}{k} < q_k < y$ (density of $\\mathbb{Q}$ in $\\mathbb{R}$).} \\\\
                  \\text{Then $|q_k - y| < \\frac{1}{k}$, so $\\lim_{k \\to \\infty} q_k = y$ and $y \\in \\overline{\\mathbb{Q}}$.}`,
      },
    ],
  },
  {
    number: 16,
    chapter: 4,
    section: 3,
    term: "Ball",
    definition: `\\text{The ball about } \\mathbf{a} \\in \\mathbb{R}^n \\text{ of radius } r \\text{ is the set} \\\\
                 B_r(\\mathbf{a}) := \\{ \\mathbf{x} \\in \\mathbb{R}^n \\mid \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\}.`,
  },
  {
    number: 17,
    chapter: 4,
    section: 3,
    term: "Open",
    definition: `\\text{A set } U \\subseteq \\mathbb{R}^n \\text{ is open if} \\\\
                 \\forall \\mathbf{a} \\in U,\\ \\exists r = r(\\mathbf{a}) > 0,\\ [[definition 16|$B_r(\\mathbf{a})$]] \\subseteq U. \\\\[1em]
                 \\text{\\textit{Negation.}} \\\\
                 \\begin{aligned}
                   U \\text{ is not open} &\\iff \\exists \\mathbf{a} \\in U,\\ \\forall r > 0,\\ B_r(\\mathbf{a}) \\not\\subseteq U \\\\
                   &\\iff \\exists \\mathbf{a} \\in U,\\ \\forall r > 0,\\ \\exists \\mathbf{b} \\in B_r(\\mathbf{a}) \\\\
                   &\\qquad \\text{such that } \\mathbf{b} \\notin U.
                 \\end{aligned}`,
    examples: [
      {
        title: "∅ and ℝⁿ are open",
        content: `\\text{$\\emptyset$ vacuously. For $\\mathbb{R}^n$: let $\\mathbf{a} \\in \\mathbb{R}^n$ and $r = 1 > 0$; then} \\\\
                  \\text{$B_1(\\mathbf{a}) \\subseteq \\mathbb{R}^n$.}`,
      },
      {
        title: "Open intervals, and a segment that is not open",
        content: `\\text{$(a, b) \\subseteq \\mathbb{R}$ is open in $\\mathbb{R}$: for $x \\in (a, b)$, take} \\\\
                  \\text{$r = \\min\\{x - a, b - x\\}$.} \\\\[0.5em]
                  \\text{But the segment $\\{(x, 0) : a < x < b\\} \\subseteq \\mathbb{R}^2$ is \\textit{not} open in} \\\\
                  \\text{$\\mathbb{R}^2$: every ball $B_r((x, 0))$ contains the point $(x, \\frac{r}{2})$, which is} \\\\
                  \\text{not on the segment.}`,
      },
      {
        title: "Balls are open",
        content: `\\text{For any $R > 0$ and $\\mathbf{a} \\in \\mathbb{R}^n$, the ball $B_R(\\mathbf{a})$ is an open set} \\\\
                  \\text{in $\\mathbb{R}^n$.} \\\\[0.5em]
                  \\text{\\textit{Sketch.} For $\\mathbf{x} \\in B_R(\\mathbf{a})$, the distance from $\\mathbf{x}$ to the edge of the} \\\\
                  \\text{ball is $R - \\lVert \\mathbf{x} - \\mathbf{a} \\rVert > 0$. A ball of that radius around $\\mathbf{x}$ fits} \\\\
                  \\text{inside $B_R(\\mathbf{a})$.} \\\\[0.5em]
                  \\text{\\textit{Proof.}} \\\\
                  \\text{Let $\\mathbf{x} \\in B_R(\\mathbf{a})$ and set $r = R - \\lVert \\mathbf{x} - \\mathbf{a} \\rVert$. Since $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < R$,} \\\\
                  \\text{$r > 0$. Let $\\mathbf{y} \\in B_r(\\mathbf{x})$. By the [[theorem 3|triangle inequality]],} \\\\
                  \\lVert \\mathbf{y} - \\mathbf{a} \\rVert \\leq \\lVert \\mathbf{y} - \\mathbf{x} \\rVert + \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r + \\lVert \\mathbf{x} - \\mathbf{a} \\rVert = R. \\\\
                  \\text{So $\\mathbf{y} \\in B_R(\\mathbf{a})$. Thus $B_r(\\mathbf{x}) \\subseteq B_R(\\mathbf{a})$, and $B_R(\\mathbf{a})$ is open.} \\ \\blacksquare`,
      },
      {
        title: "Non-example: neither open nor closed",
        content: `\\text{There are sets that are neither open nor closed, e.g. $[0, 1)$.} \\\\
                  \\text{Note $\\overline{[0, 1)} = [0, 1] \\neq [0, 1)$, so $[0, 1)$ is not closed.} \\\\
                  \\text{And for any $r > 0$, $B_r(0) = (-r, r) \\not\\subseteq [0, 1)$ (it contains $-\\frac{r}{2}$),} \\\\
                  \\text{so $[0, 1)$ is not open.} \\\\
                  \\text{More generally, $[a, b)$ is neither open nor closed in $\\mathbb{R}$ for $a < b$.}`,
      },
    ],
  },
  {
    number: 18,
    chapter: 4,
    section: 3,
    term: "Interior",
    definition: `\\text{The interior of a set } X \\subseteq \\mathbb{R}^n \\text{ is the largest} \\\\
                 \\text{[[definition 17|open]] set contained in } X, \\text{ and is denoted } \\operatorname{int}(X).`,
  },
  {
    number: 19,
    chapter: 4,
    section: 4,
    term: "Compact",
    definition: `K \\subseteq \\mathbb{R}^n \\text{ is compact if} \\\\
                 \\forall (\\mathbf{x}_n) \\subseteq K,\\ \\exists (\\mathbf{x}_{n_m}) \\subseteq K \\text{ such that } \\lim_{m \\to \\infty} \\mathbf{x}_{n_m} = \\mathbf{x} \\in K.`,
    examples: [
      {
        title: "(0, 1] is not compact",
        content: `\\text{Take $S = (0, 1]$ and $x_k = \\frac{1}{k}$ for $k \\in \\mathbb{N}$.} \\\\
                  \\text{Then $x_k \\to 0$, so every subsequence of $(x_k)$ must also} \\\\
                  \\text{converge to $0$.} \\\\
                  \\text{Note $0 \\notin S$. So $S$ is not cpt.} \\\\
                  \\text{Notice that $S$ is also not [[definition 13|closed]].}`,
      },
      {
        title: "ℕ is not compact",
        content: `\\text{Take $S = \\mathbb{N}$ and $x_k = k$ for $k \\in \\mathbb{N}$.} \\\\
                  \\text{Since every subsequence satisfies $x_{k_j} = k_j \\geq j$, every} \\\\
                  \\text{subsequence is unbounded, so no subsequence converges.} \\\\
                  \\text{So $S$ is not cpt.} \\\\
                  \\text{Notice that $S$ is also not [[definition 20|bounded]].}`,
      },
    ],
  },
  {
    number: 20,
    chapter: 4,
    section: 4,
    term: "Bounded",
    definition: `S \\subseteq \\mathbb{R}^n \\text{ is bounded if } \\exists R > 0 \\text{ such that } S \\subseteq [[definition 16|$B_R(\\mathbf{0})$]]. \\\\[0.5em]
                 \\text{Recall, } B_R(\\mathbf{0}) = \\{ \\mathbf{x} \\in \\mathbb{R}^n \\mid \\lVert \\mathbf{x} \\rVert < R \\}.`,
  },
  {
    number: 21,
    chapter: 4,
    section: 4,
    term: "Cube",
    definition: `\\text{The set} \\\\
                 \\begin{aligned}
                   [a, b]^n &= [a, b] \\times \\cdots \\times [a, b] \\quad n\\text{-times} \\\\
                   &= \\{ \\mathbf{x} \\in \\mathbb{R}^n : x_m \\in [a, b], \\text{ for } m = 1, \\ldots, n \\} \\\\
                   &= \\{ \\mathbf{x} \\in \\mathbb{R}^n : \\text{each coordinate of } \\mathbf{x} \\text{ is in } [a, b] \\}
                 \\end{aligned} \\\\
                 \\text{is called the $n^{\\text{th}}$-dimensional cube.}`,
  },
  {
    number: 22,
    chapter: 5,
    section: 1,
    term: "Limit of a Function",
    definition: `\\text{Let $S \\subseteq \\mathbb{R}^n$ and $f : S \\to \\mathbb{R}^m$.} \\\\
                 \\text{Let $\\mathbf{a}$ be a [[definition 12|limit point]] of $S \\setminus \\{\\mathbf{a}\\}$.} \\\\
                 \\text{Then a point $\\mathbf{v} \\in \\mathbb{R}^m$ is the limit of $f$ at $\\mathbf{a}$ if} \\\\
                 \\forall \\varepsilon > 0,\\ \\exists r > 0 \\text{ such that } \\lVert f(\\mathbf{x}) - \\mathbf{v} \\rVert < \\varepsilon \\\\
                 \\text{whenever } 0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\text{ and } \\mathbf{x} \\in S. \\\\
                 \\text{We write } \\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = \\mathbf{v}.`,
  },
  {
    number: 23,
    chapter: 5,
    section: 1,
    term: "Continuous at a Point",
    definition: `\\text{Let $S \\subseteq \\mathbb{R}^n$ and $f : S \\to \\mathbb{R}^m$.} \\\\
                 \\text{$f$ is continuous at $\\mathbf{a} \\in S$ if} \\\\
                 \\forall \\varepsilon > 0,\\ \\exists r > 0,\\ \\forall \\mathbf{x} \\in S, \\\\
                 \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\implies \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert < \\varepsilon.`,
  },
  {
    number: 24,
    chapter: 5,
    section: 1,
    term: "Continuous on a Set",
    definition: `\\text{Let $S \\subseteq \\mathbb{R}^n$ and $f : S \\to \\mathbb{R}^m$.} \\\\
                 \\text{$f$ is continuous on $S$ if} \\\\
                 \\forall \\mathbf{a} \\in S,\\ \\forall \\varepsilon > 0,\\ \\exists r > 0,\\ \\forall \\mathbf{x} \\in S, \\\\
                 \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\implies \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert < \\varepsilon.`,
  },
  {
    number: 25,
    chapter: 5,
    section: 1,
    term: "Discontinuous at a Point",
    definition: `\\text{Let $S \\subseteq \\mathbb{R}^n$ and $f : S \\to \\mathbb{R}^m$.} \\\\
                 \\text{$f$ is discontinuous at $\\mathbf{a} \\in S$ if $f$ is not [[definition 23|continuous at]] $\\mathbf{a}$.} \\\\
                 \\text{That is,} \\\\
                 \\exists \\varepsilon > 0,\\ \\forall r > 0,\\ \\exists \\mathbf{x} \\in S \\text{ such that} \\\\
                 \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\text{ and } \\lVert f(\\mathbf{x}) - f(\\mathbf{a}) \\rVert \\geq \\varepsilon.`,
  },
  {
    number: 26,
    chapter: 5,
    section: 1,
    term: "Isolated Point",
    definition: `\\mathbf{a} \\in S \\text{ is an isolated point if } \\exists r > 0 \\text{ such that} \\\\
                 [[definition 16|$B_r(\\mathbf{a})$]] \\cap S = \\{ \\mathbf{a} \\}.`,
  },
  {
    number: 27,
    chapter: 5,
    section: 1,
    term: "Lipschitz",
    definition: `\\text{A function $f : (S \\subseteq \\mathbb{R}^n) \\to \\mathbb{R}^m$ is Lipschitz if} \\\\
                 \\exists C > 0 \\text{ such that } \\forall \\mathbf{x}, \\mathbf{y} \\in S,\\ \\lVert f(\\mathbf{x}) - f(\\mathbf{y}) \\rVert \\leq C \\lVert \\mathbf{x} - \\mathbf{y} \\rVert. \\\\
                 \\text{The smallest such $C$ is called the Lipschitz constant.}`,
  },
  {
    number: 28,
    chapter: 5,
    section: 2,
    term: "Removable Singularity",
    definition: `\\text{A removable singularity is a value where the function} \\\\
                 \\text{may be redefined at the point of discontinuity to create a} \\\\
                 \\text{[[definition 24|continuous]] function.}`,
    examples: [
      {
        title: "A one-point spike",
        content: `\\text{$f : \\mathbb{R} \\to \\mathbb{R}$, $f(0) = 1$ and $f(x) = 0$ for $x \\neq 0$.} \\\\[0.5em]
                  \\text{\\textit{Sol.} This is discts because $\\lim_{x \\to 0} f(x) = 0 \\neq f(0)$.} \\\\[0.5em]
                  \\text{How to show $\\lim_{x \\to 0} f(x) = 0$?} \\\\
                  \\text{[[definition 22|Def of lim]]:} \\\\
                  \\forall \\varepsilon > 0,\\ \\exists r > 0,\\ \\forall x \\in \\mathbb{R},\\ 0 < |x - 0| < r \\implies |f(x) - 0| < \\varepsilon. \\\\
                  \\text{Let $\\varepsilon > 0$ and take $r = 1$. Let $x \\in \\mathbb{R}$ s.t. $0 < |x| < r$.} \\\\
                  \\text{Then $|f(x) - 0| = |0 - 0| = 0 < \\varepsilon$.} \\\\
                  \\text{Which completes the proof that $\\lim_{x \\to 0} f(x) = 0$.} \\\\
                  \\text{However, $f(0) = 1 \\neq 0 = \\lim_{x \\to 0} f(x)$.} \\\\
                  \\text{Hence $f$ has a removable singularity at $0$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 29,
    chapter: 5,
    section: 2,
    term: "One-Sided Limits",
    definition: `\\text{The limit of $f$ at $a \\in \\mathbb{R}$ when $x \\in \\mathbb{R}$ approaches $a$ from the} \\\\
                 \\text{right equals $L \\in \\mathbb{R}$ if} \\\\
                 \\forall \\varepsilon > 0,\\ \\exists r > 0,\\ \\forall x \\in \\mathbb{R} \\text{ with } a < x < a + r \\implies |f(x) - L| < \\varepsilon. \\\\
                 \\text{In this case we write } \\lim_{x \\to a^+} f(x) = L. \\\\[1em]
                 \\text{The limit of $f$ at $a \\in \\mathbb{R}$ when $x \\in \\mathbb{R}$ approaches $a$ from the} \\\\
                 \\text{left equals $L \\in \\mathbb{R}$ if} \\\\
                 \\forall \\varepsilon > 0,\\ \\exists r > 0,\\ \\forall x \\in \\mathbb{R} \\text{ with } a - r < x < a \\implies |f(x) - L| < \\varepsilon. \\\\
                 \\text{In this case we write } \\lim_{x \\to a^-} f(x) = L. \\\\[1em]
                 \\text{Note if $a < x < a + r$ and $a - r < x < a$, then} \\\\
                 x \\in (a - r, a) \\cup (a, a + r) \\iff 0 < |x - a| < r. \\\\
                 \\text{So } \\lim_{x \\to a} f(x) = L \\text{ iff } \\lim_{x \\to a^-} f(x) = L = \\lim_{x \\to a^+} f(x).`,
  },
  {
    number: 30,
    chapter: 5,
    section: 2,
    term: "Jump Discontinuity",
    definition: `\\text{A function $f$ on $\\mathbb{R}$ has a jump discontinuity at $a$ if} \\\\
                 \\lim_{x \\to a^+} f(x) \\neq \\lim_{x \\to a^-} f(x) \\\\
                 \\text{(both [[definition 29|one-sided limits]] exist).}`,
  },
  {
    number: 31,
    chapter: 5,
    section: 2,
    term: "Piecewise Continuous",
    definition: `\\text{A function $f$ on an interval is piecewise continuous if on every} \\\\
                 \\text{bounded subinterval it has a finite number of} \\\\
                 \\text{discontinuities and all of them are} \\\\
                 \\text{[[definition 30|jump discontinuities]].}`,
    examples: [
      {
        title: "Heaviside function",
        content: `H(x) = \\begin{cases} 0, & x < 0 \\\\ 1, & x \\geq 0 \\end{cases} \\text{ is piecewise cts.} \\\\[0.5em]
                  \\text{For $x \\neq 0$, $H(x)$ is constant, and thus, cts.} \\\\
                  \\text{But $\\lim_{x \\to 0^+} H(x) = 1$ and $\\lim_{x \\to 0^-} H(x) = 0$.}`,
      },
      {
        title: "Ceiling function",
        content: `\\text{$f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = \\lceil x \\rceil$ is the ceiling function.} \\\\
                  \\text{(Graph: a staircase, $f(x) = k$ on $(k - 1, k]$.)} \\\\
                  \\text{$f$ is piecewise cts and has infinitely many jump} \\\\
                  \\text{discontinuities.}`,
      },
    ],
  },
  {
    number: 32,
    chapter: 5,
    section: 2,
    term: "Infinite Limit",
    definition: `\\text{Let $S \\subseteq \\mathbb{R}^n$, $f : S \\to \\mathbb{R}$. Let $\\mathbf{a} \\in \\overline{S \\setminus \\{\\mathbf{a}\\}}$.} \\\\
                 \\text{The limit of $f$ at $\\mathbf{a}$ is $+\\infty$ if} \\\\
                 \\forall R > 0,\\ \\exists r > 0,\\ \\forall \\mathbf{x} \\in S,\\ 0 < \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\\\
                 \\text{we have $f(\\mathbf{x}) > R$.} \\\\
                 \\text{Write $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = +\\infty$.} \\\\
                 \\text{Similarly we can define $\\lim_{\\mathbf{x} \\to \\mathbf{a}} f(\\mathbf{x}) = -\\infty$.}`,
    examples: [
      {
        title: "1/‖x‖ → +∞ at 0",
        content: `\\text{$f : \\mathbb{R}^n \\setminus \\{\\mathbf{0}\\} \\to \\mathbb{R}$, $f(\\mathbf{x}) = \\frac{1}{\\lVert \\mathbf{x} \\rVert}$.} \\\\
                  \\text{In a [[exercise 28|previous example]] we showed $f$ is cts on $\\mathbb{R}^n \\setminus \\{\\mathbf{0}\\}$.} \\\\
                  \\text{Now we show $\\lim_{\\mathbf{x} \\to \\mathbf{0}} f(\\mathbf{x}) = +\\infty$.} \\\\[0.5em]
                  \\text{\\textit{Proof.} Let $R > 0$.} \\\\
                  \\text{[Scratch. We want to conclude with $\\frac{1}{\\lVert \\mathbf{x} \\rVert} > R$, or equivalently,} \\\\
                  \\text{$\\lVert \\mathbf{x} \\rVert < \\frac{1}{R}$.]} \\\\
                  \\text{Let $r = \\frac{1}{R}$. Then for $\\mathbf{x} \\in S$ s.t. $0 < \\lVert \\mathbf{x} - \\mathbf{0} \\rVert < r$, we have} \\\\
                  \\lVert \\mathbf{x} \\rVert < \\frac{1}{R} \\iff R < \\frac{1}{\\lVert \\mathbf{x} \\rVert} = f(\\mathbf{x}). \\\\
                  \\text{Thus, $\\lim_{\\mathbf{x} \\to \\mathbf{0}} f(\\mathbf{x}) = +\\infty$.} \\ \\blacksquare`,
        figure: {
          src: "/one_over_abs_x.png",
          alt: "Graph of y = 1/|x| for -5 ≤ x ≤ 5: both branches shoot up to +∞ as x approaches 0 and flatten toward 0 as |x| grows",
          width: 800,
          height: 800,
          maxWidth: 320,
        },
      },
    ],
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
