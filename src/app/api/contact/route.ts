import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, email, praxis, fachrichtung, nachricht } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name und E-Mail sind erforderlich." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "anavio Kontaktformular <onboarding@resend.dev>",
      to: "philippluca@hotmail.com",
      subject: `Neue Demo-Anfrage von ${name}`,
      replyTo: email,
      html: `
        <h2>Neue Demo-Anfrage über anavio.de</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">E-Mail</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Praxis</td><td style="padding:8px;">${praxis || "–"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Fachrichtung</td><td style="padding:8px;">${fachrichtung || "–"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Nachricht</td><td style="padding:8px;">${nachricht || "–"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Fehler beim Senden." },
      { status: 500 },
    );
  }
}
