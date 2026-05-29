"use client";

import { QrCode, Check, Clock, AlertTriangle } from "lucide-react";



export function InfraHero({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section
      id="infra-hero"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "90px 24px 70px",
        width: "calc(100% - 40px)",
        margin: "0 auto",
        borderRadius: "0px", // Perfectly sharp corners
        border: "1px solid #e2e8f0",
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      {/* Soft background grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(#0d9488 0.03rem, transparent 0.03rem)",
          backgroundSize: "24px 24px",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1120px", margin: "0 auto", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* ── Headline block ABOVE the split comparison ── */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "0px", // Sharp badge
              border: "1px solid rgba(13, 148, 136, 0.25)",
              background: "#f0fdfa", // Teal-50
              fontSize: "12.5px",
              fontWeight: 600,
              color: "#0f766e", // Teal-700
              marginBottom: "24px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            <AlertTriangle size={13} style={{ color: "#0d9488" }} />
            Modern PG & Hostel Administration Platform
          </div>

          <h1
            style={{
              fontSize: "clamp(34px, 5.5vw, 60px)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              fontWeight: 700,
              color: "#0f172a", // Slate-900 B2B standard
              margin: 0,
            }}
          >
            Run your PG like it&apos;s 2026
          </h1>
          <p
            style={{
              marginTop: "20px",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "17.5px",
              lineHeight: 1.55,
              color: "var(--color-pewter)",
            }}
          >
            Gate passes, dues, mess menus, complaints — everything your hostel
            needs, in one app. No spreadsheets. No registers. No chaos.
          </p>

          <div
            style={{
              marginTop: "32px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
            }}
          >
            {/* Buttons made perfectly sharp and identical in layout size */}
            <button
              id="infra-hero-cta-primary"
              onClick={onGetStarted}
              style={{
                borderRadius: "0px", // Perfectly sharp
                padding: "0 28px",
                height: "46px",
                boxSizing: "border-box",
                background: "#0d9488",
                color: "#ffffff",
                border: "none",
                fontSize: "15px",
                fontWeight: 600,
                boxShadow: "0 4px 14px rgba(13, 148, 136, 0.15)",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0f766e";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0d9488";
              }}
            >
              Get started free
            </button>
            <button
              id="infra-hero-cta-secondary"
              style={{
                borderRadius: "0px", // Perfectly sharp
                padding: "0 28px",
                height: "46px",
                boxSizing: "border-box",
                border: "1px solid #0f172a",
                background: "transparent",
                color: "#0f172a",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(15, 23, 42, 0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              See how it works →
            </button>
          </div>

          <p style={{ marginTop: "20px", fontSize: "12px", color: "var(--color-misty-gray)", fontWeight: 500, letterSpacing: "0.02em" }}>
            Used by hostel owners across India · 1 to 3 weeks to fully setup & run error-free
          </p>
        </div>

        {/* ── Split comparison ── */}
        <div
          className="infra-split-scene"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "28px",
            alignItems: "stretch",
            width: "100%",
            maxWidth: "920px",
            marginTop: "10px",
          }}
        >
          {/* LEFT: Old Manual Register Photo */}
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "var(--color-pewter)", marginBottom: "12px", textAlign: "center" }}>
              THE OLD MANUAL REGISTER
            </div>
            <div
              style={{
                borderRadius: "0px", // Perfectly sharp corners
                border: "1px solid #e2e8f0", // Clean subtle outline border
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
                flex: 1, // Symmetrically matches the right-side card
                overflow: "hidden",
                background: "#f8f9fa",
                position: "relative",
              }}
            >
              {/* Actual photo crop zoomed in on register pages */}
              <img
                src="/Tred.png"
                alt="Traditional Manual Hostel Entry Register"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "left center", // Centers perfectly on the left page of the manual register
                  display: "block",
                }}
              />
              
              {/* Sleek overlay label to anchor credibility */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  background: "rgba(15, 23, 42, 0.75)",
                  color: "#ffffff",
                  fontSize: "10px",
                  fontWeight: 600,
                  padding: "4px 8px",
                  borderRadius: "0px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Actual Register Photo
              </div>
            </div>
          </div>

          {/* CENTER: Transition indicator */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "0px", // Sharp
                background: "#0d9488", // Teal primary
                border: "1px solid rgba(13, 148, 136, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(13, 148, 136, 0.15)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>

          {/* RIGHT: High-End Digital Portal */}
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#0d9488", marginBottom: "12px", textAlign: "center" }}>
              INFRASTRUCTURE AUTOMATION
            </div>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "0px", // Sharp
                padding: "26px",
                border: "1px solid #e2e8f0", // Clean outline border
                boxShadow: "0 10px 25px rgba(13, 148, 136, 0.04)", // Soft corporate shadow
                flex: 1, // Stretch to match the left card height
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.01em" }}>Gate Pass Portal</span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: "0px", // Sharp badge
                    background: "#eefbf3",
                    border: "1px solid #c2f0d1",
                    color: "#1e682f",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Check size={11} strokeWidth={3} /> APPROVED
                </span>
              </div>

              {[
                ["Tenant", "Aarav Sharma"],
                ["Room", "Room 204"],
                ["Date & Time", "28 May 2026 · 10:32 AM"],
                ["Purpose", "Weekend leave approved"],
              ].map(([label, value], idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderTop: "1px solid #f0fdfa",
                    fontSize: "13px",
                  }}
                >
                  <span style={{ color: "var(--color-misty-gray)", fontWeight: 500 }}>{label}</span>
                  <span style={{ color: "#0f172a", fontWeight: 600 }}>{value}</span>
                </div>
              ))}

              <div style={{ marginTop: "auto", paddingTop: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "0px", // Sharp
                    background: "#f0fdfa", // Teal-50
                    border: "1px solid rgba(13, 148, 136, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0d9488",
                  }}
                >
                  <QrCode size={18} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", fontWeight: 600, color: "var(--color-misty-gray)" }}>
                  <Clock size={11} /> Auto-logged
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .infra-split-scene {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            max-width: 380px !important;
            margin: 0 auto !important;
          }
        }
      `}</style>
    </section>
  );
}
