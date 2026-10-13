import type { ChapterRef } from "@/app/components/notesFilter";
import type { TheoremKind } from "../components/TheoremCard";

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
}

export const theorems: Theorem[] = [
  // Template:
  // {
  //   kind: "Lemma", // optional: "Theorem" (default), "Lemma", "Corollary", or "Proposition"
  //   number: 1,
  //   chapter: 1,
  //   section: 1,
  //   title: "Theorem name",
  //   statement: `\\text{Statement...}`,
  //   proof: `\\text{Proof...}`,
  //   // or multiple proofs:
  //   // proof: [
  //   //   { title: "Proof of (a)", content: `\\text{...}` },
  //   //   { title: "Proof of (b)", content: `\\text{...}` },
  //   // ],
  // },
  {
    kind: "Lemma",
    number: 1,
    chapter: 1,
    section: 2,
    title: "Properties of a Basis (Lemma 1.1.6)",
    statement: `\\text{Let $(X, \\tau)$ be a topological space with basis $\\mathcal{B}$.} \\\\
                \\text{If } \\varnothing \\neq U \\subseteq X \\text{, then TFAE} \\\\[0.5em]
                \\text{(a) } U \\in \\tau. \\\\[0.5em]
                \\text{(b) $U$ is a union of elements in $\\mathcal{B}$.} \\\\
                \\text{That is, } U = \\bigcup_{x \\in U} B_x \\text{ with } B_x \\in \\mathcal{B}. \\\\[0.5em]
                \\text{(c) } \\forall x \\in U, \\ \\exists B \\in \\mathcal{B} \\text{ s.t. } x \\in B \\subseteq U.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Topology]] \\\\
                  \\text{2) } [[definition 5|Basis]]`,
      },
      {
        title: "(b) ⇒ (a)",
        content: `\\text{Since } \\mathcal{B} \\subseteq \\tau \\text{, we have } B_x \\in \\mathcal{B} \\subseteq \\tau \\text{ for every } x \\in U \\text{ as well.} \\\\
                  \\text{Thus } U = \\bigcup_{x \\in U} B_x \\in \\tau \\text{ by definition of [[definition 1|topology]].}`,
      },
      {
        title: "(a) ⇒ (c)",
        content: `\\text{Immediate, because it satisfies our definition of [[definition 5|basis]].}`,
      },
      {
        title: "(c) ⇒ (b)",
        content: `\\text{By (c), } \\forall x \\in U \\ \\exists B_x \\in \\mathcal{B} \\text{ s.t. } x \\in B_x \\subseteq U. \\\\ \\text{So,} \\\\
                  \\begin{aligned}
                    U &= \\bigcup_{x \\in U} \\{x\\} \\\\
                      &\\subseteq \\bigcup_{x \\in U} B_x \\\\
                      &\\subseteq \\bigcup_{x \\in U} U = U.
                  \\end{aligned} \\\\
                  \\text{Thus, } U = \\bigcup_{x \\in U} B_x. \\ \\ \\blacksquare`,
      },
    ],
  },
];
