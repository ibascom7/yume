import type { ChapterRef } from "@/app/components/notesFilter";
import type { Example } from "../components/DefinitionCard";

interface Definition extends ChapterRef {
  number: number;
  term: string;
  definition: string;
  examples?: Example[];
}

export const definitions: Definition[] = [
  // Template:
  // {
  //   number: 1,
  //   chapter: 1,
  //   section: 1,
  //   term: "Term",
  //   definition: `\\text{Definition...}`,
  //   examples: [ // optional, shown in a collapsible section under the definition
  //     { title: "Example name", content: `\\text{...}` },
  //   ],
  // },
  {
    number: 1,
    chapter: 1,
    section: 1,
    term: "Topology (Def 1.1.1)",
    definition: `\\text{Let $X$ be a set and let $\\tau$ be a collection of subsets of $X$ s.t.} \\\\[0.5em]
                 \\text{(1) $\\tau$ is closed under arbitrary unions:} \\\\
                 \\text{if } \\{U_i : i \\in I\\} \\subseteq \\tau \\text{, then } \\bigcup_{i \\in I} U_i \\in \\tau. \\\\[0.5em]
                 \\text{(2) $\\tau$ is closed under finite intersections:} \\\\
                 \\text{if } U_1, U_2, \\ldots, U_n \\in \\tau \\text{ with } n \\in \\mathbb{N} \\text{, then } \\bigcap_{k=1}^{n} U_k \\in \\tau. \\\\[0.5em]
                 \\text{(3) } \\varnothing, X \\in \\tau. \\\\[0.5em]
                 \\text{Then $\\tau$ is a topology on $X$. This can be written as $(X, \\tau)$} \\\\
                 \\text{and called a \\textit{topological space}.}`,
    examples: [
      {
        title: "The discrete topology",
        content: `\\text{Let } X \\neq \\varnothing. \\text{ The \\textit{discrete topology} on $X$ is } \\tau = \\mathcal{P}(X), \\\\
                  \\text{with $\\mathcal{P}(X)$ being the set of all subsets of $X$,} \\\\
                  \\text{called the \\textit{power set}.}`,
      },
      {
        title: "The indiscrete topology",
        content: `\\text{Let } X \\neq \\varnothing. \\text{ The \\textit{indiscrete topology} on $X$ is } \\tau = \\{\\varnothing, X\\}.`,
      },
      {
        title: "Topologies on small sets",
        content: `X = \\{a\\} \\text{ has one topology, } \\{\\varnothing, \\{a\\}, X\\}. \\\\[0.5em]
                  X = \\{a, b\\} \\text{ has four topologies: discrete, indiscrete,} \\\\
                  \\{\\varnothing, \\{a, b\\}, \\{a\\}, X\\} \\text{ and } \\{\\varnothing, \\{a, b\\}, \\{b\\}, X\\}. \\\\[0.5em]
                  \\text{Guess how many } X = \\{a, b, c\\} \\text{ has... that's right! 29!}`,
      },
      {
        title: "Standard topology on ℝⁿ",
        content: `\\text{See def of } \\underline{\\href{/notes/real-analysis/definitions#definition-17}{\\text{open}}} \\text{ from Real Analysis.} \\\\
                  \\text{However, in this class we notate with} \\\\
                  \\tau = \\{ U \\subseteq \\mathbb{R}^n : \\ \\forall x \\in U \\ \\exists \\varepsilon > 0 \\text{ s.t. } [[definition 8|$B(x, \\varepsilon)$]] \\subseteq U \\}.`,
      },
    ],
  },
  {
    number: 2,
    chapter: 1,
    section: 1,
    term: "Open",
    definition: `\\text{Let $(X, \\tau)$ be a [[definition 1|topological space]].} \\\\
                 \\text{A subset $U \\subseteq X$ is called \\textit{open} iff $U \\in \\tau$.}`,
  },
  {
    number: 3,
    chapter: 1,
    section: 1,
    term: "Closed",
    definition: `\\text{Let $(X, \\tau)$ be a [[definition 1|topological space]].} \\\\
                 \\text{A subset $C \\subseteq X$ is called \\textit{closed} iff its complement} \\\\
                 C^c = X \\setminus C \\in \\tau.`,
  },
  {
    number: 4,
    chapter: 1,
    section: 1,
    term: "Finer / Coarser",
    definition: `\\text{Let $\\sigma, \\tau$ be [[definition 1|topologies]] on a set $X$.} \\\\
                 \\text{We say $\\sigma$ is \\textit{finer} than $\\tau$ if } \\sigma \\supseteq \\tau. \\\\
                 \\text{We can also say $\\tau$ is \\textit{coarser} than $\\sigma$.} \\\\[1em]
                 \\text{Think of it as the space being “chopped up” into finer pieces} \\\\
                 \\text{if $\\sigma$ has more [[definition 2|open]] sets.}`,
  },
  {
    number: 5,
    chapter: 1,
    section: 2,
    term: "Basis",
    definition: `\\text{Let $(X, \\tau)$ be a [[definition 1|topological space]].} \\\\
                 \\mathcal{B} \\subseteq \\tau \\text{ is called a \\textit{basis} of $\\tau$ if} \\\\
                 \\forall x \\in X \\text{ and } \\forall U \\in \\tau \\text{ with } x \\in U, \\ \\exists B \\in \\mathcal{B} \\text{ s.t. } x \\in B \\subseteq U. \\\\[1em]
                 \\text{Note that if $\\mathcal{B}$ is a basis for $(X, \\tau)$, then:} \\\\[0.5em]
                 \\begin{array}{ll}
                   \\htmlId{b-1}{\\text{(B1)}} & \\forall x \\in X \\ \\exists B \\in \\mathcal{B} \\text{ s.t. } x \\in B. \\\\[0.5em]
                   \\htmlId{b-2}{\\text{(B2)}} & \\forall B_1, B_2 \\in \\mathcal{B} \\text{ and } \\forall x \\in B_1 \\cap B_2, \\\\
                                & \\exists B_3 \\in \\mathcal{B} \\text{ s.t. } x \\in B_3 \\subseteq B_1 \\cap B_2.
                 \\end{array} \\\\[0.5em]
                 \\text{(B1) follows from the def of basis with } U = X \\\\
                 \\text{and (B2) from the def of basis with } U = B_1 \\cap B_2.`,
    examples: [
      {
        title: "Boring basis",
        content: `\\text{Every topology $\\tau$ has the basis } \\mathcal{B} = \\tau.`,
      },
      {
        title: "Standard basis of ℝⁿ",
        content: `\\text{If } X = (\\mathbb{R}^n, \\tau) \\text{ then } \\mathcal{B} = \\{[[definition 8|$B(x, r)$]] : x \\in X, \\ r > 0\\} \\\\
                  \\text{is a basis, as seen in Real Analysis.}`,
      },
    ],
  },
  {
    number: 6,
    chapter: 1,
    section: 2,
    term: "Metric Space",
    definition: `\\text{A \\textit{metric space} is a set $X$ with a function } d : X \\times X \\to [0, \\infty), \\\\
                 \\text{called a \\textit{metric}, satisfying the following:} \\\\[0.5em]
                 \\text{(a) (Symmetric) } d(x, y) = d(y, x) \\text{ for all } x, y \\in X. \\\\[0.5em]
                 \\text{(b) (Triangle Inequality) } d(x, y) \\leq d(x, z) + d(z, y) \\text{ for all } x, y, z \\in X. \\\\[0.5em]
                 \\text{(c) (Distance is 0 iff same position) } d(x, y) = 0 \\text{ iff } x = y \\text{ with } x, y \\in X.`,
  },
  {
    number: 7,
    chapter: 1,
    section: 2,
    term: "Normed Vector Space",
    definition: `\\text{A \\textit{normed vector space} is a vector space $X$ over the real or complex scalars,} \\\\
                 \\text{with a function } \\| \\cdot \\| : X \\to [0, \\infty) \\text{, called a \\textit{norm}, satisfying:} \\\\[0.5em]
                 \\text{(a) (Distance is 0 iff same position) } \\|x\\| = 0 \\text{ iff } x = 0. \\\\[0.5em]
                 \\text{(b) (Triangle Inequality) } \\|x + y\\| \\leq \\|x\\| + \\|y\\| \\text{ for all } x, y \\in X. \\\\[0.5em]
                 \\text{(c) } \\|\\lambda x\\| = |\\lambda| \\, \\|x\\| \\text{ for all scalars $\\lambda$ and } x \\in X.`,
  },
  {
    number: 8,
    chapter: 1,
    section: 2,
    term: "Open Ball",
    definition: `\\text{Let $(X, d)$ be a [[definition 6|metric space]] with } x \\in X \\text{ and } r > 0. \\\\
                 \\text{Then we write the \\textit{open ball} centered at $x$ with radius $r$ as} \\\\
                 B(x, r) = \\{ y \\in X : d(x, y) < r \\}.`,
  },
  {
    number: 9,
    chapter: 1,
    section: 2,
    term: "Metrizable",
    definition: `\\text{Let $(X, \\tau)$ be a [[definition 1|topological space]].} \\\\
                 \\text{We say $(X, \\tau)$ is \\textit{metrizable} if } \\tau = [[theorem 5|$\\tau_d$]] \\text{, for some [[definition 6|metric]] $d$ on $X$.}`,
  },
];
