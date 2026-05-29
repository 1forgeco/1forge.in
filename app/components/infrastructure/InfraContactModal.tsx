"use client";

import { useState } from "react";
import { Check, Mail, Phone, MessageSquare, Send, X } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

interface InfraContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InfraContactModal({ isOpen, onClose }: InfraContactModalProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

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
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        background: "rgba(15, 23, 42, 0.4)", // Dark slate backdrop overlay
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "460px",
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "0px", // Perfectly sharp corners
          padding: "36px 32px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "transparent",
            border: "none",
            color: "var(--color-misty-gray)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px",
            borderRadius: "0px",
          }}
        >
          <X size={18} />
        </button>

        {status === "success" ? (
          <div
            style={{
              textAlign: "center",
              padding: "24px 0 8px",
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
              onClick={onClose}
              style={{
                marginTop: "24px",
                width: "100%",
                height: "44px",
                borderRadius: "0px", // Sharp
                background: "#0f172a",
                color: "#ffffff",
                border: "none",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 10px",
                borderRadius: "0px", // Perfectly sharp
                border: "1px solid rgba(13, 148, 136, 0.25)",
                background: "#f0fdfa", // Teal-50
                fontSize: "11px",
                fontWeight: 600,
                color: "#0f766e", // Teal-700
                marginBottom: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Get Started Free
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 4px", color: "#0f172a" }}>
              Request Setup Assistance
            </h3>
            <p style={{ color: "var(--color-pewter)", fontSize: "13.5px", lineHeight: 1.45, margin: "0 0 20px" }}>
              Leave your details below and our team will get in touch to onboard your hostel/PG.
            </p>

            {/* Email Field */}
            <div style={{ marginBottom: "16px" }}>
              <label
                htmlFor="modal-email"
                style={{
                  display: "block",
                  fontSize: "11.5px",
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
                <Mail size={15} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--color-misty-gray)" }} />
                <input
                  id="modal-email"
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
                    height: "42px",
                    borderRadius: "0px", // Perfectly sharp
                    border: "1px solid #e2e8f0",
                    background: "#fafafa",
                    padding: "0 14px 0 40px",
                    fontSize: "13.5px",
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
                htmlFor="modal-phone"
                style={{
                  display: "block",
                  fontSize: "11.5px",
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
                <Phone size={15} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--color-misty-gray)" }} />
                <input
                  id="modal-phone"
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
                    height: "42px",
                    borderRadius: "0px", // Perfectly sharp
                    border: "1px solid #e2e8f0",
                    background: "#fafafa",
                    padding: "0 14px 0 40px",
                    fontSize: "13.5px",
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
                htmlFor="modal-message"
                style={{
                  display: "block",
                  fontSize: "11.5px",
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
                <MessageSquare size={15} style={{ position: "absolute", left: "14px", top: "12px", color: "var(--color-misty-gray)" }} />
                <textarea
                  id="modal-message"
                  rows={2}
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
                    padding: "10px 14px 10px 40px",
                    fontSize: "13.5px",
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
              <p style={{ color: "#dc2626", fontSize: "12.5px", fontWeight: 600, margin: "0 0 14px" }}>
                {errorMsg}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                width: "100%",
                height: "44px",
                borderRadius: "0px", // Perfectly sharp
                background: "#0d9488",
                color: "#ffffff",
                border: "none",
                fontSize: "14px",
                fontWeight: 700,
                cursor: status === "loading" ? "not-allowed" : "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                opacity: status === "loading" ? 0.8 : 1,
              }}
            >
              {status === "loading" ? (
                "Sending Request..."
              ) : (
                <>
                  Request Setup Callback <Send size={12} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
