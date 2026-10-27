"use client";

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
  return (
    <div id={id} className="border border-gray-300 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 bg-white shadow-sm scroll-mt-4">
      <div className="flex items-start justify-between gap-2 sm:gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 sm:mb-3 text-sm sm:text-base">
            <div>
              <span className="font-bold text-orange-600">Definition {number}. </span>
              <span className="font-semibold text-black">{term}</span>
            </div>
            <LocationBadges chapter={chapter} section={section} />
          </div>
        </div>
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
    </div>
  );
}
