"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";

const reelItems = [
  {
    number: "01",
    title: "Automotive launch",
    type: "Motion direction",
    video: "/designs/template-26.mp4",
    poster: "/designs/hero-ferrari-296-1.webp",
  },
  {
    number: "02",
    title: "Aqua product story",
    type: "Interface study",
    video: "/designs/template-21.mp4",
    poster: "/designs/hero-aqua-glass-1.webp",
  },
  {
    number: "03",
    title: "Techwear campaign",
    type: "Visual system",
    video: "/designs/template-36.mp4",
    poster: "/designs/hero-techwear-1.webp",
  },
  {
    number: "04",
    title: "Crystal wellness",
    type: "Brand experience",
    video: "/designs/template-28.mp4",
    poster: "/designs/hero-crystal-lotus-1.webp",
  },
] as const;

type ReelItem = (typeof reelItems)[number];

function ReelVideo({ item }: { item: ReelItem }) {
  const shellRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const shell = shellRef.current;
    const video = videoRef.current;
    if (!shell || !video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLoadVideo(true);
        if (entry.intersectionRatio > 0.4 && !reduced) video.play().catch(() => undefined);
        else video.pause();
      },
      { rootMargin: "240px 80px", threshold: [0, 0.4] },
    );
    observer.observe(shell);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={shellRef} className={`project-reel__media ${ready ? "is-ready" : ""}`}>
      <div className="project-reel__skeleton" aria-hidden="true" />
      <video
        ref={videoRef}
        src={loadVideo ? item.video : undefined}
        poster={item.poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`${item.title} motion preview`}
        onCanPlay={() => setReady(true)}
        onPlaying={() => setReady(true)}
        onError={() => setReady(true)}
      />
      <span className="project-reel__play"><Play size={13} fill="currentColor" /> Motion preview</span>
    </div>
  );
}

export function ProjectReel() {
  const reelRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const reel = reelRef.current;
    if (!reel) return;
    reel.scrollBy({ left: direction * Math.max(320, reel.clientWidth * 0.66), behavior: "smooth" });
  };

  return (
    <section className="project-reel experiment-section">
      <div className="experiment-shell">
        <div className="experiment-heading experiment-heading--split">
          <div>
            <span className="experiment-kicker">1FORGE MOTION REEL</span>
            <h2>Directions designed to <em>be felt.</em></h2>
          </div>
          <div className="project-reel__intro">
            <p>Interface studies and visual directions from the 1Forge design lab. Real client collaborations live on our work page.</p>
            <div>
              <button type="button" onClick={() => move(-1)} aria-label="Previous reel items"><ArrowLeft size={18} /></button>
              <button type="button" onClick={() => move(1)} aria-label="Next reel items"><ArrowRight size={18} /></button>
            </div>
          </div>
        </div>

        <div ref={reelRef} className="project-reel__track no-scrollbar">
          {reelItems.map((item) => (
            <article key={item.number}>
              <ReelVideo item={item} />
              <div className="project-reel__meta">
                <span>{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.type}</p></div>
              </div>
            </article>
          ))}
        </div>

        <div className="project-reel__footer">
          <span>Want the evidence behind the aesthetic?</span>
          <Link href="/work">See real collaborations <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
