"use client";

import { useState } from "react";
import { Axes, BLUE, DARK, DragPoint, GREY, M, ACCENT, Plot, ballPoints, fmt, makeScale, pNorm, type P2 } from "@/app/components/widgets/plot2d";

const s = makeScale(1.6);
// Slider positions map to p = 1 … 8, with the last stop meaning p = ∞
const STOPS = [1, 1.25, 1.5, 2, 2.5, 3, 4, 6, 8, Infinity];
const pTex = (p: number) => (p === Infinity ? "\\infty" : fmt(p));

export default function PNormWidget() {
  const [stop, setStop] = useState(3);
  const [x, setX] = useState<P2>([0.6, 0.4]);
  const p = STOPS[stop];
  const [n1, np, nInf] = [pNorm(x, 1), pNorm(x, p), pNorm(x, Infinity)];
  const origin: P2 = [0, 0];

  return (
    <div className="mt-2 space-y-3 text-sm" style={{ lineHeight: "normal" }}>
      <label className="flex items-center gap-2">
        <M>p =</M>
        <input type="range" min={0} max={STOPS.length - 1} value={stop} onChange={(e) => setStop(Number(e.target.value))} className="accent-[var(--accent)] w-48" />
        <M>{pTex(p)}</M>
      </label>
      <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
        <Plot s={s} label="Unit balls of the p-norms on the plane; drag x">
          <Axes s={s} grid={false} />
          <polygon points={ballPoints(s, origin, 1, 1)} fill="none" stroke={GREY} strokeDasharray="4 3" />
          <polygon points={ballPoints(s, origin, 1, 2)} fill="none" stroke={GREY} strokeDasharray="4 3" />
          <polygon points={ballPoints(s, origin, 1, Infinity)} fill="none" stroke={GREY} strokeDasharray="4 3" />
          <polygon points={ballPoints(s, origin, 1, p)} fill={ACCENT} fillOpacity={0.15} stroke={ACCENT} strokeWidth={2.5} />
          {/* The p-ball through x, i.e. radius ‖x‖_p */}
          <polygon points={ballPoints(s, origin, np, p)} fill="none" stroke={BLUE} strokeWidth={1.5} />
          <DragPoint s={s} p={x} onChange={setX} label="x" />
        </Plot>
        <div className="space-y-2">
          <p className="text-gray-600">
            The filled shape is the unit ball <M>{`\\{y : \\|y\\|_{${pTex(p)}} < 1\\}`}</M>. Dashed grey are <M>p = 1, 2, \infty</M> for reference: a diamond, a circle, and a square.
            Blue is the <M>{pTex(p)}</M>-sphere through <M>x</M>.
          </p>
          <div className="space-y-1" style={{ color: DARK }}>
            <div><M>{`\\|x\\|_\\infty = ${fmt(nInf, 3)}`}</M></div>
            <div><M>{`\\|x\\|_{${pTex(p)}} = ${fmt(np, 3)}`}</M></div>
            <div><M>{`\\|x\\|_1 = ${fmt(n1, 3)}`}</M></div>
          </div>
          <p className="text-gray-600">
            Always <M>{"\\|x\\|_\\infty \\leq \\|x\\|_p \\leq \\|x\\|_1"}</M>, which is why the balls nest: the bigger the norm, the smaller its unit ball.
            Since these norms bound each other by constants, the metrics are equivalent and all give the same topology on <M>{"\\mathbb{R}^2"}</M>.
          </p>
        </div>
      </div>
    </div>
  );
}
