"use client";

import { useState } from "react";
import { SiteHeader } from "../components/site-header";
import { InfraHero } from "../components/infrastructure/InfraHero";
import { InfraSocialProof } from "../components/infrastructure/InfraSocialProof";
import { InfraFeatures } from "../components/infrastructure/InfraFeatures";
import { InfraNewtonShowcase } from "../components/infrastructure/InfraNewtonShowcase";
import { InfraHowItWorks } from "../components/infrastructure/InfraHowItWorks";
import { InfraRoles } from "../components/infrastructure/InfraRoles";
import { InfraTestimonials } from "../components/infrastructure/InfraTestimonials";
import { InfraContact } from "../components/infrastructure/InfraContact";
import { InfraFinalCta } from "../components/infrastructure/InfraFinalCta";
import { InfraFooter } from "../components/infrastructure/InfraFooter";
import { InfraContactModal } from "../components/infrastructure/InfraContactModal";

export default function InfrastructurePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-white-canvas text-ink-black">
      <SiteHeader />
      <main>
        <InfraHero onGetStarted={() => setIsModalOpen(true)} />
        <InfraSocialProof />
        <InfraFeatures />
        <InfraNewtonShowcase />
        <InfraHowItWorks />
        <InfraRoles />
        <InfraTestimonials />
        <InfraContact />
        <InfraFinalCta onGetStarted={() => setIsModalOpen(true)} />
      </main>
      <InfraFooter />

      {/* Corporate B2B Contact Dialog Box */}
      <InfraContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
