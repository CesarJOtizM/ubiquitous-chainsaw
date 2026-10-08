export type PrivacyPart = {
  text: string;
  href?: string;
  external?: boolean;
  emphasis?: boolean;
};

export type PrivacyBlock =
  | { type: 'p'; parts: PrivacyPart[] }
  | { type: 'ul'; items: PrivacyPart[][] };

export type PrivacySection = {
  id: string;
  title: string;
  blocks: PrivacyBlock[];
};

export type PrivacyCopy = {
  label: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  crumb: string;
  updated: string;
  intro: string;
  sections: PrivacySection[];
};

const GA_OPT_OUT = 'https://tools.google.com/dlpage/gaoptout';
const SIC = 'https://www.sic.gov.co/';
const WHATSAPP = 'https://wa.me/573016584401';

export const privacyCopy: Record<'es' | 'en', PrivacyCopy> = {
  es: {
    label: 'Datos personales',
    title: 'Política de privacidad',
    metaTitle: 'Política de privacidad · Sac_Artx',
    metaDescription:
      'Qué datos recoge Sac_Artx, las cookies de Google Analytics y cómo pedir que corrijamos o borremos tu información.',
    crumb: 'Privacidad',
    updated: 'Actualizada el 7 de octubre de 2026',
    intro:
      'Esta página dice qué datos personales trata Sac_Artx en sacartx.art, para qué los usa y cómo pedir que los corrijamos o los borremos. Está hecha para cumplir la Ley 1581 de 2012.',
    sections: [
      {
        id: 'responsable',
        title: 'Quién responde por tus datos',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'Sac_Artx es el estudio de Sara Amaya Caldas, en Colombia. Sara es la responsable del tratamiento.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              { text: 'Para preguntar por tus datos o ejercer tus derechos, escríbenos por WhatsApp al ' },
              { text: '+57 301 6584401', href: WHATSAPP, external: true },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'datos',
        title: 'Qué datos recogemos',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'Si usas el formulario de contacto, pedimos tu nombre, tu correo, el tipo de encargo y, si quieres, un mensaje. Los usamos solo para responderte. El mensaje se envía por correo con Resend y llega al estudio. No vendemos esos datos ni los usamos para publicidad.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'Este sitio no pide datos de pago ni documentos. El anticipo y el saldo se acuerdan por fuera, por Nequi, Daviplata, transferencia o efectivo.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'Si nos escribes por WhatsApp, Instagram, TikTok o Facebook, sales de este sitio. Esos servicios tratan tus datos con su propia política.',
              },
            ],
          },
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies, analítica y alojamiento',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'Utilizamos Google Analytics 4 (GA4) para conocer de forma estadística cómo se utiliza el sitio. Esto permite saber, por ejemplo, cuántas personas lo visitan, qué páginas consultan, el país o la ubicación aproximada, el tipo de dispositivo y el origen de las visitas.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'Google Analytics puede utilizar cookies y tecnologías similares, como la cookie _ga, para realizar estas mediciones.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              { text: 'El identificador de medición de Google Analytics es ' },
              { text: 'G-DGVQ013LLR', emphasis: true },
              { text: '.' },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'La información recopilada mediante Google Analytics se utiliza para analizar y mejorar el sitio. No utilizamos Google Analytics para mostrar publicidad personalizada desde este sitio.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'El sitio está alojado y desplegado mediante Vercel. Como proveedor de infraestructura, Vercel puede procesar determinados datos técnicos necesarios para entregar el sitio, mantener su funcionamiento, detectar errores y proteger la infraestructura frente a abusos o amenazas.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'Vercel puede generar registros técnicos relacionados con las solicitudes hechas al sitio. Esos registros pueden incluir direcciones IP, información del navegador, el dispositivo y datos de la conexión. El tratamiento de esa información también está sujeto a las políticas y condiciones de Vercel.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'No utilizamos Vercel Web Analytics para medir las visitas del sitio.',
              },
            ],
          },
        ],
      },
      {
        id: 'optout',
        title: 'Cómo dejar de ser medido',
        blocks: [
          {
            type: 'ul',
            items: [
              [
                { text: 'Instala el complemento de inhabilitación de Google Analytics: ' },
                { text: 'tools.google.com/dlpage/gaoptout', href: GA_OPT_OUT, external: true },
                { text: '.' },
              ],
              [
                {
                  text: 'O bloquea y borra las cookies de sacartx.art en tu navegador. Si las bloqueas, el sitio sigue funcionando.',
                },
              ],
            ],
          },
        ],
      },
      {
        id: 'derechos',
        title: 'Tus derechos',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'Según la Ley 1581 de 2012 puedes conocer, actualizar y rectificar tus datos, pedir prueba de esta autorización, saber cómo los hemos usado, revocarla y solicitar que los suprimamos cuando no haya un deber legal de conservarlos.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              { text: 'Escríbenos por ' },
              { text: 'WhatsApp', href: WHATSAPP, external: true },
              {
                text: ' con tu nombre y qué pides. Si no estás de acuerdo con la respuesta, puedes quejarte ante la Superintendencia de Industria y Comercio: ',
              },
              { text: 'sic.gov.co', href: SIC, external: true },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'procedimiento',
        title: 'Consultas y reclamos',
        blocks: [
          {
            type: 'p',
            parts: [
              { text: 'Escríbenos por ' },
              { text: 'WhatsApp', href: WHATSAPP, external: true },
              {
                text: '. En el mensaje incluye tu nombre, un medio para responderte y qué pides.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'Si preguntas qué datos tenemos o cómo los usamos, respondemos en un máximo de 10 días hábiles. Si no alcanzamos, te avisamos el motivo y respondemos dentro de los 5 días hábiles siguientes.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'Si pides corregir, borrar o revocar la autorización, respondemos en un máximo de 15 días hábiles. Si no alcanzamos, te avisamos el motivo y respondemos dentro de los 8 días hábiles siguientes. Si el mensaje está incompleto, te pedimos completarlo dentro de los 5 días siguientes. Si pasan 2 meses sin que lo completes, entendemos que desistes.',
              },
            ],
          },
        ],
      },
      {
        id: 'encargados',
        title: 'Quién más trata los datos',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'Para responder el formulario usamos Resend, que envía el correo al estudio. Para medir visitas usamos Google. Para alojar y entregar el sitio usamos Vercel. Esos proveedores pueden tratar los datos fuera de Colombia, solo para prestar ese servicio. No los autorizamos a usarlos para su propia publicidad.',
              },
            ],
          },
        ],
      },
      {
        id: 'conservacion',
        title: 'Cuánto tiempo los guardamos',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'Las consultas del formulario se conservan el tiempo necesario para responder y, si hay un encargo, para llevarlo. Esas consultas se envían por correo con Resend. No armamos una base aparte con las visitas: esa medición la guarda Google Analytics según su política. Los registros técnicos del alojamiento los trata Vercel según sus propias condiciones.',
              },
            ],
          },
        ],
      },
      {
        id: 'cambios',
        title: 'Cambios',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'Si esta política cambia, actualizamos la fecha de esta página.',
              },
            ],
          },
        ],
      },
    ],
  },
  en: {
    label: 'Personal data',
    title: 'Privacy policy',
    metaTitle: 'Privacy policy · Sac_Artx',
    metaDescription:
      'What data Sac_Artx collects, the Google Analytics cookies, and how to ask us to correct or delete your information.',
    crumb: 'Privacy',
    updated: 'Updated October 7, 2026',
    intro:
      'This page explains what personal data Sac_Artx processes on sacartx.art, why we use it, and how to ask us to correct or delete it. It follows Colombia’s Law 1581 of 2012.',
    sections: [
      {
        id: 'responsable',
        title: 'Who is responsible for your data',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'Sac_Artx is Sara Amaya Caldas’s studio in Colombia. Sara is the data controller.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              { text: 'To ask about your data or use your rights, message us on WhatsApp at ' },
              { text: '+57 301 6584401', href: WHATSAPP, external: true },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'datos',
        title: 'What we collect',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'If you use the contact form, we ask for your name, email, the type of commission and, if you want, a message. We use that only to reply. The message is emailed through Resend and reaches the studio. We do not sell this information or use it for advertising.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'This site does not ask for payment details or identity documents. The deposit and the balance are arranged off the site, by Nequi, Daviplata, bank transfer, or cash.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'If you write to us on WhatsApp, Instagram, TikTok, or Facebook, you leave this site. Those services process your data under their own policies.',
              },
            ],
          },
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies, analytics, and hosting',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'We use Google Analytics 4 (GA4) to understand, in statistical terms, how the site is used. This shows, for example, how many people visit, which pages they open, the approximate country or location, the device type, and where visits come from.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'Google Analytics may use cookies and similar technologies, such as the _ga cookie, to make these measurements.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              { text: 'The Google Analytics measurement ID is ' },
              { text: 'G-DGVQ013LLR', emphasis: true },
              { text: '.' },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'Information collected through Google Analytics is used to analyze and improve the site. We do not use Google Analytics to show personalized advertising from this site.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'The site is hosted and deployed with Vercel. As an infrastructure provider, Vercel may process certain technical data needed to deliver the site, keep it running, detect errors, and protect the infrastructure against abuse or threats.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'Vercel may generate technical logs related to requests made to the site. Those logs may include IP addresses, browser information, the device, and connection-related data. Processing of that information is also subject to Vercel’s policies and terms.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'We do not use Vercel Web Analytics to measure visits to the site.',
              },
            ],
          },
        ],
      },
      {
        id: 'optout',
        title: 'How to stop being measured',
        blocks: [
          {
            type: 'ul',
            items: [
              [
                { text: 'Install the Google Analytics opt-out add-on: ' },
                { text: 'tools.google.com/dlpage/gaoptout', href: GA_OPT_OUT, external: true },
                { text: '.' },
              ],
              [
                {
                  text: 'Or block and delete sacartx.art cookies in your browser. The site still works if you block them.',
                },
              ],
            ],
          },
        ],
      },
      {
        id: 'derechos',
        title: 'Your rights',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'Under Law 1581 of 2012 you can access, update, and correct your data, ask for proof of this authorization, know how we have used it, revoke the authorization, and ask us to delete it when the law does not require us to keep it.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              { text: 'Message us on ' },
              { text: 'WhatsApp', href: WHATSAPP, external: true },
              {
                text: ' with your name and what you are asking for. If you disagree with the answer, you can complain to Colombia’s Superintendence of Industry and Commerce: ',
              },
              { text: 'sic.gov.co', href: SIC, external: true },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'procedimiento',
        title: 'Questions and complaints',
        blocks: [
          {
            type: 'p',
            parts: [
              { text: 'Message us on ' },
              { text: 'WhatsApp', href: WHATSAPP, external: true },
              {
                text: '. Include your name, a way to reply to you, and what you are asking for.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'If you ask what data we hold or how we use it, we reply within 10 business days. If we cannot, we tell you why and reply within the following 5 business days.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: 'If you ask us to correct or delete your data, or to revoke the authorization, we reply within 15 business days. If we cannot, we tell you why and reply within the following 8 business days. If the message is incomplete, we ask you to complete it within the next 5 days. If 2 months pass without that, we treat the request as withdrawn.',
              },
            ],
          },
        ],
      },
      {
        id: 'encargados',
        title: 'Who else processes the data',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'To reply to the form we use Resend, which emails the studio. To measure visits we use Google. To host and deliver the site we use Vercel. Those providers may process the data outside Colombia, only to provide that service. We do not authorize them to use it for their own advertising.',
              },
            ],
          },
        ],
      },
      {
        id: 'conservacion',
        title: 'How long we keep it',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'Form inquiries are kept for as long as we need to reply and, if there is a commission, to complete it. Those inquiries are emailed through Resend. We do not keep a separate copy of visit measurements: Google Analytics stores that measurement under its own policy. Technical hosting logs are handled by Vercel under Vercel’s terms.',
              },
            ],
          },
        ],
      },
      {
        id: 'cambios',
        title: 'Changes',
        blocks: [
          {
            type: 'p',
            parts: [
              {
                text: 'If this policy changes, we update the date on this page.',
              },
            ],
          },
        ],
      },
    ],
  },
};
