import { Lp1Button, Lp1RefundNote, Lp1Section } from "@/components/lp1/ui";
import { funnel, valueStack } from "@/data/funnel";

export function ValueStack() {
  return (
    <Lp1Section bleed>
      <div className="lp1-band px-4 py-10 sm:py-14 lg:py-16">
        <div className="lp1-band-inner mx-auto w-full max-w-md space-y-3 text-center sm:max-w-lg lg:max-w-2xl">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/75">
            Total Value: ₹{valueStack.totalValue.toLocaleString("en-IN")}
          </p>
          <h2 className="text-balance text-[1.7rem] font-black leading-tight tracking-tight text-white sm:text-[2rem] lg:text-[2.5rem]">
            Yours Today for Just ₹{valueStack.offerPrice}!
          </h2>
          <p className="text-xs font-bold text-white/90">({valueStack.condition})</p>
          <div className="mx-auto max-w-sm pt-2">
            <Lp1Button className="lp1-btn-invert">
              {funnel.cta.primary}
            </Lp1Button>
          </div>
          <Lp1RefundNote className="lp1-on-band" />
        </div>
      </div>
    </Lp1Section>
  );
}
