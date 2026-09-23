import Image from "next/image";
import { Lp2Section } from "@/components/lp2/ui";
import { socialProofIntro, transformations } from "@/data/funnel";
import { media } from "@/data/media";

const STAT = "4,000+";

export function Transformations() {
  const tail = socialProofIntro.headline.split(STAT)[1]?.trim() ?? "";

  return (
    <Lp2Section innerClassName="space-y-8 sm:space-y-10">
      <div className="mx-auto max-w-2xl text-center">
        <span className="lp2-bigstat">{STAT}</span>
        <h2 className="lp2-h2 mt-3">{tail}</h2>
      </div>

      {/* bleeds to the screen edge on mobile so the next card peeks in */}
      <div className="-mx-5 px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
        <ul className="lp2-hrail">
          {transformations.map((item, index) => (
            <li key={`${item.person}-${item.result}`}>
              <article className="lp2-shot">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={media.transformations[index % media.transformations.length]}
                    alt={`${item.person} transformation`}
                    fill
                    sizes="(max-width: 640px) 72vw, (max-width: 1024px) 42vw, 340px"
                    className="object-cover"
                  />
                  <div className="lp2-shot-scrim" />
                  <div className="absolute inset-x-0 bottom-0 space-y-2 p-4">
                    <span className="lp2-result">{item.result}</span>
                    <h3 className="text-[15.5px] font-extrabold tracking-[-0.01em] text-white sm:text-[16.5px]">
                      {item.person}
                    </h3>
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
