import { fetchOrder, notifyPabbly, verifySignature } from "@/lib/razorpay";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const orderId = String(body?.razorpay_order_id ?? "");
  const paymentId = String(body?.razorpay_payment_id ?? "");
  const signature = String(body?.razorpay_signature ?? "");

  if (!orderId || !paymentId || !signature || !verifySignature(orderId, paymentId, signature)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  try {
    const order = await fetchOrder(orderId);
    await notifyPabbly("success", {
      ...order.notes,
      amount: order.amount / 100,
      currency: order.currency,
      order_id: orderId,
      payment_id: paymentId,
    });
  } catch (err) {
    // Payment is genuine at this point; don't fail the buyer over an automation hiccup.
    console.error(err);
  }
  return Response.json({ ok: true });
}
