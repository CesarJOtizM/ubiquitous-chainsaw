/**
 * The only place product prices live, in COP. Shipping is always extra.
 *
 * Change the numbers here. Pages, feeds, blogs and the /info markdown read
 * these values. Prose uses tokens such as {canvas-12x18}; applyPrices()
 * fills them in. Do not paste a formatted price anywhere else.
 */

export type PriceRow = {
  id: string;
  size?: string;
  nameKey?: string;
  price: number;
  special?: boolean;
  /** The published figure is a starting price ("Desde" / "From"). */
  from?: boolean;
  /** Price when bought with another product. Shown in tables, not as its own offer. */
  companion?: boolean;
  /** False while the product is still "próximamente". Kept here, left out of public lists. */
  published?: boolean;
};

export const canvasPrices: PriceRow[] = [
  { id: 'canvas-12x18', size: '12×18 cm', price: 170_000 },
  { id: 'canvas-20x25', size: '20×25 cm', price: 210_000 },
  { id: 'canvas-28x35', size: '28×35 cm', price: 265_000 },
  { id: 'canvas-40x50', size: '40×50 cm', price: 330_000 },
  {
    id: 'canvas-heart-20x20',
    size: '20×20 cm',
    nameKey: 'services.cuadros.special',
    price: 190_000,
    special: true,
  },
];

export const basePrices: PriceRow[] = [
  {
    id: 'base-10x15',
    size: '10×15 cm',
    nameKey: 'services.bases.name1',
    price: 140_000,
  },
  {
    id: 'base-12x18',
    size: '12×18 cm',
    nameKey: 'services.bases.name2',
    price: 160_000,
  },
];

export const casePrices: PriceRow[] = [
  {
    id: 'case-flowers',
    nameKey: 'services.cases.type1',
    price: 40_000,
  },
  {
    id: 'case-flowers-custom',
    nameKey: 'services.cases.type2',
    price: 55_000,
  },
  {
    id: 'case-logo-anime',
    nameKey: 'services.cases.type3',
    price: 120_000,
    from: true,
  },
  {
    id: 'case-pet',
    nameKey: 'services.cases.type4',
    price: 135_000,
  },
];

/** Standalone price is the offer. The companion price is only with another product. */
export const magnetPrices: PriceRow[] = [
  {
    id: 'magnet',
    size: '7,5×7,5 cm',
    nameKey: 'prices.magnetAlone',
    price: 85_000,
  },
  {
    id: 'magnet-addon',
    size: '7,5×7,5 cm',
    nameKey: 'prices.magnetAddon',
    price: 72_000,
    companion: true,
  },
];

export const extraPetPrices = {
  canvas: { min: 30_000, max: 50_000 },
  base: { amount: 25_000 },
  case: { amount: 20_000 },
} as const;

export const allPriceRows: readonly PriceRow[] = [
  ...canvasPrices,
  ...basePrices,
  ...casePrices,
  ...magnetPrices,
];

function rowById(id: string): PriceRow {
  const row = allPriceRows.find((item) => item.id === id);
  if (!row) throw new Error(`Precio desconocido: ${id}`);
  return row;
}

export const PRICE_FROM_CANVAS = canvasPrices[0]!.price;
export const PRICE_FROM_BASE = basePrices[0]!.price;
export const PRICE_CASE_PET = rowById('case-pet').price;
/** Cheapest standalone published price. Companion discounts are not included. */
export const PRICE_FROM_PUBLISHED = Math.min(
  ...allPriceRows.filter((row) => row.published !== false && !row.companion).map((row) => row.price),
);
export const LEAD_TIME_DAYS = { min: 15, max: 20 } as const;
export const CURRENCY = 'COP' as const;
