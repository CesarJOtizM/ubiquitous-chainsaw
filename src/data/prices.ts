/** Canonical product prices in COP. Shipping is always extra. */

export type PriceRow = {
  id: string;
  size?: string;
  nameKey?: string;
  price: number;
  priceLabel: string;
  special?: boolean;
  from?: boolean;
};

export const canvasPrices: PriceRow[] = [
  { id: 'canvas-12x18', size: '12×18 cm', price: 120_000, priceLabel: '$120.000' },
  { id: 'canvas-20x25', size: '20×25 cm', price: 160_000, priceLabel: '$160.000' },
  { id: 'canvas-28x35', size: '28×35 cm', price: 220_000, priceLabel: '$220.000' },
  { id: 'canvas-40x50', size: '40×50 cm', price: 270_000, priceLabel: '$270.000' },
  {
    id: 'canvas-heart-20x20',
    size: '20×20 cm',
    nameKey: 'services.cuadros.special',
    price: 150_000,
    priceLabel: '$150.000',
    special: true,
  },
];

export const basePrices: PriceRow[] = [
  {
    id: 'base-10x15',
    size: '10×15 cm',
    nameKey: 'services.bases.name1',
    price: 130_000,
    priceLabel: '$130.000',
  },
  {
    id: 'base-12x18',
    size: '12×18 cm',
    nameKey: 'services.bases.name2',
    price: 150_000,
    priceLabel: '$150.000',
  },
];

export const casePrices: PriceRow[] = [
  {
    id: 'case-flowers',
    nameKey: 'services.cases.type1',
    price: 40_000,
    priceLabel: '$40.000',
  },
  {
    id: 'case-flowers-custom',
    nameKey: 'services.cases.type2',
    price: 55_000,
    priceLabel: '$55.000',
  },
  {
    id: 'case-logo-anime',
    nameKey: 'services.cases.type3',
    price: 100_000,
    priceLabel: 'Desde $100.000',
    from: true,
  },
  {
    id: 'case-pet',
    nameKey: 'services.cases.type4',
    price: 100_000,
    priceLabel: '$100.000',
  },
];

export const extraPetPrices = {
  canvas: { min: 30_000, max: 50_000, label: '$30.000 – $50.000' },
  base: { amount: 25_000, label: '$25.000' },
  case: { amount: 20_000, label: '$20.000' },
} as const;

export const PRICE_FROM_CANVAS = canvasPrices[0]!.price;
export const PRICE_FROM_BASE = basePrices[0]!.price;
export const PRICE_CASE_PET = 100_000;
export const LEAD_TIME_DAYS = { min: 15, max: 20 } as const;
export const CURRENCY = 'COP' as const;
