"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { Chapter } from "./chapters";

interface ChapterFilterProps {
  chapters: Chapter[];
  // Tailwind classes for a selected chip, in the subject's accent color
  activeClassName: string;
}

export default function ChapterFilter({ chapters, activeClassName }: ChapterFilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (chapters.length === 0) return null;

  const chapterNumber = Number(searchParams.get("chapter")) || null;
  const sectionNumber = Number(searchParams.get("section")) || null;
  const selectedChapter = chapters.find((c) => c.number === chapterNumber);

  // Link to this tab with the given selection; no arguments clears the filter
  const hrefFor = (chapter?: number, section?: number) => {
    const params = new URLSearchParams();
    if (chapter) params.set("chapter", String(chapter));
    if (chapter && section) params.set("section", String(section));
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  };

  const chip = (isActive: boolean) =>
    `px-3 py-1 rounded-full border text-xs sm:text-sm transition-colors ${
      isActive ? activeClassName : "border-gray-300 text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div className="mb-4 sm:mb-6 space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs sm:text-sm font-semibold text-gray-500 w-16">Chapter</span>
        <Link href={hrefFor()} scroll={false} className={chip(!selectedChapter)}>
          All
        </Link>
        {chapters.map((chapter) => {
          const isActive = chapter.number === selectedChapter?.number;
          return (
            <Link
              key={chapter.number}
              // Clicking the selected chapter again clears the filter
              href={isActive ? hrefFor() : hrefFor(chapter.number)}
              scroll={false}
              className={chip(isActive)}
            >
              {chapter.number}. {chapter.title}
            </Link>
          );
        })}
      </div>

      {selectedChapter && selectedChapter.sections.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs sm:text-sm font-semibold text-gray-500 w-16">Section</span>
          <Link href={hrefFor(selectedChapter.number)} scroll={false} className={chip(!sectionNumber)}>
            All
          </Link>
          {selectedChapter.sections.map((section) => {
            const isActive = section.number === sectionNumber;
            return (
              <Link
                key={section.number}
                // Clicking the selected section again goes back to the whole chapter
                href={isActive ? hrefFor(selectedChapter.number) : hrefFor(selectedChapter.number, section.number)}
                scroll={false}
                className={chip(isActive)}
              >
                {selectedChapter.number}.{section.number} {section.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
