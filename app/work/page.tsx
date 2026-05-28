import { Metadata } from "next";
import { WorkPage } from "../components/work-page";

export const metadata: Metadata = {
  title: "Our Work — 1forge Studio",
  description:
    "Explore projects built by 1forge — from AI-powered platforms and real-time chat apps to digital agency sites and open-source contributions.",
};

export default function Work() {
  return <WorkPage />;
}
