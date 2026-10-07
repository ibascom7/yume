"use client";

import { useEffect, useRef, useState } from "react";
import TrustedBlockMath from "./TrustedBlockMath";
import type { LinkPreviews } from "./linkPreviews";

// How long the popup lingers after the mouse leaves, so it can be moved onto the popup itself
const HIDE_DELAY_MS = 150;
// Matches w-[28rem] below; used to keep the popup inside the window
const POPUP_WIDTH = 448;
// Rough popup height, used to decide whether it fits below the link
const POPUP_HEIGHT = 260;

interface Shown {
  href: string;
  top: number;
  left: number;
  above: boolean;
}

/**
 * Wikipedia-style previews: hovering a `[[theorem N]]` / `[[definition N]]` link with a mouse
 * shows that card's statement. Touch taps just follow the link as before.
 */
export default function LinkPreviewPopup({ previews }: { previews: LinkPreviews }) {
  const [shown, setShown] = useState<Shown | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<number | undefined>(undefined);
  // The link the popup is attached to, so it can follow the link when the page scrolls
  const anchor = useRef<Element | null>(null);

  useEffect(() => {
    const cancelHide = () => window.clearTimeout(hideTimer.current);
    const hideNow = () => {
      cancelHide();
      anchor.current = null;
      setShown(null);
    };
    const scheduleHide = () => {
      cancelHide();
      hideTimer.current = window.setTimeout(hideNow, HIDE_DELAY_MS);
    };

    // Place the popup under the link, or above it when there isn't room below
    const placeAt = (link: Element, href: string) => {
      const rect = link.getBoundingClientRect();
      const above = rect.bottom + POPUP_HEIGHT > window.innerHeight && rect.top > POPUP_HEIGHT;
      const left = Math.max(8, Math.min(rect.left, window.innerWidth - POPUP_WIDTH - 8));
      setShown({ href, left, top: above ? rect.top - 8 : rect.bottom + 8, above });
    };

    const onOver = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const target = e.target as Element;
      if (popupRef.current?.contains(target)) {
        cancelHide();
        return;
      }
      const link = target.closest("a[href]");
      const href = link?.getAttribute("href");
      if (!link || !href || !previews[href]) return;

      cancelHide();
      anchor.current = link;
      placeAt(link, href);
    };

    // Follow the link while the page scrolls; drop the popup once the link leaves the window
    const onScroll = () => {
      const link = anchor.current;
      const href = link?.getAttribute("href");
      if (!link || !href) return;
      const rect = link.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) hideNow();
      else placeAt(link, href);
    };

    const onOut = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const target = e.target as Element;
      if (target.closest("a[href]") || popupRef.current?.contains(target)) scheduleHide();
    };

    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", hideNow);
    return () => {
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", hideNow);
      cancelHide();
    };
  }, [previews]);

  if (!shown) return null;
  const preview = previews[shown.href];

  return (
    <div
      ref={popupRef}
      role="tooltip"
      className="fixed z-50 w-[28rem] max-w-[calc(100vw-16px)] rounded-lg border border-gray-300 bg-white p-3 shadow-lg text-sm"
      style={{ top: shown.top, left: shown.left, transform: shown.above ? "translateY(-100%)" : undefined }}
    >
      <div className="font-semibold text-black mb-1">{preview.heading}</div>
      <div className="text-black max-h-60 overflow-y-auto">
        <TrustedBlockMath math={preview.math} />
      </div>
    </div>
  );
}
