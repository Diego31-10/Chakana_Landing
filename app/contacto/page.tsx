import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contacto · Chakana",
  description: "Ponte en contacto con el equipo de Chakana y Gavanti.",
};

const CONTACTS = [
  {
    label: "Correo",
    value: "support@gavanti.org",
    href: "mailto:support@gavanti.org",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@chakana.ec",
    href: "https://instagram.com/chakana.ec",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    value: "@chakana_ec",
    href: "https://x.com/chakana_ec",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Teléfono",
    value: "+593 99 000 0000",
    href: "tel:+593990000000",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-24 px-4">
          <div className="max-w-5xl mx-auto">

            <p className="font-body font-semibold text-[11px] tracking-[0.18em] uppercase text-primary mb-4">
              Contacto · Chakana
            </p>
            <h1 className="font-display font-bold text-on-surface text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-[-0.02em] mb-3">
              Hablemos.
            </h1>
            <p className="font-body text-on-surface-variant text-base leading-relaxed mb-12 max-w-[42ch]">
              ¿Quieres ser embajador, sumar tu tambú o simplemente saber más? Escríbenos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CONTACTS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col gap-4 p-6 rounded-xl border border-[rgba(140,133,123,0.15)] bg-surface hover:border-primary/30 hover:shadow-soil-sm transition-all duration-200"
                  style={{ textDecoration: "none" }}
                >
                  <span className="text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                    {c.icon}
                  </span>
                  <div>
                    <p className="font-body font-semibold text-[10px] tracking-[0.18em] uppercase text-on-surface-muted mb-1">
                      {c.label}
                    </p>
                    <p className="font-body text-sm text-on-surface group-hover:text-primary transition-colors">
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
