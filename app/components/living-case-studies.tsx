"use client";

import Image from "next/image";
import { ArrowUpRight, Bot, MapPin, Mic, Network, Sparkles } from "lucide-react";
import { useState } from "react";
import { TransitionLink } from "./transition-link";

const cases = [
  {
    id: "jitsi",
    label: "Jitsi Meet",
    logo: "/workedWith/jitsi-logo.png",
    index: "01",
    title: "Making real-time collaboration feel more dependable.",
    problem: "Communication products concentrate complex real-time states inside a deceptively simple call interface.",
    built: "Features and workflow improvements around call quality, collaboration and the React interface layer.",
    result: "A clearer, more resilient collaboration experience for people already inside the conversation.",
    tags: ["WebRTC", "React", "Real-time UX"],
  },
  {
    id: "osm",
    label: "OpenStreetMap",
    logo: "/workedWith/openstreetmap.png",
    index: "02",
    title: "Improving the editor behind collaborative mapping.",
    problem: "Map editing needs to expose powerful data operations without overwhelming contributors.",
    built: "Workflow, interaction and accuracy improvements within the OpenStreetMap iD editor.",
    result: "More legible editing interactions for contributors working directly with shared map data.",
    tags: ["Mapping", "JavaScript", "Interaction design"],
  },
  {
    id: "airflow",
    label: "Apache Airflow",
    logo: "/workedWith/AirflowLogo.svg.png",
    index: "03",
    title: "Giving new contributors an AI-assisted way into a large codebase.",
    problem: "Large repositories make it difficult for first-time contributors to understand local context and Docker workflows.",
    built: "An AI agent with custom container context to guide contributors through the Apache Airflow repository.",
    result: "A more direct path from unfamiliar repository to an informed first contribution.",
    tags: ["AI agent", "Python", "Developer tooling"],
  },
] as const;

type CaseId = (typeof cases)[number]["id"];
type StoryPhase = "problem" | "built" | "result";

function CaseVisual({ id }: { id: CaseId }) {
  if (id === "jitsi") {
    return (
      <div className="case-visual case-visual--jitsi" aria-hidden="true">
        <div className="call-grid"><span>AK</span><span>SM</span><span>1F</span><span>+</span></div>
        <div className="call-controls"><Mic size={16} /><Network size={16} /><strong>00:24:18</strong></div>
      </div>
    );
  }

  if (id === "osm") {
    return (
      <div className="case-visual case-visual--map" aria-hidden="true">
        <i className="map-road map-road--one" /><i className="map-road map-road--two" />
        <MapPin className="map-pin map-pin--one" /><MapPin className="map-pin map-pin--two" />
        <div className="map-panel"><small>EDIT FEATURE</small><strong>Community workspace</strong><span>Geometry valid</span></div>
      </div>
    );
  }

  return (
    <div className="case-visual case-visual--agent" aria-hidden="true">
      <div className="agent-heading"><Bot size={18} /><span>airflow contributor agent</span><i /></div>
      <code><span>$</span> inspect docker-compose context</code>
      <code><span>✓</span> repository graph indexed</code>
      <code><span>✓</span> first issue path prepared</code>
      <div className="agent-response"><Sparkles size={14} /> I found the relevant provider module and test path.</div>
    </div>
  );
}

export function LivingCaseStudies() {
  const [activeId, setActiveId] = useState<CaseId>("jitsi");
  const [phase, setPhase] = useState<StoryPhase>("built");
  const active = cases.find((item) => item.id === activeId) ?? cases[0];

  return (
    <section id="case-studies" className="living-cases">
      <div className="modern-shell">
        <div className="modern-section-heading">
          <span className="modern-kicker">LIVING CASE STUDIES</span>
          <h2>Work you can inspect, not just scroll past.</h2>
          <p>Move between the problem, the contribution and the result. These are real collaborations—not template visuals presented as client work.</p>
        </div>

        <div className="living-cases__selector" role="tablist" aria-label="Choose a case study">
          {cases.map((item) => (
            <button
              type="button"
              role="tab"
              aria-selected={active.id === item.id}
              className={active.id === item.id ? "is-active" : ""}
              onClick={() => setActiveId(item.id)}
              key={item.id}
            >
              <span>{item.index}</span>
              <Image src={item.logo} alt="" width={86} height={34} className="object-contain" />
              <strong>{item.label}</strong>
            </button>
          ))}
        </div>

        <article className="living-case" key={active.id}>
          <CaseVisual id={active.id} />
          <div className="living-case__story">
            <div className="living-case__meta"><span>{active.index} / FIELD NOTE</span><Network size={17} /></div>
            <h3>{active.title}</h3>
            <div className="living-case__phases" role="tablist" aria-label="Case study phase">
              {(["problem", "built", "result"] as StoryPhase[]).map((item) => (
                <button type="button" role="tab" aria-selected={phase === item} className={phase === item ? "is-active" : ""} onClick={() => setPhase(item)} key={item}>
                  {item === "built" ? "What we built" : item}
                </button>
              ))}
            </div>
            <p className="living-case__phase-copy" key={`${active.id}-${phase}`}>{active[phase]}</p>
            <div className="living-case__tags">{active.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <TransitionLink href="/work">Open the full work archive <ArrowUpRight size={15} /></TransitionLink>
          </div>
        </article>
      </div>
    </section>
  );
}
