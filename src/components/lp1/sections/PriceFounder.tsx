import Image from "next/image";
import { Lp1Button, Lp1RefundNote, Lp1Section } from "@/components/lp1/ui";
import { founder, funnel } from "@/data/funnel";
import { media } from "@/data/media";

export function PriceFounder() {
  return (
    <Lp1Section className="space-y-6">
      <div className="space-y-3 text-center">
        <h2 className="text-[1.6rem] font-black tracking-tight sm:text-[1.9rem] lg:text-[2.3rem]">
          Your Health is <span className="lp1-grad-text">Truly Priceless</span>
        </h2>
        <div className="mx-auto max-w-md space-y-3">
          <Lp1Button>{funnel.cta.primary}</Lp1Button>
          <Lp1RefundNote />
        </div>
      </div>

      <div className="lp1-glass overflow-hidden">
        <div className="relative aspect-[16/11] w-full">
          <Image
            src={media.founder}
            alt={founder.person}
            fill
            sizes="(max-width: 1024px) 100vw, 672px"
            className="object-cover object-top"
          />
        </div>
        <div className="space-y-2 p-5 sm:p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-fuchsia-300">
            {founder.role}
          </p>
          <h3 className="text-[16px] font-extrabold leading-snug sm:text-[18px]">
            {founder.introHeadline}
          </h3>
        </div>
      </div>
    </Lp1Section>
  );
}
