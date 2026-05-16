"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Protected Balances",
    description:
      "Your deposits are secured with transparent on-chain controls and balance protection up to $1M.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Reliable Growth",
    description:
      "Earn predictable yield from battle-tested protocols with consistent, above-market returns.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "General Purpose",
    description:
      "Build flexible savings flows with a predictable, enterprise-grade backbone for any use case.",
  },
];

export function FeatureGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="features"
      style={{
        padding: "80px 24px",
        background: "var(--color-white-canvas)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto 56px",
          }}
        >
          <div
            className={isVisible ? "animate-fade-up" : ""}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 14px 4px 4px",
              borderRadius: "var(--radius-pills)",
              background: "rgba(153, 142, 255, 0.08)",
              fontSize: "12px",
              color: "var(--color-cosmic-violet)",
              fontWeight: 500,
              marginBottom: "20px",
              opacity: isVisible ? 1 : 0,
            }}
          >
            <span
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "var(--color-cosmic-violet)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: 700,
              }}
            >
              ✦
            </span>
            Core Features
          </div>

          <h2
            className={isVisible ? "animate-fade-up delay-100" : ""}
            style={{
              fontSize: "clamp(32px, 5vw, 40px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontWeight: 500,
              color: "var(--color-ink-black)",
              margin: 0,
              opacity: isVisible ? undefined : 0,
            }}
          >
            Built for trust.
            <br />
            Designed for growth.
          </h2>

          <p
            className={isVisible ? "animate-fade-up delay-200" : ""}
            style={{
              marginTop: "16px",
              fontSize: "16px",
              lineHeight: 1.5,
              color: "var(--color-pewter)",
              opacity: isVisible ? undefined : 0,
            }}
          >
            Every feature is engineered with security and transparency at its
            core.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {features.map((feature, index) => (
            <article
              key={feature.title}
              id={`feature-card-${index}`}
              className={
                isVisible
                  ? `card-alabaster animate-fade-up delay-${(index + 3) * 100}`
                  : "card-alabaster"
              }
              style={{
                cursor: "default",
                opacity: isVisible ? undefined : 0,
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(153, 142, 255, 0.1)",
                  color: "var(--color-cosmic-violet)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                {feature.icon}
              </div>

              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: "var(--color-ink-black)",
                  margin: 0,
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  marginTop: "10px",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  color: "var(--color-pewter)",
                }}
              >
                {feature.description}
              </p>

              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: 450,
                  color: "var(--color-cosmic-violet)",
                  cursor: "pointer",
                  transition: "gap 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.gap = "10px";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.gap = "6px";
                }}
              >
                Learn more
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
