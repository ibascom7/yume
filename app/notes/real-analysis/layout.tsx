"use client";

import Link from "next/link";
import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NotesFilter from "@/app/components/NotesFilter";
import { chapters } from "./chapters";
import { homeworks } from "./homeworks";

const tabs = [
  { name: "Theorems", href: "/notes/real-analysis/theorems" },
  { name: "Definitions", href: "/notes/real-analysis/definitions" },
  { name: "Exercises", href: "/notes/real-analysis/exercises" },
];

export default function RealAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Reading search params needs a Suspense boundary so static routes still prerender */}
      <Suspense>
        <TabsAndFilter />
      </Suspense>

      {/* Content */}
      {children}
    </div>
  );
}

function TabsAndFilter() {
  const pathname = usePathname();
  // Carry the chapter/section filter across tabs
  const query = useSearchParams().toString();

  return (
    <>
      {/* Tab Navigation */}
      <div className="flex gap-1 sm:gap-2 mb-4 sm:mb-6 border-b border-gray-300 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={query ? `${tab.href}?${query}` : tab.href}
              className={`px-3 sm:px-4 py-2 border-b-2 transition-colors whitespace-nowrap text-sm sm:text-base ${
                isActive
                  ? "border-purple-600 text-purple-600 font-semibold"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>

      <NotesFilter
        chapters={chapters}
        // Only exercises are tagged with homework
        homeworks={pathname === "/notes/real-analysis/exercises" ? homeworks : []}
        activeClassName="bg-purple-600 border-purple-600 text-white"
      />
    </>
  );
}
