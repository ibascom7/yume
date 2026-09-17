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
      path: "/notes/real-analysis/definitions",
      prefix: "Definition"
    },
    theorem: {
      path: "/notes/real-analysis/theorems",
      prefix: "Theorem"
    },
    exercise: {
      path: "/notes/real-analysis/exercises",
      prefix: "Exercise"
    }
  };

  const config = linkConfig[type];
  const href = `${config.path}#${type}-${number}`;
  const defaultText = `${config.prefix} ${number}`;

  return (
    <Link
      href={href}
      className="text-purple-600 hover:text-purple-800 underline font-medium"
    >
      {children || defaultText}
    </Link>
  );
}
