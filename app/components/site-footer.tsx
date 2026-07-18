"use client";

import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { TransitionLink } from "./transition-link";
import { EcosystemVisualSection } from "./ecosystem-navigation";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Services", "/services"],
      ["Work", "/work"],
      ["Build estimator", "/#build-estimator"],
      ["Contact", "/#cta"],
    ],
  },
  {
    title: "Products",
    links: [
      ["1Forge Design Lab", "https://1forgedesign.vercel.app/"],
      ["Hostin", "https://host-in-beta.vercel.app/"],
      ["App experiences", "/apps"],
      ["Infrastructure", "/infrastructure"],
    ],
  },
  {
    title: "Build tracks",
    links: [
      ["Web platforms", "/services#websites"],
      ["Mobile products", "/apps"],
      ["Business systems", "/services"],
      ["AI workflows", "/services#ai-automation"],
    ],
  },
] as const;

const linkedinUrl = "https://www.linkedin.com/company/1forgeworks/?viewAsMember=true";
const instagramUrl = "https://www.instagram.com/1forgestudio/";

export function SiteFooter() {
  return (
    <footer id="site-footer" className="modern-footer">
      <div className="modern-shell">
        <EcosystemVisualSection />
        <div className="modern-footer__statement">
          <span className="modern-kicker">READY WHEN THE BOTTLENECK IS</span>
          <h2>Software should remove work, not add another layer.</h2>
          <a href="mailto:studio@1forge.in">studio@1forge.in <ArrowUpRight size={18} /></a>
        </div>

        <div className="modern-footer__links">
          <div className="modern-footer__brand">
            <TransitionLink href="/" aria-label="1Forge home"><BrandLogo tone="purple" size="lg" /></TransitionLink>
            <p>Product strategy, interface systems and production engineering for useful business software.</p>
          </div>
          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={`${group.title} footer links`}>
              <strong>{group.title}</strong>
              {group.links.map(([label, href]) => href.startsWith("http") ? (
                <a href={href} target="_blank" rel="noreferrer" key={label}>{label} <span>↗</span></a>
              ) : (
                <TransitionLink href={href} key={label}>{label}</TransitionLink>
              ))}
            </nav>
          ))}
        </div>

        <div className="modern-footer__bottom">
          <span>© {new Date().getFullYear()} 1Forge Studio</span>
          <span>India · Building globally</span>
          <div>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="1Forge on LinkedIn"><span aria-hidden="true">in</span></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="1Forge on Instagram"><span aria-hidden="true">ig</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
