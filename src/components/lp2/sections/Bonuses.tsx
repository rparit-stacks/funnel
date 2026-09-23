import Image from "next/image";
import { InView } from "@/components/lp2/InView";
import { Lp2Eyebrow, Lp2Section } from "@/components/lp2/ui";
import { bonuses, funnel } from "@/data/funnel";
import { media } from "@/data/media";

const bonusValue = `₹${funnel.pricing.bonusTotalValue.toLocaleString("en-IN")}`;

export function Bonuses() {
  return (
    <Lp2Section innerClassName="space-y-9 sm:space-y-12">
      <div className="space-y-4 lg:max-w-2xl">
        <Lp2Eyebrow>Included free</Lp2Eyebrow>
        <h2 className="lp2-h2">
          Unlock These Powerful Tools When You{" "}
          <span className="lp2-accent">Claim Your Call Today!</span>
        </h2>
      </div>

      <div className="lp2-media">
        <div className="relative h-44 w-full sm:h-56 lg:h-72">
          <Image
            src={media.food}
            alt="Healthy meal templates"
            fill
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 sm:p-5">
            <span className="lp2-chip">Worth {bonusValue}</span>
            <span className="lp2-chip">Yours free</span>
          </div>
        </div>
      </div>

      <InView className="lp2-rail mx-auto w-full max-w-3xl">
        <span className="lp2-rail-line" aria-hidden>
          <span className="lp2-beam">
            <span className="lp2-beam-core" />
          </span>
        </span>

        <ul className="space-y-7 sm:space-y-8">
          {bonuses.map((bonus, index) => (
            <li
              key={bonus.number}
              /* items-start, small offset: badge sits right where the rail left
                 off, close to the card's top edge. Centering it in the card
                 instead leaves a dead gap of empty rail above short/tall
                 badges — exactly the "big gap after the image" problem. */
              className="flex items-start gap-4 sm:gap-6"
              style={{ "--i": index } as React.CSSProperties}
            >
              <span className="lp2-num mt-1.5 sm:mt-2">
                {String(bonus.number).padStart(2, "0")}
              </span>
              <div className="lp2-tile lp2-tile-grid min-w-0 flex-1 p-6 sm:p-7">
                <h3 className="text-[15px] font-extrabold leading-snug tracking-[-0.01em] sm:text-[16.5px]">
                  {bonus.name}
                </h3>
                <p className="lp2-body-text mt-2 text-[12.5px] leading-[1.6] sm:text-[13.5px]">
                  {bonus.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </InView>
    </Lp2Section>
  );
}
