import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(140,133,123,0.15)] py-12 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">

          {/* Brand */}
          <div className="flex items-center gap-4">
            <Image src="/logo.svg" alt="Chakana" width={40} height={40} />
            <div>
              <div className="font-display font-bold text-base tracking-[0.32em] text-on-surface uppercase">
                CHAKANA
              </div>
              <div className="font-body text-xs text-on-surface-muted mt-0.5">
                Ecosistema de Economía Circular
              </div>
            </div>
          </div>

          {/* Place stamp */}
          <div className="font-body font-semibold text-[11px] tracking-[0.20em] uppercase text-on-surface-muted">
            · CUENCA, ECUADOR ·
          </div>

          {/* Nav links */}
          <nav className="flex gap-6" aria-label="Footer">
            {[
              { label: "Qué es", href: "#que-es" },
              { label: "Cómo funciona", href: "#como-funciona" },
              { label: "Descarga", href: "#descarga" },
              { label: "Contacto", href: "mailto:hola@chakana.ec" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-on-surface-variant underline decoration-transparent underline-offset-4 hover:text-primary hover:decoration-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Legend */}
        <div className="font-display font-bold text-[11px] tracking-[0.40em] uppercase text-on-surface-muted/60 text-center">
          REACTIVANDO LA ATENAS
        </div>

      </div>
    </footer>
  );
}
