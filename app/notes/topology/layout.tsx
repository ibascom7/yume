"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const tabs = [
    { name: "Theorems", href: "/notes/topology/theorems" },
    { name: "Definitions", href: "/notes/topology/definitions" },
    { name: "Exercises", href: "/notes/topology/exercises" },
  ];

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-1 sm:gap-2 mb-4 sm:mb-6 border-b border-gray-300 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-3 sm:px-4 py-2 border-b-2 transition-colors whitespace-nowrap text-sm sm:text-base ${
                isActive
                  ? "border-green-600 text-green-600 font-semibold"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
