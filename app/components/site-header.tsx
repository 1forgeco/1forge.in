"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "./brand-logo";

const navigationItems = [
  { label: "Services", href: "#products" },
  { label: "Work", href: "#developers" },
  { label: "Templates", href: "#templates" },
  { label: "About", href: "#about" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        id="site-header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          background: isScrolled
            ? "rgba(255, 255, 255, 0.85)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(20px) saturate(1.8)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(1.8)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(34, 29, 29, 0.08)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 24px",
          }}
        >
          <a href="#top" id="header-logo" style={{ display: "flex", alignItems: "center" }}>
            <BrandLogo tone="dark" size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav id="main-nav" className="header-nav" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                id={`nav-${item.label.toLowerCase()}`}
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "var(--color-ink-black)",
                  transition: "color 0.2s ease",
                  position: "relative",
                  padding: "4px 0",
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--color-cosmic-violet)"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--color-ink-black)"; }}
              >
                {item.label}
                {item.label === "Services" && (
                  <span
                    className="nav-active-dot"
                    style={{
                      position: "absolute",
                      top: "-7px",
                      right: "-12px",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--color-cosmic-violet)",
                    }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="#cta"
              id="header-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "38px",
                padding: "0 20px",
                borderRadius: "var(--radius-pills)",
                background: "var(--color-ink-black)",
                color: "var(--color-white-canvas)",
                fontSize: "14px",
                fontWeight: 500,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = "translateY(-1px)";
                (e.target as HTMLElement).style.boxShadow = "0 8px 24px rgba(124, 92, 255, 0.32)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = "translateY(0)";
                (e.target as HTMLElement).style.boxShadow = "none";
              }}
            >
              Start a Project
            </a>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "var(--color-ink-black)" }}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu — fixed overlay, never pushes content down ── */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "rgba(255, 255, 255, 0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            padding: "80px 32px 40px",
            animation: "fade-in 0.22s ease forwards",
          }}
        >
          <nav style={{ flex: 1 }}>
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "18px 0",
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "var(--color-ink-black)",
                  borderBottom: "1px solid rgba(34, 29, 29, 0.07)",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA at bottom of overlay */}
          <a
            href="#cta"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "52px",
              borderRadius: "var(--radius-pills)",
              background: "var(--color-ink-black)",
              color: "var(--color-white-canvas)",
              fontSize: "16px",
              fontWeight: 600,
              marginTop: "32px",
              textDecoration: "none",
            }}
          >
            Start a Project
          </a>
        </div>
      )}
    </>
  );
}
