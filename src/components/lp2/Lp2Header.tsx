import Image from "next/image";
import { LP2_CHECKOUT, LP2_WRAP } from "@/components/lp2/ui";
import { OFFER } from "@/data/offer";

export function Lp2Header() {
  return (
    <header className="lp2-header">
      <div className={`${LP2_WRAP} flex items-center justify-between gap-3 py-4 sm:py-5`}>
        <div className="min-w-0">
          <Image src="/images/fume-logo-black.png" alt="FUME" width={1240} height={270} className="h-5 w-auto sm:h-6" priority />
          <p className="lp2-body-text mt-1.5 truncate text-[10px] font-bold uppercase tracking-[0.16em] sm:text-[11px]">
            Metabolic Reset Framework
          </p>
        </div>

        <a href={LP2_CHECKOUT} className="lp2-header-cta shrink-0">
          <span>Book @ ₹{OFFER.price}</span>
        </a>
      </div>
    </header>
  );
}
