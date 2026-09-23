import Image from "next/image";
import { LP1_WRAP_WIDE, Lp1Section } from "@/components/lp1/ui";
import { transformations } from "@/data/funnel";
import { media } from "@/data/media";

export function Transformations() {
  return (
    <Lp1Section bleed className="space-y-6 py-11 sm:py-14 lg:py-16">
      <div className={`${LP1_WRAP_WIDE} flex items-end justify-between gap-3`}>
        <h2 className="text-[1.4rem] font-black tracking-tight lg:text-[2.1rem]">
          Real transformations
        </h2>
        <p className="lp1-dim shrink-0 pb-1 text-[10px] font-bold uppercase tracking-[0.16em] lg:hidden">
          Swipe →
        </p>
      </div>

      <div className={LP1_WRAP_WIDE}>
        <div className="lp1-rail">
          {transformations.map((item, index) => (
            <article key={`${item.person}-${item.result}`} className="lp1-rail-item">
              <div className="lp1-media">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={media.transformations[index % media.transformations.length]}
                    alt={`${item.person} transformation`}
                    fill
                    sizes="(max-width: 640px) 76vw, 300px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0616] via-[#0b0616]/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 space-y-1 p-3.5">
                    <h3 className="text-[15px] font-extrabold">{item.person}</h3>
                    <p className="text-[12px] font-semibold leading-snug text-fuchsia-200">
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Lp1Section>
  );
}
