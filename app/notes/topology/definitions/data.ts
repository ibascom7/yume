import type { ChapterRef } from "@/app/components/notesFilter";
import type { Example, Figure } from "../components/DefinitionCard";

interface Definition extends ChapterRef {
  number: number;
  term: string;
  definition: string;
  examples?: Example[];
  figure?: Figure;
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
    examples: [
      {
        title: "Closed balls",
        content: `\\text{Let $(X, d)$ be a [[definition 6|metric space]] and let } x \\in X \\text{ and } \\varepsilon > 0. \\\\
                  \\overline{B}(x, \\varepsilon) = \\{ y \\in X : d(x, y) \\leq \\varepsilon \\} \\text{ is closed.} \\\\[1em]
                  \\textit{Proof.} \\\\
                  \\text{Let } x \\in X \\text{ and } \\varepsilon > 0. \\\\
                  \\text{Then } \\overline{B}(x, \\varepsilon)^c = \\{ y \\in X : d(x, y) > \\varepsilon \\}. \\\\
                  \\text{WTS } \\overline{B}(x, \\varepsilon)^c \\text{ is open.} \\\\
                  \\text{Let } z \\in \\overline{B}(x, \\varepsilon)^c \\text{ and say } s = d(x, z) - \\varepsilon. \\\\
                  \\text{Since } d(x, z) > \\varepsilon \\text{, we have } s > 0. \\\\
                  \\text{Then for all } y \\in [[definition 8|$B(z, s)$]] \\text{, we have} \\\\
                  d(x, y) \\geq d(x, z) - d(z, y) > d(x, z) - s = d(x, z) - d(x, z) + \\varepsilon = \\varepsilon. \\\\
                  \\text{So } y \\in \\overline{B}(x, \\varepsilon)^c. \\text{ That is, } B(z, s) \\subseteq \\overline{B}(x, \\varepsilon)^c. \\\\
                  \\text{By [[theorem 6|Prop 1.1.13]], } \\overline{B}(x, \\varepsilon)^c \\text{ is open.} \\\\
                  \\text{Thus, } \\overline{B}(x, \\varepsilon) \\text{ is closed.} \\ \\ \\blacksquare`,
      },
    ],
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
    figure: {
      src: "/finer_coarser.png",
      alt: "Two topologies on X drawn as circles of open sets: τ₂ has every open set of τ₁ plus three extra small circles, so τ₁ ⊂ τ₂ and τ₂ is finer than τ₁",
      width: 1664,
      height: 1120,
      invert: true,
    },
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
    figure: {
      src: "/basis_example.png",
      alt: "An open set U drawn as a blob, with a point x inside a square B that sits inside U; caption: must be able to draw this picture for every x",
      width: 1337,
      height: 637,
      invert: true,
    },
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
    definition: `\\text{A \\textit{normed vector space} is a vector space $X$} \\\\
                 \\text{over the real or complex scalars, with a function} \\\\
                 \\| \\cdot \\| : X \\to [0, \\infty) \\text{, called a \\textit{norm}, satisfying:} \\\\[0.5em]
                 \\text{(a) (Distance is 0 iff same position)} \\\\
                 \\qquad \\|x\\| = 0 \\text{ iff } x = 0. \\\\[0.5em]
                 \\text{(b) (Triangle Inequality)} \\\\
                 \\qquad \\|x + y\\| \\leq \\|x\\| + \\|y\\| \\text{ for all } x, y \\in X. \\\\[0.5em]
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
  {
    number: 10,
    chapter: 1,
    section: 2,
    term: "Equivalent Metrics",
    definition: `\\text{Let $d_1, d_2$ be [[definition 6|metrics]] on a set $X$ and fix } C > 0. \\\\
                 \\text{We say that } d_1 \\leq C d_2 \\text{ if } d_1(x, y) \\leq C d_2(x, y), \\ \\forall x, y \\in X. \\\\[0.5em]
                 \\text{We say that $d_1$ and $d_2$ are \\textit{equivalent} if } \\exists C_1 > 0, \\ C_2 > 0 \\\\
                 \\text{s.t. } d_1 \\leq C_2 d_2 \\text{ and } d_2 \\leq C_1 d_1.`,
  },
  {
    number: 11,
    chapter: 1,
    section: 3,
    term: "Subbasis",
    definition: `\\text{Let $(X, \\tau)$ be a [[definition 1|topological space]] and } \\mathcal{A} \\subseteq \\mathcal{P}(X). \\\\
                 \\text{$\\mathcal{A}$ is called a \\textit{subbasis} for $\\tau$} \\\\
                 \\text{if the set of intersections of a finite number of sets} \\\\
                 \\text{in $\\mathcal{A}$ is a [[definition 5|basis]] for $\\tau$.} \\\\
                 \\text{That is, $\\tau$ is the set of unions of intersections} \\\\
                 \\text{of a finite number of sets in $\\mathcal{A}$,} \\\\
                 \\text{together with } \\varnothing. \\\\[1em]
                 \\text{This is notated as,} \\\\
                 \\mathcal{B} = \\left\\{ \\bigcap_{k=1}^n A_k : A_1, A_2, \\ldots, A_n \\in \\mathcal{A}, \\ n \\in \\mathbb{N} \\right\\} \\\\
                 \\text{is a basis for } \\tau. \\\\
                 \\text{So by [[theorem 1|Lemma 1.1.6]],} \\\\
                 \\tau = \\left\\{ \\bigcup_{i \\in I} B_i : B_i \\in \\mathcal{B} \\right\\} \\cup \\varnothing.`,
  },
  {
    number: 12,
    chapter: 1,
    section: 3,
    term: "Neighborhood",
    definition: `\\text{Let $(X, \\tau)$ be a [[definition 1|topological space]] and } x \\in X. \\\\
                 \\text{A \\textit{neighborhood} of $x$ is an [[definition 2|open]] set } U \\in \\tau \\text{ where } x \\in U.`,
  },
  {
    number: 13,
    chapter: 1,
    section: 3,
    term: "Neighborhood System",
    definition: `\\text{The \\textit{neighborhood system} of $x$ is} \\\\
                 \\mathcal{O}(x) = \\{ U \\in \\tau : x \\in U \\}.`,
  },
  {
    number: 14,
    chapter: 1,
    section: 3,
    term: "Neighborhood Basis",
    definition: `\\text{A \\textit{neighborhood base} at $x$ is a subcollection } \\mathcal{B}(x) \\subseteq \\mathcal{O}(x) \\\\
                 \\text{satisfying the condition that for every [[definition 12|neighborhood]] $U$ of $x$} \\\\
                 \\text{we can find some } V \\in \\mathcal{B}(x) \\text{ s.t. } V \\subset U.`,
  },
  {
    number: 15,
    chapter: 1,
    section: 4,
    term: "Closure",
    definition: `\\text{Let $(X, \\tau)$ be a [[definition 1|topological space]] and } A \\subseteq X. \\\\
                 \\text{The \\textit{closure} $\\overline{A}$ of $A$ is} \\\\
                 \\text{the intersection of all [[definition 3|closed]] subsets of $X$ containing $A$.} \\\\
                 \\text{By [[theorem 12|Prop 1.1.26]], $\\overline{A}$ is closed, and we set } \\overline{\\varnothing} = \\varnothing, \\ \\overline{X} = X.`,
  },
  {
    number: 16,
    chapter: 1,
    section: 4,
    term: "Interior",
    definition: `\\text{Let $(X, \\tau)$ be a [[definition 1|topological space]] and } A \\subseteq X. \\\\
                 \\text{The \\textit{interior} of $A$, written $A^\\circ$ or int$(A)$,} \\\\
                 \\text{is the union of all [[definition 2|open]] sets contained in $A$.} \\\\[1em]
                 \\text{$A^\\circ$ is the largest open set in $A$.} \\\\
                 \\text{$A$ is open iff } A = A^\\circ.`,
  },
];
