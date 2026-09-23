import { OFFER } from "@/data/offer";

type CtaButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  wake?: boolean;
};

export function CtaButton({
  children,
  href = OFFER.href,
  className = "",
  wake = true,
}: CtaButtonProps) {
  return (
    <div className={wake ? "btn-wake-shell" : "w-full"}>
      <a
        href={href}
        className={`${wake ? "btn-wake" : ""} inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cta px-4 py-3.5 text-center text-[13px] font-extrabold leading-snug tracking-tight text-white shadow-cta transition hover:bg-cta-dark sm:text-sm ${className}`}
      >
        <span className="relative z-[1]">{children}</span>
        <svg
          className="btn-wake-icon relative z-[1] h-4 w-4 shrink-0"
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
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`w-full py-6 sm:py-8 ${className}`}>
      {children}
    </section>
  );
}

export function RefundNote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-center text-xs leading-relaxed text-muted sm:text-[13px] ${className}`}>
      If you feel the session wasn&apos;t useful, we&apos;ll refund the fee. No questions asked.
    </p>
  );
}
