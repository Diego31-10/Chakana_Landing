"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/app/lib/gsap";

const STEPS = [
  {
    number: "01",
    eyebrow: "CONSUME",
    title: "Consume en un Tambu",
    body: "Visita un local participante y paga con la app. Tu apoyo queda registrado de forma inmutable.",
    accent: "secondary" as const,
  },
  {
    number: "02",
    eyebrow: "APORTA",
    title: "Deja tu reseña",
    body: "Comparte tu experiencia. Cada reseña auténtica aporta valor al barrio y queda grabada de forma permanente.",
    accent: "primary" as const,
  },
  {
    number: "03",
    eyebrow: "CIRCULA",
    title: "Gana Aurios, circula más",
    body: "Recibes Aurios — el crédito del barrio — que puedes usar para descuentos en tu próxima visita. El ciclo continúa.",
    accent: "secondary" as const,
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Header entrance
    gsap.from(".hiw-header > *", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hiw-header",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Batch card entrance — top-level, NOT inside a timeline
    ScrollTrigger.batch(".hiw-card", {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 40,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
        });
      },
      start: "top 85%",
      once: true,
    });

    // Connector line draw
    gsap.from(".hiw-connector", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".hiw-cards",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="py-24 px-4"
    >
      <div className="max-w-5xl mx-auto">

        <div className="hiw-header mb-16">
          <p className="font-body font-semibold text-[11px] tracking-[0.18em] uppercase text-primary mb-4">
            02 · CÓMO FUNCIONA
          </p>
          <h2 className="font-display font-bold text-on-surface text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-[-0.02em] max-w-[22ch]">
            El ciclo que reactiva el barrio.
          </h2>
        </div>

        <div className="hiw-cards relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector line — desktop only */}
          <div
            className="hiw-connector hidden md:block absolute top-10 left-[calc(33%-1rem)] right-[calc(33%-1rem)] h-px bg-primary/20"
            aria-hidden="true"
          />

          {STEPS.map((step) => (
            <article
              key={step.number}
              className="hiw-card relative bg-surface rounded-md p-8 hover:shadow-soil transition-shadow duration-300"
            >
              <span
                className={`font-display font-bold text-5xl leading-none tracking-[-0.03em] mb-6 block ${
                  step.accent === "primary" ? "text-primary/20" : "text-secondary/20"
                }`}
              >
                {step.number}
              </span>

              <p
                className={`font-body font-semibold text-[10px] tracking-[0.18em] uppercase mb-3 ${
                  step.accent === "primary" ? "text-primary" : "text-secondary"
                }`}
              >
                {step.eyebrow}
              </p>

              <h3 className="font-display font-semibold text-on-surface text-xl leading-tight mb-4">
                {step.title}
              </h3>

              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                {step.body}
              </p>

              {/* Andean edge accent on the featured card */}
              {step.accent === "primary" && (
                <div
                  className="absolute top-0 right-0 w-6 h-6 bg-secondary/30 rounded-br-md"
                  aria-hidden="true"
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                />
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
