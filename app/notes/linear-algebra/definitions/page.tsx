import DefinitionCard from "../components/DefinitionCard";

interface Definition {
  number: number;
  term: string;
  definition: string;
}

export default function DefinitionsPage() {
  const definitions: Definition[] = [
    // Template:
    // {
    //   number: 1,
    //   term: "1.1.1 Term",
    //   definition: `\\text{Definition...}`,
    // },
  ];

  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Catalog of Definitions from Linear Algebra.
        </p>
      </div>
      {definitions.map((def) => (
        <DefinitionCard
          key={def.number}
          number={def.number}
          term={def.term}
          definition={def.definition}
          id={`definition-${def.number}`}
        />
      ))}
    </div>
  );
}
