import { Cloud, Code2, Database, Workflow } from "lucide-react";
import { TransitionLink } from "./transition-link";

const layers = [
  { index: "01", title: "Product definition", detail: "Workflow mapping · release scope · interaction model", icon: Workflow },
  { index: "02", title: "Interface system", detail: "Responsive UX · design language · accessible components", icon: Code2 },
  { index: "03", title: "Application layer", detail: "Web and mobile apps · APIs · roles · business logic", icon: Database },
  { index: "04", title: "Operations", detail: "Deployment · observability · automation · release support", icon: Cloud },
] as const;

export function CapabilityArchitecture() {
  return (
    <section id="capabilities" className="capability-architecture">
      <div className="modern-shell capability-architecture__layout">
        <div className="capability-architecture__intro">
          <span className="modern-kicker">THE 1FORGE BUILD MODEL</span>
          <h2>One accountable system, from workflow to release.</h2>
          <p>We connect product decisions to the engineering underneath them. Fewer handoffs, clearer ownership and a system that can keep evolving.</p>
          <TransitionLink href="/services">Explore the complete capability map <span aria-hidden="true">↗</span></TransitionLink>
        </div>

        <div className="architecture-stack">
          {layers.map(({ icon: Icon, ...layer }) => (
            <article key={layer.index}>
              <span>{layer.index}</span>
              <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
              <div><h3>{layer.title}</h3><p>{layer.detail}</p></div>
              <i aria-hidden="true" />
            </article>
          ))}
          <div className="architecture-stack__core"><span>1F</span><strong>Product core</strong><small>Strategy × Design × Engineering</small></div>
        </div>
      </div>
    </section>
  );
}
