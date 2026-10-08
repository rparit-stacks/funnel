import Image from "next/image";
import { Lp2Section } from "@/components/lp2/ui";
import { media } from "@/data/media";

export function Community() {
  return (
    <Lp2Section innerClassName="space-y-5 sm:space-y-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="lp2-meta">Community</p>
        <h2 className="lp2-h2 mt-3">A Growing Community, Coached Live</h2>
      </div>

      <article className="lp2-shot mx-auto max-w-4xl">
        <div className="relative aspect-video w-full">
          <Image
            src={media.team.communityZoom}
            alt="Dr. Uma presenting to the FUME community on a live session"
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </article>
    </Lp2Section>
  );
}
