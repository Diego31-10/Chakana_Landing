"use client";

import Image from "next/image";
import { useLang } from "@/app/lib/i18n";

const TECHS = [
  { name: "Vercel",     logo: "/vercel-seeklogo.svg",       nativeW: 512,  nativeH: 116 },
  { name: "Solana",     logo: "/solanaLogo.svg",            nativeW: 646,  nativeH:  96, scale: 1.3 },
  { name: "Stripe",     logo: "/stripe-black.svg",          nativeW: 360,  nativeH: 151, scale: 0.75 },
  { name: "ElevenLabs", logo: "/elevenlabs-logo-black.svg", nativeW: 694,  nativeH:  90, scale: 1.3 },
  { name: "Dev3pack",   logo: "/Dev3pack.svg",              nativeW: 1125, nativeH: 500, scale: 1.6 },
];

const BOX_W = 120;
const BOX_H = 45;

export default function TechStrip() {
  const { t } = useLang();

  return (
    <div
      className="relative w-full overflow-hidden py-10"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <p
          className="text-center font-body font-semibold mb-7"
          style={{
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--on-surface-muted)",
          }}
        >
          {t.techStrip.poweredBy}
        </p>

        <div
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            overflow: "hidden",
          }}
        >
        <div className="tech-marquee-track flex">
          {TECHS.map((tech) => (
            <div
              key={`a-${tech.name}`}
              className="flex-none flex items-center justify-center"
              style={{ padding: "0 36px" }}
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={tech.nativeW}
                height={tech.nativeH}
                style={{
                  width: BOX_W * (tech.scale ?? 1),
                  height: BOX_H * (tech.scale ?? 1),
                  objectFit: "contain",
                  opacity: 0.5,
                  filter: "grayscale(1)",
                }}
              />
            </div>
          ))}
          {TECHS.map((tech) => (
            <div
              key={`b-${tech.name}`}
              aria-hidden="true"
              className="flex-none flex items-center justify-center"
              style={{ padding: "0 36px" }}
            >
              <Image
                src={tech.logo}
                alt=""
                width={tech.nativeW}
                height={tech.nativeH}
                style={{
                  width: BOX_W * (tech.scale ?? 1),
                  height: BOX_H * (tech.scale ?? 1),
                  objectFit: "contain",
                  opacity: 0.5,
                  filter: "grayscale(1)",
                }}
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
