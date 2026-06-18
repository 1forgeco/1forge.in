import { Metadata } from "next";
import { ServicesPage } from "../components/services-page";

export const metadata: Metadata = {
  title: "Our Services — 1forge Studio",
  description:
    "Explore our professional software services at 1forge Studio — Websites & Web Apps, Mobile Apps, AI Agents & Automation, Custom Management Systems, Hostel & PG Management, and Monthly Support.",
};

export default function Services() {
  return <ServicesPage />;
}
