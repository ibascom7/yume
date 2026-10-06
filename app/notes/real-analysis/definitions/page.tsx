import DefinitionCard from "../components/DefinitionCard";
import { filterByChapter, filterLabel, type ChapterRef, type NotesFilterParams } from "@/app/components/notesFilter";

interface Definition extends ChapterRef {
  number: number;
  term: string;
  definition: string;
}

export default async function DefinitionsPage({
  searchParams,
}: {
  searchParams: Promise<NotesFilterParams>;
}) {
  // Homework only applies to exercises, so ignore it when it carries over from that tab
  const { chapter, section } = await searchParams;
  const definitions: Definition[] = [
    // Example card: replace with your own
    {
      number: 1,
      chapter: 1,
      section: 1,
      term: "Example Term",
      definition: `\\text{Definition of the term, in LaTeX.}`,
    },
    // Template:
    // {
    //   number: 1,
    //   chapter: 1,
    //   section: 1,
    //   term: "Term",
    //   definition: `\\text{Definition...}`,
    // },
  ];

  const visible = filterByChapter(definitions, { chapter, section });
  const label = filterLabel({ chapter, section });

  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Catalog of Definitions from Real Analysis.
        </p>
      </div>
      {visible.length === 0 && label && (
        <p className="text-gray-500 text-sm sm:text-base">Nothing from {label} yet.</p>
      )}
      {visible.map((def) => (
        <DefinitionCard
          key={def.number}
          number={def.number}
          term={def.term}
          definition={def.definition}
          chapter={def.chapter}
          section={def.section}
          id={`definition-${def.number}`}
        />
      ))}
    </div>
  );
}
