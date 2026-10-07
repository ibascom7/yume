"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Smallest bubble diameter, so labels on empty classes still fit inside the rim
const MIN_SIZE = 96;
// Drops that scatter when a bubble pops
const DROPLET_COUNT = 10;
// Start navigating once the bubble has swelled, so the page loads while it bursts
// instead of after the animation (matches the 45% keyframe of bubble-pop)
const NAVIGATE_AFTER_MS = 120;

export interface NotesClass {
  name: string;
  // Links go straight to the class's first tab to skip the redirect hop
  href: string;
  content: { label: string; count: number }[];
  color: string;
}

export default function NotesBubbles({ classes }: { classes: NotesClass[] }) {
  const router = useRouter();
  // href of the bubble currently mid-pop, if any
  const [popping, setPopping] = useState<string | null>(null);

  // Pop the bubble and navigate partway through, so the flourish overlaps the page load
  const pop = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Modified clicks (new tab/window) and reduced-motion users get a plain navigation
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    e.preventDefault();
    if (popping) return;
    setPopping(href);
    window.setTimeout(() => router.push(href), NAVIGATE_AFTER_MS);
  };

  // Calculate radius based on total content (sqrt of total items)
  const getRadius = (cls: NotesClass) => {
    const total = cls.content.reduce((sum, item) => sum + item.count, 0);
    return total > 0 ? Math.sqrt(total) : 1;
  };

  // Scale factor for visualization
  const scaleFactor = 30;

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Notes</h1>
      <p className="text-gray-600 mb-12 text-center max-w-md">
        Classes on the pain scale.
      </p>

      <div className="flex flex-wrap gap-12 items-center justify-center">
        {classes.map((cls) => {
          const radius = getRadius(cls);
          const size = Math.max(radius * scaleFactor, MIN_SIZE);
          // Empty/small classes get a compact label so it stays inside the rim
          const isSmall = size < 120;
          const isPopping = popping === cls.href;

          return (
            <Link
              key={cls.href}
              href={cls.href}
              // Fully prefetch so the page is ready by the time the pop finishes
              prefetch={true}
              onClick={(e) => pop(e, cls.href)}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="relative">
                <div
                  className="rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_28px_var(--bubble)]"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    "--bubble": cls.color,
                    // Crisp colored rim
                    border: `2px solid ${cls.color}`,
                    // Clear center that ramps quickly to the class color right at the edge
                    backgroundImage: `radial-gradient(circle closest-side, transparent 0%, transparent 78%, ${cls.color}1f 90%, ${cls.color}a6 97%, ${cls.color} 100%)`,
                    animation: isPopping ? "bubble-pop 260ms ease-out forwards" : undefined,
                  } as React.CSSProperties}
                >
                  <span
                    className={`font-bold text-center ${isSmall ? "text-xs px-2" : "text-sm sm:text-base px-4"}`}
                    style={{ color: cls.color }}
                  >
                    {cls.name}
                  </span>
                </div>
                {isPopping && <Droplets size={size} color={cls.color} />}
              </div>
              <div className="text-center text-sm text-gray-600">
                {cls.content.reduce((sum, item) => sum + item.count, 0) > 0 ? (
                  <div>
                    {cls.content.map((item, idx) => (
                      <div key={idx}>{item.count} {item.label}</div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-400">No content yet</div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// Small drops that fly outward from the rim while a bubble pops
function Droplets({ size, color }: { size: number; color: string }) {
  const r = size / 2;
  return (
    <>
      {Array.from({ length: DROPLET_COUNT }, (_, i) => {
        // Evenly around the rim, nudged a little so it doesn't look mechanical
        const angle = (i / DROPLET_COUNT) * Math.PI * 2 + (i % 2 ? 0.25 : -0.1);
        const start = r * 1.08;
        const end = start + 34 + ((i * 7) % 4) * 12;
        const dot = 8 + ((i * 3) % 3) * 3;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return (
          <span
            key={i}
            aria-hidden
            className="absolute left-1/2 top-1/2 rounded-full pointer-events-none"
            style={{
              width: dot,
              height: dot,
              backgroundColor: color,
              "--sx": `${cos * start}px`,
              "--sy": `${sin * start}px`,
              "--dx": `${cos * end}px`,
              "--dy": `${sin * end}px`,
              animation: "bubble-droplet 220ms cubic-bezier(0.1, 0.6, 0.3, 1) 40ms both",
            } as React.CSSProperties}
          />
        );
      })}
    </>
  );
}
