import Image from "next/image";
import { InView } from "@/components/lp2/InView";
import { Lp2Section } from "@/components/lp2/ui";
import { founder } from "@/data/funnel";
import { media } from "@/data/media";

const stats = [
  { label: "Lost (Uma & Jagan)", value: "36 kg" },
  { label: "Helped", value: "15,000+" },
  { label: "Mission", value: "1M" },
];

export function FounderStory() {
  return (
    <Lp2Section>
      <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
        {/* left: identity + scoreboard */}
        <div className="lg:sticky lg:top-28">
          <p className="lp2-meta">The story</p>
          <h2 className="lp2-h2 mt-3">{founder.person}</h2>
          <span className="lp2-accentbar mt-4 block" />
          <p className="lp2-body-text mt-4 max-w-sm text-[13px] leading-relaxed sm:text-[14px]">
            {founder.role}
          </p>

          <div className="lp2-shot mt-6 max-w-sm">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={media.team.couple}
                alt="Dr. Uma and Jagan, co-founders of FUME"
                fill
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <InView className="mt-7">
            <div className="lp2-statcard grid grid-cols-3 px-2 py-6 sm:py-7">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="lp2-statcol lp2-up"
                  style={{ "--i": index } as React.CSSProperties}
                >
                  <span className="lp2-statnum">{stat.value}</span>
                  <p className="lp2-statlabel">{stat.label}</p>
                </div>
              ))}
            </div>
          </InView>
        </div>

        {/* right: story */}
        <div className="lp2-panel lp2-tile-grid p-6 sm:p-8 lg:p-10">
          <div className="space-y-4 text-[13.5px] leading-[1.75] sm:text-[15px]">
            <p className="lp2-body-text">{founder.story}</p>
            <p className="lp2-body-text">{founder.previousAttempts}</p>
            <p className="font-bold text-[#0a0a0b]">{founder.personalResult}</p>
            <p className="lp2-body-text">
              <span className="font-bold text-[#0a0a0b]">Created:</span> {founder.createdSystem}.{" "}
              {founder.claimedReach}
            </p>
            <p className="lp2-body-text">
              <span className="font-bold text-[#0a0a0b]">Mission:</span> {founder.mission}
            </p>
            <p className="lp2-body-text">{founder.philosophy}</p>
          </div>

          <div className="mt-7 border-t border-[color:var(--lp2-line)] pt-6">
            <span className="lp2-qmark" aria-hidden>
              &ldquo;
            </span>
            <p className="lp2-pull -mt-3 text-balance">{founder.closing}</p>
          </div>
        </div>
      </div>
    </Lp2Section>
  );
}
