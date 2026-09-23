import Image from "next/image";
import { heroContent } from "@/data/funnel";
import { media } from "@/data/media";
import { Section } from "@/components/funnel/ui";

export function HeroVideo() {
  return (
    <Section className="pt-2 sm:pt-3">
      <div className="hero-stage card-3d border border-line bg-surface px-4 py-5 sm:px-5 sm:py-6">
        <div className="hero-grid" aria-hidden />
        <div className="hero-grid-glow" aria-hidden />

        <div className="relative z-[1] space-y-4 text-center sm:space-y-5">
          <p className="anim-fade-up inline-flex items-center gap-2 rounded-full bg-teal-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-teal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
            {heroContent.eyebrow}
          </p>

          <h1 className="anim-fade-up-delay text-balance text-[1.55rem] font-extrabold leading-tight tracking-tight text-ink sm:text-[1.85rem]">
            {heroContent.headline}
          </h1>

          <p className="anim-fade-up-delay text-pretty text-[14px] leading-relaxed text-muted sm:text-[15px]">
            {heroContent.subheadline}
          </p>

          <div className="flex flex-col items-center gap-2 rounded-2xl border border-line/80 bg-white/80 px-3 py-3 backdrop-blur-[2px] sm:flex-row sm:justify-center sm:gap-3">
            <div className="flex -space-x-2">
              {media.avatars.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                  priority={i < 2}
                />
              ))}
            </div>
            <p className="text-xs font-medium text-ink/80 sm:text-left">
              {heroContent.socialProof}
            </p>
          </div>

          <div className="tilt-3d overflow-hidden rounded-2xl border border-ink/10 bg-ink shadow-soft">
            <div className="relative aspect-video w-full">
              <Image
                src={media.heroThumb}
                alt="Metabolic reset presentation"
                fill
                sizes="(max-width: 480px) 100vw, 512px"
                className="object-cover opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="play-ring badge-3d badge-3d-cta anim-float flex h-14 w-14 items-center justify-center rounded-full text-white">
                  <svg className="h-6 w-6 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  {heroContent.videoLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
