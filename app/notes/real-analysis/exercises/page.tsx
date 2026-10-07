import ExerciseCard from "../components/ExerciseCard";
import { filterByChapter, filterByHomework, filterLabel, type NotesFilterParams } from "@/app/components/notesFilter";
import { exercises } from "./data";
import LinkPreviewPopup from "@/app/components/LinkPreviewPopup";
import { linkPreviews } from "../linkPreviews";
import DogPhoto from "../components/DogPhoto";

export default async function ExercisesPage({
  searchParams,
}: {
  searchParams: Promise<NotesFilterParams>;
}) {
  const filter = await searchParams;
  const visible = filterByHomework(filterByChapter(exercises, filter), filter);
  const label = filterLabel(filter);

  return (
    <div>
      <LinkPreviewPopup previews={linkPreviews} />
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Exercises from Real Analysis with worked solutions.
        </p>
      </div>
      {visible.length === 0 && label && (
        <p className="text-gray-500 text-sm sm:text-base">Nothing from {label} yet.</p>
      )}
      {visible.map((exercise) => (
        <ExerciseCard
          key={exercise.number}
          number={exercise.number}
          title={exercise.title}
          problem={exercise.problem}
          solution={exercise.solution}
          chapter={exercise.chapter}
          section={exercise.section}
          homework={exercise.homework}
          id={`exercise-${exercise.number}`}
        />
      ))}

      <DogPhoto tab="exercises" />
    </div>
  );
}
