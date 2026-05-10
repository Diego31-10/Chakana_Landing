import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/app/lib/i18n";

export const metadata: Metadata = {
  title: "Chakana · Ecosistema de Economía Circular",
  description:
    "Aquí tu apoyo vuelve. Una plataforma de economía circular para el barrio de Cuenca, Ecuador.",
  openGraph: {
    title: "Chakana · Ecosistema de Economía Circular",
    description: "Aquí tu apoyo vuelve.",
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
