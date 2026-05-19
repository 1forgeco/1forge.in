"use client";

import Image from "next/image";

type BrandLogoProps = {
  tone?: "light" | "dark" | "purple";
  size?: "sm" | "md" | "lg";
  showWord?: boolean;
};

const sizes = {
  sm: { width: 74, height: 22 },
  md: { width: 116, height: 34 },
  lg: { width: 148, height: 44 },
};

export function BrandLogo({
  tone = "dark",
  size = "md",
  showWord = true,
}: BrandLogoProps) {
  const selected = sizes[size];
  const width = showWord ? selected.width : selected.height;

  return (
    <span
      aria-label="1forge"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width,
        height: selected.height,
        borderRadius: selected.height * 0.22,
        overflow: "hidden",
        background: tone === "light" ? "#050505" : "#020202",
        boxShadow:
          tone === "dark"
            ? "0 0 0 1px rgba(255,255,255,0.04)"
            : "0 0 0 1px rgba(0,0,0,0.08)",
        lineHeight: 1,
        position: "relative",
      }}
    >
      <Image
        src="/1forge.png"
        alt="1forge"
        fill
        sizes={`${width}px`}
        style={{
          objectFit: "cover",
          objectPosition: showWord ? "center center" : "30% center",
          transform: showWord ? "scale(1.08)" : "scale(3.4)",
        }}
        priority
      />
    </span>
  );
}
