import Image from "next/image";
import { Section } from "@/components/funnel/ui";
import { bonuses } from "@/data/funnel";
import { media } from "@/data/media";

export function Bonuses() {
  return (
    <Section className="space-y-4">
      <div className="space-y-1 text-center">
        <p className="text-[11px] font-bold uppercase tracking-wider text-teal">Included free</p>
        <h2 className="text-balance text-xl font-extrabold tracking-tight text-ink sm:text-[1.35rem]">
          Unlock These Powerful Tools When You Claim Your Call Today!
        </h2>
      </div>

      <div className="tilt-3d relative mb-2 overflow-hidden rounded-2xl shadow-soft">
        <Image
          src={media.food}
          alt="Healthy meal templates"
          width={800}
          height={360}
          className="h-36 w-full object-cover sm:h-44"
        />
      </div>

      <ul className="space-y-3">
        {bonuses.map((bonus) => (
          <li
            key={bonus.number}
            className="card-3d rounded-2xl border border-line bg-surface p-4 sm:p-5"
          >
            <div className="flex gap-3">
              <span className="badge-3d badge-3d-teal flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white">
                {bonus.number}
              </span>
              <div className="min-w-0 space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-wide text-muted">
                  Bonus #{bonus.number}
                </p>
                <h3 className="text-[15px] font-bold leading-snug text-ink sm:text-base">
                  {bonus.name}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted">{bonus.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
