import { createHmac, timingSafeEqual } from "node:crypto";

const API = "https://api.razorpay.com/v1";

function env(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var ${name}`);
  return value;
}

export const razorpayKeyId = () => env("RAZORPAY_KEY_ID");

async function rzp<T>(path: string, init?: RequestInit): Promise<T> {
  const auth = Buffer.from(`${env("RAZORPAY_KEY_ID")}:${env("RAZORPAY_KEY_SECRET")}`).toString("base64");
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Razorpay ${path} failed (${res.status}): ${await res.text()}`);
  return (await res.json()) as T;
}

export type Customer = { name: string; email: string; phone: string };

export type RzpOrder = {
  id: string;
  amount: number;
  currency: string;
  status: string;
  notes: Partial<Customer>;
};

export const createOrder = (amountInr: number, customer: Customer) =>
  rzp<RzpOrder>("/orders", {
    method: "POST",
    body: JSON.stringify({
      amount: amountInr * 100,
      currency: "INR",
      receipt: `fume_${Date.now()}`,
      notes: customer,
    }),
  });

export const fetchOrder = (orderId: string) => rzp<RzpOrder>(`/orders/${encodeURIComponent(orderId)}`);

export function verifySignature(orderId: string, paymentId: string, signature: string): boolean {
  const expected = createHmac("sha256", env("RAZORPAY_KEY_SECRET")).update(`${orderId}|${paymentId}`).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Posts to the Pabbly Connect webhook that already has the success / failure automation. */
export async function notifyPabbly(status: "success" | "failure", data: Record<string, unknown>) {
  const url = process.env[status === "success" ? "PABBLY_SUCCESS_WEBHOOK_URL" : "PABBLY_FAILURE_WEBHOOK_URL"];
  if (!url) {
    console.error(`Pabbly ${status} webhook URL not set; skipping`);
    return;
  }
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, ...data, timestamp: new Date().toISOString() }),
    });
    if (!res.ok) console.error(`Pabbly ${status} webhook returned ${res.status}`);
  } catch (err) {
    console.error(`Pabbly ${status} webhook failed`, err);
  }
}
