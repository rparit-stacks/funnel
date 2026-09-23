import { Lp1Section } from "@/components/lp1/ui";
import { founder } from "@/data/funnel";

const stats = [
  { label: "Started", value: founder.startingWeight },
  { label: "Lost", value: "19 kg" },
  { label: "Helped", value: "10k+" },
];

export function FounderStory() {
  return (
    <Lp1Section className="space-y-7">
      <div className="text-center">
        <h2 className="text-[1.6rem] font-black tracking-tight">{founder.person}</h2>
        <p className="lp1-dim mt-1 text-xs leading-snug sm:text-[13px]">{founder.role}</p>
      </div>

      <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="lp1-stat px-2 py-3.5 text-center">
            <p className="lp1-dim text-[9.5px] font-black uppercase tracking-[0.14em]">
              {stat.label}
            </p>
            <p className="mt-1.5 text-[15px] font-black">
              <span className="lp1-grad-text">{stat.value}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="lp1-glass space-y-4 p-6 text-[13px] leading-relaxed sm:text-sm">
        <p className="lp1-dim">{founder.story}</p>
        <p className="lp1-dim">{founder.previousAttempts}</p>
        <p className="font-bold text-white">{founder.personalResult}</p>
        <p className="lp1-dim">
          <span className="font-bold text-white">Created:</span> {founder.createdSystem}.{" "}
          {founder.claimedReach}. Mission: {founder.mission}
        </p>
        <p className="lp1-dim">{founder.philosophy}</p>
        <p className="text-center text-lg font-black">
          <span className="lp1-grad-text">{founder.closing}</span>
        </p>
      </div>
    </Lp1Section>
  );
}
