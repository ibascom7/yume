"use client";

import { useState } from "react";
import Image from "next/image";
import { processLatexLinks } from "./latexLinkHelper";
import TrustedBlockMath from "@/app/components/TrustedBlockMath";
import LocationBadges from "@/app/components/LocationBadges";
import type { ChapterRef } from "@/app/components/notesFilter";
import ExampleList from "@/app/components/ExampleList";
import { widgets, type WidgetName } from "./widgets";

export interface Example {
  title?: string;
  content: string;
  widget?: WidgetName; // interactive piece shown under the content
}

export function ExampleWidget({ name }: { name?: WidgetName }) {
  if (!name) return null;
  const Widget = widgets[name];
  return <Widget />;
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
              <span className="font-bold text-purple-600">Definition {number}. </span>
              <span className="font-semibold text-black">{term}</span>
            </div>
            <LocationBadges chapter={chapter} section={section} />
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

      {isExamplesOpen && (
        <ExampleList
          items={(examples ?? []).map((e) => ({
            title: e.title,
            body: (
              <>
                <TrustedBlockMath math={processLatexLinks(e.content)} />
                <ExampleWidget name={e.widget} />
              </>
            ),
          }))}
        />
      )}
    </div>
  );
}
