"use client";

import { useState } from "react";
import { Axes, BLUE, Check, Chips, DragPoint, M, ACCENT, Plot, ballPoints, fmt, makeScale, pNorm, type P2 } from "@/app/components/widgets/plot2d";

export const METRICS = [
  { id: "1", label: "Taxicab d₁", p: 1, tex: "d_1" },
  { id: "2", label: "Euclidean d₂", p: 2, tex: "d_2" },
  { id: "inf", label: "Max d∞", p: Infinity, tex: "d_\\infty" },
] as const;

const s = makeScale(3);
const dist = (a: P2, b: P2, p: number) => pNorm([a[0] - b[0], a[1] - b[1]], p);

export default function OpenBallWidget() {
  const [metric, setMetric] = useState<(typeof METRICS)[number]["id"]>("2");
  const [x, setX] = useState<P2>([-0.5, 0]);
  const [y, setY] = useState<P2>([0.5, 0.8]);
  const [r, setR] = useState(2);
  const { p, tex } = METRICS.find((m) => m.id === metric)!;
  const d = dist(x, y, p);
  const inside = d < r;
  const gap = r - d;

  return (
    <div className="mt-2 space-y-3 text-sm" style={{ lineHeight: "normal" }}>
      <Chips options={[...METRICS]} value={metric} onChange={setMetric} />
      <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
        <Plot s={s} label="An open ball B(x, r) and, around a point y inside it, the ball B(y, r − d(x, y))">
          <Axes s={s} />
          <polygon points={ballPoints(s, x, r, p)} fill={ACCENT} fillOpacity={0.12} stroke={ACCENT} strokeWidth={2} strokeDasharray="6 4" />
          {inside && <polygon points={ballPoints(s, y, gap, p)} fill={BLUE} fillOpacity={0.18} stroke={BLUE} strokeWidth={1.5} strokeDasharray="4 3" />}
          <DragPoint s={s} p={x} onChange={setX} color={ACCENT} label="x" />
          <DragPoint s={s} p={y} onChange={setY} color={BLUE} label="y" />
        </Plot>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <M>r =</M>
            <input type="range" min={0.5} max={2.5} step={0.1} value={r} onChange={(e) => setR(Number(e.target.value))} className="accent-[var(--accent)]" />
            <span className="w-8">{fmt(r)}</span>
          </label>
          <p className="text-gray-600">Drag x and y. The dashed outlines are open: boundary points aren&apos;t in the balls.</p>
          <div><M>{`${tex}(x, y) = ${fmt(d, 3)}`}</M></div>
          {inside ? (
            <>
              <Check ok>
                <M>{`y \\in B(x, r)`}</M>, so take <M>{`s = r - ${tex}(x, y) = ${fmt(gap, 3)} > 0`}</M>.
              </Check>
              <Check ok>
                <M>{`B(y, s) \\subseteq B(x, r)`}</M>: any <M>z</M> with <M>{`${tex}(y, z) < s`}</M> has <M>{`${tex}(x, z) \\leq ${tex}(x, y) + ${tex}(y, z) < r`}</M> by the triangle inequality.
              </Check>
              <p className="text-gray-600">Move y toward the edge and watch s shrink, but never to 0.</p>
            </>
          ) : (
            <Check ok={false}>
              <M>{`y \\notin B(x, r)`}</M>, since <M>{`${tex}(x, y) \\geq r`}</M>. Drag y back inside.
            </Check>
          )}
        </div>
      </div>
    </div>
  );
}
