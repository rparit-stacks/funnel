import { HeroVideo } from "@/components/funnel/sections/HeroVideo";
import { PrimaryOfferCta } from "@/components/funnel/sections/PrimaryOfferCta";
import { Bonuses } from "@/components/funnel/sections/Bonuses";

/** Critical path — renders immediately for fast LCP. */
export function AboveFold() {
  return (
    <>
      <HeroVideo />
      <PrimaryOfferCta />
      <Bonuses />
    </>
  );
}
