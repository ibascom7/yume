"use client";

import { useState } from "react";
import { ACCENT, BLUE, Check, Chips, DARK, GREY, M, fmt, makeScale, type P2 } from "@/app/components/widgets/plot2d";

// A sequence (x_k) in ℝ² with a candidate limit a; the proof's n is 2 here
const K = 60;
const n = 2;
const a: P2 = [1, 0.5];

type SeqId = "spiral" | "lopsided" | "slow" | "circle";
const SEQUENCES: { id: SeqId; label: string; tex: string; f: (k: number) => P2; converges: boolean }[] = [
  {
    id: "spiral", label: "Spiral", converges: true,
    tex: "\\mathbf{x}_k = \\mathbf{a} + 2(0.9)^k(\\cos 0.6k, \\sin 0.6k)",
    f: (k) => [a[0] + 2 * 0.9 ** k * Math.cos(0.6 * k), a[1] + 2 * 0.9 ** k * Math.sin(0.6 * k)],
  },
  {
    id: "lopsided", label: "Fast in x, slow in y", converges: true,
    tex: "\\mathbf{x}_k = \\mathbf{a} + (2(-0.6)^k, \\ 1.8(0.93)^k)",
    f: (k) => [a[0] + 2 * (-0.6) ** k, a[1] + 1.8 * 0.93 ** k],
  },
  {
    id: "slow", label: "Like 1/k", converges: true,
    tex: "\\mathbf{x}_k = \\mathbf{a} + \\left(\\tfrac{(-1)^k 1.5}{k}, \\tfrac{1.5}{\\sqrt{k}}\\right)",
    f: (k) => [a[0] + (1.5 * (-1) ** k) / k, a[1] + 1.5 / Math.sqrt(k)],
  },
  {
    id: "circle", label: "Doesn't converge", converges: false,
    tex: "\\mathbf{x}_k = \\mathbf{a} + 0.8(\\cos 0.9k, \\sin 0.9k)",
    f: (k) => [a[0] + 0.8 * Math.cos(0.9 * k), a[1] + 0.8 * Math.sin(0.9 * k)],
  },
];

const ks = [...Array(K).keys()].map((i) => i + 1);
const dist = (p: P2) => Math.hypot(p[0] - a[0], p[1] - a[1]);

/** First N with every term from N on (up to K) passing `ok`; null if even the last term fails */
function firstStable(ok: (k: number) => boolean): number | null {
  if (!ok(K)) return null;
  let N = K;
  while (N > 1 && ok(N - 1)) N--;
  return N;
}

const plane = makeScale(2.2, 300);
const toPlane = (p: P2): [number, number] => [plane.sx(p[0] - a[0]), plane.sy(p[1] - a[1])];

/** Coordinate j of the sequence against k, with the band a_j ± w and the index N_j it settles by */
function CoordinatePlot({ j, xs, w, Nj, N }: { j: number; xs: P2[]; w: number; Nj: number | null; N: number | null }) {
  const [W, H, pad] = [300, 120, 22];
  const range = 2.2;
  const sx = (k: number) => pad + ((k - 1) / (K - 1)) * (W - pad - 6);
  const sy = (v: number) => H / 2 - ((v - a[j]) / range) * (H / 2 - 8);
  const inBand = (v: number) => Math.abs(v - a[j]) < w;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-[300px] rounded-lg border border-gray-200 bg-gray-50" role="img" aria-label={`Coordinate ${j + 1} of x_k against k`}>
      <rect x={pad} y={sy(a[j] + w)} width={W - pad - 6} height={sy(a[j] - w) - sy(a[j] + w)} fill={BLUE} fillOpacity={0.12} />
      <line x1={pad} y1={sy(a[j])} x2={W - 6} y2={sy(a[j])} stroke={BLUE} strokeDasharray="4 3" />
      <text x={4} y={sy(a[j]) + 4} fontSize={11} fill={BLUE} fontStyle="italic">a{j === 0 ? "₁" : "₂"}</text>
      {N !== null && <line x1={sx(N)} y1={4} x2={sx(N)} y2={H - 4} stroke={ACCENT} strokeWidth={1.5} />}
      {Nj !== null && Nj !== N && <line x1={sx(Nj)} y1={4} x2={sx(Nj)} y2={H - 4} stroke={BLUE} strokeDasharray="3 3" />}
      {Nj !== null && <text x={sx(Nj) + 3} y={13} fontSize={10} fill={BLUE}>N{j === 0 ? "₁" : "₂"}</text>}
      {xs.map((p, i) => (
        <circle key={i} cx={sx(i + 1)} cy={Math.max(2, Math.min(H - 2, sy(p[j])))} r={2.3} fill={inBand(p[j]) ? DARK : GREY} />
      ))}
      <text x={W - 8} y={H - 6} fontSize={10} fill={GREY} textAnchor="end">k →</text>
    </svg>
  );
}

