import { Lp1Section } from "@/components/lp1/ui";
import { socialProofIntro } from "@/data/funnel";

export function SocialProofIntro() {
  const lead = socialProofIntro.headline.split("Have")[0].trim();

  return (
    <Lp1Section className="pb-2 text-center">
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-fuchsia-300">
        {socialProofIntro.brand}
      </p>
      <h2 className="mt-3 text-balance text-[1.75rem] font-black leading-[1.1] tracking-tight sm:text-[2.1rem]">
        <span className="lp1-grad-text">{lead}</span>
        <br />
        Have Transformed Their Lives!
      </h2>
      <span className="lp1-rule mx-auto mt-5 block max-w-[10rem]" />
    </Lp1Section>
  );
}
