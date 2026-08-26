import { Metadata } from "next";
import { PricingPage } from "../components/pricing-page";

export const metadata: Metadata = {
  title: "Pricing Plans - 1Forge Studio",
  description:
    "Compare rough 1Forge pricing for landing pages, landing pages with backend, AI automation, Hostin, and custom software builds.",
};

export default function Pricing() {
  return <PricingPage />;
}
