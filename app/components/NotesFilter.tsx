"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { Chapter, Homework } from "./notesFilter";

interface NotesFilterProps {
  chapters: Chapter[];
  // Leave empty on tabs that can't be filtered by homework
  homeworks: Homework[];
  // Tailwind classes for a selected chip, in the subject's accent color
  activeClassName: string;
}

export default function NotesFilter({ chapters, homeworks, activeClassName }: NotesFilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (chapters.length === 0 && homeworks.length === 0) return null;

  const chapterNumber = Number(searchParams.get("chapter")) || null;
  const sectionNumber = Number(searchParams.get("section")) || null;
  const homeworkNumber = Number(searchParams.get("homework")) || null;
  const selectedChapter = chapters.find((c) => c.number === chapterNumber);

  // Link to this tab with some params changed (null clears one), keeping the rest of the selection
  const hrefWith = (updates: Record<string, number | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(updates)) {
      if (value) params.set(key, String(value));
      else params.delete(key);
    }
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  };

  const chip = (isActive: boolean) =>
    `px-3 py-1 rounded-full border text-xs sm:text-sm transition-colors ${
      isActive ? activeClassName : "border-gray-300 text-gray-700 hover:bg-gray-100"
    }`;
  const rowLabel = "text-xs sm:text-sm font-semibold text-gray-500 w-20";

  return (
    <div className="mb-4 sm:mb-6 space-y-2">
      {chapters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className={rowLabel}>Chapter</span>
          <Link href={hrefWith({ chapter: null, section: null })} scroll={false} className={chip(!selectedChapter)}>
            All
          </Link>
          {chapters.map((chapter) => {
            const isActive = chapter.number === selectedChapter?.number;
            return (
              <Link
                key={chapter.number}
                // Clicking the selected chapter again clears it
                href={hrefWith({ chapter: isActive ? null : chapter.number, section: null })}
                scroll={false}
                className={chip(isActive)}
              >
                {chapter.number}. {chapter.title}
              </Link>
            );
          })}
        </div>
      )}

      {selectedChapter && selectedChapter.sections.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className={rowLabel}>Section</span>
          <Link href={hrefWith({ section: null })} scroll={false} className={chip(!sectionNumber)}>
            All
          </Link>
          {selectedChapter.sections.map((section) => {
            const isActive = section.number === sectionNumber;
            return (
              <Link
                key={section.number}
                // Clicking the selected section again goes back to the whole chapter
                href={hrefWith({ section: isActive ? null : section.number })}
                scroll={false}
                className={chip(isActive)}
              >
                {selectedChapter.number}.{section.number}. {section.title}
              </Link>
            );
          })}
        </div>
      )}

      {homeworks.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className={rowLabel}>Homework</span>
          <Link href={hrefWith({ homework: null })} scroll={false} className={chip(!homeworkNumber)}>
            All
          </Link>
          {homeworks.map((homework) => {
            const isActive = homework.number === homeworkNumber;
            return (
              <Link
                key={homework.number}
                // Clicking the selected homework again clears it
                href={hrefWith({ homework: isActive ? null : homework.number })}
                scroll={false}
                className={chip(isActive)}
              >
                HW {homework.number}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
