export interface Section {
  number: number;
  title: string;
}

export interface Chapter {
  number: number;
  title: string;
  sections: Section[];
}

export interface Homework {
  number: number;
}

/** Where an item lives in the textbook. Untagged items only show when no chapter is selected. */
export interface ChapterRef {
  chapter?: number;
  section?: number;
}

/** The homework an exercise was assigned in. Untagged exercises only show when no homework is selected. */
export interface HomeworkRef {
  homework?: number;
}

/** The `?chapter=&section=&homework=` query params a notes page is filtered by */
export interface NotesFilterParams {
  chapter?: string;
  section?: string;
  homework?: string;
}

/** Keep the items in the selected chapter (and section, if one is selected); keep everything when nothing is selected */
export function filterByChapter<T extends ChapterRef>(items: T[], { chapter, section }: NotesFilterParams): T[] {
  if (!chapter) return items;
  return items.filter(
    (item) => item.chapter === Number(chapter) && (!section || item.section === Number(section))
  );
}

/** Keep the items from the selected homework; keep everything when none is selected */
export function filterByHomework<T extends HomeworkRef>(items: T[], { homework }: NotesFilterParams): T[] {
  if (!homework) return items;
  return items.filter((item) => item.homework === Number(homework));
}

/** Human-readable name of the current selection, e.g. "Chapter 1", "HW 2", or "HW 2 in Section 1.2"; null when nothing is selected */
export function filterLabel({ chapter, section, homework }: NotesFilterParams): string | null {
  const place = chapter ? (section ? `Section ${chapter}.${section}` : `Chapter ${chapter}`) : null;
  const assignment = homework ? `HW ${homework}` : null;
  if (assignment && place) return `${assignment} in ${place}`;
  return assignment ?? place;
}
