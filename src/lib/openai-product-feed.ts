/**
 * OpenAI product feed (CSV) for ChatGPT Business Hub.
 * One row per commission with a published, fixed COP price.
 * Quoted work and products without a confirmed price stay out:
 * the spec rejects a row that is not the amount the customer pays.
 */
import { business } from '../data/business';
import {
  basePrices,
  canvasPrices,
  casePrices,
  CURRENCY,
  LEAD_TIME_DAYS,
  type PriceRow,
} from '../data/prices';
import { productPath } from '../i18n/paths';

const FEED_COLUMNS = [
  'item_id',
  'title',
  'description',
  'url',
  'brand',
  'seller_name',
  'image_url',
  'additional_image_urls',
  'price',
  'availability',
  'group_id',
  'listing_has_variations',
  'variant_dict',
  'offer_id',
  'seller_url',
  'product_category',
  'material',
  'size',
  'condition',
  'is_eligible_search',
  'is_eligible_checkout',
] as const;

interface ProductFeedFields {
  item_id: string;
  title: string;
  description: string;
  url: string;
  brand: string;
  seller_name: string;
  image_url: string;
  additional_image_urls: string;
  price: string;
  availability: string;
  group_id: string;
  listing_has_variations: string;
  variant_dict: string;
  offer_id: string;
  seller_url: string;
  product_category: string;
  material: string;
  size: string;
  condition: string;
  is_eligible_search: string;
  is_eligible_checkout: string;
}

interface CaseFeedCopy {
  title: string;
  description: string;
  imageSrc: string;
  extraImages?: readonly string[];
  design: string;
  material: string;
  /** Published price row when this item is not itself a row in casePrices. */
  priceId?: string;
}

const CANVAS_IMAGE = '/images/cuadros-mascotas/12.jpg';
const BASE_IMAGE = '/images/bases-acrilicas/16.jpg';
const CANVAS_CATEGORY = 'Arte > Retratos de mascotas > Cuadros en acrílico';
const BASE_CATEGORY = 'Arte > Retratos de mascotas > Bases acrílicas';
const CASE_CATEGORY = 'Accesorios > Fundas de celular';

const BASE_NAMES: Record<string, string> = {
  'base-10x15': 'Base acrílica estándar',
  'base-12x18': 'Base acrílica extendida',
};

const CASE_COPY: Record<string, CaseFeedCopy> = {
  'case-flowers': {
    title: 'Funda de celular con flores prensadas',
    description:
      'Funda de celular con flores prensadas, sellada con resina. Confirmas el modelo del celular antes de empezar. Si quieres flores, pregunta qué colores hay.',
    imageSrc: '/images/case-flores/01.jpg',
    design: 'Flores prensadas',
    material: 'Flores prensadas y resina',
  },
  'case-flowers-custom': {
    title: 'Funda de celular con flores prensadas y pintura',
    description:
      'Funda de celular con flores prensadas y un diseño básico pintado, sellada con resina. Confirmas el modelo del celular antes de empezar. Si quieres flores, pregunta qué colores hay.',
    imageSrc: '/images/case-flores/02.jpg',
    design: 'Flores prensadas con pintura',
    material: 'Flores prensadas, pintura y resina',
  },
  'case-pet': {
    title: 'Funda de celular con el retrato de tu mascota',
    description:
      'Funda de celular pintada a mano con el retrato de tu mascota y sellada con resina. Incluye 1 mascota. Confirmas el modelo del celular antes de empezar.',
    imageSrc: '/images/fundas/02.jpg',
    design: 'Mascota',
    material: 'Pintura y resina',
  },
  'case-logo-anime': {
    title: 'Funda de celular con anime o logo',
    description:
      'Funda de celular pintada a mano con un anime o un logo, sellada con resina. El precio publicado es el mínimo y el valor final se cotiza según la complejidad del diseño. Confirmas el modelo del celular antes de empezar.',
    imageSrc: '/images/fundas/04.jpg',
    design: 'Anime o logo',
    material: 'Pintura y resina',
  },
  'case-custom': {
    title: 'Funda de celular personalizada',
    description:
      'Funda de celular pintada a mano con tu diseño, sellada con resina. El precio publicado es el mínimo y el valor final se cotiza según la complejidad del diseño. Confirmas el modelo del celular antes de empezar.',
    imageSrc: '/images/fundas/15.jpg',
    extraImages: ['/images/fundas/16.jpg'],
    design: 'Personalizada',
    material: 'Pintura y resina',
    priceId: 'case-logo-anime',
  },
};

function requirePrice(rows: readonly PriceRow[], id: string): number {
  const row = rows.find((item) => item.id === id);
  if (!row) throw new Error(`Precio ausente para el feed: ${id}`);
  return row.price;
}

