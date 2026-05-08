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

      {/*
        Fade mask: logos only visible in the middle 30% of the strip.
        transparent → opaque at 35%, opaque → transparent at 65%.
      */}
      <div
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)",
        }}
      >
        {/*
          Marquee technique: the animated div has width:max-content so the
          browser knows its real pixel width. It contains two identical
          copies of the logo list. We animate translateX by exactly the
          pixel width of ONE copy (computed via CSS custom property trick
          using animation: marquee on the inner track).

          Simpler approach that always works: put the two copies inside a
          flex row with width:max-content, animate to -50% of that total.
          Because total = 2 × one-copy, -50% = exactly one copy's width.
          This is mathematically correct and browser-reliable.
        */}
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "tech-marquee 24s linear infinite",
            willChange: "transform",
          }}
        >
          {/* Copy A */}
          {TECHS.map((tech) => (
            <div
              key={`a-${tech.name}`}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 64px",
              }}
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

          {/* Copy B — exact duplicate for seamless wrap */}
          {TECHS.map((tech) => (
            <div
              key={`b-${tech.name}`}
              aria-hidden="true"
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 64px",
              }}
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
