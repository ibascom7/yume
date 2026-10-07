import NotesBubbles, { type NotesClass } from "./NotesBubbles";
import { theorems as algebraTheorems } from "./algebra/theorems/data";
import { definitions as algebraDefinitions } from "./algebra/definitions/data";
import { theorems as intermediateTheorems } from "./intermediate-analysis/theorems/data";
import { definitions as intermediateDefinitions } from "./intermediate-analysis/definitions/data";
import { proofMethods as intermediateMethods } from "./intermediate-analysis/proof-methods/data";
import { techniques as intermediateTechniques } from "./intermediate-analysis/problem-solving-techniques/data";
import { theorems as realTheorems } from "./real-analysis/theorems/data";
import { definitions as realDefinitions } from "./real-analysis/definitions/data";
import { exercises as realExercises } from "./real-analysis/exercises/data";
import { theorems as topologyTheorems } from "./topology/theorems/data";
import { definitions as topologyDefinitions } from "./topology/definitions/data";
import { exercises as topologyExercises } from "./topology/exercises/data";
import { theorems as algTopTheorems } from "./algebraic-topology/theorems/data";
import { definitions as algTopDefinitions } from "./algebraic-topology/definitions/data";
import { exercises as algTopExercises } from "./algebraic-topology/exercises/data";
import { theorems as linearTheorems } from "./linear-algebra/theorems/data";
import { definitions as linearDefinitions } from "./linear-algebra/definitions/data";
import { exercises as linearExercises } from "./linear-algebra/exercises/data";

// Counts come straight from each class's data files, so bubbles grow as notes are added.
// This runs on the server, so only the numbers reach the browser.
const classes: NotesClass[] = [
  {
    name: "Abstract Algebra",
    href: "/notes/algebra/theorems",
    content: [
      { label: "theorems", count: algebraTheorems.length },
      { label: "definitions", count: algebraDefinitions.length },
      // Articles are written directly as page markup, so this one is counted by hand
      { label: "articles", count: 1 },
    ],
    color: "#ef4444", // red-500
  },
  {
    name: "Intermediate Analysis",
    href: "/notes/intermediate-analysis/theorems",
    content: [
      { label: "theorems", count: intermediateTheorems.length },
      { label: "definitions", count: intermediateDefinitions.length },
      { label: "methods", count: intermediateMethods.length },
      { label: "techniques", count: intermediateTechniques.length },
    ],
    color: "#3b82f6", // blue-500
  },
  {
    name: "Real Analysis",
    href: "/notes/real-analysis/theorems",
    content: [
      { label: "theorems", count: realTheorems.length },
      { label: "definitions", count: realDefinitions.length },
      { label: "exercises", count: realExercises.length },
    ],
    color: "#a855f7", // purple-500
  },
  {
    name: "Topology",
    href: "/notes/topology/theorems",
    content: [
      { label: "theorems", count: topologyTheorems.length },
      { label: "definitions", count: topologyDefinitions.length },
      { label: "exercises", count: topologyExercises.length },
    ],
    color: "#22c55e", // green-500
  },
  {
    name: "Algebraic Topology",
    href: "/notes/algebraic-topology/theorems",
    content: [
      { label: "theorems", count: algTopTheorems.length },
      { label: "definitions", count: algTopDefinitions.length },
      { label: "exercises", count: algTopExercises.length },
    ],
    color: "#14b8a6", // teal-500
  },
  {
    name: "Linear Algebra",
    href: "/notes/linear-algebra/theorems",
    content: [
      { label: "theorems", count: linearTheorems.length },
      { label: "definitions", count: linearDefinitions.length },
      { label: "exercises", count: linearExercises.length },
    ],
    color: "#f97316", // orange-500
  },
];

export default function NotesPage() {
  return <NotesBubbles classes={classes} />;
}
