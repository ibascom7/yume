import { buildLinkPreviews, definitionPreviews, theoremPreviews } from "@/app/components/linkPreviews";
import { processLatexLinks } from "./components/latexLinkHelper";
import { theorems } from "./theorems/data";
import { definitions } from "./definitions/data";

// Statements shown when hovering a [[theorem N]] / [[definition N]] link in this subject
export const linkPreviews = buildLinkPreviews(
  processLatexLinks,
  theoremPreviews("/notes/intermediate-analysis/theorems", theorems),
  definitionPreviews("/notes/intermediate-analysis/definitions", definitions)
);
