import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function generateMessage(
    name: string,
    email: string,
    subject: string,
    message: string
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
                    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                    margin: 0;
                    padding: 20px;
                    color: #334155;
                }
                .container {
                    max-width: 650px;
                    margin: 0 auto;
                    background: #ffffff;
                    border-radius: 20px;
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
                    overflow: hidden;
                    border: 1px solid rgba(74, 107, 77, 0.1);
                }
                .header {
                    background: linear-gradient(135deg, #2c5530 0%, #4a6b4d 100%);
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
                    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%);
                }
                .header-content {
                    position: relative;
                    z-index: 2;
                }
                .logo-placeholder {
                    width: 80px;
                    height: 80px;
                    background: white;
                    border-radius: 50%;
                    margin: 0 auto 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
                    font-size: 24px;
                    font-weight: bold;
                    color: #4a6b4d;
                }
                .header h1 {
                    margin: 0;
                    font-size: 28px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .header .subtitle {
                    font-size: 16px;
                    opacity: 0.9;
                    font-weight: 300;
                    margin: 0;
                }
                .content {
                    padding: 40px 30px;
                    background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
                }
                .welcome-message {
                    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                    border-left: 5px solid #4a6b4d;
                    padding: 20px 25px;
                    margin-bottom: 30px;
                    border-radius: 0 12px 12px 0;
                    box-shadow: 0 4px 12px rgba(74, 107, 77, 0.1);
                }
                .welcome-message p {
                    margin: 0;
                    font-size: 16px;
                    color: #1e293b;
                    font-weight: 500;
                }
                .info-section {
                    background: #ffffff;
                    border-radius: 16px;
                    padding: 25px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                    border: 1px solid #e2e8f0;
                }
                .info-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #2c5530;
                    margin-bottom: 20px;
                    text-align: center;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #e2e8f0;
                }
                .info-item {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 16px;
                    padding: 12px 0;
                    border-bottom: 1px solid #f1f5f9;
                }
                .info-item:last-child {
                    border-bottom: none;
                    margin-bottom: 0;
                }
                .info-label {
                    font-weight: 600;
                    color: #4a6b4d;
                    width: 80px;
                    flex-shrink: 0;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .info-value {
                    color: #334155;
                    font-size: 15px;
                    line-height: 1.5;
                    word-break: break-word;
                }
                .message-content {
                    background: #f8fafc;
                    padding: 16px;
                    border-radius: 8px;
                    border-left: 3px solid #4a6b4d;
                    font-style: italic;
                }
                .footer {
                    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                    color: #cbd5e1;
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
                    background: radial-gradient(circle at 50% 0%, rgba(74, 107, 77, 0.1) 0%, transparent 70%);
                }
                .contact-info {
                    margin-bottom: 15px;
                    font-size: 14px;
                }
                .contact-info strong {
                    color: #a7f3d0;
                    font-weight: 600;
                }
                .footer-note {
                    font-size: 12px;
                    opacity: 0.8;
                    line-height: 1.4;
                }
                .divider {
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #4a6b4d, transparent);
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
                        <div class="logo-placeholder">🏠</div>
                        <h1>Solicitud Recibida</h1>
                        <p class="subtitle">Servicios Profesionales de Fumigación</p>
                    </div>
                </div>
                
                <div class="content">
                    <div class="welcome-message">
                        <p>¡Gracias por contactarnos! Hemos recibido tu solicitud y nuestro equipo especializado se pondrá en contacto contigo a la brevedad para coordinar el servicio.</p>
                    </div>
                    
                    <div class="info-section">
                        <div class="info-title">Detalles de tu Solicitud</div>
                        
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
                    
                    <div style="text-align: center; color: #64748b; font-size: 14px;">
                        <p><strong>Próximos pasos:</strong></p>
                        <p>• Revisaremos tu solicitud en detalle<br>
                        • Te contactaremos en las próximas 24 horas<br>
                        • Coordinaremos una inspección inicial sin costo</p>
                    </div>
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

        const emailClientMessage = generateMessage(
            name, 
            email,
            subject,
            message
        )

        // const emailUsMessage = generateMessage(
        //     name, 
        //     email,
        //     subject,
        //     message
        // )

        // Email sent to us
        await resend.emails.send({
            from: email,
            to: 'info@ngdesinfecciones.com.ar',
            subject: subject,
            html: emailClientMessage
        })

        // Email sent to the client
        // await resend.emails.send({
        //     from: 'info@ngdesinfecciones.com.ar',
        //     to: email,
        //     subject: 'Solicitud de contacto recibida',
        //     html: emailUsMessage
        // })

        return NextResponse.json({ message: "Correo enviado exitosamente", status: 200 })
    } catch (error) {
        console.log("error ", error)
        return NextResponse.json({ message: "Error al enviar el correo", status: 500 })
    }
}