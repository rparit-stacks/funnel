import { footer } from "@/data/funnel";

export function Footer() {
  return (
    <footer className="w-full space-y-3 py-6 text-center">
      <p className="text-lg font-black tracking-tight text-ink">FUME</p>
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-muted">
        {footer.links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:text-ink"
          >
            {link}
          </a>
        ))}
      </div>
      <p className="text-[11px] text-muted">{footer.copyright}</p>
      <p className="mx-auto max-w-sm text-[10px] leading-relaxed text-muted/80">
        {footer.facebookDisclaimer}
      </p>
    </footer>
  );
}
