/**
 * Placeholder social-proof count. This is a static number, NOT a live figure —
 * wire it to real analytics before showing it to traffic, or drop it. Presenting
 * an invented "live" count to buyers is misleading.
 */
const VIEWERS = 27;

export function ViewersNow() {
  return (
    <span className="lp2-live">
      <span className="lp2-livedot" aria-hidden />
      {VIEWERS} people are on this page
    </span>
  );
}
