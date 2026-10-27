"use client";

import { useState } from "react";
import Image from "next/image";
import { processLatexLinks } from "./latexLinkHelper";
import TrustedBlockMath from "@/app/components/TrustedBlockMath";
import LocationBadges from "@/app/components/LocationBadges";
import type { ChapterRef } from "@/app/components/notesFilter";

export interface Example {
  title?: string;
  content: string;
}

export interface Figure {
  src: string;
  alt: string;
  width: number;
  height: number;
  invert?: boolean; // for drawings in white on black, so they read as ink on the white card
}

interface DefinitionCardProps extends ChapterRef {
  number: number;
  term: string;
  definition: string;
  examples?: Example[];
  figure?: Figure;
  id?: string;
}

export default function DefinitionCard({ number, term, definition, examples, figure, chapter, section, id }: DefinitionCardProps) {
  const [isExamplesOpen, setIsExamplesOpen] = useState(false);
  const hasExamples = !!examples && examples.length > 0;

  return (
    <div id={id} className="border border-gray-300 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 bg-white shadow-sm scroll-mt-4">
      <div className="flex items-start justify-between gap-2 sm:gap-4">
        <div className="flex-1 min-w-0">
          <div
            className={`flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 sm:mb-3 text-sm sm:text-base ${hasExamples ? "cursor-pointer hover:opacity-75 transition-opacity" : ""}`}
            onClick={() => hasExamples && setIsExamplesOpen(!isExamplesOpen)}
          >
            <div>
              <span className="font-bold text-orange-600">Definition {number}. </span>
              <span className="font-semibold text-black">{term}</span>
            </div>
            <LocationBadges chapter={chapter} section={section} />
          </div>
          <div className="text-black text-sm sm:text-base ml-0 sm:ml-[6em]">
            <TrustedBlockMath math={processLatexLinks(definition)} />
            {figure && (
              <Image
                src={figure.src}
                alt={figure.alt}
                width={figure.width}
                height={figure.height}
                sizes="(max-width: 640px) 100vw, 480px"
                className={`mt-3 w-full max-w-[480px] h-auto rounded-lg ${figure.invert ? "invert" : ""}`}
              />
            )}
          </div>
        </div>
        {hasExamples && (
          <button
            onClick={() => setIsExamplesOpen(!isExamplesOpen)}
            className="flex-shrink-0 flex items-center gap-1 text-gray-600 hover:text-black transition-all cursor-pointer"
            aria-label={isExamplesOpen ? "Hide examples" : "Show examples"}
          >
            <span className="text-xs sm:text-sm">
              {examples.length} {examples.length === 1 ? "example" : "examples"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 transition-transform"
              style={{ transform: isExamplesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        )}
      </div>

      {hasExamples && isExamplesOpen && (
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
          {examples.map((e, index) => (
            <div key={index} className={index > 0 ? "mt-4 pt-4 border-t border-gray-100" : ""}>
              <div className="font-semibold mb-2 text-gray-700 text-sm sm:text-base">
                {examples.length > 1 ? `Example ${index + 1}` : "Example"}
                {e.title ? `: ${e.title}` : ""}
              </div>
              <div className="text-black text-sm sm:text-base ml-0 sm:ml-[3.5em]" style={{ lineHeight: "2" }}>
                <TrustedBlockMath math={processLatexLinks(e.content)} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
