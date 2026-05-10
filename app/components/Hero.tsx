"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/app/lib/gsap";
import { useLang } from "@/app/lib/i18n";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();
  const h = t.hero;

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

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="que-es"
      className="pt-40 pb-24 px-4 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-center">

        {/* Left — copy */}
        <div>
          <p className="hero-stamp font-body font-semibold text-[11px] tracking-[0.20em] uppercase text-on-surface-variant mb-6">
            {h.stamp}
          </p>

          <h1 className="hero-headline font-display font-bold text-on-surface mb-8 leading-[1.02] tracking-[-0.025em] text-[clamp(2.5rem,6.5vw,5rem)] max-w-[14ch]">
            {h.headline1}<span className="text-primary">{h.headlineAccent}</span>{h.headline2}
          </h1>

          <p className="hero-lede font-body text-on-surface-variant text-lg leading-relaxed mb-0 max-w-[42ch]">
            {h.lede}
          </p>
        </div>

        {/* Right — Chakana mark (hidden on mobile) */}
        <div className="hero-mark hidden md:flex flex-col items-center gap-6 relative">
          <Image
            src="/logo.svg"
            alt=""
            width={300}
            height={300}
            className="w-full max-w-[300px] opacity-90"
            aria-hidden="true"
          />
          <p className="font-body font-semibold text-[10px] tracking-[0.28em] uppercase text-on-surface-muted">
            {h.reactivating}
          </p>
        </div>

      </div>
    </section>
  );
}
