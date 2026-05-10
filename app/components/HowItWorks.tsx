"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/app/lib/gsap";
import { useLang } from "@/app/lib/i18n";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();
  const hiw = t.howItWorks;

  useGSAP(() => {
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

  const ACCENTS = ["secondary", "primary", "secondary"] as const;

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="pt-24 pb-24 px-4"
    >
      <div className="max-w-5xl mx-auto">

        <div className="hiw-header mb-16">
          <p className="font-body font-semibold text-[11px] tracking-[0.18em] uppercase text-primary mb-4">
            {hiw.eyebrow}
          </p>
          <h2 className="font-display font-bold text-on-surface text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-[-0.02em] max-w-[22ch]">
            {hiw.title}
          </h2>
        </div>

        <div className="hiw-cards relative grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="hiw-connector hidden md:block absolute top-10 left-[calc(33%-1rem)] right-[calc(33%-1rem)] h-px bg-primary/20"
            aria-hidden="true"
          />

          {hiw.steps.map((step, i) => {
            const accent = ACCENTS[i];
            const number = String(i + 1).padStart(2, "0");
            return (
              <article
                key={number}
                className="hiw-card relative bg-surface rounded-md p-8 hover:shadow-soil transition-shadow duration-300"
              >
                <span
                  className={`font-display font-bold text-5xl leading-none tracking-[-0.03em] mb-6 block ${
                    accent === "primary" ? "text-primary/20" : "text-secondary/20"
                  }`}
                >
                  {number}
                </span>

                <p
                  className={`font-body font-semibold text-[10px] tracking-[0.18em] uppercase mb-3 ${
                    accent === "primary" ? "text-primary" : "text-secondary"
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
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
