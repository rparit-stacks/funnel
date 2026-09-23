import { Lp2Button, Lp2Section } from "@/components/lp2/ui";
import { funnel } from "@/data/funnel";

const { price, originalPrice } = funnel.primaryOffer;
const savePercent = Math.round((1 - price / originalPrice) * 100);

export function FinalCta() {
  return (
    <Lp2Section
      className="!py-14 sm:!py-20"
      backdrop={<div className="lp2-bleed" aria-hidden />}
    >
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="lp2-meta !text-white/70">{funnel.cta.register}</p>

        <div className="mt-4 flex flex-wrap items-end justify-center gap-x-3 gap-y-2">
          <span className="lp2-band-price">₹{price}</span>
          <span className="lp2-band-strike pb-2">₹{originalPrice}</span>
        </div>

        <p className="mt-2 text-[12.5px] font-black uppercase tracking-[0.18em] text-white/75 sm:text-[13.5px]">
          Save {savePercent}% · Limited seats
        </p>

        <div className="mt-7 w-full max-w-md">
          <Lp2Button className="lp2-btn-invert">
            {funnel.cta.register}
          </Lp2Button>
        </div>

        <p className="lp2-on-band mt-3.5 max-w-md text-pretty text-[11.5px] leading-relaxed sm:text-[12.5px]">
          {funnel.refund}
        </p>
      </div>
    </Lp2Section>
  );
}
