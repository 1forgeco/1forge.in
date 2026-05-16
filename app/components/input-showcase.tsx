"use client";

import { useEffect, useRef, useState } from "react";

export function InputShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      style={{
        padding: "100px 24px",
        background: "var(--color-white-canvas)",
      }}
    >
      <div
        className={isVisible ? "animate-scale-in" : ""}
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          textAlign: "center",
          padding: "64px 40px",
          borderRadius: "var(--radius-cards)",
          background:
            "linear-gradient(135deg, var(--color-light-alabaster), #f0efff)",
          position: "relative",
          overflow: "hidden",
          opacity: isVisible ? undefined : 0,
        }}
      >
        {/* Decorative orb */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(153,142,255,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 36px)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            fontWeight: 500,
            color: "var(--color-ink-black)",
            margin: 0,
          }}
        >
          Ready to start saving?
        </h2>

        <p
          style={{
            marginTop: "14px",
            fontSize: "16px",
            lineHeight: 1.5,
            color: "var(--color-pewter)",
            maxWidth: "440px",
            margin: "14px auto 0",
          }}
        >
          Join 180,000+ users earning industry-leading rates. Enter your email
          and we&apos;ll get you started.
        </p>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            maxWidth: "460px",
            margin: "32px auto 0",
            gap: "0",
          }}
        >
          <input
            id="email-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: 1,
              padding: "14px 20px",
              borderRadius: "20px 0 0 20px",
              border: "1px solid rgba(34, 29, 29, 0.12)",
              borderRight: "none",
              background: "var(--color-white-canvas)",
              fontSize: "15px",
              color: "var(--color-ink-black)",
              outline: "none",
              fontFamily: "inherit",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => {
              (e.target as HTMLElement).style.borderColor =
                "var(--color-cosmic-violet)";
            }}
            onBlur={(e) => {
              (e.target as HTMLElement).style.borderColor =
                "rgba(34, 29, 29, 0.12)";
            }}
          />
          <button
            id="email-submit"
            style={{
              padding: "14px 28px",
              borderRadius: "0 20px 20px 0",
              background: "var(--color-obsidian)",
              color: "var(--color-white-canvas)",
              fontSize: "15px",
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background =
                "var(--color-cosmic-violet)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background =
                "var(--color-obsidian)";
            }}
          >
            Get Started
          </button>
        </div>

        <p
          style={{
            marginTop: "14px",
            fontSize: "12px",
            color: "var(--color-misty-gray)",
          }}
        >
          Free forever • No credit card required
        </p>
      </div>
    </section>
  );
}
