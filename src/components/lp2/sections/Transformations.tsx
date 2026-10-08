import Image from "next/image";
import { Lp2Section } from "@/components/lp2/ui";
import { socialProofIntro } from "@/data/funnel";
import { comparisons } from "@/data/comparisons";

const STAT = "15,000+";

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
          {comparisons.map((item, index) => (
            <li key={item.src}>
              <article className="lp2-shot">
                {/* result graphics already carry their own before/after + caption */}
                <div className={`relative aspect-square w-full ${item.fit === "contain" ? "bg-black" : ""}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 72vw, (max-width: 1024px) 42vw, 340px"
                    className={item.fit === "contain" ? "object-contain" : "object-cover"}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
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
