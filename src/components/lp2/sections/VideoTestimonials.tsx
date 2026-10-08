import { ShortsRail } from "@/components/lp2/ShortsRail";
import { Lp2Section } from "@/components/lp2/ui";
import { shorts } from "@/data/shorts";

const ACCENT_PHRASE = "People Who Took The Call";

export function VideoTestimonials() {
  return (
    <Lp2Section innerClassName="space-y-8 sm:space-y-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="lp2-meta">Real stories</p>
          <h2 className="lp2-h2 mt-3">
            Hear It From <span className="lp2-accent">{ACCENT_PHRASE}</span>
          </h2>
        </div>
        <div className="shrink-0 sm:text-right">
          <span className="lp2-count">{String(shorts.length).padStart(2, "0")}</span>
          <p className="lp2-meta mt-1">Stories</p>
        </div>
      </div>

      <ShortsRail />

      <p className="lp2-body-text text-center text-[11px] font-bold uppercase tracking-[0.18em] lg:hidden">
        Swipe to see more →
      </p>
    </Lp2Section>
  );
}
