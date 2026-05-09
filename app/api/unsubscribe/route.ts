import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");

  if (!email) {
    return new NextResponse("Email requerido", { status: 400 });
  }

  const { error } = await resend.contacts.update({
    email,
    audienceId: AUDIENCE_ID,
    unsubscribed: true,
  });

  if (error) {
    console.error("[unsubscribe] error:", error);
    return new NextResponse(unsubscribePage("error"), {
      status: 500,
      headers: { "Content-Type": "text/html" },
    });
  }

  return new NextResponse(unsubscribePage("success"), {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}

function unsubscribePage(state: "success" | "error") {
  const bg = "#F5F0EB";
  const primary = "#A63A2F";
  const onSurface = "#2E2A26";
  const onVariant = "#6B645C";

  const message =
    state === "success"
      ? { title: "Suscripción cancelada", body: "Tu correo fue eliminado de nuestra lista. No recibirás más emails de Chakana." }
      : { title: "Algo salió mal", body: "No pudimos procesar tu solicitud. Intenta de nuevo más tarde." };

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>${message.title} · Chakana</title>
</head>
<body style="margin:0;padding:0;background:${bg};font-family:Arial,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;">
<div style="text-align:center;padding:48px 24px;max-width:400px;">
  <img src="https://chakana.gavanti.org/logo.svg" alt="Chakana" width="56" height="55" style="display:block;margin:0 auto 24px;"/>
  <h1 style="margin:0 0 12px;color:${onSurface};font-size:22px;font-weight:700;">${message.title}</h1>
  <p style="margin:0 0 32px;color:${onVariant};font-size:14px;line-height:1.6;">${message.body}</p>
  <a href="https://chakana.gavanti.org" style="display:inline-flex;flex-direction:column;align-items:center;gap:6px;color:${primary};font-size:13px;text-decoration:none;">
    <span>Volver a chakana.gavanti.org</span>
  </a>
</div>
</body>
</html>`;
}
