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
                  \\tau = \\{ U \\subseteq \\mathbb{R}^n : \\ \\forall x \\in U \\ \\exists \\varepsilon > 0 \\text{ s.t. } B(x, \\varepsilon) \\subseteq U \\}.`,
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
];
