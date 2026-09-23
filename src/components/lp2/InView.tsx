"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Two-stage so content can never get stuck invisible:
 *   (nothing)            -> SSR / no JS: fully visible, no animation
 *   armedClass           -> JS mounted: entrance animations may hide children
 *   armedClass + active  -> scrolled into view: animations play
 * Stops observing after the first hit.
 */
export function InView({
  children,
  className = "",
  activeClass = "lp2-run",
  armedClass = "lp2-armed",
}: {
  children: React.ReactNode;
  className?: string;
  activeClass?: string;
  armedClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setActive(true));
      return () => cancelAnimationFrame(id);
    }

    const armId = requestAnimationFrame(() => setArmed(true));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      // fire once the block is genuinely on screen, not before
      { threshold: 0, rootMargin: "0px 0px -18% 0px" },
    );

    observer.observe(node);
    return () => {
      cancelAnimationFrame(armId);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${armed ? armedClass : ""} ${active ? activeClass : ""}`}
    >
      {children}
    </div>
  );
}
