import Image from "next/image";

const TECHS = [
  { name: "Vercel",      logo: "/vercel-seeklogo.svg",       width: 100, height: 32 },
  { name: "Solana",      logo: "/solanaLogo.svg",            width: 120, height: 32 },
  { name: "Next.js",     logo: "/next.svg",                  width: 100, height: 32 },
  { name: "ElevenLabs",  logo: "/elevenlabs-logo-black.svg", width: 138, height: 32 },
  { name: "Dev3pack",    logo: "/Dev3pack.svg",              width: 120, height: 32 },
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

      {/* Mask: fades start at 35% and end at 65% — very centre-heavy */}
      <div
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)",
          overflow: "hidden",
        }}
      >
        {/*
          Two identical tracks placed side by side inside a flex row.
          Track A animates from 0 → -100% (its own width).
          Track B starts at 100% (right of A) and also moves to 0.
          When A exits left, B has taken its place — perfect seamless loop.
          Key: both tracks are `width: max-content` so their natural size
          drives the animation distance.
        */}
        <div
          className="flex"
          style={{ animation: "tech-marquee 24s linear infinite", willChange: "transform" }}
          aria-hidden="true"
        >
          {/* Track A */}
          <div className="flex flex-shrink-0">
            {TECHS.map((tech) => (
              <div
                key={`a-${tech.name}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ padding: "0 56px" }}
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={tech.width}
                  height={tech.height}
                  className="object-contain"
                  style={{ opacity: 0.5, filter: "grayscale(1)" }}
                />
              </div>
            ))}
          </div>

          {/* Track B — exact duplicate so the loop is seamless */}
          <div className="flex flex-shrink-0" aria-hidden="true">
            {TECHS.map((tech) => (
              <div
                key={`b-${tech.name}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ padding: "0 56px" }}
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={tech.width}
                  height={tech.height}
                  className="object-contain"
                  style={{ opacity: 0.5, filter: "grayscale(1)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
