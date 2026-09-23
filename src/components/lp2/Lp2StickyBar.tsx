"use client";

import { useEffect, useState } from "react";
import { LP2_CHECKOUT } from "@/components/lp2/ui";
import { OFFER } from "@/data/offer";

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function Lp2StickyBar() {
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
    <aside className="lp2-bar">
      {/* time remaining — scaleX keeps it off the layout/paint path */}
      <div className="lp2-bar-track" aria-hidden>
        <div
          className="lp2-bar-fill"
          style={{ transform: `scaleX(${Math.max(secondsLeft, 0) / initial})` }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-md items-center justify-between gap-3 px-5 py-3 sm:max-w-2xl sm:gap-6 sm:px-6 sm:py-3.5 md:max-w-3xl lg:max-w-5xl lg:px-8">
        <div className="min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="lp2-bar-price">₹{OFFER.price}</span>
            <span className="lp2-bar-strike">₹{OFFER.originalPrice}</span>
          </div>

          <span className="lp2-bar-timer mt-1" suppressHydrationWarning>
            <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" d="M12 7.5V12l2.75 2.75" />
            </svg>
            {formatTime(secondsLeft)}
          </span>
        </div>

        <a href={LP2_CHECKOUT} className="lp2-bar-btn shrink-0">
          <span>{OFFER.claimLabel}</span>
        </a>
      </div>
    </aside>
  );
}
