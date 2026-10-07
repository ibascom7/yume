import { buildLinkPreviews, definitionPreviews, exercisePreviews, theoremPreviews } from "@/app/components/linkPreviews";
import { processLatexLinks } from "./components/latexLinkHelper";
import { theorems } from "./theorems/data";
import { definitions } from "./definitions/data";
import { exercises } from "./exercises/data";

// Statements shown when hovering a [[theorem N]] / [[definition N]] / [[exercise N]] link in this subject
export const linkPreviews = buildLinkPreviews(
  processLatexLinks,
  theoremPreviews("/notes/topology/theorems", theorems),
  definitionPreviews("/notes/topology/definitions", definitions),
  exercisePreviews("/notes/topology/exercises", exercises)
);
