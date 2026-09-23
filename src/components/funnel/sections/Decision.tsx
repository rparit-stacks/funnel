import { CtaButton, RefundNote, Section } from "@/components/funnel/ui";
import { decision, funnel } from "@/data/funnel";

export function Decision() {
  return (
    <Section className="space-y-4">
      <h2 className="text-center text-balance text-lg font-extrabold leading-snug tracking-tight text-ink sm:text-xl">
        {decision.headline}
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {decision.options.map((option) => {
          const positive = option.tone === "positive";
          return (
            <div
              key={option.option}
              className={`card-3d rounded-2xl border p-4 ${
                positive
                  ? "border-teal/30 bg-teal-soft"
                  : "border-line bg-surface opacity-90"
              }`}
            >
              <p
                className={`mb-2 text-[10px] font-extrabold uppercase tracking-wider ${
                  positive ? "text-teal" : "text-muted"
                }`}
              >
                Option {option.option}
              </p>
              <h3
                className={`mb-1.5 text-[15px] font-bold ${
                  positive ? "text-ink" : "text-muted"
                }`}
              >
                {option.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted">{option.description}</p>
            </div>
          );
        })}
      </div>

      <p className="text-center text-[13px] leading-relaxed text-ink">
        {decision.closing}
      </p>

      <CtaButton>{funnel.cta.primary}</CtaButton>
      <RefundNote />
    </Section>
  );
}
