import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const SERVICE_LABELS: Record<string, string> = {
  retrato: 'Retrato de mascota',
  paisaje: 'Paisaje',
  funda: 'Funda de celular',
  otro: 'Otro',
};

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const nombre = (data.get('nombre') as string | null)?.trim() ?? '';
  const contacto = (data.get('contacto') as string | null)?.trim() ?? '';
  const servicio = (data.get('servicio') as string | null) ?? '';
  const mensaje = (data.get('mensaje') as string | null)?.trim() ?? '';

  if (!nombre || !contacto || !servicio) {
    return new Response(JSON.stringify({ error: 'Campos requeridos incompletos.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const servicioLabel = SERVICE_LABELS[servicio] ?? servicio;

  const { error } = await resend.emails.send({
    from: 'Sac_Artx Web <noreply@sacart.co>',
    to: ['sacart.colombia@gmail.com'],
    replyTo: contacto.includes('@') ? contacto : undefined,
    subject: `Nueva consulta: ${servicioLabel} — ${nombre}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
        <h2 style="color:#c4714f;margin-bottom:4px">Nueva consulta desde sacart.co</h2>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Contacto:</strong> ${contacto}</p>
        <p><strong>Servicio:</strong> ${servicioLabel}</p>
        ${mensaje ? `<p><strong>Mensaje:</strong></p><p style="white-space:pre-wrap;background:#f9f6f3;padding:12px;border-radius:6px">${mensaje}</p>` : ''}
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
        <p style="font-size:12px;color:#888">Enviado desde el formulario de contacto de sacart.co</p>
      </div>
    `,
  });

  if (error) {
    return new Response(JSON.stringify({ error: 'No se pudo enviar el mensaje. Intenta de nuevo.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
