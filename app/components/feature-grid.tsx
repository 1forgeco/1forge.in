"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const productGroups = {
  Websites: [
    ["Restaurant Website", "Menu, booking form, WhatsApp leads, Google Maps, SEO setup."],
    ["Business Landing Page", "Fast single-page site for ads, inquiries, pricing, and contact."],
    ["Portfolio / Agency Site", "Case studies, services, CMS-ready pages, and clean animations."],
  ],
  Apps: [
    ["Customer App", "Login, catalog, bookings, payments, notifications, and admin control."],
    ["Staff App", "Attendance, task updates, issue reporting, and operational checklists."],
    ["Desktop Utility", "Offline-friendly tools for billing, inventory, labels, and reports."],
  ],
  Systems: [
    ["Hostel / PG Management", "Rooms, tenants, fees, complaints, staff, notices, and reports."],
    ["CRM Dashboard", "Leads, follow-ups, customer notes, pipeline, and reminders."],
    ["Inventory / Billing", "Stock, invoices, vendors, purchases, exports, and role access."],
  ],
  AI: [
    ["Support Agent", "Answers FAQs, collects lead details, escalates to your team."],
    ["Report Automation", "Daily summaries from sheets, forms, CRMs, and databases."],
    ["Workflow Agent", "Automates repetitive browser, email, document, and data-entry tasks."],
  ],
};

const templates = [
  ["Starter PG", "Room list, tenant profiles, fee tracking, basic reports."],
  ["Hostel Pro", "Beds, floors, complaints, staff tasks, notices, monthly analytics."],
  ["Multi-Property", "Multiple buildings, owner dashboard, role access, exports."],
];

type ProductGroup = keyof typeof productGroups;

