import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TransitionLink } from "./transition-link";

const collaborations = [
  {
    name: "Jitsi Meet",
    logo: "/workedWith/jitsi-logo.png",
    contribution: "Real-time communication features",
    focus: "Call quality · collaboration workflows · React",
  },
  {
    name: "OpenStreetMap",
    logo: "/workedWith/openstreetmap.png",
    contribution: "iD editor experience",
    focus: "Editing workflows · UI interactions · map data",
  },
  {
    name: "Apache Airflow",
    logo: "/workedWith/AirflowLogo.svg.png",
    contribution: "AI contributor tooling",
    focus: "Repository context · onboarding · Python",
  },
] as const;

export function ProofSection() {
  return (
    <section className="proof-section" aria-labelledby="proof-title">
      <div className="modern-shell">
        <div className="proof-section__intro">
          <div>
            <span className="modern-kicker">SELECTED COLLABORATIONS</span>
            <h2 id="proof-title">Proof, without invented numbers.</h2>
          </div>
          <p>Real contributions across communication, mapping and developer infrastructure—presented with the work attached.</p>
        </div>

        <div className="proof-grid">
          {collaborations.map((item, index) => (
            <article key={item.name}>
              <span className="proof-grid__number">0{index + 1}</span>
              <div className="proof-grid__logo">
                <Image src={item.logo} alt={item.name} fill sizes="150px" className="object-contain" />
              </div>
              <h3>{item.name}</h3>
              <strong>{item.contribution}</strong>
              <p>{item.focus}</p>
            </article>
          ))}
        </div>

        <div className="proof-section__footer">
          <div><strong>10+</strong><span>digital products planned</span></div>
          <div><strong>04</strong><span>specialist build tracks</span></div>
          <div><strong>01</strong><span>studio from scope to support</span></div>
          <TransitionLink href="/work">See all collaborations <ArrowUpRight size={15} /></TransitionLink>
        </div>
      </div>
    </section>
  );
}
