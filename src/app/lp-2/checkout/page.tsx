import type { Metadata } from "next";
import Link from "next/link";
import { CheckoutForm } from "@/components/lp2/checkout/CheckoutForm";
import { OrderSummary } from "@/components/lp2/checkout/OrderSummary";
import { ViewersNow } from "@/components/lp2/checkout/ViewersNow";
import { Footer } from "@/components/lp2/sections/Footer";
import { Transformations } from "@/components/lp2/sections/Transformations";
import { LP2_WRAP_TIGHT } from "@/components/lp2/ui";
import "../lp2.css";

export const metadata: Metadata = {
  title: "Checkout — 1:1 Root-Cause Consultation @ ₹198 | Fume.Fit",
  description: "Complete your booking for the FUME 1:1 root-cause consultation.",
};

export default function CheckoutPage() {
  return (
    <div className="lp2-root">
      <header className="lp2-header">
        <div className={`${LP2_WRAP_TIGHT} flex items-center justify-between gap-3 py-4 sm:py-5`}>
          <Link href="/lp-2" className="min-w-0">
            <p className="text-[21px] font-black leading-none tracking-tight sm:text-[24px]">
              FUME<span className="lp2-accent">.Fit</span>
            </p>
            <p className="lp2-body-text mt-1.5 truncate text-[10px] font-bold uppercase tracking-[0.16em]">
              Secure checkout
            </p>
          </Link>
          <ViewersNow />
        </div>
      </header>

      <main className="w-full">
        <section className="w-full py-6 sm:py-9 lg:py-12">
          <div className={LP2_WRAP_TIGHT}>
            <h1 className="lp2-h2 max-w-2xl">
              Complete your <span className="lp2-accent">booking</span>
            </h1>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-9">
              <div className="lp2-panel-sm sm:p-6">
                <CheckoutForm />
              </div>

              <div className="lg:sticky lg:top-28">
                <OrderSummary />
              </div>
            </div>
          </div>
        </section>

        <Transformations />
      </main>

      <Footer />
    </div>
  );
}
