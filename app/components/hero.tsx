"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandLogo } from "./brand-logo";
import { DynamicIsland } from "./dynamic-island";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const phonesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Immediately set initial state — prevents flicker
      // autoAlpha handles both opacity AND visibility atomically
      gsap.set([badgeRef.current, h1Ref.current, pRef.current, ctaRef.current], {
        autoAlpha: 0,
        y: 30,
        willChange: "transform, opacity",
      });

      gsap.set(phonesRef.current, {
        autoAlpha: 0,
        scale: 0.92,
        y: 0,
      });

      // Staggered reveal timeline
      tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.4 })
        .to(h1Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.25")
        .to(pRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3")
        .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.25")
        .to(phonesRef.current, { autoAlpha: 1, scale: 1, duration: 0.55, ease: "power2.out" }, "-=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-gradient hero-section-card"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px 0",
        width: "calc(100% - 40px)",
        margin: "0 auto",
        borderRadius: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          ref={badgeRef}
          className="gsap-reveal"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: 0,
            borderRadius: "var(--radius-pills)",
            background: "transparent",
            fontSize: "15px",
            color: "var(--color-pewter)",
            fontWeight: 700,
            letterSpacing: "0.08em",
            marginBottom: "32px",

          }}
        >
          1FORGE STUDIO
        </div>

        <h1
          ref={h1Ref}
          className="gsap-reveal"
          style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            lineHeight: 0.92,
            letterSpacing: "-0.05em",
            fontWeight: 500,
            color: "var(--color-ink-black)",
            margin: 0,

          }}
        >
          AI , Apps &amp; Websites for Businesses 
        </h1>

        <p
          ref={pRef}
          className="gsap-reveal"
          style={{
            marginTop: "24px",
            maxWidth: "640px",
            fontSize: "22px",
            lineHeight: 1.5,
            letterSpacing: "-0.01em",
            fontWeight: 400,
            color: "var(--color-pewter)",

          }}
        >
          We design and build{" "}
          <span
            style={{
              color: "var(--color-cosmic-violet)",
              fontWeight: 500,
              textDecoration: "underline",
              textDecorationThickness: "2px",
              textUnderlineOffset: "5px",
            }}
          >
            websites
          </span>{" "}
          , mobile apps, hostel and PG management systems, desktop software,
          AI agents, and automations that make daily operations easier.
        </p>

        <div
          ref={ctaRef}
          className="gsap-reveal"
          style={{
            marginTop: "40px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",

          }}
        >
          <button id="hero-cta-primary" className="btn-primary">
            Start a Project
          </button>

          <button id="hero-cta-secondary" className="btn-ghost-dark">
            View Services
          </button>
        </div>
        {/* ── Phone mockup cascade — inside flex, bleeds into dark section via negative margin ── */}
        <div
          ref={phonesRef}
          className="gsap-reveal"
          style={{
            marginTop: "80px",
            marginBottom: "-160px", // pulls next section up over phone bottoms
            width: "100%",
            maxWidth: "860px",
            position: "relative",
            height: "clamp(380px, 42vw, 520px)",

          }}
        >
          {/* Left Phone */}
          <div
            style={{
              position: "absolute",
              width: "clamp(160px, 18vw, 230px)",
              aspectRatio: "418 / 850",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%) translateX(clamp(-220px,-21vw,-160px))",
              zIndex: 5,
            }}
          >
            <div className="animate-float" style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image src="/Left.svg" alt="1forge website project screen" fill sizes="clamp(160px,18vw,230px)" style={{ objectFit: "contain" }} priority />
            </div>
          </div>

          {/* Center Phone */}
          <div
            style={{
              position: "absolute",
              width: "clamp(180px, 20vw, 260px)",
              aspectRatio: "418 / 850",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image src="/Mid.svg" alt="1forge business dashboard screen" fill sizes="clamp(180px,20vw,260px)" style={{ objectFit: "contain" }} priority />
              {/* Dynamic Island overlay */}
              <DynamicIsland />
            </div>
          </div>

          {/* Right Phone */}
          <div
            style={{
              position: "absolute",
              width: "clamp(160px, 18vw, 230px)",
              aspectRatio: "418 / 850",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%) translateX(clamp(160px,21vw,220px))",
              zIndex: 5,
            }}
          >
            <div className="animate-float" style={{ position: "relative", width: "100%", height: "100%", animationDelay: "350ms" }}>
              <Image src="/Right.svg" alt="1forge automation results screen" fill sizes="clamp(160px,18vw,230px)" style={{ objectFit: "contain" }} priority />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
