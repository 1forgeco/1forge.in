"use client";

import { useEffect, useRef, useState } from "react";

const trustItems = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "End-to-End Encryption",
    description: "All data encrypted in transit and at rest with AES-256.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Audited Smart Contracts",
    description: "Multiple third-party audits ensure protocol safety.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Global Availability",
    description: "Access your savings from anywhere in the world, 24/7.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Insurance Protection",
    description: "Deposits protected with up to $1M balance coverage.",
  },
];

export function TrustSection() {
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
      id="about"
      style={{
        padding: "80px 24px",
        background: "var(--color-light-alabaster)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto 56px",
          }}
        >
          <h2
            className={isVisible ? "animate-fade-up" : ""}
            style={{
              fontSize: "clamp(28px, 4vw, 36px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontWeight: 500,
              color: "var(--color-ink-black)",
              margin: 0,
              opacity: isVisible ? undefined : 0,
            }}
          >
            Security you can trust
          </h2>
          <p
            className={isVisible ? "animate-fade-up delay-100" : ""}
            style={{
              marginTop: "14px",
              fontSize: "16px",
              lineHeight: 1.5,
              color: "var(--color-pewter)",
              opacity: isVisible ? undefined : 0,
            }}
          >
            Your peace of mind is our top priority.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className={
                isVisible
                  ? `animate-fade-up delay-${(index + 2) * 100}`
                  : ""
              }
              style={{
                padding: "28px 24px",
                borderRadius: "20px",
                background: "var(--color-white-canvas)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "default",
                opacity: isVisible ? undefined : 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 12px 32px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  color: "var(--color-cosmic-violet)",
                  marginBottom: "14px",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: "var(--color-ink-black)",
                  margin: 0,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  marginTop: "8px",
                  fontSize: "14px",
                  lineHeight: 1.5,
                  color: "var(--color-pewter)",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