function feedMoney(amount: number): string {
  if (!Number.isInteger(amount) || amount <= 0) {
    throw new Error(`Precio de feed inválido: ${amount}`);
  }
  return `${amount.toFixed(2)} ${CURRENCY}`;
}

/** Public JPEG. /images/ redirects; /img/ is the file Vercel serves. */
function absoluteImage(src: string): string {
  const relative = src.replace(/^\/images\//, '/img/');
  if (!relative.startsWith('/img/') || !relative.endsWith('.jpg')) {
    throw new Error(`Imagen de feed inválida: ${src}`);
  }
  return `${business.site}${relative}`;
}

function fulfillment(): string {
  const { min, max } = LEAD_TIME_DAYS;
  return `El precio es el valor del encargo. Se abona el 50% para empezar y el 50% al terminar. El plazo es de ${min} a ${max} días hábiles desde que apruebas el boceto. El envío va contra entrega con la transportadora: lo pagas cuando llega a tu casa.`;
}

const FEED_PAGE = {
  PAINTINGS: 'paintings',
  BASES: 'bases',
  CASES: 'cases',
} as const;

type FeedPage = (typeof FEED_PAGE)[keyof typeof FEED_PAGE];

function pageUrl(product: FeedPage): string {
  return `${business.site}${productPath(product, 'es')}`;
}

function canvasSizeLabel(row: PriceRow): string {
  if (!row.size) throw new Error(`El cuadro ${row.id} no tiene tamaño`);
  return row.special ? `corazón ${row.size}` : row.size;
}

function baseName(id: string): string {
  const name = BASE_NAMES[id];
  if (!name) throw new Error(`Falta el nombre de la base ${id} en el feed`);
  return name;
}

interface FeedItemInput {
  item_id: string;
  title: string;
  description: string;
  url: string;
  image_url: string;
  additional_image_urls: string;
  price: string;
  group_id: string;
  variant_dict: string;
  product_category: string;
  material: string;
  size: string;
}

function sharedFields(partial: FeedItemInput): ProductFeedFields {
  return {
    ...partial,
    brand: business.name,
    seller_name: business.name,
    seller_url: `${business.site}/`,
    availability: 'unknown',
    listing_has_variations: 'true',
    offer_id: `sacartx-${partial.item_id}`,
    condition: 'new',
    is_eligible_search: 'true',
    is_eligible_checkout: 'false',
  };
}

function buildRows(): ProductFeedFields[] {
  const canvasUrl = pageUrl(FEED_PAGE.PAINTINGS);
  const baseUrl = pageUrl(FEED_PAGE.BASES);
  const caseUrl = pageUrl(FEED_PAGE.CASES);
  const tail = fulfillment();

  const canvas = canvasPrices.map((row) => {
    const size = canvasSizeLabel(row);
    return sharedFields({
      item_id: row.id,
      title: `Cuadro en acrílico de tu mascota, ${size}`,
      description: `Acrílico sobre lienzo, tamaño ${size}, pintado a mano desde la foto de tu mascota. Incluye 1 mascota. El boceto por WhatsApp se ajusta sin costo. ${tail}`,
      url: canvasUrl,
      image_url: absoluteImage(CANVAS_IMAGE),
      additional_image_urls: '',
      price: feedMoney(row.price),
      group_id: 'canvas-pet',
      variant_dict: JSON.stringify({ size }),
      product_category: CANVAS_CATEGORY,
      material: 'Acrílico sobre lienzo',
      size,
    });
  });

  const bases = basePrices.map((row) => {
    if (!row.size) throw new Error(`La base ${row.id} no tiene tamaño`);
    const name = baseName(row.id);
    requirePrice(basePrices, row.id);
    return sharedFields({
      item_id: row.id,
      title: `${name} con el retrato de tu mascota, ${row.size}`,
      description: `${name} de ${row.size}: retrato pintado a mano sobre acrílico, con capa de resina, base de madera y llavero corazón con el nombre que elijas. Incluye 1 mascota. El boceto por WhatsApp se ajusta sin costo. ${tail}`,
      url: baseUrl,
      image_url: absoluteImage(BASE_IMAGE),
      additional_image_urls: '',
      price: feedMoney(row.price),
      group_id: 'base-acrylic',
      variant_dict: JSON.stringify({ size: row.size }),
      product_category: BASE_CATEGORY,
      material: 'Acrílico con resina y base de madera',
      size: row.size,
    });
  });

  const caseRow = (id: string, copy: CaseFeedCopy, amount: number): ProductFeedFields =>
    sharedFields({
      item_id: id,
      title: copy.title,
      description: `${copy.description} ${tail}`,
      url: caseUrl,
      image_url: absoluteImage(copy.imageSrc),
      additional_image_urls: (copy.extraImages ?? []).map((src) => absoluteImage(src)).join(','),
      price: feedMoney(amount),
      group_id: 'phone-case',
      variant_dict: JSON.stringify({ design: copy.design }),
      product_category: CASE_CATEGORY,
      material: copy.material,
      size: '',
    });

  const cases = casePrices.flatMap((row) => {
    const copy = CASE_COPY[row.id];
    if (!copy) {
      if (row.from) return [];
      throw new Error(`Falta la funda ${row.id} en el feed`);
    }
    return [caseRow(row.id, copy, row.price)];
  });

  const extraCases = Object.entries(CASE_COPY)
    .filter(([id]) => !casePrices.some((row) => row.id === id))
    .map(([id, copy]) => {
      if (!copy.priceId) throw new Error(`La funda ${id} no tiene precio`);
      return caseRow(id, copy, requirePrice(casePrices, copy.priceId));
    });

  return [...canvas, ...bases, ...cases, ...extraCases];
}

const FEED_KIND = {
  ALL: 'all',
  CANVAS: 'canvas',
  BASES: 'bases',
  CASES: 'cases',
} as const;

type FeedKind = (typeof FEED_KIND)[keyof typeof FEED_KIND];

const FEED_GROUP = {
  [FEED_KIND.CANVAS]: 'canvas-pet',
  [FEED_KIND.BASES]: 'base-acrylic',
  [FEED_KIND.CASES]: 'phone-case',
} as const;

function assertRows(rows: ProductFeedFields[], kind: FeedKind): void {
  const ids = new Set<string>();
  const variants = new Set<string>();

  if (rows.length === 0) throw new Error(`El feed ${kind} quedó vacío`);

  for (const row of rows) {
    if (ids.has(row.item_id)) throw new Error(`item_id repetido: ${row.item_id}`);
    ids.add(row.item_id);
    if (row.title.length > 150) throw new Error(`Título demasiado largo: ${row.item_id}`);
    if (row.description.length > 5000) throw new Error(`Descripción demasiado larga: ${row.item_id}`);
    if (!row.url.startsWith('https://') || !row.image_url.startsWith('https://')) {
      throw new Error(`URL inválida: ${row.item_id}`);
    }
    const variantKey = `${row.group_id}:${row.variant_dict}`;
    if (variants.has(variantKey)) throw new Error(`Variante repetida: ${variantKey}`);
    variants.add(variantKey);
    const copy = CASE_COPY[row.item_id];
    const priceId = copy?.priceId ?? row.item_id;
    if (row.price !== feedMoney(requirePrice([...canvasPrices, ...basePrices, ...casePrices], priceId))) {
      throw new Error(`El precio del feed no coincide con prices.ts: ${row.item_id}`);
    }
  }

  const expect = (present: boolean, id: string) => {
    if (present && !ids.has(id)) throw new Error(`El precio ${id} no está en el feed ${kind}`);
  };
  const canvas = kind === FEED_KIND.ALL || kind === FEED_KIND.CANVAS;
  const bases = kind === FEED_KIND.ALL || kind === FEED_KIND.BASES;
  const cases = kind === FEED_KIND.ALL || kind === FEED_KIND.CASES;
  for (const row of canvasPrices) expect(canvas, row.id);
  for (const row of basePrices) expect(bases, row.id);
  for (const row of casePrices) {
    if (row.from && !CASE_COPY[row.id]) continue;
    expect(cases, row.id);
  }
  if (cases) {
    for (const id of Object.keys(CASE_COPY)) expect(true, id);
  }
}

function csvCell(value: string): string {
  if (/[",\r\n]/.test(value)) return `"${value.replaceAll('"', '""')}"`;
  return value;
}

export { FEED_KIND };

/**
 * CSV for one product line, or the full catalog when kind is all.
 * A partial file is a complete snapshot of that line only.
 * Search stays on and checkout stays off. Availability stays unknown
 * because each piece is painted to order.
 */
function rowsFor(kind: FeedKind): ProductFeedFields[] {
  const rows = buildRows();
  if (kind === FEED_KIND.ALL) return rows;
  const groupId = FEED_GROUP[kind];
  return rows.filter((row) => row.group_id === groupId);
}

export function buildOpenAiProductFeed(kind: FeedKind = FEED_KIND.ALL): string {
  const rows = rowsFor(kind);
  assertRows(rows, kind);
  const header = FEED_COLUMNS.join(',');
  const body = rows.map((row) => FEED_COLUMNS.map((column) => csvCell(row[column])).join(','));
  return `${header}\n${body.join('\n')}\n`;
}
