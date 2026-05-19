"use client";

import Image from "next/image";
import { BrandLogo } from "./brand-logo";

export function Hero() {
  return (
    <section
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
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: 0,
            borderRadius: "var(--radius-pills)",
            background: "transparent",
            fontSize: "20px",
            color: "var(--color-pewter)",
            fontWeight: 450,
            marginBottom: "32px",
          }}
        >
          <BrandLogo tone="purple" size="sm" showWord={false} />
          1forge Studio
        </div>

        <h1
          className="animate-fade-up delay-100"
          style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            lineHeight: 0.92,
            letterSpacing: "-0.05em",
            fontWeight: 500,
            color: "var(--color-ink-black)",
            opacity: 0,
            margin: 0,
          }}
        >
          Websites, Apps &amp; AI for Businesses
        </h1>

        <p
          className="animate-fade-up delay-200"
          style={{
            marginTop: "24px",
            maxWidth: "640px",
            fontSize: "22px",
            lineHeight: 1.5,
            letterSpacing: "-0.01em",
            fontWeight: 400,
            color: "var(--color-pewter)",
            opacity: 0,
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
          className="animate-fade-up delay-300"
          style={{
            marginTop: "40px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            opacity: 0,
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
          className="animate-scale-in delay-500"
          style={{
            marginTop: "80px",
            marginBottom: "-160px", // pulls next section up over phone bottoms
            width: "100%",
            maxWidth: "860px",
            position: "relative",
            height: "clamp(380px, 42vw, 520px)",
            opacity: 0,
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
