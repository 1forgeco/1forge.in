import { CapabilityArchitecture } from "./components/capability-architecture";
import { DesignTemplatesSection } from "./components/design-templates-section";
import { ForgeConfigurator } from "./components/forge-configurator";
import { ForgeOSProductStrip } from "./components/forgeos-product-strip";
import { InputShowcase } from "./components/input-showcase";
import { LivingCaseStudies } from "./components/living-case-studies";
import { ProofSection } from "./components/proof-section";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { SitePreloader } from "./components/site-preloader";
import { SystemHero } from "./components/system-hero";

export default function Home() {
  return (
    <SitePreloader>
      <div id="top" className="modern-home min-h-screen bg-white-canvas text-ink-black">
        <SiteHeader />
        <main>
          <SystemHero />
          <ProofSection />
          <LivingCaseStudies />
          <ForgeOSProductStrip />
          <CapabilityArchitecture />
          <ForgeConfigurator />
          <DesignTemplatesSection />
          <InputShowcase showFaq={false} />
        </main>
        <SiteFooter />
      </div>
    </SitePreloader>
  );
}
