"use client";

import { useState } from "react";
import {
  Bot,
  Globe2,
  LayoutDashboard,
  MousePointer2,
  Smartphone,
} from "lucide-react";

const products = [
  {
    id: "website",
    label: "Website",
    title: "A focused business website",
    subtitle: "Clear story. Fast path to action.",
    stat: "Launch-ready",
    icon: Globe2,
    tone: "violet",
  },
  {
    id: "app",
    label: "App",
    title: "A product in your customer’s pocket",
    subtitle: "Useful daily flows without the clutter.",
    stat: "iOS + Android",
    icon: Smartphone,
    tone: "coral",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    title: "A calmer operating picture",
    subtitle: "Tasks, data and decisions in one view.",
    stat: "Live operations",
    icon: LayoutDashboard,
    tone: "blue",
  },
  {
    id: "agent",
    label: "AI agent",
    title: "A capable workflow companion",
    subtitle: "Handles routine work and flags exceptions.",
    stat: "Human in control",
    icon: Bot,
    tone: "green",
  },
] as const;

type Product = (typeof products)[number];

export function ProductShowcaseDock() {
  const [activeId, setActiveId] = useState<Product["id"]>("website");
  const active = products.find((product) => product.id === activeId) ?? products[0];

  return (
    <section className="product-dock-section experiment-section">
      <div className="experiment-shell">
        <div className="experiment-heading experiment-heading--center">
          <span className="experiment-kicker">LIVE PRODUCT DOCK</span>
          <h2>Tap into a different <em>kind of build.</em></h2>
          <p>Switch between the core experiences 1Forge can design and engineer.</p>
        </div>

        <div className={`product-stage is-${active.tone}`}>
          <div className="product-stage__ambient" aria-hidden="true" />
          <div className="product-stage__window" key={active.id}>
            <div className="product-stage__window-bar">
              <span /><span /><span /><small>1forge — {active.label}</small><i />
            </div>
            <div className="product-stage__window-content">
              <aside><b>1f.</b><span /><span /><span /><i /></aside>
              <main>
                <small>{active.label.toUpperCase()} EXPERIENCE</small>
                <h3>{active.title}</h3>
                <p>{active.subtitle}</p>
                <a href="/services">Explore the flow <span>↗</span></a>
                <div className="product-stage__cards">
                  <div><span>01</span><strong>{active.stat}</strong><i /></div>
                  <div><span>02</span><strong>Built to adapt</strong><i /></div>
                </div>
              </main>
            </div>
            <div className="product-stage__cursor" aria-hidden="true">
              <MousePointer2 size={18} fill="currentColor" /> 1Forge
            </div>
          </div>

          <div className="product-dock" role="tablist" aria-label="Choose a product preview">
            {products.map(({ icon: Icon, ...product }) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeId === product.id}
                aria-label={`Preview ${product.label}`}
                className={activeId === product.id ? "is-active" : ""}
                key={product.id}
                onClick={() => setActiveId(product.id)}
              >
                <span className={`is-${product.tone}`}><Icon size={24} strokeWidth={1.65} /></span>
                <small>{product.label}</small>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
