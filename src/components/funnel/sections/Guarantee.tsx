import Image from "next/image";
import { Section } from "@/components/funnel/ui";
import { guarantee } from "@/data/funnel";
import { media } from "@/data/media";

export function Guarantee() {
  return (
    <Section className="space-y-4">
      <div className="card-3d rounded-2xl border border-line bg-surface p-4 sm:p-6">
        <div className="mb-4 flex justify-center">
          <Image
            src={media.moneyBack}
            alt="100% Money Back Guarantee"
            width={96}
            height={96}
            className="anim-float h-20 w-20 object-contain drop-shadow-[0_12px_18px_rgba(15,118,110,0.3)] sm:h-24 sm:w-24"
          />
        </div>

        <h2 className="mb-3 text-center text-lg font-extrabold leading-snug tracking-tight text-ink sm:text-xl">
          {guarantee.headline}
        </h2>

        <div className="space-y-3 text-[13px] leading-relaxed text-muted sm:text-sm">
          <p>{guarantee.description}</p>
          <p className="rounded-xl bg-teal-soft p-3 font-medium text-teal">
            {guarantee.guarantee}
          </p>
          <p>{guarantee.closing}</p>
        </div>
      </div>
    </Section>
  );
}
