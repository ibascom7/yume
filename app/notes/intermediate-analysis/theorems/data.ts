export const theorems = [
  {
    number: 1,
    title: "5.1.9 Sequential Criterion for Limits",
    statement: `\\text{Let } f: D \\to \\R 
                \\\\ \\text{and let c be an accumulation point of D.}
                \\\\ \\text{Then } \\lim_{x \\to c} f(x) = L 
                \\\\ \\text{iff for every sequence } (s_n) \\in  D 
                \\\\ \\text{that converges to } c \\text{ with } s_n \\neq c \\ \\ \\forall n \\in \\N, 
                \\\\ \\text{the sequence } (f(s_n)) \\text{ converges to } L.           
    `,
    proof: `\\text{Suppose that } \\lim_{x \\to c} f(x) = L
            \\\\ \\text{and let } (s_n) \\text{ be a sequence in } D \\text{ with } s_n \\to c \\text{ and } s_n \\neq c \\ \\ \\forall n.
            \\\\ \\text{We must show that } \\lim_{n \\to \\infty} f(s_n) = L.
            \\\\ \\text{Since } \\lim_{x \\to c} f(x) = L, 
            \\\\ \\text{we have, } \\ \\forall \\varepsilon > 0 \\ \\ \\exists \\delta > 0 \\text{ such that } |f(x) - L| < \\varepsilon
            \\\\ \\text{whenever } x \\in D \\text{ and } 0 < |x - c| < \\delta  \\ (\\text{By } [[definition 1]]).
            \\\\ \\text{Furthermore, since } s_n \\to c, \\ \\exists N \\in \\N
            \\\\ \\text{such that } n \\geq N \\text{ implies that } |s_n - c| < \\delta. 
            \\\\ \\text{Thus for } n \\geq N \\text{ we have } 0 < |s_n - c| < \\delta.
            \\\\ \\text{and } s_n \\in D, \\text{ so that } |f(s_n) - L < \\varepsilon.
            \\\\ \\text{Hence } \\lim_{n \\to \\infty} f(s_n) = L.
            \\\\ \\
            \\\\ \\text{Conversely, suppose that } \\lim_{x \\to c} f(x) \\neq L.
            \\\\ \\text{We must find a sequence } (s_n) \\text{ in } D 
            \\\\ \\text{with } s_n \\to c \\text{ and } s_n \\neq c, \\text{ such that } (f(s_n)) \\not\\to L. 
            \\\\ \\text{Since } \\lim_{x \\to c} f(x) \\neq L, \\ \\exists \\varepsilon > 0 \\text{ such that } \\ \\forall \\delta > 0
            \\\\ \\exists x \\in D \\text{ with } 0 < |x - c| < \\delta \\text{ such that } |f(x) - L| \\geq \\varepsilon.
            \\\\ \\text{In particular, } \\ \\forall n \\in \\N \\ \\ \\exists s_n \\in D
            \\\\ \\text{with } 0 < |x-c| < \\delta \\text{ such that } |f(x) - L \\geq \\varepsilon.
            \\\\ \\text{Now } (s_n) \\to c \\text{ with } s_n \\neq c \\ \\ \\forall n,
            \\\\ \\text{but } (f(s_n)) \\not\\to L.
    `
  },
  {
    number: 2,
    title: "5.1.14 Operations on Limits are Well-Defined",
    statement: `\\text{Let } f: D \\to \\R, \\text{ and } c \\text{ be an accumulation point of } D.
                \\\\ \\text{If } \\lim_{x \\to c} f(x) = L, \\ \\lim_{x \\to c} g(x) = M,
                \\\\ \\text{and } k \\in \\R, \\text{ then the following hold:}
                \\\\ \\
                \\\\ \\text{a. } \\lim_{x \\to c} (f+g)(x) = L + M.
                \\\\ \\
                \\\\ \\text{b. } \\lim_{x \\to c} (fg)(x) = LM.
                \\\\ \\
                \\\\ \\text{c. } \\lim_{x \\to c} (kf)(x) = kL.
                \\\\ \\
                \\\\ \\text{d. If } g(x) \\neq 0 \\ \\ \\forall x \\in D \\text{ and } M \\neq 0,
                \\\\ \\ \\ \\ \\ \\text{then } \\lim_{x \\to c} \\left(\\frac{f}{g}\\right)(x) = \\frac{L}{M}
    `,
    proof: [
      {
        title: `Proof of (a)`,
        content: `later.`
      },
      {
        title: `Proof of (b)`,
        content: `atode`
      },
      {
        title: `Proof of (c)`,
        content: `mata kondo`
      },
      {
        title: `Proof of (d)`,
        content: `ashita`
      }
    ]
  },
  {
    number: 3,
    title: "5.1.19 Sides of a Limit Must Match",
    statement: `\\text{Let } f \\text{ be a function defined on a deleted neighborhood}
                \\\\ \\text{of a point } c. \\text{ Then } \\lim_{x \\to c} f(x) = L
                \\\\ \\text{iff } \\lim_{x \\to c^+} f(x) = \\lim_{x \\to c^-} f(x)
    `,
    proof: `\\text{Later...}`
  },
  {
    number: 4,
    title: "5.2.3(a,b,d) Sequential Criterion for Continuity",
    statement: `\\text{Let} f: D \\to \\R \\text{ and let } c \\in D.
                \\\\ \\text{Then the following conditions are equivalent:}
                \\\\ \\
                \\\\ \\text{a. } f \\text{ is continuous at c.}
                \\\\ \\
                \\\\ \\text{b. If } (x_n) \\text{ is any sequence in } D \\text{ such that } (x_n) \\to c,
                \\\\ \\ \\ \\ \\ \\text{then } \\lim_{n \\to \\infty} f(x_n) = f(c).
                \\\\ \\
                \\\\ \\text{Furthermore, if } c \\text{ is an accumulation point of } D,
                \\\\ \\text{then the above are equivalent to:}
                \\\\ \\
                \\\\ \\text{d. } f \\text{ has a limit at } c \\text{ and } \\lim_{x \\to c} f(x) = f(c).
                `,
    proof: `\\text{Proof...}`
  },
  {
    number: 5,
    title: "5.2.7 Sequential Method for Discontinuity",
    statement: `\\text{Let } f: D \\to \\R \\text{ and let } c \\in D. 
                \\\\ \\text{Then } f \\text{ is discontinuous at } c \\text{ iff}
                \\\\ \\text{there exists a sequence } (x_n) \\text{ in } D 
                \\\\ \\text{such that } (x_n) \\to c
                \\\\ \\text{but the sequence } (f(x_n)) \\not\\to f(c).
    `,
    proof: `\\text{Proof...}`
  },
  {
    number: 6,
    title: "5.2.11 Operations on Functions Preserve Continuity",
    statement: `
                \\text{Let } f: D \\to \\R \\text{ and } g: D \\to \\R \\text{ and let } c \\in D. 
                \\\\ \\text{Suppose that } f \\text{ and } g \\text{ are continuous at } c. 
                \\\\ \\text{Then: }
                \\\\ \\
                \\\\ \\text{a. } f + g \\text{ is continuous at } c,
                \\\\ \\
                \\\\ \\text{b. } fg \\text{ is continuous at } c,
                \\\\ \\
                \\\\ \\text{c. } \\frac{f}{g} \\text{ continuous at } c \\text{ if } g(c) \\neq 0.
    `,          
    proof: `\\text{Proof...}`
  },
  {
    number: 7,
    title: "5.2.13 Composition Preserves Continuity",
    statement: `\\text{Let } f: D \\to \\R \\text{ and } g: E \\to \\R 
                \\\\ \\text{be functions such that} f(D) \\subseteq E. 
                \\\\ \\text{If } f \\text{ is continuous at a point } c \\in D 
                \\\\ \\text{and } g \\text{ is continuous at } f(c),
                \\\\ \\text{then the composition } g \\circ f: D \\to \\R 
                \\\\ \\text{is continuous at } c.  
    `,
    proof: `\\text{Proof...}`
  },
  {
    number: 8,
    title: "5.3.3 Image of Compact Subsets are Compact Subsets",
    statement: `\\text{Let } D \\text{ be a compact subset of } \\R
                \\\\ \\text{and suppose that } f: D \\to \\R \\text{ is continuous.}
                \\\\ \\text{Then } f(D) \\text{ is compact.}
    `,
    proof: `\\text{Proof...}`
  },
  {
    number: 9,
    title: "5.3.4 Extreme Value Theorem",
    statement: `\\text{Let } D \\text{ be a compact subset of } \\R
                \\\\ \\text{and suppose that } f: D \\to \\R \\text{ is continuous.}
                \\\\ \\text{Then } f \\text{ assumes minimum and maximum values on } D.
                \\\\ \\text{That is, } \\ \\exists x_1, x_2 \\in D
                \\\\ \\text{such that } f(x_1) \\leq f(x) \\leq f(x_2) \\ \\ \\forall x \\in D.
    `,
    proof: `\\text{Proof...}`
  },
  {
    number: 10,
    title: "5.3.7 Intermediate Value Theorem",
    statement: `\\text{Suppose that } f: [a,b] \\to \\R \\text{ is continuous.}
                \\\\ \\text{Then } f \\text{ has the intermediate value property on [a,b].}
                \\\\ \\text{That is, if } k \\text{ is any value between } f(a) \\text{ and } f(b)
                \\\\ (f(a) < k < f(b) \\text{ or } f(b) < k < f(a)),
                \\\\ \\text{then } \\ \\exists c \\in (a,b) \\text{ such that } f(c) = k.
    `,
    proof: `\\text{Proof...}`
  },
  {
    number: 11,
    title: "5.4.6 Continuity on a Compact Set Implies UC",
    statement: `\\text{Suppose } f: D \\to \\R \\text{ is continuous on a compact set } D.
                \\\\ \\text{Then } f \\text{ is uniformly continuous on } D.
    `,
    proof: `\\text{Proof...}`
  },
  {
    number: 12,
    title: "★ 5.4.8 UC Image of a Cauchy Sequence is Cauchy",
    statement: `\\text{Let } f: D \\to \\R \\text{ be uniformly continuous on } D
                \\\\ \\text{and suppose that } (x_n) \\text{ is a Cauchy sequence in } D.
                \\\\ \\text{Then } (f(x_n)) \\text{ is a Cauchy sequence}. 
    `,
    proof: [
      {
        title: "Textbook Proof",
        content: `\\text{Given any } \\varepsilon > 0, 
                  \\\\ \\text{since } f \\text{ is uniformly continuous on } D 
                  \\\\ \\text{there exists a } \\delta > 0 \\text{ such that}
                  \\\\ \\
                  \\\\ |f(x) - f(y)| < \\varepsilon \\text{ whenever } |x-y| < \\delta \\text{ and } x, y \\in D.
                  \\\\ \\
                  \\\\ \\text{Since } (x_n) \\text{ is Cauchy,}
                  \\\\ \\exists N \\in \\Z \\text{ such that } 
                  \\\\ \\ 
                  \\\\ |x_n - x_m| < \\delta \\text{ whenever } m, n \\geq N.
                  \\\\ \\
                  \\\\ \\text{Thus for } m, n \\geq N \\text{ we have } |f(x_n) - f(x_m)| < \\varepsilon,
                  \\\\ \\text{so } (f(x_n)) \\text{ is a Cauchy sequence.}
        `
      }
    ]
  },
  {
    number: 13,
    title: "6.1.3 Sequential Condition for Derivatives",
    statement: `\\text{Let } I \\text{ be an interval with } c \\in I, \\text{ and } f: I \\to \\R. 
                \\\\ \\
                \\\\ \\text{Then } f \\text{ is differentiable at } c \\text{ iff},
                \\\\ \\text{for every sequence } (x_n) \\in I \\text{ such that } (x_n) \\to c \\text{ and } x_n \\neq c \\ \\ \\forall n,
                \\\\ \\
                \\\\ \\text{the sequence } \\left(\\frac{f(x_n)-f(c)}{x_n-c}\\right) \\text{ converges.}
                \\\\ \\
                \\\\ \\text{Furthermore, if } f \\text{ is differentiable at } c,
                \\\\ \\text{then the sequence of quotients will converge to } f'(c).
    `,
    proof: `\\text{you thought}`
  },
  {
    number: 14,
    title: "★ 6.1.6 Differentiability Implies Continuity",
    statement: `\\text{If } f: I \\to \\R \\text{ is differentiable at } c \\in I,
                \\\\ \\text{then } f \\text{ is continuous at } c.
    `,
    proof: `\\text{For every } x \\in I \\text{ with } x \\neq c, \\text{ we have}
            \\\\ \\
            \\\\ f(x) = (x-c) \\frac{f(x)-f(c)}{x-c} + f(c).
            \\\\ \\
            \\\\ \\text{Since } f'(c) \\text{ exists, we know that }
            \\\\ \\
            \\\\ \\lim_{x \\to c} \\frac{f(x)-f(c)}{x-c} = f'(c) \\in \\R.
            \\\\ \\
            \\\\ \\text{Thus, by } [[theorem 2]], \\text{ we get}
            \\\\ \\
            \\\\ \\lim_{x \\to c} f(x) = \\left(\\lim_{x \\to c}(x-c)\\right) \\left(\\lim_{x \\to c}\\frac{f(x)-f(c)}{x-c}\\right) + \\lim_{x \\to c}f(c)
            \\\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ = 0 \\cdot f'(c) + f(c) = f(c)
            \\\\ \\
            \\\\ \\text{Hence [[theorem 4]] implies that } f \\text{ is continuous at } c.
    `
  },
  {
    number: 15,
    title: "6.1.7 Derivative Rules",
    statement: `\\text{Suppose that } f: I \\to \\R \\text{ and } g: I \\to \\R 
                \\\\ \\text{are differentiable at } c \\in I. Then
                \\\\ \\
                \\\\ \\text{a. If } k \\in \\R, \\text{ then } kf \\text{ is differentiable at } c \\text{ and}
                \\\\ \\
                \\\\ \\ \\ \\ \\ (kf)'(c) = k \\cdot f'(c).
                \\\\ \\ 
                \\\\ \\text{b. The function } f + g \\text{ is diffterentiable at } c \\text{ and}
                \\\\ \\
                \\\\ \\ \\ \\ \\ (f + g)'(c) = f'(c) + g'(c).
                \\\\ \\
                \\\\ \\text{c. (Product Rule) The function } fg \\text{ is differentiable at } c \\text{ and}
                \\\\ \\
                \\\\ \\ \\ \\ \\ (fg)'(c) = f(c)g'(c) + g(c)f'(c).
                \\\\ \\
                \\\\ \\text{d. (Quotient Rule) If } g(c) \\neq 0, \\text{ then } \\frac{f}{g} \\text{ is differentiable at } c \\text{ and}
                \\\\ \\
                \\\\ \\ \\ \\ \\ \\left(\\frac{f}{g}\\right)'(c) = \\frac{g(c)f'(c)-f(c)g'(c)}{[g(c)]^2}
    `,
    proof: `\\text{Proof...}`
  },
  {
    number: 16,
    title: "6.1.10 Chain Rule",
    statement: `\\text{Let } I, J \\text{ be intervals in } \\R, \\text{ let } f: I \\to \\R \\text{ and } g: J \\to \\R,
                \\\\ \\text{where } f(I) \\subseteq J, \\text{ and let } c \\in I.
                \\\\ \\
                \\\\ \\text{If } f \\text{ is differentiable at } c \\text{ and } g \\text{ is differentiable at } f(c),
                \\\\ \\text{then } g \\circ f \\text{ is differentiable at } c \\text{ and}
                \\\\ \\
                \\\\ (g \\circ f)'(c) = g'(f(c)) \\cdot f'(c).
    `,
    proof: `\\text{Proof...}`
  },
  {
    number: 17,
    title: "★ 6.2.2 Peaks and Troughs",
    statement: `\\text{If } f \\text{ is differentiable on an open interval } (a,b) 
                \\\\ \\text{and if } f \\text{ achieves its absolute max or min} \\text{ at } c \\in (a,b), 
                \\\\ \\text{then } f'(c) = 0.
    `,
    proof: `\\text{Suppose that } f \\text{ achieves its absolute max at c.}
            \\\\ \\text{That is, } f(x) \\leq f(c) \\ \\ \\forall x \\in (a, b).
            \\\\ \\
            \\\\ \\text{Let } (x_n) \\to c \\text{ such that } a < x_n < c \\ \\ \\forall n \\in \\N.
            \\\\ \\
            \\\\ \\text{Then, since } f \\text{ is differentiable at } c, 
            \\\\ \\text{[[theorem 13]] implies that the sequence}
            \\\\ \\
            \\\\ \\left(\\frac{f(x_n)-f(c)}{x_n-c}\\right) \\text{ converges to } f'(c).
            \\\\ \\
            \\\\ \\text{But each term in this sequence of quotients is positive,}
            \\\\ \\text{since } f(x_n) \\leq f(c) \\text{ and } x_n < c. \\text{ Thus } f'(c) \\geq 0.
            \\\\ \\
            \\\\ \\text{Similarly, let } (y_n) \\text{ be a sequence converging to } c \\text{ such that } 
            \\\\ c < y_n < b \\ \\ \\forall n. \\text{ Then the terms of the sequence}
            \\\\ \\
            \\\\ \\left(\\frac{f(y_n)-f(c)}{y_n-c}\\right)
            \\\\ \\
            \\\\ \\text{are all negative, since } f(y_n) \\leq f(c) \\text{ and } y_n > c.
            \\\\ \\text{Since the sequence of quotients again converges to } f'(c),
            \\\\ \\text{we must have } f'(c) \\leq 0. 
            \\\\ \\text{Therefore, we conclude that } f'(c) = 0.
            \\\\ \\
            \\\\ \\text{The absolute minimum case can be obtained}
            \\\\ \\text{by applying the above result to } -f.
    `
  },
  {
    number: 18,
    title: "6.2.4 Rolle's Theorem",
    statement: `\\text{Let } f \\text{ be a continuous function on } [a,b]
                \\\\ \\text{that is differentiable on } (a, b) 
                \\\\ \\text{and such that } f(a) = f(b). 
                \\\\ \\text{Then } \\exists c \\in (a,b) \\text{ such that } f'(c) = 0.
    `,
    proof: `\\text{Proof...}`
  },
  {
    number: 19,
    title: "6.2.5 Mean Value Theorem",
    statement: `\\text{Let } f \\text{ be a continuous function on } [a,b]
                \\\\ \\text{that is differentiable on } (a,b).
                \\\\ \\
                \\\\ \\text{Then } \\exists c \\in (a,b) \\text{ such that }
                \\\\ \\
                \\\\ f'(c) = \\frac{f(b)-f(a)}{b-a}.
    `,
    proof: `\\text{Proof...}`
  },
  {
    number: 20,
    title: "6.2.8 Constant Functions",
    statement: `\\text{Let } f \\text{ be continuous on } [a,b] \\text{ and differentiable on } (a,b).
                \\\\ \\text{If } f'(x) = 0 \\ \\ \\forall x \\in (a,b),
                \\\\ \\text{then } f \\text{ is constant on } [a,b].
    `,
    proof: `\\text{Proof...}`
  },
  {
    number: 21,
    title: "6.2.9 Same Derivative Implies Antiderivatives Offset by a Constant",
    statement: `\\text{Let } f \\text{ and } g \\text{ be continuous on } [a,b] \\text{ and differentiable on } (a,b).
                \\\\ \\text{Suppose that } f'(x) = g'(x) \\ \\ \\forall x \\in (a,b),
                \\\\ \\text{then } \\exists \\text{ a constant } C \\text{ such that } f = g + C \\text{ on } [a,b].
    `,
    proof: `\\text{Proof...}`
  },
  {
    number: 22,
    title: "★ 6.2.11 Strict Parity Implies Monotonicity",
    statement: `\\text{Let } f \\text{ be differentiable on an interval } I. \\text{ Then}
                \\\\ \\
                \\\\ \\text{a. If } f'(x) > 0 \\ \\ \\forall x \\in I, 
                \\\\ \\ \\ \\ \\ \\text{then } f \\text{ is strictly increasing on } I.
                \\\\ \\
                \\\\ \\text{b. If } f'(x) < 0 \\ \\ \\forall x \\in I, 
                \\\\ \\ \\ \\ \\ \\text{then } f \\text{ is strictly decreasing on } I.

    `,
    proof: `\\text{Suppose that } f'(x) > 0 \\ \\ \\forall x \\in I,
            \\\\ \\text{and let } x_1, x_2 \\in I \\text{ with } x_1 < x_2.
            \\\\ \\
            \\\\ \\text{Since } f \\text{ is continuous on } [x_1, x_2] \\text{ and differentiable on } (x_1, x_2),
            \\\\ \\text{[[theorem 19]](MVT) implies that } \\ \\exists c \\in (x_1, x_2) \\text{ such that}
            \\\\ \\
            \\\\ f(x_2) - f(x_1) = f'(c)(x_2 - x_1).
            \\\\ \\
            \\\\ \\text{Since } f'(c) > 0 \\text{ and } x_2 - x_1 > 0,
            \\\\ \\text{we must have } f(x_2) > f(x_1). \\text{ Thus } f \\text{ is strictly increasing on } I.
            \\\\ \\
            \\\\ \\text{Now, suppose that } f'(x) < 0 \\ \\ \\forall x \\in I,
            \\\\ \\text{and let } x_1, x_2 \\in I \\text{ with } x_1 < x_2.
            \\\\ \\
            \\\\ \\text{Since } f \\text{ is continuous on } [x_1, x_2] \\text{ and differentiable on } (x_1, x_2),
            \\\\ \\text{[[theorem 19]](MVT) implies that } \\ \\exists c \\in (x_1, x_2) \\text{ such that}
            \\\\ \\
            \\\\ f(x_2) - f(x_1) = f'(c)(x_2 - x_1).
            \\\\ \\
            \\\\ \\text{Since } f'(c) < 0 \\text{ and } x_2 - x_1 > 0, 
            \\\\ \\text{we must have } f(x_2) < f(x_1). \\text{ Thus } f \\text{ is strictly decreasing on } I.
    `
  },
  {
    number: 23,
    title: "6.2.13 Inverse Function Theorem",
    statement: `\\text{Suppose that } f \\text{ is differentiable on an interval } I
                \\\\ \\text{and } f'(x) \\neq 0 \\ \\ \\forall x \\in I.
                \\\\ \\
                \\\\ \\text{Then } f \\text{ is injective, } 
                \\\\ f^{-1} \\text{ is differentiable on } f(I), \\text{ and }
                \\\\ \\
                \\\\ (f^{-1})'(y) = \\frac{1}{f'(x)},
                \\\\ \\
                \\\\ \\text{where } y = f(x).
    `,
    proof: `\\text{Proof...}`
  },
  {
    number: 24,
    title: "7.1.5 Refinements of Partitions have More Accurate Darboux Sums",
    statement: `\\text{Let } f \\text{ be a bounded function on [a, b].} 
              \\\\ \\text{If } P \\text{ and } Q \\text{ are partiitions of } [a,b]
              \\\\ \\text{and } Q \\text{ is a refinement of } P, \\text{ then}
              \\\\ L(f, P) \\leq L(f, Q) \\leq U(f, Q) \\leq U(f, P). 
    `,
    proof: "\\text{Proof left as an exercise :)}"
  },
  {
    number: 25,
    title: "7.1.7 Lower Sum Below Upper Sum",
    statement: "\\text{Let } f \\text{ be a bounded function on } [a,b]. \\text{ Then } L(f) \\leq U(f).",
    proof: "Proof..."
  },
  {
    number: 26,
    title: "7.1.10 Criterion for Integrability",
    statement: `\\text{Let } f \\text{ be a bounded function on } [a,b]. 
                \\\\ \\text{Then } f \\text{ is integrable iff for each } \\varepsilon > 0 
                \\\\ \\exists \\text{ a partition } P \\text{ of } [a,b] \\text{ such that}
                \\\\ U(f, P) - L(f, P) < \\varepsilon.
    `,
    proof: "Proof..."
  },
  {
    number: 27,
    title: "★ 7.2.1 Monotone Implies Integrable",
    statement: `\\text{Let f be a monotone function on } [a,b]. \\text{ Then } f \\text{ is integrable.}
    `,
    proof: `\\text{Suppose that f is increasing on } [a,b]. 
            \\\\ \\text{We have } f(a) \\leq f(x) \\leq f(b) \\ \\ \\forall x \\in [a,b],
            \\\\ \\text{so } f \\text{ is bounded on } [a,b]. \\text{ Let } \\varepsilon > 0.
            \\\\ \\text{There exists } k > 0 \\text{ such that } k[f(b)-f(a)] < \\varepsilon.
            \\\\ \\text{Let } P = \\{x_0, x_1, ..., x_n \\} \\text{ be a partition of } [a,b] 
            \\\\ \\text{such that } \\Delta x_i \\leq k \\ \\ \\forall i \\in \\{1, ..., n \\}.
            \\\\ \\text{We have } U(f, P) - L(f, P) = \\sum_{i=1}^{n}(M_i - m_i) \\Delta x_i
            \\\\ = \\sum_{i=1}^{n}[f(x_i) - f(x_{i-1})] \\Delta x_i \\leq k \\sum_{i=1}^{n}[f(x_i) - f(x_{i-1})]
            \\\\ = k[f(b) - f(a)] < \\varepsilon.
            \\\\ \\text{So f is integrable on } [a,b] \\text{ by Theorem 26}.
            \\\\ \\
            \\\\ \\text{Suppose that f is decreasing on } [a,b].
            \\\\ \\text{We have } f(b) \\leq f(x) \\leq f(a) \\ \\ \\forall x \\in [a,b],
            \\\\ \\text{so } f \\text{ is bounded on } [a,b]. \\text{ Let } \\varepsilon > 0.
            \\\\ \\text{There exists } k > 0 \\text{ such that } k[f(a)-f(b)] < \\varepsilon.
            \\\\ \\text{Let } P = \\{x_0, x_1, ..., x_n \\} \\text{ be a partition of } [a,b]
            \\\\ \\text{such that } \\Delta x_i \\leq k \\ \\ \\forall i \\in \\{1, ..., n \\}.
            \\\\ \\text{We have } U(f, P) - L(f, P) = \\sum_{i=1}^{n} (M_i - m_i) \\Delta x_i
            \\\\ = \\sum_{i=1}^{n} [f(x_{i-1}) - f(x_i))] \\Delta x_i \\leq k \\sum_{i=1}^{n}[f(x_{i-1}) - f(x_i)]
            \\\\ = k[f(a) - f(b)] < \\varepsilon.
            \\\\ \\text{So } f \\text{ is integrable on } [a,b].
    ` 
  },
  {
    number: 28,
    title: "★ 7.2.2 Continuous Implies Integrable",
    statement: "\\text{Let } f \\text{ be a continuous function on } [a,b]. \\text{ Then } f \\text{ is integrable on } [a, b].",
    proof: `\\text{Since } f \\text{ is continuous on the compact set } [a,b], 
            \\\\ \\text{it is uniformly continuous on } [a,b].
            \\\\ \\text{Thus, } \\forall \\varepsilon > 0 \\ \\ \\exists \\delta > 0 \\text{ such that}
            \\\\ |f(x) - f(y)| < \\frac{\\varepsilon}{b-a} \\text{ whenever } x, y \\in [a,b] \\text{ and } |x-y| < \\delta.
            \\\\ \\text{Let } P = \\{x_0, ..., x_n \\} \\text{ be a partition of } [a,b] 
            \\\\ \\text{such that } \\Delta x_i < \\delta \\ \\ \\forall i \\in \\{1, ..., n \\}.
            \\\\ \\text{By the extreme value theorem, for each } i \\in \\{1, ..., n \\} 
            \\\\ \\exists s_i, t_i \\in [x_{i-1}, x_i] \\text{ such that }
            \\\\ m_i = f(s_i) \\text{ and } M_i = f(t_i).
            \\\\ \\text{We therefore have }
            \\\\ U(f, P) - L(f, P) = \\sum_{i=1}^{n}(M_i - m_i) \\Delta x_i
            \\\\ = \\sum_{i=1}^{n} [f(t_i) - f(s_i))] \\Delta x_i < \\sum_{i=1}^{n} \\frac{\\varepsilon}{b-a} \\Delta x_i
            \\\\ = \\frac{\\varepsilon}{b-a} \\sum_{i=1}^{n} \\Delta x_i = \\left( \\frac{\\varepsilon}{b-a} \\right)(b-a) = \\varepsilon.
            \\\\ \\text{Hence, } f \\text{ is integrable on } [a,b].
    `
  },
  {
    number: 29,
    title: "7.2.4 Linearity of The Integral",
    statement: `\\text{Let } f \\text{ and } g \\text{ be integrable functions on } [a,b] \\text{ and let } k \\in \\R. \\text{ Then}
                \\\\ \\
                \\\\ \\text{a. } kf \\text{ is integrable and } \\int_a^b kf = k \\int_a^b f, \\text{ and}
                \\\\ \\
                \\\\ \\text{b. } f+g \\text{ is integrable and } \\int_a^b (f+g) = \\int_a^b f + \\int_a^b g.
  
    `,
    proof: "Proof..."
  },
  {
    number: 30,
    title: "7.2.6 Split Bounds of Integral",
    statement: `\\text{Suppose that } f \\text{ is integrable on both } [a,c] \\text{ and } [c, b].
                \\\\ \\
                \\\\ \\text{Then } f \\text{ is integrable on } [a,b].
                \\\\ \\
                \\\\ \\text{Furthermore, } \\int_a^b f = \\int_a^c f + \\int_c^b f.
    `,
    proof: "Proof..."
  },
  {
    number: 31,
    title: "7.2.8 A Triangle Inequality for The Integral",
    statement: `\\text{Let } f \\text{ be integrable on } [a,b]. 
                \\\\ \\text{ Then } |f| \\text{ is integrable on } [a,b] \\text{ and}
                \\\\ \\left| \\int_a^b f \\right| \\leq \\int_a^b |f|. 
    `,
    proof: "Proof..."
  },
  {
    number: 32,
    title: "★ 7.3.1 Fundamental Theorem of Calculus 1",
    statement: `\\text{Let } f \\text{ be integrable on } [a,b]. \\ \\ \\forall x \\in [a,b], \\text{ let } F(x) = \\int_{a}^{x} f(t) dt.
                \\\\ \\
                \\\\ \\text{Then } F \\text{ is uniformly continuous on } [a,b].
                \\\\ \\
                \\\\ \\text{Furthermore, if } f \\text{ is continuous at } c \\in [a,b],
                \\\\ \\text{then } F \\text{ is differentiable at } c \\text{ and } F'(c) = f(c). 
    `,
    proof: `\\text{Since } f \\text{ is integrable on } [a,b], \\text{ it is bounded there,}
            \\\\ \\text{so } \\ \\exists B > 0 \\text{ such that } |f(x)| \\leq B \\ \\ \\forall x \\in [a,b].
            \\\\ \\
            \\\\ \\text{Let } \\varepsilon > 0. \\text{ Set } \\delta = \\frac{\\varepsilon}{B}.
            \\\\ \\
            \\\\ \\text{Then if } x, y \\in [a,b] \\text{ with } x < y \\text{ and } |x-y| < \\delta, 
            \\\\ \\
            \\\\ \\text{we have } |F(y) - F(x)| = \\left| \\int_a^y f(t)dt - \\int_a^x f(t)dt \\right|
            \\\\ \\
            \\\\ = \\left| \\int_x^y f(t)dt \\right| \\leq \\int_x^y |f(t)| dt \\leq \\int_x^y B dt
            \\\\ \\
            \\\\ = B(y-x) < B \\left( \\frac{\\varepsilon}{B} \\right) = \\varepsilon.
            \\\\ \\
            \\\\ \\text{Hence, } F \\text{ is uniformly continuous on [a,b].}
    `
  },
  {
    number: 33,
    title: "7.3.3 Chain Rule for FTC 1",
    statement: `\\text{Let } f \\text{ be continuous on } [a,b] 
                \\\\ \\text{and let } g \\text{ be differentiable on } [c,d], \\text{where } g([c,d]) \\subseteq [a,b].
                \\\\ \\
                \\\\ \\text{Define } F(x) = \\int_a^{g(x)} f, \\text{ for all } x \\in [a,b] 
                \\\\ \\
                \\\\ \\text{Then } F \\text{ is differentiable on } [c,d] \\text{ and } F'(x) = [f \\circ g(x)]\\cdot g'(x)
    `,
    proof: `\\text{This is it}
    `
  },
  {
    number: 34,
    title: "★ 7.3.5 Fundamental Theorem of Calculus 2",
    statement: `\\text{If } f \\text{ is differentiable on } [a,b] \\text{ and } f' \\text{ is integrable on [a,b],}
                \\\\ \\
                \\\\ \\text{then } \\int_a^b f' = f(b) - f(a)
    `,
    proof: `\\text{Let } P = \\{x_0, x_1, ..., x_n \\} \\text{ be any partition of [a,b].}
            \\\\ \\
            \\\\ \\text{By applying the mean value theorem to each subinterval } [x_{i-1}, x_i],
            \\\\ \\text{there exist points } t_i \\in (x_{i-1}, x_i) \\text{ such that}
            \\\\ f(x_i) - f(x_{i-1}) = f'(t_i)(x_i - x_{i-1}).
            \\\\ \\
            \\\\ \\text{So } f(b) - f(a) = \\sum_{i=1}^n [f(x_i) - f(x_{i-1})]
            \\\\ = \\sum_{i=1}^n f'(t_i) (x_i - x_{i-1}).
            \\\\ \\
            \\\\ \\text{Since } m_i(f') \\leq f'(t_i) \\leq M_i(f') \\ \\ \\forall i \\in \\{1, ..., n \\}, 
            \\\\ \\text{we have }L(f',P) \\leq f(b)-f(a) \\leq  U(f', P).
            \\\\ \\
            \\\\ \\text{Since this holds for every partition } P,
            \\\\ \\text{we have }L(f') \\leq f(b) - f(a) \\leq U(f').
            \\\\ \\
            \\\\ \\text{But } f' \\text{ is integrable on } [a,b] \\text{ by assumption, so }
            \\\\ \\
            \\\\ L(f') = U(f') = \\int_a^b f'.
            \\\\ \\
            \\\\ \\text{We conclude that } f(b) - f(a) = \\int_a^b f'. \\ \\ \\blacksquare
    `
  }
];
