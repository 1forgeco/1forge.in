"use client";

import { InfraIcon } from "./InfraIcon";

interface PlanTier {
  name: string;
  price: string;
  period: string;
  popular: boolean;
  features: string[];
  cta: string;
}

const plans: PlanTier[] = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    popular: false,
    features: [
      "Up to 30 tenants",
      "Gate pass with QR",
      "Complaint management",
      "Announcements",
      "Basic room view",
      "No payment module",
    ],
    cta: "Start for free",
  },
  {
    name: "Growth",
    price: "₹999",
    period: "/month",
    popular: true,
    features: [
      "Up to 100 tenants",
      "All Starter features",
      "Dues & payment collection",
      "Mess menu + feedback",
      "Parent portal",
      "Push & WhatsApp notifications",
    ],
    cta: "Start free trial",
  },
  {
    name: "Pro",
    price: "₹2,499",
    period: "/month",
    popular: false,
    features: [
      "Unlimited tenants",
      "All Growth features",
      "Multi-property dashboard",
      "Analytics & reports",
      "Visitor log",
      "Digital onboarding",
      "Priority support",
    ],
    cta: "Talk to us",
  },
];

export function InfraPricing() {
  return (
    <section
      id="infra-pricing"
      style={{
        background: "var(--color-white-canvas)",
        padding: "100px 24px",
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      <div style={{ maxWidth: "620px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(30px, 4.5vw, 52px)",
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            fontWeight: 700,
            color: "#0f172a",
            margin: 0,
          }}
        >
          Simple pricing, no surprises
        </h2>
        <p
          style={{
            marginTop: "18px",
            color: "var(--color-misty-gray)",
            fontSize: "17px",
            lineHeight: 1.4,
            fontWeight: 500,
          }}
        >
          Start free. Upgrade when you need more.
        </p>
      </div>

      <div
        className="infra-pricing-grid"
        style={{
          maxWidth: "1040px",
          margin: "52px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          alignItems: "start",
        }}
      >
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="pricing-card"
            style={{
              borderRadius: "20px", // KEPT ROUNDED as explicitly requested
              padding: "36px 30px",
              background: plan.popular
                ? "#0f172a" // Deep slate/ink black for the popular plan
                : "#ffffff",
              color: plan.popular
                ? "#ffffff"
                : "#0f172a",
              position: "relative",
              border: plan.popular
                ? "2px solid #0d9488" // Teal accent border
                : "1px solid #e2e8f0",
              boxShadow: plan.popular
                ? "0 12px 36px rgba(13, 148, 136, 0.12)" // Soft teal glow
                : "0 4px 20px rgba(0, 0, 0, 0.02)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              if (plan.popular) {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(13, 148, 136, 0.22)";
              } else {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(13, 148, 136, 0.05)";
              }
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              if (plan.popular) {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(13, 148, 136, 0.12)";
              } else {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.02)";
              }
            }}
          >
            {/* Popular badge in Teal */}
            {plan.popular && (
              <div
                style={{
                  position: "absolute",
                  top: "-13px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#0d9488", // Teal-600
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "5px 16px",
                  borderRadius: "999px", // Kept rounded
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Most popular
              </div>
            )}

            <h3
              style={{
                margin: 0,
                fontSize: "21px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {plan.name}
            </h3>

            <div
              style={{
                marginTop: "12px",
                display: "flex",
                alignItems: "baseline",
                gap: "4px",
              }}
            >
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                }}
              >
                {plan.price}
              </span>
              {plan.period && (
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: plan.popular
                      ? "rgba(255,255,255,0.5)"
                      : "var(--color-misty-gray)",
                  }}
                >
                  {plan.period}
                </span>
              )}
            </div>

            {/* Features */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "28px 0 0",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {plan.features.map((f, fIdx) => (
                <li
                  key={fIdx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "14.5px",
                    lineHeight: 1.4,
                    color: plan.popular
                      ? "rgba(255,255,255,0.85)"
                      : "var(--color-pewter)",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: "2px",
                      color: "#0d9488", // Teal check
                    }}
                  >
                    <InfraIcon name="check" size={16} strokeWidth={2.5} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA Buttons - Styled in professional Teal */}
            <button
              className={plan.popular ? "btn-primary" : "btn-ghost-dark"}
              style={{
                marginTop: "32px",
                width: "100%",
                height: "44px",
                borderRadius: "999px", // Kept rounded
                fontSize: "14.5px",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s, color 0.2s, border-color 0.2s",
                ...(plan.popular
                  ? {
                      background: "#0d9488",
                      color: "#ffffff",
                      border: "none",
                    }
                  : {
                      background: "transparent",
                      color: "#0f172a",
                      border: "1px solid #0f172a",
                    }),
              }}
              onMouseEnter={(e) => {
                if (plan.popular) {
                  (e.currentTarget as HTMLElement).style.background = "#0f766e";
                } else {
                  (e.currentTarget as HTMLElement).style.background = "rgba(15, 23, 42, 0.04)";
                }
              }}
              onMouseLeave={(e) => {
                if (plan.popular) {
                  (e.currentTarget as HTMLElement).style.background = "#0d9488";
                } else {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }
              }}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Note */}
      <p
        style={{
          textAlign: "center",
          marginTop: "36px",
          fontSize: "13px",
          color: "var(--color-misty-gray)",
          maxWidth: "520px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.5,
          fontWeight: 500,
        }}
      >
        All plans include free setup support. Prices exclude GST.
        Feature availability depends on plan.
      </p>

      <style>{`
        @media (max-width: 760px) {
          .infra-pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 420px !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
