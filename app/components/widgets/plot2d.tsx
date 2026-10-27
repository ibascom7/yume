"use client";

// Shared pieces for the interactive 2D note widgets: a square SVG plot of [-range, range]²,
// axes, arrows, draggable points, and unit-ball outlines for the p-metrics.

import { useMemo, type ReactNode } from "react";
import katex from "katex";

/** Inline KaTeX, for math inside widget labels and status lines */
export function M({ children }: { children: string }) {
  const html = useMemo(() => katex.renderToString(children, { throwOnError: false }), [children]);
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export type P2 = [number, number];

// The subject's accent color, set by its layout (globals.css), so widgets match the page they're on
export const ACCENT = "var(--accent)";
export const DARK = "#1f2937";
export const GREY = "#9ca3af";
export const GREEN = "#16a34a";
export const RED = "#dc2626";
export const BLUE = "#2563eb";

export interface Scale {
  size: number;
  range: number;
  k: number; // pixels per unit
  sx: (x: number) => number;
  sy: (y: number) => number;
  pt: (p: P2) => string; // "sx,sy" for polygon points
}

export function makeScale(range: number, size = 300): Scale {
  const k = size / (2 * range);
  const sx = (x: number) => size / 2 + x * k;
  const sy = (y: number) => size / 2 - y * k;
  return { size, range, k, sx, sy, pt: ([x, y]) => `${sx(x)},${sy(y)}` };
}

export function fmt(x: number, digits = 2): string {
  const f = 10 ** digits;
  const r = Math.round(x * f) / f;
  return Object.is(r, -0) ? "0" : String(r);
}

export const add2 = (a: P2, b: P2): P2 => [a[0] + b[0], a[1] + b[1]];
export const scale2 = (a: P2, c: number): P2 => [a[0] * c, a[1] * c];
export const near2 = (a: P2, b: P2, eps = 1e-6) => Math.abs(a[0] - b[0]) < eps && Math.abs(a[1] - b[1]) < eps;

/** The SVG canvas: a square, light-grey card that keeps touch drags inside the widget */
export function Plot({ s, children, label }: { s: Scale; children: ReactNode; label: string }) {
  return (
    <svg
      viewBox={`0 0 ${s.size} ${s.size}`}
      className="w-full max-w-[300px] touch-none select-none rounded-lg border border-gray-200 bg-gray-50"
      role="img"
      aria-label={label}
    >
      {children}
    </svg>
  );
}

/** Integer grid lines plus the two axes */
export function Axes({ s, grid = true }: { s: Scale; grid?: boolean }) {
  const ticks: number[] = [];
  for (let i = Math.ceil(-s.range); i <= Math.floor(s.range); i++) if (i !== 0) ticks.push(i);
  return (
    <g>
      {grid &&
        ticks.map((t) => (
          <g key={t} stroke="#e5e7eb" strokeWidth={1}>
            <line x1={s.sx(t)} y1={0} x2={s.sx(t)} y2={s.size} />
            <line x1={0} y1={s.sy(t)} x2={s.size} y2={s.sy(t)} />
          </g>
        ))}
      <line x1={0} y1={s.sy(0)} x2={s.size} y2={s.sy(0)} stroke={GREY} />
      <line x1={s.sx(0)} y1={0} x2={s.sx(0)} y2={s.size} stroke={GREY} />
    </g>
  );
}

/** An arrow between two points in plot coordinates */
export function Arrow({ s, from = [0, 0], to, color, dashed, label, width = 2.5 }: { s: Scale; from?: P2; to: P2; color: string; dashed?: boolean; label?: string; width?: number }) {
  // Nothing to draw where a reader's formula is undefined (e.g. sqrt of a negative)
  if (![...from, ...to].every(Number.isFinite)) return null;
  const [x1, y1, x2, y2] = [s.sx(from[0]), s.sy(from[1]), s.sx(to[0]), s.sy(to[1])];
  const len = Math.hypot(x2 - x1, y2 - y1);
  if (len < 1) return null;
  const [ux, uy] = [(x2 - x1) / len, (y2 - y1) / len];
  const h = Math.min(8, len * 0.5);
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2 - ux * h * 0.6} y2={y2 - uy * h * 0.6} stroke={color} strokeWidth={width} strokeDasharray={dashed ? "5 4" : undefined} />
      <polygon points={`${x2},${y2} ${x2 - ux * h - uy * h * 0.5},${y2 - uy * h + ux * h * 0.5} ${x2 - ux * h + uy * h * 0.5},${y2 - uy * h - ux * h * 0.5}`} fill={color} />
      {label && (
        <text x={x2 + ux * 11} y={y2 + uy * 11 + 4} fontSize={12} fill={color} textAnchor="middle" fontStyle="italic">
          {label}
        </text>
      )}
    </g>
  );
}

