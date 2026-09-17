"use client";

import { useState } from "react";
import { processLatexLinks } from "./latexLinkHelper";
import TrustedBlockMath from "./TrustedBlockMath";

interface Solution {
  title?: string;
  content: string;
}

interface ExerciseCardProps {
  number: number;
  title: string;
  problem: string;
  solution?: string | Solution[];
  id?: string;
}

export default function ExerciseCard({ number, title, problem, solution, id }: ExerciseCardProps) {
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);

  // Normalize solution to array format
  const solutions: Solution[] = solution
    ? typeof solution === "string"
      ? [{ content: solution }]
      : solution
    : [];

  return (
    <div id={id} className="border border-gray-300 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 bg-white shadow-sm scroll-mt-4">
      <div className="flex items-start justify-between gap-2 sm:gap-4">
        <div className="flex-1 min-w-0">
          <div
            className={`mb-2 sm:mb-3 text-sm sm:text-base ${solution ? "cursor-pointer hover:opacity-75 transition-opacity" : ""}`}
            onClick={() => solution && setIsSolutionOpen(!isSolutionOpen)}
          >
            <span className="font-bold text-orange-600">Exercise {number}. </span>
            <span className="font-semibold text-black">{title}</span>
          </div>
          <div className="text-black text-sm sm:text-base ml-0 sm:ml-[6em]">
            <TrustedBlockMath math={processLatexLinks(problem)} />
          </div>
        </div>
        {solution && (
          <button
            onClick={() => setIsSolutionOpen(!isSolutionOpen)}
            className="flex-shrink-0 text-gray-600 hover:text-black transition-all cursor-pointer"
            style={{ transform: isSolutionOpen ? "rotate(180deg)" : "rotate(0deg)" }}
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
        )}
      </div>

      {solution && isSolutionOpen && (
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
          {solutions.map((s, index) => (
            <div key={index} className={index > 0 ? "mt-4 pt-4 border-t border-gray-100" : ""}>
              <div className="font-semibold mb-2 text-gray-700 text-sm sm:text-base">
                {s.title ? `${s.title}:` : solutions.length > 1 ? `Solution ${index + 1}:` : "Solution:"}
              </div>
              <div className="text-black text-sm sm:text-base ml-0 sm:ml-[3.5em]" style={{ lineHeight: "2" }}>
                <TrustedBlockMath math={processLatexLinks(s.content)} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
