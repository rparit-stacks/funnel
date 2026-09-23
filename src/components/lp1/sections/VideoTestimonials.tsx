import Image from "next/image";
import { Lp1Heading, Lp1Section } from "@/components/lp1/ui";
import { videoTestimonials } from "@/data/funnel";
import { media } from "@/data/media";

export function VideoTestimonials() {
  return (
    <Lp1Section wide className="space-y-7">
      <Lp1Heading className="text-center">
        Hear It From <span className="lp1-grad-text">People Who Took The Call</span>
      </Lp1Heading>

      <div className="mt-5 grid gap-6 lg:grid-cols-2">
        {videoTestimonials.map((item, index) => (
          <article key={`${item.person}-${index}`} className="lp1-glass overflow-hidden">
            <div className="relative aspect-video w-full">
              <Image
                src={media.testimonialThumbs[index % media.testimonialThumbs.length]}
                alt=""
                fill
                sizes="(max-width: 480px) 100vw, 512px"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#0b0616]/45">
                <span className="lp1-play lp1-play-sm">
                  <svg className="h-5 w-5 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="space-y-2 p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-fuchsia-300">
                {item.person}
              </p>
              <h3 className="text-[14.5px] font-extrabold leading-snug">{item.headline}</h3>
              {"description" in item && item.description ? (
                <p className="lp1-dim text-[12.5px]">{item.description}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Lp1Section>
  );
}
