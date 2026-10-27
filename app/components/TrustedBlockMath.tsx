"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import katex from "katex";

interface TrustedBlockMathProps {
  math: string;
}

// Cards use `\\` for line breaks, which KaTeX renders fine but warns about on every render
// (real LaTeX ignores it in display mode). Silence just that warning; keep the rest.
const strict = (errorCode: string) => (errorCode === "newLineInDisplayMode" ? "ignore" : "warn");

// Display math can't wrap, so on narrow screens a block wider than its column is shrunk to fit,
// down to this fraction of its size; anything still too wide scrolls sideways (globals.css)
const MIN_SCALE = 0.7;

export default function TrustedBlockMath({ math }: TrustedBlockMathProps) {
  const ref = useRef<HTMLDivElement>(null);
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

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    let lastWidth = -1;
    const fit = () => {
      // Only refit when the column width changes, not when our own scaling changes the height
      if (el.clientWidth === lastWidth) return;
      lastWidth = el.clientWidth;
      el.style.fontSize = "";
      // KaTeX's own .katex-display inside is the scroll container, so its scrollWidth is the math's full width
      const inner = el.querySelector<HTMLElement>(".katex-display") ?? el;
      const ratio = inner.clientWidth / inner.scrollWidth;
      el.style.fontSize = ratio < 1 ? `${Math.max(MIN_SCALE, ratio)}em` : "";
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(el);
    return () => observer.disconnect();
  }, [html]);

  return (
    <div
      ref={ref}
      className="katex-display"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
