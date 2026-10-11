import ExerciseCard from "../components/ExerciseCard";
import { filterByChapter, filterByHomework, filterLabel, type NotesFilterParams } from "@/app/components/notesFilter";
import { exercises } from "./data";
import LinkPreviewPopup from "@/app/components/LinkPreviewPopup";
import { linkPreviews } from "../linkPreviews";
import Image from "next/image";

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
          Exercises from Algebraic Topology with worked solutions.
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
      <figure className="mt-8 flex flex-col items-center">
        <Image
          src="/Pepe_Silvia.jpg"
          alt="Charlie from It's Always Sunny in front of a conspiracy board, explaining Pepe Silvia"
          width={800}
          height={600}
          sizes="(max-width: 640px) 100vw, 600px"
          className="w-full max-w-[600px] h-auto rounded-lg"
        />
      </figure>
    </div>
  );
}
