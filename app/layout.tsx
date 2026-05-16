import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "1forge — Savings for Everyone",
  description:
    "Earn industry-leading interest rates on your stablecoins with balance protection up to $1M. The future of decentralized savings.",
  keywords: ["DeFi", "savings", "stablecoins", "interest rates", "1forge"],
  openGraph: {
    title: "1forge — Savings for Everyone",
    description:
      "Earn up to 6.50% on your stablecoins with balance protection up to $1M.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
