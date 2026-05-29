"use client";

import { useState } from "react";
import { Check, Mail, Phone, MessageSquare, Send } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function InfraContact() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

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
    <section
      id="infra-contact"
      style={{
        background: "var(--color-white-canvas)",
        padding: "100px 24px",
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        
        {/* Layout Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "56px",
            alignItems: "center",
          }}
          className="infra-contact-grid"
        >
          {/* Left: Content Block */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "5px 14px",
                borderRadius: "0px", // Perfectly sharp
                border: "1px solid rgba(13, 148, 136, 0.25)",
                background: "#f0fdfa", // Teal-50
                fontSize: "12.5px",
                fontWeight: 600,
                color: "#0f766e", // Teal-700
                marginBottom: "20px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Get Started Today
            </div>
            <h2
              style={{
                fontSize: "clamp(30px, 4.5vw, 44px)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                fontWeight: 700,
                color: "#0f172a",
                margin: 0,
              }}
            >
              Ready to automate your property?
            </h2>
            <p
              style={{
                marginTop: "16px",
                fontSize: "16.5px",
                lineHeight: 1.55,
                color: "var(--color-pewter)",
                maxWidth: "440px",
              }}
            >
              Leave your contact details and our team will get in touch in under 10 minutes to help onboard your hostel or PG.
            </p>

            {/* Direct support points */}
            <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Full end-to-end setup support included",
                "No credit card required for Starter",
                "Full warden & guard training provided",
              ].map((point, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: 600, color: "#334155" }}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      background: "#f0fdfa",
                      border: "1px solid rgba(13, 148, 136, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0d9488",
                    }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Sharp Contact Form */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0", // Clean subtle outline
              borderRadius: "0px", // Perfectly sharp corners
              padding: "36px 32px",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.02)",
            }}
          >
            {status === "success" ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "24px 0",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "0px", // Perfectly sharp
                    background: "#f0fdfa",
                    border: "1px solid #c2f0d1",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    color: "#1e682f",
                  }}
                >
                  <Check size={24} strokeWidth={3} />
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 8px", color: "#0f172a" }}>
                  Callback Request Received
                </h3>
                <p style={{ color: "var(--color-pewter)", fontSize: "14px", margin: 0, lineHeight: 1.5 }}>
                  Our onboarding specialist will contact you shortly at your details.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: "20px",
                    background: "transparent",
                    border: "1px solid #0f172a",
                    color: "#0f172a",
                    fontSize: "13px",
                    fontWeight: 600,
                    padding: "8px 18px",
                    borderRadius: "0px", // Sharp
                    cursor: "pointer",
                  }}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 18px", color: "#0f172a" }}>
                  Request Setup Assistance
                </h3>

                {/* Email Field */}
                <div style={{ marginBottom: "16px" }}>
                  <label
                    htmlFor="infra-email"
                    style={{
                      display: "block",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#0f172a",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.03em",
                    }}
                  >
                    Email Address
                  </label>
                  <div style={{ position: "relative" }}>
                    <Mail size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--color-misty-gray)" }} />
                    <input
                      id="infra-email"
                      type="email"
                      required
                      placeholder="yourname@business.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      style={{
                        width: "100%",
                        height: "44px",
                        borderRadius: "0px", // Perfectly sharp
                        border: "1px solid #e2e8f0",
                        background: "#fafafa",
                        padding: "0 14px 0 40px",
                        fontSize: "14px",
                        fontFamily: "inherit",
                        color: "#0f172a",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#0d9488")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div style={{ marginBottom: "16px" }}>
                  <label
                    htmlFor="infra-phone"
                    style={{
                      display: "block",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#0f172a",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.03em",
                    }}
                  >
                    Phone Number
                  </label>
                  <div style={{ position: "relative" }}>
                    <Phone size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--color-misty-gray)" }} />
                    <input
                      id="infra-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      style={{
                        width: "100%",
                        height: "44px",
                        borderRadius: "0px", // Perfectly sharp
                        border: "1px solid #e2e8f0",
                        background: "#fafafa",
                        padding: "0 14px 0 40px",
                        fontSize: "14px",
                        fontFamily: "inherit",
                        color: "#0f172a",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#0d9488")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div style={{ marginBottom: "20px" }}>
                  <label
                    htmlFor="infra-message"
                    style={{
                      display: "block",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#0f172a",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.03em",
                    }}
                  >
                    Notes <span style={{ color: "var(--color-misty-gray)", fontWeight: 500 }}>(optional)</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <MessageSquare size={16} style={{ position: "absolute", left: "14px", top: "14px", color: "var(--color-misty-gray)" }} />
                    <textarea
                      id="infra-message"
                      rows={3}
                      placeholder="Number of rooms, specific requirements..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      style={{
                        width: "100%",
                        borderRadius: "0px", // Perfectly sharp
                        border: "1px solid #e2e8f0",
                        background: "#fafafa",
                        padding: "12px 14px 12px 40px",
                        fontSize: "14px",
                        fontFamily: "inherit",
                        color: "#0f172a",
                        outline: "none",
                        resize: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#0d9488")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  </div>
                </div>

                {/* Error Box */}
                {status === "error" && (
                  <p style={{ color: "#dc2626", fontSize: "13px", fontWeight: 600, margin: "0 0 14px" }}>
                    {errorMsg}
                  </p>
                )}

                {/* Submit Button (Perfectly Sharp & Teal Accent) */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    width: "100%",
                    height: "46px",
                    borderRadius: "0px", // Perfectly sharp as requested
                    background: "#0d9488",
                    color: "#ffffff",
                    border: "none",
                    fontSize: "14.5px",
                    fontWeight: 700,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    opacity: status === "loading" ? 0.8 : 1,
                  }}
                >
                  {status === "loading" ? (
                    "Sending Request..."
                  ) : (
                    <>
                      Request Callback <Send size={13} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 760px) {
          .infra-contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
