import Image from "next/image";
import { Lp1Eyebrow, Lp1Heading, Lp1Section } from "@/components/lp1/ui";
import { bonuses } from "@/data/funnel";
import { media } from "@/data/media";

export function Bonuses() {
  const [lead, ...rest] = bonuses;

  return (
    <Lp1Section wide className="space-y-7">
      <div className="space-y-3">
        <Lp1Eyebrow>Included free</Lp1Eyebrow>
        <Lp1Heading>
          Unlock These Powerful Tools When You{" "}
          <span className="lp1-grad-text">Claim Your Call Today!</span>
        </Lp1Heading>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
        <article className="lp1-bento col-span-2">
          <div className="relative h-32 w-full sm:h-40 lg:h-52">
            <Image
              src={media.food}
              alt="Healthy meal templates"
              fill
              sizes="(max-width: 480px) 100vw, 512px"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120826] via-[#120826]/40 to-transparent" />
            <span className="lp1-num absolute bottom-2 right-3">0{lead.number}</span>
          </div>
          <div className="relative space-y-1.5 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-fuchsia-300">
              Bonus #{lead.number}
            </p>
            <h3 className="text-[16px] font-extrabold leading-snug">{lead.name}</h3>
            <p className="lp1-dim text-[12.5px] leading-relaxed">{lead.description}</p>
          </div>
        </article>

        {rest.map((bonus) => (
          <article key={bonus.number} className="lp1-bento p-5">
            <div className="relative space-y-1.5">
              <span className="lp1-num block">0{bonus.number}</span>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-fuchsia-300">
                Bonus #{bonus.number}
              </p>
              <h3 className="text-[14px] font-extrabold leading-snug">{bonus.name}</h3>
              <p className="lp1-dim text-[12px] leading-relaxed">{bonus.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Lp1Section>
  );
}
