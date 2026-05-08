import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
