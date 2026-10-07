import DefinitionCard from "../components/DefinitionCard";
import { definitions } from "./data";
import Image from "next/image";

export default function DefinitionsPage() {
  // Example definitions - replace with your actual definitions
  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Catalog of Definitions. Used Fraleigh's "A First Course in Abstract Algebra" as reference.
        </p>
      </div>
      {definitions.map((def) => (
        <DefinitionCard
          key={def.number}
          number={def.number}
          term={def.term}
          definition={def.definition}
          image={def.image}
          imageAlt={def.imageAlt}
        />
      ))}
      <div className="mt-8 flex flex-col items-center">
        <Image
          src="/guatemamas.jpg"
          alt="Guatemamas"
          width={4032}
          height={3024}
          className="rounded-lg"
        />
        <p className="mt-2 text-gray-600 text-sm italic">Up the road to Santa Cruz la Laguna, Guatemala</p>
        <p className="text-gray-600 text-sm italic">You're almost there!</p>
      </div>
    </div>
  );
}
