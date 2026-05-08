"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/app/lib/gsap";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -32,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.2,
    });
  }, { scope: headerRef });

  return (
    <header
      ref={headerRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl flex items-center justify-between px-6 py-3 rounded-md bg-surface/80 backdrop-blur-[12px] shadow-[0_12px_32px_rgba(38,26,22,0.06)]"
    >
      {/* Brand */}
      <a href="#" className="flex items-center gap-3 no-underline">
        <Image src="/logo.svg" alt="Chakana" width={32} height={32} />
        <span className="font-display font-bold text-sm tracking-[0.32em] text-on-surface uppercase">
          CHAKANA
        </span>
      </a>

      {/* Right side — nav + CTA */}
      <div className="hidden md:flex items-center gap-7">
        <a
          href="#como-funciona"
          className="font-body font-medium text-sm text-on-surface no-underline hover:text-primary transition-colors duration-200"
        >
          Cómo funciona
        </a>
        <a
          href="#descarga"
          className="font-body font-medium text-sm px-5 py-2.5 rounded-md text-white no-underline bg-gradient-to-b from-primary to-primary-deep hover:-translate-y-px hover:shadow-soil-sm transition-all duration-200"
        >
          Sumarse
        </a>
      </div>
    </header>
  );
}
