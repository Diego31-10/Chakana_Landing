/* Tokens del design system Chakana — Ancestral Modernism */
const primary       = "#A63A2F";
const primaryDeep   = "#86231A";
const secondary     = "#3AAFA9";
const background    = "#F5F0EB"; /* Crema — page canvas */
const surface       = "#FDFAF7"; /* Blanco Cálido */
const surfaceLow    = "#F8F3EE";
const onSurface     = "#2E2A26";
const onVariant     = "#6B645C";
const onMuted       = "#9A938A";
const outline       = "rgba(140,133,123,0.15)";

const features = [
  { color: primary,   title: "Tambos participantes",      desc: "Paga en locales del barrio con la app." },
  { color: secondary, title: "Aurios — crédito circular", desc: "Gana crédito y úsalo en tu próxima visita." },
  { color: primary,   title: "Reseñas en cadena",         desc: "Tu voz queda grabada de forma permanente." },
];

export function welcomeEmailHtml(email: string): string {
  const featureRows = features.map(f => `
    <tr>
      <td style="padding-bottom:20px;vertical-align:top;">
        <table cellpadding="0" cellspacing="0" width="100%"><tbody><tr>
          <td style="width:32px;vertical-align:top;padding-top:4px;">
            <div style="width:8px;height:8px;border-radius:2px;background-color:${f.color};"></div>
          </td>
          <td>
            <p style="margin:0 0 3px;color:${onSurface};font-size:14px;font-weight:600;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:1.3;">${f.title}</p>
            <p style="margin:0;color:${onVariant};font-size:13px;line-height:1.55;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">${f.desc}</p>
          </td>
        </tr></tbody></table>
      </td>
    </tr>`).join("");

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>Ya estás en la lista · Chakana</title>
</head>
<body style="margin:0;padding:0;background-color:${background};font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <!-- Preheader oculto — rellena el preview de Gmail -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    Serás de los primeros en saber cuando Chakana esté lista. Aquí tu apoyo vuelve.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:${background};padding:48px 16px;">
    <tbody><tr><td align="center">

      <!-- Card -->
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:${surface};border-radius:12px;overflow:hidden;box-shadow:0 20px 40px rgba(134,35,26,0.07);">
        <tbody>

          <!-- ── HEADER ── -->
          <tr>
            <td style="background:linear-gradient(160deg,#1A0F0D 0%,#2C1410 40%,#1C2E2D 100%);padding:44px 44px 36px;text-align:center;">
              <img src="https://chakana.gavanti.org/logo.svg" alt="Chakana" width="60" height="59" style="display:inline-block;margin-bottom:20px;" />
              <p style="margin:0 0 10px;color:rgba(255,255,255,0.65);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;font-weight:600;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                CHAKANA · ECONOMÍA CIRCULAR
              </p>
              <h1 style="margin:0;color:#FFFFFF;font-size:30px;font-weight:700;line-height:1.15;letter-spacing:-0.02em;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                Ya estás en la lista.
              </h1>
            </td>
          </tr>

          <!-- ── BODY ── -->
          <tr>
            <td style="padding:40px 44px 32px;background-color:${surface};">

              <p style="margin:0 0 8px;color:${onSurface};font-size:16px;line-height:1.6;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                Hola,
              </p>
              <p style="margin:0 0 32px;color:${onVariant};font-size:15px;line-height:1.7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                Gracias por unirte a la lista de espera de <strong style="color:${onSurface};font-weight:600;">Chakana</strong>.
                Serás de los primeros en saber cuando la app esté lista para circular en Cuenca.
              </p>

              <!-- Eyebrow -->
              <p style="margin:0 0 20px;color:${primary};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                02 · LO QUE VIENE
              </p>

              <!-- Feature cards -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tbody>${featureRows}</tbody>
              </table>

              <!-- Divider -->
              <div style="height:1px;background-color:${outline};margin:0 0 28px;"></div>

              <p style="margin:0 0 6px;color:${onVariant};font-size:14px;line-height:1.65;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                Aquí tu apoyo vuelve. Te avisamos pronto.
              </p>
              <p style="margin:0;color:${onSurface};font-size:14px;font-weight:600;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                El equipo de Chakana
              </p>

            </td>
          </tr>

          <!-- ── FOOTER ACCENT ── -->
          <tr>
            <td style="background-color:${surfaceLow};padding:20px 44px;border-top:1px solid ${outline};">
              <table width="100%" cellpadding="0" cellspacing="0"><tbody><tr>
                <td>
                  <p style="margin:0;color:${onMuted};font-size:11px;letter-spacing:0.12em;text-transform:uppercase;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                    Chakana · Cuenca, Ecuador
                  </p>
                </td>
                <td align="right">
                  <!-- Chakana cross accent -->
                  <span style="color:${primary};font-size:16px;opacity:0.3;">✦</span>
                </td>
              </tr></tbody></table>
            </td>
          </tr>

        </tbody>
      </table>

      <!-- Sub-footer -->
      <p style="margin:24px 0 4px;color:${onMuted};font-size:11px;text-align:center;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        Recibiste este correo porque te registraste en chakana.gavanti.org
      </p>
      <p style="margin:0;font-size:11px;text-align:center;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:${onMuted};text-decoration:underline;">Cancelar suscripción</a>
      </p>

    </td></tr></tbody>
  </table>
</body>
</html>`;
}
