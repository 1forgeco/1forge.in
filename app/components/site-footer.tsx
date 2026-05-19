"use client";

import { BrandLogo } from "./brand-logo";

const footerLinks = {
  Services: ["Websites", "Mobile Apps", "Desktop Apps", "AI Agents"],
  Systems: ["Hostel / PG", "CRM", "Inventory", "Billing"],
  Templates: ["Starter PG", "Hostel Pro", "Multi-Property", "Admin Dashboard"],
  Company: ["About 1forge", "Our Work", "Process", "Contact"],
  Support: ["Maintenance", "Deployment", "Training", "Automation Help"],
};

export function SiteFooter() {
  return (
    <footer
      id="site-footer"
      style={{
        padding: "0 24px 48px",
        background: "var(--color-white-canvas)",
        color: "var(--color-ink-black)",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* Link grid */}
        <div
          style={{
            gap: "52px",
            paddingTop: "80px",
          }}
          className="footer-grid"
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  color: "var(--color-cosmic-violet)",
                  fontSize: "14px",
                  fontWeight: 600,
                  margin: "0 0 16px",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link} style={{ marginBottom: "10px" }}>
                    <a
                      href={link === "Contact" ? "mailto:studio@1forge.in" : "#"}
                      style={{
                        fontSize: "15px",
                        color: "var(--color-ink-black)",
                        opacity: 0.72,
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "1")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "0.72")}
                    >
                      {link}
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
            marginTop: "72px",
            paddingTop: "28px",
            borderTop: "1px solid rgba(34,29,29,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <a href="#top">
            <BrandLogo tone="purple" size="md" />
          </a>

          <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:studio@1forge.in"
              style={{ color: "var(--color-cosmic-violet)", fontSize: "14px", fontWeight: 600 }}
            >
              studio@1forge.in
            </a>
          </div>
        </div>

        <p
          style={{
            margin: "24px 0 0",
            color: "#bdbdbd",
            fontSize: "13px",
            lineHeight: 1.5,
            maxWidth: "640px",
          }}
        >
          1forge.in builds practical software for businesses: websites, apps, hostel and PG
          management systems, desktop tools, AI agents, and automation workflows.
        </p>
      </div>
    </footer>
  );
}
