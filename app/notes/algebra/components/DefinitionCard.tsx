"use client";

import TrustedBlockMath from "@/app/components/TrustedBlockMath";

interface DefinitionCardProps {
  number: number;
  term: string;
  definition: string;
  image?: string;
  imageAlt?: string;
}

export default function DefinitionCard({ number, term, definition, image, imageAlt }: DefinitionCardProps) {
  // Calculate approximate width of "Definition X. " for indentation
  const labelWidth = number < 10 ? "7.5em" : "8em";

  return (
    <div className="border border-gray-300 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 bg-white shadow-sm overflow-x-auto">
      <div className="mb-2 sm:mb-3 text-sm sm:text-base">
        <span className="font-bold text-red-600">Definition {number}. </span>
        <span className="font-semibold text-black">{term}</span>
      </div>
      <div className="text-black text-sm sm:text-base ml-0 sm:ml-[7.5em]">
        <TrustedBlockMath math={definition} />
        {image && (
          <div className="mt-2">
            <img
              src={image}
              alt={imageAlt || "Diagram"}
              className="max-w-[200px] sm:max-w-md h-auto rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
