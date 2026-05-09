const terra = "#9E392D";
const teal = "#37AFB4";
const bg = "#F5F2EE";
const surface = "#FAFAF8";
const onSurface = "#1C1917";
const muted = "#78716C";

const features = [
  { color: terra, title: "Tambos participantes", desc: "Paga en locales del barrio con la app." },
  { color: teal,  title: "Aurios — crédito circular", desc: "Gana crédito y úsalo en tu próxima visita." },
  { color: terra, title: "Reseñas en cadena", desc: "Tu voz queda grabada de forma permanente." },
];

export function welcomeEmailHtml(email: string): string {
  const featureRows = features.map(f => `
    <tr>
      <td style="padding-bottom:16px;vertical-align:top;">
        <table cellpadding="0" cellspacing="0" width="100%"><tbody><tr>
          <td style="width:28px;vertical-align:top;padding-top:3px;">
            <span style="color:${f.color};font-size:9px;">&#9670;</span>
          </td>
          <td>
            <p style="margin:0 0 2px;color:${onSurface};font-size:14px;font-weight:600;font-family:sans-serif;">${f.title}</p>
            <p style="margin:0;color:${muted};font-size:13px;line-height:1.5;font-family:sans-serif;">${f.desc}</p>
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
<body style="margin:0;padding:0;background-color:${bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <!-- Preheader: visible en preview, oculto visualmente -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    Serás de los primeros en saber cuando Chakana esté lista. Aquí tu apoyo vuelve.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:${bg};padding:40px 16px;">
    <tbody><tr><td align="center">

      <!-- Card -->
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:${surface};border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(30,20,10,0.08);">
        <tbody>

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,${terra} 0%,#7B2A20 60%,${teal} 100%);padding:40px 40px 32px;text-align:center;">
              <!-- Logo -->
              <div style="margin-bottom:20px;">
                <img src="https://chakana.gavanti.org/logo.svg" alt="Chakana" width="64" height="63" style="display:inline-block;" />
              </div>
              <p style="margin:0 0 8px;color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;font-family:sans-serif;">CHAKANA · ECONOMÍA CIRCULAR</p>
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;line-height:1.2;letter-spacing:-0.02em;font-family:sans-serif;">Ya estás en la lista.</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 16px;color:${onSurface};font-size:16px;line-height:1.6;font-family:sans-serif;">Hola,</p>
              <p style="margin:0 0 24px;color:${muted};font-size:15px;line-height:1.7;font-family:sans-serif;">
                Gracias por unirte a la lista de espera de <strong style="color:${onSurface};">Chakana</strong>.
                Serás de los primeros en saber cuando la app esté lista para circular en Cuenca.
              </p>

              <div style="height:1px;background-color:rgba(140,133,123,0.15);margin:24px 0;"></div>

              <p style="margin:0 0 16px;color:${muted};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;font-weight:600;font-family:sans-serif;">Lo que viene</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tbody>${featureRows}</tbody>
              </table>

              <div style="height:1px;background-color:rgba(140,133,123,0.15);margin:24px 0;"></div>

              <p style="margin:0;color:${muted};font-size:13px;line-height:1.6;font-family:sans-serif;">Aquí tu apoyo vuelve. Te avisamos pronto.</p>
              <p style="margin:12px 0 0;color:${onSurface};font-size:14px;font-weight:600;font-family:sans-serif;">El equipo de Chakana</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:linear-gradient(90deg,${terra}18 0%,${teal}18 100%);padding:20px 40px;border-top:1px solid rgba(140,133,123,0.12);">
              <table width="100%" cellpadding="0" cellspacing="0"><tbody><tr>
                <td><p style="margin:0;color:${muted};font-size:11px;letter-spacing:0.1em;text-transform:uppercase;font-family:sans-serif;">Chakana · Cuenca, Ecuador</p></td>
                <td align="right"><p style="margin:0;color:rgba(140,133,123,0.5);font-size:10px;font-family:sans-serif;">${email}</p></td>
              </tr></tbody></table>
            </td>
          </tr>

        </tbody>
      </table>

      <p style="margin-top:24px;color:rgba(140,133,123,0.5);font-size:11px;text-align:center;font-family:sans-serif;">
        Recibiste este correo porque te registraste en chakana.gavanti.org
      </p>

    </td></tr></tbody>
  </table>
</body>
</html>`;
}
