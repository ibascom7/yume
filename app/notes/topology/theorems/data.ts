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
  {
    kind: "Lemma",
    number: 2,
    chapter: 1,
    section: 2,
    title: "Every Basis Collection has a Unique Topology (Lemma 1.1.7)",
    statement: `\\text{Let $X$ be a set and } \\mathcal{B} \\subseteq \\mathcal{P}(X) \\text{ with $\\mathcal{B}$ satisfying (B1) and (B2).} \\\\
                \\text{Then } \\exists \\text{ a unique topology $\\tau$ s.t. $\\mathcal{B}$ is a basis for $\\tau$.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Topology]] \\\\
                  \\text{2) } [[definition 5|Basis]] \\text{ (B1), (B2)} \\\\
                  \\text{3) } [[theorem 1|Properties of a Basis]]`,
      },
      {
        title: "Uniqueness",
        content: `\\text{Suppose $\\mathcal{B}$ is a basis for $\\tau_1$ and $\\tau_2$. Let } U \\in \\tau_1. \\\\
                  \\text{If } U = \\varnothing \\text{, then } U \\in \\tau_2 \\text{ since $\\tau_2$ is a [[definition 1|topology]].} \\\\
                  \\text{Otherwise, by [[theorem 1|Lemma 1.1.6]], } U = \\bigcup_{x \\in U} B_x \\text{ with } B_x \\in \\mathcal{B}. \\\\
                  \\text{Since $\\mathcal{B}$ is also a basis for $\\tau_2$, we have } \\mathcal{B} \\subseteq \\tau_2. \\\\
                  \\text{By def of [[definition 1|topology]], $\\tau_2$ is closed under arbitrary unions,} \\\\
                  \\text{so } U = \\bigcup_{x \\in U} B_x \\in \\tau_2. \\\\
                  \\text{Now if } V \\in \\tau_2 \\text{, then the same argument applies by symmetry.} \\\\
                  \\text{Hence, } \\tau_1 = \\tau_2.`,
      },
      {
        title: "Existence",
        content: `\\text{Define } \\tau = \\{ U \\subseteq X : \\forall x \\in U, \\ \\exists B \\in \\mathcal{B} \\text{ s.t. } x \\in B \\subseteq U \\}. \\\\
                  \\text{We proceed by checking the def of a [[definition 1|topology]].} \\\\[0.5em]
                  \\text{(a) } \\varnothing \\in \\tau \\text{ trivially, and } X \\in \\tau \\text{ by (B1).} \\\\[0.5em]
                  \\text{(b) Let } U_i \\in \\tau \\text{ for all } i \\in I. \\\\
                  \\text{If } x \\in \\bigcup_{i \\in I} U_i \\text{, then } \\exists j \\in I \\text{ s.t. } x \\in U_j \\text{ by def of union.} \\\\
                  \\text{By def of } \\tau, \\ \\exists B \\in \\mathcal{B} \\text{ s.t. } x \\in B \\subseteq U_j \\subseteq \\bigcup_{i \\in I} U_i. \\\\
                  \\text{Thus } \\bigcup_{i \\in I} U_i \\in \\tau. \\\\[0.5em]
                  \\text{(c) Let } U, V \\in \\tau \\text{ and let } x \\in U \\cap V. \\\\
                  \\text{By def of } \\tau, \\ \\exists B_1, B_2 \\in \\mathcal{B} \\text{ s.t. } x \\in B_1 \\subseteq U \\text{ and } x \\in B_2 \\subseteq V. \\\\
                  \\text{So } x \\in B_1 \\cap B_2. \\\\
                  \\text{By (B2), } \\exists B_3 \\in \\mathcal{B} \\text{ s.t. } x \\in B_3 \\subseteq B_1 \\cap B_2 \\subseteq U \\cap V. \\\\
                  \\text{Thus } U \\cap V \\in \\tau \\text{, and by induction $\\tau$ is closed under finite intersections.} \\\\[0.5em]
                  \\text{So $\\tau$ is a topology. Finally, $\\mathcal{B}$ is a [[definition 5|basis]] for $\\tau$:} \\\\
                  \\text{each } B \\in \\mathcal{B} \\text{ is in $\\tau$, since } x \\in B \\subseteq B \\text{ for all } x \\in B \\text{,} \\\\
                  \\text{and the basis condition holds by def of } \\tau. \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Proposition",
    number: 3,
    chapter: 1,
    section: 2,
    title: "Normed Spaces are Metric Spaces (Prop 1.1.9)",
    statement: `\\text{Every normed space is a metric space with metric } d(x, y) = \\|x - y\\|.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 6|Metric Space]] \\\\
                  \\text{2) } [[definition 7|Normed Vector Space]]`,
      },
      {
        title: "Proof",
        content: `\\text{Let } (X, \\|\\cdot\\|) \\text{ be a normed space and take } x, y, z \\in X. \\\\
                  \\text{We proceed by checking the properties of a [[definition 6|metric space]].} \\\\[0.5em]
                  \\text{(a) } d(x, y) = \\|x - y\\| = \\|(-1)(y - x)\\| \\overset{\\text{def 7(c)}}{=} |-1| \\, \\|y - x\\| = d(y, x). \\\\[0.5em]
                  \\text{(b) } \\begin{aligned}[t]
                    d(x, z) &= \\|x - z\\| = \\|(x - y) + (y - z)\\| \\leq \\|x - y\\| + \\|y - z\\| \\\\
                            &= d(x, y) + d(y, z).
                  \\end{aligned} \\\\[0.5em]
                  \\text{(c) } d(x, y) = 0 \\text{ iff } \\|x - y\\| = 0 \\text{ iff } x - y = 0 \\text{ iff } x = y. \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Proposition",
    number: 4,
    chapter: 1,
    section: 2,
    title: "Open Balls Contain Open Balls (Prop 1.1.10)",
    statement: `\\text{Let $(X, d)$ be a metric space, } x \\in X \\text{ and } r \\in (0, \\infty). \\\\
                \\forall y \\in B(x, r) \\ \\exists s > 0 \\text{ s.t. } B(y, s) \\subset B(x, r).`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 6|Metric Space]] \\\\
                  \\text{2) } [[definition 8|Open Ball]]`,
      },
      {
        title: "Proof",
        content: `\\text{Let } y \\in B(x, r) \\text{ and say } s = r - d(x, y). \\\\
                  \\text{Since } d(x, y) < r \\text{, we have } s > 0. \\\\
                  \\text{Then for all } z \\in B(y, s) \\text{, we have} \\\\
                  d(x, z) \\leq d(x, y) + d(y, z) < d(x, y) + s = d(x, y) + r - d(x, y) = r. \\\\
                  \\text{So if } d(x, z) < r \\text{, then } z \\in B(x, r). \\text{ That is, } B(y, s) \\subset B(x, r). \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Proposition",
    number: 5,
    chapter: 1,
    section: 2,
    title: "Open Balls Form a Basis (Prop 1.1.11)",
    statement: `\\text{The set of open balls } \\{B(x, r) : x \\in X, \\ r > 0\\} \\\\
                \\text{forms a basis for a topology on a metric space } (X, d).`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 5|Basis]] \\text{ (B1), (B2)} \\\\
                  \\text{2) } [[definition 6|Metric Space]] \\\\
                  \\text{3) } [[definition 8|Open Ball]] \\\\
                  \\text{4) } [[theorem 2|Every Basis Collection has a Unique Topology]] \\\\
                  \\text{5) } [[theorem 4|Open Balls Contain Open Balls]]`,
      },
      {
        title: "Proof",
        content: `\\text{For all } x \\in X, \\ x \\in B(x, r) \\text{, so (B1) is satisfied.} \\\\
                  \\text{Let } z \\in B(x, \\varepsilon) \\cap B(y, \\delta). \\\\
                  \\text{Then by [[theorem 4|Prop 1.1.10]], } \\exists r > 0 \\text{ s.t. } B(z, r) \\subset B(x, \\varepsilon) \\\\
                  \\text{and similarly } \\exists s > 0 \\text{ s.t. } B(z, s) \\subset B(y, \\delta). \\\\
                  \\text{Therefore } z \\in B(z, \\min(r, s)) \\subset B(x, \\varepsilon) \\cap B(y, \\delta) \\text{, so (B2) is satisfied.} \\\\
                  \\text{Hence, } \\{B(x, r) : x \\in X, \\ r > 0\\} \\text{ is a basis for a unique topology} \\\\
                  \\text{by [[theorem 2|Lemma 1.1.7]], which we denote } \\tau_d. \\ \\ \\blacksquare`,
      },
    ],
  },
];
