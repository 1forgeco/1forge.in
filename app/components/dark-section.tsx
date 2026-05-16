"use client";

import { useEffect, useRef, useState } from "react";

const protocolStats = [
  {
    protocol: "USDC Vault",
    apy: "6.50%",
    tvl: "$890M",
    change: "+0.12%",
  },
  {
    protocol: "USDT Vault",
    apy: "5.80%",
    tvl: "$720M",
    change: "+0.08%",
  },
  {
    protocol: "DAI Vault",
    apy: "5.25%",
    tvl: "$410M",
    change: "+0.15%",
  },
  {
    protocol: "ETH Staking",
    apy: "4.20%",
    tvl: "$380M",
    change: "+0.05%",
  },
];

export function DarkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="security"
      className="dark-section-gradient"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(153,142,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "640px",
            margin: "0 auto 64px",
          }}
        >
          <div
            className={isVisible ? "animate-fade-up" : ""}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px 6px 6px",
              borderRadius: "var(--radius-pills)",
              background: "rgba(255, 255, 255, 0.06)",
              fontSize: "12px",
              color: "rgba(255, 255, 255, 0.6)",
              fontWeight: 500,
              marginBottom: "24px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              opacity: isVisible ? 1 : 0,
            }}
          >
            <span
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "var(--color-cosmic-violet)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: 700,
              }}
            >
              ⚡
            </span>
            Live Protocol Data
          </div>

          <h2
            className={isVisible ? "animate-fade-up delay-100" : ""}
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              fontWeight: 500,
              color: "var(--color-white-canvas)",
              margin: 0,
              opacity: isVisible ? undefined : 0,
            }}
          >
            The Full Power
            <br />
            of{" "}
            <span style={{ color: "var(--color-cosmic-violet)" }}>DeFi</span>
          </h2>

          <p
            className={isVisible ? "animate-fade-up delay-200" : ""}
            style={{
              marginTop: "16px",
              fontSize: "16px",
              lineHeight: 1.5,
              color: "rgba(255, 255, 255, 0.55)",
              opacity: isVisible ? undefined : 0,
            }}
          >
            Access the best yield strategies across multiple protocols, all from
            a single beautiful interface.
          </p>
        </div>

        {/* Protocol Stats Table */}
        <div
          className={isVisible ? "animate-fade-up delay-300" : ""}
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "var(--radius-cards)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            overflow: "hidden",
            opacity: isVisible ? undefined : 0,
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              padding: "16px 28px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
              fontSize: "12px",
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.35)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            <span>Protocol</span>
            <span style={{ textAlign: "right" }}>APY</span>
            <span style={{ textAlign: "right" }}>TVL</span>
            <span style={{ textAlign: "right" }}>24h</span>
          </div>

          {/* Table Rows */}
          {protocolStats.map((row, i) => (
            <div
              key={row.protocol}
              id={`protocol-row-${i}`}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                padding: "18px 28px",
                borderBottom:
                  i < protocolStats.length - 1
                    ? "1px solid rgba(255, 255, 255, 0.04)"
                    : "none",
                transition: "all 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(153, 142, 255, 0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "var(--color-white-canvas)",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "10px",
                    background: "rgba(153, 142, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--color-cosmic-violet)",
                  }}
                >
                  {row.protocol.charAt(0)}
                </span>
                {row.protocol}
              </span>
              <span
                style={{
                  textAlign: "right",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--color-cosmic-violet)",
                  alignSelf: "center",
                }}
              >
                {row.apy}
              </span>
              <span
                style={{
                  textAlign: "right",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.65)",
                  alignSelf: "center",
                }}
              >
                {row.tvl}
              </span>
              <span
                style={{
                  textAlign: "right",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#4ade80",
                  alignSelf: "center",
                }}
              >
                {row.change}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={isVisible ? "animate-fade-up delay-500" : ""}
          style={{
            textAlign: "center",
            marginTop: "48px",
            opacity: isVisible ? undefined : 0,
          }}
        >
          <button id="dark-section-cta" className="btn-primary">
            Start Earning Now
          </button>
          <p
            style={{
              marginTop: "12px",
              fontSize: "13px",
              color: "rgba(255, 255, 255, 0.35)",
            }}
          >
            No minimum deposit • Withdraw anytime
          </p>
        </div>
      </div>
    </section>
  );
}
