"use client";

import { Command, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedLogo } from "./animated-logo";
import { MotionToggle } from "./motion-toggle";
import { TransitionLink } from "./transition-link";

const navigationItems = [
  { label: "Services", href: "/services", design: false },
  { label: "Work", href: "/work", design: false },
  { label: "Design Lab", href: "/#designs", design: true },
  { label: "Estimator", href: "/#build-estimator", design: false },
] as const;

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const openCommand = () => window.dispatchEvent(new Event("forge:open-command"));

  return (
    <>
      <header id="site-header" className={`modern-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="modern-header__inner">
          <TransitionLink href="/" id="header-logo" className="modern-header__logo" aria-label="1Forge home">
            <AnimatedLogo width={100} height={29} />
          </TransitionLink>

          <nav className="modern-header__nav" aria-label="Primary navigation">
            {navigationItems.map((item) => (
              <TransitionLink href={item.href} key={item.label} className={item.design ? "is-design-link" : ""}>
                {item.design ? <i aria-hidden="true" /> : null}{item.label}
              </TransitionLink>
            ))}
          </nav>

          <div className="modern-header__tools">
            <MotionToggle />
            <button type="button" className="modern-header__command" onClick={openCommand}>
              <Command size={14} /><span>Ask 1Forge</span><kbd>⌘K</kbd>
            </button>
            <TransitionLink href="/#build-estimator" className="modern-header__cta">Get a build plan</TransitionLink>
            <button
              type="button"
              className="modern-header__menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen ? (
        <div className="modern-mobile-menu">
          <nav aria-label="Mobile navigation">
            {navigationItems.map((item, index) => (
              <TransitionLink href={item.href} key={item.label} onClick={() => setIsMobileMenuOpen(false)}>
                <span>0{index + 1}</span>{item.label}{item.design ? <i aria-hidden="true" /> : null}
              </TransitionLink>
            ))}
          </nav>
          <button type="button" onClick={() => { setIsMobileMenuOpen(false); openCommand(); }}>
            <Command size={16} /> Ask 1Forge
          </button>
          <TransitionLink href="/#build-estimator" onClick={() => setIsMobileMenuOpen(false)}>Get your build plan</TransitionLink>
        </div>
      ) : null}
    </>
  );
}
