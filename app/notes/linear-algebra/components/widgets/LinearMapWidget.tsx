"use client";

import { useState } from "react";
import TrustedBlockMath from "@/app/components/TrustedBlockMath";
import { Arrow, Axes, BLUE, Chips, DARK, DragPoint, ACCENT, Plot, makeScale, type P2 } from "@/app/components/widgets/plot2d";
import { SpanPicture, col, fmt, independentSubset, type Vec } from "./SpanWidget";

// Domain dimension then codomain dimension, so "23" is T: ℝ² → ℝ³ (a 3×2 matrix)
type Shape = "22" | "33" | "23" | "32";
type Dim = 2 | 3;
const SHAPES: { id: Shape; label: string; n: Dim; m: Dim }[] = [
  { id: "22", label: "T: ℝ² → ℝ²", n: 2, m: 2 },
  { id: "33", label: "T: ℝ³ → ℝ³", n: 3, m: 3 },
  { id: "23", label: "T: ℝ² → ℝ³", n: 2, m: 3 },
  { id: "32", label: "T: ℝ³ → ℝ²", n: 3, m: 2 },
];

// Each A is m×n: one row per codomain coordinate, one column per T(eⱼ)
const PRESETS: Record<Shape, { label: string; A: number[][] }[]> = {
  "22": [
    { label: "Rotation", A: [[0, -1], [1, 0]] },
    { label: "Shear", A: [[1, 1], [0, 1]] },
    { label: "Projection", A: [[1, 0], [0, 0]] },
    { label: "Rank 1", A: [[1, 2], [2, 4]] },
    { label: "Zero map", A: [[0, 0], [0, 0]] },
  ],
  "33": [
    { label: "Invertible", A: [[1, 0, 1], [0, 2, 0], [1, 0, -1]] },
    { label: "Onto the xy-plane", A: [[1, 0, 0], [0, 1, 0], [0, 0, 0]] },
    { label: "Rank 2", A: [[1, 0, 1], [0, 1, 1], [1, 1, 2]] },
    { label: "Rank 1", A: [[1, 2, 3], [2, 4, 6], [1, 2, 3]] },
  ],
  "23": [
    { label: "Tilted plane", A: [[1, 0], [0, 1], [1, 1]] },
    { label: "Into the xy-plane", A: [[1, 0], [0, 1], [0, 0]] },
    { label: "Rank 1", A: [[1, 2], [1, 2], [1, 2]] },
  ],
  "32": [
    { label: "Drop z", A: [[1, 0, 0], [0, 1, 0]] },
    { label: "Rank 2", A: [[1, 0, 1], [0, 1, 1]] },
    { label: "Rank 1", A: [[1, 2, 3], [2, 4, 6]] },
  ],
};

/** A basis for the solutions of Ax = 0, read off the reduced row echelon form (one vector per free column) */
function nullBasis(A: number[][]): number[][] {
  const m = A.length;
  const n = A[0].length;
  const R = A.map((r) => [...r]);
  const pivots: number[] = [];
  let row = 0;
  for (let c = 0; c < n && row < m; c++) {
    let best = row;
    for (let r = row + 1; r < m; r++) if (Math.abs(R[r][c]) > Math.abs(R[best][c])) best = r;
    if (Math.abs(R[best][c]) < 1e-9) continue;
    [R[row], R[best]] = [R[best], R[row]];
    const p = R[row][c];
    R[row] = R[row].map((v) => v / p);
    for (let r = 0; r < m; r++) {
      if (r === row) continue;
      const f = R[r][c];
      R[r] = R[r].map((v, k) => v - f * R[row][k]);
    }
    pivots.push(c);
    row++;
  }
  return [...Array(n).keys()]
    .filter((c) => !pivots.includes(c))
    .map((free) => {
      const v = Array(n).fill(0);
      v[free] = 1;
      pivots.forEach((pc, r) => (v[pc] = -R[r][free]));
      // Clear small denominators so the basis reads like one you'd find by hand
      const k = [1, 2, 3, 4, 5, 6, 8, 10, 12].find((k) => v.every((x) => Math.abs(x * k - Math.round(x * k)) < 1e-9)) ?? 1;
      return v.map((x) => Math.round(x * k * 1e9) / 1e9 + 0);
    });
}

const pad3 = (v: number[]): Vec => [v[0] ?? 0, v[1] ?? 0, v[2] ?? 0];
const setTex = (vs: number[][]) => (vs.length ? `\\left\\{ ${vs.map(col).join(", ")} \\right\\}` : "\\varnothing");

