"use client";

import { useState } from "react";

const faqs = [
  [
    "What is 1forge?",
    "1forge is a software studio that builds websites, apps, hostel and PG management systems, desktop tools, AI agents, and automations for businesses.",
  ],
  [
    "Can you build a hostel or PG management system?",
    "Yes. We can start from a hostel/PG template and customize rooms, tenants, rent, complaints, staff tasks, notices, reports, and owner dashboards.",
  ],
  [
    "Do you only make websites?",
    "No. We build websites, mobile apps, desktop apps, management dashboards, internal tools, AI agents, and automation workflows.",
  ],
  [
    "How do customers start?",
    "Share your business type, required features, timeline, and examples you like. We convert that into a scope, design direction, and build plan.",
  ],
];

export function InputShowcase() {
  const [email, setEmail] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section
        id="faq"
        style={{
          padding: "120px 24px 140px",
          background: "var(--color-white-canvas)",
          borderTop: "1px solid rgba(34,29,29,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            gap: "90px",
          }}
          className="faq-layout section-rule-motion"
        >
          <h2
            style={{
              fontSize: "54px",
              letterSpacing: "-0.055em",
              lineHeight: 1,
              margin: 0,
            }}
          >
            FAQs
          </h2>

          <div>
            {faqs.map(([question, answer], index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={question}
                  style={{
                    borderBottom: "1px solid rgba(34,29,29,0.08)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      minHeight: "92px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "24px",
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      color: "var(--color-ink-black)",
                      fontFamily: "inherit",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: "25px", fontWeight: 500 }}>{question}</span>
                    <span
                      style={{
                        color: "var(--color-cosmic-violet)",
                        fontSize: "42px",
                        lineHeight: 1,
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p
                      className="animate-fade-up"
                      style={{
                        color: "var(--color-pewter)",
                        fontSize: "18px",
                        lineHeight: 1.45,
                        maxWidth: "740px",
                        margin: "-12px 0 28px",
                      }}
                    >
                      {answer}
                    </p>
                  )}
                </div>
              );
            })}

            <a
              href="#about"
              className="btn-soft-gray"
              style={{ marginTop: "38px", display: "inline-flex" }}
            >
              Learn More About Our Work
            </a>
          </div>
        </div>
      </section>

      <section
        id="cta"
        style={{
          padding: "0 24px 116px",
          background: "var(--color-white-canvas)",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            paddingTop: "88px",
            borderTop: "1px solid rgba(34,29,29,0.08)",
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="newsletter-layout"
        >
          <h2
            style={{
              fontSize: "34px",
              lineHeight: 1.35,
              letterSpacing: "-0.035em",
              margin: 0,
              maxWidth: "440px",
            }}
          >
            Tell us what you want to build.
          </h2>

          <form
            className="motion-card"
            onSubmit={(event) => event.preventDefault()}
            style={{
              borderRadius: "24px",
              background: "var(--color-light-alabaster)",
              padding: "38px",
            }}
          >
            <label
              htmlFor="email-input"
              style={{
                display: "block",
                color: "var(--color-pewter)",
                fontSize: "22px",
                marginBottom: "12px",
              }}
            >
              Email or WhatsApp <span style={{ color: "var(--color-cosmic-violet)" }}>•</span>
            </label>
            <div style={{ display: "flex", gap: "8px" }} className="email-row">
              <input
                id="email-input"
                type="email"
                placeholder="yourname@business.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                style={{
                  flex: 1,
                  minWidth: 0,
                  height: "58px",
                  borderRadius: "18px 6px 6px 18px",
                  border: "none",
                  background: "white",
                  padding: "0 22px",
                  fontSize: "20px",
                  fontFamily: "inherit",
                  color: "var(--color-ink-black)",
                  outline: "none",
                }}
              />
              <button
                id="email-submit"
                type="submit"
                style={{
                  height: "58px",
                  borderRadius: "6px 28px 28px 6px",
                  border: "none",
                  background: "var(--color-ink-black)",
                  color: "white",
                  padding: "0 28px",
                  fontSize: "22px",
                  fontWeight: 500,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Request Call →
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
