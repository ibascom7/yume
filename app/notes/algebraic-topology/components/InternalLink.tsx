"use client";

import Link from "next/link";

interface InternalLinkProps {
  type: "definition" | "theorem" | "exercise";
  number: number;
  children?: React.ReactNode;
}

export default function InternalLink({ type, number, children }: InternalLinkProps) {
  // Map type to path and default text
  const linkConfig = {
    definition: {
      path: "/notes/algebraic-topology/definitions",
      prefix: "Definition"
    },
    theorem: {
      path: "/notes/algebraic-topology/theorems",
      prefix: "Theorem"
    },
    exercise: {
      path: "/notes/algebraic-topology/exercises",
      prefix: "Exercise"
    }
  };

  const config = linkConfig[type];
  const href = `${config.path}#${type}-${number}`;
  const defaultText = `${config.prefix} ${number}`;

  return (
    <Link
      href={href}
      className="text-teal-600 hover:text-teal-800 underline font-medium"
    >
      {children || defaultText}
    </Link>
  );
}
