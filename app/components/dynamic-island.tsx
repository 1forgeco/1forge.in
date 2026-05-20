"use client";

import { useEffect, useState, useRef } from "react";

/**
 * DynamicIsland — iPhone-style Dynamic Island animation.
 * Positioned as an overlay on the center phone mockup.
 * On first load: pill → expands → purple eyes blink 2x → contracts → gone.
 * Plays once per session.
 */

type Phase =
  | "idle"        // initial pill
  | "expanding"   // pill → rounded square
  | "eyes-open"   // eyes appear
  | "blink-1"     // first blink
  | "open-1"      // eyes re-open
  | "blink-2"     // second blink
  | "open-2"      // eyes re-open briefly
  | "contracting" // square → pill
  | "fading"      // pill fades out
  | "done";       // removed from DOM

export function DynamicIsland() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [isMobile, setIsMobile] = useState(true);
  const hasPlayed = useRef(false);

  // Check if mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth <= 640);
  }, []);

  useEffect(() => {
    if (hasPlayed.current || isMobile) return;
    hasPlayed.current = true;

    const timeline: [number, Phase][] = [
      [1200, "expanding"],
      [1900, "eyes-open"],
      [2700, "blink-1"],
      [2950, "open-1"],
      [3500, "blink-2"],
      [3750, "open-2"],
      [4300, "contracting"],
      [5000, "fading"],
      [5600, "done"],
    ];

    const timers = timeline.map(([delay, p]) =>
      setTimeout(() => setPhase(p), delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [isMobile]);

  if (isMobile || phase === "done") return null;

  const isExpanded = ["eyes-open", "blink-1", "open-1", "blink-2", "open-2"].includes(phase);
  const isExpanding = phase === "expanding";
  const isContracting = phase === "contracting";
  const isFading = phase === "fading";
  const eyesVisible = ["eyes-open", "open-1", "open-2"].includes(phase);
  const eyesClosed = ["blink-1", "blink-2"].includes(phase);

  // Dynamic Island sizing relative to phone
  // Positioned to overlay exactly on the phone's built-in island
  const pillWidthPct = isExpanded || isExpanding ? 60 : isContracting ? 28 : 28;
  const pillHeightPx = isExpanded || isExpanding ? 50 : isContracting ? 20 : 20;
  const borderRadius = isExpanded || isExpanding ? 16 : 50;

  return (
    <div
      className="dynamic-island"
      style={{
        position: "absolute",
        top: "3.4%",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: `${pillWidthPct}%`,
        height: pillHeightPx,
        borderRadius,
        background: "#000",
        transition: isFading
          ? "opacity 0.5s ease, width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
          : "width 0.55s cubic-bezier(0.4, 0, 0.2, 1), height 0.55s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: isFading ? 0 : 1,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Eyes */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          opacity: eyesVisible || eyesClosed ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        {/* Left eye */}
        <div
          style={{
            width: 8,
            height: eyesClosed ? 2 : 8,
            borderRadius: eyesClosed ? 1 : 4,
            background: "#7D63F8",
            transition: "height 0.1s ease, border-radius 0.1s ease",
            boxShadow: eyesVisible
              ? "0 0 8px rgba(125, 99, 248, 0.7), 0 0 3px rgba(125, 99, 248, 0.4)"
              : "none",
          }}
        />
        {/* Right eye */}
        <div
          style={{
            width: 8,
            height: eyesClosed ? 2 : 8,
            borderRadius: eyesClosed ? 1 : 4,
            background: "#7D63F8",
            transition: "height 0.1s ease, border-radius 0.1s ease",
            boxShadow: eyesVisible
              ? "0 0 8px rgba(125, 99, 248, 0.7), 0 0 3px rgba(125, 99, 248, 0.4)"
              : "none",
          }}
        />
      </div>
    </div>
  );
}
