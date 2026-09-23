import { CtaButton, RefundNote, Section } from "@/components/funnel/ui";
import { funnel, valueStack } from "@/data/funnel";

export function ValueStack() {
  return (
    <Section className="space-y-4 text-center">
      <div className="card-3d-dark space-y-2 rounded-2xl bg-gradient-to-b from-[#1c2436] to-ink px-4 py-6 text-white sm:px-6 sm:py-8">
        <p className="text-sm font-medium text-white/70">
          Total Value: ₹{valueStack.totalValue.toLocaleString("en-IN")}
        </p>
        <h2 className="text-balance text-xl font-extrabold leading-snug sm:text-2xl">
          Yours Today for Just ₹{valueStack.offerPrice}!
        </h2>
        <p className="text-xs font-semibold text-rose-300">({valueStack.condition})</p>
        <div className="pt-2">
          <CtaButton>{funnel.cta.primary}</CtaButton>
        </div>
        <RefundNote className="!text-white/75" />
      </div>
    </Section>
  );
}
