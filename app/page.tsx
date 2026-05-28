import { DarkSection } from "./components/dark-section";
import { FeatureGrid } from "./components/feature-grid";
import { Hero } from "./components/hero";
import { InputShowcase } from "./components/input-showcase";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { TrustSection } from "./components/trust-section";
import { LogoCarousel } from "./components/logo-carousel";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white-canvas text-ink-black">
      <SiteHeader />
      <main>
        <Hero />
        <LogoCarousel />
        <DarkSection />
        <FeatureGrid />
        <TrustSection />
        <InputShowcase />
      </main>
      <SiteFooter />
    </div>
  );
}
