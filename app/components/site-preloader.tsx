"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ForgeLoader } from "./forge-loader";

const homepageAssets = [
  "/forge-loader-logo.png",
  "/1forge-logo.png",
  "/1forge-mark.png",
  "/workedWith/jitsi-logo.png",
  "/workedWith/openstreetmap.png",
  "/workedWith/AirflowLogo.svg.png",
  "/designs/hero-aqua-glass-1.webp",
  "/designs/hero-crystal-lotus-1.webp",
  "/designs/hero-dark-luxury-2.webp",
  "/designs/hero-ferrari-296-1.webp",
  "/designs/hero-minimal-bold-2.webp",
  "/designs/hero-smart-key-1.webp",
  "/designs/hero-stats-flutuantes-3.webp",
  "/designs/hero-techwear-1.webp",
  "/designs/template-02.mp4",
  "/designs/template-03.mp4",
  "/designs/template-09.mp4",
  "/designs/template-21.mp4",
  "/designs/template-26.mp4",
  "/designs/template-28.mp4",
  "/designs/template-34.mp4",
  "/designs/template-36.mp4",
] as const;

export function SitePreloader({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const revealSite = useCallback(() => setReady(true), []);

  useEffect(() => {
    if (ready) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [ready]);

  return (
    <>
      {!ready ? <ForgeLoader assets={homepageAssets} onComplete={revealSite} /> : null}
      <div className="site-preload-content" aria-busy={!ready} inert={!ready}>
        {children}
      </div>
    </>
  );
}
