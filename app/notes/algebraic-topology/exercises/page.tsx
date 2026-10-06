import ExerciseCard from "../components/ExerciseCard";
import { chapterFilterLabel, filterByChapter, type ChapterFilterParams, type ChapterRef } from "@/app/components/chapters";

interface Solution {
  title?: string;
  content: string;
}

interface Exercise extends ChapterRef {
  number: number;
  title: string;
  problem: string;
  solution?: string | Solution[];
}

export default async function ExercisesPage({
  searchParams,
}: {
  searchParams: Promise<ChapterFilterParams>;
}) {
  const filter = await searchParams;
  const exercises: Exercise[] = [
    // Template:
    // {
    //   number: 1,
    //   chapter: 1,
    //   section: 1,
    //   title: "1.1.1",
    //   problem: `\\text{Problem...}`,
    //   solution: `\\text{Solution...}`,
    //   // or multiple parts:
    //   // solution: [
    //   //   { title: "Part (a)", content: `\\text{...}` },
    //   //   { title: "Part (b)", content: `\\text{...}` },
    //   // ],
    // },
  ];

  const visible = filterByChapter(exercises, filter);
  const filterLabel = chapterFilterLabel(filter);

  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Exercises from Algebraic Topology with worked solutions.
        </p>
      </div>
      {visible.length === 0 && filterLabel && (
        <p className="text-gray-500 text-sm sm:text-base">Nothing from {filterLabel} yet.</p>
      )}
      {visible.map((exercise) => (
        <ExerciseCard
          key={exercise.number}
          number={exercise.number}
          title={exercise.title}
          problem={exercise.problem}
          solution={exercise.solution}
          id={`exercise-${exercise.number}`}
        />
      ))}
    </div>
  );
}
