/**
 * Google Merchant Center product file (UTF-8, tab-separated).
 * One primary data source for the whole catalog.
 * Quoted work stays out: Google requires the price the customer pays.
 * Shipping stays out of the file. Colombia is paid to the carrier on delivery,
 * and that cost is not a product price we can invent here.
 */
import { business } from '../data/business';
import { basePrices, canvasPrices, casePrices, CURRENCY, type PriceRow } from '../data/prices';
import { productPath } from '../i18n/paths';

const AVAILABILITY = {
  IN_STOCK: 'in_stock',
} as const;

const CONDITION = {
  NEW: 'new',
} as const;

const IDENTIFIER_EXISTS = {
  NO: 'no',
} as const;

const GOOGLE_CATEGORY = {
  VISUAL_ARTWORK: '500044',
  ARTWORK: '9',
  PHONE_CASE: '2353',
} as const;

const GROUP = {
  CANVAS: 'canvas-pet',
  BASE: 'base-acrylic',
} as const;

const FEED_COLUMNS = [
  'id',
  'title',
  'description',
  'link',
  'image_link',
  'availability',
  'price',
  'brand',
  'condition',
  'identifier_exists',
  'google_product_category',
  'product_type',
  'item_group_id',
  'item_group_title',
  'size',
  'material',
] as const;

type FeedColumn = (typeof FEED_COLUMNS)[number];

interface MerchantRow {
  id: string;
  title: string;
  description: string;
  link: string;
  image_link: string;
  availability: string;
  price: string;
  brand: string;
  condition: string;
  identifier_exists: string;
  google_product_category: string;
  product_type: string;
  item_group_id: string;
  item_group_title: string;
  size: string;
  material: string;
}

interface CaseCopy {
  title: string;
  description: string;
  imageSrc: string;
  material: string;
}

const CANVAS_IMAGE = '/images/cuadros-mascotas/12.jpg';
const BASE_IMAGE = '/images/bases-acrilicas/16.jpg';
const CANVAS_TYPE = 'Arte > Retratos de mascotas > Cuadros en acrílico';
const BASE_TYPE = 'Arte > Retratos de mascotas > Bases acrílicas';
const CASE_TYPE = 'Accesorios > Fundas de celular';
const CANVAS_GROUP_TITLE = 'Cuadro en acrílico de tu mascota';
const BASE_GROUP_TITLE = 'Base acrílica con el retrato de tu mascota';

const BASE_NAMES: Record<string, string> = {
  'base-10x15': 'Base acrílica estándar',
  'base-12x18': 'Base acrílica extendida',
};

const CASE_COPY: Record<string, CaseCopy> = {
  'case-flowers': {
    title: 'Funda de celular con flores prensadas',
    description:
      'Funda de celular con flores prensadas, sellada con resina. Confirmas el modelo del celular antes de empezar.',
    imageSrc: '/images/case-flores/01.jpg',
    material: 'Flores prensadas/resina',
  },
  'case-flowers-custom': {
    title: 'Funda de celular con flores prensadas y pintura',
    description:
      'Funda de celular con flores prensadas y un diseño básico pintado, sellada con resina. Confirmas el modelo del celular antes de empezar.',
    imageSrc: '/images/case-flores/02.jpg',
    material: 'Flores prensadas/pintura/resina',
  },
  'case-pet': {
    title: 'Funda de celular con el retrato de tu mascota',
    description:
      'Funda de celular pintada a mano con el retrato de tu mascota y sellada con resina. Incluye 1 mascota. Confirmas el modelo del celular antes de empezar.',
    imageSrc: '/images/fundas/02.jpg',
    material: 'Pintura/resina',
  },
};

function requirePrice(rows: readonly PriceRow[], id: string): number {
  const row = rows.find((item) => item.id === id);
  if (!row) throw new Error(`Precio ausente para Merchant Center: ${id}`);
  return row.price;
}

function feedMoney(amount: number): string {
  if (!Number.isInteger(amount) || amount <= 0) {
    throw new Error(`Precio de Merchant Center inválido: ${amount}`);
  }
  return `${amount.toFixed(2)} ${CURRENCY}`;
}

