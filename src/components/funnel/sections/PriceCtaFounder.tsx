import Image from "next/image";
import { CtaButton, RefundNote, Section } from "@/components/funnel/ui";
import { founder, funnel } from "@/data/funnel";
import { media } from "@/data/media";

export function PriceCtaFounder() {
  return (
    <Section className="space-y-5">
      <div className="space-y-3 text-center">
        <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
          Your Health is Truly Priceless
        </h2>
        <CtaButton>{funnel.cta.primary}</CtaButton>
        <RefundNote />
      </div>

      <div className="card-3d overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={media.founder}
            alt={founder.person}
            fill
            sizes="(max-width: 480px) 100vw, 512px"
            className="object-cover object-top"
          />
        </div>
        <div className="space-y-1 p-4 text-center sm:p-5">
          <h3 className="text-[15px] font-extrabold leading-snug text-ink sm:text-base">
            {founder.introHeadline}
          </h3>
        </div>
      </div>
    </Section>
  );
}
