import { OFFER } from "@/data/offer";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-md items-center justify-between gap-3 px-4 py-2.5 sm:max-w-lg sm:px-6 lg:max-w-xl">
        <div className="min-w-0">
          <p className="text-lg font-black tracking-tight text-ink leading-none">
            FUME<span className="text-teal">.Fit</span>
          </p>
          <p className="mt-0.5 truncate text-[10px] font-medium text-muted sm:text-[11px]">
            Metabolic Reset Framework
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden rounded-full bg-teal-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-teal sm:inline-flex">
            Free masterclass
          </span>
          <a
            href={OFFER.href}
            className="btn-wake inline-flex items-center rounded-xl bg-cta px-3 py-2 text-[11px] font-extrabold text-white shadow-cta transition hover:bg-cta-dark sm:px-3.5 sm:text-xs"
          >
            <span className="relative z-[1]">Book @ ₹{OFFER.price}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
