import { AboveFold } from "@/components/funnel/AboveFold";
import { BelowFold } from "@/components/funnel/BelowFold";
import { SiteHeader } from "@/components/funnel/SiteHeader";
import { StickyCtaBar } from "@/components/funnel/StickyCtaBar";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-md px-4 pb-36 sm:max-w-lg sm:px-6 sm:pb-40 lg:max-w-xl">
        <AboveFold />
        <BelowFold />
      </main>
      <StickyCtaBar />
    </>
  );
}
