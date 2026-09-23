import { CtaButton, RefundNote, Section } from "@/components/funnel/ui";
import { funnel } from "@/data/funnel";

export function FinalCta() {
  return (
    <Section className="space-y-3">
      <div className="card-3d space-y-3 rounded-2xl border border-line bg-surface p-5 text-center sm:p-6">
        <p className="text-[11px] font-bold uppercase tracking-wider text-muted">Register now</p>
        <div className="price-tag-3d flex items-end justify-center gap-2 px-4 py-3">
          <span className="text-4xl font-black text-ink">₹{funnel.primaryOffer.price}</span>
          <span className="pb-1 text-sm text-muted line-through">
            ₹{funnel.primaryOffer.originalPrice}
          </span>
        </div>
        <CtaButton>{funnel.cta.register}</CtaButton>
        <RefundNote />
      </div>
    </Section>
  );
}
