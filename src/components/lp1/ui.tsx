import { OFFER } from "@/data/offer";

export function Lp1Button({
  children,
  href = OFFER.href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a href={href} className={`lp1-btn text-[12.5px] sm:text-[13.5px] ${className}`}>
      <span className="lp1-btn-label">{children}</span>
      <svg
        className="lp1-btn-icon h-4 w-4 shrink-0"
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
  );
}

/** Reading-width container. `wide` opens it up on large screens for grid layouts. */
export const LP1_WRAP = "mx-auto w-full max-w-md px-4 sm:max-w-lg sm:px-6 lg:max-w-2xl";
export const LP1_WRAP_WIDE = "mx-auto w-full max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-5xl";

export function Lp1Section({
  children,
  className = "",
  id,
  bleed = false,
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bleed?: boolean;
  wide?: boolean;
}) {
  return (
    <section
      id={id}
      className={`w-full ${bleed ? "" : "py-11 sm:py-14 lg:py-16"} ${className}`}
    >
      {bleed ? children : <div className={wide ? LP1_WRAP_WIDE : LP1_WRAP}>{children}</div>}
    </section>
  );
}

export function Lp1Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="lp1-eyebrow">
      <span className="lp1-dot" aria-hidden />
      {children}
    </p>
  );
}

export function Lp1Heading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-balance text-[1.5rem] font-black leading-[1.15] tracking-tight sm:text-[1.75rem] lg:text-[2.1rem] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lp1RefundNote({ className = "" }: { className?: string }) {
  return (
    <p className={`lp1-dim text-center text-[11px] leading-relaxed sm:text-xs ${className}`}>
      If you feel the session wasn&apos;t useful, we&apos;ll refund the fee. No questions asked.
    </p>
  );
}