/** A point the reader can drag; `constrain` maps a raw position onto an allowed one (e.g. onto a line) */
export function DragPoint({ s, p, onChange, color = DARK, label, constrain, r = 7 }: { s: Scale; p: P2; onChange: (p: P2) => void; color?: string; label?: string; constrain?: (p: P2) => P2; r?: number }) {
  const move = (e: React.PointerEvent<SVGCircleElement>) => {
    const svg = e.currentTarget.ownerSVGElement;
    const ctm = svg?.getScreenCTM();
    if (!svg || !ctm) return;
    const pt = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse());
    const clamp = (v: number) => Math.max(-s.range, Math.min(s.range, v));
    // Snap to tenths so readouts stay tidy
    const raw: P2 = [clamp((pt.x - s.size / 2) / s.k), clamp((s.size / 2 - pt.y) / s.k)];
    const snapped: P2 = [Math.round(raw[0] * 10) / 10, Math.round(raw[1] * 10) / 10];
    onChange(constrain ? constrain(snapped) : snapped);
  };
  return (
    <g>
      <circle
        cx={s.sx(p[0])}
        cy={s.sy(p[1])}
        r={r + 8}
        fill="transparent"
        className="cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          move(e);
        }}
        onPointerMove={(e) => e.currentTarget.hasPointerCapture(e.pointerId) && move(e)}
      />
      <circle cx={s.sx(p[0])} cy={s.sy(p[1])} r={r} fill={color} stroke="white" strokeWidth={2} pointerEvents="none" />
      {label && (
        <text x={s.sx(p[0]) + 10} y={s.sy(p[1]) - 10} fontSize={12} fill={color} fontStyle="italic" pointerEvents="none">
          {label}
        </text>
      )}
    </g>
  );
}

/** ‖v‖_p, with p = Infinity for the max norm */
export function pNorm([x, y]: P2, p: number): number {
  if (p === Infinity) return Math.max(Math.abs(x), Math.abs(y));
  return (Math.abs(x) ** p + Math.abs(y) ** p) ** (1 / p);
}

/** Polygon points tracing the p-ball of radius r about c */
export function ballPoints(s: Scale, c: P2, r: number, p: number, samples = 160): string {
  const pts: string[] = [];
  for (let i = 0; i < samples; i++) {
    const t = (2 * Math.PI * i) / samples;
    const u: P2 = [Math.cos(t), Math.sin(t)];
    const n = pNorm(u, p);
    pts.push(s.pt([c[0] + (u[0] / n) * r, c[1] + (u[1] / n) * r]));
  }
  return pts.join(" ");
}

/** A labeled pill-button row for picking between presets */
export function Chips<T extends string>({ options, value, onChange }: { options: { id: T; label: string }[]; value: T; onChange: (id: T) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.id}
          onClick={() => onChange(o.id)}
          className={`px-3 py-1 text-xs sm:text-sm rounded-full border transition-colors cursor-pointer ${
            o.id === value ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-gray-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/** A ✓ / ✗ status line */
export function Check({ ok, children }: { ok: boolean; children: ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-sm">
      <span className={`font-bold ${ok ? "text-green-600" : "text-red-600"}`}>{ok ? "✓" : "✗"}</span>
      <span>{children}</span>
    </div>
  );
}
