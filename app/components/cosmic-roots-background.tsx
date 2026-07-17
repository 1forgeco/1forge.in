"use client";

import { useEffect, useRef } from "react";

const rootPaths = [
  "M802 1040 C790 880 812 742 792 612 C770 470 690 380 682 228 C677 132 706 58 720 -42",
  "M790 756 C684 688 594 658 492 548 C398 446 352 334 256 260 C176 198 92 178 -34 186",
  "M786 708 C648 644 530 636 414 664 C296 694 208 762 74 764 C22 766 -18 756 -74 734",
  "M792 644 C694 548 636 446 598 334 C562 226 548 118 476 30 C438 -17 396 -48 350 -74",
  "M802 888 C930 820 1026 736 1088 620 C1144 518 1160 404 1260 328 C1354 256 1456 246 1648 258",
  "M800 772 C928 706 1048 688 1182 714 C1322 742 1422 832 1652 838",
  "M802 662 C884 584 926 488 948 374 C970 258 968 160 1046 58 C1084 8 1136 -28 1196 -54",
  "M632 578 C558 514 482 492 388 506 C300 520 232 568 150 566 C78 564 28 540 -44 490",
  "M984 542 C1064 482 1148 464 1238 480 C1334 496 1406 554 1504 548 C1558 544 1604 528 1650 500",
  "M542 648 C474 704 426 774 404 864 C382 952 394 1014 362 1078",
  "M1090 638 C1166 700 1210 780 1226 874 C1240 956 1222 1024 1252 1082",
  "M690 382 C618 326 562 264 536 184 C510 104 514 40 476 -36",
  "M930 370 C1000 316 1052 252 1076 174 C1098 98 1092 32 1130 -44",
];

export function CosmicRootsBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;

    const handlePointerMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      element.style.setProperty("--roots-x", `${x * 18}px`);
      element.style.setProperty("--roots-y", `${y * 12}px`);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div ref={rootRef} className="cosmic-roots" aria-hidden="true">
      <div className="cosmic-roots__aurora" />
      <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="root-gradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#5b42df" />
            <stop offset="0.45" stopColor="#d48d3d" />
            <stop offset="0.72" stopColor="#f5c76a" />
            <stop offset="1" stopColor="#78b889" />
          </linearGradient>
          <filter id="root-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="cosmic-roots__network">
          {rootPaths.map((path, index) => (
            <g key={path}>
              <path className="cosmic-roots__branch cosmic-roots__branch--base" d={path} />
              <path
                className="cosmic-roots__branch cosmic-roots__branch--pulse"
                d={path}
                pathLength="1"
                style={{ animationDelay: `${index * -0.43}s` }}
              />
            </g>
          ))}
          <path
            className="cosmic-roots__trunk"
            d="M802 1060 C778 914 816 814 798 696 C776 552 746 482 770 354 C786 266 824 192 814 92 C808 28 800 -16 812 -82"
          />
          {[228, 355, 486, 616, 748, 884].map((cy, index) => (
            <circle
              key={cy}
              className="cosmic-roots__node"
              cx={index % 2 ? 798 : 806}
              cy={cy}
              r={index % 3 === 0 ? 5 : 3.5}
              style={{ animationDelay: `${index * -0.72}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
