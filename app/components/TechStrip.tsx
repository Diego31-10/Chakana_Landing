import Image from "next/image";

const TECHS = [
  { name: "Vercel", logo: "/vercel-seeklogo.svg", width: 80, height: 24 },
  { name: "Solana", logo: "/solanaLogo.svg", width: 96, height: 24 },
  { name: "Next.js", logo: "/next.svg", width: 80, height: 24 },
  { name: "ElevenLabs", logo: "/elevenlabs-logo-black.svg", width: 110, height: 24 },
  { name: "Dev3pack", logo: "/Dev3pack.svg", width: 96, height: 24 },
];

// Duplicated for seamless loop
const ITEMS = [...TECHS, ...TECHS];

export default function TechStrip() {
  return (
    <div className="relative w-full overflow-hidden py-10" style={{ backgroundColor: "var(--surface-container-low)" }}>
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

      {/* Track wrapper — wide fades on both edges */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 22%, black 78%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 22%, black 78%, transparent 100%)",
        }}
      >
        <div className="flex" style={{ animation: "tech-scroll 28s linear infinite" }}>
          {ITEMS.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-14"
              style={{ minWidth: "180px" }}
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={tech.width}
                height={tech.height}
                className="object-contain"
                style={{ opacity: 0.55, filter: "grayscale(1)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
