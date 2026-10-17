"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = { name: string; role: string; src: string; pos: string };

const AUTOPLAY_MS = 4500;
const RESUME_AFTER_TOUCH_MS = 7000;

/**
 * Swipeable two-up of the coaches. Scroll-snap does the swiping, so touch feels native;
 * it also advances by itself, pauses while the visitor is interacting, and stays still
 * for visitors who prefer reduced motion.
 */
export function MentorCarousel({ slides }: { slides: readonly Slide[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const pausedUntil = useRef(0);
  const [index, setIndex] = useState(0);

  const goTo = useCallback((next: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  }, []);

  const pause = useCallback((ms = RESUME_AFTER_TOUCH_MS) => {
    pausedUntil.current = Date.now() + ms;
  }, []);

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (document.hidden || Date.now() < pausedUntil.current) return;
      const track = trackRef.current;
      if (!track) return;
      const current = Math.round(track.scrollLeft / track.clientWidth);
      goTo((current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [slides.length, goTo]);

  return (
    <div className="relative">
      <span className="lp2-stage-glow" aria-hidden />
      <ul
        ref={trackRef}
        onScroll={(e) => {
          const el = e.currentTarget;
          setIndex(Math.round(el.scrollLeft / el.clientWidth));
        }}
        onPointerDown={() => pause()}
        onMouseEnter={() => pause(2000)}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Your coaches"
      >
        {slides.map((slide) => (
          <li key={slide.name} className="w-full shrink-0 snap-center px-px">
            <article className="lp2-shot">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={slide.src}
                  alt={slide.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 430px"
                  className="object-cover"
                  style={{ objectPosition: slide.pos }}
                />
                <div className="lp2-shot-scrim" />
                <div className="absolute inset-x-0 bottom-0 space-y-2 p-5">
                  <span className="lp2-result">{slide.name}</span>
                  <p className="text-[11.5px] font-semibold leading-snug text-white/75">{slide.role}</p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex items-center justify-center gap-1">
        {slides.map((slide, i) => (
          <button
            key={slide.name}
            type="button"
            aria-label={`Show ${slide.name}`}
            aria-current={i === index}
            onClick={() => {
              pause();
              goTo(i);
            }}
            className="flex h-8 w-8 items-center justify-center"
          >
            <span
              className={`block h-2 rounded-full transition-[width,opacity] duration-300 ${
                i === index ? "w-6 bg-[color:var(--lp2-violet)]" : "w-2 bg-black/20"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
