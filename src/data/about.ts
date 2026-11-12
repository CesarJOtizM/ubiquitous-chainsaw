/**
 * Copy for the about page (ES /sobre-mi, EN /about).
 *
 * Only facts already published on the site: name, studio, handle, medium,
 * subjects, WhatsApp-first process, and Colombia shipping. Prices, turnaround
 * and coverage are composed at render time from prices.ts / business.ts.
 *
 * TODO — do not render these as claims until Sara confirms them:
 * - City where the studio works (schema only publishes country CO)
 * - Year Sac_Artx started
 * - Training, exhibitions, awards, or press
 */
import type { Lang } from '../i18n/paths';

export const aboutGaps = [
  'Studio city (only country CO is published)',
  'Year the studio started',
  'Formal training, exhibitions, awards, or press',
] as const;

export interface AboutCopy {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  whoHeading: string;
  whoBody: string;
  paintsHeading: string;
  paintsIntro: string;
  paints: string[];
  orderHeading: string;
  orderIntro: string;
  orderSteps: string[];
  shipsHeading: string;
  contactHeading: string;
  contactIntro: string;
  relatedHeading: string;
  crumbHome: string;
  crumbCurrent: string;
}

export const aboutCopy: Record<Lang, AboutCopy> = {
  es: {
    h1: 'Sara Amaya Caldas',
    metaTitle: 'Sara Amaya Caldas · artista de Sac_Artx',
    metaDescription:
      'Sara Amaya Caldas es la artista colombiana de Sac_Artx (@sac_artx). Pinta retratos de mascotas en acrílico por encargo y envía a todo Colombia.',
    lead:
      'Sara Amaya Caldas es la artista colombiana de Sac_Artx (@sac_artx). Pinta a mano retratos de mascotas y paisajes en acrílico, sobre lienzo o sobre base de metacrilato, y fundas de celular personalizadas. El encargo empieza cuando envías una foto por WhatsApp.',
    whoHeading: '¿Quién es Sara Amaya Caldas?',
    whoBody:
      'Sara Amaya Caldas firma cada encargo de Sac_Artx. El trabajo del estudio se publica en Instagram, TikTok y Facebook con el usuario @sac_artx.',
    paintsHeading: '¿Qué pinta Sara Amaya Caldas?',
    paintsIntro: 'Sac_Artx pinta por encargo, desde una foto, estas piezas:',
    paints: [
      'Retratos de perros, gatos, conejos, caballos y palomas, y de cualquier otro animal.',
      'Paisajes.',
      'Fundas de celular personalizadas.',
      'Acrílico sobre lienzo.',
      'Retrato sobre base de metacrilato, con llavero corazón con el nombre.',
    ],
    orderHeading: '¿Cómo encargar un retrato a Sac_Artx?',
    orderIntro: 'El encargo sigue este orden:',
    orderSteps: [
      'Envías la foto por WhatsApp.',
      'Sac_Artx manda un boceto digital antes de pintar.',
      'Las revisiones del boceto no tienen costo.',
    ],
    shipsHeading: '¿A dónde envía Sac_Artx?',
    contactHeading: '¿Cómo contactar a Sara Amaya Caldas?',
    contactIntro: 'Escribe por WhatsApp o mira el trabajo publicado en estas cuentas.',
    relatedHeading: 'Páginas relacionadas',
    crumbHome: 'Inicio',
    crumbCurrent: 'Sobre mí',
  },
  en: {
    h1: 'Sara Amaya Caldas',
    metaTitle: 'Sara Amaya Caldas · Sac_Artx artist',
    metaDescription:
      'Sara Amaya Caldas is the Colombian artist behind Sac_Artx (@sac_artx). She hand-paints acrylic pet portraits to order and ships across Colombia.',
    lead:
      'Sara Amaya Caldas is the Colombian artist behind Sac_Artx (@sac_artx). She hand-paints pet portraits and landscapes in acrylic, on canvas or on a methacrylate base, plus custom phone cases. A commission starts when you send a photo on WhatsApp.',
    whoHeading: 'Who is Sara Amaya Caldas?',
    whoBody:
      'Sara Amaya Caldas signs every Sac_Artx commission. The studio publishes the work on Instagram, TikTok and Facebook as @sac_artx.',
    paintsHeading: 'What does Sara Amaya Caldas paint?',
    paintsIntro: 'Sac_Artx paints these pieces to order, from a photo:',
    paints: [
      'Portraits of dogs, cats, rabbits, horses and pigeons, and of any other animal.',
      'Landscapes.',
      'Custom phone cases.',
      'Acrylic on canvas.',
      'A portrait on a methacrylate base, with a heart keychain that includes the name.',
    ],
    orderHeading: 'How do you commission a portrait from Sac_Artx?',
    orderIntro: 'A commission follows this order:',
    orderSteps: [
      'You send the photo on WhatsApp.',
      'Sac_Artx sends a digital sketch before painting.',
      'Sketch revisions are free.',
    ],
    shipsHeading: 'Where does Sac_Artx ship?',
    contactHeading: 'How do you contact Sara Amaya Caldas?',
    contactIntro: 'Message on WhatsApp, or see the published work on these accounts.',
    relatedHeading: 'Related pages',
    crumbHome: 'Home',
    crumbCurrent: 'About',
  },
};
