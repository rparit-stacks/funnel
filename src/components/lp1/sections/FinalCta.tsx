import { Lp1Button, Lp1RefundNote, Lp1Section } from "@/components/lp1/ui";
import { funnel } from "@/data/funnel";

export function FinalCta() {
  return (
    <Lp1Section bleed>
      <div className="lp1-band px-4 py-12 lg:py-16">
        <div className="lp1-band-inner mx-auto w-full max-w-md space-y-4 text-center sm:max-w-lg lg:max-w-2xl">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/75">
            {funnel.cta.register}
          </p>
          <div className="flex items-end justify-center gap-3">
            <span className="lp1-price text-white">₹{funnel.primaryOffer.price}</span>
            <span className="pb-2 text-base text-white/70 line-through">
              ₹{funnel.primaryOffer.originalPrice}
            </span>
          </div>
          <div className="mx-auto max-w-sm">
            <Lp1Button className="lp1-btn-invert">{funnel.cta.register}</Lp1Button>
          </div>
          <Lp1RefundNote className="lp1-on-band" />
        </div>
      </div>
    </Lp1Section>
  );
}
