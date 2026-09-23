import { Lp2Button, Lp2Section } from "@/components/lp2/ui";
import { decision, funnel } from "@/data/funnel";

const ACCENT_PHRASE = "Your Moment to Decide!";

function IconX() {
  return (
    <span className="lp2-opticon lp2-opticon-bad" aria-hidden>
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
      </svg>
    </span>
  );
}

function IconCheck() {
  return (
    <span className="lp2-opticon lp2-opticon-good" aria-hidden>
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

export function Decision() {
  const [bad, good] = decision.options;
  const [beforeAccent, afterAccent] = decision.headline.split(ACCENT_PHRASE);

  return (
    <Lp2Section innerClassName="space-y-9 sm:space-y-11">
      <h2 className="lp2-h2 mx-auto max-w-3xl text-center">
        {beforeAccent}
        <span className="lp2-accent">{ACCENT_PHRASE}</span>
        {afterAccent}
      </h2>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:items-center">
        {/* the one they should not pick — deliberately flat and muted */}
        <div className="lp2-optbad p-6 sm:p-7">
          <IconX />
          <p className="lp2-optlabel mt-5 text-[#9a9aa6]">Option {bad.option}</p>
          <h3 className="mt-2 text-[17px] font-extrabold tracking-[-0.02em] text-[#6f6f7c] sm:text-[19px]">
            {bad.title}
          </h3>
          <p className="mt-2.5 text-[13px] leading-[1.65] text-[#8b8b98] sm:text-[14px]">
            {bad.description}
          </p>
        </div>

        {/* the one they should — larger, lit, in brand colour */}
        <div className="lp2-optgood p-6 sm:p-8 md:-my-3 md:py-10">
          <IconCheck />
          <p className="lp2-optlabel mt-5 text-violet-200">Option {good.option}</p>
          <h3 className="mt-2 text-[19px] font-black tracking-[-0.02em] text-white sm:text-[22px]">
            {good.title}
          </h3>
          <p className="mt-2.5 text-[13px] leading-[1.65] text-white/85 sm:text-[14.5px]">
            {good.description}
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-md flex-col items-center gap-4">
        <p className="lp2-body-text text-balance text-center text-[13.5px] leading-relaxed sm:text-[14.5px]">
          {decision.closing}
        </p>
        <Lp2Button>{funnel.cta.primary}</Lp2Button>
        <p className="lp2-body-text text-pretty text-center text-[11.5px] leading-relaxed sm:text-[12.5px]">
          {funnel.refund}
        </p>
      </div>
    </Lp2Section>
  );
}
