import { Lp1Section } from "@/components/lp1/ui";
import { footer } from "@/data/funnel";

export function Footer() {
  return (
    <Lp1Section className="pb-4 text-center">
      <span className="lp1-rule mb-6 block" />
      <p className="text-xl font-black tracking-tight">
        <span className="lp1-grad-text">FUME</span>
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
        {footer.links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
            className="lp1-dim transition-colors hover:text-white"
          >
            {link}
          </a>
        ))}
      </div>
      <p className="lp1-dim mt-3 text-[11px]">{footer.copyright}</p>
      <p className="lp1-dim mx-auto mt-2 max-w-sm text-[10px] leading-relaxed opacity-70">
        {footer.facebookDisclaimer}
      </p>
    </Lp1Section>
  );
}
