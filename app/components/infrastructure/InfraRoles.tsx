"use client";

import { InfraIcon } from "./InfraIcon";

const roles: {
  icon: Parameters<typeof InfraIcon>[0]["name"];
  name: string;
  tagline: string;
  features: string;
}[] = [
  {
    icon: "tenant",
    name: "Tenant",
    tagline: "Daily essentials",
    features: "Gate pass, dues, complaints, room info, mess menu",
  },
  {
    icon: "warden",
    name: "Warden",
    tagline: "Full operations",
    features: "Student management, announcements, complaints, floor view",
  },
  {
    icon: "guard",
    name: "Guard",
    tagline: "Entry control",
    features: "Gate pass approval, student photo directory, in/out log",
  },
  {
    icon: "admin",
    name: "Admin / Owner",
    tagline: "Business overview",
    features: "Financial dashboard, occupancy, complaints, multi-property",
  },
  {
    icon: "parent",
    name: "Parent",
    tagline: "Guardian view",
    features: "Ward's activity, dues payment, gate pass history",
  },
];

export function InfraRoles() {
  return (
    <section
      id="infra-roles"
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
          One app, every person in your property
        </h2>
      </div>

      <div
        className="infra-roles-grid"
        style={{
          maxWidth: "1040px",
          margin: "52px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {roles.map((role, idx) => (
          <article
            key={idx}
            style={{
              borderRadius: "0px", // Perfectly sharp corners
              background: "#ffffff",
              padding: "32px 28px",
              border: "1px solid #e2e8f0", // Clean outline border
              boxShadow: "0 4px 16px rgba(0,0,0,0.01)", // Soft corporate shadow
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "0px", // Perfectly sharp
                background: "#f0fdfa", // Teal-50
                border: "1px solid rgba(13, 148, 136, 0.2)",
                color: "#0d9488",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <InfraIcon name={role.icon} size={22} />
            </div>
            <h3
              style={{
                margin: "18px 0 0",
                fontSize: "19px",
                letterSpacing: "-0.02em",
                fontWeight: 700,
                color: "#0f172a",
              }}
            >
              {role.name}
            </h3>
            <p
              style={{
                margin: "4px 0 0",
                fontSize: "12px",
                fontWeight: 700,
                color: "#0f766e", // Teal-700 B2B
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              {role.tagline}
            </p>
            <p
              style={{
                margin: "12px 0 0",
                color: "var(--color-pewter)",
                fontSize: "14.5px",
                lineHeight: 1.5,
              }}
            >
              {role.features}
            </p>
          </article>
        ))}
      </div>

      {/* Super Admin note */}
      <p
        style={{
          textAlign: "center",
          marginTop: "44px",
          fontSize: "13px",
          color: "var(--color-misty-gray)",
          fontWeight: 500,
        }}
      >
        Platform control and feature toggles are managed internally ·{" "}
        <span style={{ color: "#0d9488", fontWeight: 700 }}>
          powered by 1forge Studio
        </span>
      </p>

      <style>{`
        @media (max-width: 900px) {
          .infra-roles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 560px) {
          .infra-roles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
