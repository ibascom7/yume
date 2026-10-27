"use client";

import { useState } from "react";
import { parseExpr } from "@/app/components/widgets/expr";
import { Arrow, Axes, Check, Chips, DARK, DragPoint, GREY, M, ACCENT, Plot, BLUE, add2, fmt, makeScale, near2, scale2, type P2 } from "@/app/components/widgets/plot2d";

type MapId = "rotate" | "project" | "shear" | "fold" | "shift" | "square" | "custom";

const MAPS: { id: MapId; label: string; tex: string; f: (p: P2) => P2 }[] = [
  { id: "rotate", label: "Rotation", tex: "T(x, y) = (-y, x)", f: ([x, y]) => [-y, x] },
  { id: "project", label: "Projection", tex: "T(x, y) = (x, 0)", f: ([x]) => [x, 0] },
  { id: "shear", label: "Shear", tex: "T(x, y) = (x + y, y)", f: ([x, y]) => [x + y, y] },
  { id: "fold", label: "Fold", tex: "T(x, y) = (x, |y|)", f: ([x, y]) => [x, Math.abs(y)] },
  { id: "shift", label: "Shift", tex: "T(x, y) = (x + 1, y + 1)", f: ([x, y]) => [x + 1, y + 1] },
  { id: "square", label: "Squaring", tex: "T(x, y) = (x^2, y)", f: ([x, y]) => [x * x, y] },
  // Built from the reader's formulas below
  { id: "custom", label: "Your own", tex: "", f: (p) => p },
];

const s = makeScale(4);
const pt = (p: P2) => (p.every(Number.isFinite) ? `(${fmt(p[0])}, ${fmt(p[1])})` : "\\text{undefined}");

export default function LinearityWidget() {
  const [mapId, setMapId] = useState<MapId>("fold");
  const [test, setTest] = useState<"add" | "scale">("add");
  const [u, setU] = useState<P2>([1, 0.5]);
  const [v, setV] = useState<P2>([-0.5, 1]);
  const [c, setC] = useState(2);
  const [formula, setFormula] = useState(["x + 2y", "|x| - y"]);
  const parts = formula.map((text) => parseExpr(text, ["x", "y"]));
  const preset = MAPS.find((m) => m.id === mapId)!;
  const T =
    mapId !== "custom" ? preset
    : { ...preset, f: ([x, y]: P2): P2 => [parts[0]?.({ x, y }) ?? NaN, parts[1]?.({ x, y }) ?? NaN] };

  const sumThenMap = T.f(add2(u, v));
  const mapThenSum = add2(T.f(u), T.f(v));
  const scaleThenMap = T.f(scale2(v, c));
  const mapThenScale = scale2(T.f(v), c);
  const zero = T.f([0, 0]);

  return (
    <div className="mt-2 space-y-3" style={{ lineHeight: "normal" }}>
      <Chips options={MAPS} value={mapId} onChange={setMapId} />
      {mapId === "custom" ? (
        <div className="flex flex-wrap items-center gap-1.5 text-sm">
          <M>T(x, y) = (</M>
          {formula.map((text, k) => (
            <span key={k} className="flex items-center gap-1.5">
              <input
                value={text}
                onChange={(e) => setFormula((f) => f.map((t, j) => (j === k ? e.target.value : t)))}
                aria-label={k === 0 ? "First component of T" : "Second component of T"}
                className={`w-28 px-2 py-1 border rounded font-mono ${parts[k] ? "border-gray-300" : "border-red-400 bg-red-50"}`}
              />
              {k === 0 && <M>,</M>}
            </span>
          ))}
          <M>)</M>
          <p className="w-full text-gray-600">Use x and y with + - * / ^, |…| or abs(…), sqrt, sin, cos, exp, ln. For example 2x - y, x^2, sin(y).</p>
        </div>
      ) : (
        <div className="text-sm">
          <M>{T.tex}</M>
        </div>
      )}
      <Chips
        options={[
          { id: "add", label: "Test (a): T(u + v)" },
          { id: "scale", label: "Test (b): T(cv)" },
        ]}
        value={test}
        onChange={setTest}
      />
      <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
        <Plot s={s} label="Input vectors and their images under T; drag the dark points">
          <Axes s={s} />
          {test === "add" ? (
            <>
              <Arrow s={s} to={mapThenSum} color={ACCENT} width={5} label="T(u)+T(v)" />
              <Arrow s={s} to={sumThenMap} color={BLUE} dashed label="T(u+v)" />
              <Arrow s={s} to={T.f(u)} color={GREY} width={1.5} label="T(u)" />
              <Arrow s={s} to={T.f(v)} color={GREY} width={1.5} label="T(v)" />
              <DragPoint s={s} p={u} onChange={setU} label="u" />
              <DragPoint s={s} p={v} onChange={setV} label="v" />
            </>
          ) : (
            <>
              <Arrow s={s} to={mapThenScale} color={ACCENT} width={5} label="cT(v)" />
              <Arrow s={s} to={scaleThenMap} color={BLUE} dashed label="T(cv)" />
              <Arrow s={s} to={T.f(v)} color={GREY} width={1.5} label="T(v)" />
              <DragPoint s={s} p={v} onChange={setV} label="v" />
            </>
          )}
        </Plot>
        <div className="space-y-2 text-sm">
          <p className="text-gray-600">
            Drag the dark points. The thick colored arrow and the dashed blue arrow land in the same place exactly when the condition holds.
          </p>
          {test === "scale" && (
            <label className="flex items-center gap-2">
              <M>c =</M>
              <input type="range" min={-2} max={2} step={0.5} value={c} onChange={(e) => setC(Number(e.target.value))} className="accent-[var(--accent)]" />
              <span className="w-8">{fmt(c)}</span>
            </label>
          )}
          {test === "add" ? (
            <Check ok={near2(sumThenMap, mapThenSum)}>
              <M>{`T(u + v) = ${pt(sumThenMap)}`}</M>, <M>{`T(u) + T(v) = ${pt(mapThenSum)}`}</M>
            </Check>
          ) : (
            <Check ok={near2(scaleThenMap, mapThenScale)}>
              <M>{`T(cv) = ${pt(scaleThenMap)}`}</M>, <M>{`cT(v) = ${pt(mapThenScale)}`}</M>
            </Check>
          )}
          <Check ok={near2(zero, [0, 0])}>
            <M>{`T(0) = ${pt(zero)}`}</M>
            {near2(zero, [0, 0]) ? ", which every linear map needs, but it isn't enough on its own." : ", so T can't be linear (Proposition 7 (i))."}
          </Check>
          <p className="text-gray-600" style={{ color: DARK }}>
            One example where they agree doesn't prove linearity; one where they don't disproves it.
          </p>
        </div>
      </div>
    </div>
  );
}
