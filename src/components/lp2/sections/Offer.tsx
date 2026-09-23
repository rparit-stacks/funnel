import { Lp2Button, Lp2Section } from "@/components/lp2/ui";
import { funnel, valueStack } from "@/data/funnel";

const { price, originalPrice, name } = funnel.primaryOffer;
const savePercent = Math.round((1 - price / originalPrice) * 100);

const included = [
  `${name} with Dr. Uma`,
  `Bonus toolkit worth ₹${funnel.pricing.bonusTotalValue.toLocaleString("en-IN")}`,
  "100% money-back guarantee",
];

function Tick() {
  return (
    <span className="lp2-inc-tick" aria-hidden>
      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

export function Offer() {
  return (
    <Lp2Section id="consultation-form" className="lp2-anchor !pt-2 sm:!pt-4">
      <div className="mx-auto w-full max-w-[520px]">
        <div className="lp2-card px-5 pb-7 pt-8 sm:px-8 sm:pb-9 sm:pt-10">
          <p className="text-center text-[10.5px] font-black uppercase tracking-[0.16em] lp2-accent">
            {name}
          </p>

          <div className="mt-4 flex flex-wrap items-end justify-center gap-x-3 gap-y-2">
            <span className="lp2-price">
              <span className="lp2-price-cur">₹</span>
              {price}
            </span>
            <span className="lp2-strike pb-2">₹{originalPrice}</span>
            <span className="lp2-save mb-2.5">SAVE {savePercent}%</span>
          </div>

          <p className="lp2-body-text mt-2 text-center text-[12.5px] font-semibold sm:text-[13.5px]">
            Total value ₹{valueStack.totalValue.toLocaleString("en-IN")} · {valueStack.condition}
          </p>

          <div className="lp2-divider my-6" />

          <ul className="space-y-3">
            {included.map((item) => (
              <li key={item} className="lp2-inc">
                <Tick />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <Lp2Button>{funnel.cta.primary}</Lp2Button>
          </div>

          <p className="lp2-body-text mt-3.5 text-center text-[11.5px] leading-relaxed sm:text-[12.5px]">
            {funnel.refund}
          </p>
        </div>
      </div>
    </Lp2Section>
  );
}
