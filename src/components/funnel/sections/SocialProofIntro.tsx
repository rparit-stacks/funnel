import { Section } from "@/components/funnel/ui";
import { socialProofIntro } from "@/data/funnel";

export function SocialProofIntro() {
  return (
    <Section className="text-center">
      <h2 className="text-balance text-xl font-extrabold leading-snug tracking-tight text-ink sm:text-2xl">
        <span className="text-teal">{socialProofIntro.headline.split("Have")[0].trim()}</span>
        <br />
        Have Transformed Their Lives!
      </h2>
      <span className="accent-bar-3d mx-auto mt-3 block w-16" />
    </Section>
  );
}
