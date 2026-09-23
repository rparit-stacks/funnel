import Image from "next/image";
import { Lp1Button, Lp1Eyebrow, Lp1Section } from "@/components/lp1/ui";
import { funnel, heroContent } from "@/data/funnel";
import { media } from "@/data/media";
import { OFFER } from "@/data/offer";

export function Hero() {
  return (
    <Lp1Section wide className="pt-5 sm:pt-8">
      {/* Mobile: copy → video → proof/CTA. Desktop: copy+proof left, video right. */}
      <div className="flex flex-col gap-7 lg:grid lg:grid-cols-2 lg:gap-14">
        <div className="space-y-5 lg:col-start-1 lg:row-start-1 lg:self-end">
          <div className="lp1-enter">
            <Lp1Eyebrow>{heroContent.eyebrow}</Lp1Eyebrow>
          </div>

          <h1 className="lp1-enter-2 text-balance text-[1.95rem] font-black leading-[1.1] tracking-tight sm:text-[2.4rem] lg:text-[2.9rem]">
            <span className="lp1-grad-text">{heroContent.headline}</span>
          </h1>

          <p className="lp1-enter-3 lp1-dim text-pretty text-[14px] leading-relaxed sm:text-[15px] lg:text-base">
            {heroContent.subheadline}
          </p>
        </div>

        <div className="lp1-enter-3 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
          <div className="lp1-stage">
            <div className="relative aspect-video w-full">
              <Image
                src={media.heroThumb}
                alt="Metabolic reset presentation"
                fill
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-cover opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0616] via-[#17092e]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="lp1-play">
                  <svg className="h-7 w-7 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="lp1-outline bg-black/50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em]">
                  {heroContent.videoLabel}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5 lg:col-start-1 lg:row-start-2 lg:self-start">
          <div className="lp1-enter-3 flex flex-wrap gap-2">
            <span className="lp1-glass-flat px-3 py-2 text-[10px] font-black uppercase tracking-wider">
              <span className="lp1-grad-text">₹{OFFER.price} only</span>
            </span>
            <span className="lp1-glass-flat px-3 py-2 text-[10px] font-black uppercase tracking-wider">
              4,000+ reset
            </span>
            <span className="lp1-glass-flat px-3 py-2 text-[10px] font-black uppercase tracking-wider">
              1:1 session
            </span>
          </div>

          <div className="lp1-enter-4 lp1-glass-flat flex items-center gap-3.5 p-3.5">
            <div className="flex shrink-0 -space-x-2.5">
              {media.avatars.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={34}
                  height={34}
                  className="h-[34px] w-[34px] shrink-0 rounded-full object-cover ring-2 ring-[#a855f7]/60"
                  priority={i < 2}
                />
              ))}
            </div>
            <p className="lp1-dim min-w-0 text-[11.5px] font-semibold leading-snug">
              {heroContent.socialProof}
            </p>
          </div>

          <div className="lp1-enter-4 lg:max-w-md">
            <Lp1Button>{funnel.cta.primary}</Lp1Button>
          </div>
        </div>
      </div>
    </Lp1Section>
  );
}
