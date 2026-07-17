"use client";

import { type CSSProperties, useState } from "react";
import { ArrowLeftRight, Bot, LayoutDashboard, MonitorSmartphone } from "lucide-react";

const transformations = [
  {
    id: "operations",
    label: "Operations",
    before: "Scattered sheets",
    after: "One operating system",
    description: "Move rooms, payments, issues and reports into one calm, role-aware workspace.",
    icon: LayoutDashboard,
    tone: "purple",
  },
  {
    id: "website",
    label: "Website",
    before: "Hard to understand",
    after: "Clear path to action",
    description: "Turn a generic company page into a focused story with stronger trust and conversion points.",
    icon: MonitorSmartphone,
    tone: "orange",
  },
  {
    id: "workflow",
    label: "Workflow",
    before: "Inbox overload",
    after: "AI-assisted routing",
    description: "Collect, classify and route routine requests while keeping a person in control of exceptions.",
    icon: Bot,
    tone: "green",
  },
] as const;

type Transformation = (typeof transformations)[number];

function BeforeInterface({ item }: { item: Transformation }) {
  return (
    <div className="transformation-ui transformation-ui--before">
      <div className="transformation-sheet-bar"><span /><span /><span /></div>
      <div className="transformation-sheet-grid">
        {Array.from({ length: 28 }, (_, index) => <i key={index} className={index % 7 === 2 || index % 11 === 0 ? "is-filled" : ""} />)}
      </div>
      <div className="transformation-inbox-card">
        <small>UNSORTED</small>
        <strong>{item.before}</strong>
        <span>12 items need attention</span>
      </div>
    </div>
  );
}

function AfterInterface({ item }: { item: Transformation }) {
  return (
    <div className={`transformation-ui transformation-ui--after is-${item.tone}`}>
      <div className="transformation-app-nav">
        <b>1f.</b><span className="is-active" /><span /><span /><i />
      </div>
      <div className="transformation-app-main">
        <div className="transformation-app-header"><span>Good morning</span><i /></div>
        <strong>{item.after}</strong>
        <div className="transformation-kpis">
          <div><small>Active</small><b>24</b><span /></div>
          <div><small>Resolved</small><b>86%</b><span /></div>
          <div><small>Today</small><b>08</b><span /></div>
        </div>
        <div className="transformation-chart">
          {[36, 58, 44, 74, 60, 86, 72, 94].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
        </div>
      </div>
    </div>
  );
}

export function TransformationShowcase() {
  const [activeId, setActiveId] = useState<Transformation["id"]>("operations");
  const [split, setSplit] = useState(52);
  const active = transformations.find((item) => item.id === activeId) ?? transformations[0];

  return (
    <section className="transformation-showcase experiment-section">
      <div className="experiment-shell">
        <div className="experiment-heading experiment-heading--split">
          <div>
            <span className="experiment-kicker">BEFORE / AFTER</span>
            <h2>See the system <em>change shape.</em></h2>
          </div>
          <p>{active.description}</p>
        </div>

        <div className="transformation-tabs" role="tablist" aria-label="Choose a transformation">
          {transformations.map(({ icon: Icon, ...item }) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeId === item.id}
              className={activeId === item.id ? "is-active" : ""}
              key={item.id}
              onClick={() => {
                setActiveId(item.id);
                setSplit(52);
              }}
            >
              <Icon size={17} strokeWidth={1.8} /> {item.label}
            </button>
          ))}
        </div>

        <div className="transformation-compare" style={{ "--compare-split": `${split}%` } as CSSProperties}>
          <div className="transformation-layer transformation-layer--before">
            <BeforeInterface item={active} />
            <span className="transformation-label">BEFORE</span>
          </div>
          <div className="transformation-layer transformation-layer--after">
            <AfterInterface item={active} />
            <span className="transformation-label">AFTER</span>
          </div>
          <div className="transformation-divider" aria-hidden="true">
            <span><ArrowLeftRight size={17} /></span>
          </div>
          <input
            type="range"
            min="18"
            max="82"
            value={split}
            onChange={(event) => setSplit(Number(event.target.value))}
            onInput={(event) => setSplit(Number(event.currentTarget.value))}
            aria-label="Drag to compare before and after"
          />
        </div>

        <div className="transformation-caption">
          <span>{active.before}</span>
          <span>{active.after}</span>
        </div>
      </div>
    </section>
  );
}
