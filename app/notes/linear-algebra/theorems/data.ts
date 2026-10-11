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
  {
    kind: "Theorem",
    number: 1,
    chapter: 1,
    section: 2,
    title: "Cancellation Law for Vector Addition (Thm 1.1)",
    statement: `\\text{If } x, y, z \\in V \\text{ such that } x + z = y + z\\text{, then } x = y.`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Vector Space]] \\text{ (VS 2), (VS 3), (VS 4)}`,
      },
      {
        title: "Proof",
        content: `\\exists\\, v \\in V \\text{ s.t. } z + v = 0 \\text{ (VS 4). Thus,} \\\\
                  \\begin{aligned}
                    x &= x + 0 = x + (z + v) = (x + z) + v \\\\
                      &= (y + z) + v = y + (z + v) = y + 0 = y
                  \\end{aligned} \\\\
                  \\text{by (VS 2) and (VS 3).} \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Corollary",
    number: 2,
    chapter: 1,
    section: 2,
    title: "Uniqueness of the Zero Vector (Cor. 1 to Thm 1.1)",
    statement: `0 \\in V \\text{ is unique.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Vector Space]] \\text{ (VS 1), (VS 3)} \\\\
                  \\text{2) } [[theorem 1|Cancellation Law]]`,
      },
      {
        title: "Proof",
        content: `\\text{Suppose } a, b \\in V \\text{ satisfy (VS 3).} \\\\
                  \\text{Then for } x \\in V \\text{ we have } x + a = x = x + b\\text{,} \\\\
                  \\text{so } a + x = b + x \\text{ by (VS 1).} \\\\
                  \\text{Then } [[theorem 1|cancellation law]] \\text{ says } a = b. \\\\
                  \\text{Hence, } 0 \\in V \\text{ is unique.} \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Corollary",
    number: 3,
    chapter: 1,
    section: 2,
    title: "The Additive Inverse is Unique (Cor. 2 to Thm 1.1)",
    statement: `y \\in V \\text{ that satisfy (VS 4) are unique.}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Vector Space]] \\text{ (VS 1), (VS 4)} \\\\
                  \\text{2) } [[theorem 1|Cancellation Law]] \\\\
                  \\text{3) } [[theorem 2|Uniqueness of the Zero Vector]]`,
      },
      {
        title: "Proof",
        content: `\\text{Let } x \\in V \\text{ and suppose } a, b \\in V \\text{ satisfy (VS 4) for } x. \\\\
                  \\text{Then we have } x + a = 0 \\text{ and } x + b = 0. \\\\
                  \\text{Since } 0 \\text{ is unique by }[[theorem 2|previous corollary]]\\text{, } x + a = x + b\\text{,} \\\\
                  \\text{so } a + x = b + x \\text{ by (VS 1),} \\\\
                  \\text{and by }[[theorem 1|cancellation law]]\\text{, } a = b. \\\\
                  \\text{Hence, the additive inverse is unique.} \\ \\ \\blacksquare`,
      },
    ],
  },
  {
    kind: "Theorem",
    number: 4,
    chapter: 1,
    section: 2,
    title: "Thm 1.2",
    statement: `\\text{Let } V \\text{ be a vector space. Then the following are true:} \\\\[0.5em]
                \\text{(a) } 0x = 0 \\ \\ \\forall x \\in V \\\\[0.5em]
                \\text{(b) } (-a)x = -(ax) = a(-x) \\ \\ \\forall a \\in \\mathbb{F} \\text{ and } x \\in V \\\\[0.5em]
                \\text{(c) } a0 = 0 \\ \\ \\forall a \\in \\mathbb{F}`,
    proof: [
      {
        title: "Recall",
        content: `\\text{1) } [[definition 1|Vector Space]] \\text{ (VS 1), (VS 3), (VS 5), (VS 6), (VS 7), (VS 8)} \\\\
                  \\text{2) } [[theorem 1|Cancellation Law]] \\\\
                  \\text{3) } [[theorem 3|The Additive Inverse is Unique]]`,
      },
      {
        title: "Proof of (a)",
        content: `\\text{Observe} \\\\
                  0x + 0x = (0 + 0)x = 0x = 0x + 0 = 0 + 0x \\\\
                  \\text{by (VS 8), (VS 3), and (VS 1).} \\\\
                  \\text{Hence } 0x = 0 \\text{ by }[[theorem 1|cancellation law]]\\text{.} \\ \\ \\blacksquare`,
      },
      {
        title: "Proof of (b)",
        content: `\\text{Observe} \\\\
                  ax + (-a)x = (a + (-a))x = 0x = 0 \\\\
                  \\text{by (VS 8) and (a).} \\\\
                  \\text{So by }[[theorem 3|Cor. 2 of Theorem 1.1]]\\text{, we must have } (-a)x = -(ax). \\\\
                  \\text{In particular, } (-1)x = -(1x) = -x \\text{ by (VS 5). So,} \\\\
                  a(-x) = a((-1)x) = (a(-1))x = (-a)x \\\\
                  \\text{by (VS 6).} \\\\
                  \\text{Hence } (-a)x = -(ax) = a(-x). \\ \\ \\blacksquare`,
      },
      {
        title: "Proof of (c)",
        content: `\\text{Observe} \\\\
                  a0 + a0 = a(0 + 0) = a0 = a0 + 0 = 0 + a0 \\\\
                  \\text{by (VS 7), (VS 3), and (VS 1).} \\\\
                  \\text{Hence } a0 = 0 \\text{ by }[[theorem 1|cancellation law]]\\text{.} \\\\
                  \\text{(Note how this is practically identical to the proof of (a).)} \\ \\ \\blacksquare`,
      },
    ],
  },
];
