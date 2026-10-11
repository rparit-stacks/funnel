import { fetchOrder, notifyPabbly } from "@/lib/razorpay";

/** Called by the checkout when Razorpay reports payment.failed. Customer details come from the order notes, not the client. */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const orderId = String(body?.order_id ?? "");
  if (!orderId) return Response.json({ ok: false }, { status: 400 });

  try {
    const order = await fetchOrder(orderId);
    if (order.status === "paid") return Response.json({ ok: true });
    await notifyPabbly("failure", {
      ...order.notes,
      amount: order.amount / 100,
      currency: order.currency,
      order_id: orderId,
      payment_id: String(body?.payment_id ?? ""),
      error_code: String(body?.code ?? ""),
      error_description: String(body?.description ?? ""),
      error_reason: String(body?.reason ?? ""),
    });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false }, { status: 502 });
  }
  return Response.json({ ok: true });
}
