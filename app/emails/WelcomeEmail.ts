const primary     = "#A63A2F";
const primaryDeep = "#86231A";
const secondary   = "#3AAFA9";
const background  = "#F5F0EB";
const surface     = "#FDFAF7";
const surfaceLow  = "#F8F3EE";
const onSurface   = "#2E2A26";
const onVariant   = "#6B645C";
const onMuted     = "#9A938A";

export function welcomeEmailHtml(email: string): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Ya estás en la lista · Chakana</title>
</head>
<body style="margin:0;padding:0;background:${background};">
<span style="display:none;max-height:0;overflow:hidden;">Serás de los primeros en saber cuando Chakana esté lista en Cuenca.&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;&#847;&zwnj;</span>

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${background};padding:40px 16px;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;">

  <!-- HEADER -->
  <tr>
    <td style="background:linear-gradient(160deg,#1A0F0D 0%,#2C1410 45%,#1C2E2D 100%);border-radius:12px 12px 0 0;padding:40px 40px 32px;text-align:center;">
      <img src="https://chakana.gavanti.org/logo-white.svg" alt="Chakana" width="56" height="55" style="display:block;margin:0 auto 18px;"/>
      <p style="margin:0 0 8px;color:#C8C0B8;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;font-family:Arial,sans-serif;">CHAKANA · ECONOMÍA CIRCULAR</p>
      <p style="margin:0;font-size:26px;font-weight:700;font-family:Arial,sans-serif;letter-spacing:-0.01em;"><span style="color:#FFFFFF !important;text-decoration:none !important;">Ya estás en la lista.</span></p>
    </td>
  </tr>

  <!-- BODY -->
  <tr>
    <td style="background:${surface};padding:36px 40px 28px;">
      <p style="margin:0 0 12px;color:${onSurface};font-size:15px;font-family:Arial,sans-serif;">Hola,</p>
      <p style="margin:0 0 28px;color:${onVariant};font-size:14px;line-height:1.65;font-family:Arial,sans-serif;">Gracias por unirte a la lista de espera de <strong style="color:${onSurface};">Chakana</strong>. Serás de los primeros en saber cuando la app esté lista para circular en Cuenca.</p>

      <p style="margin:0 0 16px;color:${primary};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;font-weight:700;font-family:Arial,sans-serif;">LO QUE VIENE</p>

      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-bottom:14px;">
            <table cellpadding="0" cellspacing="0" border="0"><tr>
              <td style="width:10px;height:10px;background:${primary};border-radius:2px;vertical-align:top;margin-top:3px;"></td>
              <td style="width:12px;"></td>
              <td><p style="margin:0;color:${onSurface};font-size:13px;font-family:Arial,sans-serif;"><strong>Tambos participantes</strong> — Paga en locales del barrio con la app.</p></td>
            </tr></table>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom:14px;">
            <table cellpadding="0" cellspacing="0" border="0"><tr>
              <td style="width:10px;height:10px;background:${secondary};border-radius:2px;vertical-align:top;"></td>
              <td style="width:12px;"></td>
              <td><p style="margin:0;color:${onSurface};font-size:13px;font-family:Arial,sans-serif;"><strong>Aurios — crédito circular</strong> — Gana crédito y úsalo en tu próxima visita.</p></td>
            </tr></table>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom:0;">
            <table cellpadding="0" cellspacing="0" border="0"><tr>
              <td style="width:10px;height:10px;background:${primary};border-radius:2px;vertical-align:top;"></td>
              <td style="width:12px;"></td>
              <td><p style="margin:0;color:${onSurface};font-size:13px;font-family:Arial,sans-serif;"><strong>Reseñas en cadena</strong> — Tu voz queda grabada de forma permanente.</p></td>
            </tr></table>
          </td>
        </tr>
      </table>

      <div style="height:1px;background:rgba(140,133,123,0.15);margin:28px 0;"></div>

      <p style="margin:0 0 4px;color:${onVariant};font-size:13px;font-family:Arial,sans-serif;">Aquí tu apoyo vuelve. Te avisamos pronto.</p>
      <p style="margin:0;color:${onSurface};font-size:13px;font-weight:700;font-family:Arial,sans-serif;">El equipo de Chakana</p>
    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td style="background:${surfaceLow};border-top:1px solid rgba(140,133,123,0.15);border-radius:0 0 12px 12px;padding:20px 40px;text-align:center;">
      <p style="margin:0 0 12px;color:${onMuted};font-size:11px;font-family:Arial,sans-serif;">Chakana · Cuenca, Ecuador</p>
      <a href="https://chakana.gavanti.org/api/unsubscribe?email=${encodeURIComponent(email)}" style="color:${onMuted};font-size:10px;font-family:Arial,sans-serif;text-decoration:underline;opacity:0.7;">Cancelar suscripción</a>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}
