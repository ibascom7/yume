"use client";

import { useState, type ReactNode } from "react";

export interface ExampleItem {
  title?: string;
  body: ReactNode;
}

/** A card's examples, each its own collapsed dropdown, so long examples and widgets stay out of the way until opened */
export default function ExampleList({ items }: { items: ExampleItem[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mt-3 sm:mt-4 border-t border-gray-200">
      {items.map((item, i) => (
        <ExampleDropdown key={i} heading={`${items.length > 1 ? `Example ${i + 1}` : "Example"}${item.title ? `: ${item.title}` : ""}`}>
          {item.body}
        </ExampleDropdown>
      ))}
    </div>
  );
}

function ExampleDropdown({ heading, children }: { heading: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-2 py-2 sm:py-2.5 text-left font-semibold text-gray-700 hover:text-black text-sm sm:text-base cursor-pointer transition-colors"
      >
        <span>{heading}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="pb-3 text-black text-sm sm:text-base ml-0 sm:ml-[3.5em]" style={{ lineHeight: "2" }}>
          {children}
        </div>
      )}
    </div>
  );
}
