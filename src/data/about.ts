/**
 * Copy for the about page (ES /sobre-mi, EN /about).
 *
 * The story is Sara's own account (first painting in 2006, the phone-case
 * course, a friend suggesting pet portraits). The name is written Sac_Artx,
 * like the rest of the site.
 *
 * Still unpublished, so the page does not claim them:
 * - City where the studio works (schema only publishes country CO)
 * - The year Sac_Artx became a business (2006 is her first painting)
 * - Named schools, exhibitions, awards, or press
 */
import type { Lang } from '../i18n/paths';

export const aboutGaps = [
  'Studio city (only country CO is published)',
  'Year Sac_Artx became a business (2006 is the first painting, not the studio)',
  'Named schools, exhibitions, awards, or press',
] as const;

export interface AboutImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface AboutChapter {
  index: string;
  kicker: string;
  title: string;
  paragraphs: string[];
  images: AboutImage[];
  /** split: text and one photo. pair: two early paintings. wide: a screenshot that needs to stay readable. close: the last note beside a vertical piece. */
  layout: 'split' | 'pair' | 'wide' | 'close';
  /** image-end keeps the photo on the right. image-start moves it to the left on wide screens. */
  side: 'image-end' | 'image-start';
}

export interface AboutCopy {
  metaTitle: string;
  metaDescription: string;
  storyTitle: string;
  chapters: AboutChapter[];
  cta: string;
  relatedHeading: string;
  crumbHome: string;
  crumbCurrent: string;
  crumbLabel: string;
}

const images = {
  studio: '/images/sobre-mi/sara-estudio.jpg',
  landscape: '/images/sobre-mi/paisaje-2006.jpg',
  fruit: '/images/sobre-mi/frutas-2006.jpg',
  case: '/images/sobre-mi/funda.jpg',
  messages: '/images/sobre-mi/mensajes.jpg',
  painting: '/images/sobre-mi/pintando.jpg',
  flowers: '/images/sobre-mi/flores.jpg',
} as const;

export const aboutPortrait = images.studio;

