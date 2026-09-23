import Image from "next/image";
import { Section } from "@/components/funnel/ui";
import { transformations } from "@/data/funnel";
import { media } from "@/data/media";

export function Transformations() {
  return (
    <Section className="space-y-4">
      <h2 className="text-center text-xl font-extrabold tracking-tight text-ink">
        Real transformations
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {transformations.map((item, index) => (
          <article
            key={`${item.person}-${item.result}`}
            className="tilt-3d overflow-hidden rounded-2xl border border-line bg-surface shadow-soft"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={media.transformations[index % media.transformations.length]}
                alt={`${item.person} transformation`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-0.5 p-3">
              <h3 className="text-sm font-bold text-ink">{item.person}</h3>
              <p className="text-xs leading-snug text-muted">{item.result}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
