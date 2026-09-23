import { CtaButton, Section } from "@/components/funnel/ui";
import { benefits, funnel } from "@/data/funnel";

export function Benefits() {
  return (
    <Section className="space-y-4">
      <h2 className="text-center text-balance text-xl font-extrabold tracking-tight text-ink sm:text-[1.35rem]">
        {benefits.headline}
      </h2>

      <ul className="space-y-3">
        {benefits.items.map((item, index) => (
          <li
            key={item}
            className="card-3d flex gap-3 rounded-2xl border border-line bg-surface p-3.5 sm:p-4"
          >
            <span className="badge-3d badge-3d-ink flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black text-white">
              {index + 1}
            </span>
            <p className="pt-0.5 text-[13px] leading-snug text-ink/85 sm:text-sm">{item}</p>
          </li>
        ))}
      </ul>

      <p className="text-center text-xs text-muted sm:text-sm">{benefits.closing}</p>
      <CtaButton>{funnel.cta.bookShort}</CtaButton>
    </Section>
  );
}
