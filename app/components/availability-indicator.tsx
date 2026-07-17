"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CalendarDays, X } from "lucide-react";

export function AvailabilityIndicator() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    window.addEventListener("pointerdown", closeOutside);
    return () => window.removeEventListener("pointerdown", closeOutside);
  }, []);

  return (
    <div ref={rootRef} className={`availability-indicator ${isOpen ? "is-open" : ""}`}>
      <button type="button" onClick={() => setIsOpen((current) => !current)} aria-expanded={isOpen}>
        <span className="availability-indicator__pulse" aria-hidden="true" />
        Taking new project enquiries
        <CalendarDays size={14} strokeWidth={1.8} aria-hidden="true" />
      </button>

      <div className="availability-indicator__popover" aria-hidden={!isOpen} inert={!isOpen}>
        <button type="button" className="availability-indicator__close" onClick={() => setIsOpen(false)} aria-label="Close availability details">
          <X size={15} />
        </button>
        <span>NEW PROJECT WINDOW</span>
        <strong>Ask us for the next available start.</strong>
        <p>Small launches can often begin sooner. Larger systems start with a short planning sprint.</p>
        <a href="#cta" onClick={() => setIsOpen(false)}>
          Reserve a conversation <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
