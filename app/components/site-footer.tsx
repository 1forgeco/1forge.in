"use client";

import { BrandLogo } from "./brand-logo";

const linkedinUrl = "https://www.linkedin.com/company/1forgeworks/?viewAsMember=true";

const footerLinks = {
  Services: ["Websites", "Mobile Apps", "Desktop Apps", "AI Agents"],
  Systems: ["Hostel / PG", "CRM", "Inventory", "Billing"],
  Infrastructure: ["Starter PG", "Hostel Pro", "Multi-Property", "Admin Dashboard"],
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
            <a
              href={linkedinUrl}
              aria-label="1forge on LinkedIn"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                color: "var(--color-cosmic-violet)",
                border: "1px solid rgba(124, 92, 255, 0.22)",
                transition: "background 0.2s ease, color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-cosmic-violet)";
                e.currentTarget.style.color = "var(--color-white-canvas)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--color-cosmic-violet)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.54V9H7.1v11.45Z" />
              </svg>
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
