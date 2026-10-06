import type { ChapterRef, HomeworkRef } from "./notesFilter";

type LocationBadgesProps = ChapterRef & HomeworkRef;

/** Where a card comes from, e.g. "§1.2" and "HW 1", shown right after the card's title */
export default function LocationBadges({ chapter, section, homework }: LocationBadgesProps) {
  const badges: string[] = [];
  if (chapter) badges.push(section ? `§${chapter}.${section}` : `Ch. ${chapter}`);
  if (homework) badges.push(`HW ${homework}`);
  if (badges.length === 0) return null;

  return (
    <div className="flex gap-1">
      {badges.map((badge) => (
        <span
          key={badge}
          className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium whitespace-nowrap"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
