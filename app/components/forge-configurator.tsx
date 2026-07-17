"use client";

import { ArrowRight, Bot, Check, Clipboard, Globe2, LayoutDashboard, Smartphone } from "lucide-react";
import { useMemo, useState } from "react";

const projectTypes = [
  { id: "website", label: "Web platform", icon: Globe2, base: 2, outcome: "A fast, conversion-focused digital front door" },
  { id: "app", label: "Mobile product", icon: Smartphone, base: 6, outcome: "A focused product for customers or staff" },
  { id: "system", label: "Business system", icon: LayoutDashboard, base: 5, outcome: "One operating layer for your core workflow" },
  { id: "automation", label: "AI workflow", icon: Bot, base: 3, outcome: "A supervised agent for repetitive work" },
] as const;

const complexityOptions = [
  { id: "focused", label: "Focused", detail: "One clear journey", add: 0, level: 1 },
  { id: "growth", label: "Growth", detail: "Roles, data and workflows", add: 3, level: 2 },
  { id: "platform", label: "Platform", detail: "Multiple modules and teams", add: 7, level: 3 },
] as const;

const supportOptions = [
  { id: "launch", label: "Launch", detail: "Handoff and deployment" },
  { id: "growth", label: "Growth", detail: "90-day improvement cycle" },
  { id: "partner", label: "Product partner", detail: "Ongoing roadmap and releases" },
] as const;

type ProjectId = (typeof projectTypes)[number]["id"];
type ComplexityId = (typeof complexityOptions)[number]["id"];
type SupportId = (typeof supportOptions)[number]["id"];

export function ForgeConfigurator() {
  const [projectId, setProjectId] = useState<ProjectId>("system");
  const [complexityId, setComplexityId] = useState<ComplexityId>("growth");
  const [integrations, setIntegrations] = useState(2);
  const [supportId, setSupportId] = useState<SupportId>("growth");
  const [copied, setCopied] = useState(false);

  const project = projectTypes.find((item) => item.id === projectId) ?? projectTypes[0];
  const complexity = complexityOptions.find((item) => item.id === complexityId) ?? complexityOptions[0];
  const support = supportOptions.find((item) => item.id === supportId) ?? supportOptions[0];

  const estimate = useMemo(() => {
    const minimum = project.base + complexity.add + Math.max(0, integrations - 1);
    const maximum = minimum + 2 + complexity.level * 2;
    const score = project.base + complexity.level * 3 + integrations;
    const shape = score <= 8 ? "Focused build" : score <= 14 ? "Growth build" : "Platform build";
    const phases = complexity.level === 1
      ? ["Scope", "Design", "Build", "Launch"]
      : ["Discovery", "System design", "Build cycles", "QA", "Launch"];

    return { minimum, maximum, shape, phases };
  }, [complexity, integrations, project.base]);

  const summary = `${project.label} — ${complexity.label} scope, ${integrations} integrations, ${support.label} support. Indicative delivery: ${estimate.minimum}–${estimate.maximum} weeks.`;

  const sendPlan = () => {
    window.dispatchEvent(new CustomEvent("forge:estimate", { detail: { summary } }));
    document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
  };

  const copyPlan = async () => {
    await navigator.clipboard?.writeText(summary);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="build-estimator" className="build-estimator">
      <div className="modern-shell">
        <div className="modern-section-heading modern-section-heading--dark">
          <span className="modern-kicker">LIVE BUILD ESTIMATOR</span>
          <h2>Shape the build before the first meeting.</h2>
          <p>This is an indicative planning tool, not a locked quote. Adjust the system and take a useful brief into the conversation.</p>
        </div>

        <div className="build-estimator__layout">
          <div className="estimator-controls">
            <fieldset>
              <legend><span>01</span> What are we building?</legend>
              <div className="estimator-choice-grid estimator-choice-grid--projects">
                {projectTypes.map(({ icon: Icon, ...item }) => (
                  <button type="button" className={projectId === item.id ? "is-active" : ""} onClick={() => setProjectId(item.id)} key={item.id}>
                    <Icon size={18} /><strong>{item.label}</strong><small>{item.outcome}</small>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend><span>02</span> How deep is the first release?</legend>
              <div className="estimator-choice-grid">
                {complexityOptions.map((item) => (
                  <button type="button" className={complexityId === item.id ? "is-active" : ""} onClick={() => setComplexityId(item.id)} key={item.id}>
                    <strong>{item.label}</strong><small>{item.detail}</small>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend><span>03</span> External integrations</legend>
              <div className="estimator-range">
                <input type="range" min="0" max="6" value={integrations} onChange={(event) => setIntegrations(Number(event.target.value))} aria-label="Number of external integrations" />
                <output>{integrations === 0 ? "None" : `${integrations} integration${integrations === 1 ? "" : "s"}`}</output>
              </div>
            </fieldset>

            <fieldset>
              <legend><span>04</span> Support after release</legend>
              <div className="estimator-choice-grid">
                {supportOptions.map((item) => (
                  <button type="button" className={supportId === item.id ? "is-active" : ""} onClick={() => setSupportId(item.id)} key={item.id}>
                    <strong>{item.label}</strong><small>{item.detail}</small>
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          <aside className="estimate-output" aria-live="polite">
            <div className="estimate-output__status"><i /> LIVE PLAN <span>1F–{projectId.toUpperCase()}</span></div>
            <small>RECOMMENDED ENGAGEMENT</small>
            <h3>{estimate.shape}</h3>
            <p>{project.outcome} with a {complexity.label.toLowerCase()} first release and {support.label.toLowerCase()} support.</p>

            <div className="estimate-output__timeline">
              <span>Indicative delivery</span>
              <strong>{estimate.minimum}–{estimate.maximum} weeks</strong>
            </div>

            <ol>
              {estimate.phases.map((phase, index) => (
                <li key={phase}><span>{String(index + 1).padStart(2, "0")}</span><strong>{phase}</strong><Check size={14} /></li>
              ))}
            </ol>

            <button type="button" className="estimate-output__primary" onClick={sendPlan}>
              Send this build plan <ArrowRight size={17} />
            </button>
            <button type="button" className="estimate-output__copy" onClick={copyPlan}>
              {copied ? <Check size={15} /> : <Clipboard size={15} />} {copied ? "Brief copied" : "Copy brief"}
            </button>
            <small className="estimate-output__note">Final scope follows discovery. No invented instant quote.</small>
          </aside>
        </div>
      </div>
    </section>
  );
}
