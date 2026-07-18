import { Boxes, Layers3, ServerCog } from "lucide-react";

const products = [
  {
    name: "Studio",
    label: "Software, apps & AI",
    description: "Build websites, software and intelligent business systems.",
    href: "/",
    tone: "purple",
    icon: Layers3,
    current: true,
    external: false,
  },
  {
    name: "Designs",
    label: "Premium UI/UX templates",
    description: "Launch with polished, editable interface foundations.",
    href: process.env.NEXT_PUBLIC_DESIGNS_URL ?? "https://1forgedesign.vercel.app/",
    tone: "orange",
    icon: Boxes,
    current: false,
    external: true,
  },
  {
    name: "Hostin",
    label: "Property operations",
    description: "Run hospitality and property operations from one place.",
    href: "https://host-in-beta.vercel.app/",
    tone: "green",
    icon: ServerCog,
    current: false,
    external: true,
  },
] as const;

export function EcosystemTopBar() {
  return (
    <nav className="forge-product-bar" aria-label="1Forge products">
      <span className="forge-product-bar__label"><i /><i /><i />1Forge products</span>
      <div>
        {products.map(({ icon: Icon, ...product }) => (
          <a
            href={product.href}
            key={product.name}
            className={`is-${product.tone} ${product.current ? "is-current" : ""}`}
            aria-current={product.current ? "page" : undefined}
            target={product.external ? "_blank" : undefined}
            rel={product.external ? "noreferrer" : undefined}
          >
            <Icon size={14} strokeWidth={1.8} aria-hidden="true" />
            <span>{product.name}<em>{product.label}</em></span>
            {product.current ? <small>YOU ARE HERE</small> : <b aria-hidden="true">↗</b>}
          </a>
        ))}
      </div>
      <span className="forge-product-bar__promise">One forge / three products</span>
    </nav>
  );
}

export function EcosystemVisualSection() {
  return (
    <section className="forge-ecosystem-visual" aria-labelledby="forge-ecosystem-title">
      <header>
        <div><span>THE 1FORGE ECOSYSTEM</span><h2 id="forge-ecosystem-title">One forge.<br /><em>Three ways to build.</em></h2></div>
        <p>Move from shaping a digital product, to designing its presence, to operating the business behind it—all within one connected ecosystem.</p>
      </header>
      <div className="forge-ecosystem-visual__grid">
        {products.map(({ icon: Icon, ...product }, index) => (
          <a
            href={product.href}
            key={product.name}
            className={`is-${product.tone} ${product.current ? "is-current" : ""}`}
            aria-current={product.current ? "page" : undefined}
            target={product.external ? "_blank" : undefined}
            rel={product.external ? "noreferrer" : undefined}
          >
            <span className="forge-ecosystem-visual__number">0{index + 1}</span>
            <span className="forge-ecosystem-visual__icon"><Icon size={34} strokeWidth={1.35} aria-hidden="true" /><i /><i /></span>
            <small>{product.current ? "YOU ARE HERE" : "OPEN PRODUCT ↗"}</small>
            <h3>{product.name}</h3>
            <strong>{product.label}</strong>
            <p>{product.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
