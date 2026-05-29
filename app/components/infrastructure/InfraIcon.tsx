import React from "react";

type IconName =
  | "gate-pass"
  | "mess-menu"
  | "dues"
  | "complaints"
  | "announcements"
  | "documents"
  | "room-view"
  | "emergency"
  | "onboarding"
  | "visitor"
  | "parent"
  | "analytics"
  | "tenant"
  | "warden"
  | "guard"
  | "admin"
  | "super-admin"
  | "check"
  | "qr-code"
  | "arrow-right"
  | "building"
  | "users"
  | "dashboard"
  | "shield"
  | "star";

interface InfraIconProps {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const iconPaths: Record<IconName, React.ReactNode> = {
  "gate-pass": (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h4" />
      <path d="M15 17l2 2 4-4" />
    </>
  ),
  "mess-menu": (
    <>
      <path d="M3 7h18" />
      <path d="M3 11h18" />
      <path d="M3 15h18" />
      <circle cx="7" cy="7" r="0.5" fill="currentColor" />
      <circle cx="7" cy="11" r="0.5" fill="currentColor" />
      <circle cx="7" cy="15" r="0.5" fill="currentColor" />
      <path d="M19 19l2-6h-4l2 6z" />
    </>
  ),
  dues: (
    <>
      <path d="M17 8V5a1 1 0 00-1-1H6a1 1 0 00-1 1v12a1 1 0 001 1h4" />
      <circle cx="16" cy="16" r="5" />
      <path d="M16 14v4" />
      <path d="M14.5 15.5h3" />
      <path d="M14.5 16.5h3" />
    </>
  ),
  complaints: (
    <>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M12 8v3" />
      <circle cx="12" cy="14" r="0.5" fill="currentColor" />
    </>
  ),
  announcements: (
    <>
      <path d="M18 8a3 3 0 01 0 6" />
      <path d="M13 3L4 9h3v7h6V9l-3-6z" />
      <path d="M4 9v6" />
      <path d="M9 21c.6 0 1-.4 1-1v-2H8v2c0 .6.4 1 1 1z" />
    </>
  ),
  documents: (
    <>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M12 18v-6" />
      <path d="M9 15h6" />
    </>
  ),
  "room-view": (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 10h20" />
      <path d="M8 4v16" />
      <path d="M15 4v16" />
      <path d="M2 16h20" />
    </>
  ),
  emergency: (
    <>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </>
  ),
  onboarding: (
    <>
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" />
      <line x1="17" y1="11" x2="23" y2="11" />
    </>
  ),
  visitor: (
    <>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </>
  ),
  parent: (
    <>
      <path d="M1 22v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <circle cx="7" cy="8" r="3" />
      <path d="M17 21v-2a4 4 0 00-2-3.46" />
      <path d="M20 8v4" />
      <path d="M18 10h4" />
    </>
  ),
  analytics: (
    <>
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </>
  ),
  tenant: (
    <>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  warden: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  guard: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 012-2h6a2 2 0 012 2v1.662" />
    </>
  ),
  admin: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 10h2" />
      <path d="M15 10h2" />
      <path d="M11 10h2" />
    </>
  ),
  "super-admin": (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
    </>
  ),
  check: (
    <polyline points="20 6 9 17 4 12" />
  ),
  "qr-code": (
    <>
      <rect x="2" y="2" width="8" height="8" rx="1" />
      <rect x="14" y="2" width="8" height="8" rx="1" />
      <rect x="2" y="14" width="8" height="8" rx="1" />
      <rect x="14" y="14" width="4" height="4" rx="0.5" />
      <path d="M18 14h4v4" />
      <path d="M14 18h4v4" />
    </>
  ),
  "arrow-right": (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <path d="M9 9v.01" />
      <path d="M9 12v.01" />
      <path d="M9 15v.01" />
      <path d="M9 18v.01" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="4" rx="1" />
      <rect x="14" y="10" width="7" height="11" rx="1" />
      <rect x="3" y="13" width="7" height="8" rx="1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </>
  ),
  star: (
    <>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </>
  ),
};

export function InfraIcon({
  name,
  size = 24,
  className = "",
  strokeWidth = 1.75,
}: InfraIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}
