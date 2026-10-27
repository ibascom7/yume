"use client";

import { useState } from "react";
import { Check, Chips, M } from "@/app/components/widgets/plot2d";

// Subsets of X = {a, b, c, d} are bitmasks 0–15 (bit k set means the k-th letter is in the set)
const LETTERS = ["a", "b", "c", "d"];
const X = 0b1111;
const ALL = [...Array(16).keys()];
const size = (m: number) => LETTERS.filter((_, k) => m & (1 << k)).length;
const name = (m: number) => (m === 0 ? "∅" : m === X ? "X" : `{${LETTERS.filter((_, k) => m & (1 << k)).join(",")}}`);
const tex = (m: number) => (m === 0 ? "\\varnothing" : m === X ? "X" : `\\{${LETTERS.filter((_, k) => m & (1 << k)).join(", ")}\\}`);
const texList = (ms: number[]) => (ms.length ? `\\{${ms.map(tex).join(", ")}\\}` : "\\varnothing");
// Grouped by size, so ∅ comes first and X last
const BY_SIZE = [0, 1, 2, 3, 4].map((k) => ALL.filter((m) => size(m) === k));
const toSet = (ms: number[]) => new Set(ms);

/** Smallest family containing `seed` that is closed under pairwise `op` */
function closeUnder(seed: Iterable<number>, op: (a: number, b: number) => number): Set<number> {
  const out = new Set(seed);
  let grew = true;
  while (grew) {
    grew = false;
    for (const a of [...out]) for (const b of [...out]) if (!out.has(op(a, b))) { out.add(op(a, b)); grew = true; }
  }
  return out;
}
const sorted = (s: Set<number>) => BY_SIZE.flat().filter((m) => s.has(m));

function axiomFailures(tau: Set<number>) {
  const list = [...tau];
  let union: [number, number] | null = null;
  let inter: [number, number] | null = null;
  for (const a of list) for (const b of list) {
    if (!union && !tau.has(a | b)) union = [a, b];
    if (!inter && !tau.has(a & b)) inter = [a, b];
  }
  return { hasEnds: tau.has(0) && tau.has(X), union, inter };
}

