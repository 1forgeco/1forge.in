"use client";

import {
  QrCode,
  UtensilsCrossed,
  IndianRupee,
  MessageCircleWarning,
  Megaphone,
  FolderLock,
  LayoutGrid,
  Siren,
  UserPlus,
  UserCheck,
  Users,
  BarChart3,
  ToggleRight,
} from "lucide-react";

/* ── Primary Hero features ── */
const heroFeatures = [
  {
    icon: QrCode,
    title: "Gate pass with QR scan",
    desc: "Every tenant gets a digital gate pass. Guards scan and approve at the gate — no more filling registers. Parents see the in/out history instantly.",
    color: "#0d9488", // Teal primary
    bg: "#ffffff",
    borderColor: "#e2e8f0",
  },
  {
    icon: IndianRupee,
    title: "Dues & payment collection",
    desc: "Track rent, electricity, and damage fees per tenant. Send WhatsApp reminders automatically. Collect online — no more chasing room to room.",
    color: "#059669", // Emerald primary
    bg: "#ffffff",
    borderColor: "#e2e8f0",
  },
  {
    icon: UtensilsCrossed,
    title: "Mess menu & feedback",
    desc: "Publish the weekly menu for tenants to see. Get honest meal feedback so you know what's working and what needs to change.",
    color: "#d97706", // Elegant amber/gold B2B
    bg: "#ffffff",
    borderColor: "#e2e8f0",
  },
];

/* ── Secondary features ── */
const otherFeatures = [
  { icon: MessageCircleWarning, title: "Complaints", desc: "Raise, assign, and resolve" },
  { icon: Megaphone, title: "Announcements", desc: "Broadcast or per-room" },
  { icon: FolderLock, title: "Document vault", desc: "KYC and ID storage" },
  { icon: LayoutGrid, title: "Room & floor view", desc: "Visual occupancy map" },
  { icon: Siren, title: "Emergency contacts", desc: "SOS + staff directory" },
  { icon: UserPlus, title: "Digital onboarding", desc: "Invite link for tenants" },
  { icon: UserCheck, title: "Visitor log", desc: "Pre-approve and track" },
  { icon: Users, title: "Parent portal", desc: "Guardian read-only view" },
  { icon: BarChart3, title: "Analytics", desc: "Revenue & occupancy trends" },
];

export function InfraFeatures() {
  return (
    <section
      id="infra-features"
      style={{ background: "#ffffff", padding: "100px 24px", borderBottom: "1px solid #f1f5f9" }}
    >
      {/* Header */}
      <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", marginBottom: "56px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "5px 14px",
            borderRadius: "0px", // Sharp badge
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
          <ToggleRight size={13} style={{ color: "#0d9488" }} /> Modularity Redefined
        </div>
        <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.04em", fontWeight: 700, margin: 0, color: "#0f172a" }}>
          Everything your property needs, nothing it doesn&apos;t
        </h2>
        <p style={{ marginTop: "16px", color: "var(--color-pewter)", fontSize: "16.5px", lineHeight: 1.5, maxWidth: "540px", marginLeft: "auto", marginRight: "auto" }}>
          Enable only what your PG actually uses. Turn features on or off anytime from your dashboard.
        </p>
      </div>

      {/* ── Hero feature cards (3 big ones) ── */}
      <div
        className="infra-hero-features"
        style={{
          maxWidth: "1040px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {heroFeatures.map((f, idx) => {
          const Icon = f.icon;
          return (
            <div
              key={idx}
              className="hero-feat"
              style={{
                borderRadius: "0px", // Perfectly sharp corners
                padding: "36px 30px",
                background: f.bg,
                border: "1px solid #e2e8f0", // Thin clean B2B border
                boxShadow: "0 4px 16px rgba(0,0,0,0.01)", // Minimal clean shadow
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "0px", // Sharp icon holder
                  background: "#f0fdfa", // Teal light
                  border: `1px solid rgba(13, 148, 136, 0.2)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: f.color,
                }}
              >
                <Icon size={20} />
              </div>
              <h3 style={{ margin: "24px 0 0", fontSize: "20px", letterSpacing: "-0.02em", fontWeight: 700, color: "#0f172a" }}>
                {f.title}
              </h3>
              <p style={{ margin: "12px 0 0", color: "var(--color-pewter)", fontSize: "14.5px", lineHeight: 1.55 }}>
                {f.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Divider line */}
      <div style={{ maxWidth: "1040px", margin: "48px auto", borderTop: "1px solid #edf2f7" }} />

      {/* ── Secondary features (compact cards) ── */}
      <div
        className="infra-mini-features"
        style={{
          maxWidth: "1040px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {otherFeatures.map((f, idx) => {
          const Icon = f.icon;
          return (
            <div
              key={idx}
              className="mini-feat"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "18px 20px",
                borderRadius: "0px", // Sharp
                background: "#f8fafc", // Cool Slate background
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "0px", // Sharp
                  background: "#f0fdfa", // Teal-50
                  border: "1px solid rgba(13, 148, 136, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0d9488",
                  flexShrink: 0,
                }}
              >
                <Icon size={16} />
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.01em" }}>
                  {f.title}
                </div>
                <div style={{ fontSize: "12px", color: "var(--color-misty-gray)", marginTop: "1px", fontWeight: 500 }}>
                  {f.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .infra-hero-features { grid-template-columns: 1fr !important; gap: 20px !important; }
          .infra-mini-features { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .infra-mini-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
