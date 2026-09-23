import { OFFER } from "@/data/offer";

export function Lp1Header() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto flex w-full max-w-md items-center justify-between gap-3 px-4 py-3 sm:max-w-2xl sm:px-6 sm:py-4 lg:max-w-5xl">
        <div className="min-w-0">
          <p className="text-lg font-black leading-none tracking-tight">
            FUME<span className="lp1-grad-text">.Fit</span>
          </p>
          <p className="lp1-dim mt-1 truncate text-[10px] font-bold uppercase tracking-[0.18em]">
            Metabolic Reset
          </p>
        </div>
        <a
          href={OFFER.href}
          className="lp1-outline shrink-0 bg-white/10 px-3.5 py-2 text-[11px] font-black tracking-tight sm:px-4 sm:text-xs"
        >
          Book @ ₹{OFFER.price}
        </a>
      </div>
    </header>
  );
}
