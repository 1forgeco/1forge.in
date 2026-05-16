"use client";

import Image from "next/image";

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
      {/* Subtle geometric decoration */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(153,142,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          left: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(153,142,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "6px 16px 6px 6px",
            borderRadius: "var(--radius-pills)",
            background: "var(--color-light-alabaster)",
            fontSize: "13px",
            color: "var(--color-pewter)",
            fontWeight: 450,
            marginBottom: "32px",
            border: "1px solid rgba(34, 29, 29, 0.06)",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: "rgba(153, 142, 255, 0.12)",
              color: "var(--color-cosmic-violet)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </span>
          Now live — Earn 6.50% APY
        </div>

        {/* Headline */}
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
          Savings for
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--color-cosmic-violet) 0%, #7b6fcc 50%, var(--color-cosmic-violet) 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradient-shift 4s ease infinite",
            }}
          >
            &nbsp;Everyone
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-up delay-200"
          style={{
            marginTop: "24px",
            maxWidth: "520px",
            fontSize: "18px",
            lineHeight: 1.5,
            letterSpacing: "-0.01em",
            fontWeight: 400,
            color: "var(--color-pewter)",
            opacity: 0,
          }}
        >
          Earn up to{" "}
          <span
            style={{
              color: "var(--color-cosmic-violet)",
              fontWeight: 500,
            }}
          >
            6.50%
          </span>{" "}
          on your stablecoins with industry-leading rates and balance
          protection up to $1M.
        </p>

        {/* CTAs */}
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
            Download on iOS
          </button>

          <button id="hero-cta-secondary" className="btn-ghost-dark">
            Learn More
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "4px" }}
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </button>
        </div>

        {/* Stats Row */}
        <div
          className="animate-fade-up delay-400"
          style={{
            marginTop: "48px",
            display: "flex",
            alignItems: "center",
            gap: "40px",
            opacity: 0,
          }}
        >
          {[
            { value: "$2.4B+", label: "Total Value Locked" },
            { value: "180K+", label: "Active Users" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "var(--color-ink-black)",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "var(--color-misty-gray)",
                  marginTop: "2px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Phone Mockup Cascade — Aave-style stacked layout ── */}
        <div
          className="animate-scale-in delay-500"
          style={{
            marginTop: "64px",
            width: "100%",
            maxWidth: "860px",
            position: "relative",
            /* Height drives the cascade; phones are absolute inside */
            height: "clamp(360px, 52vw, 520px)",
            opacity: 0,
          }}
        >
          {/* ── Left Phone (rotated -8°, behind center) ── */}
          <div
            className="animate-float-delayed hidden sm:block"
            style={{
              position: "absolute",
              width: "clamp(150px, 20vw, 210px)",
              aspectRatio: "390 / 844",
              bottom: 0,
              left: "50%",
              transform:
                "translateX(-50%) translateX(clamp(-185px,-25vw,-140px)) rotate(-8deg)",
              transformOrigin: "bottom center",
              zIndex: 5,
            }}
          >
            <div
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
                alt="1forge app interest rate screen"
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
                  background: "linear-gradient(180deg,#ffffff 0%,#fafafa 100%)",
                  display: "flex",
                  flexDirection: "column",
                  padding: "18% 12% 10%",
                  overflow: "hidden",
                }}
              >
                <div style={{ fontSize: "clamp(9px,1.2vw,13px)", color: "var(--color-ink-black)", fontWeight: 600 }}>
                  Interest Rate
                </div>
                <div style={{ fontSize: "clamp(8px,1vw,11px)", color: "var(--color-misty-gray)", marginTop: "clamp(10px,1.5vw,18px)" }}>
                  You&apos;re Earning
                </div>
                <div style={{ fontSize: "clamp(20px,3.5vw,34px)", fontWeight: 700, color: "var(--color-ink-black)", letterSpacing: "-0.03em", marginTop: "2px" }}>
                  6.50%
                </div>
                <div style={{ fontSize: "clamp(7px,0.9vw,10px)", color: "var(--color-misty-gray)" }}>
                  Annual Percentage Yield
                </div>
                {/* Boost card */}
                <div
                  style={{
                    marginTop: "auto",
                    background: "#fffbf0",
                    borderRadius: "clamp(10px,1.5vw,14px)",
                    padding: "clamp(8px,1.2vw,14px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <span style={{ fontSize: "clamp(14px,2vw,20px)" }}>🚀</span>
                  <div style={{ fontSize: "clamp(7px,0.95vw,11px)", fontWeight: 600, color: "var(--color-ink-black)" }}>
                    Boost your rate by 0.50%
                  </div>
                  <div style={{ fontSize: "clamp(6px,0.8vw,9px)", color: "var(--color-misty-gray)", lineHeight: 1.4 }}>
                    Setup a recurring deposit to grow your balance by $200 or more a month.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Center Phone (upright, largest, on top) ── */}
          <div
            className="animate-float"
            style={{
              position: "absolute",
              width: "clamp(210px, 28vw, 280px)",
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
                alt="1forge app main screen"
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
                  background: "linear-gradient(180deg,#fafbff 0%,#f5f4ff 100%)",
                  display: "flex",
                  flexDirection: "column",
                  padding: "16% 10% 7%",
                  overflow: "hidden",
                }}
              >
                {/* Earning badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "clamp(8px,1.5vw,16px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "clamp(7px,0.9vw,10px)", color: "var(--color-cosmic-violet)", fontWeight: 500 }}>
                    🪙 Earning 6.50%
                  </div>
                </div>
                {/* Balance */}
                <div style={{ fontSize: "clamp(22px,4vw,38px)", fontWeight: 700, color: "var(--color-ink-black)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                  $9,326<span style={{ fontSize: "60%", fontWeight: 500, opacity: 0.5 }}>.45</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "4px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                  <span style={{ fontSize: "clamp(7px,0.9vw,10px)", color: "#4ade80", fontWeight: 500 }}>$13.09 Earned</span>
                  <span style={{ fontSize: "clamp(6px,0.8vw,9px)", color: "var(--color-misty-gray)" }}>This Week</span>
                </div>
                {/* Transactions */}
                <div style={{ marginTop: "clamp(8px,1.5vw,14px)" }}>
                  {[
                    { label: "Added $2,000", icon: "➕", color: "#4ade80" },
                    { label: "Withdrew $40", icon: "➖", color: "var(--color-misty-gray)" },
                  ].map((t) => (
                    <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "5px", padding: "clamp(3px,0.5vw,5px) 0", fontSize: "clamp(7px,0.9vw,10px)", color: "var(--color-pewter)" }}>
                      <span style={{ color: t.color }}>{t.icon}</span> {t.label}
                    </div>
                  ))}
                </div>
                {/* Bar chart */}
                <div style={{ marginTop: "auto", display: "flex", alignItems: "flex-end", gap: "clamp(3px,0.5vw,5px)", height: "30%" }}>
                  {[30, 55, 40, 70, 85, 100, 75].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        borderRadius: "4px 4px 0 0",
                        background: i === 5 ? "var(--color-cosmic-violet)" : "rgba(153,142,255,0.18)",
                      }}
                    />
                  ))}
                </div>
                <div style={{ fontSize: "clamp(6px,0.7vw,8px)", color: "var(--color-misty-gray)", textAlign: "center", marginTop: "3px" }}>
                  Jun 27
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Phone (rotated +8°, behind center) ── */}
          <div
            className="animate-float-delayed-right hidden sm:block"
            style={{
              position: "absolute",
              width: "clamp(150px, 20vw, 210px)",
              aspectRatio: "390 / 844",
              bottom: 0,
              left: "50%",
              transform:
                "translateX(-50%) translateX(clamp(140px,25vw,185px)) rotate(8deg)",
              transformOrigin: "bottom center",
              zIndex: 5,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "clamp(28px,4.5vw,44px)",
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(16,16,16,0.18)",
              }}
            >
              <Image
                src="/vecteezy_realistic-smartphone-interface-high-quality-mobile-phone_22227368.png"
                alt="1forge app 30-year earnings screen"
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
                  padding: "18% 12% 10%",
                  overflow: "hidden",
                }}
              >
                <div style={{ fontSize: "clamp(8px,1vw,11px)", color: "rgba(255,255,255,0.5)", marginBottom: "2px" }}>
                  6.50% APY 🔵
                </div>
                <div style={{ fontSize: "clamp(20px,3.2vw,30px)", fontWeight: 700, color: "var(--color-cosmic-violet)", letterSpacing: "-0.03em" }}>
                  $92,603
                </div>
                <div style={{ fontSize: "clamp(6px,0.8vw,9px)", color: "rgba(255,255,255,0.35)", marginTop: "3px" }}>
                  $1,622,711 Earned in 30 Years
                </div>
                {/* Growth chart */}
                <div style={{ marginTop: "auto", display: "flex", alignItems: "flex-end", gap: "clamp(2px,0.3vw,3px)", height: "45%" }}>
                  {[5,7,8,9,10,12,14,16,18,21,25,30,35,42,50,60,72,85,100].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        borderRadius: "2px 2px 0 0",
                        background: i >= 16 ? "rgba(153,142,255,0.9)" : "rgba(153,142,255,0.25)",
                      }}
                    />
                  ))}
                </div>
                <div style={{ fontSize: "clamp(6px,0.7vw,8px)", color: "rgba(255,255,255,0.3)", textAlign: "right", marginTop: "3px" }}>
                  30Y
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
