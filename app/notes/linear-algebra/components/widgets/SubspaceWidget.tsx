"use client";

import { useState } from "react";
import { Arrow, Axes, Check, Chips, DragPoint, GREEN, M, ACCENT, Plot, RED, add2, fmt, makeScale, scale2, type P2 } from "@/app/components/widgets/plot2d";

type SetId = "line" | "offset" | "quadrant" | "union" | "intersection" | "circle";

interface Candidate {
  id: SetId;
  label: string;
  tex: string;
  has: (p: P2) => boolean;
  snap: (p: P2) => P2; // nearest point of W, so dragged points stay inside it
  start: [P2, P2];
  verdict: string;
}

const EPS = 1e-6;
const onLine = (d: P2, b: P2 = [0, 0]) => (p: P2): P2 => {
  const n = Math.hypot(d[0], d[1]);
  const t = ((p[0] - b[0]) * d[0] + (p[1] - b[1]) * d[1]) / (n * n);
  return [b[0] + t * d[0], b[1] + t * d[1]];
};

const SETS: Candidate[] = [
  {
    id: "line", label: "Line through 0", tex: "W = \\{(x, y) : y = 2x\\}",
    has: ([x, y]) => Math.abs(y - 2 * x) < EPS, snap: onLine([1, 2]), start: [[0.5, 1], [-1, -2]],
    verdict: "A subspace: it contains 0 and is closed under both operations.",
  },
  {
    id: "offset", label: "Line missing 0", tex: "W = \\{(x, y) : y = x + 1\\}",
    has: ([x, y]) => Math.abs(y - x - 1) < EPS, snap: onLine([1, 1], [0, 1]), start: [[0.5, 1.5], [-1, 0]],
    verdict: "Not a subspace: (i) fails, since 0 ∉ W.",
  },
  {
    id: "quadrant", label: "First quadrant", tex: "W = \\{(x, y) : x, y \\geq 0\\}",
    has: ([x, y]) => x > -EPS && y > -EPS, snap: ([x, y]) => [Math.max(0, x), Math.max(0, y)], start: [[1, 0.5], [0.5, 1.5]],
    verdict: "Not a subspace: (iii) fails, e.g. c = −1 sends x out of W.",
  },
  {
    id: "union", label: "Union of axes", tex: "W = \\{(x, y) : x = 0\\} \\cup \\{(x, y) : y = 0\\}",
    has: ([x, y]) => Math.abs(x) < EPS || Math.abs(y) < EPS, snap: ([x, y]) => (Math.abs(x) < Math.abs(y) ? [0, y] : [x, 0]), start: [[1.5, 0], [0, 1]],
    verdict: "Not a subspace: (ii) fails, e.g. (1, 0) + (0, 1) = (1, 1) ∉ W. Unions of subspaces needn't be subspaces.",
  },
  {
    id: "intersection", label: "Intersection of lines", tex: "W = \\{y = 2x\\} \\cap \\{y = -x\\} = \\{0\\}",
    has: ([x, y]) => Math.abs(x) < EPS && Math.abs(y) < EPS, snap: () => [0, 0], start: [[0, 0], [0, 0]],
    verdict: "A subspace (the zero subspace), as Theorem 1.4 promises for any intersection of subspaces.",
  },
  {
    id: "circle", label: "Circle", tex: "W = \\{(x, y) : x^2 + y^2 = 4\\}",
    has: ([x, y]) => Math.abs(Math.hypot(x, y) - 2) < 1e-3,
    snap: ([x, y]) => { const n = Math.hypot(x, y) || 1; return [(2 * x) / n, (2 * y) / n]; },
    start: [[2, 0], [0, 2]],
    verdict: "Not a subspace: all three conditions fail.",
  },
];

const s = makeScale(4);
const R = s.range;
const pt = (p: P2) => `(${fmt(p[0])}, ${fmt(p[1])})`;

