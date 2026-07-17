"use client";

import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  Globe2,
  LayoutDashboard,
  Smartphone,
} from "lucide-react";

const buildOptions = [
  {
    id: "website",
    label: "Website",
    eyebrow: "WEB EXPERIENCE",
    title: "A sharper digital front door.",
    body: "A high-converting presence with the pages, content structure and launch support your business needs.",
    timeline: "2–4 weeks",
    features: ["Responsive interface", "CMS-ready structure", "SEO foundation", "Launch support"],
    icon: Globe2,
    tone: "violet",
  },
  {
    id: "app",
    label: "Mobile app",
    eyebrow: "PRODUCT EXPERIENCE",
    title: "A useful product people return to.",
    body: "A clear mobile flow from onboarding to the daily actions that make your app valuable.",
    timeline: "6–10 weeks",
    features: ["UX flows", "Account & auth", "Core product loop", "Store-ready build"],
    icon: Smartphone,
    tone: "coral",
  },
  {
    id: "system",
    label: "Business system",
    eyebrow: "OPERATIONS SYSTEM",
    title: "Your workflow, finally in one place.",
    body: "A custom operating layer for customers, staff, inventory, properties, reports or whatever runs the business.",
    timeline: "5–12 weeks",
    features: ["Role-based access", "Operational dashboard", "Reports & exports", "Scalable modules"],
    icon: LayoutDashboard,
    tone: "blue",
  },
  {
    id: "automation",
    label: "AI automation",
    eyebrow: "INTELLIGENT WORKFLOW",
    title: "Give repetitive work to the machine.",
    body: "An AI-assisted workflow that moves information, answers routine questions and keeps your team focused.",
    timeline: "2–6 weeks",
    features: ["Workflow mapping", "AI agent", "Tool integrations", "Human handoff"],
    icon: Bot,
    tone: "green",
  },
] as const;

type BuildOption = (typeof buildOptions)[number];

function ConfiguratorPreview({ option }: { option: BuildOption }) {
  return (
    <div className={`configurator-preview is-${option.tone}`} aria-hidden="true">
      <div className="configurator-preview__chrome">
        <span /><span /><span />
        <small>preview.1forge.in/{option.id}</small>
      </div>
      <div className="configurator-preview__canvas">
        <div className="configurator-preview__sidebar">
          <span className="is-active" />
          <span />
          <span />
          <span />
        </div>
        <div className="configurator-preview__workspace">
          <div className="configurator-preview__topline">
            <i />
            <i />
          </div>
          <div className="configurator-preview__hero-card">
            <small>{option.eyebrow}</small>
            <strong>{option.label}</strong>
            <span />
          </div>
          <div className="configurator-preview__mini-grid">
            <div><i /><span /><span /></div>
            <div><i /><span /><span /></div>
            <div><i /><span /><span /></div>
          </div>
        </div>
      </div>
      <div className="configurator-preview__cursor">Build</div>
    </div>
  );
}

export function ForgeConfigurator() {
  const [activeId, setActiveId] = useState<BuildOption["id"]>("website");
  const activeOption = buildOptions.find((option) => option.id === activeId) ?? buildOptions[0];

  return (
    <section id="forge-configurator" className="forge-configurator experiment-section">
      <div className="experiment-shell">
        <div className="experiment-heading experiment-heading--split">
          <div>
            <span className="experiment-kicker">FORGE CONFIGURATOR</span>
            <h2>What should we <em>forge?</em></h2>
          </div>
          <p>Choose what you are building. The scope below reshapes around the kind of outcome you need.</p>
        </div>

        <div className="configurator-tabs" role="tablist" aria-label="Choose a project type">
          {buildOptions.map(({ icon: Icon, ...option }) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeId === option.id}
              className={activeId === option.id ? "is-active" : ""}
              key={option.id}
              onClick={() => setActiveId(option.id)}
            >
              <Icon size={18} strokeWidth={1.8} />
              {option.label}
            </button>
          ))}
        </div>

        <div className="configurator-stage">
          <div className="configurator-copy" key={activeOption.id}>
            <span>{activeOption.eyebrow}</span>
            <h3>{activeOption.title}</h3>
            <p>{activeOption.body}</p>
            <div className="configurator-timeline">
              <small>Typical launch window</small>
              <strong>{activeOption.timeline}</strong>
            </div>
            <ul>
              {activeOption.features.map((feature) => (
                <li key={feature}><Check size={14} strokeWidth={2.4} /> {feature}</li>
              ))}
            </ul>
            <a href="#cta">Plan this build <ArrowRight size={16} /></a>
          </div>
          <ConfiguratorPreview option={activeOption} />
        </div>
      </div>
    </section>
  );
}
