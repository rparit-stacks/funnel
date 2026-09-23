export const LP2_CHECKOUT = "/lp-2/checkout";

export const LP2_WRAP_TIGHT =
  "mx-auto w-full max-w-md px-4 sm:max-w-xl sm:px-6 lg:max-w-4xl lg:px-6";

export const LP2_WRAP =
  "mx-auto w-full max-w-md px-5 sm:max-w-2xl sm:px-6 md:max-w-3xl lg:max-w-5xl lg:px-8 xl:max-w-6xl";

export function Lp2Section({
  children,
  className = "",
  innerClassName = "",
  id,
  backdrop,
}: {
  children: React.ReactNode;
  /** Applied to the <section> — use for padding/anchor offsets. */
  className?: string;
  /**
   * Applied to the wrapper that actually holds `children` — use for anything
   * that targets children, e.g. `space-y-*`. Putting those on `className`
   * silently does nothing: the <section> only ever has one element child.
   */
  innerClassName?: string;
  id?: string;
  /** Full-bleed decorative layer painted behind the section content. */
  backdrop?: React.ReactNode;
}) {
  return (
    <section id={id} className={`relative isolate w-full py-8 sm:py-11 lg:py-14 ${className}`}>
      {backdrop}
      <div className={`${LP2_WRAP} relative z-10 ${innerClassName}`}>{children}</div>
    </section>
  );
}

export function Lp2Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="lp2-eyebrow">
      <span className="lp2-dot" aria-hidden />
      {children}
    </p>
  );
}

export function Lp2Button({
  children,
  href = LP2_CHECKOUT,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a href={href} className={`lp2-btn ${className}`}>
      <span className="text-balance">{children}</span>
    </a>
  );
}
