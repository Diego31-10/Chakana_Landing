"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLang } from "@/app/lib/i18n";

export default function PrivacyPolicy() {
  const { t } = useLang();
  const priv = t.privacy;

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-24 px-4">
          <div className="max-w-5xl mx-auto">

            <p className="font-body font-semibold text-[11px] tracking-[0.18em] uppercase text-primary mb-4">
              {priv.eyebrow}
            </p>
            <h1 className="font-display font-bold text-on-surface text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-[-0.02em] mb-2">
              {priv.title}
            </h1>
            <p className="font-body text-xs text-on-surface-muted mb-12">
              {priv.updated}
            </p>

            <div className="space-y-10">

              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                {priv.intro}
              </p>

              {priv.sections.map((section) => (
                <LegalSection key={section.title} title={section.title}>
                  {"content" in section && section.content ? (
                    (section.content as readonly string[]).map((p, i) =>
                      "email" in section && i === (section.content as readonly string[]).length - 1 ? (
                        <p key={i}>
                          {p}
                          <a href={`mailto:${section.email}`} className="text-primary underline hover:opacity-80 transition-opacity">
                            {section.email as string}
                          </a>.
                        </p>
                      ) : (
                        <p key={i}>{p}</p>
                      )
                    )
                  ) : null}
                  {"items" in section && section.items ? (
                    <ul>
                      {(section.items as readonly string[]).map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  ) : null}
                  {"closing" in section && section.closing ? (
                    <p>{section.closing as string}</p>
                  ) : null}
                </LegalSection>
              ))}

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
