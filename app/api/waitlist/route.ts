import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { WelcomeEmail } from "@/app/emails/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  try {
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    await resend.emails.send({
      from: `Chakana <${process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev"}>`,
      to: email,
      subject: "Ya estás en la lista · Chakana",
      react: WelcomeEmail({ email }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al registrar" }, { status: 500 });
  }
}
