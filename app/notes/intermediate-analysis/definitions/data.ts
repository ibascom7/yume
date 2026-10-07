export const definitions = [
  {
    number: 1,
    term: "5.1.1 Limit",
    definition: `\\text{Let } f: D \\to \\R \\text{ and let } c \\text{ be an accumulation point of D.}
                 \\\\ \\text{We say that a real number } L \\text{ is a limit of } f \\text{ at } c, \\text{ if}
                 \\\\ \\
                 \\\\ \\quad \\text{for each } \\varepsilon \\gt 0 \\text{ there exists a } \\delta \\gt 0
                 \\\\ \\quad \\text{such that } |f(x) - L| < \\varepsilon \\text{ whenever } x \\in D
                 \\\\ \\quad \\text{and } 0 < |x-c| < \\delta. 
                 `,
  },
  {
    number: 2,
    term: "5.1.13 Operations on Function",
    definition: `\\text{Let } f: D \\to \\R \\text{ and } g: D \\to \\R.
                 \\\\ \\
                 \\\\ \\quad \\text{a. The sum } f + g: D \\to \\R 
                 \\\\ \\quad \\ \\ \\ \\ \\text{is given by } (f+g)(x) = f(x)+g(x) \\ \\ \\forall x \\in D.
                 \\\\ \\
                 \\\\ \\quad \\text{b. The product } fg: D \\to \\R 
                 \\\\ \\quad \\ \\ \\ \\ \\text{is given by } (fg)(x) = f(x)*g(x) \\ \\ \\forall x \\in D.
                 \\\\ \\
                 \\\\ \\quad \\text{c. For } k \\in \\R, \\text{ the multiple } kf: D \\to \\R 
                 \\\\ \\quad \\ \\ \\ \\ \\text{is given by } (kf)(x) = k*f(x) \\ \\ \\forall x \\in D.
                 \\\\ \\
                 \\\\ \\quad \\text{d. If } g(x) \\neq 0 \\ \\forall x \\in D, \\text{ the quotient } f/g: D \\to \\R
                 \\\\ \\quad \\ \\ \\ \\ \\text{is given by } \\left(\\frac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)} \\ \\ \\forall x \\in D.
    `,
  },
  {
    number: 3,
    term: "5.1.18 Right and Left Limit",
    definition: `\\text{Let } f: (a, b) \\to \\R.
                 \\\\ \\
                 \\\\ \\quad \\text{a. We say that a real number } L 
                 \\\\ \\quad \\ \\ \\ \\ \\text{is the right-hand limit of } f \\text{ at } a \\text{ and write}
                 \\\\ \\quad \\ \\ \\ \\ \\lim_{x \\to a^+}f(x) = L, 
                 \\\\ \\quad \\ \\ \\ \\ \\text{if } \\ \\forall \\varepsilon > 0 \\ \\ \\exists \\delta > 0 \\text{ such that } |f(x) - L| < \\varepsilon
                 \\\\ \\quad \\ \\ \\ \\ \\text{whenever } x \\in (a, b) \\text{ and } a < x < a + \\delta. 
                 \\\\ \\
                 \\\\ \\quad \\text{b. We say that a real number } L 
                 \\\\ \\quad \\ \\ \\ \\ \\text{is the left-hand limit of } f \\text{ at } a \\text{ and write}
                 \\\\ \\quad \\ \\ \\ \\ \\lim_{x \\to a^-}f(x) = L, 
                 \\\\ \\quad \\ \\ \\ \\ \\text{if } \\ \\forall \\varepsilon > 0 \\ \\ \\exists \\delta > 0 \\text{ such that } |f(x) - L| < \\varepsilon
                 \\\\ \\quad \\ \\ \\ \\ \\text{whenever } x \\in (a, b) \\text{ and } a - \\delta < x < a. 
    `,
  },
  {
    number: 4,
    term: "5.2.1 Continuous",
    definition: `\\text{Let } f: D \\to \\R \\text{ and let } c \\in D.
                 \\\\ \\
                 \\\\ \\quad \\text{a. We say that } f \\text{ is continuous at } c \\text{ if} 
                 \\\\ \\
                 \\\\ \\quad \\ \\ \\ \\ \\ \\forall \\varepsilon > 0 \\ \\ \\exists \\delta > 0 \\text{ such that } |f(x) - f(c)| < \\varepsilon
                 \\\\ \\quad \\ \\ \\ \\ \\ \\text{whenever } x \\in D \\text{ and } |x-c| < \\delta.
                 \\\\ \\
                 \\\\ \\quad \\text{b. If } f \\text{ is continuous at each point of a subset } S \\subseteq D,
                 \\\\ \\quad \\ \\ \\ \\ \\text{then } f \\text{ is said to be continuous on S.}
                 \\\\ \\
                 \\\\ \\quad \\text{c. If } f \\text{ is continuous on its domain } D,
                 \\\\ \\quad \\ \\ \\ \\ \\text{Then } f \\text{ is said to be a continuous function.}
    `,
  },
  {
    number: 5,
    term: "5.3.1 Boundedness of a Function",
    definition: `\\text{A function } f: D \\to \\R \\text{ is said to be bounded}
                 \\\\ \\text{if its range } f(D) \\text{ is a bounded subset of } \\R.
                 \\\\ \\text{That is, } f \\text{ is bounded if } \\ \\exists M \\in \\R
                 \\\\ \\text{such that } |f(x)| \\leq M \\ \\ \\forall x \\in D.
    `,
  },
  {
    number: 6,
    term: "5.4.1 Uniformly Continuous",
    definition: `\\text{Let } f: D \\to \\R. 
                 \\\\ \\text{We say that } f \\text{ is uniformly continuous on } D \\text{ if}
                 \\\\ \\
                 \\\\ \\quad \\forall \\varepsilon > 0 \\ \\ \\exists \\delta > 0 \\text{ such that} |f(x) - f(y)| < \\varepsilon
                 \\\\ \\quad \\text{whenever } |x-y| < \\delta \\text{ and } x, y \\in D.
    `,
  },
  {
    number: 7,
    term: "6.1.1 Differentiable",
    definition: `\\text{Let } f \\text{ be a real-valued function defined on an interval } I
                 \\\\ \\text{containing the point c. We say that } f \\text{ is differentiable at } c
                 \\\\ \\text{if the limit }
                 \\\\ \\
                 \\\\ \\lim_{x \\to c} \\frac{f(x)-f(c)}{x-c} \\text{ exists and is finite. }
                 \\\\ \\
                 \\\\ \\text{We denote the derivative of } f \\text{ at } c \\text{ by}
                 \\\\ \\
                 \\\\ f'(c) = \\lim_{x \\to c} \\frac{f(x)-f(c)}{x-c}
    `,
  },
  {
    number: 8,
    term: "6.2.1 Absolute and Local Maxima",
    definition: `\\text{Let } f: D \\to \\R \\text{ be a function.}
                 \\\\ \\
                 \\\\ \\text{a. } f \\text{ has an absolute maximum (minimum) at}
                 \\\\ \\ \\ \\ \\ c \\in D \\text{ if } f(c) \\geq f(x) \\ (f(c) \\leq f(x)) \\ \\ \\forall x \\in D.
                 \\\\ \\
                 \\\\ \\text{b. } f \\text{ has a local maximum (minimum)} \\text{at } c \\in D
                 \\\\ \\ \\ \\ \\ \\text{if there exists and open interval } I \\text{ containing c}
                 \\\\ \\ \\ \\ \\ \\text{such that } f(c) \\geq f(x) \\ (f(c) \\leq f(x)) \\ \\ \\forall x \\in I \\cap D.
    `,
  },
  {
    number: 9,
    term: "6.2.10 Monotonicity of Functions",
    definition: `\\text{Let } f \\text{ be a function and } I \\text{ be an interval.} 
                 \\\\ \\
                 \\\\ \\text{a. } f \\text{ is increasing on } I \\text{ if } f(x_1) \\leq f(x_2)
                 \\\\ \\ \\ \\ \\ \\text{for all } x_1, x_2 \\in I \\text{ with } x_1 < x_2.
                 \\\\ \\
                 \\\\ \\text{b. } f \\text{ is decreasing on } I \\text{ if } f(x_1) \\geq f(x_2)
                 \\\\ \\ \\ \\ \\ \\text{for all } x_1, x_2 \\in I \\text{ with } x_1 < x_2.
                 \\\\ \\
                 \\\\ \\text{c. } f \\text{ is strictly increasing on } I \\text{ if } f(x_1) < f(x_2)
                 \\\\ \\ \\ \\ \\ \\text{for all } x_1, x_2 \\in I \\text{ with } x_1 < x_2.
                 \\\\ \\
                 \\\\ \\text{d. } f \\text{ is strictly decreasing on } I \\text{ if } f(x_1) > f(x_2)
                 \\\\ \\ \\ \\ \\ \\text{for all } x_1, x_2 \\in I \\text{ with } x_1 < x_2.
    `,             
  },
  {
    number: 10,
    term: "7.1.1 Partition and Refinement", 
    definition: `\\text{Let } [a,b] \\text{ be an interval in } \\R. 
                 \\\\ \\text{A partition } P \\text{ of } [a,b] \\text{ is a finite set of points}
                 \\\\ \\{ x_0, x_1, ..., x_n \\} \\text{ in } [a,b] \\text{ such that } a = x_0 < x_1 < ... < x_n = b.  
                 \\\\ \\
                 \\\\ \\text{If } P \\text{ and } Q \\text{ are two partitions of } [a,b] \\text{ with } P \\subseteq Q, 
                 \\\\ \\text{then } Q \\text{ is called a refinement of } P.
    `
  },
  {
    number: 11,
    term: "7.1.2 Upper and Lower Sums",
    definition: `\\text{Suppose that } f \\text{ is a bounded function defined on } [a,b] 
                 \\\\ \\text{and that } P = \\{ x_0, x_1, ..., x_n \\} \\text{ is a partition of } [a,b].
                 \\\\ \\
                 \\\\ \\text{a. For each } i \\in \\{1, ..., n \\}, \\text{ we define}
                 \\\\ \\ \\ \\ \\ M_i(f) = \\sup \\{f(x): x \\in [x_{i-1}, x_i] \\},
                 \\\\ \\ \\ \\ \\ m_i(f) = \\inf \\{f(x): x \\in [x_{i-1}, x_i] \\},
                 \\\\ \\ \\ \\ \\ \\text{and } \\Delta x_i = x_i - x_{i-1}
                 \\\\ \\
                 \\\\ \\text{b. The upper sum of } f \\text{ with respect to } P \\text{ is}
                 \\\\ \\ \\ \\ \\ U(f,P) = \\sum_{i=1}^{n}M_i \\Delta x_i.
                 \\\\ \\
                 \\\\ \\text{c. The lower sum of } f \\text{ with respect to } P \\text{ is}
                 \\\\ \\ \\ \\ \\ L(f,P) = \\sum_{i=1}^{n}m_i \\Delta x_i.
    `
  },
  {
    number: 12,
    term: "7.1.3 Upper and Lower Integrals",
    definition: `\\text{Let } f \\text{ be a bounded function defined on } [a,b]. \\text{ Then}
                 \\\\ \\
                 \\\\ \\text{a. The upper integral of } f \\text{ on } [a,b] \\text{ is}
                 \\\\ \\ \\ \\ \\ U(f) = \\inf \\{U(f, P): P \\text{ is a partition of } [a,b] \\}.
                 \\\\ \\
                 \\\\ \\text{b. The lower integral of } f \\text{ on } [a,b] \\text{ is}
                 \\\\ \\ \\ \\ \\ L(f) = \\sup \\{L(f, P): P \\text{ is a partition of } [a,b] \\}.
    `
  },
  {
    number: 13,
    term: "7.1.4 Riemann Integral",
    definition: `\\text{Let } f \\text{ be a bounded function defined on } [a,b]. 
                 \\\\ \\
                 \\\\ \\text{Then if } L(f) = U(f), 
                 \\\\ \\text{we say that } f \\text{ is Riemann integrable on } [a,b] \\text{ and that}
                 \\\\ \\
                 \\\\ \\int_a^b f = \\int_a^b f(x) dx = L(f) = U(f)
                 \\\\ \\
                 \\\\ \\text{is the Riemann integral of } f \\text{ on } [a,b].
    `
  }
];
