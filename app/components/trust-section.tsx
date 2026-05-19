"use client";

import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./brand-logo";

const metrics = [
  ["Clean modern design", "Premium interfaces that feel trustworthy and easy to scan."],
  ["Fast delivery", "Lean scope, practical timelines, and quick launch cycles."],
  ["Custom-built solutions", "Software shaped around your actual business workflow."],
  ["Mobile responsive", "Websites, dashboards, and portals that work across devices."],
  ["SEO-ready websites", "Clean structure for discoverability, speed, and local search."],
  ["Scalable systems", "Room to add modules, roles, reports, and integrations later."],
  ["Secure admin dashboards", "Role-aware dashboards for business data and operations."],
  ["Post-launch support", "Help with updates, improvements, training, and maintenance."],
];

const stats = [
  "10+ Digital Products Planned",
  "Web + App + AI Solutions",
  "Custom Business Systems",
  "Support After Launch",
];

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        padding: "120px 24px 92px",
        background: "var(--color-white-canvas)",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 96px" }}>
          <div
            className={isVisible ? "animate-reveal-blur motion-shell" : "motion-shell"}
            style={{
              color: "var(--color-cosmic-violet)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "-0.06em",
              opacity: isVisible ? undefined : 0,
            }}
          >
            <BrandLogo tone="purple" size="lg" />
          </div>
          <h2
            className={isVisible ? "animate-fade-up delay-100" : ""}
            style={{
              fontSize: "clamp(54px, 8vw, 98px)",
              lineHeight: 0.94,
              letterSpacing: "-0.06em",
              fontWeight: 500,
              margin: "60px 0 0",
              opacity: isVisible ? undefined : 0,
            }}
          >
            Why businesses choose 1Forge
          </h2>
          <p
            className={isVisible ? "animate-fade-up delay-200" : ""}
            style={{
              margin: "34px auto 0",
              maxWidth: "760px",
              color: "var(--color-misty-gray)",
              fontSize: "28px",
              lineHeight: 1.25,
              opacity: isVisible ? undefined : 0,
            }}
          >
            Clean modern design, fast delivery, custom-built systems, and
            support after launch. No fake client numbers, just a clear promise
            to build useful software.
          </p>
          <div className="stats-strip">
            {stats.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
              marginTop: "48px",
            }}
          >
            <a href="#products" className="btn-black">
              Explore Services
            </a>
            <a href="#cta" className="btn-soft-gray">
              Request a Call
            </a>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
          className="metric-grid"
        >
          {metrics.map(([title, body], index) => (
            <article
              key={title}
              className={`motion-card ${
                isVisible ? `animate-fade-up delay-${Math.min(index + 3, 8) * 100}` : ""
              }`}
              style={{
                minHeight: "190px",
                borderRadius: "8px",
                background: "var(--color-light-alabaster)",
                padding: "38px 32px",
                opacity: isVisible ? undefined : 0,
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  color: "var(--color-misty-gray)",
                  marginBottom: "32px",
                }}
              >
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
                  <path d="M12 2 20 6v8c0 4.5-3.3 7.2-8 8-4.7-.8-8-3.5-8-8V6l8-4Z" opacity=".55" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "34px",
                  lineHeight: 1,
                  letterSpacing: "-0.045em",
                  margin: 0,
                }}
              >
                {title}
              </h3>
              <p style={{ color: "var(--color-pewter)", fontSize: "20px", margin: "18px 0 0" }}>
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
