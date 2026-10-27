"use client";

import { useRef, useState } from "react";
import TrustedBlockMath from "@/app/components/TrustedBlockMath";

type Vec = [number, number, number];

const MAX_VECTORS = 6;
const ORANGE = "#ea580c";

const PRESETS: { label: string; vectors: number[][] }[] = [
  { label: "xy-plane", vectors: [[1, 0, 0], [0, 1, 0]] },
  { label: "A line", vectors: [[1, 2, 1]] },
  { label: "Dependent set", vectors: [[1, 0, 1], [0, 1, 1], [1, 1, 2]] },
  { label: "All of ℝ³", vectors: [[1, 0, 0], [0, 1, 0], [1, 1, 1]] },
  { label: "∅", vectors: [] },
];

const dot = (a: Vec, b: Vec) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const scale = (a: Vec, c: number): Vec => [a[0] * c, a[1] * c, a[2] * c];
const sub = (a: Vec, b: Vec): Vec => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a: Vec, b: Vec): Vec => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const norm = (a: Vec) => Math.sqrt(dot(a, a));
const cross = (a: Vec, b: Vec): Vec => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];

// Keeps each vector of S that isn't in the span of the ones kept before it (Gram–Schmidt),
// so `basis` is a basis for span(S) chosen from S itself and `ortho` is an orthonormal basis for it
function independentSubset(vs: Vec[]) {
  const basis: number[] = [];
  const ortho: Vec[] = [];
  vs.forEach((v, i) => {
    let r = v;
    for (const q of ortho) r = sub(r, scale(q, dot(r, q)));
    const n = norm(r);
    if (n > 1e-9 * Math.max(1, norm(v))) {
      basis.push(i);
      ortho.push(scale(r, 1 / n));
    }
  });
  return { basis, ortho };
}

function fmt(x: number): string {
  const r = Math.round(x * 1000) / 1000;
  return Object.is(r, -0) ? "0" : String(r);
}

const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));

// A normal to the plane spanned by u and w, scaled to small integers when the inputs are integers
function planeNormal(u: Vec, w: Vec): Vec {
  let n = cross(u, w);
  if (n.every(Number.isInteger)) {
    const g = n.reduce((acc, c) => gcd(acc, c), 0);
    n = scale(n, 1 / g);
  } else {
    n = scale(n, 1 / norm(n));
  }
  const lead = n.find((c) => Math.abs(c) > 1e-9) ?? 1;
  return lead < 0 ? scale(n, -1) : n;
}

function planeEquation(n: Vec): string {
  const terms = (["x", "y", "z"] as const)
    .map((name, i) => [n[i], name] as const)
    .filter(([c]) => Math.abs(c) > 1e-9)
    .map(([c, name], i) => {
      const sign = c < 0 ? "-" : i > 0 ? "+" : "";
      const mag = Math.abs(c);
      const coeff = Math.abs(mag - 1) < 1e-9 ? "" : fmt(mag);
      return `${sign} ${coeff}${name}`;
    });
  return `${terms.join(" ")} = 0`;
}

const col = (v: Vec) => `\\begin{pmatrix} ${v.map(fmt).join(" \\\\ ")} \\end{pmatrix}`;
const name = (i: number) => `v_{${i + 1}}`;
const setOf = (items: string[]) => (items.length ? `\\left\\{ ${items.join(", ")} \\right\\}` : "\\varnothing");

function describe(vs: Vec[]) {
  const { basis, ortho } = independentSubset(vs);
  const lines: string[] = [`S = ${setOf(vs.map(col))}`];

  if (vs.length === 0) {
    lines.push(`\\operatorname{span}(\\varnothing) = \\{0\\} \\text{ by convention: just the origin.}`);
  } else if (basis.length === 0) {
    lines.push(`\\operatorname{span}(S) = \\{0\\} \\text{: just the origin.}`);
  } else if (basis.length === 1) {
    lines.push(`\\operatorname{span}(S) = \\left\\{ t${col(vs[basis[0]])} : t \\in \\mathbb{R} \\right\\}\\text{,}`);
    lines.push(`\\text{a line through the origin.}`);
  } else if (basis.length === 2) {
    const [u, w] = [vs[basis[0]], vs[basis[1]]];
    lines.push(`\\operatorname{span}(S) = \\left\\{ a${col(u)} + b${col(w)} : a, b \\in \\mathbb{R} \\right\\}\\text{,}`);
    lines.push(`\\text{the plane } ${planeEquation(planeNormal(u, w))} \\text{ through the origin.}`);
  } else {
    lines.push(`\\operatorname{span}(S) = \\mathbb{R}^3\\text{.}`);
  }

  if (vs.length > 0) {
    lines.push(`\\text{Basis from } S\\text{: } ${setOf(basis.map(name))}\\text{, so } \\dim \\operatorname{span}(S) = ${basis.length}.`);
  }
  // Each skipped vector is a linear combination of the kept vectors before it
  vs.forEach((_, i) => {
    if (basis.includes(i)) return;
    const before = basis.filter((j) => j < i);
    lines.push(
      before.length === 0
        ? `${name(i)} = 0 \\text{, so it adds nothing to the span.}`
        : `${name(i)} \\in \\operatorname{span}${setOf(before.map(name))} \\text{, so it adds nothing to the span.}`
    );
  });

  return { latex: lines.join(" \\\\[0.5em] "), basis, ortho };
}