export function FeatureGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const templateRef = useRef<HTMLDivElement>(null);
  const [activeGroup, setActiveGroup] = useState<ProductGroup>("Websites");
  const hasInitialized = useRef(false);

  // Initial scroll-triggered reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header: badge, h2, p, tab bar
      if (headerRef.current) {
        const children = headerRef.current.children;
        gsap.set(children, {
          autoAlpha: 0,
          y: 30,
          willChange: "transform, opacity",
        });

        gsap.to(children, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          onComplete() {
            gsap.set(children, { willChange: "auto" });
          },
        });
      }

      // Cards grid: stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll("article");
        gsap.set(cards, {
          autoAlpha: 0,
          y: 30,
          willChange: "transform, opacity",
        });

        gsap.to(cards, {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onComplete() {
            gsap.set(cards, { willChange: "auto" });
            hasInitialized.current = true;
          },
        });
      }

      // Template section
      if (templateRef.current) {
        const templateCards = templateRef.current.querySelectorAll("article");
        const templateHeader = templateRef.current.querySelector(".split-copy");

        if (templateHeader) {
          gsap.set(templateHeader, { autoAlpha: 0, y: 30, willChange: "transform, opacity" });
          gsap.to(templateHeader, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: templateRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onComplete() {
              gsap.set(templateHeader, { willChange: "auto" });
            },
          });
        }

        if (templateCards.length) {
          gsap.set(templateCards, { autoAlpha: 0, y: 25, willChange: "transform, opacity" });
          gsap.to(templateCards, {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: templateRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            onComplete() {
              gsap.set(templateCards, { willChange: "auto" });
            },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate card swap when changing tabs (only after initial animation)
  useEffect(() => {
    if (!hasInitialized.current || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll("article");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.04,
        ease: "power2.out",
      }
    );
  }, [activeGroup]);

  return (
    <section
      ref={sectionRef}
      id="developers"
      style={{
        background: "var(--color-white-canvas)",
        padding: "110px 0 0",
      }}
    >
      <div ref={headerRef} className="gsap-reveal" style={{ maxWidth: "1040px", margin: "0 auto", textAlign: "center", padding: "0 16px" }}>
        <div
          className="motion-shell"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            color: "var(--color-pewter)",
            fontSize: "18px",
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "9px",
              background: "var(--color-cosmic-violet)",
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✦
          </span>
          Product Showcase
        </div>

        <h2
          style={{
            fontSize: "clamp(34px, 5vw, 64px)",
            lineHeight: 0.98,
            letterSpacing: "-0.055em",
            fontWeight: 500,
            margin: "30px 0 0",
          }}
        >
          See what we can build for you.
        </h2>
        <p
          style={{
            maxWidth: "620px",
            margin: "18px auto 0",
            color: "var(--color-misty-gray)",
            fontSize: "18px",
            lineHeight: 1.28,
          }}
        >
          Toggle through example products we create for businesses. Each can be
          customized for your brand, workflow, and budget.
        </p>

        <div
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
            marginTop: "30px",
            padding: "6px",
            borderRadius: "999px",
            background: "var(--color-light-alabaster)",
          }}
        >
          {(Object.keys(productGroups) as ProductGroup[]).map((group) => (
            <button
              key={group}
              type="button"
              onClick={() => setActiveGroup(group)}
              style={{
                height: "34px",
                padding: "0 16px",
                borderRadius: "999px",
                border: "none",
                background:
                  activeGroup === group ? "var(--color-ink-black)" : "transparent",
                color:
                  activeGroup === group ? "var(--color-white-canvas)" : "var(--color-pewter)",
                fontFamily: "inherit",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {group}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={cardsRef}
        style={{
          maxWidth: "1040px",
          margin: "38px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
        className="builder-grid gsap-reveal"
      >
        {productGroups[activeGroup].map(([title, body], index) => (
          <article
            key={title}
            className="motion-card"
            style={{
              borderRadius: "18px",
              background: "var(--color-light-alabaster)",
              minHeight: "150px",
              padding: "24px",
            }}
          >
            <span
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "10px",
              background: "rgba(124, 92, 255, 0.14)",
                color: "var(--color-cosmic-violet)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
              }}
            >
              {index + 1}
            </span>
            <h3 style={{ margin: "18px 0 0", fontSize: "24px", letterSpacing: "-0.04em" }}>
              {title}
            </h3>
            <p style={{ margin: "10px 0 0", color: "var(--color-pewter)", lineHeight: 1.4 }}>
              {body}
            </p>
          </article>
        ))}
      </div>

      <div
        ref={templateRef}
        id="templates"
        className="template-section-card gsap-reveal"
        style={{
          width: "calc(100% - 40px)",
          margin: "74px auto 0",
          background: "linear-gradient(180deg, #f7f5ff 0%, #e7e0ff 55%, #cfc2ff 85%, #b7a6ff 100%)",
          borderRadius: "24px",
          padding: "74px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1040px",
            margin: "0 auto 38px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "24px",
          }}
          className="split-copy"
        >
          <div>
            <h3
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                lineHeight: 1.04,
                letterSpacing: "-0.045em",
                margin: 0,
              }}
            >
              Explore hostel and PG templates.
            </h3>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.3,
                color: "var(--color-pewter)",
                maxWidth: "620px",
                margin: "18px 0 0",
              }}
            >
              Leave this section ready for template previews, pricing variants,
              screenshots, and demo links for hostel owners.
            </p>
          </div>
          <a href="#cta" className="btn-white">
            Request Demo
          </a>
        </div>

        <div
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
          className="builder-grid"
        >
          {templates.map(([title, body]) => (
            <article
              key={title}
              className="motion-card"
              style={{
                borderRadius: "20px",
                background: "rgba(255,255,255,0.62)",
                minHeight: "128px",
                padding: "24px",
              }}
            >
              <h4 style={{ margin: 0, fontSize: "20px" }}>{title}</h4>
              <p style={{ margin: "10px 0 0", color: "var(--color-pewter)" }}>{body}</p>
              <span
                style={{
                  display: "inline-flex",
                  marginTop: "18px",
                  color: "var(--color-cosmic-violet)",
                  fontWeight: 700,
                  fontSize: "13px",
                }}
              >
                Template preview slot →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
