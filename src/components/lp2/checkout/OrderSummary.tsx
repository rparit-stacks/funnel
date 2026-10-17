import Image from "next/image";
import { funnel, mentors } from "@/data/funnel";
import { media } from "@/data/media";

const { price, originalPrice, name } = funnel.primaryOffer;
const savings = originalPrice - price;

export function OrderSummary() {
  return (
    <div className="space-y-4">
      <div className="lp2-card p-4 sm:p-5">
        <p className="lp2-meta !text-[color:var(--lp2-body)]">Order summary</p>

        <div className="mt-4 space-y-3">
          <div className="lp2-sumrow">
            <span className="font-bold">{name}</span>
            <span className="font-bold">₹{originalPrice}</span>
          </div>
          <div className="lp2-sumrow">
            <span className="lp2-body-text font-semibold">
              Bonus toolkit ({funnel.pricing.bonusTotalValue.toLocaleString("en-IN")} value)
            </span>
            <span className="font-bold text-[color:var(--lp2-violet)]">FREE</span>
          </div>
          <div className="lp2-sumrow">
            <span className="lp2-body-text font-semibold">Launch discount</span>
            <span className="font-bold text-[color:var(--lp2-violet)]">− ₹{savings}</span>
          </div>
        </div>

        <div className="lp2-divider my-5" />

        <div className="lp2-sumrow">
          <span className="text-[15px] font-black">Total payable</span>
          <span className="text-[26px] font-black tracking-[-0.03em]">₹{price}</span>
        </div>
      </div>

      {/* mentors */}
      <div className="lp2-panel flex items-center gap-3.5 p-3.5 sm:p-4">
        <span className="flex shrink-0 -space-x-3">
          {mentors.map((mentor) => (
            <span
              key={mentor.name}
              className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white sm:h-20 sm:w-20"
            >
              <Image
                src={media.team[mentor.photo]}
                alt={mentor.name}
                fill
                sizes="80px"
                className="object-cover"
                style={{ objectPosition: mentor.pos }}
              />
            </span>
          ))}
        </span>
        <div className="min-w-0">
          <p className="lp2-meta !text-[color:var(--lp2-body)]">Your mentors</p>
          <p className="mt-1 text-[15px] font-black tracking-[-0.01em]">Dr. Uma &amp; Jagan</p>
          <p className="lp2-body-text mt-0.5 text-pretty text-[11.5px] leading-snug">
            Co-founders of FUME
          </p>
        </div>
      </div>
    </div>
  );
}