function SubsetPicker({ chosen, onToggle, label }: { chosen: Set<number>; onToggle: (m: number) => void; label: string }) {
  return (
    <div className="space-y-1" role="group" aria-label={label}>
      {BY_SIZE.map((row, k) => (
        <div key={k} className="flex flex-wrap gap-1.5">
          {row.map((m) => (
            <button
              key={m}
              onClick={() => onToggle(m)}
              aria-pressed={chosen.has(m)}
              className={`min-w-11 px-2 py-1 rounded border text-xs sm:text-sm font-mono cursor-pointer transition-colors ${
                chosen.has(m) ? "bg-[var(--accent)] border-[var(--accent)] text-white" : "border-gray-300 hover:border-[var(--accent)]"
              }`}
            >
              {name(m)}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

const TOPOLOGIES = [
  { label: "Discrete", sets: ALL },
  { label: "Indiscrete", sets: [0, X] },
  { label: "Nested", sets: [0, 0b0001, 0b0011, 0b0111, X] },
  { label: "Broken: unions", sets: [0, 0b0001, 0b0010, X] },
  { label: "Broken: intersections", sets: [0, 0b0011, 0b0110, 0b0111, X] },
];
const SUBBASES = [
  { label: "Covering chain", sets: [0b0011, 0b0110, 0b1100] },
  { label: "Doesn't cover X", sets: [0b0001, 0b0010] },
  { label: "Singletons", sets: [0b0001, 0b0010, 0b0100, 0b1000] },
];

type Mode = "axioms" | "subbasis" | "closure";

export default function FiniteTopologyWidget({ mode: initial = "axioms" }: { mode?: Mode }) {
  const [mode, setMode] = useState<Mode>(initial);
  const [tau, setTau] = useState(() => toSet(initial === "axioms" ? TOPOLOGIES[3].sets : TOPOLOGIES[2].sets));
  const [subbasis, setSubbasis] = useState(() => toSet(SUBBASES[0].sets));
  const [A, setA] = useState(0b0010);

  const toggle = (set: Set<number>, m: number) => {
    const next = new Set(set);
    if (next.has(m)) next.delete(m); else next.add(m);
    return next;
  };

  const { hasEnds, union, inter } = axiomFailures(tau);
  const isTopology = hasEnds && !union && !inter;

  // Subbasis: B = finite intersections of members of 𝒜; τ = unions of members of B, together with ∅
  const B = closeUnder(subbasis, (a, b) => a & b);
  const generated = closeUnder([0, ...B], (a, b) => a | b);
  const covers = [...subbasis].reduce((u, m) => u | m, 0) === X;

  // Interior: union of open sets inside A. Closure: intersection of closed sets containing A
  const openInside = sorted(tau).filter((U) => (U & ~A) === 0);
  const closedSets = sorted(tau).map((U) => X & ~U);
  const closedAround = BY_SIZE.flat().filter((C) => closedSets.includes(C) && (A & ~C) === 0);
  const interior = openInside.reduce((u, U) => u | U, 0);
  const closure = closedAround.reduce((c, C) => c & C, X);

  return (
    <div className="mt-2 space-y-3 text-sm" style={{ lineHeight: "normal" }}>
      <Chips
        options={[
          { id: "axioms", label: "Is τ a topology?" },
          { id: "subbasis", label: "Generate from a subbasis" },
          { id: "closure", label: "Interior & closure" },
        ]}
        value={mode}
        onChange={setMode}
      />
      <p className="text-gray-600">
        <M>{"X = \\{a, b, c, d\\}"}</M>.{" "}
        {mode === "axioms" && "Click subsets to put them in τ or take them out."}
        {mode === "subbasis" && <>Click subsets to put them in <M>{"\\mathcal{A}"}</M>.</>}
        {mode === "closure" && <>Click the points of <M>A</M>. The topology is the one from the first tab.</>}
      </p>

      {mode === "axioms" && (
        <>
          <div className="flex flex-wrap gap-2">
            {TOPOLOGIES.map((t) => (
              <button key={t.label} onClick={() => setTau(toSet(t.sets))} className="px-3 py-1 text-xs rounded-full border border-gray-300 hover:border-[var(--accent)] hover:text-[var(--accent)] cursor-pointer">
                {t.label}
              </button>
            ))}
          </div>
          <SubsetPicker chosen={tau} onToggle={(m) => setTau(toggle(tau, m))} label="Subsets in τ" />
          <div className="space-y-1">
            <Check ok={hasEnds}>(3) <M>{"\\varnothing, X \\in \\tau"}</M></Check>
            <Check ok={!union}>
              (1) Closed under unions
              {union && <>: <M>{`${tex(union[0])} \\cup ${tex(union[1])} = ${tex(union[0] | union[1])} \\notin \\tau`}</M></>}
            </Check>
            <Check ok={!inter}>
              (2) Closed under finite intersections
              {inter && <>: <M>{`${tex(inter[0])} \\cap ${tex(inter[1])} = ${tex(inter[0] & inter[1])} \\notin \\tau`}</M></>}
            </Check>
          </div>
          <p className="text-gray-600">
            On a finite set, checking pairs is enough: any union or finite intersection is built up two sets at a time.
          </p>
          {!isTopology && (
            <button onClick={() => setTau(closeUnder(closeUnder([0, X, ...tau], (a, b) => a | b), (a, b) => a & b))} className="text-[var(--accent)] hover:text-[var(--accent-dark)] cursor-pointer">
              Add the missing sets
            </button>
          )}
        </>
      )}

      {mode === "subbasis" && (
        <>
          <div className="flex flex-wrap gap-2">
            {SUBBASES.map((t) => (
              <button key={t.label} onClick={() => setSubbasis(toSet(t.sets))} className="px-3 py-1 text-xs rounded-full border border-gray-300 hover:border-[var(--accent)] hover:text-[var(--accent)] cursor-pointer">
                {t.label}
              </button>
            ))}
          </div>
          <SubsetPicker chosen={subbasis} onToggle={(m) => setSubbasis(toggle(subbasis, m))} label="Subsets in the subbasis" />
          <div className="space-y-2">
            <div><M>{`\\mathcal{A} = ${texList(sorted(subbasis))}`}</M></div>
            <div>Finite intersections: <M>{`\\mathcal{B} = ${texList(sorted(B))}`}</M></div>
            <div>Unions of those, with <M>{"\\varnothing"}</M>: <M>{`\\tau = ${texList(sorted(generated))}`}</M></div>
            <Check ok={covers}>
              {covers ? (
                <><M>{"\\mathcal{A}"}</M> covers <M>X</M>, so it is a subbasis for this <M>{"\\tau"}</M> (Prop 1.1.20).</>
              ) : (
                <><M>{"\\mathcal{A}"}</M> doesn&apos;t cover <M>X</M>, so <M>{"X \\notin \\tau"}</M> and this <M>{"\\tau"}</M> isn&apos;t a topology on <M>X</M>.</>
              )}
            </Check>
            {covers && (
              <button onClick={() => { setTau(generated); setMode("closure"); }} className="text-[var(--accent)] hover:text-[var(--accent-dark)] cursor-pointer">
                Use this τ for interior & closure
              </button>
            )}
          </div>
        </>
      )}

      {mode === "closure" &&
        (isTopology ? (
          <>
            <div><M>{`\\tau = ${texList(sorted(tau))}`}</M></div>
            <div className="flex gap-2">
              {LETTERS.map((l, k) => {
                const bit = 1 << k;
                const tone = interior & bit ? "bg-[var(--accent)] border-[var(--accent)] text-white" : closure & bit ? "bg-[var(--accent-light)] border-[var(--accent-mid)]" : "border-gray-300";
                return (
                  <button key={l} onClick={() => setA(A ^ bit)} aria-pressed={!!(A & bit)} className={`w-11 h-11 rounded-full border-2 font-mono cursor-pointer ${tone} ${A & bit ? "ring-2 ring-offset-2 ring-gray-800" : ""}`}>
                    {l}
                  </button>
                );
              })}
            </div>
            <p className="text-gray-600">Ringed: in A. Dark: in the interior. Light: in the closure but not the interior.</p>
            <div className="space-y-2">
              <div><M>{`A = ${tex(A)}`}</M></div>
              <div>Open sets inside <M>A</M>: <M>{texList(openInside)}</M>, so <M>{`A^\\circ = ${tex(interior)}`}</M></div>
              <div>Closed sets containing <M>A</M>: <M>{texList(closedAround)}</M>, so <M>{`\\overline{A} = ${tex(closure)}`}</M></div>
              <p className="text-gray-600">
                Always <M>{"A^\\circ \\subseteq A \\subseteq \\overline{A}"}</M>. Try the indiscrete topology, where most sets have empty interior and closure <M>X</M>.
              </p>
            </div>
          </>
        ) : (
          <Check ok={false}>
            The τ from the first tab isn&apos;t a topology yet. Fix it there, or generate one from a subbasis.
          </Check>
        ))}
    </div>
  );
}
