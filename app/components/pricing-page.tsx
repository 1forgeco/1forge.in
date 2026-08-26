import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  Globe2,
  Layers3,
  Minus,
  ServerCog,
  Sparkles,
} from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const plans = [
  {
    name: "Landing Page",
    eyebrow: "Quick launch",
    price: "Rs 25,000",
    note: "Best for a polished business presence, campaign page, or product intro.",
    icon: Globe2,
    featured: false,
    cta: "Plan a landing page",
    features: {
      "Custom UI design": true,
      "Responsive website": true,
      "Contact or lead form": true,
      "Basic SEO setup": true,
      "Backend and database": false,
      "Admin dashboard": false,
      "AI workflow": false,
      "Advanced integrations": false,
      "Launch support": true,
    },
    includes: ["One conversion-focused page", "Mobile responsive build", "Contact form and tracking-ready structure"],
  },
  {
    name: "Landing + Backend",
    eyebrow: "Most asked for",
    price: "Rs 40,000",
    note: "For businesses that need a public page plus real data capture and operations behind it.",
    icon: Layers3,
    featured: true,
    cta: "Scope this build",
    features: {
      "Custom UI design": true,
      "Responsive website": true,
      "Contact or lead form": true,
      "Basic SEO setup": true,
      "Backend and database": true,
      "Admin dashboard": true,
      "AI workflow": false,
      "Advanced integrations": "Limited",
      "Launch support": true,
    },
    includes: ["Landing page", "Backend and database", "Simple admin or lead dashboard"],
  },
  {
    name: "AI Automation",
    eyebrow: "Save manual work",
    price: "From Rs 35,000",
    note: "A reasonable starting point for one focused automation, assistant, or workflow integration.",
    icon: Bot,
    featured: false,
    cta: "Discuss automation",
    features: {
      "Custom UI design": "Optional",
      "Responsive website": "Optional",
      "Contact or lead form": "Optional",
      "Basic SEO setup": false,
      "Backend and database": "If needed",
      "Admin dashboard": "Optional",
      "AI workflow": true,
      "Advanced integrations": true,
      "Launch support": true,
    },
    includes: ["One core AI workflow", "Prompt and logic setup", "Integration with your existing tools"],
  },
  {
    name: "Custom Build",
    eyebrow: "Flexible scope",
    price: "Custom quote",
    note: "For apps, portals, CRMs, marketplaces, institute systems, or projects where scope needs discussion.",
    icon: Sparkles,
    featured: false,
    cta: "Build a custom quote",
    features: {
      "Custom UI design": true,
      "Responsive website": true,
      "Contact or lead form": true,
      "Basic SEO setup": true,
      "Backend and database": true,
      "Admin dashboard": true,
      "AI workflow": "Optional",
      "Advanced integrations": "Optional",
      "Launch support": true,
    },
    includes: ["Flexible modules", "Phased delivery plan", "Pricing matched to real scope"],
  },
] as const;

const comparisonRows = Object.keys(plans[0].features) as Array<keyof (typeof plans)[number]["features"]>;

function FeatureMark({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="pricing-feature pricing-feature--yes">
        <Check size={14} aria-hidden="true" />
        Included
      </span>
    );
  }

  if (value === false) {
    return (
      <span className="pricing-feature pricing-feature--no">
        <Minus size={14} aria-hidden="true" />
        Not included
      </span>
    );
  }

  return <span className="pricing-feature pricing-feature--partial">{value}</span>;
}

export function PricingPage() {
  return (
    <div className="modern-home min-h-screen bg-white-canvas text-ink-black">
      <SiteHeader />
      <main className="pricing-page">
        <section className="modern-shell pricing-cards" aria-label="Project pricing plans">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article className={`pricing-card ${plan.featured ? "is-featured" : ""}`} key={plan.name}>
                <div className="pricing-card__top">
                  <span className="pricing-card__icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span>{plan.eyebrow}</span>
                </div>
                <h2>{plan.name}</h2>
                <strong>{plan.price}</strong>
                <p>{plan.note}</p>
                <ul>
                  {plan.includes.map((item) => (
                    <li key={item}>
                      <Check size={14} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`mailto:studio@1forge.in?subject=${encodeURIComponent(`${plan.name} enquiry`)}`}
                  className="pricing-card__cta"
                >
                  {plan.cta}
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </section>

        <section className="modern-shell hostin-pricing">
          <div className="hostin-pricing__mark">
            <ServerCog size={26} aria-hidden="true" />
          </div>
          <div>
            <span className="modern-kicker">Hostin product plan</span>
            <h2>Hostin starts at Rs 24,999/month</h2>
            <p>
              Keep Hostin visible as its own product plan for property, hostel, PG, and institute operators.
              This avoids mixing subscription software with one-time website build pricing.
            </p>
          </div>
          <a href="https://host-in-beta.vercel.app/" target="_blank" rel="noreferrer">
            View Hostin
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </section>

        <section className="modern-shell pricing-compare" aria-labelledby="pricing-compare-title">
          <div className="modern-section-heading">
            <span className="modern-kicker">Compare inclusions</span>
            <h2 id="pricing-compare-title">What is in, what is out, and where scope stays flexible.</h2>
            <p>
              The matrix is built for quick client scanning. Anything marked optional or limited is the part
              we discuss before locking the quote.
            </p>
          </div>

          <div className="pricing-table-wrap">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  {plans.map((plan) => (
                    <th scope="col" key={plan.name}>{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row}>
                    <th scope="row">{row}</th>
                    {plans.map((plan) => (
                      <td key={`${plan.name}-${row}`}>
                        <FeatureMark value={plan.features[row]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="modern-shell pricing-final">
          <span className="modern-kicker">Need a cleaner quote?</span>
          <h2>Start with the closest card. We can adjust from there.</h2>
          <p>
            Fixed prices help clients understand the floor. Custom pricing lets us stay honest when the project
            has more moving parts than a package can cover.
          </p>
          <Link href="/#build-estimator">
            Open build estimator
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
