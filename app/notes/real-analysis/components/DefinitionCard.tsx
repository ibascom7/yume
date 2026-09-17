"use client";

import { processLatexLinks } from "./latexLinkHelper";
import TrustedBlockMath from "./TrustedBlockMath";

interface DefinitionCardProps {
  number: number;
  term: string;
  definition: string;
  id?: string;
}

export default function DefinitionCard({ number, term, definition, id }: DefinitionCardProps) {
  return (
    <div id={id} className="border border-gray-300 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 bg-white shadow-sm scroll-mt-4">
      <div className="mb-2 sm:mb-3 text-sm sm:text-base">
        <span className="font-bold text-purple-600">Definition {number}. </span>
        <span className="font-semibold text-black">{term}</span>
      </div>
      <div className="text-black text-sm sm:text-base ml-0 sm:ml-[6em]">
        <TrustedBlockMath math={processLatexLinks(definition)} />
      </div>
    </div>
  );
}
