"use client";

import { useEffect, useState } from "react";

type NetworkInformationLike = {
  saveData?: boolean;
  effectiveType?: string;
  addEventListener?: (type: "change", listener: () => void) => void;
  removeEventListener?: (type: "change", listener: () => void) => void;
};

type NavigatorWithConnection = Navigator & {
  connection?: NetworkInformationLike;
};

export type AdaptiveMediaProfile = {
  initialized: boolean;
  allowMotion: boolean;
  constrained: boolean;
  compact: boolean;
};

const initialProfile: AdaptiveMediaProfile = {
  initialized: false,
  allowMotion: false,
  constrained: false,
  compact: false,
};

export function readAdaptiveMediaProfile(): AdaptiveMediaProfile {
  if (typeof window === "undefined") return initialProfile;

  const connection = (navigator as NavigatorWithConnection).connection;
  const reducedBySystem = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reducedByUser = document.documentElement.dataset.motion === "reduced";
  const constrained = Boolean(
    connection?.saveData ||
      connection?.effectiveType === "slow-2g" ||
      connection?.effectiveType === "2g",
  );

  return {
    initialized: true,
    constrained,
    compact: window.matchMedia("(max-width: 640px)").matches,
    allowMotion: !reducedBySystem && !reducedByUser && !constrained,
  };
}

export function useAdaptiveMedia() {
  const [profile, setProfile] = useState<AdaptiveMediaProfile>(initialProfile);

  useEffect(() => {
    const connection = (navigator as NavigatorWithConnection).connection;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setProfile(readAdaptiveMediaProfile());

    update();
    motionQuery.addEventListener("change", update);
    connection?.addEventListener?.("change", update);
    window.addEventListener("forge:motion-change", update);
    window.addEventListener("resize", update, { passive: true });

    return () => {
      motionQuery.removeEventListener("change", update);
      connection?.removeEventListener?.("change", update);
      window.removeEventListener("forge:motion-change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return profile;
}
