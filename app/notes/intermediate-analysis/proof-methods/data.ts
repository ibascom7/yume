export const proofMethods = [
  {
    number: 1,
    title: "Prove Continuity",
    description: "Use the ε-δ definition of continuity at a point to prove that a given function is continuous at a given point.",
    examples: [
      {
        problemStatement: `\\text{Let } f: D \\to \\R \\text{ and let } c \\text{ be an isolated point in } D.
                           \\\\ \\text{Show that } f \\text{ is continuous at } c.
        `,
        solution: `\\text{Since } c \\text{ is isolated, } \\ \\exists \\delta > 0 \\text{ such that }
                   \\\\ \\text{if } |x-c| < \\delta \\text{ and } x \\in D, \\text{ then } x = c.
                   \\\\ \\
                   \\\\ \\text{Thus whenever } |x-c| < \\delta \\text{ and } x \\in D, \\text{ we have}
                   \\\\ \\
                   \\\\ |f(x)-f(c)| = |f(c) - f(c)| = 0 < \\varepsilon \\ \\ \\forall \\varepsilon > 0.
                   \\\\ \\
                   \\\\ \\text{Hence } f \\text{ is continuous at } c.
        ` 
      },
      {
        problemStatement: `\\text{Define } f: \\R \\to \\R \\text{ by } f(x) = x^2 + 3x - 5.
                           \\\\ \\text{Use [[definition 4]] to prove that } f \\text{ is continuous at } 3. 
        `,
        solution: `\\text{Trying to show this is true:}
                   \\\\ \\quad \\forall \\varepsilon > 0 \\ \\ \\exists \\delta > 0 \\text{ such that } |f(x) - f(c)| < \\varepsilon
                   \\\\ \\quad \\text{whenever } x \\in D \\text{ and } |x-c| < \\delta.
                   \\\\ \\
                   \\\\ \\text{Scratch:}
                   \\\\ \\quad f(c) = f(3) = 13
                   \\\\ \\quad |f(x) - f(c)| = |(x^2 + 3x - 5) - (13)| 
                   \\\\ \\quad = |x^2 + 3x -18| = |(x-3)(x+6)| = |x-3|\\cdot|x+6|
                   \\\\ \\
                   \\\\ \\quad \\text{to get bounds take } \\delta \\leq 1,
                   \\\\ \\quad \\text{then } |x-3| < 1 \\implies  -1 < x-3 < 1 \\implies 8 < x+6 < 10.
                   \\\\ \\quad \\text{So, } |x+6| < 10.
                   \\\\ \\quad \\text{Then, for } |x-3|<1,
                   \\\\ \\quad |f(x)-f(3)| \\leq 10|x-3| < \\varepsilon \\implies |x-3| < \\frac{\\varepsilon}{10}.
                   \\\\ \\quad \\text{So } \\delta \\leq \\frac{\\varepsilon}{10} \\text{ and } \\delta \\leq 1 \\text{ are good options for our } \\delta.
                   \\\\ \\
                   \\\\ \\text{Proof:}
                   \\\\ \\quad \\text{Let } \\varepsilon > 0. \\text{ Choose } \\delta \\leq \\min\\left(1, \\frac{\\varepsilon}{10}\\right).
                   \\\\ \\quad \\text{Suppose } x \\in \\R \\text{ satisfies } |x - 3| < \\delta.
                   \\\\ \\quad \\text{Since } \\delta \\leq 1, \\ |x-3|<1.
                   \\\\ \\quad \\text{Which implies } |x+6|<10. 
                   \\\\ \\quad \\text{So } |f(x) - f(3)| = |x-3|\\cdot|x+6| < |x-3|\\cdot10.
                   \\\\ \\quad \\text{Since } |x-3|<\\delta\\leq\\frac{\\varepsilon}{10},
                   \\\\ \\quad \\text{we get } |f(x) - f(3)| < 10 \\cdot \\frac{\\varepsilon}{10} = \\varepsilon.
                   \\\\ \\quad \\text{Thus, for every } \\varepsilon > 0 
                   \\\\ \\quad \\text{we have produced a } \\delta > 0 \\text{ such that } |x-3|<\\delta
                   \\\\ \\quad \\text{implies } |f(x)-f(3)|<\\varepsilon.
                   \\\\ \\quad \\text{Therefore } f \\text{ is continuous at } 3.
        `
      },
      {
        problemStatement: `\\text{Define } f: \\R \\to \\R \\text{ via}
                           \\\\ f(x) = \\begin{cases}
                           x \\sin \\frac{1}{x} & x \\neq 0 
                           \\\\ 0 & x = 0.
                           \\end{cases}
                           \\\\ \\text{Show that } f \\text{ is continuous at } x = 0.
        `,
        solution: `\\text{Let } \\varepsilon > 0. \\text{ Since}
                   \\\\ |f(x)-f(0)| = |x \\sin \\frac{1}{x}| \\leq |x| \\ \\ \\forall x,
                   \\\\ \\text{we may let } \\delta = \\varepsilon.
                   \\\\ \\text{Then when } |x-0| < \\delta \\text{ we have}
                   \\\\ |f(x) - f(0)| \\leq |x| < \\delta = \\varepsilon.
                   \\\\ \\text{Hence } f \\text{ is continuous at } x = 0.
        `
      }
    ]
  },
  {
    number: 2,
    title: "Prove Discontinuity",
    description: "Use the ε-δ definition of continuity at a point to prove that a given function is discontinuous at a given point.",
    examples: [
      {
        problemStatement: `\\text{Define } f: \\R \\to \\R \\text{ by } f(x) = \\begin{cases} 5x & x \\in \\mathbb{Q} \\\\ x^2 + 6 & x \\in \\R \\setminus \\mathbb{Q}. \\end{cases}
                           \\\\ \\text{Prove that } f \\text{ is discontinuous at } 1.
        `,
        solution: `\\text{At } x = 1, f(x) = 5 \\text{ because } 1 \\in \\mathbb{Q}.
                   \\\\ \\text{To show } f \\text{ is discontinuous at 1, let } \\varepsilon = 1.
                   \\\\ \\text{For any } \\delta > 0, (1 - \\delta, 1 + \\delta)
                   \\\\ \\text{contains both rational and irrational numbers.}
                   \\\\ \\text{so choose } r \\in \\mathbb{Q} \\text{ such that } r \\in (1 - \\delta, 1 + \\delta),
                   \\\\ \\text{then } f(r) = 5r, \\text{ so } |f(r) - f(1)| = |5r - 5| = 5|r - 1|.
                   \\\\ \\text{Choose } i \\in \\R \\setminus \\mathbb{Q} \\text{ such that } i \\in (1-\\delta, 1+\\delta).
                   \\\\ \\text{Then } f(i) = i^2 + 6, 
                   \\\\ \\text{so } |f(i) - f(1)| = |i^2 + 6 - 5| = |i^2 + 1| \\geq 1 = \\varepsilon.
                   \\\\ \\text{Therefore, no matter which } \\delta \\text{ we choose},
                   \\\\ \\exists x \\in \\R \\text{ with } |x-1| < \\delta \\text{ but } |f(x) - f(1)| \\geq \\varepsilon.
                   \\\\ \\text{Thus, } f \\text{ is discontinuous at 1.}
        `
      },
      {
        problemStatement: `f(x) = \\begin{cases} 0 & \\text{if } x < 0 \\\\ 1 & \\text{if } x \\geq 0 \\end{cases} \\text{ is discontinuous at } x = 0.
        `,
        solution: `\\text{Let } \\varepsilon = \\frac{1}{2}.
                   \\\\ \\text{Let } \\delta > 0.
                   \\\\ \\text{Choose } x = \\frac{-\\delta}{2}.
                   \\\\ \\
                   \\\\ \\text{Then } |x-0| = \\frac{\\delta}{2} < \\delta,
                   \\\\ \\text{but } |f(x) - f(0)| = |0 - 1| = 1 \\geq \\frac{1}{2} = \\varepsilon.
                   \\\\ \\
                   \\\\ \\text{Thus } \\ \\exists \\varepsilon > 0 \\text{ such that } \\ \\forall \\delta > 0,
                   \\\\ \\exists x \\in \\R \\text{ such that } |x - 1| < \\delta \\text{ yet } |f(x) - f(1)| \\geq \\varepsilon.
                   \\\\ \\text{Therefore, } f \\text{ is discontinuous at 0}.
        `
      }
    ]
  },
  {
    number: 3,
    title: "Prove Continuity Using Sequential Condition",
    description: "Use sequences (Theorem 5.2.3(b)) to prove that a given function is continuous at a given point.",
    examples: [
      {
        problemStatement: "\\text{Let } f(x) = x^2. \\text{ Show that } f \\text{ is continuous at 2}.",
        solution: `\\text{Let } (x_n) \\text{ be a sequence in } \\R \\text{ such that } x_n \\to 2. 
                   \\\\ \\text{We proceed to show } \\lim_{n \\to \\infty} f(x_n) = f(2).
                   \\\\ \\
                   \\\\ \\text{Since } x_n \\to 2, \\text{ we have that } \\lim_{n \\to \\infty} x_n = 2.
                   \\\\ \\
                   \\\\ \\text{So } \\lim_{n \\to \\infty} f(x_n) = \\lim_{n \\to \\infty} x_n^2 = \\lim_{n \\to \\infty} x_n \\cdot \\lim_{n \\to \\infty} x_n = 4 = 2^2 = f(2).
                   \\\\ \\
                   \\\\ \\text{Thus, } f \\text{ is continuous at 2.}
        `
      }
    ]
  },
  {
    number: 4,
    title: "Prove Discontinuity Using Sequential Condition",
    description: "Use sequences (Theorem 5.2.7) to prove that a given function is discontinuous at a given point.",
    examples: [
      {
        problemStatement: `\\text{Let } D = (-\\infty, 0) \\cup (0, \\infty) \\text{ and let } f(x) = \\frac{1}{x} \\ \\ \\forall x \\in D.
                           \\\\ \\text{Show that } f \\text{ is continuous on } D, \\text{ but not on } \\R.  
        `,
        solution: `\\text{Since } \\lim_{x \\to c} \\frac{1}{x} = \\frac{1}{c} \\ \\ \\forall c \\in D, f \\text{ is continuous on } D \\ ([[theorem 4]] \\text{.d}).
                   \\\\ \\
                   \\\\ \\text{But } f \\text{ is not defined at } 0 \\text{ so it can't be continuous there.}
                   \\\\ \\
                   \\\\ \\text{Additionally, even if we defined } f(0) = k \\text{ for some } k \\in \\R,
                   \\\\ \\text{then } f \\text{ would still not be continuous at 0.} 
                   \\\\ \\
                   \\\\ \\text{Since } \\frac{1}{n} \\to 0 \\text{ and } \\lim_{n\\to\\infty}f\\left(\\frac{1}{n}\\right) = + \\infty,
                   \\\\ \\text{the sequence } \\left(f\\left(\\frac{1}{n}\\right)\\right) \\text{ is not convergent.}
                   \\\\ \\
                   \\\\ \\text{Thus there is no way to define } f \\text{ at 0}
                   \\\\ \\text{to make it continuous there.}
                   `
      }
    ]
  },
  {
    number: 5,
    title: "Prove Uniform Continuity",
    description: "Use the ε-δ definition of uniform continuity to prove that a given function is uniformly continuous on a given domain.",
    examples: [
      {
        problemStatement: "\\text{Prove that } f(x) = x^3 \\text{ is UC on } [0,2]",
                           
        solution: `\\text{Scratch:}
                   \\\\ \\quad x, y \\in [0,2] \\text{ means}
                   \\\\ \\quad |x^2| \\leq 4, \\ |y| \\leq 2, \\text{ and } |x + y| \\leq 4.
                   \\\\ \\
                   \\\\ \\text{Proof:}
                   \\\\ \\quad \\text{Let } \\varepsilon > 0. \\text{ Set } \\delta = \\frac{\\varepsilon}{12}.
                   \\\\ \\
                   \\\\ \\quad \\text{If } x, y \\in [0, 2] \\text{ and } |x-y| < \\delta,
                   \\\\ \\
                   \\\\ \\quad \\text{then } |f(x) - f(y)|  = |x^3 -y^3| = |x^3 - x^2y + x^2y - y^3|
                   \\\\ \\quad \\leq |x^2| \\cdot |x-y| + |y| \\cdot |x^2 - y^2| 
                   \\\\ \\quad = |x^2| \\cdot |x-y| + |y| \\cdot |x-y| \\cdot |x+y|
                   \\\\ \\quad \\leq (4) \\cdot |x-y| + (2) |x - y| \\cdot (4)  
                   \\\\ \\quad < 4\\left(\\frac{\\varepsilon}{12}\\right) + 2\\left(\\frac{\\varepsilon}{12}\\right)(4) = 12\\left(\\frac{\\varepsilon}{12}\\right) = \\varepsilon.
                   \\\\ \\
                   \\\\ \\quad \\text{Therefore } f(x) = x^3 \\text{ is UC on } [0, 2].
        `
      },
      {
        problemStatement: "\\text{Prove that } f(x) = \\frac{1}{x} \\text{ is UC on } [2,\\infty)",
        solution: `\\text{Scratch:}
                   \\\\ \\quad x, y \\in [2,\\infty) \\text{ means}
                   \\\\ \\quad \\frac{1}{xy} \\leq \\frac{1}{2 \\cdot 2} = \\frac{1}{4}.
                   \\\\ \\
                   \\\\ \\text{Proof:}
                   \\\\ \\quad \\text{Let } \\varepsilon > 0. \\text{ Set } \\delta = 4 \\varepsilon.
                   \\\\ \\
                   \\\\ \\quad \\text{If } x, y \\in [2, \\infty) \\text{ and } |x - y| < \\delta,
                   \\\\ \\
                   \\\\ \\quad \\text{then } |f(x) - f(y)| = \\left|\\frac{1}{x} - \\frac{1}{y}\\right| = \\left|\\frac{y-x}{xy}\\right|
                   \\\\ \\
                   \\\\ \\quad = \\frac{|x-y|}{xy} \\leq \\frac{|x-y|}{4} < \\frac{4\\varepsilon}{4} = \\varepsilon.
                   \\\\ \\
                   \\\\ \\quad \\text{Thus } f \\text{ is UC on } [2, \\infty).
        `
      },
      {
        problemStatement: "\\text{Prove that } f(x) = \\sqrt{x} \\text{ is UC on } [0,\\infty)",
        solution:`\\text{Scratch:}
                  \\\\ \\quad x, y \\in [1, \\infty),
                  \\\\ \\quad \\sqrt{x} \\geq 1, \\sqrt{y} \\geq 1
                  \\\\ \\quad \\text{so } \\sqrt{x}+\\sqrt{y} \\geq 2
                  \\\\ \\quad \\text{so } \\frac{|x-y|}{\\sqrt{x}+\\sqrt{y}} \\leq \\frac{|x-y|}{2}
                  \\\\ \\
                  \\\\ \\text{Proof:}
                  \\\\ \\quad \\text{Since } f \\text{ is continuous on } [0, 2] \\text{ which is compact},
                  \\\\ \\quad \\text{[[theorem 11]] tells us that } f \\text{ is uniform continuous on } [0, 2].
                  \\\\ \\
                  \\\\ \\quad \\text{We now claim that } f \\text{ is UC on } [1, \\infty).
                  \\\\ \\quad \\text{Let } \\varepsilon > 0. \\text{ Set } \\delta = 2\\varepsilon.
                  \\\\ \\quad \\text{If } x, y \\in [1,\\infty) \\text{ and } |x - y| < \\delta,
                  \\\\ \\quad \\text{then } |f(x) - f(y)| \\cdot |\\sqrt{x} - \\sqrt{y}| = \\left|\\frac{(\\sqrt{x}-\\sqrt{y})(\\sqrt{x}+\\sqrt{y})}{\\sqrt{x}+\\sqrt{y}}\\right|
                  \\\\ \\quad \\leq \\frac{|x-y|}{2} < \\frac{\\delta}{2} = \\frac{2\\varepsilon}{2} = \\varepsilon.
                  \\\\ \\
                  \\\\ \\quad \\text{So } f \\text{ is uniformly continuous on } [0,2] \\text{ and } [1, \\infty),
                  \\\\ \\quad \\text{We finish by showing that } f \\text{ is UC on } [0, \\infty).
                  \\\\ \\
                  \\\\ \\quad \\text{Let } \\varepsilon > 0. \\ \\ \\exists \\delta_1 > 0 \\text{ such that if } x, y \\in [0, 2]
                  \\\\ \\quad \\text{and } |x-y| < \\delta_1, \\text{ then } |\\sqrt{x} - \\sqrt{y}| < \\varepsilon. 
                  \\\\ \\quad \\text{Additionally, } \\ \\exists \\delta_2 > 0
                  \\\\ \\quad \\text{such that if } x, y \\in [1, \\infty) \\text{ and } |x - y| < \\delta_2,
                  \\\\ \\quad \\text{then } |\\sqrt{x} - \\sqrt{x}| < \\varepsilon.
                  \\\\ \\quad \\text{Set } \\delta = \\min(\\delta_1, \\delta_2, 1). 
                  \\\\ \\quad \\text{If } x,y \\in [0, \\infty) \\text{ and } |x-y| < \\delta,
                  \\\\ \\quad \\text{then either } x, y \\in [1, \\infty), \\text{ or } x, y \\in [0, 2), 
                  \\\\ \\quad \\text{so } |\\sqrt{x} - \\sqrt{x}| < \\varepsilon \\text{ either way.}
        `
      }
    ]
  },
  {
    number: 6,
    title: "Disprove Uniform Continuity",
    description: "Use the ε-δ definition of uniform continuity to prove that a given function is not uniformly continuous on a given domain.",
    examples: [
      {
        problemStatement: "\\text{Show that } f(x) = x^2 \\text{ is not } UC.",
        solution: `\\text{Let } \\varepsilon = 1. \\text{ Then, given any } \\delta > 0,
                   \\\\ \\text{let } x = \\frac{1}{\\delta} \\text{ and } y = \\frac{1}{\\delta} + \\frac{\\delta}{2}. 
                   \\\\ \\text{Then } |x-y| = \\frac{\\delta}{2} < \\delta, \\text{ but}
                   \\\\ \\
                   \\\\ |f(x) - f(y)| = |x+y| \\cdot |x-y| 
                   \\\\ = \\left|\\frac{1}{\\delta} + \\frac{1}{\\delta} + \\frac{\\delta}{2}\\right| \\cdot \\frac{\\delta}{2} > \\frac{2}{\\delta} \\cdot \\frac{\\delta}{2} = 1.
                   \\\\ \\
                   \\\\ \\text{Thus } f \\text{ is not uniformly continuous on } \\R.
         `
      }
    ]
  },
  {
    number: 7,
    title: "Prove Differentiability",
    description: "Use the definition of the derivative to show that a given function is (or is not) differentiable at a given point. There are several possibilities here: one can use one-sided limits, one can use the sequential criterion for limits (Theorem 5.1.9), or one can use the ε-δ definition of limit of a function at an accumulation point.",
    examples: [
      {
        problemStatement: "\\text{Example problem statement}",
        solution: `\\text{Solution...}`
      }
    ]
  },
  {
    number: 8,
    title: "Prove Integrability",
    description: "Use the definition of integrable function to prove that a given function is integrable.",
    examples: [
      {
        problemStatement: "\\text{Prove it}",
        solution: "\\text{Silly}"
      }
    ]
  }
];
