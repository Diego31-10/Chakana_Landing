"use client";

import Image from "next/image";

const TECHS = [
  { name: "Vercel",     logo: "/vercel-seeklogo.svg",       width: 100, height: 32 },
  { name: "Solana",     logo: "/solanaLogo.svg",            width: 120, height: 32 },
  { name: "Next.js",    logo: "/next.svg",                  width: 100, height: 32 },
  { name: "ElevenLabs", logo: "/elevenlabs-logo-black.svg", width: 138, height: 32 },
  { name: "Dev3pack",   logo: "/Dev3pack.svg",              width: 120, height: 32 },
];

export default function TechStrip() {
  return (
    <div
      className="relative w-full overflow-hidden py-10"
      style={{ backgroundColor: "var(--surface-container-low)" }}
    >
      {/* Eyebrow */}
      <p
        className="text-center font-body font-semibold mb-7"
        style={{
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--on-surface-muted)",
        }}
      >
        Construido con
      </p>

      {/* Fade mask — logos visible only in the central 30% */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 38%, black 62%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 38%, black 62%, transparent 100%)",
        }}
      >
        {/* Marquee track — inline style animation so it survives SSR hydration */}
        <div className="tech-marquee-track flex">
          {/* Copy A */}
          {TECHS.map((tech) => (
            <div
              key={`a-${tech.name}`}
              className="flex-none flex items-center justify-center"
              style={{ padding: "0 64px" }}
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={tech.width}
                height={tech.height}
                style={{ objectFit: "contain", opacity: 0.5, filter: "grayscale(1)" }}
              />
            </div>
          ))}
          {/* Copy B — seamless duplicate */}
          {TECHS.map((tech) => (
            <div
              key={`b-${tech.name}`}
              aria-hidden="true"
              className="flex-none flex items-center justify-center"
              style={{ padding: "0 64px" }}
            >
              <Image
                src={tech.logo}
                alt=""
                width={tech.width}
                height={tech.height}
                style={{ objectFit: "contain", opacity: 0.5, filter: "grayscale(1)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
