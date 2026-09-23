import Image from "next/image";
import { Lp1Section } from "@/components/lp1/ui";
import { guarantee } from "@/data/funnel";
import { media } from "@/data/media";

export function Guarantee() {
  return (
    <Lp1Section>
      <div className="lp1-glass px-5 pb-6 pt-6 sm:px-7 sm:pb-8 sm:pt-8">
        <Image
          src={media.moneyBack}
          alt="100% Money Back Guarantee"
          width={104}
          height={104}
          className="mx-auto mb-4 h-20 w-20 object-contain sm:h-24 sm:w-24"
        />

        <h2 className="mb-4 text-center text-balance text-[1.35rem] font-black leading-snug tracking-tight sm:text-[1.5rem]">
          {guarantee.headline}
        </h2>

        <div className="lp1-dim space-y-3 text-[13px] leading-relaxed sm:text-sm">
          <p>{guarantee.description}</p>
          <p className="lp1-option-good block p-3.5 text-[13px] font-semibold text-white">
            {guarantee.guarantee}
          </p>
          <p>{guarantee.closing}</p>
        </div>
      </div>
    </Lp1Section>
  );
}
