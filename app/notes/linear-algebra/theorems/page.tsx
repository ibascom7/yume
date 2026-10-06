import TheoremCard from "../components/TheoremCard";
import { filterByChapter, filterLabel, type ChapterRef, type NotesFilterParams } from "@/app/components/notesFilter";

interface Proof {
  title?: string;
  content: string;
}

interface Theorem extends ChapterRef {
  number: number;
  title: string;
  statement: string;
  description?: string;
  proof?: string | Proof[];
}

export default async function TheoremsPage({
  searchParams,
}: {
  searchParams: Promise<NotesFilterParams>;
}) {
  // Homework only applies to exercises, so ignore it when it carries over from that tab
  const { chapter, section } = await searchParams;
  const theorems: Theorem[] = [
    // Template:
    // {
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
  ];

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
