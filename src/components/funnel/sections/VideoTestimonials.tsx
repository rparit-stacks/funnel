import Image from "next/image";
import { Section } from "@/components/funnel/ui";
import { videoTestimonials } from "@/data/funnel";
import { media } from "@/data/media";

export function VideoTestimonials() {
  return (
    <Section className="space-y-4">
      <h2 className="text-center text-balance text-xl font-extrabold tracking-tight text-ink">
        Hear It From People Who Took The Call
      </h2>

      <div className="space-y-3">
        {videoTestimonials.map((item, index) => (
          <article
            key={`${item.person}-${index}`}
            className="tilt-3d overflow-hidden rounded-2xl border border-line bg-surface shadow-soft"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={media.testimonialThumbs[index % media.testimonialThumbs.length]}
                alt=""
                fill
                sizes="(max-width: 480px) 100vw, 512px"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/35">
                <span className="badge-3d badge-3d-cta flex h-12 w-12 items-center justify-center rounded-full text-white">
                  <svg className="h-5 w-5 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="space-y-1 p-3.5 text-center sm:p-4">
              <p className="text-[11px] font-bold uppercase tracking-wide text-teal">
                {item.person}
              </p>
              <h3 className="text-[14px] font-bold leading-snug text-ink sm:text-[15px]">
                {item.headline}
              </h3>
              {"description" in item && item.description ? (
                <p className="text-xs text-muted">{item.description}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
