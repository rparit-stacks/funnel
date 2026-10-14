import { OFFER } from "@/data/offer";
import { createOrder, razorpayKeyId } from "@/lib/razorpay";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = String(body?.name ?? "").trim().slice(0, 100);
  const email = String(body?.email ?? "").trim().slice(0, 200);
  const phone = String(body?.phone ?? "").replace(/\D/g, "").slice(-10);

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[6-9]\d{9}$/.test(phone)) {
    return Response.json({ error: "Invalid details" }, { status: 400 });
  }

  try {
    // Amount is fixed server-side; the client never decides the price.
    const order = await createOrder(OFFER.price, { name, email, phone });
    return Response.json({ orderId: order.id, amount: order.amount, currency: order.currency, keyId: razorpayKeyId() });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Could not start payment" }, { status: 502 });
  }
}
