import DefinitionCard from "../components/DefinitionCard";
import { definitions } from "./data";
import Image from "next/image";

export default function DefinitionsPage() {
  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Catalog of Definitions from Intermediate Analysis.
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
      <div className="mt-8 flex justify-center">
        <Image
          src="/baby_girls.png"
          alt="I miss my lovers"
          width={1280}
          height={960}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
