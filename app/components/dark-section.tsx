"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandLogo } from "./brand-logo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceRows = [
  ["Websites", "Landing + CMS", "7-21 days", "SEO-ready", "Live deploy"],
  ["Mobile Apps", "iOS + Android", "4-10 weeks", "Auth + payments", "Store-ready"],
  ["Hostel/PG Systems", "Rooms + fees", "2-6 weeks", "Reports + staff", "Template base"],
  ["AI Automation", "Agents + workflows", "1-4 weeks", "CRM + support", "Custom"],
];

const strategies = [
  {
    title: "For local businesses",
    body: "Websites, booking flows, payment pages, and admin panels that are easy to manage.",
  },
  {
    title: "For operators",
    body: "Hostel, PG, inventory, staff, and customer systems built around your daily work.",
  },
  {
    title: "For teams using AI",
    body: "Agents and automations that handle repetitive messages, reports, leads, and tasks.",
  },
];

export function DarkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const browserRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<HTMLDivElement>(null);
  const strategyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header block: reveal-blur effect
      if (headerRef.current) {
        gsap.set(headerRef.current, {
          autoAlpha: 0,
          y: 42,
          filter: "blur(18px)",
          scale: 0.985,
          willChange: "transform, opacity, filter",
        });

        gsap.to(headerRef.current, {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          onComplete() {
            gsap.set(headerRef.current, { willChange: "auto", clearProps: "filter" });
          },
        });
      }

      // Browser mockup: reveal-blur with delay
      if (browserRef.current) {
        gsap.set(browserRef.current, {
          autoAlpha: 0,
          y: 42,
          filter: "blur(18px)",
          scale: 0.985,
          willChange: "transform, opacity, filter",
        });

        gsap.to(browserRef.current, {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.55,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: browserRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
          },
          onComplete() {
            gsap.set(browserRef.current, { willChange: "auto", clearProps: "filter" });
          },
        });
      }

      // Split copy block
      if (splitRef.current) {
        gsap.set(splitRef.current, {
          autoAlpha: 0,
          y: 30,
          willChange: "transform, opacity",
        });

        gsap.to(splitRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: splitRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          onComplete() {
            gsap.set(splitRef.current, { willChange: "auto" });
          },
        });
      }

      // Strategy cards: stagger
      if (strategyRef.current) {
        const cards = strategyRef.current.querySelectorAll("article");
        gsap.set(cards, {
          autoAlpha: 0,
          y: 30,
          willChange: "transform, opacity",
        });
        gsap.set(strategyRef.current, { visibility: "visible" });

        gsap.to(cards, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: strategyRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          onComplete() {
            gsap.set(cards, { willChange: "auto" });
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="products-outer-section"
      style={{
        padding: "48px 0 0",
      }}
    >
      <div
        className="dark-section-gradient-purple soft-grid-motion dark-section-card"
        style={{
          width: "calc(100% - 40px)",
          margin: "0 auto",
          minHeight: "900px",
          borderRadius: "24px",
          padding: "120px 24px 96px",
          overflow: "hidden",
          position: "relative",
          background:
            "linear-gradient(180deg, var(--color-obsidian) 0%, #161323 48%, #20183a 68%, var(--color-obsidian) 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(15,15,16,0.1) 35%, rgba(15,15,16,0.95) 76%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1120px", margin: "0 auto", position: "relative" }}>
          <div
            ref={headerRef}
            className="motion-shell gsap-reveal"
            style={{
              textAlign: "center",
            }}
          >


            <h2
              style={{
                color: "var(--color-white-canvas)",
                fontSize: "clamp(48px, 8vw, 92px)",
                lineHeight: 0.94,
                letterSpacing: "-0.055em",
                fontWeight: 500,
                margin: 0,
              }}
            >
              Build the software your business needs
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.52)",
                fontSize: "24px",
                lineHeight: 1.25,
                margin: "28px 0 0",
              }}
            >
              From your first business website to full management systems,
              desktop apps, AI agents, and workflow automation.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "18px",
                marginTop: "40px",
                flexWrap: "wrap",
              }}
            >
              <a className="btn-inverse" href="#cta">
                Get a Quote
              </a>
              <a className="btn-muted-dark" href="#developers">
                See Work
              </a>
            </div>
          </div>

          <div
            ref={browserRef}
            className="motion-shell gsap-reveal"
            style={{
              marginTop: "96px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.03)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "46px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
              }}
            >
              {/* Left: traffic-light dots */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                {["#7c5cff", "#a994ff", "#d7ceff"].map((color) => (
                  <span
                    key={color}
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      background: color,
                    }}
                  />
                ))}
              </div>

              {/* Centre: URL bar */}
              <span
                style={{
                  flex: 1,
                  maxWidth: "360px",
                  height: "24px",
                  margin: "0 16px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.5)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                }}
              >
                studio.1forge.in
              </span>

              {/* Right: invisible spacer */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0, visibility: "hidden" }}>
                {["a", "b", "c"].map((k) => (
                  <span key={k} style={{ width: "9px", height: "9px", borderRadius: "50%" }} />
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr" }} className="pro-shell">
              <aside
                style={{
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                  padding: "26px 18px",
                  color: "rgba(255,255,255,0.48)",
                  minHeight: "420px",
                }}
              >
                <strong style={{ color: "white", fontSize: "18px" }}>1forge</strong>
                {["Websites", "Apps", "Hostel/PG", "Automation", "Support"].map((item, index) => (
                  <div
                    key={item}
                    className="motion-card"
                    style={{
                      marginTop: index === 0 ? "34px" : "8px",
                      padding: "11px 12px",
                      borderRadius: "10px",
                      background: item === "Hostel/PG" ? "rgba(255,255,255,0.08)" : "transparent",
                      color: item === "Hostel/PG" ? "white" : "rgba(255,255,255,0.52)",
                      fontSize: "14px",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </aside>

              <div style={{ padding: "44px 52px" }} className="pro-content">
                <h3
                  style={{
                    color: "white",
                    fontSize: "32px",
                    letterSpacing: "-0.025em",
                    margin: 0,
                  }}
                >
                  Services
                </h3>
                <p style={{ color: "rgba(255,255,255,0.45)", margin: "10px 0 34px" }}>
                  Pick a service or combine multiple systems into one business platform.
                </p>

                {/* ── Desktop Table ── */}
                <div className="service-table-desktop">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.2fr .8fr .9fr 1fr 1fr",
                      gap: "16px",
                      color: "rgba(255,255,255,0.34)",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      padding: "16px 20px",
                      borderRadius: "14px 14px 0 0",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <span>Service</span>
                    <span>Scope</span>
                    <span>Timeline</span>
                    <span>Includes</span>
                    <span>Status</span>
                  </div>
                  {serviceRows.map((row, index) => (
                    <div
                      key={row[0]}
                      className="motion-card"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.2fr .8fr .9fr 1fr 1fr",
                        gap: "16px",
                        padding: "18px 20px",
                        background:
                          index === 1 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.035)",
                        borderTop: "1px solid rgba(255,255,255,0.04)",
                        color: "rgba(255,255,255,0.66)",
                        fontSize: "14px",
                      }}
                    >
                      {row.map((cell, cellIndex) => (
                        <span key={`${row[0]}-${cellIndex}`}>{cell}</span>
                      ))}
                    </div>
                  ))}
                </div>

                {/* ── Mobile Cards ── */}
                <div className="service-cards-mobile">
                  {serviceRows.map((row, index) => (
                    <div
                      key={row[0]}
                      className="motion-card"
                      style={{
                        borderRadius: "14px",
                        padding: "16px 18px",
                        background:
                          index === 1 ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        marginBottom: "10px",
                      }}
                    >
                      <div style={{ color: "white", fontWeight: 600, fontSize: "15px", marginBottom: "12px" }}>
                        {row[0]}
                      </div>
                      {[["Scope", row[1]], ["Timeline", row[2]], ["Includes", row[3]], ["Status", row[4]]].map(
                        ([label, value]) => (
                          <div
                            key={label}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "7px 0",
                              borderTop: "1px solid rgba(255,255,255,0.06)",
                            }}
                          >
                            <span style={{ color: "rgba(255,255,255,0.34)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                              {label}
                            </span>
                            <span style={{ color: "rgba(255,255,255,0.72)", fontSize: "13px", fontWeight: 500 }}>
                              {value}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={splitRef}
            className="split-copy gsap-reveal"
            style={{
              marginTop: "92px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "32px",
              alignItems: "center",
            }}
          >
            <div>
              <h3
                style={{
                  color: "white",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
              Services for every digital workflow.
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.62)",
                  fontSize: "24px",
                  lineHeight: 1.35,
                  maxWidth: "760px",
                  margin: "28px 0 0",
                }}
              >
                We can build from scratch, customize a template, or automate
                the manual work your team repeats every day.
              </p>
            </div>
            <a className="btn-muted-dark" href="#developers">
              Learn More
            </a>
          </div>

          <div
            ref={strategyRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "28px",
              marginTop: "72px",
            }}
            className="strategy-grid gsap-reveal"
          >
            {strategies.map((item) => (
              <article
                key={item.title}
                className="motion-card"
                style={{
                  minHeight: "190px",
                  borderRadius: "18px",
                  padding: "34px",
                  background: "rgba(255,255,255,0.055)",
                  color: "white",
                }}
              >
                <h4 style={{ fontSize: "24px", margin: 0 }}>{item.title}</h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.58)",
                    fontSize: "18px",
                    lineHeight: 1.35,
                    margin: "18px 0 0",
                  }}
                >
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
