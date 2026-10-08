"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { shorts } from "@/data/shorts";

const VISIBLE_ENOUGH = 0.6;

function embedSrc(id: string, muted: boolean) {
  const q = new URLSearchParams({
    autoplay: "1",
    mute: muted ? "1" : "0",
    playsinline: "1",
    loop: "1",
    playlist: id,
    rel: "0",
    modestbranding: "1",
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${q.toString()}`;
}

/**
 * Light YouTube facade: every card is just a thumbnail until it is the most
 * visible one, then (and only then) a single iframe mounts and autoplays muted.
 * One iframe at a time keeps the page smooth; tapping any card plays it with sound.
 */
export function ShortsRail() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [manual, setManual] = useState(false);
  const ratios = useRef(new Map<string, number>());
  const saveData = useRef(false);

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    saveData.current = Boolean(conn?.saveData);
  }, []);

  const report = useCallback((id: string, ratio: number) => {
    ratios.current.set(id, ratio);
    if (saveData.current) return;
    let best: string | null = null;
    let bestRatio = VISIBLE_ENOUGH;
    ratios.current.forEach((r, key) => {
      if (r >= bestRatio) {
        best = key;
        bestRatio = r;
      }
    });
    // a card the visitor tapped stays put until it scrolls away
    setActiveId((current) => {
      if (manual && current && (ratios.current.get(current) ?? 0) >= 0.2) return current;
      return best;
    });
    if (best === null) setManual(false);
  }, [manual]);

  return (
    <ul className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:px-0">
      {shorts.map((item) => (
        <li key={item.id} className="w-[58%] shrink-0 snap-center sm:w-[34%] lg:w-auto">
          <ShortCard
            item={item}
            playing={activeId === item.id}
            muted={!(manual && activeId === item.id)}
            onVisible={report}
            onTap={() => {
              setManual(true);
              setActiveId(item.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
}

function ShortCard({
  item,
  playing,
  muted,
  onVisible,
  onTap,
}: {
  item: (typeof shorts)[number];
  playing: boolean;
  muted: boolean;
  onVisible: (id: string, ratio: number) => void;
  onTap: () => void;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => onVisible(item.id, entry.intersectionRatio),
      { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [item.id, onVisible]);

  return (
    <article ref={ref} className="lp2-shot">
      <div className="relative aspect-[9/16] w-full bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`}
          alt={`${item.person} testimonial`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {playing ? (
          <iframe
            key={`${item.id}-${muted}`}
            src={embedSrc(item.id, muted)}
            title={`${item.person} — ${item.headline}`}
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={onTap}
            aria-label={`Play ${item.person}'s story`}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="lp2-play lp2-play-sm" aria-hidden>
              <svg className="h-5 w-5 translate-x-[2px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}

        {playing ? null : (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 pt-10">
            <span className="lp2-result">{item.person}</span>
            <p className="mt-1.5 text-balance text-[12.5px] font-extrabold leading-snug text-white">
              {item.headline}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
