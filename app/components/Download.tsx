"use client";

export default function Download() {
  return (
    <section id="descarga" className="py-24 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Copy */}
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

          {/* Waitlist form — placeholder, no backend */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md"
          >
            <input
              type="email"
              placeholder="tu@correo.com"
              aria-label="Correo electrónico"
              className="flex-1 px-4 py-3 rounded-md font-body text-sm text-on-surface placeholder:text-on-surface-muted focus:outline-none focus:ring-2 focus:ring-primary/50 border-0"
              style={{ backgroundColor: "var(--surface-container-low)" }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-gradient-to-b from-primary to-primary-deep text-white font-body font-medium text-sm hover:-translate-y-px hover:shadow-soil-sm transition-all duration-200 whitespace-nowrap"
            >
              Avisarme →
            </button>
          </form>

          {/* Store badges — placeholders */}
          <div className="flex gap-4 mt-8">
            <a
              href="#"
              aria-label="App Store — próximamente"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[rgba(140,133,123,0.20)] font-body text-xs text-on-surface-variant hover:border-[rgba(140,133,123,0.40)] transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-on-surface" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
              <span className="text-on-surface-muted">(próximamente)</span>
            </a>

            <a
              href="#"
              aria-label="Google Play — próximamente"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[rgba(140,133,123,0.20)] font-body text-xs text-on-surface-variant hover:border-[rgba(140,133,123,0.40)] transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-on-surface" aria-hidden="true">
                <path d="M3.18 23.76c.3.17.64.24.99.18l12.47-7.2-2.79-2.79-10.67 9.81zm-1.34-20.9C1.6 3.2 1.5 3.6 1.5 4.04v15.92c0 .44.1.84.34 1.18l.06.06 8.92-8.92v-.21L1.78 2.8l.06.06zm18.04 9.46l-2.52-1.46-3.14 3.14 3.14 3.14 2.54-1.47c.72-.42.72-1.1 0-1.52l-.02.17zm-17.3 10.12l.06-.03 10.3-10.3-2.79-2.79L1.84 20.4l.74 2.04z"/>
              </svg>
              Google Play
              <span className="text-on-surface-muted">(próximamente)</span>
            </a>
          </div>
        </div>

        {/* Aurios visual panel — desktop only */}
        <div className="hidden md:flex flex-col items-center justify-center gap-6 py-12 px-8 bg-surface rounded-md relative overflow-hidden">
          <div className="font-display font-bold text-[80px] leading-none tracking-[-0.04em] text-primary/10 select-none" aria-hidden="true">
            $A
          </div>
          <p className="font-display font-semibold text-on-surface text-xl text-center leading-tight">
            El crédito que<br />nace en el barrio<br />y ahí se queda.
          </p>
          <p className="font-body text-on-surface-muted text-xs text-center tracking-[0.12em] uppercase">
            Aurios · Crédito circular
          </p>
          <div
            className="absolute bottom-0 right-0 w-12 h-12 bg-secondary/20"
            aria-hidden="true"
            style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
          />
        </div>

      </div>
    </section>
  );
}
