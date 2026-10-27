"use client";

import { useState } from "react";
import TrustedBlockMath from "@/app/components/TrustedBlockMath";
import { Check, M } from "@/app/components/widgets/plot2d";

// Exact rational arithmetic, so row reduction never picks up rounding errors
interface Frac { n: number; d: number }
const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));
function frac(n: number, d = 1): Frac {
  if (d < 0) [n, d] = [-n, -d];
  const g = gcd(n, d) || 1;
  return { n: n / g + 0, d: d / g };
}
const fAdd = (a: Frac, b: Frac) => frac(a.n * b.d + b.n * a.d, a.d * b.d);
const fMul = (a: Frac, b: Frac) => frac(a.n * b.n, a.d * b.d);
const fEq = (a: Frac, b: Frac) => a.n === b.n && a.d === b.d;
const isZero = (a: Frac) => a.n === 0;
const tex = (a: Frac) => (a.d === 1 ? String(a.n) : `${a.n < 0 ? "-" : ""}\\frac{${Math.abs(a.n)}}{${a.d}}`);
const plain = (a: Frac) => (a.d === 1 ? String(a.n) : `${a.n}/${a.d}`);

/** Parses "3", "-1/2", or "0.25" into a fraction; null if it isn't a number */
function parseFrac(text: string): Frac | null {
  const t = text.trim();
  const m = t.match(/^(-?\d+)\s*\/\s*(\d+)$/);
  if (m) return Number(m[2]) === 0 ? null : frac(Number(m[1]), Number(m[2]));
  if (!/^-?(\d+\.?\d*|\.\d+)$/.test(t)) return null;
  const places = (t.split(".")[1] ?? "").length;
  return frac(Math.round(Number(t) * 10 ** places), 10 ** places);
}

type Matrix = Frac[][];
type Op = { kind: "swap"; i: number; j: number } | { kind: "scale"; i: number; c: Frac } | { kind: "add"; i: number; j: number; c: Frac };

function apply(A: Matrix, op: Op): Matrix {
  const B = A.map((row) => [...row]);
  if (op.kind === "swap") [B[op.i], B[op.j]] = [B[op.j], B[op.i]];
  else if (op.kind === "scale") B[op.i] = B[op.i].map((a) => fMul(a, op.c));
  else B[op.i] = B[op.i].map((a, k) => fAdd(a, fMul(op.c, A[op.j][k])));
  return B;
}

function opTex(op: Op): string {
  const R = (i: number) => `R_{${i + 1}}`;
  if (op.kind === "swap") return `${R(op.i)} \\leftrightarrow ${R(op.j)}`;
  if (op.kind === "scale") return `${R(op.i)} \\to ${tex(op.c)}${R(op.i)}`;
  const sign = op.c.n < 0 ? "-" : "+";
  const mag = frac(Math.abs(op.c.n), op.c.d);
  return `${R(op.i)} \\to ${R(op.i)} ${sign} ${fEq(mag, frac(1)) ? "" : tex(mag)}${R(op.j)}`;
}

function matrixTex(A: Matrix, augmented: boolean): string {
  const cols = A[0].length;
  const spec = augmented ? `${"c".repeat(cols - 1)}|c` : "c".repeat(cols);
  return `\\left(\\begin{array}{${spec}} ${A.map((r) => r.map(tex).join(" & ")).join(" \\\\ ")} \\end{array}\\right)`;
}

/** What the current matrix says about the system, once it's in row echelon form */
function analyze(A: Matrix, augmented: boolean): { ok: boolean; text: string } {
  const coeffs = augmented ? A[0].length - 1 : A[0].length;
  let lastLead = -1;
  let seenZeroRow = false;
  for (const row of A) {
    const lead = row.slice(0, coeffs).findIndex((a) => !isZero(a));
    if (augmented && lead === -1 && !isZero(row[coeffs])) {
      return { ok: false, text: `A row reads 0 = ${plain(row[coeffs])}, so the system has no solution.` };
    }
    if (lead === -1) { seenZeroRow = true; continue; }
    if (seenZeroRow || lead <= lastLead) return { ok: false, text: "Not in row echelon form yet." };
    lastLead = lead;
  }
  if (!augmented) return { ok: true, text: "In row echelon form." };
  const pivots = A.filter((row) => row.slice(0, coeffs).some((a) => !isZero(a))).length;
  return pivots === coeffs
    ? { ok: true, text: "In row echelon form and consistent, with a pivot in every column: exactly one solution. Back-substitute to find it." }
    : { ok: true, text: `In row echelon form and consistent, with ${coeffs - pivots} free variable(s): infinitely many solutions.` };
}

const DEFAULT = "1 3 2\n-2 -5 -2\n-5 -4 12\n-3 -9 -6";

function parseMatrix(text: string): Matrix | null {
  const rows = text.trim().split("\n").map((line) => line.trim().split(/[\s,]+/).map(parseFrac));
  if (rows.length === 0 || rows.some((r) => r.length !== rows[0].length || r.some((a) => a === null))) return null;
  return rows as Matrix;
}

