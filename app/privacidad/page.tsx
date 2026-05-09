import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad · Chakana",
  description: "Cómo Gavanti recopila, usa y protege tus datos personales en la plataforma Chakana.",
};

export default function PrivacyPolicy() {
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
              Política de Privacidad
            </h1>
            <p className="font-body text-xs text-on-surface-muted mb-12">
              Última actualización: 9 de mayo de 2026
            </p>

            <div className="space-y-10">

              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Esta Política de Privacidad explica cómo{" "}
                <strong className="text-on-surface">Gavanti</strong>, operador de Chakana, recopila,
                usa, conserva y protege datos personales cuando usas la plataforma.
              </p>

              <LegalSection title="1. Qué datos recopilamos">
                <ul>
                  <li><strong className="text-on-surface">Datos de cuenta:</strong> correo electrónico, nombre visible, rol/perfil y credenciales de acceso.</li>
                  <li><strong className="text-on-surface">Datos de perfil:</strong> información que agregues en tu cuenta o en tu tambú.</li>
                  <li><strong className="text-on-surface">Datos Web3:</strong> direcciones públicas de wallet y metadatos de transacciones asociadas al uso del servicio.</li>
                  <li><strong className="text-on-surface">Datos de reseñas y contenido:</strong> textos enviados, sellos de tiempo y registros técnicos vinculados.</li>
                  <li><strong className="text-on-surface">Datos de pago:</strong> información de cobro gestionada por Stripe (identificadores de cliente/pago, estado de transacción y metadatos de orden). Chakana no almacena números completos de tarjeta.</li>
                  <li><strong className="text-on-surface">Datos técnicos:</strong> logs, eventos de uso, datos de dispositivo, cookies y analítica básica.</li>
                </ul>
              </LegalSection>

              <LegalSection title="2. Cómo usamos tus datos">
                <ul>
                  <li>Crear y administrar cuentas, autenticación y seguridad de sesión.</li>
                  <li>Prestar funcionalidades centrales (reseñas, recompensas, reportes y operación de tambús).</li>
                  <li>Procesar pagos, conciliaciones y prevención de fraude.</li>
                  <li>Mejorar producto, calidad del servicio y soporte al usuario.</li>
                  <li>Cumplir obligaciones legales, regulatorias y de seguridad.</li>
                </ul>
              </LegalSection>

              <LegalSection title="3. Bases de procesamiento y consentimiento">
                <p>
                  Tratamos datos cuando es necesario para ejecutar la relación contractual de uso de
                  Chakana, para cumplir obligaciones legales, para intereses legítimos de operación
                  y seguridad, y/o con tu consentimiento cuando corresponda.
                </p>
              </LegalSection>

              <LegalSection title="4. Encargados y terceros procesadores">
                <p>
                  Podemos compartir datos con proveedores necesarios para la operación del servicio,
                  entre ellos:
                </p>
                <ul>
                  <li><strong className="text-on-surface">Stripe</strong> para procesamiento de pagos.</li>
                  <li><strong className="text-on-surface">Supabase</strong> para autenticación, base de datos, almacenamiento y funciones backend.</li>
                  <li><strong className="text-on-surface">Proveedores de correo</strong> para notificaciones transaccionales y comunicaciones de servicio.</li>
                  <li><strong className="text-on-surface">Servicios de infraestructura y blockchain</strong> para operación técnica y verificación de eventos.</li>
                </ul>
                <p>
                  Exigimos medidas contractuales y técnicas razonables de seguridad a nuestros
                  proveedores, pero cada tercero opera bajo sus propias políticas de privacidad.
                </p>
              </LegalSection>

              <LegalSection title="5. Retención, acceso y eliminación">
                <p>
                  Conservamos los datos solo por el tiempo necesario para los fines descritos, y por
                  periodos adicionales cuando la ley lo exija (por ejemplo, temas contables, fiscales
                  o de seguridad).
                </p>
                <p>
                  Puedes solicitar acceso, rectificación, actualización o eliminación de tus datos
                  personales. Cuando exista obligación legal o técnica de conservar ciertos registros
                  (por ejemplo, trazas contables o referencias públicas on-chain), limitaremos el
                  tratamiento según corresponda.
                </p>
              </LegalSection>

              <LegalSection title="6. Comunicaciones y cumplimiento CAN-SPAM / GDPR">
                <ul>
                  <li>Los correos promocionales incluirán mecanismos de baja (unsubscribe) claros y funcionales.</li>
                  <li>Atendemos solicitudes de oposición al marketing directo y preferencias de comunicación.</li>
                  <li>Para usuarios en jurisdicciones aplicables, respetamos derechos equivalentes a GDPR: acceso, rectificación, supresión, limitación, portabilidad y oposición.</li>
                </ul>
              </LegalSection>

              <LegalSection title="7. Cookies y analítica">
                <p>
                  Usamos cookies y tecnologías similares para autenticación, funcionamiento de
                  sesión, preferencias de usuario, seguridad y métricas de uso. Puedes gestionar
                  cookies desde la configuración de tu navegador o dispositivo, teniendo en cuenta
                  que deshabilitarlas puede afectar funcionalidades del servicio.
                </p>
              </LegalSection>

              <LegalSection title="8. Seguridad de la información">
                <p>
                  Aplicamos medidas administrativas, técnicas y organizativas razonables para
                  proteger datos personales. Aun así, ningún sistema es totalmente infalible; por
                  ello recomendamos usar contraseñas robustas, mantener tus credenciales seguras y
                  proteger tu wallet.
                </p>
              </LegalSection>

              <LegalSection title="9. Transferencias internacionales">
                <p>
                  Algunos proveedores pueden procesar datos fuera de Ecuador. En esos casos,
                  procuramos salvaguardas adecuadas y estándares razonables de protección de datos.
                </p>
              </LegalSection>

              <LegalSection title="10. Menores de edad">
                <p>
                  Chakana no está dirigido a menores sin supervisión legal aplicable. Si
                  identificamos tratamiento indebido de datos de menores, tomaremos medidas de
                  bloqueo o eliminación.
                </p>
              </LegalSection>

              <LegalSection title="11. Cambios a esta política">
                <p>
                  Podemos actualizar esta política para reflejar cambios legales, técnicos o de
                  producto. Publicaremos la versión vigente con su fecha de actualización.
                </p>
              </LegalSection>

              <LegalSection title="12. Contacto para solicitudes de datos">
                <p>
                  Para ejercer tus derechos de privacidad, consultas o solicitudes de eliminación,
                  contáctanos en:{" "}
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
