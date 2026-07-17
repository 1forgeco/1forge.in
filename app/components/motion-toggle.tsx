"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

export function MotionToggle() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("1forge:motion");
    const systemReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shouldReduce = stored ? stored === "reduced" : systemReduced;
    document.documentElement.dataset.motion = shouldReduce ? "reduced" : "full";
    window.requestAnimationFrame(() => setReduced(shouldReduce));
  }, []);

  const toggleMotion = () => {
    const next = !reduced;
    setReduced(next);
    document.documentElement.dataset.motion = next ? "reduced" : "full";
    window.localStorage.setItem("1forge:motion", next ? "reduced" : "full");
    window.dispatchEvent(new Event("forge:motion-change"));
  };

  return (
    <button
      type="button"
      className="motion-toggle"
      onClick={toggleMotion}
      aria-label={reduced ? "Enable website motion" : "Reduce website motion"}
      title={reduced ? "Enable motion" : "Reduce motion"}
    >
      {reduced ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      <span>{reduced ? "Motion off" : "Motion on"}</span>
    </button>
  );
}
