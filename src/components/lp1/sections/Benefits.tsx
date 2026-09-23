import { Lp1Button, Lp1Eyebrow, Lp1Heading, Lp1Section } from "@/components/lp1/ui";
import { benefits, funnel } from "@/data/funnel";

export function Benefits() {
  return (
    <Lp1Section className="space-y-7">
      <div className="space-y-3">
        <Lp1Eyebrow>On the call</Lp1Eyebrow>
        <Lp1Heading>{benefits.headline}</Lp1Heading>
      </div>

      <ol className="mt-5 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {benefits.items.map((item, index) => (
          <li key={item} className="flex gap-4 pb-5">
            <div className="flex flex-col items-center">
              <span className="lp1-stat flex h-10 w-10 shrink-0 items-center justify-center text-sm font-black text-fuchsia-200">
                {index + 1}
              </span>
              {index < benefits.items.length - 1 ? (
                <span className="mt-1 w-px flex-1 bg-gradient-to-b from-fuchsia-400/60 to-transparent lg:hidden" />
              ) : null}
            </div>
            <p className="pt-2 text-[13.5px] leading-relaxed text-white/85 sm:text-sm">{item}</p>
          </li>
        ))}
      </ol>

      <p className="lp1-dim text-center text-[13px]">{benefits.closing}</p>
      <div className="mx-auto max-w-md">
        <Lp1Button>{funnel.cta.bookShort}</Lp1Button>
      </div>
    </Lp1Section>
  );
}
