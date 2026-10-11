import type { Metadata } from "next";
import Link from "next/link";
import { LP2_WRAP_TIGHT } from "@/components/lp2/ui";
import "../lp2.css";

export const metadata: Metadata = {
  title: "Booking confirmed | Fume.Fit",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <div className="lp2-root">
      <main className={`${LP2_WRAP_TIGHT} py-16 sm:py-24`}>
        <h1 className="lp2-h2 max-w-2xl">
          Payment <span className="lp2-accent">received</span>
        </h1>
        <p className="lp2-body-text mt-4 max-w-xl text-[15px] leading-relaxed">
          Your 1:1 consultation is booked. We&apos;ll reach out on WhatsApp and email with the next steps shortly.
        </p>
        <Link href="/" className="lp2-btn mt-8 inline-flex">
          <span>Back to home</span>
        </Link>
      </main>
    </div>
  );
}
