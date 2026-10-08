import Image from "next/image";
import { Lp2Section } from "@/components/lp2/ui";
import { media } from "@/data/media";

const awards = [
  { src: media.team.jaganAward, name: "Jagan", pos: "50% 30%" },
  { src: media.team.umaAward, name: "Dr. Uma", pos: "50% 20%" },
] as const;

export function Recognition() {
  return (
    <Lp2Section innerClassName="space-y-6 sm:space-y-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="lp2-meta">Recognition</p>
        <h2 className="lp2-h2 mt-3">
          Honoured at the <span className="lp2-accent">Unicorn Coach Summit</span>
        </h2>
      </div>

      <ul className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:gap-5">
        {awards.map((item) => (
          <li key={item.name}>
            <article className="lp2-shot">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={item.src}
                  alt={`${item.name} at the Unicorn Coach Summit Wall of Fame`}
                  fill
                  sizes="(max-width: 768px) 46vw, 360px"
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