export default function CoordinatewiseWidget() {
  const [dir, setDir] = useState<"back" | "forward">("back");
  const [seqId, setSeqId] = useState<SeqId>("lopsided");
  const [eps, setEps] = useState(0.6);
  const [tight, setTight] = useState(false);
  const seq = SEQUENCES.find((x) => x.id === seqId)!;
  const xs = ks.map(seq.f);

  // (⇐): each coordinate within w of a_j from N_j on, with w = ε/n as in the proof (or ε/√n, the tightest that works)
  // (⇒): the norm within ε from N on, which traps each coordinate within ε too
  const w = dir === "back" ? (tight ? eps / Math.sqrt(n) : eps / n) : eps;
  const Nj = [0, 1].map((j) => firstStable((k) => Math.abs(xs[k - 1][j] - a[j]) < w));
  const Nball = firstStable((k) => dist(xs[k - 1]) < eps);
  const N = dir === "back" ? (Nj.includes(null) ? null : Math.max(...(Nj as number[]))) : Nball;
  const tailMax = N === null ? null : Math.max(...xs.slice(N - 1).map(dist));
  const wTex = dir === "forward" ? "\\varepsilon" : tight ? "\\varepsilon/\\sqrt{n}" : "\\varepsilon/n";

  const ballPts = [...Array(120).keys()].map((i) => {
    const t = (2 * Math.PI * i) / 120;
    return toPlane([a[0] + eps * Math.cos(t), a[1] + eps * Math.sin(t)]).join(",");
  }).join(" ");
  const [bx0, by0] = toPlane([a[0] - w, a[1] + w]);
  const boxSide = 2 * w * plane.k;
  const path = xs.map((p) => toPlane(p).join(",")).join(" ");

  return (
    <div className="mt-2 space-y-3 text-sm" style={{ lineHeight: "normal" }}>
      <Chips
        options={[
          { id: "back", label: "(⇐) coordinates ⟹ vector" },
          { id: "forward", label: "(⇒) vector ⟹ coordinates" },
        ]}
        value={dir}
        onChange={setDir}
      />
      <Chips options={SEQUENCES} value={seqId} onChange={setSeqId} />
      <div><M>{seq.tex}</M>, <M>{`\\mathbf{a} = (${a[0]}, ${a[1]})`}</M>, <M>n = 2</M></div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <label className="flex items-center gap-2">
          <M>{"\\varepsilon ="}</M>
          <input type="range" min={0.1} max={1.5} step={0.05} value={eps} onChange={(e) => setEps(Number(e.target.value))} className="accent-[var(--accent)]" />
          <span className="w-10">{fmt(eps)}</span>
        </label>
        {dir === "back" && (
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={tight} onChange={(e) => setTight(e.target.checked)} className="accent-[var(--accent)]" />
            Use <M>{"\\varepsilon/\\sqrt{n}"}</M> instead of <M>{"\\varepsilon/n"}</M>
          </label>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:items-start">
        <figure className="space-y-1">
          <svg viewBox={`0 0 ${plane.size} ${plane.size}`} className="w-full max-w-[300px] rounded-lg border border-gray-200 bg-gray-50" role="img" aria-label="The sequence in the plane with the ε-ball and the coordinate box around a">
            <line x1={0} y1={plane.sy(0)} x2={plane.size} y2={plane.sy(0)} stroke="#e5e7eb" />
            <line x1={plane.sx(0)} y1={0} x2={plane.sx(0)} y2={plane.size} stroke="#e5e7eb" />
            <polygon points={ballPts} fill={ACCENT} fillOpacity={0.12} stroke={ACCENT} strokeWidth={2} strokeDasharray="6 4" />
            <rect x={bx0} y={by0} width={boxSide} height={boxSide} fill={BLUE} fillOpacity={0.1} stroke={BLUE} strokeWidth={1.5} strokeDasharray="4 3" />
            <polyline points={path} fill="none" stroke={GREY} strokeOpacity={0.4} />
            {xs.map((p, i) => {
              const [x, y] = toPlane(p);
              const tail = N !== null && i + 1 >= N;
              return <circle key={i} cx={x} cy={y} r={tail ? 3.2 : 2.5} fill={tail ? DARK : GREY} />;
            })}
            <circle cx={plane.sx(0)} cy={plane.sy(0)} r={3.5} fill={ACCENT} />
            <text x={plane.sx(0) + 6} y={plane.sy(0) - 6} fontSize={12} fill={ACCENT} fontWeight="bold">a</text>
          </svg>
          <figcaption className="text-xs text-gray-600">
            Dashed circle: the ε-ball. Blue square: each coordinate within <M>{wTex}</M>. Dark points: <M>{"k \\geq N"}</M>.
          </figcaption>
        </figure>
        <div className="space-y-2 flex-1">
          {[0, 1].map((j) => (
            <figure key={j} className="space-y-0.5">
              <figcaption className="text-xs text-gray-600">
                Coordinate {j + 1}: <M>{`x_{k,${j + 1}}`}</M> against <M>k</M>, with the band <M>{`|x_{k,${j + 1}} - a_${j + 1}| < ${wTex}`}</M>
              </figcaption>
              <CoordinatePlot j={j} xs={xs} w={w} Nj={Nj[j]} N={N} />
            </figure>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        {dir === "back" ? (
          <>
            <Check ok={!Nj.includes(null)}>
              {Nj.includes(null) ? (
                <>A coordinate never settles into its band (in the first {K} terms), so there&apos;s no <M>N</M> to take. Coordinate convergence is exactly what&apos;s missing.</>
              ) : (
                <><M>{`N_1 = ${Nj[0]}`}</M>, <M>{`N_2 = ${Nj[1]}`}</M>, so <M>{`N = \\max\\{N_1, N_2\\} = ${N}`}</M>. Each coordinate needs its own <M>{"N_j"}</M>; the max works for both.</>
              )}
            </Check>
            {N !== null && tailMax !== null && (
              <Check ok={tailMax < eps}>
                For <M>{"k \\geq N"}</M>: <M>{`\\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert < ${tight ? "\\sqrt{n}\\cdot\\tfrac{\\varepsilon}{\\sqrt{n}} = \\varepsilon" : "\\tfrac{\\varepsilon}{\\sqrt{n}} \\leq \\varepsilon"}`}</M>.
                The largest is <M>{fmt(tailMax, 3)}</M>{" < "}<M>{`\\varepsilon = ${fmt(eps)}`}</M>, so the tail sits in the ball.
              </Check>
            )}
            <p className="text-gray-600">
              {tight
                ? "With ε/√n the square's corners touch the circle exactly: the tightest band that still works."
                : "With ε/n the square sits well inside the circle. The proof's choice works with room to spare; ε/√n would too."}
            </p>
          </>
        ) : (
          <>
            <Check ok={Nball !== null}>
              {Nball === null ? (
                <>The terms never stay in the ε-ball (in the first {K}), so <M>{"\\mathbf{x}_k \\not\\to \\mathbf{a}"}</M> and there&apos;s nothing to pass to the coordinates.</>
              ) : (
                <>From <M>{`N = ${Nball}`}</M> on, <M>{"\\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert < \\varepsilon"}</M>.</>
              )}
            </Check>
            {Nball !== null && (
              <Check ok>
                So each <M>{"|x_{k,j} - a_j| \\leq \\lVert \\mathbf{x}_k - \\mathbf{a} \\rVert < \\varepsilon"}</M>: a point&apos;s shadow on an axis is never farther from <M>{"a_j"}</M> than the point is from <M>{"\\mathbf{a}"}</M>. The ball fits in the square, so <M>{`N_1 = ${Nj[0]}`}</M> and <M>{`N_2 = ${Nj[1]}`}</M> are both <M>{`\\leq N`}</M>.
              </Check>
            )}
          </>
        )}
        {!seq.converges && <p className="text-gray-600">This sequence circles <M>{"\\mathbf{a}"}</M> forever: shrink ε below 0.8 and nothing settles.</p>}
      </div>
    </div>
  );
}
