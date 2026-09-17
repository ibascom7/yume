"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Active-underline color and hover background per class color
const navColors: Record<string, { underline: string; hoverBg: string }> = {
  red: { underline: "#dc2626", hoverBg: "hover:bg-red-100" },
  blue: { underline: "#2563eb", hoverBg: "hover:bg-blue-100" },
  purple: { underline: "#9333ea", hoverBg: "hover:bg-purple-100" },
  green: { underline: "#22c55e", hoverBg: "hover:bg-green-100" },
  orange: { underline: "#ea580c", hoverBg: "hover:bg-orange-100" },
};

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const classes = [
    { name: "Abstract Algebra", href: "/notes/algebra", color: "red" },
    { name: "Intermediate Analysis", href: "/notes/intermediate-analysis", color: "blue" },
    { name: "Real Analysis", href: "/notes/real-analysis", color: "purple" },
    { name: "Complex Analysis", href: "/notes/complex-analysis", color: "green" },
    { name: "Linear Algebra", href: "/notes/linear-algebra", color: "orange" },
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="border-b border-gray-300 px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex flex-wrap items-center gap-2 sm:gap-6">
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/icon.png"
              alt="Home"
              width={24}
              height={24}
              className="rounded sm:w-7 sm:h-7"
            />
          </Link>
          <Link href="/notes" className="text-lg sm:text-xl font-bold hover:opacity-70 transition-opacity">
            Notes
          </Link>
          {/* On narrow screens the class links drop to their own row and wrap */}
          <div className="flex flex-wrap gap-1 sm:gap-4 basis-full sm:basis-auto sm:ml-auto text-sm sm:text-base">
            {classes.map((cls) => {
              const isActive = pathname.startsWith(cls.href);
              const { underline: underlineColor, hoverBg } = navColors[cls.color];

              return (
                <Link
                  key={cls.href}
                  href={cls.href}
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-md transition-colors text-black ${hoverBg}`}
                  style={isActive ? {
                    textDecoration: "underline",
                    textDecorationColor: underlineColor,
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "4px"
                  } : undefined}
                >
                  {cls.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-3 sm:p-8 overflow-x-hidden">{children}</main>
    </div>
  );
}
