"use client";

import { Building2, Users, LayoutDashboard } from "lucide-react";

const steps = [
  {
    icon: Building2,
    number: "1",
    title: "Register your property",
    desc: "Your PG gets its own branded portal at infrastructure.1forge.in. Share a single link with everyone — tenants, wardens, guards.",
  },
  {
    icon: Users,
    number: "2",
    title: "Invite your team and tenants",
    desc: "Add wardens and guards by role. Send digital onboarding links to tenants — they fill their own details. Parents get separate access.",
  },
  {
    icon: LayoutDashboard,
    number: "3",
    title: "Run everything from one place",
    desc: "Gate passes, dues, complaints, announcements — managed from your dashboard. Each person sees only what they need.",
  },
];

export function InfraHowItWorks() {
  return (
    <section
      id="infra-how-it-works"
      style={{
        background: "var(--color-ink-black)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Delicate background linear mesh glow in Teal */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "450px",
          height: "450px",
          background: "linear-gradient(135deg, rgba(13,148,136,0.06) 0%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "920px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 14px",
              borderRadius: "0px", // Perfectly sharp badge
              border: "1px solid rgba(13, 148, 136, 0.3)",
              background: "rgba(13, 148, 136, 0.12)", // Teal
              fontSize: "12.5px",
              fontWeight: 600,
              color: "#2dd4bf", // Light teal
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            1-3 Weeks Full Deployment
          </div>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.05, letterSpacing: "-0.04em", fontWeight: 700, color: "#ffffff", margin: 0 }}>
            Up and running in three steps
          </h2>
          <p style={{ marginTop: "14px", color: "rgba(255,255,255,0.45)", fontSize: "16.5px", lineHeight: 1.5, maxWidth: "480px" }}>
            No training needed. If you can use WhatsApp, you can use this.
          </p>
        </div>

        {/* Steps — vertical timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical track line in Teal */}
          <div
            style={{
              position: "absolute",
              left: "23px",
              top: "24px",
              bottom: "24px",
              width: "2px",
              background: "linear-gradient(180deg, #0d9488 0%, rgba(13, 148, 136, 0.12) 100%)",
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="hiw-item"
                style={{
                  display: "flex",
                  gap: "28px",
                  alignItems: "flex-start",
                  marginBottom: i < steps.length - 1 ? "48px" : "0",
                  position: "relative",
                }}
              >
                {/* Step indicator in B2B Teal */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "0px", // Perfectly sharp
                    background: "#0d9488", // Teal primary
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 4px 12px rgba(13, 148, 136, 0.2)",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <span style={{ color: "#fff", fontSize: "18px", fontWeight: 800 }}>{step.number}</span>
                </div>

                {/* Content card */}
                <div
                  style={{
                    flex: 1,
                    padding: "24px 28px",
                    borderRadius: "0px", // Perfectly sharp corners
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "0px", // Sharp
                        background: "rgba(13, 148, 136, 0.12)",
                        border: "1px solid rgba(13, 148, 136, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#2dd4bf",
                      }}
                    >
                      <Icon size={15} />
                    </div>
                    <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em" }}>
                      {step.title}
                    </h3>
                  </div>
                  <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.55, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
