"use client";

import Image from "next/image";

/* ─────────────────────────────────────────────────────────── */
/*  Logo data — same companies from the work page              */
/* ─────────────────────────────────────────────────────────── */
const logos = [
  { name: "Jitsi Meet", src: "/workedWith/jitsi-logo.png" },
  { name: "OpenStreetMap", src: "/workedWith/openstreetmap.png" },
  { name: "Apache Airflow", src: "/workedWith/AirflowLogo.svg.png" },
  { name: "Palisadoes Foundation", src: "/workedWith/palisadoes-social-card.jpg" },
  { name: "Meshery", src: "/workedWith/2c6279e8-716c-429e-ae08-cd4b1966df31.png" },
  { name: "Layer5", src: "/workedWith/38da522e-19e0-4667-a779-7e1da76ab7d9.png" },
  { name: "Zigguratss", src: "/workedWith/b3756ef6fb55408a83bef1ae70acc759.png" },
  { name: "ZoronTech", src: "/workedWith/zorontech_logo.jpeg" },
  { name: "SAST", src: "/workedWith/images.jpeg" },
  { name: "Aazakart", src: "/workedWith/4L6kSxlCwhSCINrr6ljbrJdPZlvTOqHQDuFBg503.png" },
];

/* Double the array for seamless loop */
const doubledLogos = [...logos, ...logos];

export function LogoCarousel() {
  return (
    <section className="relative overflow-hidden pt-16 pb-6 sm:pt-24 sm:pb-8">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-scroll {
          animation: logo-scroll 35s linear infinite !important;
        }
      `}} />
      {/* Heading */}
      <p className="mb-8 text-center text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--color-misty-gray)]">
        Trusted by teams &amp; organizations we&apos;ve worked with
      </p>

      {/* Carousel container */}
      <div
        className="w-full overflow-hidden py-2"
        style={{
          maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
        }}
      >
        {/* Scrolling track */}
        <div
          className="flex items-center gap-12 sm:gap-16 animate-logo-scroll"
          style={{
            width: "max-content",
          }}
        >
          {doubledLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="relative flex h-14 w-[160px] shrink-0 items-center justify-center sm:h-16 sm:w-[190px] opacity-90 hover:opacity-100 transition-opacity duration-200"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="190px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
