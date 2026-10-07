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

type Shown =
  | { mode: "hover"; href: string; top: number; left: number; above: boolean }
  | { mode: "sheet"; href: string };

/**
 * Wikipedia-style previews of `[[theorem N]]` / `[[definition N]]` links.
 * Mouse: hovering a link shows that card's statement next to it.
 * Touch: tapping a link opens the statement in a bottom sheet with a "Go to" link;
 * tapping the same link again follows it, tapping anywhere else closes the sheet.
 */
export default function LinkPreviewPopup({ previews }: { previews: LinkPreviews }) {
  const [shown, setShown] = useState<Shown | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<number | undefined>(undefined);
  // The link the hover popup is attached to, so it can follow the link when the page scrolls
  const anchor = useRef<Element | null>(null);
  // Mirrors `shown` so the document listeners can see it without re-subscribing
  const shownRef = useRef<Shown | null>(null);
  // Pointer type of the last press, for browsers whose click events don't carry one
  const lastPointerType = useRef("");

  const show = (next: Shown | null) => {
    shownRef.current = next;
    setShown(next);
  };

  useEffect(() => {
    const cancelHide = () => window.clearTimeout(hideTimer.current);
    const hideNow = () => {
      cancelHide();
      anchor.current = null;
      show(null);
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
      show({ mode: "hover", href, left, top: above ? rect.top - 8 : rect.bottom + 8, above });
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
      if (!link || !href || shownRef.current?.mode !== "hover") return;
      const rect = link.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) hideNow();
      else placeAt(link, href);
    };

    const onOut = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (shownRef.current?.mode !== "hover") return;
      const target = e.target as Element;
      if (target.closest("a[href]") || popupRef.current?.contains(target)) scheduleHide();
    };

    const onDown = (e: PointerEvent) => {
      lastPointerType.current = e.pointerType;
    };

    // iOS Safari doesn't send clicks on plain text up to the document, so close the sheet on
    // a tap outside it here too. Scrolls cancel the pointer and never reach pointerup.
    const onUp = (e: PointerEvent) => {
      const target = e.target as Element;
      if (shownRef.current?.mode !== "sheet" || popupRef.current?.contains(target)) return;
      if (!target.closest("a[href]")) hideNow();
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element;
      // Taps inside the sheet (its "Go to" link, close button, scrolling the math) handle themselves
      if (popupRef.current?.contains(target)) return;

      const pointerType = (e as PointerEvent).pointerType || lastPointerType.current;
      const touch = pointerType === "touch" || pointerType === "pen";
      const link = target.closest("a[href]");
      const href = link?.getAttribute("href");
      const current = shownRef.current;

      // First tap on a previewable link opens the sheet; a second tap on it follows the link
      if (touch && href && previews[href] && !(current?.mode === "sheet" && current.href === href)) {
        e.preventDefault();
        cancelHide();
        anchor.current = null;
        show({ mode: "sheet", href });
        return;
      }
      hideNow();
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") hideNow();
    };

    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointerup", onUp);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Capture phase, so the link's default navigation can still be cancelled
    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKey);
      cancelHide();
    };
  }, [previews]);

  if (!shown) return null;
  const preview = previews[shown.href];

  if (shown.mode === "sheet") {
    return (
      <div
        ref={popupRef}
        role="dialog"
        aria-label={preview.heading}
        className="fixed inset-x-0 bottom-0 z-50 rounded-t-xl border-t border-gray-300 bg-white px-4 pt-3 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.15)] text-sm"
      >
        <div className="flex items-start justify-between gap-3 mb-1">
          <div className="font-semibold text-black">{preview.heading}</div>
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => show(null)}
            className="-mr-2 -mt-1 px-2 text-xl leading-none text-gray-500"
          >
            ×
          </button>
        </div>
        <div className="text-black max-h-[50vh] overflow-y-auto">
          <TrustedBlockMath math={preview.math} />
        </div>
        <a
          href={shown.href}
          onClick={() => show(null)}
          className="mt-3 inline-block font-medium text-blue-600 underline"
        >
          Go to {preview.heading.split(".")[0]} →
        </a>
      </div>
    );
  }

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
