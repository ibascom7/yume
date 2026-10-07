import type { ChapterRef, HomeworkRef } from "@/app/components/notesFilter";

interface Solution {
  title?: string;
  content: string;
}

interface Exercise extends ChapterRef, HomeworkRef {
  number: number;
  title: string;
  problem: string;
  solution?: string | Solution[];
}

export const exercises: Exercise[] = [
  // Example card: replace with your own. This one is both a textbook exercise (§1.2) and a HW 1 problem.
  {
    number: 1,
    chapter: 1,
    section: 2,
    homework: 1,
    title: "Example Exercise",
    problem: `\\text{Problem statement, in LaTeX.}`,
    solution: `\\text{Worked solution, in LaTeX.}`,
  },
  // Template:
  // {
  //   number: 1,
  //   chapter: 1,
  //   section: 1,
  //   homework: 1, // if it was assigned; a problem can have a homework, a chapter/section, or both
  //   title: "Exercise title",
  //   problem: `\\text{Problem...}`,
  //   solution: `\\text{Solution...}`,
  //   // or multiple parts:
  //   // solution: [
  //   //   { title: "Part (a)", content: `\\text{...}` },
  //   //   { title: "Part (b)", content: `\\text{...}` },
  //   // ],
  // },
];
