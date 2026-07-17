import { DarkSection } from "./components/dark-section";
import { FeatureGrid } from "./components/feature-grid";
import { Hero } from "./components/hero";
import { InputShowcase } from "./components/input-showcase";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { TrustSection } from "./components/trust-section";
import { LogoCarousel } from "./components/logo-carousel";
import { DesignTemplatesSection } from "./components/design-templates-section";
import { CosmicRootsBackground } from "./components/cosmic-roots-background";
import { EcosystemSwitcher } from "./components/ecosystem-switcher";
import { ForgeCommandBar } from "./components/forge-command-bar";
import { ForgeConfigurator } from "./components/forge-configurator";
import { TransformationShowcase } from "./components/transformation-showcase";
import { LaunchTimeline } from "./components/launch-timeline";
import { ProductShowcaseDock } from "./components/product-showcase-dock";
import { ProjectReel } from "./components/project-reel";
import Link from "next/link";

export default function Home() {
  return (
    <div id="top" className="forge-experiment-page min-h-screen bg-white-canvas text-ink-black">
      <CosmicRootsBackground />
      <SiteHeader />
      <main>
        <Hero />
        <LogoCarousel />
        <section className="apps-bridge" aria-labelledby="apps-bridge-title">
          <div className="apps-bridge-copy">
            <span>01 — APP EXPERIENCES</span>
            <h2 id="apps-bridge-title">Thoughtful apps for everyday momentum.</h2>
            <p>
              Explore how we turn useful business workflows into calm, human-first
              mobile experiences.
            </p>
            <Link href="/apps" className="apps-bridge-link">Explore app experiences <span aria-hidden="true">↗</span></Link>
          </div>
          <Link href="/apps" className="apps-bridge-preview" aria-label="Explore 1forge app experiences">
            <div className="apps-bridge-phone">
              <div className="apps-bridge-island" />
              <span>your day, gently</span>
              <strong>Take a breath.</strong>
              <div className="apps-bridge-breathe">Breathe</div>
            </div>
            <div className="apps-bridge-note">A calmer way to run the things that matter.</div>
          </Link>
        </section>
        <DarkSection />
        <DesignTemplatesSection />
        <ForgeConfigurator />
        <TransformationShowcase />
        <FeatureGrid />
        <LaunchTimeline />
        <ProductShowcaseDock />
        <ProjectReel />
        <TrustSection />
        <InputShowcase />
      </main>
      <SiteFooter />
      <EcosystemSwitcher />
      <ForgeCommandBar />
    </div>
  );
}
