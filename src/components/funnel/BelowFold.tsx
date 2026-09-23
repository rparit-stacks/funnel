import { Benefits } from "@/components/funnel/sections/Benefits";
import { Decision } from "@/components/funnel/sections/Decision";
import { FinalCta } from "@/components/funnel/sections/FinalCta";
import { Footer } from "@/components/funnel/sections/Footer";
import { FounderStory } from "@/components/funnel/sections/FounderStory";
import { Guarantee } from "@/components/funnel/sections/Guarantee";
import { PriceCtaFounder } from "@/components/funnel/sections/PriceCtaFounder";
import { SocialProofIntro } from "@/components/funnel/sections/SocialProofIntro";
import { Transformations } from "@/components/funnel/sections/Transformations";
import { ValueStack } from "@/components/funnel/sections/ValueStack";
import { VideoTestimonials } from "@/components/funnel/sections/VideoTestimonials";

export function BelowFold() {
  return (
    <div className="w-full">
      <ValueStack />
      <Guarantee />
      <Benefits />
      <SocialProofIntro />
      <Transformations />
      <VideoTestimonials />
      <PriceCtaFounder />
      <FounderStory />
      <Decision />
      <FinalCta />
      <Footer />
    </div>
  );
}
