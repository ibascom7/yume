import { buildLinkPreviews, definitionPreviews, exercisePreviews, theoremPreviews } from "@/app/components/linkPreviews";
import { processLatexLinks } from "./components/latexLinkHelper";
import { theorems } from "./theorems/data";
import { definitions } from "./definitions/data";
import { exercises } from "./exercises/data";
import { axioms, linearityConditions } from "./definitions/axioms";

// Statements shown when hovering a [[theorem N]] / [[definition N]] / [[exercise N]] / (VS N) / [[LT a]] link in this subject
export const linkPreviews = buildLinkPreviews(
  processLatexLinks,
  theoremPreviews("/notes/linear-algebra/theorems", theorems),
  definitionPreviews("/notes/linear-algebra/definitions", definitions),
  exercisePreviews("/notes/linear-algebra/exercises", exercises),
  axioms.map((a) => [
    `/notes/linear-algebra/definitions#vs-${a.number}`,
    { heading: `(VS ${a.number}). ${a.name}`, math: a.statement },
  ]),
  linearityConditions.map((c) => [
    `/notes/linear-algebra/definitions#lt-${c.label}`,
    { heading: `Linear Transformation (${c.label}). ${c.name}`, math: c.statement },
  ])
);