// Orthographic camera: spin about the z-axis by `yaw`, then tilt down by `pitch`
function project([x, y, z]: Vec, yaw: number, pitch: number) {
  const x1 = x * Math.cos(yaw) - y * Math.sin(yaw);
  const y1 = x * Math.sin(yaw) + y * Math.cos(yaw);
  return { right: x1, up: z * Math.cos(pitch) + y1 * Math.sin(pitch) };
}

function Arrow({ from, to, color, dashed, label }: { from: [number, number]; to: [number, number]; color: string; dashed?: boolean; label?: string }) {
  const [dx, dy] = [to[0] - from[0], to[1] - from[1]];
  const len = Math.hypot(dx, dy);
  const [ux, uy] = len > 0 ? [dx / len, dy / len] : [0, 0];
  const head = 8;
  return (
    <g>
      <line x1={from[0]} y1={from[1]} x2={to[0] - ux * head * 0.6} y2={to[1] - uy * head * 0.6} stroke={color} strokeWidth={2.5} strokeDasharray={dashed ? "5 4" : undefined} />
      {len > head && (
        <polygon
          points={`${to[0]},${to[1]} ${to[0] - ux * head - uy * head * 0.5},${to[1] - uy * head + ux * head * 0.5} ${to[0] - ux * head + uy * head * 0.5},${to[1] - uy * head - ux * head * 0.5}`}
          fill={color}
        />
      )}
      {label && (
        <text x={to[0] + ux * 10} y={to[1] + uy * 10 + 4} fontSize={12} fill={color} textAnchor="middle" fontStyle="italic">
          {label}
        </text>
      )}
    </g>
  );
}

