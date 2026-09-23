import { Lp1Button, Lp1Heading, Lp1RefundNote, Lp1Section } from "@/components/lp1/ui";
import { decision, funnel } from "@/data/funnel";

export function Decision() {
  const [bad, good] = decision.options;

  return (
    <Lp1Section className="space-y-7">
      <Lp1Heading className="text-center">{decision.headline}</Lp1Heading>

      {/* sm+ gutter must clear the 2.75rem VS badge that sits centered in it */}
      <div className="relative mt-7 sm:grid sm:grid-cols-2 sm:gap-16">
        <div className="lp1-option-bad p-5 sm:p-6">
          <p className="lp1-dim mb-2 text-[10px] font-black uppercase tracking-[0.18em]">
            Option {bad.option}
          </p>
          <h3 className="mb-1.5 text-[15px] font-extrabold text-white/70">{bad.title}</h3>
          <p className="lp1-dim text-[12.5px] leading-relaxed">{bad.description}</p>
        </div>

        {/* In flow between the stacked cards on mobile; centered in the gutter at sm+ */}
        <div className="flex justify-center py-3 sm:pointer-events-none sm:absolute sm:inset-y-0 sm:left-1/2 sm:items-center sm:py-0 sm:-translate-x-1/2">
          <span className="lp1-vs">VS</span>
        </div>

        <div className="lp1-option-good p-5 sm:p-6">
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-fuchsia-200">
            Option {good.option}
          </p>
          <h3 className="mb-1.5 text-[15px] font-extrabold">{good.title}</h3>
          <p className="text-[12.5px] leading-relaxed text-white/85">{good.description}</p>
        </div>
      </div>

      <p className="lp1-dim text-center text-[13px] leading-relaxed">{decision.closing}</p>

      <div className="mx-auto max-w-md space-y-3">
        <Lp1Button>{funnel.cta.primary}</Lp1Button>
        <Lp1RefundNote />
      </div>
    </Lp1Section>
  );
}
