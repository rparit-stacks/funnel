"use client";

import { useState } from "react";
import { funnel } from "@/data/funnel";

const methods = [
  { id: "upi", label: "UPI", note: "GPay · PhonePe · Paytm", tag: "Fastest" },
  { id: "card", label: "Credit / Debit Card", note: "Visa · Mastercard · RuPay" },
  { id: "netbanking", label: "Net Banking", note: "All major banks" },
  { id: "wallet", label: "Wallet", note: "Paytm · Amazon Pay · Mobikwik" },
] as const;

type MethodId = (typeof methods)[number]["id"];

export function CheckoutForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState<MethodId>("upi");
  const [touched, setTouched] = useState(false);

  const nameOk = name.trim().length >= 2;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const phoneOk = /^[6-9]\d{9}$/.test(phone.replace(/\D/g, ""));
  const valid = nameOk && emailOk && phoneOk;

  return (
    <form
      className="space-y-7"
      onSubmit={(event) => {
        event.preventDefault();
        setTouched(true);
        // Razorpay is not wired up yet — creating an order, opening checkout and
        // verifying the payment signature all need a backend. Deliberately does
        // not pretend the payment went through.
      }}
      noValidate
    >
      <div className="space-y-4">
        <p className="lp2-meta">Your details</p>

        <div>
          <label className="lp2-label" htmlFor="co-name">
            Full name
          </label>
          <input
            id="co-name"
            className={`lp2-field ${touched && !nameOk ? "lp2-field-err" : ""}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>

        <div>
          <label className="lp2-label" htmlFor="co-email">
            Email
          </label>
          <input
            id="co-email"
            type="email"
            className={`lp2-field ${touched && !emailOk ? "lp2-field-err" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label className="lp2-label" htmlFor="co-phone">
            Mobile number
          </label>
          <input
            id="co-phone"
            type="tel"
            inputMode="numeric"
            className={`lp2-field ${touched && !phoneOk ? "lp2-field-err" : ""}`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="10-digit mobile"
            autoComplete="tel"
          />
        </div>

        {touched && !valid ? (
          <p className="text-[12px] font-semibold text-red-600">
            Please fill your name, a valid email and a 10-digit mobile number.
          </p>
        ) : null}
      </div>

      <div className="space-y-3">
        <p className="lp2-meta">Payment method</p>

        {methods.map((m) => (
          <button
            key={m.id}
            type="button"
            className="lp2-pay"
            data-selected={method === m.id}
            onClick={() => setMethod(m.id)}
            aria-pressed={method === m.id}
          >
            <span className="lp2-radio" aria-hidden />
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2">
                <span className="text-[14px] font-extrabold tracking-[-0.01em]">{m.label}</span>
                {"tag" in m && m.tag ? <span className="lp2-paytag">{m.tag}</span> : null}
              </span>
              <span className="lp2-body-text mt-0.5 block text-[11.5px] font-semibold">
                {m.note}
              </span>
            </span>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <button type="submit" className="lp2-btn" disabled={!valid}>
          <span>Pay ₹{funnel.primaryOffer.price} securely</span>
        </button>

        <div className="flex items-center justify-center gap-2">
          <svg
            className="h-3.5 w-3.5 text-[color:var(--lp2-body)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <rect x="4" y="10" width="16" height="10" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
          <span className="lp2-body-text text-[11.5px] font-bold">Secured by</span>
          <span className="lp2-rzp">Razorpay</span>
        </div>

        <p className="lp2-body-text text-pretty text-center text-[11.5px] leading-relaxed">
          {funnel.refund}
        </p>
      </div>
    </form>
  );
}