function SpanPicture({ vs, basis, ortho }: { vs: Vec[]; basis: number[]; ortho: Vec[] }) {
  const [view, setView] = useState({ yaw: -2.2, pitch: 0.45 });
  const drag = useRef<{ x: number; y: number } | null>(null);

  const size = 300;
  const c = size / 2;
  const reach = Math.max(1, ...vs.map(norm)) * 1.4;
  // Half-widths of the plane patch and cube, kept just past the longest vector
  const half = reach * 0.85;
  const cubeHalf = reach * 0.7;
  // Scale to the farthest point drawn (a plane corner sits at half·√2), so the picture fits at every angle
  const farthest = Math.max(reach, half * Math.SQRT2, cubeHalf * Math.sqrt(3));
  const k = (c - 14) / farthest;
  const toScreen = (p: Vec): [number, number] => {
    const { right, up } = project(p, view.yaw, view.pitch);
    return [c + right * k, c - up * k];
  };
  const origin = toScreen([0, 0, 0]);
  const pts = (ps: Vec[]) => ps.map((p) => toScreen(p).join(",")).join(" ");

  let spanShape: React.ReactNode = <circle cx={origin[0]} cy={origin[1]} r={5} fill={ORANGE} />;
  if (ortho.length === 1) {
    const [a, b] = [toScreen(scale(ortho[0], reach)), toScreen(scale(ortho[0], -reach))];
    spanShape = <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={ORANGE} strokeOpacity={0.35} strokeWidth={6} strokeLinecap="round" />;
  } else if (ortho.length === 2) {
    const [e1, e2] = [scale(ortho[0], half), scale(ortho[1], half)];
    const corners = [add(e1, e2), sub(e1, e2), scale(add(e1, e2), -1), sub(e2, e1)];
    // Grid lines across the plane help it read as a flat sheet when rotated
    const grid = [-0.5, 0, 0.5].flatMap((t) => [
      [add(scale(e1, t), e2), sub(scale(e1, t), e2)],
      [add(scale(e2, t), e1), sub(scale(e2, t), e1)],
    ]);
    spanShape = (
      <g>
        <polygon points={pts(corners)} fill={ORANGE} fillOpacity={0.15} stroke={ORANGE} strokeOpacity={0.5} />
        {grid.map(([p, q], i) => {
          const [a, b] = [toScreen(p), toScreen(q)];
          return <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={ORANGE} strokeOpacity={0.25} />;
        })}
      </g>
    );
  } else if (ortho.length === 3) {
    const r = cubeHalf;
    const corner = (i: number): Vec => [i & 1 ? r : -r, i & 2 ? r : -r, i & 4 ? r : -r];
    const edges = [0, 1, 2, 3, 4, 5, 6, 7].flatMap((i) => [1, 2, 4].filter((bit) => !(i & bit)).map((bit) => [i, i | bit]));
    spanShape = (
      <g>
        {edges.map(([i, j]) => {
          const [a, b] = [toScreen(corner(i)), toScreen(corner(j))];
          return <line key={`${i}-${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={ORANGE} strokeOpacity={0.4} strokeDasharray="4 4" />;
        })}
        <text x={size - 8} y={size - 10} fontSize={12} fill={ORANGE} textAnchor="end">all of ℝ³</text>
      </g>
    );
  }

  const axes: [Vec, string][] = [[[1, 0, 0], "x"], [[0, 1, 0], "y"], [[0, 0, 1], "z"]];

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full max-w-[300px] touch-none select-none cursor-grab active:cursor-grabbing rounded-lg border border-gray-200 bg-gray-50"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        drag.current = { x: e.clientX, y: e.clientY };
      }}
      onPointerMove={(e) => {
        if (!drag.current) return;
        const [dx, dy] = [e.clientX - drag.current.x, e.clientY - drag.current.y];
        drag.current = { x: e.clientX, y: e.clientY };
        setView((v) => ({ yaw: v.yaw + dx * 0.01, pitch: Math.max(-1.5, Math.min(1.5, v.pitch - dy * 0.01)) }));
      }}
      onPointerUp={() => (drag.current = null)}
      onPointerCancel={() => (drag.current = null)}
      role="img"
      aria-label="3D picture of span(S); drag to rotate"
    >
      {axes.map(([dir, label]) => {
        const [a, b] = [toScreen(scale(dir, -reach)), toScreen(scale(dir, reach))];
        return (
          <g key={label}>
            <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#9ca3af" strokeWidth={1} />
            <text x={b[0]} y={b[1] - 4} fontSize={12} fill="#6b7280" textAnchor="middle" fontStyle="italic">{label}</text>
          </g>
        );
      })}
      {spanShape}
      {vs.map((v, i) =>
        norm(v) > 0 ? (
          <Arrow key={i} from={origin} to={toScreen(v)} color={basis.includes(i) ? "#1f2937" : "#9ca3af"} dashed={!basis.includes(i)} label={`v${i + 1}`} />
        ) : null
      )}
    </svg>
  );
}

export default function SpanWidget() {
  const [entries, setEntries] = useState<string[][]>(PRESETS[0].vectors.map((v) => v.map(String)));

  const parsed = entries.map((row) => row.map((s) => (s.trim() === "" ? NaN : Number(s))));
  const valid = parsed.every((row) => row.every(Number.isFinite));
  const vs = parsed as Vec[];
  const result = valid ? describe(vs) : null;

  const setEntry = (i: number, j: number, value: string) =>
    setEntries((rows) => rows.map((row, r) => (r === i ? row.map((s, c) => (c === j ? value : s)) : row)));

  return (
    <div className="mt-2 space-y-4" style={{ lineHeight: "normal" }}>
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            onClick={() => setEntries(p.vectors.map((v) => v.map(String)))}
            className="px-3 py-1 text-xs sm:text-sm rounded-full border border-gray-300 hover:border-orange-600 hover:text-orange-600 transition-colors cursor-pointer"
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
        <div className="space-y-2">
          {entries.map((row, i) => (
            <div key={i} className="flex items-center gap-1.5 text-sm">
              <span className="italic w-7">
                v<sub>{i + 1}</sub>
              </span>
              <span>=</span>
              <span>(</span>
              {row.map((s, j) => (
                <input
                  key={j}
                  value={s}
                  onChange={(e) => setEntry(i, j, e.target.value)}
                  inputMode="decimal"
                  aria-label={`v${i + 1} component ${j + 1}`}
                  className={`w-12 px-1.5 py-1 border rounded text-center ${Number.isFinite(parsed[i][j]) ? "border-gray-300" : "border-red-400 bg-red-50"}`}
                />
              ))}
              <span>)</span>
              <button
                onClick={() => setEntries((rows) => rows.filter((_, r) => r !== i))}
                className="ml-1 text-gray-400 hover:text-red-600 cursor-pointer"
                aria-label={`Remove v${i + 1}`}
              >
                ×
              </button>
            </div>
          ))}
          {entries.length < MAX_VECTORS && (
            <button
              onClick={() => setEntries((rows) => [...rows, ["0", "0", "0"]])}
              className="text-sm text-orange-600 hover:text-orange-800 cursor-pointer"
            >
              + Add vector
            </button>
          )}
        </div>
        {valid && result && <SpanPicture vs={vs} basis={result.basis} ortho={result.ortho} />}
      </div>

      {valid && result ? (
        <div className="overflow-x-auto" style={{ lineHeight: "2" }}>
          <TrustedBlockMath math={result.latex} />
        </div>
      ) : (
        <p className="text-sm text-red-600">Enter a number in every entry.</p>
      )}
    </div>
  );
}
