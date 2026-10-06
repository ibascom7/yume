export interface Section {
  number: number;
  title: string;
}

export interface Chapter {
  number: number;
  title: string;
  sections: Section[];
}

/** Where an item lives in the textbook. Untagged items only show when no chapter is selected. */
export interface ChapterRef {
  chapter?: number;
  section?: number;
}

/** The `?chapter=&section=` query params a notes page is filtered by */
export interface ChapterFilterParams {
  chapter?: string;
  section?: string;
}

/** Keep the items in the selected chapter (and section, if one is selected); keep everything when nothing is selected */
export function filterByChapter<T extends ChapterRef>(items: T[], { chapter, section }: ChapterFilterParams): T[] {
  if (!chapter) return items;
  return items.filter(
    (item) => item.chapter === Number(chapter) && (!section || item.section === Number(section))
  );
}

/** Human-readable name of the current selection, e.g. "Chapter 1" or "Section 1.2", or null when nothing is selected */
export function chapterFilterLabel({ chapter, section }: ChapterFilterParams): string | null {
  if (!chapter) return null;
  return section ? `Section ${chapter}.${section}` : `Chapter ${chapter}`;
}
