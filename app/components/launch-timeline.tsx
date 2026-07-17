"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, PenTool, Rocket, Search, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    label: "Discover",
    title: "Map the real problem",
    body: "We turn conversations, constraints and existing workflows into a clear product brief.",
    icon: Search,
  },
  {
    number: "02",
    label: "Design",
    title: "Shape the experience",
    body: "Key screens and interactions become a visual system your team can understand and test.",
    icon: PenTool,
  },
  {
    number: "03",
    label: "Build",
    title: "Connect the working parts",
    body: "The interface, data and integrations come together in focused, reviewable releases.",
    icon: Code2,
  },
  {
    number: "04",
    label: "Test",
    title: "Pressure-test the flow",
    body: "We check responsive behavior, edge cases, performance and the moments users can get stuck.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    label: "Launch",
    title: "Put it into real hands",
    body: "Deployment, handover and support turn the build into something your business can actually run.",
    icon: Rocket,
  },
] as const;

export function LaunchTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.step);
        if (!Number.isNaN(index)) setActiveStep(index);
      },
      { threshold: [0.45, 0.7], rootMargin: "-20% 0px -30%" },
    );

    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="launch-timeline experiment-section">
      <div className="launch-timeline__glow" aria-hidden="true" />
      <div className="experiment-shell">
        <div className="experiment-heading experiment-heading--split is-light">
          <div>
            <span className="experiment-kicker">FROM IDEA TO LIVE</span>
            <h2>The build assembles <em>as we move.</em></h2>
          </div>
          <p>Scroll through a practical five-stage process. Each step makes another part of the product real.</p>
        </div>

        <div className="launch-timeline__layout">
          <div className="launch-timeline__steps">
            {steps.map(({ icon: Icon, ...step }, index) => (
              <button
                type="button"
                key={step.number}
                ref={(element) => { stepRefs.current[index] = element; }}
                data-step={index}
                className={index === activeStep ? "is-active" : ""}
                onClick={() => setActiveStep(index)}
              >
                <span>{step.number}</span>
                <span className="launch-timeline__step-icon"><Icon size={19} strokeWidth={1.7} /></span>
                <span>
                  <small>{step.label}</small>
                  <strong>{step.title}</strong>
                  <p>{step.body}</p>
                </span>
              </button>
            ))}
          </div>

          <div className="launch-timeline__visual-wrap">
            <div className={`launch-timeline__visual step-${activeStep + 1}`}>
              <div className="launch-timeline__browser-bar">
                <span /><span /><span /><small>1forge / live build</small>
              </div>
              <div className="launch-timeline__browser">
                <aside>
                  <b>1f.</b><i /><i /><i /><i />
                </aside>
                <main>
                  <div className="timeline-block timeline-block--nav" />
                  <div className="timeline-block timeline-block--hero">
                    <small>BUILDING / {steps[activeStep].label.toUpperCase()}</small>
                    <strong>{steps[activeStep].title}</strong>
                    <i />
                  </div>
                  <div className="timeline-block-grid">
                    <div className="timeline-block timeline-block--card"><i /><span /><span /></div>
                    <div className="timeline-block timeline-block--card"><i /><span /><span /></div>
                    <div className="timeline-block timeline-block--card"><i /><span /><span /></div>
                  </div>
                  <div className="timeline-block timeline-block--footer" />
                </main>
              </div>
              <div className="launch-timeline__status"><i /> Stage {activeStep + 1} of {steps.length}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
