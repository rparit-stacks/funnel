// Wistia-hosted files of "VSL Final Video2" (media c6pkeq6o1c). 960x540 mp4 keeps a
// 20 min video streamable on mobile; the browser only fetches what it plays.
const VIDEO_SRC =
  "https://embed-ssl.wistia.com/deliveries/ee8e9eb9c1c91e7f4c1486e66eef7f44c3f42497.mp4";
const POSTER =
  "https://embed-ssl.wistia.com/deliveries/220027951f4d4dac13c28d667b7d3775.jpg?image_crop_resized=960x540";

/**
 * Native <video>: its play button and controls are the browser's own, so a tap
 * always plays with sound (no third-party player script, works over http too).
 */
export function HeroVideo({ label }: { label: string }) {
  return (
    <div className="relative aspect-video w-full bg-black">
      <video
        className="absolute inset-0 h-full w-full object-contain"
        src={VIDEO_SRC}
        poster={POSTER}
        controls
        playsInline
        preload="none"
        controlsList="nodownload"
        aria-label={label || "Metabolic Reset Formula training"}
      />
    </div>
  );
}
