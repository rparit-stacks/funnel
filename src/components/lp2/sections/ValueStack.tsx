import { Lp2Button, Lp2Section } from "@/components/lp2/ui";
import { funnel, valueStack } from "@/data/funnel";

export function ValueStack() {
  return (
    <Lp2Section>
      <div className="lp2-band mx-auto flex max-w-2xl flex-col items-center px-6 py-10 text-center sm:px-10 sm:py-14">
        <p className="lp2-band-label">Total value</p>

        <p className="lp2-band-strike mt-2">
          ₹{valueStack.totalValue.toLocaleString("en-IN")}
        </p>

        <div className="my-4 flex justify-center sm:my-5">
          <span className="lp2-band-arrow" aria-hidden>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-6-6m6 6l6-6" />
            </svg>
          </span>
        </div>

        <p className="lp2-band-price">₹{valueStack.offerPrice}</p>

        <h2 className="mt-3 text-balance text-[1.35rem] font-black leading-[1.15] tracking-[-0.02em] text-white sm:text-[1.7rem] lg:text-[2rem]">
          Yours Today for Just ₹{valueStack.offerPrice}!
        </h2>

        <p className="mt-2.5 text-[12.5px] font-bold text-white/80 sm:text-[13.5px]">
          ({valueStack.condition})
        </p>

        <div className="mt-7 w-full max-w-md">
          <Lp2Button className="lp2-btn-invert">{funnel.cta.primary}</Lp2Button>
        </div>

        <p className="lp2-on-band mt-3.5 max-w-md text-pretty text-[11.5px] leading-relaxed sm:text-[12.5px]">
          {funnel.refund}
        </p>
      </div>
    </Lp2Section>
  );
}
