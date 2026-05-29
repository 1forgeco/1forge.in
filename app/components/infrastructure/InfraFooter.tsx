"use client";

const footerLinks = {
  Product: [
    { label: "Features", href: "#infra-features" },
    { label: "Pricing", href: "#infra-pricing" },
    { label: "Roles", href: "#infra-roles" },
    { label: "How it works", href: "#infra-how-it-works" },
  ],
  Company: [
    { label: "About 1forge", href: "https://1forge.in" },
    { label: "Contact", href: "mailto:studio@1forge.in" },
    { label: "Careers", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export function InfraFooter() {
  return (
    <footer
      id="infra-footer"
      style={{
        padding: "72px 24px 48px",
        background: "var(--color-white-canvas)",
        color: "var(--color-ink-black)",
      }}
    >
      <div
        className="infra-footer-inner"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }}
      >
        {/* Brand column */}
        <div>
          <p
            style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            infrastructure
            <span style={{ color: "var(--color-cosmic-violet)" }}>.</span>
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "13px",
              color: "var(--color-misty-gray)",
              lineHeight: 1.5,
              maxWidth: "280px",
            }}
          >
            infrastructure.1forge.in is a product of{" "}
            <a
              href="https://studio.1forge.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0d9488",
                fontWeight: 600,
                textDecoration: "none",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0f766e")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#0d9488")}
            >
              1forge Studio
            </a>
            . Built for PG and hostel owners across India.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4
              style={{
                color: "var(--color-cosmic-violet)",
                fontSize: "13px",
                fontWeight: 600,
                margin: "0 0 16px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              {category}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {links.map((link) => (
                <li key={link.label} style={{ marginBottom: "10px" }}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "14px",
                      color: "var(--color-ink-black)",
                      opacity: 0.72,
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.opacity = "1")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.opacity = "0.72")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1120px",
          margin: "48px auto 0",
          paddingTop: "24px",
          borderTop: "1px solid rgba(34, 29, 29, 0.08)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            color: "var(--color-misty-gray)",
          }}
        >
          © 2026 1forge Studio. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .infra-footer-inner {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .infra-footer-inner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