export default function RowReduceWidget() {
  const [source, setSource] = useState(DEFAULT);
  const [augmented, setAugmented] = useState(true);
  const [history, setHistory] = useState<{ A: Matrix; op?: Op }[]>(() => [{ A: parseMatrix(DEFAULT)! }]);
  const [kind, setKind] = useState<Op["kind"]>("add");
  const [i, setI] = useState(2);
  const [j, setJ] = useState(1);
  const [cText, setCText] = useState("2");
  const [guess, setGuess] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<boolean[] | null>(null);

  const A = history[history.length - 1].A;
  const m = A.length;
  const c = parseFrac(cText);
  const rowsValid = i >= 1 && i <= m && (kind === "scale" || (j >= 1 && j <= m && j !== i));
  const op: Op | null = !rowsValid
    ? null
    : kind === "swap" ? { kind, i: i - 1, j: j - 1 }
    : c === null || (kind === "scale" && isZero(c)) ? null
    : kind === "scale" ? { kind, i: i - 1, c } : { kind, i: i - 1, j: j - 1, c };
  const result = op ? apply(A, op) : null;
  const status = analyze(A, augmented);

  const load = () => {
    const parsed = parseMatrix(source);
    if (!parsed) return;
    setHistory([{ A: parsed }]);
    setFeedback(null);
  };
  const commit = () => {
    if (!op || !result) return;
    setHistory((h) => [...h, { A: result, op }]);
    setGuess([]);
    setFeedback(null);
  };
  const check = () => {
    if (!op || !result) return;
    const marks = result[op.i].map((a, k) => {
      const g = parseFrac(guess[k] ?? "");
      return g !== null && fEq(g, a);
    });
    setFeedback(marks);
    if (marks.every(Boolean)) commit();
  };

  const rowInput = "w-12 px-1 py-1 border rounded text-center";
  return (
    <div className="mt-2 space-y-3 text-sm" style={{ lineHeight: "normal" }}>
      <details className="rounded-lg border border-gray-200 p-2">
        <summary className="cursor-pointer text-gray-700">Enter your own matrix</summary>
        <p className="text-gray-600 mt-2">One row per line, entries separated by spaces. Fractions like 1/2 are fine.</p>
        <textarea value={source} onChange={(e) => setSource(e.target.value)} rows={5} className="mt-2 w-full max-w-xs font-mono border border-gray-300 rounded p-2" />
        <div className="flex items-center gap-4 mt-1">
          <label className="flex items-center gap-1">
            <input type="checkbox" checked={augmented} onChange={(e) => setAugmented(e.target.checked)} className="accent-[var(--accent)]" />
            Last column is augmented
          </label>
          <button onClick={load} disabled={!parseMatrix(source)} className="text-[var(--accent)] hover:text-[var(--accent-dark)] disabled:text-gray-400 cursor-pointer">
            Load
          </button>
        </div>
      </details>

      <div className="overflow-x-auto">
        <TrustedBlockMath math={history.map((h, k) => (k === 0 ? "" : `\\xrightarrow{${opTex(h.op!)}} \\\\ `) + matrixTex(h.A, augmented)).join(" ")} />
      </div>
      <Check ok={status.ok}>{status.text}</Check>

      <div className="rounded-lg border border-gray-200 p-3 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <select value={kind} onChange={(e) => { setKind(e.target.value as Op["kind"]); setFeedback(null); }} className="border border-gray-300 rounded px-1 py-1">
            <option value="add">Add a multiple of a row</option>
            <option value="scale">Scale a row</option>
            <option value="swap">Swap two rows</option>
          </select>
          <span>R</span>
          <input type="number" min={1} max={m} value={i} onChange={(e) => { setI(Number(e.target.value)); setFeedback(null); }} className="w-12 border border-gray-300 rounded px-1 py-1" aria-label="Row i" />
          {kind !== "scale" && (
            <>
              <span>{kind === "swap" ? "↔ R" : "with R"}</span>
              <input type="number" min={1} max={m} value={j} onChange={(e) => { setJ(Number(e.target.value)); setFeedback(null); }} className="w-12 border border-gray-300 rounded px-1 py-1" aria-label="Row j" />
            </>
          )}
          {kind !== "swap" && (
            <>
              <span>c =</span>
              <input value={cText} onChange={(e) => { setCText(e.target.value); setFeedback(null); }} className={`${rowInput} ${c === null ? "border-red-400 bg-red-50" : "border-gray-300"}`} aria-label="Scalar c" />
            </>
          )}
        </div>
        {op ? (
          <>
            <div><M>{opTex(op)}</M></div>
            {op.kind !== "swap" && (
              <div className="flex flex-wrap items-center gap-1.5">
                <span>Your new <M>{`R_{${op.i + 1}}`}</M>:</span>
                {A[0].map((_, k) => (
                  <input
                    key={k}
                    value={guess[k] ?? ""}
                    onChange={(e) => { const g = [...guess]; g[k] = e.target.value; setGuess(g); setFeedback(null); }}
                    className={`${rowInput} ${feedback ? (feedback[k] ? "border-green-500 bg-green-50" : "border-red-400 bg-red-50") : "border-gray-300"}`}
                    aria-label={`Entry ${k + 1} of the new row`}
                  />
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-4">
              {op.kind !== "swap" && (
                <button onClick={check} className="text-[var(--accent)] hover:text-[var(--accent-dark)] cursor-pointer">Check my row</button>
              )}
              <button onClick={commit} className="text-gray-600 hover:text-black cursor-pointer">{op.kind === "swap" ? "Swap" : "Just apply it"}</button>
              {feedback && !feedback.every(Boolean) && (
                <span className="text-red-600">Red entries are off. Try again, or apply it to see the answer.</span>
              )}
            </div>
          </>
        ) : (
          <p className="text-red-600">Pick valid rows (and a nonzero c when scaling).</p>
        )}
        <div className="flex gap-4 pt-1">
          <button onClick={() => { setHistory((h) => h.slice(0, -1)); setFeedback(null); }} disabled={history.length < 2} className="text-gray-600 hover:text-black disabled:text-gray-300 cursor-pointer">Undo</button>
          <button onClick={() => { setHistory((h) => [h[0]]); setFeedback(null); }} disabled={history.length < 2} className="text-gray-600 hover:text-black disabled:text-gray-300 cursor-pointer">Start over</button>
        </div>
      </div>
    </div>
  );
}
