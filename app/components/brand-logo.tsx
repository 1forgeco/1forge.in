"use client";

import Image from "next/image";

type BrandLogoProps = {
  tone?: "light" | "dark" | "purple";
  size?: "sm" | "md" | "lg";
  showWord?: boolean;
};

const sizes = {
  sm: { height: 24 },
  md: { height: 34 },
  lg: { height: 48 },
};

const logoAspectRatio = 973 / 276;
const markAspectRatio = 315 / 225;

export function BrandLogo({
  tone = "dark",
  size = "md",
  showWord = true,
}: BrandLogoProps) {
  const selected = sizes[size];
  const width = Math.round(
    selected.height * (showWord ? logoAspectRatio : markAspectRatio),
  );

  return (
    <span
      aria-label="1forge"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width,
        height: selected.height,
        borderRadius: tone === "light" ? selected.height * 0.3 : 0,
        overflow: "hidden",
        background: tone === "light" ? "rgba(255, 255, 255, 0.96)" : "transparent",
        boxShadow: tone === "light" ? "0 0 0 1px rgba(255,255,255,0.18)" : "none",
        lineHeight: 1,
        position: "relative",
        padding: tone === "light" ? "3px 5px" : 0,
      }}
    >
      <Image
        src={showWord ? "/1forge-logo.png" : "/1forge-mark.png"}
        alt="1forge"
        fill
        sizes={`${width}px`}
        style={{
          objectFit: "contain",
          objectPosition: "center center",
        }}
        priority
      />
    </span>
  );
}
