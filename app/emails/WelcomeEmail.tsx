import * as React from "react";

interface Props {
  email: string;
}

export function WelcomeEmail({ email }: Props) {
  const terra = "#9E392D";
  const teal = "#37AFB4";
  const bg = "#F5F2EE";
  const surface = "#FAFAF8";
  const onSurface = "#1C1917";
  const muted = "#78716C";

  return (
    <html lang="es">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ya estás en la lista · Chakana</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: bg,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        {/* Wrapper */}
        <table
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{ backgroundColor: bg, padding: "40px 16px" }}
        >
          <tbody>
            <tr>
              <td align="center">
                {/* Card */}
                <table
                  width="100%"
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    maxWidth: 560,
                    backgroundColor: surface,
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(30,20,10,0.08)",
                  }}
                >
                  <tbody>
                    {/* Header band */}
                    <tr>
                      <td
                        style={{
                          background: `linear-gradient(135deg, ${terra} 0%, #7B2A20 60%, ${teal} 100%)`,
                          padding: "40px 40px 32px",
                          textAlign: "center" as const,
                        }}
                      >
                        {/* Logo SVG inline */}
                        <div style={{ marginBottom: 20 }}>
                          <svg
                            width="64"
                            height="63"
                            viewBox="0 0 112 110"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ display: "inline-block" }}
                          >
                            <g clipPath="url(#a)">
                              <path
                                d="M85.77 51.16c3.86-.41 8.42.06 12.34-.15 14.23-.77 11.78 12.19 11.8 21.73-2.32.12-5.57.01-7.99.01-2.59.01-6.4.13-8.9-.07.47 4.91-.03 12.4.17 17.72-5.13-.37-12.79.41-17.55-.09.14 6 .13 12.09-.13 18.12-4.91-.27-12.3-.21-17.14-.02 2.2-1.94 3.38-3.86 4.35-6.6 2.11-.02 4.23.01 6.34.09-.25-5.67-.03-12.22-.12-18.03 1.54.07 3.38.04 4.94.05 4.12.04 8.29-.04 12.42-.02l-.06-17.74c4.9.34 11.7.05 16.85.12-.1-1.98.33-6.32-.93-7.85-.28-.33-1.46-.75-1.93-.76-4.35-.08-8.73-.05-13.08-.06-5.27-.02-6.17 4.15-8.19 7.98-1.01 1.9-2.27 3.65-3.73 5.23-2.77 2.94-6.27 5.24-10.13 6.45-.39.12-2.88 1.01-3.16.55-1.34-2.18-2.53-3.91-4.33-5.75 6.39-.53 12.53-3.61 15.4-9.46 3.07-6.27 4.63-10.3 12.52-11.48Z"
                                fill="rgba(255,255,255,0.9)"
                              />
                              <path
                                d="M40.05 55.08c.39.4.39 2.21.61 2.94.74 3.14 2 5.48 4 7.92 3.74 4.57 8.58 4.51 12.63 8.57 1.65 1.66 2.82 3.73 3.41 6 .86 3.42.31 11.96.49 15.84.2 3.61-.23 6.7-2.99 9.34-3.92 3.75-12.74 2.6-18.02 2.6-.01-5.93-.1-12.1.01-18-.09.15-2.18.05-3.88.07-3.98.04-8.01-.09-11.98.07.49-5.42-.35-12.51.2-17.72L6.13 72.72C5.96 69.75 6.05 66.13 6.05 63.1c-.01-2.52.01-5.04.01-7.56 1.88 2.14 3.58 3.08 6.24 3.84.25 1.57.16 5.19.14 6.93 1.53-.12 4.43-.01 6.06 0 3.55.02 7.11.01 10.66-.02-.28 5.62.32 12.37.04 17.75 2.14-.16 5.09-.05 7.29-.04 3.35.02 6.7-.02 10.04-.11-.29 5.22.03 12.65-.04 18.1 2.05-.27 4.22.2 6.25-.27.53-.12 1.15-.38 1.44-.87 1-1.72.66-16.62-.03-19.14-1.06-3.82-5.36-4.88-8.45-6.63-6.09-3.45-9.73-9.44-11.55-16.03 2.19-1.06 3.97-2.49 5.9-3.96Z"
                                fill="rgba(255,255,255,0.9)"
                              />
                              <path
                                d="M55.81 43.76c5.86-1.17 11.56 2.64 12.72 8.5 1.16 5.87-2.66 11.56-8.53 12.71-5.85 1.14-11.52-2.67-12.68-8.52-1.16-5.85 2.64-11.53 8.49-12.69Zm3.07 17.78c3.98-.55 6.74-4.24 6.16-8.21-.58-3.97-4.28-6.71-8.25-6.11-3.93.6-6.64 4.26-6.07 8.19.58 3.93 4.22 6.67 8.16 6.12Z"
                                fill="rgba(255,255,255,0.95)"
                              />
                            </g>
                          </svg>
                        </div>
                        <p
                          style={{
                            margin: 0,
                            color: "rgba(255,255,255,0.7)",
                            fontSize: 11,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase" as const,
                            fontWeight: 600,
                            marginBottom: 8,
                          }}
                        >
                          CHAKANA · ECONOMÍA CIRCULAR
                        </p>
                        <h1
                          style={{
                            margin: 0,
                            color: "#FFFFFF",
                            fontSize: 28,
                            fontWeight: 700,
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          Ya estás en la lista.
                        </h1>
                      </td>
                    </tr>

                    {/* Body */}
                    <tr>
                      <td style={{ padding: "40px 40px 32px" }}>
                        <p
                          style={{
                            margin: "0 0 16px",
                            color: onSurface,
                            fontSize: 16,
                            lineHeight: 1.6,
                          }}
                        >
                          Hola,
                        </p>
                        <p
                          style={{
                            margin: "0 0 24px",
                            color: muted,
                            fontSize: 15,
                            lineHeight: 1.7,
                          }}
                        >
                          Gracias por unirte a la lista de espera de{" "}
                          <strong style={{ color: onSurface }}>Chakana</strong>.
                          Serás de los primeros en saber cuando la app esté
                          lista para circular en Cuenca.
                        </p>

                        {/* Divider */}
                        <div
                          style={{
                            height: 1,
                            backgroundColor: "rgba(140,133,123,0.15)",
                            margin: "24px 0",
                          }}
                        />

                        {/* Feature pills */}
                        <p
                          style={{
                            margin: "0 0 16px",
                            color: muted,
                            fontSize: 11,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase" as const,
                            fontWeight: 600,
                          }}
                        >
                          Lo que viene
                        </p>
                        <table
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          style={{ marginBottom: 24 }}
                        >
                          <tbody>
                            {[
                              {
                                icon: "◆",
                                color: terra,
                                title: "Tambos participantes",
                                desc: "Paga en locales del barrio con la app.",
                              },
                              {
                                icon: "◆",
                                color: teal,
                                title: "Aurios — crédito circular",
                                desc: "Gana crédito y úsalo en tu próxima visita.",
                              },
                              {
                                icon: "◆",
                                color: terra,
                                title: "Reseñas en cadena",
                                desc: "Tu voz queda grabada de forma permanente.",
                              },
                            ].map((item, i) => (
                              <tr key={i}>
                                <td
                                  style={{
                                    paddingBottom: 16,
                                    verticalAlign: "top",
                                  }}
                                >
                                  <table
                                    cellPadding={0}
                                    cellSpacing={0}
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style={{
                                            width: 32,
                                            verticalAlign: "top",
                                            paddingTop: 2,
                                          }}
                                        >
                                          <span
                                            style={{
                                              color: item.color,
                                              fontSize: 10,
                                            }}
                                          >
                                            {item.icon}
                                          </span>
                                        </td>
                                        <td>
                                          <p
                                            style={{
                                              margin: "0 0 2px",
                                              color: onSurface,
                                              fontSize: 14,
                                              fontWeight: 600,
                                            }}
                                          >
                                            {item.title}
                                          </p>
                                          <p
                                            style={{
                                              margin: 0,
                                              color: muted,
                                              fontSize: 13,
                                              lineHeight: 1.5,
                                            }}
                                          >
                                            {item.desc}
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        {/* Divider */}
                        <div
                          style={{
                            height: 1,
                            backgroundColor: "rgba(140,133,123,0.15)",
                            margin: "24px 0",
                          }}
                        />

                        <p
                          style={{
                            margin: 0,
                            color: muted,
                            fontSize: 13,
                            lineHeight: 1.6,
                          }}
                        >
                          Aquí tu apoyo vuelve. Te avisamos pronto.
                        </p>
                        <p
                          style={{
                            margin: "12px 0 0",
                            color: onSurface,
                            fontSize: 14,
                            fontWeight: 600,
                          }}
                        >
                          El equipo de Chakana
                        </p>
                      </td>
                    </tr>

                    {/* Andean footer accent */}
                    <tr>
                      <td
                        style={{
                          background: `linear-gradient(90deg, ${terra}18 0%, ${teal}18 100%)`,
                          padding: "20px 40px",
                          borderTop: `1px solid rgba(140,133,123,0.12)`,
                        }}
                      >
                        <table width="100%" cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td>
                                <p
                                  style={{
                                    margin: 0,
                                    color: muted,
                                    fontSize: 11,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase" as const,
                                  }}
                                >
                                  Chakana · Cuenca, Ecuador
                                </p>
                              </td>
                              <td align="right">
                                <p
                                  style={{
                                    margin: 0,
                                    color: "rgba(140,133,123,0.5)",
                                    fontSize: 10,
                                  }}
                                >
                                  {email}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Sub-footer */}
                <p
                  style={{
                    marginTop: 24,
                    color: "rgba(140,133,123,0.5)",
                    fontSize: 11,
                    textAlign: "center" as const,
                  }}
                >
                  Recibiste este correo porque te registraste en chakana.app
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
