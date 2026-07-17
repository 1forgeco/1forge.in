"use client";

import { useEffect, useRef, useState } from "react";
import { Boxes, ChevronUp, Layers3, ServerCog } from "lucide-react";

const products = [
  {
    name: "Studio",
    label: "Software, apps & AI",
    href: "#top",
    tone: "purple",
    icon: Layers3,
    external: false,
  },
  {
    name: "Designs",
    label: "Premium UI/UX templates",
    href: process.env.NEXT_PUBLIC_DESIGNS_URL ?? "https://1forgedesign.vercel.app/",
    tone: "orange",
    icon: Boxes,
    external: true,
  },
  {
    name: "Hostin",
    label: "Property operations",
    href: "https://host-in-beta.vercel.app/",
    tone: "green",
    icon: ServerCog,
    external: true,
  },
] as const;

export function EcosystemSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const closeOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("pointerdown", closeOutside);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("pointerdown", closeOutside);
    };
  }, []);

  return (
    <div ref={rootRef} className={`ecosystem-switcher ${isOpen ? "is-open" : ""}`}>
      <div className="ecosystem-switcher__panel" aria-hidden={!isOpen} inert={!isOpen}>
        <div className="ecosystem-switcher__heading">
          <span>1FORGE ECOSYSTEM</span>
          <small>One forge. Three products.</small>
        </div>
        {products.map(({ icon: Icon, ...product }) => (
          <a
            key={product.name}
            href={product.href}
            className={`ecosystem-switcher__product is-${product.tone}`}
            target={product.external ? "_blank" : undefined}
            rel={product.external ? "noreferrer" : undefined}
            onClick={() => setIsOpen(false)}
          >
            <span className="ecosystem-switcher__icon" aria-hidden="true">
              <Icon size={17} strokeWidth={1.8} />
            </span>
            <span>
              <strong>{product.name}</strong>
              <small>{product.label}</small>
            </span>
            <span className="ecosystem-switcher__arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      <button
        type="button"
        className="ecosystem-switcher__trigger"
        aria-expanded={isOpen}
        aria-label="Open 1Forge product ecosystem"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="ecosystem-switcher__rings" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>1Forge</span>
        <ChevronUp size={15} strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  );
}
