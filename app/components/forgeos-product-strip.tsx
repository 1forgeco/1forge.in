import { ArrowUpRight, Bot, CheckCircle2 } from "lucide-react";

const forgeOsUrl = process.env.NEXT_PUBLIC_FORGEOS_URL ?? "https://forgeos-agent-studio.kamalkatal512.chatgpt.site";

export function ForgeOSProductStrip() {
  return (
    <section className="forgeos-product-strip" aria-labelledby="forgeos-strip-title">
      <div className="forgeos-product-strip__mark" aria-hidden="true"><Bot size={20} strokeWidth={1.8} /></div>
      <div className="forgeos-product-strip__copy">
        <span>NEW 1FORGE PRODUCT</span>
        <h2 id="forgeos-strip-title">ForgeOS <em>Custom agents that work in your browser.</em></h2>
      </div>
      <div className="forgeos-product-strip__proof" aria-label="ForgeOS capabilities">
        <span><CheckCircle2 size={13} /> Visual workflows</span>
        <span><CheckCircle2 size={13} /> Test before deploy</span>
      </div>
      <a href={forgeOsUrl} target="_blank" rel="noreferrer">Explore ForgeOS <ArrowUpRight size={15} /></a>
    </section>
  );
}
