import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure — PG & Hostel Management Platform | 1forge Studio",
  description:
    "Complete end-to-end management platform for PG and hostel owners in India. Gate passes, dues, mess menus, complaints, and more — all in one app.",
  keywords: [
    "PG management",
    "hostel management",
    "gate pass system",
    "tenant management",
    "hostel software India",
    "PG management app",
    "1forge",
  ],
  openGraph: {
    title: "Infrastructure — PG & Hostel Management | 1forge Studio",
    description:
      "Run your PG like it's 2026. Gate passes, dues, complaints, mess menus — everything your hostel needs, in one app.",
    type: "website",
  },
};

export default function InfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
