import { Section } from "@/components/funnel/ui";
import { founder } from "@/data/funnel";

const stats = [
  { label: "Started", value: founder.startingWeight },
  { label: "Lost", value: "19 kg" },
  { label: "Helped", value: "10k+" },
];

export function FounderStory() {
  return (
    <Section className="space-y-4">
      <div className="space-y-1 text-center">
        <h2 className="text-xl font-extrabold text-ink">{founder.person}</h2>
        <p className="text-xs leading-snug text-muted sm:text-sm">{founder.role}</p>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="card-3d space-y-1.5 rounded-xl border border-line bg-surface px-2 py-3 text-center"
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-muted">{stat.label}</p>
            <p className="text-sm font-extrabold text-ink">{stat.value}</p>
            <span className="accent-bar-3d mx-auto block w-8" />
          </div>
        ))}
      </div>

      <div className="card-3d space-y-3 rounded-2xl border border-line bg-surface p-4 text-[13px] leading-relaxed text-muted sm:p-5 sm:text-sm">
        <p>{founder.story}</p>
        <p>{founder.previousAttempts}</p>
        <p className="font-semibold text-ink">{founder.personalResult}</p>
        <p>
          <span className="font-bold text-ink">Created:</span> {founder.createdSystem}.{" "}
          {founder.claimedReach}. Mission: {founder.mission}
        </p>
        <p className="text-center text-base font-extrabold text-teal">{founder.closing}</p>
      </div>
    </Section>
  );
}