export const aboutCopy: Record<Lang, AboutCopy> = {
  es: {
    metaTitle: 'Sara Amaya · la historia de Sac_Artx',
    metaDescription:
      'Sara Amaya cuenta cómo nació Sac_Artx: su primer cuadro en 2006, las fundas pintadas a mano y los retratos de mascotas que empezaron como un pasatiempo.',
    storyTitle: 'La historia detrás de Sac_Artx',
    cta: 'Escríbeme por WhatsApp',
    relatedHeading: 'También te puede servir',
    crumbHome: 'Inicio',
    crumbCurrent: 'Sobre mí',
    crumbLabel: 'Miga de pan',
    chapters: [
      {
        index: '01',
        kicker: 'Presentación',
        title: '¡Hola! Soy Sara ♡',
        layout: 'split',
        side: 'image-end',
        paragraphs: [
          'Soy Sara Amaya, artista y la persona detrás de este pequeño universo de colores, pinceles y creatividad.',
          'Desde siempre he sentido una conexión especial con la pintura. Lo que comenzó como un pasatiempo se convirtió, sin darme cuenta, en una parte muy importante de mi vida y hoy es el proyecto que me permite compartir mi amor por el arte con otras personas.',
        ],
        images: [
          {
            src: images.studio,
            alt: 'Sara Amaya en su estudio, sentada frente al escritorio con un pincel en la mano. Detrás, el computador muestra la foto de un perro que está usando de referencia.',
          },
        ],
      },
      {
        index: '02',
        kicker: 'Mis inicios',
        title: 'El arte ha estado conmigo desde pequeña',
        layout: 'pair',
        side: 'image-start',
        paragraphs: [
          'Mi primer cuadro lo pinté en el año 2006. En ese entonces me gustaba experimentar con paisajes, frutas, flores y diferentes motivos. ¡Todavía conservo algunos de esos trabajos y me da muchísima nostalgia verlos después de tantos años!',
          'Nunca dejé de sentir curiosidad por la pintura. Fui aprendiendo a través de la práctica, la experimentación y también tomando algunos cursos que me ayudaron a descubrir nuevas técnicas y seguir mejorando.',
        ],
        images: [
          {
            src: images.landscape,
            alt: 'Cuadro de un paisaje con una casa de techo rojo, árboles y montañas, firmado SARA/06.',
            caption: 'Paisaje, 2006',
          },
          {
            src: images.fruit,
            alt: 'Cuadro de una manzana verde, una papaya y un mango sobre un fondo naranja, firmado SARA/06.',
            caption: 'Bodegón, 2006',
          },
        ],
      },
      {
        index: '03',
        kicker: 'Cómo nació Sac_Artx',
        title: 'Un pasatiempo que se convirtió en emprendimiento',
        layout: 'split',
        side: 'image-end',
        paragraphs: [
          'Curiosamente, Sac_Artx no nació con la idea de ser un negocio. Al principio creé este espacio para compartir las cosas que hacía y los proyectos que iba pintando.',
          'En una ocasión tomé un curso para aprender a pintar cases para celular porque quería hacer uno para mí. Poco a poco fui compartiendo mis creaciones y, casi sin esperarlo, comenzaron a llegar los primeros pedidos.',
          'Una amiga me animó a intentar pintar mascotas y decidí probar. Me gustó tanto el resultado como la experiencia que poco a poco los retratos de peluditos empezaron a convertirse en una parte muy especial de este proyecto.',
          'Y así, algo que comenzó como un hobby terminó convirtiéndose en mi emprendimiento. ¡Definitivamente no estaba en mis planes iniciales!',
        ],
        images: [
          {
            src: images.case,
            alt: 'Sara Amaya sonríe mientras muestra una funda de celular pintada a mano, con un corazón de colores, flores y una mariposa.',
          },
        ],
      },
      {
        index: '04',
        kicker: 'Lo que más disfruto',
        title: 'Mucho más que pintar',
        layout: 'wide',
        side: 'image-end',
        paragraphs: [
          'Si hay algo que disfruto muchísimo de este trabajo es ver las reacciones de las personas cuando reciben sus pedidos.',
          'Leer sus mensajes, ver su emoción y saber que pude convertir una idea, una fotografía o un recuerdo en algo especial es de mis partes favoritas de todo esto.',
          'Me encanta saber que detrás de cada encargo hay una historia y que mis pinturas pueden formar parte de ella.',
        ],
        images: [
          {
            src: images.messages,
            alt: 'Collage de mensajes de WhatsApp en los que clientes agradecen sus cuadros y fundas de Sac_Artx.',
            caption: 'Mensajes de quienes reciben sus pedidos',
          },
        ],
      },
      {
        index: '05',
        kicker: 'El lado real de ser artista',
        title: 'También sigo aprendiendo en el camino',
        layout: 'split',
        side: 'image-start',
        paragraphs: [
          'No todo es tan sencillo como parece. Una de mis mayores dificultades ha sido aprender a manejar la frustración cuando una pintura no queda como la imaginaba o cuando siento que algo no está saliendo bien.',
          'A veces incluso me preocupo por el resultado antes de comenzar. ¡Sí, me pasa! jajaja.',
          'Pero he aprendido que el arte también requiere paciencia, confianza y permitirse experimentar. Siempre hay algo nuevo por aprender y cada proyecto me deja una enseñanza que me ayuda a seguir creciendo.',
        ],
        images: [
          {
            src: images.painting,
            alt: 'Vista desde arriba de Sara pintando un retrato de un perro blanco entre nubes, con la foto de referencia en el celular y los pinceles alrededor.',
          },
        ],
      },
      {
        index: '06',
        kicker: 'Cierre',
        title: 'Gracias por ser parte de esta historia ♡',
        layout: 'close',
        side: 'image-end',
        paragraphs: [
          'Hoy Sac_Artx es mucho más que un espacio para mostrar pinturas. Es un proyecto que ha crecido conmigo, que me ha permitido conocer personas, descubrir nuevas posibilidades y convertir ideas en piezas hechas a mano.',
          'Gracias por confiar en mi trabajo, por apoyar el arte independiente y por permitirme ser parte de sus historias a través de mis creaciones.',
          '¡Qué bonito que estés aquí!',
        ],
        images: [
          {
            src: images.flowers,
            alt: 'Cuadro vertical de una planta con flores durazno, pintado en tres paneles y enmarcado en madera.',
          },
        ],
      },
    ],
  },
  en: {
    metaTitle: 'Sara Amaya · the story of Sac_Artx',
    metaDescription:
      'Sara Amaya tells how Sac_Artx began: her first painting in 2006, hand-painted phone cases, and the pet portraits that grew out of a hobby.',
    storyTitle: 'The story behind Sac_Artx',
    cta: 'Message me on WhatsApp',
    relatedHeading: 'You may also like',
    crumbHome: 'Home',
    crumbCurrent: 'About',
    crumbLabel: 'Breadcrumb',
    chapters: [
      {
        index: '01',
        kicker: 'Introduction',
        title: "Hi! I'm Sara ♡",
        layout: 'split',
        side: 'image-end',
        paragraphs: [
          "I'm Sara Amaya, the artist behind this small universe of color, brushes, and creativity.",
          'I have felt a special connection with painting for as long as I can remember. What started as a hobby became, without my noticing, a very important part of my life. Today it is the project that lets me share my love of art with other people.',
        ],
        images: [
          {
            src: images.studio,
            alt: 'Sara Amaya in her studio, seated at her desk with a brush in her hand. Behind her, the computer shows the photo of a dog she is using as a reference.',
          },
        ],
      },
      {
        index: '02',
        kicker: 'My beginnings',
        title: 'Art has been with me since I was little',
        layout: 'pair',
        side: 'image-start',
        paragraphs: [
          'I painted my first picture in 2006. Back then I liked experimenting with landscapes, fruit, flowers, and other subjects. I still keep some of those pieces, and it fills me with nostalgia to see them after so many years.',
          'I never stopped being curious about painting. I learned through practice, experimentation, and a few courses that helped me discover new techniques and keep improving.',
        ],
        images: [
          {
            src: images.landscape,
            alt: 'Painting of a landscape with a red-roofed house, trees, and mountains, signed SARA/06.',
            caption: 'Landscape, 2006',
          },
          {
            src: images.fruit,
            alt: 'Painting of a green apple, a papaya, and a mango on an orange background, signed SARA/06.',
            caption: 'Still life, 2006',
          },
        ],
      },
      {
        index: '03',
        kicker: 'How Sac_Artx began',
        title: 'A hobby that became a small business',
        layout: 'split',
        side: 'image-end',
        paragraphs: [
          'Curiously, Sac_Artx did not start as a business idea. At first I created this space to share the things I made and the projects I was painting.',
          'At one point I took a course to learn how to paint phone cases, because I wanted to make one for myself. Little by little I shared what I made and, almost without expecting it, the first orders started to arrive.',
          'A friend encouraged me to try painting pets, and I decided to give it a go. I loved the result and the experience so much that, bit by bit, pet portraits became a very special part of this project.',
          'And so something that began as a hobby ended up becoming my business. It was definitely not in my original plans.',
        ],
        images: [
          {
            src: images.case,
            alt: 'Sara Amaya smiles while holding up a hand-painted phone case with a colorful heart, flowers, and a butterfly.',
          },
        ],
      },
      {
        index: '04',
        kicker: 'What I enjoy most',
        title: 'Much more than painting',
        layout: 'wide',
        side: 'image-end',
        paragraphs: [
          "If there is one thing I enjoy enormously about this work, it is seeing people's reactions when they receive their orders.",
          'Reading their messages, seeing their emotion, and knowing I could turn an idea, a photograph, or a memory into something special is one of my favorite parts of all this.',
          'I love knowing that behind every commission there is a story, and that my paintings can be part of it.',
        ],
        images: [
          {
            src: images.messages,
            alt: 'Collage of WhatsApp messages from clients thanking Sac_Artx for their paintings and phone cases.',
            caption: 'Messages from people receiving their orders',
          },
        ],
      },
      {
        index: '05',
        kicker: 'The real side of being an artist',
        title: 'I am still learning along the way',
        layout: 'split',
        side: 'image-start',
        paragraphs: [
          'Not everything is as simple as it looks. One of my biggest difficulties has been learning to handle the frustration when a painting does not turn out the way I imagined, or when I feel that something is not going well.',
          'Sometimes I even worry about the result before I begin. Yes, it happens to me.',
          'But I have learned that art also takes patience, trust, and room to experiment. There is always something new to learn, and every project leaves me a lesson that helps me keep growing.',
        ],
        images: [
          {
            src: images.painting,
            alt: 'Overhead view of Sara painting a portrait of a white dog among clouds, with the reference photo on a phone and brushes around the canvas.',
          },
        ],
      },
      {
        index: '06',
        kicker: 'Closing',
        title: 'Thank you for being part of this story ♡',
        layout: 'close',
        side: 'image-end',
        paragraphs: [
          'Today Sac_Artx is much more than a place to show paintings. It is a project that has grown with me. It has let me meet people, discover new possibilities, and turn ideas into pieces made by hand.',
          'Thank you for trusting my work, for supporting independent art, and for letting me be part of your stories through what I make.',
          "How lovely that you're here.",
        ],
        images: [
          {
            src: images.flowers,
            alt: 'Vertical painting of a plant with peach-colored flowers, painted across three panels and set in a wooden frame.',
          },
        ],
      },
    ],
  },
};
