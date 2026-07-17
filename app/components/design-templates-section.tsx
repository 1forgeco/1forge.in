"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { MediaSkeleton } from "./media-skeleton";

const DESIGNS_URL =
  process.env.NEXT_PUBLIC_DESIGNS_URL ?? "https://1forgedesign.vercel.app/";

const templatePreviews = [
  {
    number: "02",
    title: "Midnight Couture",
    category: "Luxury / Editorial",
    video: "/designs/template-02.mp4",
    poster: "/designs/hero-dark-luxury-2.webp",
  },
  {
    number: "03",
    title: "Enchanted Diary",
    category: "Minimal / Portfolio",
    video: "/designs/template-03.mp4",
    poster: "/designs/hero-minimal-bold-2.webp",
  },
  {
    number: "09",
    title: "Dulce Flask",
    category: "Product / Commerce",
    video: "/designs/template-09.mp4",
    poster: "/designs/hero-stats-flutuantes-3.webp",
  },
  {
    number: "21",
    title: "Aqua Veil",
    category: "Glass / Interface",
    video: "/designs/template-21.mp4",
    poster: "/designs/hero-aqua-glass-1.webp",
  },
  {
    number: "26",
    title: "Ferrari 296 GTB",
    category: "Automotive / Launch",
    video: "/designs/template-26.mp4",
    poster: "/designs/hero-ferrari-296-1.webp",
  },
  {
    number: "28",
    title: "Crystal Lotus",
    category: "Wellness / Brand",
    video: "/designs/template-28.mp4",
    poster: "/designs/hero-crystal-lotus-1.webp",
  },
  {
    number: "34",
    title: "Smart Key",
    category: "Technology / Product",
    video: "/designs/template-34.mp4",
    poster: "/designs/hero-smart-key-1.webp",
  },
  {
    number: "36",
    title: "Techwear",
    category: "Fashion / Campaign",
    video: "/designs/template-36.mp4",
    poster: "/designs/hero-techwear-1.webp",
  },
];

type TemplatePreview = (typeof templatePreviews)[number];

function DesignPreviewVideo({ item }: { item: TemplatePreview }) {
  const shellRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisibleRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const shell = shellRef.current;
    const video = videoRef.current;
    if (!shell || !video) return;

    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.intersectionRatio >= 0.34;

        if (entry.isIntersecting) setShouldLoad(true);

        if (isVisibleRef.current && !reducedMotionRef.current) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: "280px 80px", threshold: [0, 0.08, 0.34] },
    );

    observer.observe(shell);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const video = videoRef.current;
    if (!video) return;
    video.load();

    if (isVisibleRef.current && !reducedMotionRef.current) {
      video.play().catch(() => undefined);
    }
  }, [shouldLoad]);

  const handleCanPlay = () => {
    setIsReady(true);
    if (isVisibleRef.current && !reducedMotionRef.current) {
      videoRef.current?.play().catch(() => undefined);
    }
  };

  return (
    <div
      ref={shellRef}
      className={`design-preview-media ${isReady ? "is-ready" : ""}`}
    >
      <MediaSkeleton active={!isReady} label={`${item.number} / Loading preview`} />
      <video
        ref={videoRef}
        src={shouldLoad ? item.video : undefined}
        muted
        loop
        playsInline
        preload="none"
        poster={item.poster}
        aria-label={`${item.title} animated design preview`}
        onCanPlay={handleCanPlay}
        onPlaying={() => setIsReady(true)}
        onError={() => setIsReady(true)}
      />
    </div>
  );
}

export function DesignTemplatesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateControls = () => {
      const end = carousel.scrollWidth - carousel.clientWidth;
      setCanScrollBack(carousel.scrollLeft > 8);
      setCanScrollForward(carousel.scrollLeft < end - 8);
    };

    updateControls();
    carousel.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      carousel.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, []);

  const moveCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({
      left: direction * Math.max(300, carousel.clientWidth * 0.72),
      behavior: "smooth",
    });
  };

  return (
    <section id="designs" className="design-showcase">
      <div className="design-showcase-shell">
        <div className="design-showcase-orbit" aria-hidden="true">
          <span />
        </div>

        <div className="design-showcase-header">
          <div>
            <div className="design-showcase-eyebrow">
              <span className="design-showcase-ring" aria-hidden="true" />
              1FORGE DESIGNS
            </div>
            <h2>
              Interfaces with
              <br />
              <em>motion built in.</em>
            </h2>
          </div>
          <div className="design-showcase-intro">
            <p>
              Premium UI/UX templates for landing pages, products and digital
              brands—fully editable and made to help good ideas launch faster.
            </p>
            <div className="design-carousel-controls" aria-label="Carousel controls">
              <button
                type="button"
                onClick={() => moveCarousel(-1)}
                disabled={!canScrollBack}
                aria-label="View previous designs"
              >
                <ArrowLeft size={18} strokeWidth={1.8} />
              </button>
              <button
                type="button"
                onClick={() => moveCarousel(1)}
                disabled={!canScrollForward}
                aria-label="View more designs"
              >
                <ArrowRight size={18} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="design-carousel no-scrollbar"
          aria-label="UI and UX design template previews"
        >
          {templatePreviews.map((item) => (
            <article className="design-carousel-card" key={item.number}>
              <DesignPreviewVideo item={item} />
              <div className="design-carousel-meta">
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="design-showcase-footer">
          <p>Explore the full collection and find a starting point for your next interface.</p>
          <a href={DESIGNS_URL} target="_blank" rel="noreferrer">
            See more designs
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
