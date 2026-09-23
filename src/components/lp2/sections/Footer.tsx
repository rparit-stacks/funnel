import { LP2_WRAP } from "@/components/lp2/ui";
import { footer, founder, funnel } from "@/data/funnel";

const chips = [
  `100% money-back`,
  `1:1 with ${founder.person}`,
  `₹${funnel.primaryOffer.price} today`,
];

export function Footer() {
  return (
    <footer className="lp2-footer w-full py-12 sm:py-14">
      <div className={LP2_WRAP}>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="max-w-sm">
            <p className="text-[22px] font-black tracking-tight text-white">
              FUME<span className="text-violet-400">.Fit</span>
            </p>
            <p className="mt-3 text-pretty text-[13px] leading-[1.7] text-white/55">
              {founder.mission}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span key={chip} className="lp2-fchip">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <nav className="flex flex-col gap-3 md:items-end">
            <p className="lp2-meta">Legal</p>
            {footer.links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="lp2-flink"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="lp2-fdivider my-8" />

        <div className="space-y-3">
          <p className="text-[11.5px] font-semibold text-white/45">{footer.copyright}</p>
          <p className="max-w-2xl text-pretty text-[10.5px] leading-relaxed text-white/30">
            {footer.facebookDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
