"use client";

import { Users, Building2, Star, IndianRupee } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Tenants Managed" },
  { icon: Building2, value: "12+", label: "Active Properties" },
  { icon: Star, value: "4.9", label: "Owner Satisfaction" },
  { icon: IndianRupee, value: "₹0", label: "Setup Cost on Starter" },
];

export function InfraSocialProof() {
  return (
    <div
      style={{
        background: "var(--color-ink-black)",
        padding: "26px 24px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "48px",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            style={{ display: "flex", alignItems: "center", gap: "14px" }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "0px", // Perfectly sharp square
                background: "rgba(13, 148, 136, 0.12)", // Teal-500 opacity
                border: "1px solid rgba(13, 148, 136, 0.25)", // Teal outline
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0d9488", // Teal primary
              }}
            >
              <Icon size={18} />
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em", lineHeight: 1.1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.4)", marginTop: "3px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {stat.label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
