// A tiny parser for formulas readers type into widgets, like "2x - y^2" or "abs(y) + 1".
// It builds a function of the named variables instead of running the text as code.
//
// Supports: numbers, the given variables, pi, e, + - * / ^, parentheses, |…| for absolute value,
// implicit multiplication (2x, 3(x + y), x y), and abs, sqrt, sin, cos, tan, exp, ln.

export type Fn = (vars: Record<string, number>) => number;

const FUNCS: Record<string, (a: number) => number> = {
  abs: Math.abs, sqrt: Math.sqrt, sin: Math.sin, cos: Math.cos, tan: Math.tan, exp: Math.exp, ln: Math.log,
};
const CONSTS: Record<string, number> = { pi: Math.PI, e: Math.E };

export function parseExpr(text: string, variables: string[]): Fn | null {
  const tokens = text.match(/\d*\.?\d+|[a-z]+|[-+*/^()|]|\S/gi) ?? [];
  let i = 0;
  const peek = () => tokens[i];
  const next = () => tokens[i++];
  const fail = () => { throw new Error("parse"); };

  // Splits runs like "xy" into variables, so implicit products of variables work
  const isWord = (t?: string) => !!t && /^[a-z]+$/i.test(t);

  function expr(): Fn {
    let left = term();
    while (peek() === "+" || peek() === "-") {
      const op = next();
      const right = term();
      const l = left;
      left = op === "+" ? (v) => l(v) + right(v) : (v) => l(v) - right(v);
    }
    return left;
  }
  function term(): Fn {
    let left = unary();
    for (;;) {
      const t = peek();
      if (t === "*" || t === "/") {
        next();
        const right = unary();
        const l = left;
        left = t === "*" ? (v) => l(v) * right(v) : (v) => l(v) / right(v);
      } else if (t !== undefined && (t === "(" || isWord(t) || /^\d*\.?\d+$/.test(t))) {
        const right = power(); // implicit multiplication, e.g. 2x or x(y + 1)
        const l = left;
        left = (v) => l(v) * right(v);
      } else return left;
    }
  }
  function unary(): Fn {
    if (peek() === "-") { next(); const a = unary(); return (v) => -a(v); }
    if (peek() === "+") { next(); return unary(); }
    return power();
  }
  function power(): Fn {
    const base = primary();
    if (peek() === "^") {
      next();
      const exp = unary();
      return (v) => base(v) ** exp(v);
    }
    return base;
  }
  function primary(): Fn {
    const t = next();
    if (t === undefined) fail();
    if (/^\d*\.?\d+$/.test(t)) { const n = Number(t); return () => n; }
    if (t === "(") { const a = expr(); if (next() !== ")") fail(); return a; }
    if (t === "|") { const a = expr(); if (next() !== "|") fail(); return (v) => Math.abs(a(v)); }
    if (isWord(t)) {
      const w = t.toLowerCase();
      if (FUNCS[w]) {
        if (next() !== "(") fail();
        const a = expr();
        if (next() !== ")") fail();
        return (v) => FUNCS[w](a(v));
      }
      if (w in CONSTS) return () => CONSTS[w];
      if (variables.includes(w)) return (v) => v[w];
      // A run of single-letter variables, like "xy"
      if ([...w].every((ch) => variables.includes(ch))) return (v) => [...w].reduce((p, ch) => p * v[ch], 1);
    }
    return fail();
  }

  try {
    const f = expr();
    return i === tokens.length ? f : null;
  } catch {
    return null;
  }
}
