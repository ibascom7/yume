import type { ChapterRef } from "@/app/components/notesFilter";
import type { TheoremKind } from "../components/TheoremCard";
import type { Example } from "../components/DefinitionCard";

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
  examples?: Example[];
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
  //   examples: [ // optional, shown under the proof in the same dropdown
  //     { title: "Example name", content: `\\text{...}` },
  //   ],
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
                  \\text{(a) } d(x, y) = \\|x - y\\| = \\|(-1)(y - x)\\| = |-1| \\, \\|y - x\\| = d(y, x). \\quad \\text{(by [[definition 7|Def 7(c)]])} \\\\[0.5em]
                  \\begin{aligned}
                    \\text{(b) } d(x, z) &= \\|x - z\\| = \\|(x - y) + (y - z)\\| \\leq \\|x - y\\| + \\|y - z\\| \\quad \\text{(by [[definition 7|Def 7(b)]])} \\\\
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
  {
    kind: "Proposition",
    number: 6,
    chapter: 1,
    section: 2,
    title: "Open Sets in a Metric Space (Prop 1.1.13)",
    statement: `\\text{Let $(X, d)$ be a metric space and } U \\subseteq X. \\\\
                U \\in \\tau_d \\text{ iff } \\forall x \\in U, \\ \\exists r > 0 \\text{ s.t. } B(x, r) \\subseteq U.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 8|Open Ball]] \\\\
                  \\text{2) } [[theorem 1|Properties of a Basis]] \\\\
                  \\text{3) } [[theorem 4|Open Balls Contain Open Balls]] \\\\
                  \\text{4) } [[theorem 5|Open Balls Form a Basis]]`,
      },
      {
        title: "(⇐)",
        content: `\\text{Suppose } \\forall x \\in U, \\ \\exists r > 0 \\text{ s.t. } B(x, r) \\subseteq U. \\\\
                  \\text{If } U = \\varnothing \\text{, then } U \\in \\tau_d \\text{ since $\\tau_d$ is a [[definition 1|topology]].} \\\\
                  \\text{Otherwise, each $B(x, r)$ is in the basis of open balls for $\\tau_d$ ([[theorem 5|Prop 1.1.11]]),} \\\\
                  \\text{and } x \\in B(x, r) \\subseteq U \\text{, so } U \\in \\tau_d \\text{ by [[theorem 1|Lemma 1.1.6]] ((c) ⇒ (a)).}`,
      },
      {
        title: "(⇒)",
        content: `\\text{Suppose } U \\in \\tau_d \\text{ and let } x \\in U. \\\\
                  \\text{Since the open balls form a [[definition 5|basis]] for $\\tau_d$ ([[theorem 5|Prop 1.1.11]]),} \\\\
                  \\exists y \\in X, \\ s > 0 \\text{ s.t. } x \\in B(y, s) \\subseteq U. \\\\
                  \\text{By [[theorem 4|Prop 1.1.10]], } \\exists r > 0 \\text{ s.t. } B(x, r) \\subseteq B(y, s) \\subseteq U. \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Lemma",
    number: 7,
    chapter: 1,
    section: 2,
    title: "Comparing Topologies via Bases (Lemma 1.1.14)",
    statement: `\\text{Let $\\mathcal{B}_i$ be a basis for a topological space $(X, \\tau_i)$, for } i \\in \\{1, 2\\}. \\\\
                \\text{Then } \\tau_1 \\subseteq \\tau_2 \\text{ iff } \\forall x \\in X, \\ \\forall B \\in \\mathcal{B}_1 \\text{ with } x \\in B, \\\\
                \\exists C \\in \\mathcal{B}_2 \\text{ s.t. } x \\in C \\subseteq B.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Topology]] \\\\
                  \\text{2) } [[definition 5|Basis]] \\\\
                  \\text{3) } [[theorem 1|Properties of a Basis]]`,
      },
      {
        title: "(⇐)",
        content: `\\text{Suppose } \\forall x \\in X \\text{ and } \\forall B \\in \\mathcal{B}_1 \\text{ with } x \\in B, \\\\
                  \\exists C \\in \\mathcal{B}_2 \\text{ s.t. } x \\in C \\subseteq B. \\\\
                  \\text{Let } U \\in \\tau_1. \\text{ If } U = \\varnothing \\text{, then } U \\in \\tau_2 \\text{ since $\\tau_2$ is a [[definition 1|topology]].} \\\\
                  \\text{Otherwise, let } x \\in U. \\text{ By def of [[definition 5|basis]], } \\exists B \\in \\mathcal{B}_1 \\text{ s.t. } x \\in B \\subseteq U. \\\\
                  \\text{By hypothesis, } \\exists C \\in \\mathcal{B}_2 \\text{ s.t. } x \\in C \\subseteq B \\subseteq U. \\\\
                  \\text{Since $x \\in U$ was arbitrary, } U \\in \\tau_2 \\text{ by [[theorem 1|Lemma 1.1.6]] ((c) ⇒ (a)).} \\\\
                  \\text{Thus } \\tau_1 \\subseteq \\tau_2.`,
      },
      {
        title: "(⇒)",
        content: `\\text{Suppose } \\tau_1 \\subseteq \\tau_2. \\\\
                  \\text{Let } x \\in X \\text{ and } B \\in \\mathcal{B}_1 \\subseteq \\tau_1 \\text{ s.t. } x \\in B. \\\\
                  \\text{By hypothesis, } B \\in \\tau_2. \\\\
                  \\text{Since $\\mathcal{B}_2$ is a [[definition 5|basis]] for $\\tau_2$ and } x \\in B \\text{, } \\exists C \\in \\mathcal{B}_2 \\text{ s.t. } x \\in C \\subseteq B. \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Lemma",
    number: 8,
    chapter: 1,
    section: 2,
    title: "Comparing Metric Topologies (Lemma 1.1.15)",
    statement: `\\text{Let $d_1, d_2$ be metrics on $X$. Then } \\tau_{d_1} \\subseteq \\tau_{d_2} \\text{ iff} \\\\
                \\forall x \\in X, \\ \\forall \\varepsilon > 0, \\ \\exists \\delta > 0 \\text{ s.t. } B_{d_2}(x, \\delta) \\subseteq B_{d_1}(x, \\varepsilon), \\\\
                \\text{where $B_{d_i}$ denotes an open ball with respect to $d_i$.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 8|Open Ball]] \\\\
                  \\text{2) } [[theorem 4|Open Balls Contain Open Balls]] \\\\
                  \\text{3) } [[theorem 5|Open Balls Form a Basis]] \\\\
                  \\text{4) } [[theorem 7|Comparing Topologies via Bases]]`,
      },
      {
        title: "Setup",
        content: `\\text{For } i \\in \\{1, 2\\} \\text{, let } \\mathcal{B}_{d_i} = \\{B_{d_i}(x, r) : x \\in X, \\ r > 0\\}, \\\\
                  \\text{a basis for $\\tau_{d_i}$ by [[theorem 5|Prop 1.1.11]].}`,
      },
      {
        title: "(⇒)",
        content: `\\text{Suppose } \\tau_{d_1} \\subseteq \\tau_{d_2}. \\text{ Let } x \\in X \\text{ and } \\varepsilon > 0 \\text{, so } x \\in B_{d_1}(x, \\varepsilon) \\in \\mathcal{B}_{d_1}. \\\\
                  \\text{By [[theorem 7|Lemma 1.1.14]], } \\exists C \\in \\mathcal{B}_{d_2} \\text{ s.t. } x \\in C \\subseteq B_{d_1}(x, \\varepsilon). \\\\
                  \\text{Since $C$ is a $d_2$-ball containing $x$, [[theorem 4|Prop 1.1.10]] gives } \\delta > 0 \\\\
                  \\text{s.t. } B_{d_2}(x, \\delta) \\subseteq C \\subseteq B_{d_1}(x, \\varepsilon).`,
      },
      {
        title: "(⇐)",
        content: `\\text{Suppose } \\forall x \\in X, \\ \\forall \\varepsilon > 0, \\ \\exists \\delta > 0 \\text{ s.t. } B_{d_2}(x, \\delta) \\subseteq B_{d_1}(x, \\varepsilon). \\\\
                  \\text{Let } x \\in X \\text{ and } B \\in \\mathcal{B}_{d_1} \\text{ with } x \\in B. \\\\
                  \\text{By [[theorem 4|Prop 1.1.10]], } \\exists \\varepsilon > 0 \\text{ s.t. } B_{d_1}(x, \\varepsilon) \\subseteq B. \\\\
                  \\text{By hypothesis, } \\exists \\delta > 0 \\text{ s.t. } x \\in B_{d_2}(x, \\delta) \\subseteq B_{d_1}(x, \\varepsilon) \\subseteq B \\text{, with } B_{d_2}(x, \\delta) \\in \\mathcal{B}_{d_2}. \\\\
                  \\text{Then } \\tau_{d_1} \\subseteq \\tau_{d_2} \\text{ follows from [[theorem 7|Lemma 1.1.14]].} \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Corollary",
    number: 9,
    chapter: 1,
    section: 2,
    title: "Equivalent Metrics Induce the Same Topology (Cor 1.1.17)",
    statement: `\\text{Let $d_1, d_2$ be metrics on a set $X$} \\\\
                \\text{s.t. $\\exists$ a constant $C > 0$ s.t. } d_1 \\leq C d_2, \\ \\forall x, y \\in X. \\\\
                \\text{Then } \\tau_{d_1} \\subseteq \\tau_{d_2}. \\\\[0.5em]
                \\text{Also, two equivalent metrics induce the same topology.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 8|Open Ball]] \\\\
                  \\text{2) } [[definition 10|Equivalent Metrics]] \\\\
                  \\text{3) } [[theorem 8|Comparing Metric Topologies]]`,
      },
      {
        title: "When d₁ ≤ Cd₂",
        content: `\\text{Let } x \\in X \\text{ and } \\varepsilon > 0 \\text{, and choose } \\delta = \\varepsilon / C. \\\\
                  \\text{Then } y \\in B_{d_2}(x, \\delta) \\text{ implies } d_2(x, y) < \\delta = \\varepsilon / C. \\\\
                  \\text{So } d_1(x, y) \\leq C d_2(x, y) < C \\varepsilon / C = \\varepsilon \\text{, and thus, } y \\in B_{d_1}(x, \\varepsilon). \\\\
                  \\text{Hence } B_{d_2}(x, \\delta) \\subseteq B_{d_1}(x, \\varepsilon) \\text{, so } \\tau_{d_1} \\subseteq \\tau_{d_2} \\text{ by [[theorem 8|Lemma 1.1.15]].}`,
      },
      {
        title: "Equivalent metrics",
        content: `\\text{Now suppose $d_1, d_2$ are [[definition 10|equivalent]] metrics on $X$.} \\\\
                  \\text{Then by def of equivalent metrics,} \\\\
                  \\exists C_1 > 0, \\ C_2 > 0 \\text{ s.t. } d_1 \\leq C_2 d_2 \\text{ and } d_2 \\leq C_1 d_1. \\\\
                  \\text{Call } C_2 = C \\text{, then the argument above tells us } \\tau_{d_1} \\subseteq \\tau_{d_2}. \\\\
                  \\text{Then similarly, with $C = C_1$ and the roles of $d_1, d_2$ swapped, } \\tau_{d_2} \\subseteq \\tau_{d_1}. \\\\
                  \\text{Hence, } \\tau_{d_1} = \\tau_{d_2}. \\ \\ \\blacksquare`,
      },
    ],
    examples: [
      {
        title: "The p-metrics on ℝⁿ (Ex 1.1.18)",
        content: `\\text{On } \\mathbb{R}^n \\text{, we have [[definition 7|norms]] } \\|x\\|_p = \\left( \\sum_{i=1}^n |x_i|^p \\right)^{\\frac{1}{p}} \\\\
                  \\text{and associated [[theorem 3|metrics]] } d_p(x, y) = \\|x - y\\|_p, \\ 1 \\leq p < \\infty. \\\\
                  \\text{Set } \\|x\\|_\\infty = \\max\\{|x_i| : 1 \\leq i \\leq n\\}, \\ d_\\infty(x, y) = \\|x - y\\|_\\infty. \\\\[0.5em]
                  \\text{Then } \\|x\\|_\\infty \\leq \\|x\\|_p, \\ \\forall p \\in [1, \\infty) \\text{, as seen below:} \\\\
                  \\begin{aligned}
                    \\|x\\|_\\infty &= \\max\\{|x_i| : 1 \\leq i \\leq n\\} = \\left( \\max\\{|x_i|^p : 1 \\leq i \\leq n\\} \\right)^{\\frac{1}{p}} \\\\
                                &\\leq \\left( \\sum_{i=1}^n |x_i|^p \\right)^{\\frac{1}{p}} = \\|x\\|_p.
                  \\end{aligned} \\\\[0.5em]
                  \\text{Also } \\|x\\|_p \\leq C \\|x\\|_\\infty \\text{ where } C = n^{\\frac{1}{p}} \\text{, as shown below:} \\\\
                  \\begin{aligned}
                    \\|x\\|_p = \\left( \\sum_{i=1}^n |x_i|^p \\right)^{\\frac{1}{p}} &\\leq \\left( \\sum_{i=1}^n \\max\\{|x_j|^p : 1 \\leq j \\leq n\\} \\right)^{\\frac{1}{p}} \\\\
                                &= \\left( n \\max\\{|x_j|^p : 1 \\leq j \\leq n\\} \\right)^{\\frac{1}{p}} = n^{\\frac{1}{p}} \\|x\\|_\\infty.
                  \\end{aligned} \\\\[0.5em]
                  \\text{So } d_\\infty \\leq d_p, \\ \\forall p \\in [1, \\infty) \\text{, and } d_p \\leq n^{\\frac{1}{p}} d_\\infty. \\\\
                  \\text{Thus, by def of [[definition 10|equivalent metrics]], $d_p$ and $d_\\infty$ are equivalent metrics.} \\\\
                  \\text{Hence by Corollary 1.1.17, they induce the same topology.}`,
      },
    ],
  },
  {
    kind: "Proposition",
    number: 10,
    chapter: 1,
    section: 3,
    title: "Every Covering Collection is a Subbasis (Prop 1.1.20)",
    statement: `\\text{Let } \\mathcal{A} \\subseteq \\mathcal{P}(X) \\text{ s.t. } \\bigcup \\{A : A \\in \\mathcal{A}\\} = X. \\\\
                \\text{Then $\\mathcal{A}$ is the subbasis for a unique topology on $X$.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 5|Basis]] \\text{ (B1), (B2)} \\\\
                  \\text{2) } [[definition 11|Subbasis]] \\\\
                  \\text{3) } [[theorem 1|Properties of a Basis]] \\\\
                  \\text{4) } [[theorem 2|Every Basis Collection has a Unique Topology]]`,
      },
      {
        title: "Setup",
        content: `\\text{Let } \\mathcal{B} = \\left\\{ \\bigcap_{k=1}^n A_k : A_1, A_2, \\ldots, A_n \\in \\mathcal{A}, \\ n \\in \\mathbb{N} \\right\\}. \\\\
                  \\text{So by construction of } \\mathcal{B}, \\ \\mathcal{A} \\subseteq \\mathcal{B} \\subseteq \\mathcal{P}(X). \\\\
                  \\text{Note that $\\mathcal{B}$ depends only on $\\mathcal{A}$, not on any topology.}`,
      },
      {
        title: "Existence",
        content: `\\text{We claim $\\mathcal{B}$ satisfies (B1) and (B2).} \\\\[0.5em]
                  \\text{(B1) If } x \\in X \\text{, then by hypothesis, } \\exists A \\in \\mathcal{A} \\text{ s.t. } x \\in A. \\\\
                  \\text{However, for any } A \\in \\mathcal{A} \\text{, we can fix } n = 1 \\text{ to get } A = A_1 \\in \\mathcal{B}. \\\\
                  \\text{Thus, (B1) is satisfied.} \\\\[0.5em]
                  \\text{(B2) Let } E_1, E_2 \\in \\mathcal{B} \\text{ and } x \\in E_1 \\cap E_2. \\\\
                  \\text{Say } E_1 = \\bigcap_{k=1}^n A_k \\text{ and } E_2 = \\bigcap_{k=1}^m A_k' \\text{ with } A_k, A_k' \\in \\mathcal{A}. \\\\
                  \\text{Then } E_1 \\cap E_2 \\text{ is an intersection of } n + m \\text{ sets in } \\mathcal{A} \\text{, so } E_1 \\cap E_2 \\in \\mathcal{B}. \\\\
                  \\text{So (B2) is satisfied by setting } E_3 = E_1 \\cap E_2 \\text{, so that } x \\in E_3 \\subseteq E_1 \\cap E_2. \\\\[0.5em]
                  \\text{By [[theorem 2|Lemma 1.1.7]], } \\exists \\text{ a topology $\\sigma$ on $X$ s.t. $\\mathcal{B}$ is a basis for $\\sigma$.} \\\\
                  \\text{Thus, by def of [[definition 11|subbasis]], $\\mathcal{A}$ is a subbasis for $\\sigma$.}`,
      },
      {
        title: "Uniqueness",
        content: `\\text{Suppose $\\mathcal{A}$ is a subbasis for topologies $\\tau_1$ and $\\tau_2$ on $X$.} \\\\
                  \\text{By def of [[definition 11|subbasis]], the same $\\mathcal{B}$ is a basis for both $\\tau_1$ and $\\tau_2$.} \\\\
                  \\text{Let } U \\in \\tau_1. \\text{ If } U = \\varnothing \\text{, then } U \\in \\tau_2 \\text{ since $\\tau_2$ is a [[definition 1|topology]].} \\\\
                  \\text{Otherwise, by [[theorem 1|Lemma 1.1.6]] ((a) ⇒ (b)), $U$ is a union of elements in $\\mathcal{B}$.} \\\\
                  \\text{Since $\\mathcal{B}$ is a basis for $\\tau_2$, } U \\in \\tau_2 \\text{ by [[theorem 1|Lemma 1.1.6]] ((b) ⇒ (a)).} \\\\
                  \\text{So } \\tau_1 \\subseteq \\tau_2 \\text{, and by symmetry } \\tau_2 \\subseteq \\tau_1. \\\\
                  \\text{Hence, } \\tau_1 = \\tau_2. \\ \\ \\blacksquare`,
      },
    ],
  },
];
