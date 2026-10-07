import type { ChapterRef, HomeworkRef } from "@/app/components/notesFilter";

interface Solution {
  title?: string;
  content: string;
}

interface Exercise extends ChapterRef, HomeworkRef {
  number: number;
  title: string;
  problem: string;
  solution?: string | Solution[];
}

export const exercises: Exercise[] = [
  {
    number: 1,
    chapter: 4,
    section: 2,
    homework: 2,
    title: "Question 4.2.A",
    problem: `\\text{(a) If $(x_n)^{\\infty}_{n=1}$ is a sequence in $\\mathbb{R}^n$ with $\\lim_{n \\to \\infty} \\mathbf{x_n} = \\mathbf{a}$,} \\\\
             \\text{show that $\\lim_{n \\to \\infty} \\lVert \\mathbf{x}_n \\rVert = \\lVert \\mathbf{a} \\rVert$.} \\\\[0.5em]
             \\text{(b) Show by example that the converse is false.}`,
    solution: [
      {
        title: "Part (a)",
        content: `\\text{Choose $\\varepsilon > 0$.} \\\\
                  \\text{By hypothesis, $\\exists N \\in \\mathbb{N}$ s.t. $\\forall n \\geq N, \\ \\lVert \\mathbf{x}_n - \\mathbf{a} \\rVert < \\varepsilon$.} \\\\
                  \\text{By reverse triangle inequality, $| \\lVert \\mathbf{x}_n \\rVert - \\lVert \\mathbf{a} \\rVert | \\leq \\lVert \\mathbf{x}_n - \\mathbf{a} \\rVert < \\varepsilon$.} \\\\
                  \\text{Hence, $\\lim_{n \\to \\infty} \\lVert \\mathbf{x}_n \\rVert = \\lVert \\mathbf{a} \\rVert$.} \\ \\blacksquare`,
      },
      {
        title: "Part (b)",
        content: `\\text{Take the sequence $\\mathbf{x}_n = (-1)^n$ and $\\mathbf{a} = 1.$} \\\\
                  \\text{Then $\\lVert \\mathbf{x}_n \\rVert = 1$ and $\\lim_{n \\to \\infty} \\lVert \\mathbf{x}_n \\rVert = 1 = \\lVert a \\rVert$.} \\\\
                  \\text{However, one subsequence $(\\mathbf{x}_{2k})$ has $\\lim_{k \\to \\infty} \\left( (-1)^{2k} \\right) = 1$,} \\\\
                  \\text{and another subsequence $(\\mathbf{x}_{2k-1})$ has $\\lim_{k \\to \\infty} \\left( (-1)^{2k-1} \\right) = -1$.} \\\\
                  \\text{So $\\lim_{n \\to \\infty} \\mathbf{x}_n$ does not exist} \\\\
                  \\text{because two subsequences of $(\\mathbf{x}_n)$ converge to different limits.} \\\\
                  \\text{Thus, $\\lim_{n \\to \\infty} \\lVert \\mathbf{x}_n \\rVert = \\lVert \\mathbf{a} \\rVert \\nRightarrow \\lim_{n \\to \\infty} \\mathbf{x}_n = \\mathbf{a}$} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 2,
    chapter: 4,
    section: 2,
    homework: 2,
    title: "Question 4.2.B",
    problem: `\\text{Show that if $(\\mathbf{x}_k)$ is a sequence in $\\mathbb{R}^n$ such that $\\sum_{k \\geq 1} \\lVert \\mathbf{x}_k - \\mathbf{x}_{k+1} \\rVert < \\infty$,} \\\\
             \\text{then $(\\mathbf{x}_k)$ is a Cauchy sequence.}`,
    solution: `\\text{Let $\\varepsilon > 0$, and with $k \\in \\mathbb{N}$ let $S_k = \\sum_{i=1}^k \\lVert \\mathbf{x}_i - \\mathbf{x}_{i+1} \\rVert$. Set $S_0 = 0$.} \\\\
              \\text{By hypothesis, $(S_k)$ converges to some $S \\in \\mathbb{R}$.} \\\\
              \\text{So $\\exists N \\in \\mathbb{N}$ s.t. $| S_k - S | < \\varepsilon/2$ when $k \\geq N$.} \\\\
              \\text{Let $k,l \\geq N+1$. If $k=l$, $\\|\\mathbf{x}_k - \\mathbf{x}_l \\| = 0 < \\varepsilon$, so WLOG $l > k$.} \\\\
              \\begin{aligned}
                \\lVert \\mathbf{x}_k - \\mathbf{x}_l \\rVert &\\leq \\lVert \\mathbf{x}_k - \\mathbf{x}_{k+1} \\rVert + \\lVert \\mathbf{x}_{k+1} - \\mathbf{x}_{k+2} \\rVert + \\dots + \\lVert \\mathbf{x}_{l-1} - \\mathbf{x}_{l} \\rVert \\\\
                &= S_{l-1} - S_{k-1} \\\\
                &= S_{l-1} - S + S - S_{k-1} \\\\
                &\\leq |S_{l-1} - S| + |S - S_{k-1}| \\\\
                &= |S_{l-1} - S| + |S_{k-1} - S| \\\\
                &< \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon. \\quad (\\text{Since } k-1, l-1 \\geq N)
              \\end{aligned} \\\\
              \\text{Hence, $\\| \\mathbf{x}_k - \\mathbf{x}_l \\| < \\varepsilon$ whenever $k, l \\geq N+1,$ so $(\\mathbf{x}_k)$ is Cauchy.} \\ \\blacksquare`,
  },
  {
    number: 3,
    chapter: 4,
    section: 2,
    homework: 2,
    title: "Question 4.2.D",
    problem: `\\text{Let $x_0 \\in \\mathbb{R}^n$ and $R > 0$. Prove that $\\{x \\in \\mathbb{R}^n : \\|\\mathbf{x} - \\mathbf{x_0}\\| \\leq R \\}$ is complete.}`,
    solution: `\\text{Say $S = \\{ x \\in \\mathbb{R}^n : \\|\\mathbf{x} - \\mathbf{x}_0 \\| \\leq R \\}$.} \\\\
              \\text{Let $\\varepsilon > 0$ and let $(\\mathbf{x}_k)$ be a cauchy sequence in $S$.} \\\\
              \\text{Then $(\\mathbf{x}_k)$ is convergent in $\\mathbb{R}^n$, since $\\mathbb{R}^n$ is complete.} \\\\
              \\text{So $\\exists \\mathbf{a} \\in \\mathbb{R}^n$ s.t. $\\lim_{k \\to \\infty} \\mathbf{x}_{k} = \\mathbf{a}$. Now to show $\\mathbf{a} \\in S$,} \\\\
              \\text{observe $\\|\\mathbf{a} - \\mathbf{x}_0 \\| \\leq \\| \\mathbf{a} - \\mathbf{x}_k \\| + \\|\\mathbf{x}_k - \\mathbf{x}_0 \\| \\leq \\|\\mathbf{x}_k - \\mathbf{a} \\| + R$.} \\\\
              \\text{By Lemma 4.2.2, $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$ implies $\\lim_{k \\to \\infty} \\|\\mathbf{x}_k - \\mathbf{a} \\| = 0$.} \\\\
              \\text{Since $\\|\\mathbf{a} - \\mathbf{x}_0\\|$ does not depend on $k$, letting $k \\to \\infty$ in the inequality above gives} \\\\
              \\text{$\\|\\mathbf{a} - \\mathbf{x}_0 \\| \\leq 0 + R$, and thus, $\\mathbf{a} \\in S$.} \\\\
              \\text{Hence, $(\\mathbf{x}_k)$ is convergent in S.} \\ \\blacksquare`,
  },
  {
    number: 4,
    chapter: 4,
    section: 2,
    homework: 2,
    title: "Question 4.2.E",
    problem: `\\text{Let $M$ be a subspace of $\\mathbb{R}^n$.} \\\\[0.5em]
             \\text{(a) Let $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_m\\}$ be an [[definition 6|orthonormal basis]] for $M$.} \\\\
             \\text{Formulate an analogue of Lemma 4.2.3 for $M$ and prove it.} \\\\[0.5em]
             \\text{(b) Prove that $M$ is complete.}`,
    solution: [
      {
        title: "Part (a)",
        content: `\\text{First we record the coordinate formula. Since $M = \\operatorname{span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_m\\}$,} \\\\
                  \\text{every $\\mathbf{x} \\in M$ can be written as $\\mathbf{x} = \\sum_{i=1}^m c_i \\mathbf{v}_i$, and for each $j \\in \\{1, \\dots, m\\}$,} \\\\
                  \\langle \\mathbf{x}, \\mathbf{v}_j \\rangle = \\Big\\langle \\sum_{i=1}^m c_i \\mathbf{v}_i, \\ \\mathbf{v}_j \\Big\\rangle = \\sum_{i=1}^m c_i \\langle \\mathbf{v}_i, \\mathbf{v}_j \\rangle = c_j, \\\\
                  \\text{since $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_m\\}$ is orthonormal. Therefore} \\\\
                  \\mathbf{x} = \\sum_{i=1}^m \\langle \\mathbf{x}, \\mathbf{v}_i \\rangle \\mathbf{v}_i \\qquad \\text{and} \\\\
                  \\|\\mathbf{x}\\|^2 = \\Big\\langle \\sum_{i=1}^m c_i \\mathbf{v}_i, \\sum_{j=1}^m c_j \\mathbf{v}_j \\Big\\rangle = \\sum_{i=1}^m c_i^2 = \\sum_{i=1}^m |\\langle \\mathbf{x}, \\mathbf{v}_i \\rangle|^2. \\\\[1em]
                  \\textbf{Lemma} \\text{ (analogue of Lemma 4.2.3).} \\\\
                  \\textit{Let $(\\mathbf{x}_k)$ be a sequence in $M$ and let $\\mathbf{a} \\in M$. Then $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$ if and only if} \\\\
                  \\textit{$\\lim_{k \\to \\infty} \\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle = \\langle \\mathbf{a}, \\mathbf{v}_j \\rangle$ for every $j \\in \\{1, \\dots, m\\}$.} \\\\[1em]
                  \\text{($\\Rightarrow$) Suppose $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$ and let $\\varepsilon > 0$.} \\\\
                  \\text{Then $\\exists N \\in \\mathbb{N}$ s.t. $\\forall k \\geq N$, $\\|\\mathbf{x}_k - \\mathbf{a}\\| < \\varepsilon$.} \\\\
                  \\text{Fix $j \\in \\{1, \\dots, m\\}$. By [[theorem 1|Cauchy-Schwarz]], for all $k \\geq N$,} \\\\
                  |\\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle - \\langle \\mathbf{a}, \\mathbf{v}_j \\rangle| = |\\langle \\mathbf{x}_k - \\mathbf{a}, \\mathbf{v}_j \\rangle| \\leq \\|\\mathbf{x}_k - \\mathbf{a}\\| \\, \\|\\mathbf{v}_j\\| = \\|\\mathbf{x}_k - \\mathbf{a}\\| < \\varepsilon, \\\\
                  \\text{since $\\|\\mathbf{v}_j\\| = 1$. Hence $\\lim_{k \\to \\infty} \\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle = \\langle \\mathbf{a}, \\mathbf{v}_j \\rangle$ for every $j$.} \\\\[1em]
                  \\text{($\\Leftarrow$) Suppose $\\lim_{k \\to \\infty} \\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle = \\langle \\mathbf{a}, \\mathbf{v}_j \\rangle$ for every $j \\in \\{1, \\dots, m\\}$, and let $\\varepsilon > 0$.} \\\\
                  \\text{For each $j$ choose $N_j \\in \\mathbb{N}$ s.t. $\\forall k \\geq N_j$,} \\\\
                  |\\langle \\mathbf{x}_k - \\mathbf{a}, \\mathbf{v}_j \\rangle| = |\\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle - \\langle \\mathbf{a}, \\mathbf{v}_j \\rangle| < \\frac{\\varepsilon}{\\sqrt{m}}. \\\\
                  \\text{Since $(\\mathbf{x}_k) \\subseteq M$ and $\\mathbf{a} \\in M$, and $M$ is a subspace, we have $\\mathbf{x}_k - \\mathbf{a} \\in M$,} \\\\
                  \\text{so the coordinate formula above applies to it:} \\\\
                  \\|\\mathbf{x}_k - \\mathbf{a}\\|^2 = \\sum_{j=1}^m |\\langle \\mathbf{x}_k - \\mathbf{a}, \\mathbf{v}_j \\rangle|^2. \\\\
                  \\text{Set $N = \\max\\{N_1, \\dots, N_m\\}$. Then for all $k \\geq N$,} \\\\
                  \\|\\mathbf{x}_k - \\mathbf{a}\\|^2 = \\sum_{j=1}^m |\\langle \\mathbf{x}_k - \\mathbf{a}, \\mathbf{v}_j \\rangle|^2 < \\sum_{j=1}^m \\left( \\frac{\\varepsilon}{\\sqrt{m}} \\right)^2 = \\sum_{j=1}^m \\frac{\\varepsilon^2}{m} = \\varepsilon^2. \\\\
                  \\text{Thus $\\forall k \\geq N$, $\\|\\mathbf{x}_k - \\mathbf{a}\\| < \\varepsilon$, i.e. $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$.} \\ \\blacksquare`,
      },
      {
        title: "Part (b)",
        content: `\\text{Suppose $(\\mathbf{x}_k)$ is a Cauchy sequence in $M$, and let $\\varepsilon > 0$.} \\\\
                  \\text{So $\\exists N \\in \\mathbb{N}$ s.t. $\\|\\mathbf{x}_k - \\mathbf{x}_l\\| < \\varepsilon$ whenever $k, l \\geq N$.} \\\\
                  \\text{Fix $j \\in \\{1, \\dots, m\\}$. By [[theorem 1|Cauchy-Schwarz]], for all $k, l \\geq N$,} \\\\
                  |\\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle - \\langle \\mathbf{x}_l, \\mathbf{v}_j \\rangle| = |\\langle \\mathbf{x}_k - \\mathbf{x}_l, \\mathbf{v}_j \\rangle| \\leq \\|\\mathbf{x}_k - \\mathbf{x}_l\\| < \\varepsilon, \\\\
                  \\text{so the real sequence $\\left( \\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle \\right)_{k=1}^{\\infty}$ is Cauchy.} \\\\
                  \\text{Since $\\mathbb{R}$ is complete, it converges to some $\\alpha_j \\in \\mathbb{R}$.} \\\\
                  \\text{Define $\\mathbf{a} = \\sum_{j=1}^m \\alpha_j \\mathbf{v}_j$. Then $\\mathbf{a} \\in M$, and by the coordinate formula from part (a),} \\\\
                  \\text{$\\langle \\mathbf{a}, \\mathbf{v}_j \\rangle = \\alpha_j$ for each $j$. Hence} \\\\
                  \\lim_{k \\to \\infty} \\langle \\mathbf{x}_k, \\mathbf{v}_j \\rangle = \\alpha_j = \\langle \\mathbf{a}, \\mathbf{v}_j \\rangle \\qquad \\text{for every } j \\in \\{1, \\dots, m\\}. \\\\
                  \\text{By the Lemma of part (a), $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$ with $\\mathbf{a} \\in M$.} \\\\
                  \\text{So every Cauchy sequence in $M$ converges to a limit in $M$, and therefore $M$ is complete.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 5,
    chapter: 4,
    section: 2,
    homework: 2,
    title: "Question 4.2.F",
    problem: `\\text{Let $\\mathbf{v}_0 = (x_0, y_0)$ with $0 < x_0 < y_0$. Define} \\\\
             \\mathbf{v}_{n+1} = (x_{n+1}, y_{n+1}) = \\left( \\sqrt{x_n y_n}, \\ \\frac{x_n + y_n}{2} \\right) \\quad \\text{for all } n \\geq 0. \\\\[0.5em]
             \\text{(a) Show by induction that $0 < x_n < x_{n+1} < y_{n+1} < y_n$.} \\\\
             \\text{(b) Then estimate $y_{n+1} - x_{n+1}$ in terms of $y_n - x_n$.} \\\\
             \\text{(c) Thereby show that there is a number $c$ such that $\\lim_{n \\to \\infty} \\mathbf{v}_n = (c,c)$.}`,
    solution: [
      {
        title: "Part (a)",
        content: `\\text{We induct on the statement $P(n): 0 < x_n < y_n$.} \\\\
                  \\text{\\textbf{Base case} ($n = 0$): $0 < x_0 < y_0$ is given.} \\\\
                  \\text{\\textbf{Inductive step:} assume $0 < x_n < y_n$. We verify each inequality in the chain.} \\\\
                  \\text{First, $x_n > 0$ and $y_n > 0$, so $x_{n+1} = \\sqrt{x_n y_n} > 0$, and} \\\\
                  x_{n+1} = \\sqrt{x_n y_n} > \\sqrt{x_n x_n} = x_n, \\\\
                  \\text{since $y_n > x_n$ and the square root is an increasing function.} \\\\
                  \\text{Next, since $\\sqrt{x_n} \\neq \\sqrt{y_n}$ we have $\\left( \\sqrt{y_n} - \\sqrt{x_n} \\right)^2 > 0$, so} \\\\
                  y_{n+1} - x_{n+1} = \\frac{x_n + y_n}{2} - \\sqrt{x_n y_n} = \\frac{x_n - 2\\sqrt{x_n y_n} + y_n}{2} = \\frac{\\left( \\sqrt{y_n} - \\sqrt{x_n} \\right)^2}{2} > 0, \\\\
                  \\text{which gives $x_{n+1} < y_{n+1}$.} \\\\
                  \\text{Finally, since $x_n < y_n$,} \\\\
                  y_{n+1} = \\frac{x_n + y_n}{2} < \\frac{y_n + y_n}{2} = y_n. \\\\
                  \\text{Combining, $0 < x_n < x_{n+1} < y_{n+1} < y_n$. In particular $0 < x_{n+1} < y_{n+1}$, which is $P(n+1)$.} \\\\
                  \\text{By induction, $0 < x_n < x_{n+1} < y_{n+1} < y_n$ holds for all $n \\geq 0$.} \\ \\blacksquare`,
      },
      {
        title: "Part (b)",
        content: `\\text{By part (a), $0 < x_n < y_n$, so $\\sqrt{y_n} - \\sqrt{x_n} > 0$ and $\\sqrt{x_n} > 0$. Hence} \\\\
                  \\text{$\\sqrt{y_n} - \\sqrt{x_n} < \\sqrt{y_n} + \\sqrt{x_n}$, and} \\\\
                  \\begin{aligned}
                    y_{n+1} - x_{n+1} &= \\frac{x_n + y_n}{2} - \\sqrt{x_n y_n} \\\\
                    &= \\frac{x_n - 2\\sqrt{x_n y_n} + y_n}{2} \\\\
                    &= \\frac{\\left( \\sqrt{y_n} - \\sqrt{x_n} \\right)^2}{2} \\\\
                    &< \\frac{\\left( \\sqrt{y_n} + \\sqrt{x_n} \\right) \\left( \\sqrt{y_n} - \\sqrt{x_n} \\right)}{2} \\\\
                    &= \\frac{y_n - x_n}{2}.
                  \\end{aligned} \\\\
                  \\text{So $0 < y_{n+1} - x_{n+1} < \\dfrac{y_n - x_n}{2}$ for all $n \\geq 0$.} \\ \\blacksquare`,
      },
      {
        title: "Part (c)",
        content: `\\text{From part (a) we know, for every $n \\geq 1$,} \\\\
                  0 < x_0 < x_{n-1} < x_n < x_{n+1} < y_{n+1} < y_n < y_{n-1} < y_0. \\\\
                  \\text{Then $(x_n)$ is strictly increasing and bounded above by $y_0$, and $(y_n)$ is strictly decreasing and} \\\\
                  \\text{bounded below by $x_0$. By the Monotone Convergence Theorem, $\\lim_{n \\to \\infty} x_n = c$ and} \\\\
                  \\text{$\\lim_{n \\to \\infty} y_n = d$ for some $c, d \\in \\mathbb{R}$.} \\\\
                  \\text{We claim by induction that $0 < y_n - x_n \\leq \\dfrac{y_0 - x_0}{2^n}$ for all $n \\geq 0$.} \\\\
                  \\text{\\textbf{Base case} ($n=0$): $y_0 - x_0 \\leq \\dfrac{y_0 - x_0}{2^0} = y_0 - x_0$, and it is positive by hypothesis.} \\\\
                  \\text{\\textbf{Inductive step:} assume $0 < y_n - x_n \\leq \\dfrac{y_0 - x_0}{2^n}$. By part (b),} \\\\
                  0 < y_{n+1} - x_{n+1} < \\frac{y_n - x_n}{2} \\leq \\frac{y_0 - x_0}{2^{n+1}}, \\\\
                  \\text{which completes the induction.} \\\\
                  \\text{Note that $\\lim_{n \\to \\infty} \\dfrac{y_0 - x_0}{2^n} = 0$, so by the Squeeze Theorem,} \\\\
                  \\lim_{n \\to \\infty} (y_n - x_n) = 0 = \\lim_{n \\to \\infty} y_n - \\lim_{n \\to \\infty} x_n = d - c \\implies c = d. \\\\
                  \\text{Hence} \\\\
                  \\lim_{n \\to \\infty} \\mathbf{v}_n = \\left( \\lim_{n \\to \\infty} x_n, \\ \\lim_{n \\to \\infty} y_n \\right) = (c,c), \\\\
                  \\text{where the limit of the vector sequence is taken coordinatewise by Lemma 4.2.3.} \\\\
                  \\text{This value $c$ is the arithmetic--geometric mean of $x_0$ and $y_0$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 6,
    chapter: 4,
    section: 2,
    homework: 2,
    title: "Question 4.2.H",
    problem: `\\text{Let } T = \\begin{bmatrix} 5/4 & -1/4 \\\\ 3/4 & 1/4 \\end{bmatrix}\\text{. Set $\\mathbf{x}_n = T^n(1,0)$ for $n \\geq 1$.} \\\\[0.5em]
             \\text{(a) Prove that $(\\mathbf{x}_n)$ converges and find the limit $\\mathbf{y}$.} \\\\
             \\text{(b) Find an explicit $N$ so that $\\|\\mathbf{x}_n - \\mathbf{y}\\| < \\frac{1}{2} 10^{-100}$ for all $n \\geq N$.}`,
    solution: [
      {
        title: "Part (a)",
        content: `\\text{By way of induction, we show that} \\\\
                  \\mathbf{x}_n = \\left( \\dfrac{3 - 2^{-n}}{2}, \\ \\dfrac{3(1 - 2^{-n})}{2} \\right) \\quad \\text{for all } n \\geq 1. \\\\
                  \\text{\\textbf{Base case} ($n=1$): $\\mathbf{x}_1 = T(1,0) = \\left( \\frac{5}{4}, \\frac{3}{4} \\right)$, and the formula gives} \\\\
                  \\left( \\frac{3 - 2^{-1}}{2}, \\ \\frac{3(1 - 2^{-1})}{2} \\right) = \\left( \\frac{5/2}{2}, \\ \\frac{3/2}{2} \\right) = \\left( \\frac{5}{4}, \\ \\frac{3}{4} \\right). \\quad \\checkmark \\\\
                  \\text{\\textbf{Inductive step:} assume $\\mathbf{x}_n = \\left( \\dfrac{3 - 2^{-n}}{2}, \\ \\dfrac{3(1 - 2^{-n})}{2} \\right)$.} \\\\
                  \\text{Since $\\mathbf{x}_{n+1} = T \\mathbf{x}_n$, the first coordinate of $\\mathbf{x}_{n+1}$ is} \\\\
                  \\begin{aligned}
                    \\frac{5}{4} \\left( \\frac{3 - 2^{-n}}{2} \\right) - \\frac{1}{4} \\left( \\frac{3(1 - 2^{-n})}{2} \\right) &= \\frac{5(3 - 2^{-n}) - 3(1 - 2^{-n})}{8} \\\\
                    &= \\frac{15 - 5 \\cdot 2^{-n} - 3 + 3 \\cdot 2^{-n}}{8} \\\\
                    &= \\frac{12 - 2 \\cdot 2^{-n}}{8} \\\\
                    &= \\frac{3 - 2^{-(n+1)}}{2},
                  \\end{aligned} \\\\
                  \\text{and the second coordinate of $\\mathbf{x}_{n+1}$ is} \\\\
                  \\begin{aligned}
                    \\frac{3}{4} \\left( \\frac{3 - 2^{-n}}{2} \\right) + \\frac{1}{4} \\left( \\frac{3(1 - 2^{-n})}{2} \\right) &= \\frac{3(3 - 2^{-n}) + 3(1 - 2^{-n})}{8} \\\\
                    &= \\frac{9 - 3 \\cdot 2^{-n} + 3 - 3 \\cdot 2^{-n}}{8} \\\\
                    &= \\frac{12 - 6 \\cdot 2^{-n}}{8} \\\\
                    &= \\frac{3 - 3 \\cdot 2^{-(n+1)}}{2} \\\\
                    &= \\frac{3 \\left( 1 - 2^{-(n+1)} \\right)}{2}.
                  \\end{aligned} \\\\
                  \\text{So the $n+1$ case holds, and the formula is valid for all $n \\geq 1$.} \\\\
                  \\text{Since $\\lim_{n \\to \\infty} 2^{-n} = 0$, each coordinate converges, so by Lemma 4.2.3,} \\\\
                  \\lim_{n \\to \\infty} \\mathbf{x}_n = \\left( \\frac{3}{2}, \\ \\frac{3}{2} \\right) = \\mathbf{y}. \\ \\blacksquare`,
      },
      {
        title: "Part (b)",
        content: `\\text{Observe that} \\\\
                  \\mathbf{x}_n - \\mathbf{y} = \\left( \\frac{3 - 2^{-n}}{2}, \\ \\frac{3(1 - 2^{-n})}{2} \\right) - \\left( \\frac{3}{2}, \\ \\frac{3}{2} \\right) = \\left( \\frac{-2^{-n}}{2}, \\ \\frac{-3 \\cdot 2^{-n}}{2} \\right), \\\\
                  \\text{so} \\\\
                  \\|\\mathbf{x}_n - \\mathbf{y}\\| = \\frac{2^{-n}}{2} \\sqrt{1 + 9} = \\frac{\\sqrt{10}}{2} \\, 2^{-n}. \\\\
                  \\text{Set $N = 400$. We show $\\|\\mathbf{x}_n - \\mathbf{y}\\| = \\frac{\\sqrt{10}}{2} 2^{-n} < \\frac{1}{2} 10^{-100}$ for all $n \\geq N$.} \\\\
                  \\text{It suffices to prove the inequality at $n = N$, since $\\frac{\\sqrt{10}}{2} 2^{-n}$ is decreasing in $n$.} \\\\
                  \\text{Cancelling the factor of $\\frac{1}{2}$, the claim is equivalent to} \\\\
                  \\sqrt{10} \\cdot 2^{-400} < 10^{-100} \\iff 16^{-100} < \\frac{10^{-100}}{\\sqrt{10}} \\iff \\left( \\frac{16}{10} \\right)^{100} > \\sqrt{10}, \\\\
                  \\text{using $2^{-400} = \\left( 2^4 \\right)^{-100} = 16^{-100}$.} \\\\
                  \\text{Since $\\frac{16}{10} > 1$, the sequence $\\left( \\frac{16}{10} \\right)^k$ is increasing in $k$, so} \\\\[0.5em]
                  \\left( \\frac{16}{10} \\right)^{100} > \\left( \\frac{16}{10} \\right)^{3} = 4.096 > \\sqrt{10}, \\\\
                  \\text{because $\\sqrt{10} < \\sqrt{16} = 4$.} \\\\
                  \\text{Hence $\\|\\mathbf{x}_n - \\mathbf{y}\\| = \\frac{\\sqrt{10}}{2} 2^{-n} < \\frac{1}{2} 10^{-100}$ whenever $n \\geq 400$.} \\ \\blacksquare`,
      },
    ],
  },
  {
    number: 7,
    homework: 2,
    title: "Additional Problem",
    problem: `\\text{If $(\\mathbf{x}_k) \\subseteq \\mathbb{R}^n$ converges to $\\mathbf{a} \\in \\mathbb{R}^n$ and $\\|\\mathbf{x}_k\\| \\leq 81$ for all $k \\in \\mathbb{N}$,} \\\\
             \\text{then $\\|\\mathbf{a}\\| \\leq 81$.}`,
    solution: `\\text{By way of contradiction, suppose $\\|\\mathbf{a}\\| > 81$.} \\\\
              \\text{Let $\\varepsilon = \\|\\mathbf{a}\\| - 81 > 0$.} \\\\
              \\text{Since $\\lim_{k \\to \\infty} \\mathbf{x}_k = \\mathbf{a}$, there is some $k \\in \\mathbb{N}$ with $\\|\\mathbf{a} - \\mathbf{x}_k\\| < \\varepsilon$.} \\\\
              \\text{For that $k$, the [[theorem 3|triangle inequality]] gives} \\\\
              \\|\\mathbf{a}\\| \\leq \\|\\mathbf{a} - \\mathbf{x}_k\\| + \\|\\mathbf{x}_k\\| < \\varepsilon + 81 = \\|\\mathbf{a}\\|, \\\\
              \\text{so $\\|\\mathbf{a}\\| < \\|\\mathbf{a}\\|$, which is a contradiction.} \\\\
              \\text{Hence $\\|\\mathbf{a}\\| \\leq 81$.} \\ \\blacksquare`,
  },
  // Template:
  // {
  //   number: 1,
  //   chapter: 1,
  //   section: 1,
  //   homework: 1, // if it was assigned; a problem can have a homework, a chapter/section, or both
  //   title: "Exercise title",
  //   problem: `\\text{Problem...}`,
  //   solution: `\\text{Solution...}`,
  //   // or multiple parts:
  //   // solution: [
  //   //   { title: "Part (a)", content: `\\text{...}` },
  //   //   { title: "Part (b)", content: `\\text{...}` },
  //   // ],
  // },
];
