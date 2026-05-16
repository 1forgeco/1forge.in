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
        padding: "0 24px 58px",
        background: "var(--color-white-canvas)",
        color: "var(--color-ink-black)",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "52px",
            paddingTop: "92px",
          }}
          className="footer-grid"
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  color: "var(--color-cosmic-violet)",
                  fontSize: "18px",
                  fontWeight: 600,
                  margin: "0 0 26px",
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link} style={{ marginBottom: "18px" }}>
                    <a
                      href="#"
                      style={{
                        fontSize: "20px",
                        color: "var(--color-ink-black)",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "118px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#top"
            style={{
              color: "var(--color-cosmic-violet)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "34px",
              fontWeight: 700,
              letterSpacing: "-0.06em",
            }}
          >
            <BrandLogo tone="green" size="lg" />
          </a>

          <div style={{ display: "flex", gap: "24px", color: "#bdbdbd", fontSize: "26px" }}>
            {["X", "IG", "TK", "in", "GH"].map((item) => (
              <a key={item} href="#" aria-label={item} style={{ color: "inherit", fontSize: item.length > 1 ? "18px" : "26px" }}>
                {item}
              </a>
            ))}
          </div>
        </div>

        <p
          style={{
            margin: "58px 0 0",
            color: "#bdbdbd",
            fontSize: "18px",
            lineHeight: 1.45,
            maxWidth: "1040px",
          }}
        >
          1forge.in builds practical software for businesses: websites, apps,
          hostel and PG management systems, desktop tools, AI agents, and
          automation workflows. Tell us your process and we will help turn it
          into a clean, usable product.
        </p>
      </div>
    </footer>
  );
}
