"use client";

import { useState } from "react";
import { processLatexLinks } from "./latexLinkHelper";
import TrustedBlockMath from "@/app/components/TrustedBlockMath";

interface Example {
  problemStatement: string;
  solution: string;
}

interface ProofMethodCardProps {
  number: number;
  title: string;
  description?: string;
  examples?: Example[];
  id?: string;
}

export default function ProofMethodCard({ number, title, description, examples = [], id }: ProofMethodCardProps) {
  const [openExamples, setOpenExamples] = useState<Set<number>>(new Set());

  const toggleExample = (index: number) => {
    const newOpenExamples = new Set(openExamples);
    if (newOpenExamples.has(index)) {
      newOpenExamples.delete(index);
    } else {
      newOpenExamples.add(index);
    }
    setOpenExamples(newOpenExamples);
  };

  return (
    <div id={id} className="border border-gray-300 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 bg-white shadow-sm scroll-mt-4">
      <div className="mb-2 sm:mb-3 text-sm sm:text-base">
        <span className="font-bold text-blue-600">Proof Method {number}. </span>
        <span className="font-semibold text-black">{title}</span>
      </div>

      {description && (
        <div className="text-black text-sm sm:text-base ml-0 sm:ml-[9em] mb-4">
          <p>{description}</p>
        </div>
      )}

      {examples.length > 0 && (
        <div className="mt-4 space-y-3">
          <div className="font-semibold text-gray-700 text-sm sm:text-base">
            Examples:
          </div>
          {examples.map((example, index) => {
            const isOpen = openExamples.has(index);
            return (
              <div key={index} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                <div
                  className="flex items-start justify-between gap-2 cursor-pointer hover:opacity-75 transition-opacity"
                  onClick={() => toggleExample(index)}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-black text-sm sm:text-base mb-2">
                      Example {index + 1}:
                    </div>
                    <div className="text-black text-sm sm:text-base">
                      <TrustedBlockMath math={processLatexLinks(example.problemStatement)} />
                    </div>
                  </div>
                  <button
                    className="flex-shrink-0 text-gray-600 hover:text-black transition-all"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                </div>

                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-gray-300">
                    <div className="font-semibold mb-2 text-gray-700 text-sm sm:text-base">
                      Solution:
                    </div>
                    <div className="text-black text-sm sm:text-base ml-0 sm:ml-[3.5em]" style={{ lineHeight: "2" }}>
                      <TrustedBlockMath math={processLatexLinks(example.solution)} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
