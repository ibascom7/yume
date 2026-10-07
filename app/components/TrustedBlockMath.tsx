"use client";

import { useMemo } from "react";
import katex from "katex";

interface TrustedBlockMathProps {
  math: string;
}

// Cards use `\\` for line breaks, which KaTeX renders fine but warns about on every render
// (real LaTeX ignores it in display mode). Silence just that warning; keep the rest.
const strict = (errorCode: string) => (errorCode === "newLineInDisplayMode" ? "ignore" : "warn");

export default function TrustedBlockMath({ math }: TrustedBlockMathProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: true,
        throwOnError: false,
        trust: true,
        strict,
      });
    } catch (error) {
      console.error("KaTeX rendering error:", error);
      return math;
    }
  }, [math]);

  return <div className="katex-display" dangerouslySetInnerHTML={{ __html: html }} />;
}
