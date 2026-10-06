"use client";

import { useMemo } from "react";
import katex from "katex";

interface TrustedBlockMathProps {
  math: string;
}

export default function TrustedBlockMath({ math }: TrustedBlockMathProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: true,
        throwOnError: false,
        trust: true,
      });
    } catch (error) {
      console.error("KaTeX rendering error:", error);
      return math;
    }
  }, [math]);

  return <div className="katex-display" dangerouslySetInnerHTML={{ __html: html }} />;
}
