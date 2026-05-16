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
          <br />
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
            Everyone
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

        {/* Phone Mockup Cascade */}
        <div
          className="animate-scale-in delay-500"
          style={{
            marginTop: "56px",
            width: "100%",
            maxWidth: "800px",
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: "clamp(12px, 3vw, 28px)",
            paddingBottom: "0",
            opacity: 0,
          }}
        >
          {/* Left Phone */}
          <div
            className="animate-float-delayed hidden sm:block"
            style={{
              position: "relative",
              width: "clamp(140px, 20vw, 200px)",
              aspectRatio: "390 / 844",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "clamp(24px, 4vw, 40px)",
                overflow: "hidden",
                boxShadow: "0 30px 60px rgba(16, 16, 16, 0.15)",
              }}
            >
              <Image
                src="/vecteezy_realistic-smartphone-interface-high-quality-mobile-phone_22227368.png"
                alt="1forge app screen"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Screen content overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "4%",
                  left: "5%",
                  right: "5%",
                  bottom: "4%",
                  borderRadius: "clamp(18px, 3vw, 32px)",
                  background:
                    "linear-gradient(180deg, #1a1a2e 0%, #0f0f10 100%)",
                  display: "flex",
                  flexDirection: "column",
                  padding: "20% 12% 12%",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(8px, 1.2vw, 11px)",
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Portfolio
                </div>
                <div
                  style={{
                    fontSize: "clamp(14px, 2.5vw, 22px)",
                    fontWeight: 600,
                    color: "white",
                    marginTop: "6px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  $12,847
                </div>
                <div
                  style={{
                    fontSize: "clamp(7px, 1vw, 10px)",
                    color: "#4ade80",
                    fontWeight: 500,
                    marginTop: "2px",
                  }}
                >
                  +2.4% today
                </div>
                {/* Mini chart */}
                <svg
                  viewBox="0 0 120 40"
                  style={{
                    width: "100%",
                    height: "30%",
                    marginTop: "auto",
                  }}
                >
                  <defs>
                    <linearGradient
                      id="chartGrad1"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="var(--color-cosmic-violet)"
                        stopOpacity="0.3"
                      />
                      <stop
                        offset="100%"
                        stopColor="var(--color-cosmic-violet)"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 35 Q20 30 30 25 T60 15 T90 20 T120 8"
                    fill="none"
                    stroke="var(--color-cosmic-violet)"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 35 Q20 30 30 25 T60 15 T90 20 T120 8 V40 H0 Z"
                    fill="url(#chartGrad1)"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Center Phone — Primary, largest */}
          <div
            className="animate-float"
            style={{
              position: "relative",
              width: "clamp(200px, 28vw, 260px)",
              aspectRatio: "390 / 844",
              flexShrink: 0,
              zIndex: 10,
            }}
          >
            <div
              className="animate-pulse-glow"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "clamp(28px, 5vw, 48px)",
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(16, 16, 16, 0.2)",
              }}
            >
              <Image
                src="/vecteezy_realistic-smartphone-interface-high-quality-mobile-phone_22227368.png"
                alt="1forge app main screen"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Screen content overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "4%",
                  left: "5%",
                  right: "5%",
                  bottom: "4%",
                  borderRadius: "clamp(22px, 4vw, 38px)",
                  background:
                    "linear-gradient(180deg, var(--color-white-canvas) 0%, #f5f4ff 100%)",
                  display: "flex",
                  flexDirection: "column",
                  padding: "18% 10% 8%",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(8px, 1.2vw, 10px)",
                    color: "var(--color-misty-gray)",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Total Balance
                </div>
                <div
                  style={{
                    fontSize: "clamp(20px, 3.5vw, 32px)",
                    fontWeight: 600,
                    color: "var(--color-ink-black)",
                    marginTop: "4px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  $48,291
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    marginTop: "4px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(8px, 1vw, 12px)",
                      color: "#4ade80",
                      fontWeight: 500,
                    }}
                  >
                    ↑ 6.50% APY
                  </span>
                </div>

                {/* Assets list */}
                <div style={{ marginTop: "auto" }}>
                  {[
                    {
                      name: "USDC",
                      amount: "$24,150",
                      color: "#2775ca",
                    },
                    {
                      name: "USDT",
                      amount: "$18,341",
                      color: "#26a17b",
                    },
                    {
                      name: "DAI",
                      amount: "$5,800",
                      color: "#f5ac37",
                    },
                  ].map((asset, i) => (
                    <div
                      key={asset.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "clamp(4px, 0.8vw, 8px) 0",
                        borderTop:
                          i > 0
                            ? "1px solid rgba(34,29,29,0.05)"
                            : "none",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <div
                          style={{
                            width: "clamp(16px, 2vw, 22px)",
                            height: "clamp(16px, 2vw, 22px)",
                            borderRadius: "50%",
                            background: asset.color,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "clamp(8px, 1.1vw, 12px)",
                            fontWeight: 500,
                            color: "var(--color-ink-black)",
                          }}
                        >
                          {asset.name}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: "clamp(8px, 1.1vw, 12px)",
                          fontWeight: 500,
                          color: "var(--color-pewter)",
                        }}
                      >
                        {asset.amount}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    marginTop: "clamp(8px, 1.5vw, 16px)",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      padding: "clamp(5px, 0.8vw, 8px) 0",
                      borderRadius: "12px",
                      background: "var(--color-cosmic-violet)",
                      color: "white",
                      fontSize: "clamp(7px, 0.9vw, 10px)",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    Deposit
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: "clamp(5px, 0.8vw, 8px) 0",
                      borderRadius: "12px",
                      background: "var(--color-light-alabaster)",
                      color: "var(--color-ink-black)",
                      fontSize: "clamp(7px, 0.9vw, 10px)",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    Withdraw
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Phone */}
          <div
            className="animate-float-delayed-right hidden sm:block"
            style={{
              position: "relative",
              width: "clamp(140px, 20vw, 200px)",
              aspectRatio: "390 / 844",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "clamp(24px, 4vw, 40px)",
                overflow: "hidden",
                boxShadow: "0 30px 60px rgba(16, 16, 16, 0.15)",
              }}
            >
              <Image
                src="/vecteezy_realistic-smartphone-interface-high-quality-mobile-phone_22227368.png"
                alt="1forge app analytics screen"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Screen content overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "4%",
                  left: "5%",
                  right: "5%",
                  bottom: "4%",
                  borderRadius: "clamp(18px, 3vw, 32px)",
                  background:
                    "linear-gradient(180deg, var(--color-cosmic-violet) 0%, #6b5ce7 100%)",
                  display: "flex",
                  flexDirection: "column",
                  padding: "20% 12% 12%",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(8px, 1.2vw, 11px)",
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Earnings
                </div>
                <div
                  style={{
                    fontSize: "clamp(14px, 2.5vw, 22px)",
                    fontWeight: 600,
                    color: "white",
                    marginTop: "6px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  $3,142
                </div>
                <div
                  style={{
                    fontSize: "clamp(7px, 1vw, 10px)",
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 400,
                    marginTop: "2px",
                  }}
                >
                  This month
                </div>

                {/* Earnings bars */}
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "clamp(3px, 0.5vw, 6px)",
                    height: "40%",
                  }}
                >
                  {[45, 65, 50, 80, 60, 90, 75].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        borderRadius: "4px",
                        background:
                          i === 5
                            ? "white"
                            : "rgba(255,255,255,0.25)",
                        transition: "height 0.3s ease",
                      }}
                    />
                  ))}
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
