/** What a hover preview shows for one card: its heading and its statement */
export interface LinkPreview {
  heading: string;
  math: string;
}

/** Previews keyed by the exact href a `[[type number]]` link renders to, e.g. "/notes/real-analysis/definitions#definition-5" */
export type LinkPreviews = Record<string, LinkPreview>;

type Entries = [string, LinkPreview][];

export function theoremPreviews(
  path: string,
  theorems: { kind?: string; number: number; title: string; statement: string }[]
): Entries {
  return theorems.map((t) => [
    `${path}#theorem-${t.number}`,
    { heading: `${t.kind ?? "Theorem"} ${t.number}. ${t.title}`, math: t.statement },
  ]);
}

export function definitionPreviews(
  path: string,
  definitions: { number: number; term: string; definition: string }[]
): Entries {
  return definitions.map((d) => [
    `${path}#definition-${d.number}`,
    { heading: `Definition ${d.number}. ${d.term}`, math: d.definition },
  ]);
}

export function exercisePreviews(
  path: string,
  exercises: { number: number; title: string; problem: string }[]
): Entries {
  return exercises.map((e) => [
    `${path}#exercise-${e.number}`,
    { heading: `Exercise ${e.number}. ${e.title}`, math: e.problem },
  ]);
}

/** Combine entries into a lookup, running each statement through the subject's `[[...]]` link processor */
export function buildLinkPreviews(processLinks: (latex: string) => string, ...groups: Entries[]): LinkPreviews {
  return Object.fromEntries(
    groups.flat().map(([href, preview]) => [href, { ...preview, math: processLinks(preview.math) }])
  );
}
