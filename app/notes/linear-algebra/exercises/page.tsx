import ExerciseCard from "../components/ExerciseCard";

interface Solution {
  title?: string;
  content: string;
}

interface Exercise {
  number: number;
  title: string;
  problem: string;
  solution?: string | Solution[];
}

export default function ExercisesPage() {
  const exercises: Exercise[] = [
    // Template:
    // {
    //   number: 1,
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

  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Exercises from Linear Algebra with worked solutions.
        </p>
      </div>
      {exercises.map((exercise) => (
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
