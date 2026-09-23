import { transformations } from "@/data/funnel";

export function Marquee({ slow = false }: { slow?: boolean }) {
  const items = transformations.map((item) => `${item.person} — ${item.result}`);

  return (
    <div className={`lp1-marquee ${slow ? "lp1-marquee-slow" : ""}`} aria-hidden>
      <div className="lp1-marquee-track">
        {[0, 1].map((pass) => (
          <div key={pass} className="flex">
            {items.map((text) => (
              <span key={text} className="lp1-marquee-item">
                <span className="lp1-marquee-sep">✦</span>
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
