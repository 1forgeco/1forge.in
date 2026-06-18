"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  Gauge,
  Laptop,
  LayoutDashboard,
  MessagesSquare,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type Service = {
  title: string;
  eyebrow: string;
  summary: string;
  icon: React.ElementType;
  size: string;
  deliverables: string[];
  chips: string[];
  visual: "browser" | "phone" | "agent" | "dashboard" | "hostel" | "support";
};

const services: Service[] = [
  {
    title: "Websites & Web Apps",
    eyebrow: "Launch systems",
    summary:
      "Fast, responsive websites, landing pages, portals, CMS builds, dashboards, and customer-facing web products.",
    icon: Laptop,
    size: "lg:col-span-2",
    deliverables: ["Next.js builds", "SEO foundations", "CMS and admin flows"],
    chips: ["Next.js", "React", "CMS", "SEO"],
    visual: "browser",
  },
  {
    title: "Mobile Apps",
    eyebrow: "iOS and Android",
    summary:
      "Cross-platform apps with smooth onboarding, notifications, auth, payments, and store-ready builds.",
    icon: Smartphone,
    size: "lg:row-span-2",
    deliverables: ["React Native or Flutter", "Auth and payments", "Push notifications"],
    chips: ["iOS", "Android", "Stores"],
    visual: "phone",
  },
  {
    title: "AI Agents & Automation",
    eyebrow: "Less manual work",
    summary:
      "AI assistants and automations for support, lead handling, reporting, reminders, and internal workflows.",
    icon: Bot,
    size: "",
    deliverables: ["AI chat agents", "WhatsApp workflows", "CRM automation"],
    chips: ["OpenAI", "Agents", "Zapier"],
    visual: "agent",
  },
  {
    title: "Custom Management Systems",
    eyebrow: "Business control rooms",
    summary:
      "Role-based software for inventory, billing, CRM, task tracking, teams, reports, and approvals.",
    icon: LayoutDashboard,
    size: "",
    deliverables: ["Admin dashboards", "Reports and exports", "Role permissions"],
    chips: ["Postgres", "Reports", "RBAC"],
    visual: "dashboard",
  },
  {
    title: "Hostel / PG / Institute Management Systems",
    eyebrow: "Built for operators",
    summary:
      "Room allocation, tenant records, fee tracking, attendance, staff access, invoices, and alerts in one place.",
    icon: Building2,
    size: "lg:col-span-2",
    deliverables: ["Room and bed maps", "Fee collection", "Institute records"],
    chips: ["Rooms", "Fees", "Attendance", "Alerts"],
    visual: "hostel",
  },
  {
    title: "Monthly Maintenance & Support",
    eyebrow: "Keep it healthy",
    summary:
      "Ongoing fixes, uptime checks, backups, security updates, feature changes, hosting support, and monitoring.",
    icon: ShieldCheck,
    size: "",
    deliverables: ["Backups", "Uptime checks", "Priority changes"],
    chips: ["SLA", "Backups", "Security"],
    visual: "support",
  },
];

const heroStats = [
  ["6", "service tracks"],
  ["24h", "support response"],
  ["1", "partner for build and upkeep"],
];

const processSteps = [
  {
    title: "Map the workflow",
    body: "We turn your current process into screens, data flows, roles, and launch priorities.",
  },
  {
    title: "Build in focused phases",
    body: "Core workflows ship first, then automations, dashboards, and integrations build around them.",
  },
  {
    title: "Maintain after launch",
    body: "The system stays monitored, updated, backed up, and ready for the next operational change.",
  },
];

function ServiceVisual({ type }: { type: Service["visual"] }) {
  if (type === "browser") return <BrowserVisual />;
  if (type === "phone") return <PhoneVisual />;
  if (type === "agent") return <AgentVisual />;
  if (type === "dashboard") return <DashboardVisual />;
  if (type === "hostel") return <HostelVisual />;
  return <SupportVisual />;
}

