"use client";

export function InfraFinalCta({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section
      id="infra-final-cta"
      style={{ padding: "0 24px 0" }}
    >
      <div
        style={{
          maxWidth: "calc(100% - 40px)",
          margin: "0 auto",
          borderRadius: "0px", // Perfectly sharp corners
          border: "1px solid rgba(255, 255, 255, 0.08)", // Delicate border
          padding: "100px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #0f172a 0%, #042f2e 100%)", // High-end Slate-to-Midnight-Teal B2B gradient
        }}
      >
        {/* Subtle grid overlay */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.08, backgroundImage: "radial-gradient(#0d9488 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

        <div
          style={{
            position: "relative",
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4.5vw, 46px)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              fontWeight: 700,
              color: "var(--color-white-canvas)",
              margin: 0,
            }}
          >
            Your register is full. Your inbox is a mess. There&apos;s a better
            way.
          </h2>
          <p
            style={{
              marginTop: "20px",
              fontSize: "18px",
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.55)",
              fontWeight: 500,
            }}
          >
            Join hostel owners who&apos;ve already made the switch.
          </p>

          <div style={{ marginTop: "36px" }}>
            {/* Primary Teal button made perfectly sharp */}
            <button
              id="infra-final-cta-btn"
              onClick={onGetStarted}
              style={{
                fontSize: "16px",
                padding: "0 28px",
                borderRadius: "0px", // Perfectly sharp
                height: "46px",
                background: "#0d9488", // Teal-600 B2B
                color: "#ffffff",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 14px rgba(13, 148, 136, 0.25)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0f766e";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0d9488";
              }}
            >
              Get started — it&apos;s free
            </button>
          </div>

          <p
            style={{
              marginTop: "16px",
              fontSize: "13px",
              color: "rgba(255,255,255,0.38)",
              fontWeight: 500,
            }}
          >
            No credit card required · 1 to 3 weeks to fully setup & run error-free
          </p>
        </div>
      </div>
    </section>
  );
}
