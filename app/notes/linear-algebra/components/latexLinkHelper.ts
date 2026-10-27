/**
 * Converts simple link syntax in LaTeX to proper \href commands
 *
 * Syntax examples:
 * - [[definition 1]] -> Links to Definition 1
 * - [[theorem 5]] -> Links to Theorem 5
 * - [[exercise 2]] -> Links to Exercise 2
 *
 * You can also use custom text:
 * - [[definition 1|the limit definition]] -> "the limit definition" linking to Definition 1
 *
 * Vector space axioms are linked automatically, no brackets needed:
 * - (VS 3) -> "(VS 3)" linking to that row of the Vector Space definition
 *
 * Linearity conditions need brackets, since a bare "(a)" is ambiguous:
 * - [[LT a]] -> "(a)" linking to that row of the Linear Transformation definition
 */
export function processLatexLinks(latex: string): string {
  // Pattern matches [[type number]] or [[type number|custom text]]
  const pattern = /\[\[(definition|theorem|exercise)\s+(\d+)(?:\|(.*?))?\]\]/gi;

  const pathMap = {
    definition: "/notes/linear-algebra/definitions",
    theorem: "/notes/linear-algebra/theorems",
    exercise: "/notes/linear-algebra/exercises"
  };

  // Skips "}{\text{(VS N)" so the labels in Definition 1 (and already-linked axioms) stay plain
  const axiomPattern = /(?<!\}\{\\text\{)\(VS ?([1-8])\)/g;

  const linearityPattern = /\[\[LT ([ab])\]\]/g;

  return latex.replace(axiomPattern, (match, number) =>
    `\\underline{\\href{/notes/linear-algebra/definitions#vs-${number}}{\\text{(VS ${number})}}}`
  ).replace(linearityPattern, (match, label) =>
    `\\underline{\\href{/notes/linear-algebra/definitions#lt-${label}}{\\text{(${label})}}}`
  ).replace(pattern, (match, type, number, customText) => {
    const typeLower = type.toLowerCase() as keyof typeof pathMap;
    const path = pathMap[typeLower];
    const href = `${path}#${typeLower}-${number}`;

    // Capitalize first letter for display
    const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
    const displayText = customText || `${typeCapitalized} ${number}`;

    return `\\underline{\\href{${href}}{\\text{${displayText}}}}`;
  });
}