/** Public JPEG. /images/ redirects; /img/ is the file Vercel serves. */
function absoluteImage(src: string): string {
  const relative = src.replace(/^\/images\//, '/img/');
  if (!relative.startsWith('/img/') || !relative.endsWith('.jpg')) {
    throw new Error(`Imagen de Merchant Center inválida: ${src}`);
  }
  return `${business.site}${relative}`;
}

const PAGE = {
  PAINTINGS: 'paintings',
  BASES: 'bases',
  CASES: 'cases',
} as const;

type ProductPage = (typeof PAGE)[keyof typeof PAGE];

function pageUrl(product: ProductPage): string {
  return `${business.site}${productPath(product, 'es')}`;
}

function baseName(id: string): string {
  const name = BASE_NAMES[id];
  if (!name) throw new Error(`Falta el nombre de la base ${id} en Merchant Center`);
  return name;
}

interface RowInput {
  id: string;
  title: string;
  description: string;
  link: string;
  image_link: string;
  price: string;
  google_product_category: string;
  product_type: string;
  item_group_id: string;
  item_group_title: string;
  size: string;
  material: string;
}

function sharedFields(partial: RowInput): MerchantRow {
  return {
    ...partial,
    availability: AVAILABILITY.IN_STOCK,
    brand: business.name,
    condition: CONDITION.NEW,
    identifier_exists: IDENTIFIER_EXISTS.NO,
  };
}

function buildRows(): MerchantRow[] {
  const canvasUrl = pageUrl(PAGE.PAINTINGS);
  const baseUrl = pageUrl(PAGE.BASES);
  const caseUrl = pageUrl(PAGE.CASES);

  const canvas = canvasPrices.map((row) => {
    if (!row.size) throw new Error(`El cuadro ${row.id} no tiene tamaño`);
    const size = row.special ? `corazón ${row.size}` : row.size;
    const shape = row.special ? 'en forma de corazón, ' : '';
    return sharedFields({
      id: row.id,
      title: `${CANVAS_GROUP_TITLE}, ${size}`,
      description: `Acrílico sobre lienzo ${shape}de ${row.size}, pintado a mano desde la foto de tu mascota. Incluye 1 mascota. El boceto por WhatsApp se ajusta sin costo.`,
      link: canvasUrl,
      image_link: absoluteImage(CANVAS_IMAGE),
      price: feedMoney(row.price),
      google_product_category: GOOGLE_CATEGORY.VISUAL_ARTWORK,
      product_type: CANVAS_TYPE,
      item_group_id: GROUP.CANVAS,
      item_group_title: CANVAS_GROUP_TITLE,
      size,
      material: 'Acrílico/lienzo',
    });
  });

  const bases = basePrices.map((row) => {
    if (!row.size) throw new Error(`La base ${row.id} no tiene tamaño`);
    const name = baseName(row.id);
    return sharedFields({
      id: row.id,
      title: `${name} con el retrato de tu mascota, ${row.size}`,
      description: `${name} de ${row.size}: retrato pintado a mano sobre acrílico, con capa de resina, base de madera y llavero corazón con el nombre que elijas. Incluye 1 mascota. El boceto por WhatsApp se ajusta sin costo.`,
      link: baseUrl,
      image_link: absoluteImage(BASE_IMAGE),
      price: feedMoney(row.price),
      google_product_category: GOOGLE_CATEGORY.ARTWORK,
      product_type: BASE_TYPE,
      item_group_id: GROUP.BASE,
      item_group_title: BASE_GROUP_TITLE,
      size: row.size,
      material: 'Acrílico/resina/madera',
    });
  });

  const cases = casePrices.flatMap((row) => {
    if (row.from) return [];
    const copy = CASE_COPY[row.id];
    if (!copy) throw new Error(`Falta la funda ${row.id} en Merchant Center`);
    return [
      sharedFields({
        id: row.id,
        title: copy.title,
        description: copy.description,
        link: caseUrl,
        image_link: absoluteImage(copy.imageSrc),
        price: feedMoney(row.price),
        google_product_category: GOOGLE_CATEGORY.PHONE_CASE,
        product_type: CASE_TYPE,
        item_group_id: '',
        item_group_title: '',
        size: '',
        material: copy.material,
      }),
    ];
  });

  return [...canvas, ...bases, ...cases];
}

function assertRows(rows: MerchantRow[]): void {
  const ids = new Set<string>();
  const sizesByGroup = new Map<string, Set<string>>();
  const titleByGroup = new Map<string, string>();

  if (rows.length === 0) throw new Error('El archivo de Merchant Center quedó vacío');

  for (const row of rows) {
    if (ids.has(row.id)) throw new Error(`id repetido: ${row.id}`);
    ids.add(row.id);
    if (row.id.length > 50) throw new Error(`id demasiado largo: ${row.id}`);
    if (row.title.length > 150) throw new Error(`Título demasiado largo: ${row.id}`);
    if (row.description.length > 5000) throw new Error(`Descripción demasiado larga: ${row.id}`);
    if (row.brand.length > 70) throw new Error(`Marca demasiado larga: ${row.id}`);
    if (!row.link.startsWith('https://') || !row.image_link.startsWith('https://')) {
      throw new Error(`URL inválida: ${row.id}`);
    }
    if (row.availability !== AVAILABILITY.IN_STOCK) throw new Error(`Disponibilidad inválida: ${row.id}`);
    if (row.condition !== CONDITION.NEW) throw new Error(`Estado inválido: ${row.id}`);
    if (row.identifier_exists !== IDENTIFIER_EXISTS.NO) {
      throw new Error(`identifier_exists inválido: ${row.id}`);
    }
    if (!/^\d+\.\d{2} COP$/.test(row.price)) throw new Error(`Precio mal formado: ${row.id}`);
    for (const column of FEED_COLUMNS) {
      if (/[\t\r\n]/.test(row[column])) throw new Error(`El campo ${column} tiene un salto o tabulación: ${row.id}`);
    }
    if (row.price !== feedMoney(requirePrice([...canvasPrices, ...basePrices, ...casePrices], row.id))) {
      throw new Error(`El precio no coincide con prices.ts: ${row.id}`);
    }
    if (!row.item_group_id) continue;
    const sizes = sizesByGroup.get(row.item_group_id) ?? new Set<string>();
    if (!row.size || sizes.has(row.size)) throw new Error(`Tamaño de variante inválido: ${row.id}`);
    sizes.add(row.size);
    sizesByGroup.set(row.item_group_id, sizes);
    const groupTitle = titleByGroup.get(row.item_group_id);
    if (groupTitle === undefined) titleByGroup.set(row.item_group_id, row.item_group_title);
    else if (groupTitle !== row.item_group_title) {
      throw new Error(`item_group_title distinto en ${row.item_group_id}`);
    }
  }

  for (const row of canvasPrices) {
    if (!ids.has(row.id)) throw new Error(`El cuadro ${row.id} no está en Merchant Center`);
  }
  for (const row of basePrices) {
    if (!ids.has(row.id)) throw new Error(`La base ${row.id} no está en Merchant Center`);
  }
  for (const row of casePrices) {
    const present = ids.has(row.id);
    if (row.from && present) throw new Error(`La funda cotizada ${row.id} no debe ir a Merchant Center`);
    if (!row.from && !present) throw new Error(`La funda ${row.id} no está en Merchant Center`);
  }
}

/**
 * UTF-8 TSV for Merchant Center.
 * Availability is in_stock because the landing page schema says the commission can be ordered.
 * identifier_exists is no: these pieces have no GTIN and no manufacturer part number.
 */
export function buildMerchantProductFeed(): string {
  const rows = buildRows();
  assertRows(rows);
  const header = FEED_COLUMNS.join('\t');
  const body = rows.map((row) => FEED_COLUMNS.map((column: FeedColumn) => row[column]).join('\t'));
  return `${header}\n${body.join('\n')}\n`;
}
