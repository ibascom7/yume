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
                  \\text{inside $B_R(\\mathbf{a})$.} \\\\[1em]
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
    examples: [
      {
        title: "The Heaviside function has no limit at 0",
        content: `\\text{The Heaviside function } H(x) = \\begin{cases} 0, & x < 0 \\\\ 1, & x \\geq 0. \\end{cases} \\\\
                  \\lim_{x \\to 0} H(x) \\text{ DNE.} \\\\[1em]
                  \\text{\\textit{Sol.}} \\\\
                  \\text{WTS the def of limit does not hold for $\\lim_{x \\to 0} H(x)$.} \\\\
                  \\text{That is, we WTS} \\\\
                  \\forall L \\in \\mathbb{R}\\ \\exists \\varepsilon > 0,\\ \\forall r > 0,\\ \\exists x \\in \\mathbb{R} \\text{ s.t.} \\\\
                  0 < |x - 0| < r \\text{ and } |H(x) - L| \\geq \\varepsilon, \\\\
                  \\text{or WTS BWOC $\\nexists L \\in \\mathbb{R}$ that satisfies the definition.} \\\\
                  \\text{In this example we proceed BWOC.} \\\\
                  \\text{Suppose $\\lim_{x \\to 0} H(x) = L$ for some $L \\in \\mathbb{R}$. Then} \\\\
                  \\forall \\varepsilon > 0,\\ \\exists r > 0,\\ \\forall x,\\ 0 < |x - 0| < r \\implies |H(x) - L| < \\varepsilon. \\\\
                  \\text{Visually we can see $H(x)$ goes from $0$ to $1$ across the origin.} \\\\
                  \\text{So we want an $\\varepsilon \\in (0, 1)$ for our contradiction.} \\\\
                  \\text{In particular, for $\\varepsilon = \\frac{1}{2}$, $\\exists r > 0$, $\\forall x$, $0 < |x - 0| < r$ we} \\\\
                  \\text{have $|H(x) - L| < \\frac{1}{2}$.} \\\\
                  \\text{Now we pick two points one on the lower leg $x_1$ and one on} \\\\
                  \\text{the upper leg $x_2$. Specifically, take $x_1 = -\\frac{r}{2}$ and $x_2 = \\frac{r}{2}$.} \\\\
                  \\text{So $|H(x_1) - L| < \\frac{1}{2}$ and $|H(x_2) - L| < \\frac{1}{2}$} \\\\
                  \\begin{aligned}
                  &\\iff |0 - L| < \\tfrac{1}{2} \\text{ and } |1 - L| < \\tfrac{1}{2} \\\\
                  &\\iff -\\tfrac{1}{2} < L < \\tfrac{1}{2} \\text{ and } -\\tfrac{1}{2} < L - 1 < \\tfrac{1}{2} \\\\
                  &\\iff -\\tfrac{1}{2} < L < \\tfrac{1}{2} \\text{ and } \\tfrac{1}{2} < L < \\tfrac{3}{2}.
                  \\end{aligned} \\\\
                  \\text{So $L \\in (-\\frac{1}{2}, \\frac{1}{2}) \\cap (\\frac{1}{2}, \\frac{3}{2}) = \\emptyset$, a contradiction!} \\ \\blacksquare \\\\[1em]
                  \\text{\\textit{Another Solution.}} \\\\
                  \\text{WTS $\\lim_{x \\to 0} H(x)$ DNE.} \\\\
                  \\text{BWOC suppose $\\exists L \\in \\mathbb{R}$ s.t. $\\lim_{x \\to 0} H(x) = L$. So} \\\\
                  \\forall \\varepsilon > 0,\\ \\exists r > 0,\\ \\forall x \\in \\mathbb{R},\\ 0 < |x - 0| < r \\implies |H(x) - L| < \\varepsilon. \\\\
                  \\text{Since $H(x)$ jumps from $0$ to $1$ we want our $\\varepsilon$ ball to be} \\\\
                  \\text{between $0$ and $1$.} \\\\
                  \\text{In particular, for $\\varepsilon = \\frac{1}{2}$, $\\exists r > 0$, $\\forall x \\in \\mathbb{R}$,} \\\\
                  0 < |x - 0| < r \\implies |H(x) - L| < \\tfrac{1}{2}. \\\\
                  \\text{Now take $x_1 = -\\frac{r}{2}$ and $x_2 = \\frac{r}{2}$.} \\\\
                  \\text{So $|H(x_1) - L| < \\frac{1}{2}$ and $|H(x_2) - L| < \\frac{1}{2}$} \\\\
                  \\iff |0 - L| < \\tfrac{1}{2} \\text{ and } |1 - L| < \\tfrac{1}{2}. \\\\
                  \\text{But by [[theorem 3|triangle inequality]],} \\\\
                  \\begin{aligned}
                  1 = |1 - 0| = |1 - L + L - 0| &\\leq |1 - L| + |L - 0| \\\\
                  &= |H(x_2) - L| + |L - H(x_1)| \\\\
                  &< \\tfrac{1}{2} + \\tfrac{1}{2} = 1.
                  \\end{aligned} \\\\
                  \\text{Thus, $\\lim_{x \\to 0} H(x)$ DNE.} \\ \\blacksquare`,
      },
      {
        title: "x²/(x² + y²)",
        content: `\\text{Consider $f : \\mathbb{R}^2 \\to \\mathbb{R}$ defined by} \\\\
                  f(x, y) = \\begin{cases} \\dfrac{x^2}{x^2 + y^2} & \\text{if } (x, y) \\neq (0, 0) \\\\ 0 & \\text{if } (x, y) = (0, 0). \\end{cases} \\\\
                  \\text{1. Show $f$ is cts on $\\mathbb{R}^2 \\setminus \\{\\mathbf{0}\\}$.} \\\\
                  \\text{2. Show $\\lim_{\\mathbf{x} \\to \\mathbf{0}} f(\\mathbf{x})$ DNE.} \\\\[1em]
                  \\text{\\textit{Proof of (1).}} \\\\
                  \\text{Let $\\mathbf{a} = (p, q) \\in \\mathbb{R}^2 \\setminus \\{\\mathbf{0}\\}$. WTS $\\forall \\varepsilon > 0$, $\\exists r > 0$,} \\\\
                  \\text{$\\forall \\mathbf{x} = (y, z) \\in \\mathbb{R}^2 \\setminus \\{\\mathbf{0}\\}$ with $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$, we have} \\\\
                  \\text{$|f(\\mathbf{x}) - f(\\mathbf{a})| < \\varepsilon$.} \\\\[0.5em]
                  \\text{[Scratch.} \\\\
                  \\begin{aligned}
                  |f(\\mathbf{x}) - f(\\mathbf{a})| &= \\left| \\frac{y^2}{y^2 + z^2} - \\frac{p^2}{p^2 + q^2} \\right| \\\\
                  &= \\left| \\frac{y^2(p^2 + q^2) - p^2(y^2 + z^2)}{(y^2 + z^2)(p^2 + q^2)} \\right| \\\\
                  &= \\frac{|y^2 q^2 - z^2 p^2|}{\\lVert \\mathbf{x} \\rVert^2 \\lVert \\mathbf{a} \\rVert^2}.
                  \\end{aligned} \\\\
                  \\text{Since $\\mathbf{a}$ fixed and $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$,} \\\\
                  \\lVert \\mathbf{a} \\rVert \\leq \\lVert \\mathbf{x} - \\mathbf{a} \\rVert + \\lVert \\mathbf{x} \\rVert < r + \\lVert \\mathbf{x} \\rVert \\implies \\lVert \\mathbf{a} \\rVert - r < \\lVert \\mathbf{x} \\rVert. \\\\
                  \\text{So for $r < \\frac{\\lVert \\mathbf{a} \\rVert}{2}$ we have} \\\\
                  \\lVert \\mathbf{a} \\rVert - r > \\lVert \\mathbf{a} \\rVert - \\frac{\\lVert \\mathbf{a} \\rVert}{2} = \\frac{\\lVert \\mathbf{a} \\rVert}{2}, \\text{ so } \\frac{\\lVert \\mathbf{a} \\rVert}{2} < \\lVert \\mathbf{x} \\rVert. \\\\
                  \\text{Also since $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$, $|y - p| < r$ and $|z - q| < r$, because} \\\\
                  \\text{this is analogous to saying the distance between vectors} \\\\
                  \\text{being bounded implies their corresponding components} \\\\
                  \\text{have bounded distance.} \\\\
                  \\text{Then $y^2 q^2 - z^2 p^2 = (y^2 - p^2) q^2 - (z^2 - q^2) p^2$, and} \\\\
                  |y^2 - p^2| = |y - p| \\, |y + p| < r(r + 2\\lVert \\mathbf{a} \\rVert), \\\\
                  \\text{using $|y + p| \\leq |y - p| + 2|p|$ and $|p| \\leq \\lVert \\mathbf{a} \\rVert$.} \\\\
                  \\text{Same for $|z^2 - q^2|$. So for $r \\leq 1$,} \\\\
                  |y^2 q^2 - z^2 p^2| < r(1 + 2\\lVert \\mathbf{a} \\rVert) \\lVert \\mathbf{a} \\rVert^2, \\text{ and} \\\\
                  |f(\\mathbf{x}) - f(\\mathbf{a})| < \\frac{4(1 + 2\\lVert \\mathbf{a} \\rVert)}{\\lVert \\mathbf{a} \\rVert^2} r.] \\\\[0.5em]
                  \\text{Choose } r = \\min\\left\\{ 1, \\frac{\\lVert \\mathbf{a} \\rVert}{2}, \\frac{\\varepsilon \\lVert \\mathbf{a} \\rVert^2}{4(1 + 2\\lVert \\mathbf{a} \\rVert)} \\right\\}. \\\\
                  \\text{Then for $\\mathbf{x} \\neq \\mathbf{0}$ with $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$, by the scratch work} \\\\
                  |f(\\mathbf{x}) - f(\\mathbf{a})| < \\frac{4(1 + 2\\lVert \\mathbf{a} \\rVert)}{\\lVert \\mathbf{a} \\rVert^2} r \\leq \\varepsilon. \\\\
                  \\text{So $f$ is cts on $\\mathbb{R}^2 \\setminus \\{\\mathbf{0}\\}$.} \\ \\blacksquare \\\\[1em]
                  \\text{\\textit{Proof of (2).}} \\\\
                  \\text{Note $f(x, 0) = 1$ for $x \\neq 0$ and $f(0, y) = 0$ for $y \\neq 0$: the} \\\\
                  \\text{function is $1$ along the $x$-axis and $0$ along the $y$-axis, the} \\\\
                  \\text{same jump as the [[definition 22|Heaviside function]].} \\\\[0.5em]
                  \\text{Suppose $\\lim_{\\mathbf{x} \\to \\mathbf{0}} f(\\mathbf{x}) = L$. With $\\varepsilon = \\frac{1}{2}$, there is $r > 0$} \\\\
                  \\text{such that $0 < \\lVert \\mathbf{x} \\rVert < r \\implies |f(\\mathbf{x}) - L| < \\frac{1}{2}$.} \\\\
                  \\text{Take $\\mathbf{x}_1 = (\\frac{r}{2}, 0)$ and $\\mathbf{x}_2 = (0, \\frac{r}{2})$. Both satisfy $0 < \\lVert \\mathbf{x} \\rVert < r$,} \\\\
                  \\text{and $f(\\mathbf{x}_1) = 1$, $f(\\mathbf{x}_2) = 0$. Then} \\\\
                  \\begin{aligned}
                  1 = |1 - 0| &\\leq |1 - L| + |L - 0| \\\\
                  &= |f(\\mathbf{x}_1) - L| + |L - f(\\mathbf{x}_2)| \\\\
                  &< \\tfrac{1}{2} + \\tfrac{1}{2} = 1,
                  \\end{aligned} \\\\
                  \\text{a contradiction. So $\\lim_{\\mathbf{x} \\to \\mathbf{0}} f(\\mathbf{x})$ DNE.} \\ \\blacksquare`,
      },
    ],
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
    examples: [
      {
        title: "1/‖x‖ is continuous",
        content: `\\text{Define $f : \\mathbb{R}^n \\setminus \\{\\mathbf{0}\\} \\to \\mathbb{R}$ by $f(\\mathbf{x}) = \\frac{1}{\\lVert \\mathbf{x} \\rVert}$.} \\\\
                  \\text{Show $f$ cts on its domain.} \\\\[1em]
                  \\text{\\textit{Goal.}} \\\\
                  \\text{WTS } \\forall \\mathbf{a} \\in \\mathbb{R}^n \\setminus \\{\\mathbf{0}\\},\\ \\forall \\varepsilon > 0,\\ \\exists r > 0,\\ \\forall \\mathbf{x} \\in \\mathbb{R}^n \\setminus \\{\\mathbf{0}\\}, \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\implies |f(\\mathbf{x}) - f(\\mathbf{a})| < \\varepsilon. \\\\
                  \\text{Take $\\mathbf{a} \\in \\mathbb{R}^n \\setminus \\{\\mathbf{0}\\}$ and $\\varepsilon > 0$ arbitrary. Goal is to choose} \\\\
                  \\text{$r > 0$ s.t. $\\forall \\mathbf{x} \\in \\mathbb{R}^n \\setminus \\{\\mathbf{0}\\}$,} \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\implies |f(\\mathbf{x}) - f(\\mathbf{a})| < \\varepsilon. \\\\[1em]
                  \\text{\\textit{Scratch.}} \\\\
                  \\begin{aligned}
                  |f(\\mathbf{x}) - f(\\mathbf{a})| &= \\left| \\frac{1}{\\lVert \\mathbf{x} \\rVert} - \\frac{1}{\\lVert \\mathbf{a} \\rVert} \\right| = \\frac{\\big| \\lVert \\mathbf{a} \\rVert - \\lVert \\mathbf{x} \\rVert \\big|}{\\lVert \\mathbf{x} \\rVert \\lVert \\mathbf{a} \\rVert} \\\\
                  &\\leq \\frac{\\lVert \\mathbf{x} - \\mathbf{a} \\rVert}{\\lVert \\mathbf{x} \\rVert \\lVert \\mathbf{a} \\rVert} \\quad \\text{([[exercise 3|reverse triangle inequality]])}.
                  \\end{aligned} \\\\
                  \\text{Need a lower bound on $\\lVert \\mathbf{x} \\rVert$: $\\lVert \\mathbf{x} \\rVert \\geq \\lVert \\mathbf{a} \\rVert - \\lVert \\mathbf{x} - \\mathbf{a} \\rVert$, so if} \\\\
                  \\text{$r \\leq \\frac{\\lVert \\mathbf{a} \\rVert}{2}$ then $\\lVert \\mathbf{x} \\rVert > \\frac{\\lVert \\mathbf{a} \\rVert}{2}$ and} \\\\
                  |f(\\mathbf{x}) - f(\\mathbf{a})| < \\frac{2r}{\\lVert \\mathbf{a} \\rVert^2}, \\\\
                  \\text{which is $\\leq \\varepsilon$ when $r \\leq \\frac{\\varepsilon \\lVert \\mathbf{a} \\rVert^2}{2}$.} \\\\[1em]
                  \\text{\\textit{Proof.}} \\\\
                  \\text{Choose } r = \\min\\left\\{ \\frac{\\lVert \\mathbf{a} \\rVert}{2}, \\frac{\\varepsilon \\lVert \\mathbf{a} \\rVert^2}{2} \\right\\} > 0. \\\\
                  \\text{Let $\\mathbf{x} \\in \\mathbb{R}^n \\setminus \\{\\mathbf{0}\\}$ with $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$. Then} \\\\
                  \\text{$\\lVert \\mathbf{x} \\rVert \\geq \\lVert \\mathbf{a} \\rVert - \\lVert \\mathbf{x} - \\mathbf{a} \\rVert > \\frac{\\lVert \\mathbf{a} \\rVert}{2}$, so} \\\\
                  |f(\\mathbf{x}) - f(\\mathbf{a})| \\leq \\frac{\\lVert \\mathbf{x} - \\mathbf{a} \\rVert}{\\lVert \\mathbf{x} \\rVert \\lVert \\mathbf{a} \\rVert} < \\frac{2r}{\\lVert \\mathbf{a} \\rVert^2} \\leq \\varepsilon. \\\\
                  \\text{Hence $f$ is cts on $\\mathbb{R}^n \\setminus \\{\\mathbf{0}\\}$.} \\ \\blacksquare`,
      },
      {
        title: "e^(−1/x) is continuous",
        content: `\\text{Show that } f(x) = \\begin{cases} 0 & x \\leq 0 \\\\ e^{-1/x} & x > 0 \\end{cases} \\text{ is cts on $\\mathbb{R}$.} \\\\[1em]
                  \\text{\\textit{Case 1: a < 0.}} \\\\
                  \\text{Let $\\varepsilon > 0$.} \\\\
                  \\text{[Scratch. $|f(x) - f(a)| = |0 - 0| = 0$ as long as $x < 0$, so we need} \\\\
                  \\text{$r$ small enough that $|x - a| < r$ forces $x < 0$.]} \\\\
                  \\text{Choose $r = |a|$. If $|x - a| < r$, then $x < a + |a| = 0$, so} \\\\
                  |f(x) - f(a)| = |0 - 0| = 0 < \\varepsilon. \\\\[1em]
                  \\text{\\textit{Case 2: a > 0.}} \\\\
                  \\text{For $x > 0$, $f = g \\circ h$ with $h(x) = -\\frac{1}{x}$ and $g(t) = e^t$, which} \\\\
                  \\text{are both cts ($h$ as in the [[definition 24|previous example]] with $n = 1$).} \\\\
                  \\text{By composition, $f$ is cts at $a$ (and $(0, \\infty)$ contains a ball} \\\\
                  \\text{around $a$, so the values for $x \\leq 0$ don't matter).} \\\\[1em]
                  \\text{\\textit{Case 3: a = 0.}} \\\\
                  \\text{Let $\\varepsilon > 0$. Since $0 \\leq f(x) < 1$, if $\\varepsilon \\geq 1$ any $r$ works, so} \\\\
                  \\text{assume $0 < \\varepsilon < 1$.} \\\\
                  \\text{[Scratch. For $x > 0$: } e^{-1/x} < \\varepsilon \\iff -\\frac{1}{x} < \\ln \\varepsilon \\iff x < -\\frac{1}{\\ln \\varepsilon}.] \\\\
                  \\text{Choose $r = -\\frac{1}{\\ln \\varepsilon} > 0$ and let $|x| < r$.} \\\\
                  \\text{If $x \\leq 0$, $|f(x) - f(0)| = 0 < \\varepsilon$.} \\\\
                  \\text{If $x > 0$, then $-\\frac{1}{x} < \\ln \\varepsilon$, so} \\\\
                  |f(x) - f(0)| = e^{-1/x} < e^{\\ln \\varepsilon} = \\varepsilon. \\\\[0.5em]
                  \\text{Hence $f$ is cts on $\\mathbb{R}$.} \\ \\blacksquare`,
      },
    ],
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
    examples: [
      {
        title: "Characteristic functions",
        content: `\\text{For any $A \\subseteq \\mathbb{R}^n$, the characteristic function of $A$ is} \\\\
                  \\chi_A : \\mathbb{R}^n \\to \\mathbb{R}, \\quad \\chi_A(\\mathbf{x}) = \\begin{cases} 1, & \\mathbf{x} \\in A \\\\ 0, & \\mathbf{x} \\notin A. \\end{cases} \\\\
                  \\text{Show that $\\chi_A$ is cts on $\\operatorname{int}(A)$ and $\\operatorname{int}(A^c)$ but discts} \\\\
                  \\text{on $\\partial A = \\overline{A} \\cap \\overline{A^c}$.} \\\\[1em]
                  \\text{\\textit{Cts on $\\operatorname{int}(A)$.}} \\\\
                  \\text{First, WTS $\\chi_A$ is cts on $\\operatorname{int}(A)$. That is, WTS} \\\\
                  \\forall \\mathbf{a} \\in \\operatorname{int}(A),\\ \\forall \\varepsilon > 0,\\ \\exists r > 0,\\ \\forall \\mathbf{x} \\in \\mathbb{R}^n, \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\implies |\\chi_A(\\mathbf{x}) - \\chi_A(\\mathbf{a})| < \\varepsilon. \\\\
                  \\text{Let $\\mathbf{a} \\in \\operatorname{int}(A)$ and $\\varepsilon > 0$. Since $\\operatorname{int}(A)$ is open, $\\exists r > 0$} \\\\
                  \\text{s.t. $B_r(\\mathbf{a}) \\subseteq \\operatorname{int}(A)$.} \\\\
                  \\text{So $\\forall \\mathbf{x} \\in \\mathbb{R}^n$ with $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$, we have $\\mathbf{x} \\in \\operatorname{int}(A) \\subseteq A$.} \\\\
                  \\text{So $|\\chi_A(\\mathbf{x}) - \\chi_A(\\mathbf{a})| = |1 - 1| = 0 < \\varepsilon$.} \\\\
                  \\text{Hence, $\\chi_A$ is cts on $\\operatorname{int}(A)$.} \\\\[1em]
                  \\text{\\textit{Cts on $\\operatorname{int}(A^c)$.}} \\\\
                  \\text{Now WTS $\\chi_A$ is cts on $\\operatorname{int}(A^c)$. That is, WTS} \\\\
                  \\forall \\mathbf{a} \\in \\operatorname{int}(A^c),\\ \\forall \\varepsilon > 0,\\ \\exists r > 0,\\ \\forall \\mathbf{x} \\in \\mathbb{R}^n \\text{ with } \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r, \\\\
                  \\text{we have } |\\chi_A(\\mathbf{x}) - \\chi_A(\\mathbf{a})| < \\varepsilon. \\\\
                  \\text{Let $\\mathbf{a} \\in \\operatorname{int}(A^c)$ and $\\varepsilon > 0$. Since $\\operatorname{int}(A^c)$ is open, $\\exists r > 0$} \\\\
                  \\text{s.t. $B_r(\\mathbf{a}) \\subseteq \\operatorname{int}(A^c)$.} \\\\
                  \\text{So $\\forall \\mathbf{x} \\in \\mathbb{R}^n$ with $\\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r$, we have $\\mathbf{x} \\in \\operatorname{int}(A^c) \\subseteq A^c$.} \\\\
                  \\text{So $|\\chi_A(\\mathbf{x}) - \\chi_A(\\mathbf{a})| = |0 - 0| = 0 < \\varepsilon$.} \\\\
                  \\text{Hence $\\chi_A$ is cts on $\\operatorname{int}(A^c)$.} \\\\[1em]
                  \\text{\\textit{Discts on $\\partial A$.}} \\\\
                  \\text{Now we proceed to show $\\chi_A$ is discts on $\\partial A = \\overline{A} \\cap \\overline{A^c}$.} \\\\
                  \\text{WTS $\\forall \\mathbf{a} \\in \\partial A = \\overline{A} \\cap \\overline{A^c}$, $\\exists \\varepsilon > 0$, $\\forall r > 0$, $\\exists \\mathbf{x} \\in \\mathbb{R}^n$ s.t.} \\\\
                  \\lVert \\mathbf{x} - \\mathbf{a} \\rVert < r \\text{ and } |\\chi_A(\\mathbf{x}) - \\chi_A(\\mathbf{a})| \\geq \\varepsilon. \\\\
                  \\text{Similarly to [[definition 22|past example]], our function maps to $0$ and $1$, so} \\\\
                  \\text{we will use an $\\varepsilon$ smaller than $1$ to show the jump.} \\\\
                  \\text{Let $\\mathbf{a} \\in \\partial A$ and let $\\varepsilon = \\frac{1}{2}$. Let $r > 0$ be arbitrary.} \\\\[0.5em]
                  \\text{We claim $B_r(\\mathbf{a})$ has points in $A$ and points in $A^c$.} \\\\
                  \\text{Since $\\mathbf{a} \\in \\overline{A}$, $\\exists (\\mathbf{x}_k) \\subseteq A$, $\\mathbf{x}_k \\to \\mathbf{a}$. So $\\exists N \\in \\mathbb{N}$, $\\forall k \\geq N$,} \\\\
                  \\text{$\\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert < r$. That is, $\\exists N \\in \\mathbb{N}$, $\\forall k \\geq N$, $\\mathbf{x}_k \\in B_r(\\mathbf{a})$.} \\\\
                  \\text{Similarly, $\\mathbf{a} \\in \\overline{A^c}$, so $\\exists (\\mathbf{y}_k) \\subseteq A^c$, $\\mathbf{y}_k \\to \\mathbf{a}$. So $\\exists N \\in \\mathbb{N}$,} \\\\
                  \\text{$\\forall k \\geq N$, $\\lVert \\mathbf{y}_k - \\mathbf{a} \\rVert < r$.} \\\\
                  \\text{In particular, $\\exists N \\in \\mathbb{N}$, $\\forall k \\geq N$, $\\mathbf{y}_k \\in B_r(\\mathbf{a})$.} \\\\
                  \\text{Therefore, $B_r(\\mathbf{a})$ has points in $A$ and points in $A^c$.} \\\\
                  \\text{Now we check the def of discts on both cases.} \\\\[0.5em]
                  \\text{\\textit{Case 1: $\\mathbf{a} \\in A$.} Then since $\\mathbf{a} \\in \\partial A = \\overline{A} \\cap \\overline{A^c}$, $\\mathbf{a} \\in \\overline{A^c}$.} \\\\
                  \\text{So by the claim $\\exists \\mathbf{y} \\in B_r(\\mathbf{a})$ with $\\mathbf{y} \\in A^c$.} \\\\
                  \\text{Therefore, $|\\chi_A(\\mathbf{y}) - \\chi_A(\\mathbf{a})| = |0 - 1| = 1 \\geq \\frac{1}{2}$.} \\\\[0.5em]
                  \\text{\\textit{Case 2: $\\mathbf{a} \\in A^c$.} Then since $\\mathbf{a} \\in \\partial A$, $\\mathbf{a} \\in \\overline{A}$.} \\\\
                  \\text{By our claim, $\\exists \\mathbf{x} \\in B_r(\\mathbf{a})$ with $\\mathbf{x} \\in A$.} \\\\
                  \\text{So $|\\chi_A(\\mathbf{x}) - \\chi_A(\\mathbf{a})| = |1 - 0| = 1 \\geq \\frac{1}{2}$.} \\\\[0.5em]
                  \\text{Hence, $\\forall \\mathbf{a} \\in \\partial A$, $\\exists \\varepsilon > 0$, $\\forall r > 0$, $\\exists \\mathbf{x} \\in B_r(\\mathbf{a})$,} \\\\
                  |\\chi_A(\\mathbf{x}) - \\chi_A(\\mathbf{a})| \\geq \\varepsilon. \\\\
                  \\text{So $\\chi_A$ is discts at $\\partial A$.} \\ \\blacksquare`,
      },
    ],
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
        content: `\\text{$f : \\mathbb{R} \\to \\mathbb{R}$, $f(0) = 1$ and $f(x) = 0$ for $x \\neq 0$.} \\\\[1em]
                  \\text{\\textit{Sol.}} \\\\
                  \\text{This is discts because $\\lim_{x \\to 0} f(x) = 0 \\neq f(0)$.} \\\\[0.5em]
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
                  \\text{In a [[definition 24|previous example]] we showed $f$ is cts on $\\mathbb{R}^n \\setminus \\{\\mathbf{0}\\}$.} \\\\
                  \\text{Now we show $\\lim_{\\mathbf{x} \\to \\mathbf{0}} f(\\mathbf{x}) = +\\infty$.} \\\\[1em]
                  \\text{\\textit{Proof.}} \\\\
                  \\text{Let $R > 0$.} \\\\
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
