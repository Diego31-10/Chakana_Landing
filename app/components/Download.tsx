"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "@/app/lib/gsap";
import AurCoin from "./AurCoin";

type Status = "idle" | "loading" | "success" | "error";

export default function Download() {
  const rectRef = useRef<SVGRectElement>(null);
  const coinCardRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<gsap.core.Timeline | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function runTracer() {
    const rect = rectRef.current;
    if (!rect) return;
    if (animRef.current) animRef.current.kill();

    const P = rect.getTotalLength();
    const dash = 60;

    // ida: dashoffset va de 0 → -(P - dash)
    // la cabeza arranca en 0 y llega exactamente al final (P)
    // vuelta: dashoffset vuelve de -(P - dash) → 0
    // con gap = 9999 la línea NUNCA da la vuelta porque dash << P << 9999
    const end = -(P - dash);

    gsap.set(rect, { opacity: 0 });
    rect.setAttribute("stroke-dasharray", `${dash} 9999`);
    rect.setAttribute("stroke-dashoffset", "0");

    const tl = gsap.timeline();
    animRef.current = tl;

    tl.to(rect, { opacity: 1, duration: 0.1, ease: "none" });

    // Ida: 0 → end
    tl.to(rect, {
      attr: { "stroke-dashoffset": end },
      duration: 1.5,
      ease: "power1.inOut",
    }, "<");

    // Pausa
    tl.to({}, { duration: 0.2 });

    // Vuelta: end → 0
    tl.to(rect, {
      attr: { "stroke-dashoffset": 0 },
      duration: 1.5,
      ease: "power1.inOut",
    });

    tl.to(rect, { opacity: 0, duration: 0.4, ease: "power2.in" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading" || status === "success") return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Error al registrar");
      }
      setStatus("success");
      setEmail("");
      runTracer();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Inténtalo de nuevo");
    }
  }

  useEffect(() => {
    function onHashChange() {
      if (window.location.hash === "#descarga") setTimeout(runTracer, 500);
    }
    function onLinkClick(e: MouseEvent) {
      const a = (e.target as HTMLElement).closest("a");
      if (a?.getAttribute("href") === "#descarga") setTimeout(runTracer, 300);
    }
    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onLinkClick);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onLinkClick);
      animRef.current?.kill();
    };
  }, []);

  return (
    <section id="descarga" className="pt-24 pb-24 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="font-body font-semibold text-[11px] tracking-[0.18em] uppercase text-primary mb-4">
            03 · DESCARGA
          </p>
          <h2 className="font-display font-bold text-on-surface text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-[-0.02em] mb-6 max-w-[20ch]">
            Empieza a circular desde tu bolsillo.
          </h2>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10 max-w-[38ch]">
            La app de Chakana está en desarrollo. Déjanos tu correo y serás el
            primero en saber cuándo está lista.
          </p>

          {status === "success" ? (
            <div className="flex items-center gap-3 max-w-md px-4 py-3.5 rounded-md" style={{ backgroundColor: "var(--surface-container-low)" }}>
              <span className="text-secondary text-lg">✓</span>
              <p className="font-body text-sm text-on-surface">
                <span className="font-semibold">¡Listo!</span> Te avisamos cuando Chakana esté lista. Revisa tu correo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  aria-label="Correo electrónico"
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-md font-body text-sm text-on-surface placeholder:text-on-surface-muted focus:outline-none border-0 disabled:opacity-60 transition-opacity"
                  style={{ backgroundColor: "var(--surface-container-low)" }}
                />
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ overflow: "visible" }}>
                  <rect
                    ref={rectRef}
                    x="0" y="0"
                    width="100%" height="100%"
                    rx="6" ry="6"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="80 9999"
                    style={{ opacity: 0 }}
                  />
                </svg>
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 rounded-md bg-gradient-to-b from-primary to-primary-deep text-white font-body font-medium text-sm hover:-translate-y-px hover:shadow-soil-sm transition-all duration-200 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
              >
                {status === "loading" ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Enviando…
                  </span>
                ) : (
                  "Avisarme →"
                )}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="font-body text-xs text-red-500 mt-2">{errorMsg}</p>
          )}

          <div className="flex gap-4 mt-8">
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[rgba(140,133,123,0.20)] font-body text-xs text-on-surface-muted cursor-default select-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
              <span style={{ opacity: 0.5 }}>(próximamente)</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[rgba(140,133,123,0.20)] font-body text-xs text-on-surface-muted cursor-default select-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/>
              </svg>
              Google Play
              <span style={{ opacity: 0.5 }}>(próximamente)</span>
            </span>
          </div>
        </div>

        <div ref={coinCardRef} className="hidden md:flex flex-col items-center justify-center gap-2 py-8 px-6 bg-background relative overflow-hidden">
          <AurCoin containerRef={coinCardRef} />
        </div>

      </div>
    </section>
  );
}
