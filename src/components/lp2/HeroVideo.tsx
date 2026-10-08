"use client";

import { useEffect, useRef, useState } from "react";

// Wistia-hosted files of "VSL Final Video2" (media c6pkeq6o1c). 960x540 mp4 keeps a
// 20 min video streamable on mobile; the browser only fetches what it plays.
const VIDEO_SRC =
  "https://embed-ssl.wistia.com/deliveries/ee8e9eb9c1c91e7f4c1486e66eef7f44c3f42497.mp4";
const POSTER =
  "https://embed-ssl.wistia.com/deliveries/220027951f4d4dac13c28d667b7d3775.jpg?image_crop_resized=960x540";

type FsVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void };

function Icon({ d, className = "h-5 w-5" }: { d: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={d} />
    </svg>
  );
}

const PLAY = "M8 5v14l11-7z";
const PAUSE = "M6 5h4v14H6zM14 5h4v14h-4z";
const VOL_ON =
  "M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z";
const VOL_OFF =
  "M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.8 8.8 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z";
const FULL = "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z";

/**
 * Hero VSL: starts muted on load (the only autoplay browsers allow), with a clear
 * "Tap for sound" button that restarts it with audio, then shows our own controls.
 */
export function HeroVideo({ label }: { label: string }) {
  const ref = useRef<FsVideo>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    void v.play().catch(() => setPlaying(false));
  }, []);

  const enableSound = () => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = 0;
    v.loop = false;
    v.muted = false;
    setMuted(false);
    setSoundOn(true);
    void v.play().catch(() => undefined);
  };

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (!soundOn) return enableSound();
    if (v.paused) void v.play().catch(() => undefined);
    else v.pause();
  };

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const fullscreen = () => {
    const v = ref.current;
    if (!v) return;
    if (v.requestFullscreen) void v.requestFullscreen().catch(() => undefined);
    else v.webkitEnterFullscreen?.();
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = ref.current;
    if (!v || !Number.isFinite(v.duration)) return;
    const rect = e.currentTarget.getBoundingClientRect();
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration;
  };

  return (
    <div className="relative aspect-video w-full select-none bg-black">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-contain"
        src={VIDEO_SRC}
        poster={POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label || "Metabolic Reset Formula training"}
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => {
          const v = e.currentTarget;
          if (v.duration) setProgress(v.currentTime / v.duration);
        }}
      />

      {/* muted preview: one obvious action */}
      {!soundOn ? (
        <>
          <button
            type="button"
            onClick={enableSound}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black/25"
            aria-label="Play with sound"
          >
            <span className="lp2-play">
              <Icon d={VOL_ON} className="h-7 w-7" />
            </span>
            <span className="lp2-video-label">Tap for sound</span>
          </button>
        </>
      ) : null}

      {/* paused after sound is on */}
      {soundOn && !playing ? (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/25"
          aria-label="Play"
        >
          <span className="lp2-play">
            <Icon d={PLAY} className="h-7 w-7 translate-x-[3px]" />
          </span>
        </button>
      ) : null}

      {/* control bar */}
      {soundOn ? (
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2 pt-8">
          <div
            role="progressbar"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            onClick={seek}
            className="mb-2 h-2 w-full cursor-pointer rounded-full bg-white/25"
          >
            <div
              className="h-full rounded-full bg-violet-400"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="flex items-center gap-1 text-white">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Pause" : "Play"}
              className="rounded-full p-2 active:bg-white/20"
            >
              <Icon d={playing ? PAUSE : PLAY} />
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              className="rounded-full p-2 active:bg-white/20"
            >
              <Icon d={muted ? VOL_OFF : VOL_ON} />
            </button>
            <button
              type="button"
              onClick={fullscreen}
              aria-label="Fullscreen"
              className="ml-auto rounded-full p-2 active:bg-white/20"
            >
              <Icon d={FULL} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
