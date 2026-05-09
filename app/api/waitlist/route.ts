import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { welcomeEmailHtml } from "@/app/emails/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  // 1 — Guardar en Audience (crítico: si falla, no enviamos el email)
  const { data: contact, error: contactError } = await resend.contacts.create({
    email,
    audienceId: AUDIENCE_ID,
    unsubscribed: false,
  });

  if (contactError) {
    console.error("[waitlist] contacts.create error:", contactError);
    return NextResponse.json({ error: "No se pudo registrar el correo" }, { status: 500 });
  }

  console.log("[waitlist] contact saved:", contact);

  // 2 — Enviar email de bienvenida (no bloqueante: si falla, igual devolvemos éxito)
  const { error: emailError } = await resend.emails.send({
    from: "Chakana <noreply@chakana.gavanti.org>",
    to: email,
    subject: "Ya estás en la lista · Chakana",
    html: welcomeEmailHtml(email),
    headers: {
      "List-Unsubscribe": "<{{{RESEND_UNSUBSCRIBE_URL}}}>",
    },
  });

  if (emailError) {
    console.error("[waitlist] emails.send error:", emailError);
  }

  return NextResponse.json({ success: true });
}
