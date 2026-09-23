import type { Metadata } from "next";
import { Lp2Header } from "@/components/lp2/Lp2Header";
import { Lp2StickyBar } from "@/components/lp2/Lp2StickyBar";
import { Benefits } from "@/components/lp2/sections/Benefits";
import { Bonuses } from "@/components/lp2/sections/Bonuses";
import { Decision } from "@/components/lp2/sections/Decision";
import { FinalCta } from "@/components/lp2/sections/FinalCta";
import { Footer } from "@/components/lp2/sections/Footer";
import { FounderStory } from "@/components/lp2/sections/FounderStory";
import { Guarantee } from "@/components/lp2/sections/Guarantee";
import { Hero } from "@/components/lp2/sections/Hero";
import { Offer } from "@/components/lp2/sections/Offer";
import { PriceFounder } from "@/components/lp2/sections/PriceFounder";
import { Transformations } from "@/components/lp2/sections/Transformations";
import { ValueStack } from "@/components/lp2/sections/ValueStack";
import { VideoTestimonials } from "@/components/lp2/sections/VideoTestimonials";
import "./lp2.css";

export const metadata: Metadata = {
  title: "Fume.Fit — Metabolic Reset Formula | 1:1 Consultation @ ₹198",
  description:
    "Fix the root cause of diabetes, thyroid & belly fat with the FUME science-backed Metabolic Reset Framework.",
};

export default function Lp2Page() {
  return (
    <>
      <div className="lp2-root">
        <Lp2Header />
        {/* bottom padding clears the fixed sticky bar */}
        <main className="w-full pb-28 sm:pb-32">
          <Hero />
          <Offer />
          <Bonuses />
          <ValueStack />
          <Guarantee />
          <Benefits />
          <Transformations />
          <VideoTestimonials />
          <PriceFounder />
          <FounderStory />
          <Decision />
          <FinalCta />
          <Footer />
        </main>

        <Lp2StickyBar />
      </div>
    </>
  );
}
