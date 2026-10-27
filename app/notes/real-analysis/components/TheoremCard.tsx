"use client";

import { useState } from "react";
import { processLatexLinks } from "./latexLinkHelper";
import TrustedBlockMath from "@/app/components/TrustedBlockMath";
import LocationBadges from "@/app/components/LocationBadges";
import type { ChapterRef } from "@/app/components/notesFilter";
import { ExampleWidget, type Example } from "./DefinitionCard";
import ExampleList from "@/app/components/ExampleList";

// What the card is labeled as; all kinds share one numbering, like most textbooks
export type TheoremKind = "Theorem" | "Lemma" | "Corollary" | "Proposition" | "Remark";

interface Proof {
  title?: string;
  content: string;
}

interface TheoremCardProps extends ChapterRef {
  kind?: TheoremKind;
  number: number;
  title: string;
  statement: string;
  description?: string;
  proof?: string | Proof[];
  examples?: Example[];
  id?: string;
}

export default function TheoremCard({
  kind = "Theorem",
  number,
  title,
  statement,
  description,
  proof,
  examples,
  chapter,
  section,
  id,
}: TheoremCardProps) {
  const [isProofOpen, setIsProofOpen] = useState(false);

  // Normalize proof to array format
  const proofs: Proof[] = proof
    ? typeof proof === 'string'
      ? [{ content: proof }]
      : proof
    : [];
  const hasProof = proofs.length > 0;
  const hasExamples = !!examples && examples.length > 0;
  // The card's dropdown holds the proof and the list of examples
  const hasDropdown = hasProof || hasExamples;

  return (
    <div id={id} className="border border-gray-300 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 bg-white shadow-sm scroll-mt-4">
      <div className="flex items-start justify-between gap-2 sm:gap-4">
        <div className="flex-1 min-w-0">
          <div
            className={`flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 sm:mb-3 text-sm sm:text-base ${hasDropdown ? 'cursor-pointer hover:opacity-75 transition-opacity' : ''}`}
            onClick={() => hasDropdown && setIsProofOpen(!isProofOpen)}
          >
            <div>
              <span className="font-bold text-purple-600">{kind} {number}. </span>
              <span className="font-semibold text-black">{title}</span>
            </div>
            <LocationBadges chapter={chapter} section={section} />
          </div>
        </div>
        {hasDropdown && (
          <button
            onClick={() => setIsProofOpen(!isProofOpen)}
            className="flex-shrink-0 flex items-center gap-1 text-gray-600 hover:text-black transition-all cursor-pointer"
            aria-label={isProofOpen ? "Hide proof and examples" : "Show proof and examples"}
          >
            {hasExamples && (
              <span className="text-xs sm:text-sm">
                {examples.length} {examples.length === 1 ? "example" : "examples"}
              </span>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 transition-transform"
              style={{ transform: isProofOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        )}
      </div>
      <div className="text-black text-sm sm:text-base ml-0 sm:ml-[6em]">
        <TrustedBlockMath math={processLatexLinks(statement)} />
      </div>
      <div className="text-black text-sm sm:text-base ml-0 sm:ml-[6em]">
        <p>{description}</p>
      </div>

      {hasDropdown && isProofOpen && (
        <>
          {hasProof && (
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
              {proofs.map((p, index) => (
                <div key={index} className={index > 0 ? "mt-4 pt-4 border-t border-gray-100" : ""}>
                  <div className="font-semibold mb-2 text-gray-700 text-sm sm:text-base">
                    {p.title ? `${p.title}:` : proofs.length > 1 ? `Proof ${index + 1}:` : "Proof:"}
                  </div>
                  <div className="text-black text-sm sm:text-base ml-0 sm:ml-[3.5em]" style={{ lineHeight: "2" }}>
                    <TrustedBlockMath math={processLatexLinks(p.content)} />
                  </div>
                </div>
              ))}
            </div>
          )}
          <ExampleList
            items={(examples ?? []).map((e) => ({
              title: e.title,
              body: (
                <>
                  <TrustedBlockMath math={processLatexLinks(e.content)} />
                  <ExampleWidget name={e.widget} />
                </>
              ),
            }))}
          />
        </>
      )}
    </div>
  );
}
