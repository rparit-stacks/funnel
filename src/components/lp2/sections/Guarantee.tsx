import Image from "next/image";
import { Lp2Section } from "@/components/lp2/ui";
import { guarantee } from "@/data/funnel";

const ACCENT_PHRASE = "Your Money Back";

/* LP-2 uses its own badge rather than media.moneyBack, which points at a
   placeholder that isn't a guarantee seal. Kept local so / and /lp-1 are
   unaffected. */
const BADGE_SRC = "/images/money-back-badge.png";

export function Guarantee() {
  const [beforeAccent, afterAccent] = guarantee.headline.split(ACCENT_PHRASE);

  return (
    <Lp2Section>
      <div className="lp2-panel p-6 sm:p-9 lg:p-12">
        <h2 className="lp2-h2 mx-auto max-w-3xl text-center">
          {beforeAccent}
          <span className="lp2-accent">{ACCENT_PHRASE}</span>
          {afterAccent}
        </h2>

        <div className="mt-8 grid gap-7 md:grid-cols-[auto_1fr] md:items-start md:gap-9 lg:gap-12">
          <div className="flex justify-center md:block">
            <span className="lp2-seal">
              <Image
                src={BADGE_SRC}
                alt="100% Money Back Guarantee"
                width={352}
                height={352}
                className="h-28 w-28 object-contain sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-44 lg:w-44"
              />
            </span>
          </div>

          <div className="space-y-5">
            <p className="lp2-body-text text-[13.5px] leading-[1.7] sm:text-[15px]">
              {guarantee.description}
            </p>

            <p className="lp2-quote px-4 py-3.5 text-[13px] leading-[1.65] sm:px-5 sm:py-4 sm:text-[14px]">
              {guarantee.guarantee}
            </p>

            <p className="lp2-body-text text-[13.5px] leading-[1.7] sm:text-[15px]">
              {guarantee.closing}
            </p>
          </div>
        </div>
      </div>
    </Lp2Section>
  );
}