function BrowserVisual() {
  const [score, setScore] = useState(72);

  useEffect(() => {
    const timer = window.setTimeout(() => setScore(99), 350);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="mt-7 overflow-hidden rounded-2xl border border-[#2c2c2e] bg-[#1c1c1e]">
      <div className="flex h-10 items-center gap-2 border-b border-[#2c2c2e] px-4 bg-white/[0.02]">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="ml-auto rounded-full border border-white/[0.05] px-3 py-1 text-[10px] text-white/35 bg-white/[0.01]">
          studio.1forge.in
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3 p-4">
        {[
          ["Performance", score],
          ["SEO", 100],
          ["Access", 98],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-white/[0.05] bg-black/15 p-3">
            <span className="block text-[10px] text-white/35">{label}</span>
            <motion.strong
              className="mt-2 block text-2xl font-medium text-white"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
            >
              {value}
            </motion.strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneVisual() {
  const screens = ["Bookings", "Payments", "Alerts"];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setActive((value) => (value + 1) % screens.length), 2200);
    return () => window.clearInterval(interval);
  }, [screens.length]);

  return (
    <div className="mt-7 flex justify-center flex-1">
      <div className="relative h-[480px] w-[225px] rounded-[38px] border-[5px] border-[#2c2c2e] bg-[#1c1c1e] shadow-2xl">
        <div className="absolute left-1/2 top-3.5 z-10 h-3.5 w-14 -translate-x-1/2 rounded-full bg-black" />
        <div className="h-full overflow-hidden rounded-[32px] p-4 pt-9 border border-white/[0.03]">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex h-full flex-col justify-between rounded-2xl border border-white/[0.05] p-3.5 bg-black/20"
          >
            <div>
              <span className="text-[9px] font-semibold uppercase text-white/35 font-mono">1forge app</span>
              <h4 className="mt-2 text-white text-xs font-semibold">{screens[active]}</h4>
              <p className="mt-1 text-[11px] leading-relaxed text-white/45">
                Live modules, clean actions, and device-native feedback.
              </p>
              
              {/* Operational Activity Feed Filler */}
              <div className="mt-5 space-y-2.5">
                <span className="text-[8px] uppercase tracking-wider text-white/35 block font-mono">Recent activity</span>
                {[
                  { title: "Invoice #1092 paid", time: "2m ago", val: "+$120" },
                  { title: "Room 102 checked-in", time: "15m ago", val: "Filled" },
                  { title: "Weekly report ready", time: "2h ago", val: "View" }
                ].map((act, idx) => (
                  <div key={idx} className="flex justify-between items-center rounded-lg border border-white/5 bg-white/[0.02] p-2 text-[9px] leading-none">
                    <div>
                      <span className="block text-white/80 font-medium">{act.title}</span>
                      <span className="text-white/35 text-[7.5px] mt-0.5 block">{act.time}</span>
                    </div>
                    <span className="text-white/50 text-[8.5px] font-mono">{act.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 mt-4">
              {[72, 48, 86].map((width, index) => (
                <span key={index} className="block h-1.5 rounded-full border border-white/5 bg-white/5">
                  <motion.span
                    className="block h-full rounded-full bg-white/70"
                    animate={{ width: `${active === index ? width : width - 18}%` }}
                  />
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function AgentVisual() {
  const prompts = ["New lead captured", "Fee reminder sent", "Report generated"];
  const [active, setActive] = useState(0);

  return (
    <div className="mt-7 rounded-2xl border border-[#2c2c2e] bg-[#1c1c1e] p-4">
      <div className="flex items-center gap-2 border-b border-white/[0.05] pb-3">
        <MessagesSquare className="h-4 w-4 text-white/45" />
        <span className="text-xs font-medium text-white/65">Automation console</span>
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white/50" />
      </div>
      <div className="mt-4 space-y-2">
        {prompts.map((prompt, index) => (
          <button
            key={prompt}
            onClick={() => setActive(index)}
            className={`w-full rounded-xl border px-3 py-2 text-left text-xs transition ${
              active === index
                ? "border-white/10 bg-white/[0.08] text-white"
                : "border-white/[0.03] bg-black/10 text-white/45 hover:bg-white/[0.02]"
            }`}
          >
            {prompt}
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 rounded-xl border border-white/[0.03] bg-black/15 p-3 text-xs leading-relaxed text-white/45"
      >
        Agent routed the task, updated records, and logged the action for review.
      </motion.div>
    </div>
  );
}

function DashboardVisual() {
  const bars = [44, 72, 58, 86, 66];

  return (
    <div className="mt-7 rounded-2xl border border-[#2c2c2e] bg-[#1c1c1e] p-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs text-white/45">Operations dashboard</span>
        <Gauge className="h-4 w-4 text-white/45" />
      </div>
      <div className="flex h-28 items-end gap-3 px-2">
        {bars.map((bar, index) => (
          <motion.span
            key={index}
            className="flex-1 rounded-t-lg bg-white/70"
            initial={{ height: 0 }}
            whileInView={{ height: `${bar}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
          />
        ))}
      </div>
    </div>
  );
}

function HostelVisual() {
  const [selected, setSelected] = useState(1);
  const rooms = ["101", "102", "103", "201", "202", "203", "301", "302"];

  return (
    <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_180px]">
      <div className="grid grid-cols-4 gap-2 rounded-2xl border border-[#2c2c2e] bg-[#1c1c1e] p-3">
        {rooms.map((room, index) => (
          <button
            key={room}
            onClick={() => setSelected(index)}
            className={`min-h-16 rounded-xl border p-2 text-left transition ${
              selected === index
                ? "border-white/20 bg-white/[0.12] text-white"
                : "border-white/[0.04] bg-black/15 text-white/45 hover:bg-white/[0.02]"
            }`}
          >
            <span className="block text-sm font-medium">R-{room}</span>
            <span className="mt-2 block text-[10px] opacity-75">
              {index % 3 === 0 ? "Due" : index % 2 === 0 ? "Open" : "Filled"}
            </span>
          </button>
        ))}
      </div>
      <div className="rounded-2xl border border-[#2c2c2e] bg-[#1c1c1e] p-4 flex flex-col justify-between">
        <div>
          <span className="text-[10px] uppercase text-white/35 font-mono">Selected</span>
          <strong className="mt-1 block text-white font-medium">Room {rooms[selected]}</strong>
          <p className="mt-2 text-xs leading-relaxed text-white/45">
            Fee status, occupancy, staff notes, and maintenance actions stay attached to the room.
          </p>
        </div>
      </div>
    </div>
  );
}

function SupportVisual() {
  return (
    <div className="mt-7 rounded-2xl border border-[#2c2c2e] bg-[#1c1c1e] p-4">
      <div className="flex items-center justify-between text-xs text-white/45">
        <span>Support health</span>
        <span>99.98%</span>
      </div>
      <div className="my-5 h-12">
        <svg viewBox="0 0 240 56" className="h-full w-full fill-none stroke-white/70">
          <motion.path
            d="M2 32H60L70 18L82 46L96 8L110 38H238"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-2 text-[10px] text-white/45">
        {["Backups", "Patches", "Monitoring"].map((item) => (
          <span key={item} className="rounded-lg border border-white/[0.04] bg-black/10 px-2 py-2 text-center">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <motion.article
      className={`group relative min-h-[390px] overflow-hidden rounded-[28px] border border-[#1c1c1e] bg-[#121212] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:p-7 ${service.size}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
    >
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.04] text-white border border-white/[0.08]">
              <Icon className="h-5 w-5 text-white" />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase text-white/35">{service.eyebrow}</span>
              <h3 className="mt-1 font-medium text-white text-lg">{service.title}</h3>
            </div>
          </div>
          <ArrowRight className="mt-2 h-5 w-5 text-white/24" />
        </div>

        <p className="mt-5 max-w-2xl leading-relaxed text-white/58 text-sm">{service.summary}</p>

        <ServiceVisual type={service.visual} />

        <div className="mt-auto pt-8">
          <div className="grid gap-3 sm:grid-cols-3">
            {service.deliverables.map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-white/50">
                <Check className="h-3.5 w-3.5 text-white/35" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {service.chips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/[0.04] bg-white/[0.02] px-3 py-1 text-[10px] text-white/40">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ServicesPage() {
  const bentoRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(services[0].title);
  const activeDescription = useMemo(
    () => services.find((service) => service.title === activeService)?.summary ?? services[0].summary,
    [activeService]
  );

  return (
    <div id="top" className="min-h-screen bg-white-canvas text-ink-black">
      <SiteHeader />

      <main>
        <section
          className="hero-section-card relative mx-auto overflow-hidden px-5 pb-14 pt-12 text-center sm:px-8 sm:pb-20 sm:pt-16"
          style={{
            width: "calc(100% - 40px)",
            borderRadius: "24px",
            background:
              "linear-gradient(180deg, #ffffff 0%, #f7f5ff 36%, #e7e0ff 68%, #cfc2ff 100%)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(circle,#221d1d_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="relative mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-2 text-sm font-semibold text-[var(--color-pewter)] backdrop-blur animate-soft-breathe"
            >
              <Sparkles className="h-4 w-4 text-[var(--color-cosmic-violet)]" />
              Services built around real operations
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mx-auto mt-7 max-w-4xl font-medium leading-none tracking-normal text-[var(--color-ink-black)]"
            >
              Websites, apps, AI agents, and business systems from one studio.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mx-auto mt-6 max-w-2xl leading-relaxed text-[var(--color-pewter)]"
            >
              Pick one service or combine multiple tracks into a single operating platform:
              web, mobile, management systems, hostel and institute tools, automation, and
              monthly support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-3"
            >
              <Link href="/#cta" className="btn-primary">
                Start a Project
              </Link>
              <button
                className="btn-ghost-dark cursor-pointer"
                onClick={() => bentoRef.current?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Services
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3"
            >
              {heroStats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-black/10 bg-white/42 p-4 backdrop-blur">
                  <strong className="block text-2xl font-medium text-[var(--color-ink-black)]">{value}</strong>
                  <span className="mt-1 block text-xs text-[var(--color-pewter)]">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section ref={bentoRef} className="products-outer-section pt-12">
          <div
            className="dark-section-card relative mx-auto overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
            style={{
              width: "calc(100% - 40px)",
              margin: "0 auto 48px",
              minHeight: "1000px",
              borderRadius: "24px",
              background: "#000000",
            }}
          >
            <div className="relative mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-xs font-semibold text-white/55 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    Service map
                  </span>
                  <h2 className="mt-5 max-w-2xl font-medium leading-none tracking-normal text-white">
                    Choose the blocks your business actually needs.
                  </h2>
                </div>
                <p className="max-w-xl leading-relaxed text-white/54 lg:justify-self-end">
                  Every card is a separate service, but the strongest results usually happen
                  when they connect: a website feeding leads into a CRM, an app reading the
                  same database, and agents handling repetitive follow-ups.
                </p>
              </div>

              <div className="mt-8 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {services.map((service) => (
                  <button
                    key={service.title}
                    onClick={() => setActiveService(service.title)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-xs transition ${
                      activeService === service.title
                        ? "border-white/12 bg-white/[0.10] text-white"
                        : "border-transparent bg-white/[0.03] text-white/45 hover:bg-white/[0.06]"
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
              <motion.p
                key={activeService}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 max-w-2xl text-sm leading-relaxed text-white/42"
              >
                {activeDescription}
              </motion.p>

              <div className="mt-10 grid auto-rows-auto grid-cols-1 gap-5 lg:grid-cols-3">
                {services.map((service, index) => (
                  <ServiceCard key={service.title} service={service} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-purple-soft)] px-4 py-2 text-xs font-semibold text-[var(--color-cosmic-violet)]">
                <Wrench className="h-4 w-4" />
                How we build
              </span>
              <h2 className="mt-5 max-w-md font-medium leading-none tracking-normal">
                Practical software, then careful upkeep.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.title}
                  className="rounded-3xl border border-black/10 bg-[var(--color-light-alabaster)] p-5"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-sm font-medium text-[var(--color-ink-black)]">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 font-medium text-[var(--color-ink-black)]">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-[var(--color-pewter)]">{step.body}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl bg-[var(--color-obsidian)] p-6 text-white sm:p-8 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="max-w-2xl font-medium leading-none tracking-normal">
                Need a website, app, system, agent, or support plan?
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-white/52">
                Share your workflow and we will suggest the smallest useful build first,
                with space to expand after launch.
              </p>
            </div>
            <Link href="/#cta" className="btn-inverse mt-8 inline-flex lg:mt-0">
              Start a Project
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
