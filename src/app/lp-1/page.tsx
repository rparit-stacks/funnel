import type { Metadata } from "next";
import { Lp1Header } from "@/components/lp1/Lp1Header";
import { Lp1StickyBar } from "@/components/lp1/Lp1StickyBar";
import { Benefits } from "@/components/lp1/sections/Benefits";
import { Bonuses } from "@/components/lp1/sections/Bonuses";
import { Decision } from "@/components/lp1/sections/Decision";
import { FinalCta } from "@/components/lp1/sections/FinalCta";
import { Footer } from "@/components/lp1/sections/Footer";
import { FounderStory } from "@/components/lp1/sections/FounderStory";
import { Guarantee } from "@/components/lp1/sections/Guarantee";
import { Hero } from "@/components/lp1/sections/Hero";
import { Marquee } from "@/components/lp1/sections/Marquee";
import { OfferTicket } from "@/components/lp1/sections/OfferTicket";
import { PriceFounder } from "@/components/lp1/sections/PriceFounder";
import { SocialProofIntro } from "@/components/lp1/sections/SocialProofIntro";
import { Transformations } from "@/components/lp1/sections/Transformations";
import { ValueStack } from "@/components/lp1/sections/ValueStack";
import { VideoTestimonials } from "@/components/lp1/sections/VideoTestimonials";
import "./lp1.css";

export const metadata: Metadata = {
  title: "Fume.Fit — Metabolic Reset Formula | 1:1 Consultation @ ₹198",
  description:
    "Fix the root cause of diabetes, thyroid & belly fat with the FUME science-backed Metabolic Reset Framework.",
};

export default function Lp1Page() {
  return (
    <>
      <div className="lp1-root">
        <div className="lp1-backdrop" aria-hidden />

        <div className="lp1-content">
          <Lp1Header />
          <main className="w-full pb-36 sm:pb-40">
            <Hero />
            <Marquee />
            <OfferTicket />
            <Bonuses />
            <ValueStack />
            <Guarantee />
            <Benefits />
            <SocialProofIntro />
            <Transformations />
            <Marquee slow />
            <VideoTestimonials />
            <PriceFounder />
            <FounderStory />
            <Decision />
            <FinalCta />
            <Footer />
          </main>
        </div>
      </div>

      <Lp1StickyBar />
    </>
  );
}
