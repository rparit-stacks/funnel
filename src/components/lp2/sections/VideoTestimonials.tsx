import Image from "next/image";
import { Lp2Section } from "@/components/lp2/ui";
import { videoTestimonials } from "@/data/funnel";
import { media } from "@/data/media";

const ACCENT_PHRASE = "People Who Took The Call";

function Play({ small = false }: { small?: boolean }) {
  return (
    <span className={`lp2-play ${small ? "lp2-play-sm" : ""}`} aria-hidden>
      <svg
        className={small ? "h-5 w-5 translate-x-[2px]" : "h-7 w-7 translate-x-[3px]"}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

export function VideoTestimonials() {
  const [featured, ...rest] = videoTestimonials;

  return (
    <Lp2Section innerClassName="space-y-8 sm:space-y-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="lp2-meta">Real stories</p>
          <h2 className="lp2-h2 mt-3">
            Hear It From <span className="lp2-accent">{ACCENT_PHRASE}</span>
          </h2>
        </div>
        <div className="shrink-0 sm:text-right">
          <span className="lp2-count">{String(videoTestimonials.length).padStart(2, "0")}</span>
          <p className="lp2-meta mt-1">Stories</p>
        </div>
      </div>

      {/* featured */}
      <div className="relative">
        <span className="lp2-stage-glow" aria-hidden />
        <article className="lp2-vhero">
          <div className="relative aspect-video w-full">
            <Image
              src={media.testimonialThumbs[0]}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="lp2-vscrim" />

            <div className="absolute inset-0 flex items-center justify-center">
              <Play />
            </div>

            <div className="absolute inset-x-0 bottom-0 space-y-2.5 p-5 sm:p-7 lg:p-9">
              <span className="lp2-result">{featured.person}</span>
              <h3 className="max-w-2xl text-balance text-[17px] font-black leading-[1.2] tracking-[-0.02em] text-white sm:text-[22px] lg:text-[26px]">
                {featured.headline}
              </h3>
            </div>
          </div>
        </article>
      </div>

      {/* the rest */}
      <div className="-mx-5 px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
        <ul className="lp2-hrail">
          {rest.map((item, index) => (
            <li key={`${item.person}-${index}`}>
              <article className="lp2-shot">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={media.testimonialThumbs[(index + 1) % media.testimonialThumbs.length]}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 72vw, (max-width: 1024px) 42vw, 340px"
                    className="object-cover"
                  />
                  <div className="lp2-shot-scrim" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play small />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 space-y-2 p-4">
                    <span className="lp2-result">{item.person}</span>
                    <h3 className="text-balance text-[14px] font-extrabold leading-snug tracking-[-0.01em] text-white sm:text-[15px]">
                      {item.headline}
                    </h3>
                    {"description" in item && item.description ? (
                      <p className="text-[11.5px] leading-snug text-white/65">{item.description}</p>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <p className="lp2-body-text text-center text-[11px] font-bold uppercase tracking-[0.18em] lg:hidden">
        Swipe to see more →
      </p>
    </Lp2Section>
  );
}
