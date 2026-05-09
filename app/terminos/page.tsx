import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Términos de Servicio · Chakana",
  description: "Términos y condiciones de uso de la plataforma Chakana, operada por Gavanti.",
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-24 px-4">
          <div className="max-w-5xl mx-auto">

            <p className="font-body font-semibold text-[11px] tracking-[0.18em] uppercase text-primary mb-4">
              Legal · Chakana
            </p>
            <h1 className="font-display font-bold text-on-surface text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-[-0.02em] mb-2">
              Términos de Servicio
            </h1>
            <p className="font-body text-xs text-on-surface-muted mb-12">
              Última actualización: 9 de mayo de 2026
            </p>

            <div className="space-y-10">

              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Estos Términos de Servicio regulan el uso de Chakana, plataforma digital operada por{" "}
                <strong className="text-on-surface">Gavanti</strong>, enfocada en economía circular,
                reseñas verificables y beneficios para comunidades locales. Al acceder, registrarte
                o utilizar Chakana, aceptas estos términos.
              </p>

              <LegalSection title="1. Descripción del servicio y aceptación">
                <p>
                  Chakana permite que embajadores y tambús interactúen mediante perfiles de usuario,
                  reseñas, recompensas en Aurios, integraciones con infraestructura blockchain
                  (Solana) y herramientas complementarias como reportes de voz y servicios de pago.
                </p>
                <p>
                  Si no estás de acuerdo con estos términos, debes dejar de usar la plataforma.
                  Chakana puede actualizar estos términos y notificará cambios materiales por medios
                  razonables dentro del servicio.
                </p>
              </LegalSection>

              <LegalSection title="2. Cuentas de usuario y responsabilidades">
                <ul>
                  <li>Debes proporcionar datos veraces, completos y actualizados al crear una cuenta.</li>
                  <li>Eres responsable de la seguridad de tus credenciales y de cualquier actividad realizada con tu cuenta.</li>
                  <li>Eres responsable de la custodia de tu wallet y claves privadas; Chakana no almacena ni recupera llaves privadas.</li>
                  <li>No puedes usar la plataforma para fraude, suplantación, lavado de activos, manipulación de reseñas o actividades ilícitas.</li>
                </ul>
              </LegalSection>

              <LegalSection title="3. Pagos, compras y política de reembolsos">
                <p>
                  Chakana puede habilitar pagos mediante <strong className="text-on-surface">Stripe</strong> para
                  compras, órdenes o servicios vinculados a la plataforma. Al pagar, autorizas el
                  cobro correspondiente en los medios habilitados por Stripe.
                </p>
                <p>
                  Los reembolsos se gestionan caso por caso según naturaleza del producto/servicio,
                  estado de la orden, evidencia de cobro y políticas aplicables de protección al
                  consumidor en Ecuador. Cuando proceda, el reembolso se procesará por el mismo
                  canal de pago utilizado originalmente, sujeto a tiempos del emisor, adquirente y
                  Stripe.
                </p>
              </LegalSection>

              <LegalSection title="4. Divulgación de riesgos cripto y blockchain">
                <ul>
                  <li>Las transacciones blockchain son irreversibles en la mayoría de casos.</li>
                  <li>Los activos digitales pueden presentar volatilidad y riesgos tecnológicos, regulatorios y operativos.</li>
                  <li>Pueden existir comisiones de red, congestión y demoras fuera del control de Chakana.</li>
                  <li>La información de Chakana no constituye asesoría financiera, de inversión, legal ni tributaria. Cada usuario asume sus decisiones y riesgos.</li>
                </ul>
              </LegalSection>

              <LegalSection title="5. Propiedad intelectual">
                <p>
                  Chakana, su marca, diseño, software, textos, contenidos, lógica de producto y
                  elementos distintivos son propiedad de <strong className="text-on-surface">Gavanti</strong> o
                  se usan bajo licencia. No se permite copiar, reproducir, descompilar, distribuir
                  o crear obras derivadas sin autorización previa por escrito.
                </p>
              </LegalSection>

              <LegalSection title="6. Servicios de terceros y marcas">
                <p>
                  Chakana depende de servicios de terceros para operar funcionalidades específicas.
                  El uso de esos servicios puede estar sujeto además a términos y políticas de sus
                  respectivos proveedores.
                </p>
                <p>
                  Stripe, Solana, Vercel, ElevenLabs y Dev3pack son marcas de sus respectivos
                  titulares. Su mención en Chakana es únicamente descriptiva y no implica patrocinio
                  ni afiliación exclusiva.
                </p>
              </LegalSection>

              <LegalSection title="7. Limitación de responsabilidad">
                <p>
                  En la máxima medida permitida por la ley, Gavanti y Chakana no serán responsables
                  por daños indirectos, incidentales, especiales, consecuenciales o lucro cesante
                  derivados del uso o imposibilidad de uso del servicio, incluyendo interrupciones,
                  fallas de terceros, eventos de red blockchain, pérdida de acceso a wallet, o
                  errores de datos no atribuibles a dolo o culpa grave de Gavanti.
                </p>
              </LegalSection>

              <LegalSection title="8. Suspensión y terminación">
                <p>
                  Chakana podrá suspender o cerrar cuentas por incumplimiento de estos términos,
                  uso abusivo, riesgos de seguridad o requerimiento legal. También puedes dejar de
                  usar la plataforma en cualquier momento.
                </p>
              </LegalSection>

              <LegalSection title="9. Ley aplicable y jurisdicción">
                <p>
                  Estos términos se rigen por las leyes de la{" "}
                  <strong className="text-on-surface">República del Ecuador</strong>. Cualquier
                  controversia se someterá a la jurisdicción competente en Ecuador, sin perjuicio
                  de mecanismos de resolución amistosa o alterna cuando proceda.
                </p>
              </LegalSection>

              <LegalSection title="10. Contacto">
                <p>
                  Para consultas legales, soporte o reclamos relacionados con estos términos,
                  escríbenos a:{" "}
                  <a
                    href="mailto:support@gavanti.org"
                    className="text-primary underline hover:opacity-80 transition-opacity"
                  >
                    support@gavanti.org
                  </a>.
                </p>
              </LegalSection>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display font-semibold text-on-surface text-[11px] tracking-[0.14em] uppercase mb-4">
        {title}
      </h2>
      <div className="font-body text-on-surface-variant text-sm leading-relaxed space-y-3 [&_ul]:pl-4 [&_ul]:space-y-2 [&_li]:list-disc [&_li]:marker:text-primary/40">
        {children}
      </div>
    </div>
  );
}
