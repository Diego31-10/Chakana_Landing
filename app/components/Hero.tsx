"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/app/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.from(".hero-stamp", {
      opacity: 0,
      y: 12,
      duration: 0.4,
      ease: "power2.out",
    })
    .from(".hero-headline", {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.2")
    .from(".hero-lede", {
      opacity: 0,
      y: 16,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3")
    .from(".hero-ctas", {
      opacity: 0,
      y: 12,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.2")
    .from(".hero-mark", {
      opacity: 0,
      scale: 0.88,
      duration: 0.9,
      ease: "back.out(1.4)",
    }, 0.3);

  // Scroll-driven exit — separate top-level tween (not inside the timeline)
  gsap.to(".hero-mark", {
    opacity: 0.15,
    scale: 0.9,
    y: -30,
    ease: "none",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.2,
    },
  });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="que-es"
      className="pt-40 pb-24 px-4 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-end">

        {/* Left — copy */}
        <div>
          <p className="hero-stamp font-body font-semibold text-[11px] tracking-[0.20em] uppercase text-on-surface-variant mb-6">
            · CUENCA, ECUADOR ·
          </p>

          <h1 className="hero-headline font-display font-bold text-on-surface mb-8 leading-[1.02] tracking-[-0.025em] text-[clamp(2.5rem,6.5vw,5rem)] max-w-[14ch]">
            Aquí tu <span className="text-primary">apoyo</span> vuelve.
          </h1>

          <p className="hero-lede font-body text-on-surface-variant text-lg leading-relaxed mb-10 max-w-[42ch]">
            Un ecosistema de economía circular para el barrio: lo que ya no
            usas encuentra un próximo lugar, lo que necesitas regresa por
            manos cercanas.
          </p>

          <div className="hero-ctas flex flex-wrap gap-4">
            {/* App Store placeholder */}
            <a
              href="#"
              aria-label="Descargar en App Store (próximamente)"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-on-surface text-surface font-body font-medium text-sm hover:-translate-y-px hover:shadow-soil transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>

            {/* Google Play placeholder */}
            <a
              href="#"
              aria-label="Descargar en Google Play (próximamente)"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-gradient-to-b from-primary to-primary-deep text-white font-body font-medium text-sm hover:-translate-y-px hover:shadow-soil-sm transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.18 23.76c.3.17.64.24.99.18l12.47-7.2-2.79-2.79-10.67 9.81zm-1.34-20.9C1.6 3.2 1.5 3.6 1.5 4.04v15.92c0 .44.1.84.34 1.18l.06.06 8.92-8.92v-.21L1.78 2.8l.06.06zm18.04 9.46l-2.52-1.46-3.14 3.14 3.14 3.14 2.54-1.47c.72-.42.72-1.1 0-1.52l-.02.17zm-17.3 10.12l.06-.03 10.3-10.3-2.79-2.79L1.84 20.4l.74 2.04z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>

        {/* Right — Chakana mark */}
        <div className="hero-mark flex flex-col items-center gap-6 relative">
          <Image
            src="/logo.svg"
            alt=""
            width={320}
            height={320}
            className="w-full max-w-[320px] opacity-90"
            aria-hidden="true"
          />
          <p className="font-body font-semibold text-[10px] tracking-[0.28em] uppercase text-on-surface-muted">
            Reactivando la Atenas
          </p>
        </div>

      </div>
    </section>
  );
}
