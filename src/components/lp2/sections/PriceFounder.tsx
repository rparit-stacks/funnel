import { MentorCarousel } from "@/components/lp2/MentorCarousel";
import { Lp2Button, Lp2Section } from "@/components/lp2/ui";
import { founder, funnel, mentors } from "@/data/funnel";
import { media } from "@/data/media";

const ACCENT_PHRASE = "Truly Priceless";

export function PriceFounder() {
  return (
    <Lp2Section>
      <div className="grid gap-9 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:gap-14">
        {/* coaches: swipeable, auto-advancing */}
        <div className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
          <MentorCarousel
            slides={mentors.map((mentor) => ({
              name: mentor.name,
              role: mentor.role,
              src: media.team[mentor.photo],
              pos: mentor.pos,
            }))}
          />
        </div>

        {/* statement + CTA */}
        <div className="text-center lg:text-left">
          <p className="lp2-meta">Meet your coaches</p>

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
