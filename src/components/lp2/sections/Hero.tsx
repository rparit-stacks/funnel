import Image from "next/image";
import { Lp2Button, Lp2Eyebrow, Lp2Section } from "@/components/lp2/ui";
import { funnel, heroContent } from "@/data/funnel";
import { media } from "@/data/media";
import { OFFER } from "@/data/offer";

const ACCENT_PHRASE = "Metabolic Reset Formula";

const trustPills = [
  `₹${OFFER.price} today · was ₹${OFFER.originalPrice}`,
  "100% money-back",
  "1:1 with Dr. Uma",
];

export function Hero() {
  const [beforeAccent, afterAccent] = heroContent.headline.split(ACCENT_PHRASE);

  return (
    <Lp2Section
      className="!pt-8 sm:!pt-12"
      backdrop={
        <div className="lp2-grid" aria-hidden>
          <div className="lp2-grid-shine">
            <span className="lp2-grid-band" />
          </div>
        </div>
      }
    >
      {/* Mobile order: copy → video → CTA → trust. Desktop: copy left, video right. */}
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.02fr_1fr] lg:items-center lg:gap-14">
        <div className="space-y-5 lg:col-start-1 lg:row-start-1 lg:self-end">
          <div className="lp2-in">
            <Lp2Eyebrow>{heroContent.eyebrow}</Lp2Eyebrow>
          </div>

          <h1 className="lp2-in-2 text-balance text-[2rem] font-black leading-[1.07] tracking-[-0.03em] sm:text-[2.6rem] lg:text-[3.25rem]">
            {beforeAccent}
            <span className="lp2-accent">{ACCENT_PHRASE}</span>
            {afterAccent}
          </h1>

          <p className="lp2-in-3 lp2-body-text text-pretty text-[14.5px] leading-[1.65] sm:text-[16px] lg:text-[17px]">
            {heroContent.subheadline}
          </p>
        </div>

        <div className="lp2-in-3 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
          <div className="relative">
            <span className="lp2-stage-glow" aria-hidden />
            <div className="lp2-stage">
              <div className="relative aspect-video w-full">
                <Image
                  src={media.heroThumb}
                  alt="Metabolic reset presentation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-cover opacity-95"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/70 via-[#0a0a0b]/10 to-[#0a0a0b]/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5">
                  <span className="lp2-play">
                    <svg className="h-7 w-7 translate-x-[3px] fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="lp2-video-label">{heroContent.videoLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5 lg:col-start-1 lg:row-start-2 lg:self-start">
          <div className="lp2-in-4 lg:max-w-md">
            <Lp2Button>{funnel.cta.primary}</Lp2Button>
          </div>

          <div className="lp2-in-5 flex flex-wrap gap-2">
            {trustPills.map((pill) => (
              <span key={pill} className="lp2-pill">
                <svg
                  className="h-3 w-3 shrink-0 text-[#6d28d9]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {pill}
              </span>
            ))}
          </div>

          <div className="lp2-in-5 lp2-trust flex items-center gap-3.5 p-3.5">
            <div className="flex shrink-0 -space-x-2.5">
              {media.avatars.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={36}
                  height={36}
                  className="lp2-avatar h-9 w-9 shrink-0"
                  priority={i < 2}
                />
              ))}
            </div>
            <p className="lp2-body-text min-w-0 text-[11.5px] font-semibold leading-snug sm:text-[12.5px]">
              {heroContent.socialProof}
            </p>
          </div>
        </div>
      </div>
    </Lp2Section>
  );
}
