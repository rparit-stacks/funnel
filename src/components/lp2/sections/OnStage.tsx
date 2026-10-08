import Image from "next/image";
import { Lp2Section } from "@/components/lp2/ui";
import { media } from "@/data/media";

export function OnStage() {
  return (
    <Lp2Section innerClassName="space-y-6 sm:space-y-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="lp2-meta">Your mentors</p>
        <h2 className="lp2-h2 mt-3">Dr. Uma &amp; Jagan, live on stage</h2>
      </div>

      <article className="lp2-shot mx-auto max-w-4xl">
        <div className="relative aspect-video w-full">
          <Image
            src={media.team.liveEvent}
            alt="Dr. Uma and Jagan on stage at a live event"
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </article>

      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {media.team.stage.map((item) => (
          <li key={item.src}>
            <article className="lp2-shot">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 46vw, 280px"
                  className="object-cover"
                  style={{ objectPosition: item.pos }}
                  loading="lazy"
                />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Lp2Section>
  );
}
