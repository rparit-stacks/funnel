"use client";

import { useEffect, useState } from "react";
import { OFFER } from "@/data/offer";

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function Lp1StickyBar() {
  const initial = OFFER.urgencySeconds;
  const [secondsLeft, setSecondsLeft] = useState(initial);

  useEffect(() => {
    let intervalId = 0;
    const start = () => {
      intervalId = window.setInterval(() => {
        setSecondsLeft((prev) => (prev <= 0 ? initial : prev - 1));
      }, 1000);
    };
    const ric = window.requestIdleCallback?.(start, { timeout: 1000 });
    const fallback = ric === undefined ? window.setTimeout(start, 0) : undefined;
    return () => {
      if (ric !== undefined) window.cancelIdleCallback?.(ric);
      if (fallback !== undefined) window.clearTimeout(fallback);
      window.clearInterval(intervalId);
    };
  }, [initial]);

  return (
    <aside className="lp1-bar">
      <div className="mx-auto flex w-full max-w-md items-center justify-between gap-3 px-4 py-3 sm:max-w-lg sm:gap-5 sm:px-6 sm:py-4 lg:max-w-4xl">
        <div className="min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="lp1-bar-price">
              <span className="lp1-grad-text">₹{OFFER.price}</span>
            </span>
            <span className="text-sm text-[#b7a8d4] line-through sm:text-base">
              ₹{OFFER.originalPrice}
            </span>
          </div>
          <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#b7a8d4] sm:text-xs">
            Ends in{" "}
            <span className="lp1-bar-timer font-black" suppressHydrationWarning>
              {formatTime(secondsLeft)}
            </span>
          </p>
        </div>

        <a
          href={OFFER.href}
          className="lp1-bar-btn shrink-0 text-[13px] sm:text-[15px]"
        >
          <span>{OFFER.claimLabel}</span>
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </aside>
  );
}
