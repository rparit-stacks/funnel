import Image from "next/image";
import { Lp2Button, Lp2Section } from "@/components/lp2/ui";
import { founder, funnel } from "@/data/funnel";
import { media } from "@/data/media";

const ACCENT_PHRASE = "Truly Priceless";

export function PriceFounder() {
  return (
    <Lp2Section>
      <div className="grid gap-9 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:gap-14">
        {/* portrait */}
        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
          <span className="lp2-stage-glow" aria-hidden />
          <article className="lp2-shot">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={media.team.umaPortrait}
                alt={founder.person}
                fill
                sizes="(max-width: 1024px) 90vw, 430px"
                className="object-cover object-top"
              />
              <div className="lp2-shot-scrim" />
              <div className="absolute inset-x-0 bottom-0 space-y-2 p-5">
                <span className="lp2-result">{founder.person}</span>
                <p className="text-[11.5px] font-semibold leading-snug text-white/75">
                  {founder.role}
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* statement + CTA */}
        <div className="text-center lg:text-left">
          <p className="lp2-meta">Meet your coach</p>

          <h2 className="mt-3 text-balance text-[2rem] font-black leading-[1.05] tracking-[-0.035em] sm:text-[2.6rem] lg:text-[3.1rem]">
            Your Health is <span className="lp2-accent">{ACCENT_PHRASE}</span>
          </h2>

          <p className="lp2-body-text mt-4 text-pretty text-[14px] leading-[1.65] sm:text-[15.5px]">
            {founder.introHeadline}
          </p>

          <div className="mx-auto mt-7 w-full max-w-md lg:mx-0">
            <Lp2Button>{funnel.cta.primary}</Lp2Button>
          </div>

          <p className="lp2-body-text mx-auto mt-3.5 max-w-md text-pretty text-[11.5px] leading-relaxed sm:text-[12.5px] lg:mx-0">
            {funnel.refund}
          </p>
        </div>
      </div>
    </Lp2Section>
  );
}