function describe(A: number[][]) {
  const n = A[0].length;
  const cols = [...Array(n).keys()].map((j) => A.map((row) => row[j]));
  const { basis } = independentSubset(cols.map(pad3));
  const nul = nullBasis(A);
  const e = (j: number) => `T(e_{${j + 1}})`;
  const lines = [
    `A = \\begin{pmatrix} ${A.map((r) => r.map(fmt).join(" & ")).join(" \\\\ ")} \\end{pmatrix}\\text{, } T(x) = Ax`,
    `${cols.map((c, j) => `${e(j)} = ${col(c)}`).join(",\\ ")}`,
    `R(T) = \\operatorname{span}\\{${cols.map((_, j) => e(j)).join(", ")}\\} \\text{ by Theorem 2.2,}`,
    `\\text{with basis } ${basis.length ? `\\{${basis.map(e).join(", ")}\\}` : "\\varnothing"}\\text{, so } \\dim R(T) = ${basis.length}.`,
    nul.length
      ? `N(T) \\text{ has basis } ${setTex(nul)}\\text{, so } \\dim N(T) = ${nul.length}.`
      : `N(T) = \\{0\\}\\text{, so } \\dim N(T) = 0.`,
    `\\dim N(T) + \\dim R(T) = ${nul.length} + ${basis.length} = ${n} = \\dim \\mathbb{R}^{${n}}.`,
  ];
  return { latex: lines.join(" \\\\[0.4em] "), cols, basis, nul };
}

const s = makeScale(4, 240);
const mul = (A: number[][], x: number[]) => A.map((row) => row.reduce((acc, a, j) => acc + a * (x[j] ?? 0), 0));

function longLine(d: number[], color: string) {
  const k = (2 * s.range) / Math.hypot(d[0], d[1]);
  return <line x1={s.sx(-d[0] * k)} y1={s.sy(-d[1] * k)} x2={s.sx(d[0] * k)} y2={s.sy(d[1] * k)} stroke={color} strokeOpacity={0.35} strokeWidth={6} />;
}

/** The domain ℝⁿ with N(T); in ℝ² there's also a draggable v whose image shows in the codomain */
function DomainView({ n, nul, v, setV }: { n: Dim; nul: number[][]; v: P2; setV: (v: P2) => void }) {
  if (n === 3) {
    return (
      <figure className="space-y-1 w-full max-w-[260px]">
        <SpanPicture vs={nul.map(pad3)} basis={nul.map((_, k) => k)} ortho={independentSubset(nul.map(pad3)).ortho} labels={nul.map((_, k) => `n${k + 1}`)} />
        <figcaption className="text-xs text-gray-600">Domain ℝ³, with N(T) shaded. Drag to rotate.</figcaption>
      </figure>
    );
  }
  return (
    <figure className="space-y-1">
      <Plot s={s} label="Domain: the null space and a draggable vector v">
        <Axes s={s} />
        {nul.length === 1 && longLine(nul[0], BLUE)}
        {nul.length === 2 && <rect width={s.size} height={s.size} fill={BLUE} fillOpacity={0.12} />}
        <Arrow s={s} to={[1, 0]} color={DARK} label="e₁" />
        <Arrow s={s} to={[0, 1]} color={DARK} label="e₂" />
        <Arrow s={s} to={v} color={ACCENT} dashed />
        <DragPoint s={s} p={v} onChange={setV} color={ACCENT} label="v" />
      </Plot>
      <figcaption className="text-xs text-gray-600">Domain ℝ², with N(T) in blue. Drag v.</figcaption>
    </figure>
  );
}

