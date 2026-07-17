import Image from "next/image";

type MediaSkeletonProps = {
  active?: boolean;
  label?: string;
  tone?: "dark" | "light";
  compact?: boolean;
};

export function MediaSkeleton({
  active = true,
  label = "Loading media",
  tone = "dark",
  compact = false,
}: MediaSkeletonProps) {
  return (
    <div
      className={`media-skeleton media-skeleton--${tone} ${compact ? "media-skeleton--compact" : ""} ${active ? "" : "media-skeleton--hidden"}`}
      aria-hidden="true"
    >
      <div className="media-skeleton__glow" />
      <Image
        src={tone === "dark" ? "/forge-loader-logo.png" : "/1forge-logo.png"}
        alt=""
        width={tone === "dark" ? 1040 : 973}
        height={276}
        unoptimized
      />
      {label ? <span>{label}</span> : null}
    </div>
  );
}
