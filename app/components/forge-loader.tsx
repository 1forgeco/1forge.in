"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ForgeLoaderProps = {
  assets: readonly string[];
  onComplete: () => void;
};

const wait = (duration: number) =>
  new Promise<void>((resolve) => window.setTimeout(resolve, duration));

export function ForgeLoader({ assets, onComplete }: ForgeLoaderProps) {
  const [loaded, setLoaded] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let stopped = false;
    let finishing = false;
    const startedAt = performance.now();
    let cursor = 0;

    const preloadAsset = async (url: string) => {
      try {
        const response = await fetch(url, { cache: "force-cache" });
        if (!response.ok) throw new Error(`Unable to preload ${url}`);
        await response.blob();
      } catch {
        // A failed asset is released to its local skeleton instead of blocking the site.
      } finally {
        if (!stopped) setLoaded((current) => Math.min(current + 1, assets.length));
      }
    };

    const worker = async () => {
      while (!stopped) {
        const index = cursor;
        cursor += 1;
        if (index >= assets.length) return;
        await preloadAsset(assets[index]);
      }
    };

    const waitForPage = () =>
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) =>
            window.addEventListener("load", () => resolve(), { once: true }),
          );

    const finish = async () => {
      if (finishing || stopped) return;
      finishing = true;

      const minimumDelay = Math.max(0, 1100 - (performance.now() - startedAt));
      if (minimumDelay) await wait(minimumDelay);
      if (stopped) return;

      setLoaded(assets.length);
      await wait(140);
      if (stopped) return;
      setLeaving(true);
      await wait(520);
      if (!stopped) onCompleteRef.current();
    };

    const safetyTimer = window.setTimeout(() => void finish(), 24000);

    void (async () => {
      const fontReady = document.fonts?.ready ?? Promise.resolve();
      await Promise.all([
        Promise.all(Array.from({ length: Math.min(4, assets.length) }, worker)),
        fontReady,
        waitForPage(),
      ]);
      window.clearTimeout(safetyTimer);
      await finish();
    })();

    return () => {
      stopped = true;
      window.clearTimeout(safetyTimer);
    };
  }, [assets]);

  const progress = assets.length === 0 ? 100 : Math.round((loaded / assets.length) * 100);

  return (
    <div
      className={`forge-loader ${leaving ? "forge-loader--leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Loading the 1Forge experience: ${progress}%`}
    >
      <div className="forge-loader__aura" aria-hidden="true" />
      <div className="forge-loader__content">
        <Image
          src="/forge-loader-logo.png"
          alt="1Forge"
          width={1040}
          height={276}
          priority
          unoptimized
        />
        <span>DIGITAL PRODUCT STUDIO</span>
        <div
          className="forge-loader__track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <i style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <div className="forge-loader__meta" aria-hidden="true">
          <small>FORGING THE EXPERIENCE</small>
          <b>{String(progress).padStart(2, "0")}%</b>
        </div>
      </div>
    </div>
  );
}
