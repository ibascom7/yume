"use client";

import Link from "next/link";
import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ChapterFilter from "@/app/components/ChapterFilter";
import { chapters } from "./chapters";

const tabs = [
  { name: "Theorems", href: "/notes/linear-algebra/theorems" },
  { name: "Definitions", href: "/notes/linear-algebra/definitions" },
  { name: "Exercises", href: "/notes/linear-algebra/exercises" },
];

export default function LinearAlgebraLayout({
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
                  ? "border-orange-600 text-orange-600 font-semibold"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>

      <ChapterFilter chapters={chapters} activeClassName="bg-orange-600 border-orange-600 text-white" />
    </>
  );
}
