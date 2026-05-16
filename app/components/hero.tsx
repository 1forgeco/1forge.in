"use client";

import Image from "next/image";
import { BrandLogo } from "./brand-logo";

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-gradient"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: 0,
            borderRadius: "var(--radius-pills)",
            background: "transparent",
            fontSize: "20px",
            color: "var(--color-pewter)",
            fontWeight: 450,
            marginBottom: "32px",
          }}
        >
          <BrandLogo tone="green" size="sm" />
          1forge Studio
        </div>

        <h1
          className="animate-fade-up delay-100"
          style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            lineHeight: 0.92,
            letterSpacing: "-0.05em",
            fontWeight: 500,
            color: "var(--color-ink-black)",
            opacity: 0,
            margin: 0,
          }}
        >
          Websites, Apps & AI for Businesses
        </h1>

        <p
          className="animate-fade-up delay-200"
          style={{
            marginTop: "24px",
            maxWidth: "640px",
            fontSize: "22px",
            lineHeight: 1.5,
            letterSpacing: "-0.01em",
            fontWeight: 400,
            color: "var(--color-pewter)",
            opacity: 0,
          }}
        >
          We design and build{" "}
          <span
            style={{
              color: "var(--color-cosmic-violet)",
              fontWeight: 500,
              textDecoration: "underline",
              textDecorationThickness: "2px",
              textUnderlineOffset: "5px",
            }}
          >
            websites
          </span>{" "}
          , mobile apps, hostel and PG management systems, desktop software,
          AI agents, and automations that make daily operations easier.
        </p>

        <div
          className="animate-fade-up delay-300"
          style={{
            marginTop: "40px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            opacity: 0,
          }}
        >
          <button id="hero-cta-primary" className="btn-primary">
            <svg
              viewBox="0 0 24 24"
              style={{ width: "18px", height: "18px" }}
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16.2 13.1c.02 2.2 1.9 2.9 1.92 2.92-.02.05-.3 1.02-1 2-.6.86-1.23 1.73-2.2 1.74-.96.02-1.27-.57-2.37-.57-1.1 0-1.44.55-2.35.59-.94.04-1.66-.94-2.27-1.8-1.23-1.75-2.17-4.96-.91-7.12.62-1.07 1.74-1.75 2.95-1.77.92-.02 1.79.62 2.37.62.58 0 1.66-.77 2.8-.66.47.02 1.79.19 2.64 1.44-.07.05-1.57.92-1.55 2.73Zm-1.85-6.2c.5-.6.83-1.44.74-2.28-.72.03-1.6.47-2.12 1.07-.46.53-.87 1.39-.76 2.2.79.06 1.63-.41 2.14-.99Z" />
            </svg>
            Start a Project
          </button>

          <button id="hero-cta-secondary" className="btn-ghost-dark">
            View Services
          </button>
        </div>

        {/* ── Product mockup cascade ── */}
        <div
          className="animate-scale-in delay-500"
          style={{
            marginTop: "42px",
            width: "100%",
            maxWidth: "640px",
            position: "relative",
            height: "clamp(370px, 36vw, 460px)",
            opacity: 0,
          }}
        >
          {/* ── Left Phone (rotated -8°, behind center) ── */}
          <div
            className="hero-side-phone"
            style={{
              position: "absolute",
              width: "clamp(135px, 13.5vw, 180px)",
              display: "block",
              aspectRatio: "390 / 844",
              bottom: 0,
              left: "50%",
              transform:
                "translateX(-50%) translateX(clamp(-185px,-16vw,-140px)) rotate(-2deg)",
              transformOrigin: "bottom center",
              zIndex: 5,
            }}
          >
            <div
              className="animate-float"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "clamp(28px, 4.5vw, 44px)",
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(16,16,16,0.18)",
              }}
            >
              <Image
                src="/vecteezy_realistic-smartphone-interface-high-quality-mobile-phone_22227368.png"
                alt="1forge website project screen"
                fill
                sizes="(max-width: 640px) 0px, clamp(150px, 20vw, 210px)"
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Screen overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "4%",
                  left: "5%",
                  right: "5%",
                  bottom: "4%",
                  borderRadius: "clamp(20px, 3.5vw, 36px)",
                  background: "#f7fbf7",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10% 9% 9%",
                  overflow: "hidden",
                }}
              >
                <div className="phone-status">
                  <span>9:41</span>
                  <span>▮▮ Wi-Fi ▰</span>
                </div>
                <div style={{ marginTop: "14%", textAlign: "left" }}>
                  <div style={{ fontSize: "clamp(11px,1vw,13px)", color: "var(--color-misty-gray)", fontWeight: 700 }}>
                    Hostel / PG
                  </div>
                  <div style={{ fontSize: "clamp(18px,1.8vw,24px)", color: "var(--color-ink-black)", fontWeight: 800, letterSpacing: "-0.06em", marginTop: "3px" }}>
                    Operations
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
                    marginTop: "12%",
                  }}
                >
                  {[
                    ["Rooms", "42"],
                    ["Due", "8"],
                    ["Leads", "19"],
                    ["Tasks", "6"],
                  ].map(([label, value]) => (
                    <div key={label} style={{ background: "white", borderRadius: "12px", padding: "10px", textAlign: "left", boxShadow: "0 10px 24px rgba(0,0,0,0.04)" }}>
                      <div style={{ fontSize: "10px", color: "var(--color-misty-gray)", fontWeight: 700 }}>{label}</div>
                      <div style={{ fontSize: "20px", color: "var(--color-ink-black)", fontWeight: 800, lineHeight: 1.1 }}>{value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "12%", background: "white", borderRadius: "14px", padding: "12px", textAlign: "left", boxShadow: "0 14px 30px rgba(0,0,0,0.05)" }}>
                  {["Rent reminder sent", "Complaint assigned", "New inquiry added"].map((item, index) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px", padding: index === 0 ? "0 0 8px" : "8px 0", borderTop: index === 0 ? "none" : "1px solid #eef2ee" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-forge-green)" }} />
                      <span style={{ fontSize: "11px", color: "var(--color-pewter)", fontWeight: 650 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Center Phone (upright, largest, on top) ── */}
          <div
            style={{
              position: "absolute",
              width: "clamp(165px, 16vw, 220px)",
              aspectRatio: "390 / 844",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
          >
            <div
              className="animate-pulse-glow"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "clamp(32px,5.5vw,52px)",
                overflow: "hidden",
                boxShadow: "0 40px 90px rgba(16,16,16,0.22), 0 0 0 1px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src="/vecteezy_realistic-smartphone-interface-high-quality-mobile-phone_22227368.png"
                alt="1forge business dashboard screen"
                fill
                sizes="clamp(210px, 28vw, 280px)"
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Screen overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "4%",
                  left: "5%",
                  right: "5%",
                  bottom: "4%",
                  borderRadius: "clamp(26px,4.5vw,44px)",
                  background: "linear-gradient(180deg,#fbfffb 0%,#eefaf1 100%)",
                  display: "flex",
                  flexDirection: "column",
                  padding: "8% 9% 7%",
                  overflow: "hidden",
                }}
              >
                <div className="phone-status">
                  <span>9:41</span>
                  <span>▮▮ Wi-Fi ▰</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10%" }}>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontSize: "11px", color: "var(--color-misty-gray)", fontWeight: 700 }}>Website build</div>
                    <div style={{ fontSize: "22px", color: "var(--color-ink-black)", fontWeight: 850, letterSpacing: "-0.06em" }}>Client Portal</div>
                  </div>
                  <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--color-forge-green)", color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 800 }}>1F</span>
                </div>
                <div style={{ marginTop: "12%", background: "white", borderRadius: "16px", padding: "13px", boxShadow: "0 14px 34px rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: 800, color: "var(--color-ink-black)" }}>
                    <span>Progress</span>
                    <span style={{ color: "var(--color-forge-green)" }}>72%</span>
                  </div>
                  <div style={{ height: "8px", borderRadius: "999px", background: "#e8efe9", marginTop: "9px", overflow: "hidden" }}>
                    <div style={{ width: "72%", height: "100%", background: "var(--color-forge-green)", borderRadius: "999px" }} />
                  </div>
                </div>
                <div style={{ marginTop: "10%", display: "grid", gap: "8px" }}>
                  {[
                    { label: "UI approved", tag: "Done" },
                    { label: "Admin panel", tag: "Build" },
                    { label: "Lead forms", tag: "Test" },
                  ].map((t) => (
                    <div key={t.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.82)", borderRadius: "12px", padding: "9px 10px", fontSize: "11px", color: "var(--color-pewter)", fontWeight: 700 }}>
                      <span>{t.label}</span>
                      <span style={{ color: "var(--color-forge-green)" }}>{t.tag}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "auto", display: "flex", alignItems: "flex-end", gap: "5px", height: "24%" }}>
                  {[35, 66, 42, 80, 92, 100, 84].map((h, i) => (
                    <div
                      key={i}
                      className="chart-bar"
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        animationDelay: `${i * 70}ms`,
                        borderRadius: "6px 6px 0 0",
                        background: i === 5 ? "var(--color-cosmic-violet)" : "rgba(25,200,90,0.14)",
                      }}
                    />
                  ))}
                </div>
                <div style={{ fontSize: "clamp(9px,0.9vw,13px)", color: "var(--color-cosmic-violet)", textAlign: "center", marginTop: "8px" }}>
                  Launch timeline
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", color: "var(--color-misty-gray)", fontSize: "10px", marginTop: "8%" }}>
                  {["Plan", "UI", "Build", "Test", "Live"].map((range) => (
                    <span key={range} style={{ color: range === "Plan" ? "var(--color-ink-black)" : undefined, fontWeight: range === "Plan" ? 700 : 500 }}>{range}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Phone (rotated +8°, behind center) ── */}
          <div
            className="hero-side-phone"
            style={{
              position: "absolute",
              width: "clamp(135px, 13.5vw, 180px)",
              display: "block",
              aspectRatio: "390 / 844",
              bottom: 0,
              left: "50%",
              transform:
                "translateX(-50%) translateX(clamp(140px,16vw,185px)) rotate(2deg)",
              transformOrigin: "bottom center",
              zIndex: 5,
            }}
          >
            <div
              className="animate-float"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                animationDelay: "350ms",
                borderRadius: "clamp(28px,4.5vw,44px)",
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(16,16,16,0.18)",
              }}
            >
              <Image
                src="/vecteezy_realistic-smartphone-interface-high-quality-mobile-phone_22227368.png"
                alt="1forge automation results screen"
                fill
                sizes="(max-width: 640px) 0px, clamp(150px, 20vw, 210px)"
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Screen overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "4%",
                  left: "5%",
                  right: "5%",
                  bottom: "4%",
                  borderRadius: "clamp(20px,3.5vw,36px)",
                  background: "linear-gradient(180deg,#0d0d14 0%,#0f0f1a 100%)",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10% 10% 8%",
                  overflow: "hidden",
                }}
              >
                <div className="phone-status phone-status-dark">
                  <span>9:41</span>
                  <span>▮▮ Wi-Fi ▰</span>
                </div>
                <div style={{ textAlign: "left", marginTop: "16%" }}>
                  <span style={{ borderRadius: "999px", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.58)", padding: "7px 10px", fontSize: "10px", fontWeight: 700 }}>AI Agent</span>
                </div>
                <div style={{ marginTop: "14%", fontSize: "clamp(18px,1.7vw,23px)", color: "white", fontWeight: 850, letterSpacing: "-0.05em", textAlign: "left", lineHeight: 1 }}>
                  Lead follow-up
                </div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.52)", marginTop: "7px", textAlign: "left", lineHeight: 1.35 }}>
                  Auto-replies, CRM notes, reminders and daily summaries.
                </div>
                <div style={{ marginTop: "14%", display: "grid", gap: "9px" }}>
                  {[
                    ["New lead", "reply"],
                    ["Demo booked", "calendar"],
                    ["Owner report", "daily"],
                  ].map(([left, right], index) => (
                    <div key={left} style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.07)", borderRadius: "12px", padding: "9px" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: index === 0 ? "var(--color-forge-green)" : "rgba(25,200,90,0.42)" }} />
                      <span style={{ flex: 1, color: "rgba(255,255,255,0.76)", fontSize: "11px", fontWeight: 700 }}>{left}</span>
                      <span style={{ color: "rgba(255,255,255,0.38)", fontSize: "10px" }}>{right}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "auto", background: "rgba(25,200,90,0.14)", border: "1px solid rgba(25,200,90,0.24)", borderRadius: "14px", padding: "12px", textAlign: "left" }}>
                  <div style={{ color: "var(--color-forge-green)", fontSize: "20px", fontWeight: 850, lineHeight: 1 }}>120+ hrs</div>
                  <div style={{ color: "rgba(255,255,255,0.52)", fontSize: "10px", marginTop: "4px" }}>manual work saved monthly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          height: "120px",
          background:
            "linear-gradient(180deg, transparent, var(--color-white-canvas))",
          position: "relative",
          zIndex: 5,
          marginTop: "-60px",
        }}
      />
    </section>
  );
}
