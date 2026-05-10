"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP } from "@/app/lib/gsap";
import { useLang, type Lang } from "@/app/lib/i18n";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const { t, toggle, lang } = useLang();
  const nav = t.nav;

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
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-xl bg-surface/80 backdrop-blur-[12px] shadow-[0_12px_32px_rgba(38,26,22,0.08)] border border-[rgba(140,133,123,0.12)]"
    >
      {/* Main row */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Chakana" width={32} height={32} />
          <span className="font-display font-bold text-sm tracking-[0.32em] text-on-surface uppercase">
            CHAKANA
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/#como-funciona"
            className="font-body font-medium text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            {nav.howItWorks}
          </Link>
          <Link
            href="/#descarga"
            className="font-body font-medium text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            {nav.join}
          </Link>
          <Link
            href="/contacto"
            className="font-body font-medium text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            {nav.contact}
          </Link>

          {/* Language switcher pill */}
          <LangPill lang={lang} onToggle={toggle} />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span
            className="block w-5 h-0.5 bg-on-surface transition-all duration-300 origin-center"
            style={{ transform: open ? "translateY(8px) rotate(45deg)" : "none" }}
          />
          <span
            className="block w-5 h-0.5 bg-on-surface transition-all duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 bg-on-surface transition-all duration-300 origin-center"
            style={{ transform: open ? "translateY(-8px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "240px" : "0px" }}
      >
        <div className="flex flex-col px-6 pb-4 gap-3 border-t border-[rgba(140,133,123,0.12)] pt-3">
          <Link
            href="/#como-funciona"
            className="font-body font-medium text-sm text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {nav.howItWorks}
          </Link>
          <Link
            href="/#descarga"
            className="font-body font-medium text-sm text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {nav.join}
          </Link>
          <Link
            href="/contacto"
            className="font-body font-medium text-sm text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {nav.contact}
          </Link>
          <div className="pt-1">
            <LangPill lang={lang} onToggle={() => { toggle(); setOpen(false); }} />
          </div>
        </div>
      </div>
    </header>
  );
}

function LangPill({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Switch language"
      className="relative flex items-center gap-0 h-6 rounded-full border border-[rgba(140,133,123,0.25)] bg-transparent overflow-hidden"
      style={{ padding: 0 }}
    >
      {(["es", "en"] as Lang[]).map((l) => {
        const active = lang === l;
        return (
          <span
            key={l}
            className="relative z-10 px-2.5 h-full flex items-center font-body font-medium text-[11px] tracking-[0.08em] uppercase transition-colors duration-300"
            style={{
              color: active ? "var(--surface)" : "var(--on-surface-muted)",
              background: active ? "var(--on-surface)" : "transparent",
              borderRadius: "9999px",
            }}
          >
            {l}
          </span>
        );
      })}
    </button>
  );
}