/** The codomain ℝᵐ with R(T) and the images T(eⱼ); T(v) too when the domain is ℝ² */
function CodomainView({ A, n, m, cols, basis, v }: { A: number[][]; n: Dim; m: Dim; cols: number[][]; basis: number[]; v: P2 }) {
  const Tv = n === 2 ? mul(A, v) : null;
  const names = cols.map((_, j) => `T(e${j + 1})`);
  if (m === 3) {
    const vs = [...cols, ...(Tv ? [Tv] : [])].map(pad3);
    return (
      <figure className="space-y-1 w-full max-w-[260px]">
        <SpanPicture vs={vs} basis={basis} ortho={independentSubset(cols.map(pad3)).ortho} labels={[...names, "T(v)"]} />
        <figcaption className="text-xs text-gray-600">Codomain ℝ³: R(T) = span of the T(eⱼ){Tv ? ", with T(v) dashed" : ""}.</figcaption>
      </figure>
    );
  }
  const R = s.range;
  const grid: number[] = [];
  for (let t = -R; t <= R; t++) grid.push(t);
  const T = (p: P2) => mul(A, p) as P2;
  return (
    <figure className="space-y-1">
      <Plot s={s} label="Codomain: the range and the images of the standard basis">
        <Axes s={s} grid={n !== 2} />
        {/* The image of the domain's grid, when the domain is the plane too */}
        {n === 2 &&
          grid.map((t) => {
            const [a, b, c, d] = [T([t, -R]), T([t, R]), T([-R, t]), T([R, t])];
            return (
              <g key={t} stroke="#d1d5db">
                <line x1={s.sx(a[0])} y1={s.sy(a[1])} x2={s.sx(b[0])} y2={s.sy(b[1])} />
                <line x1={s.sx(c[0])} y1={s.sy(c[1])} x2={s.sx(d[0])} y2={s.sy(d[1])} />
              </g>
            );
          })}
        {basis.length === 2 && <rect width={s.size} height={s.size} fill={ACCENT} fillOpacity={0.1} />}
        {basis.length === 1 && longLine(cols[basis[0]], ACCENT)}
        {basis.length === 0 && <circle cx={s.sx(0)} cy={s.sy(0)} r={5} fill={ACCENT} />}
        {cols.map((c, j) => (
          <Arrow key={j} s={s} to={c as P2} color={DARK} label={`T(e${"₁₂₃"[j]})`} />
        ))}
        {Tv && <Arrow s={s} to={Tv as P2} color={ACCENT} label="T(v)" />}
      </Plot>
      <figcaption className="text-xs text-gray-600">Codomain ℝ², with R(T) shaded.</figcaption>
    </figure>
  );
}

export default function LinearMapWidget() {
  const [shape, setShape] = useState<Shape>("22");
  const [entries, setEntries] = useState<string[][]>(PRESETS["22"][3].A.map((r) => r.map(String)));
  const [v, setV] = useState<P2>([1, 1]);
  const { n, m } = SHAPES.find((x) => x.id === shape)!;
  const parsed = entries.map((r) => r.map((x) => (x.trim() === "" ? NaN : Number(x))));
  const valid = parsed.every((r) => r.every(Number.isFinite));
  const result = valid ? describe(parsed) : null;

  const load = (A: number[][]) => setEntries(A.map((r) => r.map(String)));
  const reshape = (id: Shape) => {
    setShape(id);
    load(PRESETS[id][0].A);
  };

  return (
    <div className="mt-2 space-y-3 text-sm" style={{ lineHeight: "normal" }}>
      <Chips options={SHAPES} value={shape} onChange={reshape} />
      <div className="flex flex-wrap gap-2">
        {PRESETS[shape].map((p) => (
          <button key={p.label} onClick={() => load(p.A)} className="px-3 py-1 text-xs sm:text-sm rounded-full border border-gray-300 hover:border-[var(--accent)] hover:text-[var(--accent)] cursor-pointer">
            {p.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="italic">A =</span>
        <div className="grid gap-1 border-x-2 border-gray-700 rounded px-1 py-1" style={{ gridTemplateColumns: `repeat(${n}, 3rem)` }}>
          {entries.flatMap((row, i) =>
            row.map((x, j) => (
              <input
                key={`${i}-${j}`}
                value={x}
                inputMode="decimal"
                onChange={(e) => setEntries((rows) => rows.map((r, a) => (a === i ? r.map((y, b) => (b === j ? e.target.value : y)) : r)))}
                aria-label={`Entry (${i + 1}, ${j + 1})`}
                className={`px-1 py-1 border rounded text-center ${Number.isFinite(parsed[i][j]) ? "border-gray-300" : "border-red-400 bg-red-50"}`}
              />
            ))
          )}
        </div>
        <span className="text-gray-500 text-xs">
          {m}×{n}
        </span>
      </div>
      {result ? (
        <>
          <div className="flex flex-wrap gap-3">
            <DomainView n={n} nul={result.nul} v={v} setV={setV} />
            <CodomainView A={parsed} n={n} m={m} cols={result.cols} basis={result.basis} v={v} />
          </div>
          <div className="overflow-x-auto" style={{ lineHeight: "2" }}>
            <TrustedBlockMath math={result.latex} />
          </div>
        </>
      ) : (
        <p className="text-red-600">Enter a number in every entry.</p>
      )}
    </div>
  );
}
