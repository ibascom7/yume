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
      path: "/notes/topology/definitions",
      prefix: "Definition"
    },
    theorem: {
      path: "/notes/topology/theorems",
      prefix: "Theorem"
    },
    exercise: {
      path: "/notes/topology/exercises",
      prefix: "Exercise"
    }
  };

  const config = linkConfig[type];
  const href = `${config.path}#${type}-${number}`;
  const defaultText = `${config.prefix} ${number}`;

  return (
    <Link
      href={href}
      className="text-green-600 hover:text-green-800 underline font-medium"
    >
      {children || defaultText}
    </Link>
  );
}
