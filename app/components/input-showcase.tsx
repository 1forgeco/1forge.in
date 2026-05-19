"use client";

import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

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

type FormStatus = "idle" | "loading" | "success" | "error";

export function InputShowcase() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!phone || phone.length < 6) {
      setStatus("error");
      setErrorMsg("Please enter a valid phone number.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection.");
    }
  };

  return (
    <>
      <section
        id="faq"
        style={{
          padding: "80px 24px 80px",
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
          padding: "0 24px 64px",
          background: "var(--color-white-canvas)",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            paddingTop: "52px",
            borderTop: "1px solid rgba(34,29,29,0.08)",
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: "60px",
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
            <a
              href="mailto:studio@1forge.in"
              style={{
                display: "block",
                marginTop: "18px",
                color: "var(--color-cosmic-violet)",
                fontSize: "20px",
                letterSpacing: 0,
              }}
            >
              studio@1forge.in
            </a>
          </h2>

          <form
            className="motion-card"
            onSubmit={handleSubmit}
            style={{
              borderRadius: "24px",
              background: "var(--color-light-alabaster)",
              padding: "38px",
            }}
          >
            {status === "success" ? (
              <div
                className="animate-fade-up"
                style={{
                  textAlign: "center",
                  padding: "32px 0",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "var(--color-cosmic-violet)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "22px", margin: "0 0 8px", color: "var(--color-ink-black)" }}>
                  Request Sent!
                </h3>
                <p style={{ color: "var(--color-pewter)", fontSize: "15px", margin: 0 }}>
                  We&apos;ll get back to you shortly at your email.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-soft"
                  style={{ marginTop: "20px" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <label
                  htmlFor="email-input"
                  style={{
                    display: "block",
                    color: "var(--color-pewter)",
                    fontSize: "22px",
                    marginBottom: "6px",
                  }}
                >
                  Contact Details <span style={{ color: "var(--color-cosmic-violet)" }}>•</span>
                </label>
                <p
                  style={{
                    margin: "-4px 0 18px",
                    color: "var(--color-pewter)",
                    fontSize: "16px",
                    lineHeight: 1.35,
                  }}
                >
                  Tell us more about what you want to build{" "}
                </p>

                {/* Email field */}
                <div style={{ marginBottom: "12px" }}>
                  <label
                    htmlFor="email-input"
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--color-ink-black)",
                      marginBottom: "6px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    placeholder="yourname@business.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    required
                    style={{
                      width: "100%",
                      height: "52px",
                      borderRadius: "14px",
                      border: "none",
                      background: "white",
                      padding: "0 18px",
                      fontSize: "17px",
                      fontFamily: "inherit",
                      color: "var(--color-ink-black)",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Phone field */}
                <div style={{ marginBottom: "18px" }}>
                  <label
                    htmlFor="phone-input"
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--color-ink-black)",
                      marginBottom: "6px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Phone Number
                  </label>
                  <PhoneInput
                    defaultCountry="in"
                    value={phone}
                    onChange={(value) => {
                      setPhone(value);
                      if (status === "error") setStatus("idle");
                    }}
                    inputClassName="phone-input-field"
                    countrySelectorStyleProps={{
                      buttonClassName: "phone-country-btn",
                    }}
                    inputProps={{
                      id: "phone-input",
                    }}
                  />
                </div>

                {/* Message field */}
                <div style={{ marginBottom: "18px" }}>
                  <label
                    htmlFor="message-input"
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--color-ink-black)",
                      marginBottom: "6px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Message <span style={{ color: "var(--color-misty-gray)", fontWeight: 400 }}>(optional)</span>
                  </label>
                  <textarea
                    id="message-input"
                    placeholder="Tell us about your project, business, or idea…"
                    value={message}
                    onChange={(event) => {
                      setMessage(event.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    rows={4}
                    style={{
                      width: "100%",
                      borderRadius: "14px",
                      border: "none",
                      background: "white",
                      padding: "14px 18px",
                      fontSize: "17px",
                      fontFamily: "inherit",
                      color: "var(--color-ink-black)",
                      outline: "none",
                      resize: "vertical",
                      minHeight: "100px",
                    }}
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p
                    className="animate-fade-up"
                    style={{
                      color: "#e53e3e",
                      fontSize: "14px",
                      margin: "0 0 12px",
                      fontWeight: 500,
                    }}
                  >
                    {errorMsg}
                  </p>
                )}

                <button
                  id="email-submit"
                  type="submit"
                  className="btn-primary"
                  disabled={status === "loading"}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    height: "52px",
                    fontSize: "18px",
                    opacity: status === "loading" ? 0.7 : 1,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "loading" ? (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ animation: "spin 1s linear infinite" }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    "Request Call →"
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
