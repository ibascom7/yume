"use client";

// A matrix typed into a grid of boxes, with buttons to add or remove rows and columns.
// When `augmented`, the last column is the right-hand side: drawn past a divider, kept last when columns
// are added or removed, and not counted toward `maxCols`.

interface MatrixInputProps {
  entries: string[][];
  onChange: (entries: string[][]) => void;
  isValid: (text: string) => boolean;
  augmented?: boolean;
  label?: string;
  maxRows?: number;
  maxCols?: number;
}

export default function MatrixInput({ entries, onChange, isValid, augmented = false, label = "A", maxRows = 5, maxCols = 5 }: MatrixInputProps) {
  const rows = entries.length;
  const coeffs = entries[0].length - (augmented ? 1 : 0);
  const set = (i: number, j: number, value: string) => onChange(entries.map((r, a) => (a === i ? r.map((x, b) => (b === j ? value : x)) : r)));
  // New columns go in front of the augmented one, and removals take the last coefficient column
  const addCol = () => onChange(entries.map((r) => [...r.slice(0, coeffs), "0", ...r.slice(coeffs)]));
  const removeCol = () => onChange(entries.map((r) => [...r.slice(0, coeffs - 1), ...r.slice(coeffs)]));
  const addRow = () => onChange([...entries, entries[0].map(() => "0")]);
  const removeRow = () => onChange(entries.slice(0, -1));

  const box = (i: number, j: number) => (
    <input
      key={`${i}-${j}`}
      value={entries[i][j]}
      inputMode="decimal"
      onChange={(e) => set(i, j, e.target.value)}
      aria-label={`Entry (${i + 1}, ${j + 1})`}
      className={`w-12 px-1 py-1 border rounded text-center ${isValid(entries[i][j]) ? "border-gray-300" : "border-red-400 bg-red-50"}`}
    />
  );
  const button = (text: string, onClick: () => void, enabled: boolean) => (
    <button onClick={onClick} disabled={!enabled} className="px-2 py-0.5 rounded border border-gray-300 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:text-inherit cursor-pointer disabled:cursor-default">
      {text}
    </button>
  );

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="italic">{label} =</span>
        <div className="flex gap-1 border-x-2 border-gray-700 rounded px-1 py-1">
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${coeffs}, auto)` }}>
            {entries.flatMap((_, i) => [...Array(coeffs).keys()].map((j) => box(i, j)))}
          </div>
          {augmented && (
            <div className="grid gap-1 border-l-2 border-gray-700 pl-1">{entries.map((_, i) => box(i, coeffs))}</div>
          )}
        </div>
        <span className="text-gray-500 text-xs">
          {rows}×{coeffs}
          {augmented ? " + 1" : ""}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 text-xs">
        <span className="text-gray-600">Rows</span>
        {button("−", removeRow, rows > 1)}
        {button("+", addRow, rows < maxRows)}
        <span className="text-gray-600 ml-2">Columns</span>
        {button("−", removeCol, coeffs > 1)}
        {button("+", addCol, coeffs < maxCols)}
      </div>
    </div>
  );
}
