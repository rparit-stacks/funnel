import { CtaButton, RefundNote, Section } from "@/components/funnel/ui";
import { funnel } from "@/data/funnel";

export function PrimaryOfferCta() {
  return (
    <Section id="consultation-form" className="space-y-3">
      <div className="card-3d space-y-3 rounded-2xl border border-line bg-surface p-4 sm:p-5">
        <div className="price-tag-3d flex items-end justify-center gap-2 px-4 py-3">
          <span className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
            ₹{funnel.primaryOffer.price}
          </span>
          <span className="pb-1 text-sm text-muted line-through">
            ₹{funnel.primaryOffer.originalPrice}
          </span>
        </div>
        <CtaButton>{funnel.cta.primary}</CtaButton>
        <RefundNote />
      </div>
    </Section>
  );
}
