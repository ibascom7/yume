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
      path: "/notes/linear-algebra/definitions",
      prefix: "Definition"
    },
    theorem: {
      path: "/notes/linear-algebra/theorems",
      prefix: "Theorem"
    },
    exercise: {
      path: "/notes/linear-algebra/exercises",
      prefix: "Exercise"
    }
  };

  const config = linkConfig[type];
  const href = `${config.path}#${type}-${number}`;
  const defaultText = `${config.prefix} ${number}`;

  return (
    <Link
      href={href}
      className="text-orange-600 hover:text-orange-800 underline font-medium"
    >
      {children || defaultText}
    </Link>
  );
}