function DrawSet({ id }: { id: SetId }) {
  const stroke = { stroke: ACCENT, strokeOpacity: 0.45, strokeWidth: 6, strokeLinecap: "round" as const };
  switch (id) {
    case "line":
      return <line x1={s.sx(-R / 2)} y1={s.sy(-R)} x2={s.sx(R / 2)} y2={s.sy(R)} {...stroke} />;
    case "offset":
      return <line x1={s.sx(-R)} y1={s.sy(-R + 1)} x2={s.sx(R - 1)} y2={s.sy(R)} {...stroke} />;
    case "quadrant":
      return <rect x={s.sx(0)} y={s.sy(R)} width={R * s.k} height={R * s.k} fill={ACCENT} fillOpacity={0.15} />;
    case "union":
      return (
        <g>
          <line x1={s.sx(-R)} y1={s.sy(0)} x2={s.sx(R)} y2={s.sy(0)} {...stroke} />
          <line x1={s.sx(0)} y1={s.sy(-R)} x2={s.sx(0)} y2={s.sy(R)} {...stroke} />
        </g>
      );
    case "intersection":
      return (
        <g>
          <line x1={s.sx(-R / 2)} y1={s.sy(-R)} x2={s.sx(R / 2)} y2={s.sy(R)} stroke={ACCENT} strokeOpacity={0.2} strokeWidth={3} />
          <line x1={s.sx(-R)} y1={s.sy(R)} x2={s.sx(R)} y2={s.sy(-R)} stroke={ACCENT} strokeOpacity={0.2} strokeWidth={3} />
          <circle cx={s.sx(0)} cy={s.sy(0)} r={6} fill={ACCENT} fillOpacity={0.6} />
        </g>
      );
    case "circle":
      return <circle cx={s.sx(0)} cy={s.sy(0)} r={2 * s.k} fill="none" {...stroke} />;
  }
}

export default function SubspaceWidget() {
  const [id, setId] = useState<SetId>("quadrant");
  const W = SETS.find((w) => w.id === id)!;
  const [x, setX] = useState<P2>(W.start[0]);
  const [y, setY] = useState<P2>(W.start[1]);
  const [c, setC] = useState(-1);
  const [revealed, setRevealed] = useState(false);

  const pick = (next: SetId) => {
    const w = SETS.find((v) => v.id === next)!;
    setId(next);
    setX(w.start[0]);
    setY(w.start[1]);
    setRevealed(false);
  };

  const sum = add2(x, y);
  const multiple = scale2(x, c);
  const color = (p: P2) => (W.has(p) ? GREEN : RED);

  return (
    <div className="mt-2 space-y-3" style={{ lineHeight: "normal" }}>
      <Chips options={SETS} value={id} onChange={pick} />
      <div className="text-sm">
        <M>{W.tex}</M>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
        <Plot s={s} label="The set W with draggable points x and y in it, and x + y and cx">
          <Axes s={s} />
          <DrawSet id={id} />
          <Arrow s={s} to={sum} color={color(sum)} dashed label="x+y" />
          <Arrow s={s} to={multiple} color={color(multiple)} dashed label="cx" />
          <DragPoint s={s} p={x} onChange={setX} constrain={W.snap} label="x" />
          <DragPoint s={s} p={y} onChange={setY} constrain={W.snap} label="y" />
        </Plot>
        <div className="space-y-2 text-sm">
          <p className="text-gray-600">Drag x and y around W (they stay inside it). Green means the result landed in W, red means it escaped.</p>
          <label className="flex items-center gap-2">
            <M>c =</M>
            <input type="range" min={-2} max={2} step={0.5} value={c} onChange={(e) => setC(Number(e.target.value))} className="accent-[var(--accent)]" />
            <span className="w-8">{fmt(c)}</span>
          </label>
          <Check ok={W.has([0, 0])}>
            (i) <M>{`0 ${W.has([0, 0]) ? "\\in" : "\\notin"} W`}</M>
          </Check>
          <Check ok={W.has(sum)}>
            (ii) <M>{`x + y = ${pt(sum)} ${W.has(sum) ? "\\in" : "\\notin"} W`}</M>
          </Check>
          <Check ok={W.has(multiple)}>
            (iii) <M>{`cx = ${pt(multiple)} ${W.has(multiple) ? "\\in" : "\\notin"} W`}</M>
          </Check>
          <div className="pt-1">
            {revealed ? (
              <p className="font-medium">{W.verdict}</p>
            ) : (
              <button onClick={() => setRevealed(true)} className="text-[var(--accent)] hover:text-[var(--accent-dark)] cursor-pointer">
                Decide for yourself, then reveal: is W a subspace?
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
