import { Lp1Button, Lp1RefundNote, Lp1Section } from "@/components/lp1/ui";
import { funnel } from "@/data/funnel";

export function OfferTicket() {
  return (
    <Lp1Section id="consultation-form">
      <div className="lp1-ticket overflow-hidden">
        <div className="space-y-2 px-5 pb-8 pt-8 text-center sm:px-7">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-fuchsia-300">
            {funnel.primaryOffer.name}
          </p>
          <div className="flex items-end justify-center gap-3">
            <span className="lp1-price">₹{funnel.primaryOffer.price}</span>
            <span className="lp1-dim pb-2 text-base line-through">
              ₹{funnel.primaryOffer.originalPrice}
            </span>
          </div>
          <p className="lp1-dim text-[11px] font-semibold uppercase tracking-[0.18em]">
            Admit one · 1:1 session
          </p>
        </div>

        <div className="lp1-tear mx-5 sm:mx-7" aria-hidden />

        <div className="space-y-4 px-5 pb-8 pt-8 sm:px-7">
          <Lp1Button>{funnel.cta.primary}</Lp1Button>
          <Lp1RefundNote />
        </div>
      </div>
    </Lp1Section>
  );
}
