import TheoremCard from "../components/TheoremCard";
import { filterByChapter, filterLabel, type NotesFilterParams } from "@/app/components/notesFilter";
import { theorems } from "./data";

export default async function TheoremsPage({
  searchParams,
}: {
  searchParams: Promise<NotesFilterParams>;
}) {
  // Homework only applies to exercises, so ignore it when it carries over from that tab
  const { chapter, section } = await searchParams;
  const visible = filterByChapter(theorems, { chapter, section });
  const label = filterLabel({ chapter, section });

  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Catalog of theorems from Linear Algebra alongside proofs for each.
        </p>
      </div>
      {visible.length === 0 && label && (
        <p className="text-gray-500 text-sm sm:text-base">Nothing from {label} yet.</p>
      )}
      {visible.map((theorem) => (
        <TheoremCard
          key={theorem.number}
          kind={theorem.kind}
          number={theorem.number}
          title={theorem.title}
          statement={theorem.statement}
          description={theorem.description}
          proof={theorem.proof}
          chapter={theorem.chapter}
          section={theorem.section}
          id={`theorem-${theorem.number}`}
        />
      ))}
    </div>
  );
}
