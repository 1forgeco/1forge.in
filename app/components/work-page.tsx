"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─────────────────────────────────────────────────────────── */
/*  Company / Project data                                     */
/* ─────────────────────────────────────────────────────────── */
type Company = {
  name: string;
  description: string;
  logo: string;
  url?: string;
  tags: string[];
  type: "open-source" | "company" | "product";
};

const companies: Company[] = [
  {
    name: "Jitsi Meet",
    description:
      "Built and improved real-time communication features for the Jitsi video conferencing platform, enhancing call quality and collaboration capabilities.",
    logo: "/workedWith/jitsi-logo.png",
    url: "https://jitsi.org/",
    tags: ["Video Conferencing", "WebRTC", "React"],
    type: "open-source",
  },
  {
    name: "OpenStreetMap",
    description:
      "Worked on the iD map editor to improve editing workflows, UI interactions, and data accuracy for the world's largest collaborative mapping platform.",
    logo: "/workedWith/openstreetmap.png",
    url: "https://www.openstreetmap.org/",
    tags: ["Mapping", "GIS", "JavaScript"],
    type: "open-source",
  },
  {
    name: "Apache Airflow",
    description:
      "Built an AI agent for custom Docker container context to help beginner open-source contributors navigate and contribute to the Apache Airflow repository using AI.",
    logo: "/workedWith/AirflowLogo.svg.png",
    url: "https://airflow.apache.org/",
    tags: ["Data Pipelines", "Python", "Apache"],
    type: "open-source",
  },
  {
    name: "Palisadoes Foundation",
    description:
      "Built community management tools for the Palisadoes Foundation's Talawa project, delivering features for non-profit event handling, member management, and reporting.",
    logo: "/workedWith/palisadoes-social-card.jpg",
    url: "https://www.palisadoes.org/",
    tags: ["Non-Profit", "Community Tools", "Full Stack"],
    type: "open-source",
  },
  {
    name: "Meshery",
    description:
      "Delivered features for Meshery's cloud-native management plane, working on service mesh lifecycle management, configuration, and performance tooling.",
    logo: "/workedWith/2c6279e8-716c-429e-ae08-cd4b1966df31.png",
    url: "https://meshery.io/",
    tags: ["Cloud Native", "Service Mesh", "CNCF"],
    type: "open-source",
  },
  {
    name: "Layer5",
    description:
      "Worked on Layer5's ecosystem of cloud infrastructure tools, building management interfaces and operational dashboards for service mesh workflows.",
    logo: "/workedWith/38da522e-19e0-4667-a779-7e1da76ab7d9.png",
    url: "https://layer5.io/",
    tags: ["Cloud Native", "Infrastructure", "DevOps"],
    type: "open-source",
  },
  {
    name: "Zigguratss",
    description:
      "Worked with the existing website to optimize site performance, improve load times, and enhance the overall user experience across the platform.",
    logo: "/workedWith/b3756ef6fb55408a83bef1ae70acc759.png",
    url: "https://zigguratss.com/",
    tags: ["Full Stack", "Web Development", "Performance"],
    type: "company",
  },
  {
    name: "ZoronTech",
    description:
      "Made a fully responsive website for an ed-tech platform, including course pages, student dashboards, and a clean UI tailored for online learning.",
    logo: "/workedWith/zorontech_logo.jpeg",
    tags: ["MERN Stack", "Web Development", "Ed-Tech"],
    type: "company",
  },
  {
    name: "SAST",
    description:
      "Designed and built the competition website for Project Nebula, handling registrations, event schedules, team listings, and live updates during the event.",
    logo: "/workedWith/images.jpeg",
    tags: ["Space Tech", "Education", "Research"],
    type: "product",
  },
  {
    name: "Aazakart",
    description:
      "Built and refined the Aazakart e-commerce platform, delivering product listings, cart and checkout flows, and a seamless shopping experience for online retail.",
    logo: "/workedWith/4L6kSxlCwhSCINrr6ljbrJdPZlvTOqHQDuFBg503.png",
    tags: ["E-Commerce", "Retail", "Full Stack"],
    type: "product",
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  Icon components                                            */
/* ─────────────────────────────────────────────────────────── */
function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Main Component                                             */
/* ─────────────────────────────────────────────────────────── */
export function WorkPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  /* ── GSAP entrance animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section
      if (heroRef.current) {
        const els = heroRef.current.querySelectorAll("[data-animate]");
        gsap.set(els, { autoAlpha: 0, y: 30 });
        gsap.to(els, {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.15,
        });
      }

      // Company cards
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll("[data-card]");
        gsap.set(cards, { autoAlpha: 0, y: 30, scale: 0.97 });
        gsap.to(cards, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 88%",
          },
        });
      }

      // CTA section
      if (ctaRef.current) {
        gsap.set(ctaRef.current, { autoAlpha: 0, y: 40 });
        gsap.to(ctaRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="top" className="min-h-screen bg-white-canvas text-ink-black">
      <SiteHeader />

      <main>
        {/* ────────────────────── HERO ────────────────────── */}
        <section
          className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24"
          style={{
            background:
              "linear-gradient(180deg, #ffffff 0%, #f7f5ff 30%, #ede8ff 62%, #ddd4ff 86%, #cfc2ff 100%)",
            width: "calc(100% - 40px)",
            margin: "0 auto",
            borderRadius: "24px",
          }}
        >
          {/* Decorative grid dots */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #7c5cff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div
            ref={heroRef}
            className="relative z-10 mx-auto max-w-[1040px] px-6 text-center"
          >
            {/* Badge */}
            <div
              data-animate
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#7c5cff]/20 bg-white/60 px-5 py-2 text-sm font-medium text-[var(--color-pewter)] backdrop-blur-sm"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--color-cosmic-violet)] text-xs text-white">
                ✦
              </span>
              Our Work
            </div>

            {/* Heading */}
            <h1
              data-animate
              className="mx-auto max-w-[840px] text-[clamp(32px,6vw,64px)] font-medium leading-[0.94] tracking-[-0.05em] text-[var(--color-ink-black)]"
            >
              Contributed to these amazing projects
            </h1>

            {/* Subheading */}
            <p
              data-animate
              className="mx-auto mt-5 max-w-[580px] text-[clamp(14px,1.3vw,18px)] leading-[1.5] text-[var(--color-pewter)]"
            >
              We&apos;ve worked with startups, organizations, and global teams
              — delivering software, building platforms, and solving real
              problems across industries.
            </p>
          </div>
        </section>

        {/* ────────────────────── COMPANY GRID ────────────────────── */}
        <section className="mx-auto max-w-[1120px] px-5 pt-16 pb-8">
          {/* Section label */}
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-light-alabaster)] px-4 py-1.5 text-[13px] font-semibold text-[var(--color-pewter)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-cosmic-violet)]" />
              Companies we have catered for
            </span>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {companies.map((company) => (
              <article
                key={company.name}
                data-card
                className="relative flex flex-col overflow-hidden rounded-[20px] border border-[rgba(34,29,29,0.06)] bg-[var(--color-light-alabaster)]"
              >
                {/* Logo area */}
                <div className="relative flex h-[140px] items-center justify-center overflow-hidden bg-white p-6">
                  {/* Subtle gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-light-alabaster)]/30" />

                  <div className="relative h-16 w-full max-w-[180px]">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain"
                      sizes="180px"
                    />
                  </div>


                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 pt-3">
                  <h3 className="mb-2 text-[16px] font-semibold leading-tight tracking-[-0.02em] text-[var(--color-ink-black)]">
                    {company.name}
                  </h3>

                  <p className="flex-1 text-[12.5px] leading-[1.55] text-[var(--color-pewter)]">
                    {company.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {company.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-black/[0.04] bg-white px-2 py-0.5 text-[10.5px] font-medium text-[var(--color-ink-black)]/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ────────────────────── CTA BANNER ────────────────────── */}
        <section className="mx-auto max-w-[1120px] px-5 pb-20 pt-8">
          <div
            ref={ctaRef}
            className="overflow-hidden rounded-[24px] p-px"
            style={{
              background:
                "linear-gradient(135deg, var(--color-cosmic-violet), #a78bfa, var(--color-cosmic-violet))",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 6s ease infinite",
            }}
          >
            <div className="rounded-[23px] bg-[var(--color-obsidian)] px-8 py-12 text-center sm:px-16 sm:py-16">
              <h2 className="mx-auto max-w-[520px] text-[clamp(24px,4vw,40px)] font-medium leading-[1] tracking-[-0.04em] text-white">
                Let&apos;s build something great together
              </h2>
              <p className="mx-auto mt-4 max-w-[420px] text-[15px] leading-[1.5] text-white/50">
                Have a project in mind? We&apos;d love to hear about it. Reach
                out and let&apos;s discuss how we can help.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/#cta"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Start a Project
                </a>
                <a
                  href="https://www.linkedin.com/company/1forgeworks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2 text-[14px] font-semibold !text-white transition-all duration-200 hover:bg-[#004182]"
                  style={{
                    boxShadow: "0 4px 0 #084e96, 0 6px 16px rgba(10,102,194,0.35)",
                    color: "white",
                  }}
                >
                  <LinkedInIcon className="h-4 w-4 fill-white" />
                  <span style={{ color: "white" }}>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
