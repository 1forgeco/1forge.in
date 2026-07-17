"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Building2,
  Command,
  Globe2,
  Search,
  Smartphone,
  X,
} from "lucide-react";

const commands = [
  {
    title: "I need a website",
    detail: "Landing pages, company sites and commerce",
    href: "/services#websites",
    icon: Globe2,
  },
  {
    title: "I have an app idea",
    detail: "Mobile experiences and customer products",
    href: "/apps",
    icon: Smartphone,
  },
  {
    title: "I need a business system",
    detail: "Dashboards, management and operations",
    href: "#forge-configurator",
    icon: Building2,
  },
  {
    title: "I want to automate work",
    detail: "AI agents and repeatable workflows",
    href: "/services#ai-automation",
    icon: Bot,
  },
];

export function ForgeCommandBar() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((current) => !current);
      }
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="forge-command-trigger"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
      >
        <Command size={15} strokeWidth={2} aria-hidden="true" />
        <span>Ask 1Forge</span>
        <kbd>⌘ K</kbd>
      </button>

      {isOpen && (
        <div className="forge-command-backdrop" role="presentation" onMouseDown={() => setIsOpen(false)}>
          <div
            ref={dialogRef}
            className="forge-command-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="forge-command-title"
            tabIndex={-1}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="forge-command-search">
              <Search size={19} strokeWidth={1.8} aria-hidden="true" />
              <div>
                <strong id="forge-command-title">What do you want to build?</strong>
                <span>Choose a direction and we’ll take you to the right place.</span>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Close command bar">
                <X size={18} />
              </button>
            </div>

            <div className="forge-command-options">
              {commands.map(({ icon: Icon, ...command }, index) => (
                <a key={command.title} href={command.href} onClick={() => setIsOpen(false)}>
                  <span className="forge-command-option-icon">
                    <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span>
                    <strong>{command.title}</strong>
                    <small>{command.detail}</small>
                  </span>
                  <kbd>0{index + 1}</kbd>
                </a>
              ))}
            </div>

            <div className="forge-command-footer">
              <span>Not sure where to start?</span>
              <a href="mailto:studio@1forge.in">
                Talk to the studio <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
