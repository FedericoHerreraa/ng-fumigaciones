import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function generateMessage(
    name: string,
    email: string,
    subject: string,
    message: string,
    client: boolean
) {
    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                * {
                    box-sizing: border-box;
                }
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    background: #ffffff;
                    margin: 0;
                    padding: 20px;
                    color: #1a1a1a;
                }
                .container {
                    max-width: 650px;
                    margin: 0 auto;
                    background: #ffffff;
                    border-radius: 20px;
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
                    overflow: hidden;
                    border: 1px solid #e5e5e5;
                }
                .header {
                    background: #2c5530;
                    color: #ffffff;
                    padding: 40px 30px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .header::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 70%);
                }
                .header-content {
                    position: relative;
                    z-index: 2;
                }
                .header h1 {
                    margin: 0;
                    font-size: 28px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }
                .header .subtitle {
                    font-size: 16px;
                    opacity: 0.9;
                    font-weight: 300;
                    margin: 0;
                }
                .content {
                    padding: 40px 30px;
                    background: #ffffff;
                }
                .welcome-message {
                    background: #f0f9ff;
                    border-left: 5px solid #2c5530;
                    padding: 20px 25px;
                    margin-bottom: 30px;
                    border-radius: 0 12px 12px 0;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }
                .welcome-message p {
                    margin: 0;
                    font-size: 16px;
                    color: #1a1a1a;
                    font-weight: 500;
                }
                .info-section {
                    background: #ffffff;
                    border-radius: 16px;
                    padding: 25px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                    border: 1px solid #e5e5e5;
                }
                .info-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #2c5530;
                    margin-bottom: 20px;
                    text-align: center;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #e5e5e5;
                }
                .info-item {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 16px;
                    padding: 12px 0;
                    border-bottom: 1px solid #e5e5e5;
                }
                .info-item:last-child {
                    border-bottom: none;
                    margin-bottom: 0;
                }
                .info-label {
                    font-weight: 600;
                    color: #2c5530;
                    width: 80px;
                    flex-shrink: 0;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .info-value {
                    color: #1a1a1a;
                    font-size: 15px;
                    line-height: 1.5;
                    word-break: break-word;
                }
                .message-content {
                    background: #f8fafc;
                    padding: 16px;
                    border-radius: 8px;
                    border-left: 3px solid #2c5530;
                    font-style: italic;
                    color: #1a1a1a;
                }
                .footer {
                    background: #1a1a1a;
                    color: #ffffff;
                    text-align: center;
                    padding: 30px;
                    position: relative;
                }
                .footer-content {
                    position: relative;
                    z-index: 2;
                }
                .footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at 50% 0%, rgba(44, 85, 48, 0.2) 0%, transparent 70%);
                }
                .contact-info {
                    margin-bottom: 15px;
                    font-size: 14px;
                }
                .contact-info strong {
                    color: #ffffff;
                    font-weight: 600;
                }
                .footer-note {
                    font-size: 12px;
                    opacity: 0.8;
                    line-height: 1.4;
                    color: #ffffff;
                }
                .divider {
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #2c5530, transparent);
                    margin: 20px 0;
                }
                @media (max-width: 600px) {
                    body { padding: 10px; }
                    .container { border-radius: 15px; }
                    .header, .content, .footer { padding: 25px 20px; }
                    .header h1 { font-size: 24px; }
                    .info-item { flex-direction: column; }
                    .info-label { width: auto; margin-bottom: 5px; }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="header-content">
                        <h1>Solicitud Recibida</h1>
                        <p class="subtitle">Servicios Profesionales de Desinfección</p>
                    </div>
                </div>
                
                <div class="content">
                    <div class="welcome-message">
                        <p>${client ? "¡Gracias por contactarnos! Hemos recibido tu solicitud y nuestro equipo especializado se pondrá en contacto contigo a la brevedad para coordinar el servicio." : "Se ha recibido una solicitud de contacto de un cliente desde la pagina web de NG Desinfecciones."}</p>
                    </div>
                    
                    <div class="info-section">
                        <div class="info-title">${client ? "Detalles de tu Solicitud" : "Detalles de la Solicitud"}</div>
                        
                        <div class="info-item">
                            <div class="info-label">Nombre:</div>
                            <div class="info-value">${name}</div>
                        </div>
                        
                        <div class="info-item">
                            <div class="info-label">Email:</div>
                            <div class="info-value">${email}</div>
                        </div>
                        
                        <div class="info-item">
                            <div class="info-label">Asunto:</div>
                            <div class="info-value">${subject}</div>
                        </div>
                        
                        <div class="info-item">
                            <div class="info-label">Mensaje:</div>
                            <div class="info-value">
                                <div class="message-content">${message}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="divider"></div>
                    
                    ${client ? `
                        <div style="text-align: center; color: #1a1a1a; font-size: 14px;">
                            <p><strong>Próximos pasos:</strong></p>
                            <p>• Revisaremos tu solicitud en detalle<br>
                            • Te contactaremos lo antes posible<br>
                        </div>
                    ` : ""}
                </div>
                
                <div class="footer">
                    <div class="footer-content">
                        <div class="contact-info">
                            <strong>📍 Av. Del Campo 1290, Capital Federal</strong><br>
                            <strong>📞 Teléfono: 4552-1746</strong>
                        </div>
                        <div class="footer-note">
                            Este es un mensaje automático de confirmación.<br>
                            Por favor, no responda directamente a este email.
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body

        if (!name || !email || !subject || !message) {
            return NextResponse.json({
                message: "Faltan parámetros requeridos: 'name', 'email', 'subject' o 'message'.",
                status: 400
            });
        }

        const emailUsMessage = generateMessage(
            name, 
            email,
            subject,
            message,
            false
        )

        const emailClientMessage = generateMessage(
            name, 
            email,
            subject,
            message,
            true
        )

        // Email sent to us
        await resend.emails.send({
            from: 'contacto@ngdesinfecciones.com.ar',
            to: 'info@ngdesinfecciones.com.ar',
            subject: subject,
            html: emailUsMessage
        })

        // Email sent to the client
        await resend.emails.send({
            from: 'contacto@ngdesinfecciones.com.ar',
            to: email,
            subject: 'Solicitud de contacto recibida',
            html: emailClientMessage
        })

        return NextResponse.json({ message: "Correo enviado exitosamente", status: 200 })
    } catch (error) {
        console.log("error ", error)
        return NextResponse.json({ message: "Error al enviar el correo", status: 500 })
    }
}