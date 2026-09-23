import { InView } from "@/components/lp2/InView";
import { Lp2Button, Lp2Section } from "@/components/lp2/ui";
import { benefits, funnel } from "@/data/funnel";

const ACCENT_PHRASE = "1:1 Call";

export function Benefits() {
  const [beforeAccent, afterAccent] = benefits.headline.split(ACCENT_PHRASE);

  return (
    <Lp2Section>
      <div className="lp2-dark px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-[10.5px] font-black uppercase tracking-[0.22em] text-violet-300">
            On the call
          </p>
          <h2 className="lp2-h2 mt-4 text-white">
            {beforeAccent}
            <span className="bg-gradient-to-r from-violet-300 to-violet-500 bg-clip-text text-transparent">
              {ACCENT_PHRASE}
            </span>
            {afterAccent}
          </h2>
        </div>

        <InView className="mt-9 sm:mt-11">
          <ul className="md:grid md:grid-cols-2 md:gap-x-12">
            {benefits.items.map((item, index) => (
              <li
                key={item}
                className="lp2-brow lp2-up py-6 sm:py-7"
                style={{ "--i": index } as React.CSSProperties}
              >
                <span className="lp2-bnum">{String(index + 1).padStart(2, "0")}</span>
                <p className="lp2-btext mt-3 text-[14px] font-semibold leading-[1.6] sm:text-[15px]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </InView>

        <div className="mt-9 flex flex-col items-start gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <p className="max-w-md text-pretty text-[13.5px] leading-relaxed text-white/60 sm:text-[14.5px]">
            {benefits.closing}
          </p>
          <div className="w-full sm:w-auto sm:min-w-[280px]">
            <Lp2Button>{funnel.cta.bookShort}</Lp2Button>
          </div>
        </div>
      </div>
    </Lp2Section>
  );
}
