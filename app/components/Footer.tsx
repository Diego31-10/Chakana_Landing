import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(140,133,123,0.15)] py-12 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Single row — brand left, stamp right */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/logo.svg" alt="Chakana" width={40} height={40} />
            <div>
              <div className="font-display font-bold text-base tracking-[0.32em] text-on-surface uppercase">
                CHAKANA
              </div>
              <div className="font-body text-xs text-on-surface-muted mt-0.5">
                Ecosistema de Economía Circular
              </div>
              <div className="font-body text-[10px] text-on-surface-muted opacity-60 mt-1">
                © {new Date().getFullYear()} Gavanti. Todos los derechos reservados.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="font-body font-semibold text-[11px] tracking-[0.20em] uppercase text-on-surface-muted">
              · CUENCA, ECUADOR ·
            </div>
            <span className="text-on-surface-muted opacity-30">|</span>
            <Link href="/terminos" className="font-body text-[11px] text-on-surface-muted opacity-70 hover:opacity-100 transition-opacity">
              Términos
            </Link>
            <Link href="/privacidad" className="font-body text-[11px] text-on-surface-muted opacity-70 hover:opacity-100 transition-opacity">
              Privacidad
            </Link>
          </div>
        </div>


      </div>
    </footer>
  );
}
