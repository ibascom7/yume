"use client";

import { useState } from "react";
import { Axes, BLUE, Check, Chips, M, ACCENT, Plot, ballPoints, fmt, makeScale, type P2 } from "@/app/components/widgets/plot2d";

type MetricId = "taxi" | "euclid" | "max" | "discrete";
// p for the metrics that come from p-norms; the discrete metric is 1 between any two distinct points
const METRICS: { id: MetricId; label: string; p: number | null }[] = [
  { id: "taxi", label: "Taxicab", p: 1 },
  { id: "euclid", label: "Euclidean", p: 2 },
  { id: "max", label: "Max", p: Infinity },
  { id: "discrete", label: "Discrete", p: null },
];
const metric = (id: MetricId) => METRICS.find((m) => m.id === id)!;

const s = makeScale(3);
const origin: P2 = [0, 0];

/** Does B_{d2}(x, δ) ⊆ B_{d1}(x, ε)? For p-norms on ℝ², ‖u‖_a ≤ 2^{max(0, 1/a − 1/b)}‖u‖_b, with equality possible */
function fits(d1: MetricId, d2: MetricId, eps: number, delta: number): boolean {
  const [p1, p2] = [metric(d1).p, metric(d2).p];
  const inner = p2 === null ? (delta <= 1 ? "point" : "plane") : "ball";
  const outer = p1 === null ? (eps <= 1 ? "point" : "plane") : "ball";
  if (outer === "plane" || inner === "point") return true;
  if (outer === "point" || inner === "plane") return false;
  const C = 2 ** Math.max(0, 1 / p1! - 1 / p2!);
  return delta * C <= eps + 1e-9;
}

/** The largest δ that fits, or null when none does (or "any" when every δ fits) */
function bestDelta(d1: MetricId, d2: MetricId, eps: number): number | "any" | null {
  const [p1, p2] = [metric(d1).p, metric(d2).p];
  if (p1 === null && eps > 1) return "any";
  if (p2 === null) return fits(d1, d2, eps, 1) ? 1 : null;
  if (p1 === null) return null;
  return eps / 2 ** Math.max(0, 1 / p1 - 1 / p2);
}

function Ball({ id, r, color }: { id: MetricId; r: number; color: string }) {
  const p = metric(id).p;
  if (p === null) {
    return r > 1 ? (
      <rect width={s.size} height={s.size} fill={color} fillOpacity={0.12} />
    ) : (
      <circle cx={s.sx(0)} cy={s.sy(0)} r={5} fill={color} />
    );
  }
  return <polygon points={ballPoints(s, origin, r, p)} fill={color} fillOpacity={0.15} stroke={color} strokeWidth={2} strokeDasharray="6 4" />;
}

export default function CompareMetricsWidget() {
  const [d1, setD1] = useState<MetricId>("taxi");
  const [d2, setD2] = useState<MetricId>("max");
  const [eps, setEps] = useState(2);
  const [delta, setDelta] = useState(1.5);
  const [revealed, setRevealed] = useState(false);

  const ok = fits(d1, d2, eps, delta);
  const best = bestDelta(d1, d2, eps);
  const always = !(metric(d1).p === null && metric(d2).p !== null);
  const reset = () => setRevealed(false);

  return (
    <div className="mt-2 space-y-3 text-sm" style={{ lineHeight: "normal" }}>
      <div className="space-y-1">
        <div className="text-gray-700"><M>d_1</M> (outer ball):</div>
        <Chips options={METRICS} value={d1} onChange={(id) => { setD1(id); reset(); }} />
        <div className="text-gray-700 pt-1"><M>d_2</M> (inner ball, blue):</div>
        <Chips options={METRICS} value={d2} onChange={(id) => { setD2(id); reset(); }} />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
        <Plot s={s} label="The ball B_{d1}(x, ε) and the ball B_{d2}(x, δ) about the same point x">
          <Axes s={s} />
          <Ball id={d1} r={eps} color={ACCENT} />
          <Ball id={d2} r={delta} color={BLUE} />
        </Plot>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <M>{"\\varepsilon ="}</M>
            <input type="range" min={0.25} max={2.5} step={0.05} value={eps} onChange={(e) => { setEps(Number(e.target.value)); reset(); }} className="accent-[var(--accent)]" />
            <span className="w-10">{fmt(eps)}</span>
          </label>
          <label className="flex items-center gap-2">
            <M>{"\\delta ="}</M>
            <input type="range" min={0.05} max={2.5} step={0.05} value={delta} onChange={(e) => setDelta(Number(e.target.value))} className="accent-blue-600" />
            <span className="w-10">{fmt(delta)}</span>
          </label>
          <p className="text-gray-600">
            Find a <M>{"\\delta"}</M> with <M>{"B_{d_2}(x, \\delta) \\subseteq B_{d_1}(x, \\varepsilon)"}</M>. The ball is about <M>{"x = 0"}</M>, but these metrics look the same around every point.
          </p>
          <Check ok={ok}>
            <M>{`B_{d_2}(x, ${fmt(delta)}) ${ok ? "\\subseteq" : "\\not\\subseteq"} B_{d_1}(x, ${fmt(eps)})`}</M>
          </Check>
          {revealed ? (
            <div className="space-y-1">
              <p>
                {best === "any" ? <>Every <M>{"\\delta"}</M> works, since this <M>{"B_{d_1}"}</M> is the whole plane.</>
                  : best === null ? <>No <M>{"\\delta"}</M> works: <M>{"B_{d_1}(x, \\varepsilon) = \\{x\\}"}</M>, and every <M>{"d_2"}</M>-ball holds more than one point.</>
                  : <>The largest <M>{"\\delta"}</M> that works is <M>{fmt(best, 3)}</M>.</>}
              </p>
              <p className="font-medium">
                {always ? (
                  <>A <M>{"\\delta"}</M> exists for every <M>{"\\varepsilon"}</M> and <M>x</M>, so by Lemma 1.1.15, <M>{"\\tau_{d_1} \\subseteq \\tau_{d_2}"}</M>.</>
                ) : (
                  <>For <M>{"\\varepsilon \\leq 1"}</M> no <M>{"\\delta"}</M> exists, so by Lemma 1.1.15, <M>{"\\tau_{d_1} \\not\\subseteq \\tau_{d_2}"}</M>: <M>{"\\{x\\}"}</M> is open for the discrete metric but not for <M>{"d_2"}</M>.</>
                )}
              </p>
            </div>
          ) : (
            <button onClick={() => setRevealed(true)} className="text-[var(--accent)] hover:text-[var(--accent-dark)] cursor-pointer">
              Show the best δ and what it means
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
