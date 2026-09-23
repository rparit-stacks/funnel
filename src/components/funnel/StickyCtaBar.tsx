"use client";

import { OFFER } from "@/data/offer";
import { useEffect, useState } from "react";

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function StickyCtaBar() {
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
    <aside className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 px-4 py-4 shadow-[0_-12px_40px_rgba(18,24,38,0.12)] backdrop-blur-md sm:px-5 sm:py-5">
      <div className="mx-auto flex w-full max-w-md items-center justify-between gap-4 sm:max-w-lg lg:max-w-xl">
        <div className="min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black tracking-tight text-ink sm:text-3xl">
              ₹{OFFER.price}
            </span>
            <span className="text-sm text-muted line-through sm:text-base">
              ₹{OFFER.originalPrice}
            </span>
          </div>
          <p className="mt-0.5 text-[13px] font-semibold text-cta sm:text-sm">
            Ends in{" "}
            <span className="font-mono text-[14px] font-bold" suppressHydrationWarning>
              {formatTime(secondsLeft)}
            </span>
          </p>
        </div>

        <div className="shrink-0 p-1">
          <a
            href={OFFER.href}
            className="btn-wake inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-cta px-5 py-3.5 text-sm font-extrabold text-white shadow-cta sm:min-h-[52px] sm:px-6 sm:text-base"
          >
            <span className="relative z-[1]">{OFFER.claimLabel}</span>
            <svg
              className="btn-wake-icon relative z-[1] ml-2 h-4 w-4 sm:h-5 sm:w-5"
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
      </div>
    </aside>
  );
}
