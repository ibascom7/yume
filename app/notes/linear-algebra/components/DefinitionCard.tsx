"use client";

import { processLatexLinks } from "./latexLinkHelper";
import TrustedBlockMath from "./TrustedBlockMath";
import LocationBadges from "@/app/components/LocationBadges";
import type { ChapterRef } from "@/app/components/notesFilter";

interface DefinitionCardProps extends ChapterRef {
  number: number;
  term: string;
  definition: string;
  id?: string;
}

export default function DefinitionCard({ number, term, definition, chapter, section, id }: DefinitionCardProps) {
  return (
    <div id={id} className="border border-gray-300 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 bg-white shadow-sm scroll-mt-4">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 sm:mb-3 text-sm sm:text-base">
        <div>
          <span className="font-bold text-orange-600">Definition {number}. </span>
          <span className="font-semibold text-black">{term}</span>
        </div>
        <LocationBadges chapter={chapter} section={section} />
      </div>
      <div className="text-black text-sm sm:text-base ml-0 sm:ml-[6em]">
        <TrustedBlockMath math={processLatexLinks(definition)} />
      </div>
    </div>
  );
}
