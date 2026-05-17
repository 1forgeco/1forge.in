import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1forge — Websites, Apps, Systems & AI Automation",
  description:
    "1forge builds business websites, mobile apps, desktop apps, hostel and PG management systems, AI agents, and workflow automations.",
  keywords: ["websites", "apps", "hostel management system", "AI agents", "automation", "1forge"],
  openGraph: {
    title: "1forge — Business Software Studio",
    description:
      "Websites, apps, management systems, desktop software, AI agents, and automation for growing businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}

