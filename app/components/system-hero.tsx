"use client";

import { Bot, Globe2, LayoutDashboard, Smartphone, Sparkles } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { TransitionLink } from "./transition-link";

const systems = [
  {
    id: "operations",
    label: "Operations",
    icon: LayoutDashboard,
    kicker: "BUSINESS OPERATING SYSTEM",
    summary: "Replace scattered sheets, chats and manual follow-ups with one calm control layer.",
    nodes: ["Customers", "Team workflow", "Reports", "Automation"],
    signal: "One source of truth",
    accent: "#7c5cff",
  },
  {
    id: "app",
    label: "Mobile app",
    icon: Smartphone,
    kicker: "CUSTOMER PRODUCT",
    summary: "Turn a useful service into a focused mobile experience people can return to daily.",
    nodes: ["Onboarding", "Core action", "Payments", "Notifications"],
    signal: "Designed for repeat use",
    accent: "#ef6c35",
  },
  {
    id: "web",
    label: "Web platform",
    icon: Globe2,
    kicker: "DIGITAL FRONT DOOR",
    summary: "Connect positioning, product proof and conversion in a fast, maintainable web platform.",
    nodes: ["Story", "Services", "CMS", "Qualified leads"],
    signal: "Built to convert clearly",
    accent: "#3278e6",
  },
  {
    id: "ai",
    label: "AI workflow",
    icon: Bot,
    kicker: "INTELLIGENT AUTOMATION",
    summary: "Give repetitive research, reporting and support work to a supervised AI workflow.",
    nodes: ["Business data", "AI agent", "Review step", "Action"],
    signal: "Humans stay in control",
    accent: "#36a26f",
  },
] as const;

type SystemId = (typeof systems)[number]["id"];

export function SystemHero() {
  const [activeId, setActiveId] = useState<SystemId>("operations");
  const active = systems.find((system) => system.id === activeId) ?? systems[0];

  return (
    <section id="hero" className="system-hero">
      <div className="system-hero__glow" aria-hidden="true" />
      <div className="modern-shell system-hero__layout">
        <div className="system-hero__copy">
          <div className="modern-kicker"><Sparkles size={14} /> 1FORGE PRODUCT STUDIO</div>
          <h1>We turn operational bottlenecks into working software.</h1>
          <p>
            Strategy, interface and engineering for businesses that need a useful system—not another disconnected tool.
          </p>
          <div className="system-hero__actions">
            <TransitionLink href="/#build-estimator" className="modern-button modern-button--dark">
              Get your build plan <span aria-hidden="true">↘</span>
            </TransitionLink>
            <TransitionLink href="/work" className="modern-button modern-button--line">
              Explore real work <span aria-hidden="true">↗</span>
            </TransitionLink>
          </div>
          <div className="system-hero__promise">
            <span><i /> Product thinking</span>
            <span><i /> Production engineering</span>
            <span><i /> Support after launch</span>
          </div>
        </div>

        <div className="system-console" style={{ "--system-accent": active.accent } as CSSProperties}>
          <div className="system-console__bar">
            <span><i /><i /><i /></span>
            <small>studio.1forge.in / system-map</small>
            <b>LIVE</b>
          </div>
          <div className="system-console__tabs" role="tablist" aria-label="Explore 1Forge systems">
            {systems.map(({ icon: Icon, ...system }) => (
              <button
                type="button"
                role="tab"
                aria-selected={system.id === activeId}
                className={system.id === activeId ? "is-active" : ""}
                key={system.id}
                onClick={() => setActiveId(system.id)}
              >
                <Icon size={15} /> {system.label}
              </button>
            ))}
          </div>
          <div className="system-console__canvas" key={active.id}>
            <div className="system-console__status">
              <span>{active.kicker}</span>
              <strong>{active.signal}</strong>
            </div>
            <div className="system-flow" aria-label={`${active.label} system modules`}>
              {active.nodes.map((node, index) => (
                <div className="system-flow__node" key={node} style={{ "--node-index": index } as CSSProperties}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{node}</strong>
                  {index < active.nodes.length - 1 ? <i aria-hidden="true" /> : null}
                </div>
              ))}
            </div>
            <p>{active.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
