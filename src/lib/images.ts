/**
 * Catalog image URLs via /img/... (Vercel rewrites to ImageKit).
 * Falls back to local /images/... when PUBLIC_IMAGEKIT_ENABLED is not true.
 */

import catalogImages from '../data/catalog-images.json';

type ImageMeta = {
  path: string;
  url: string;
  width: number;
  height: number;
  size: number;
};

const manifest = catalogImages as Record<string, ImageMeta>;

const useImageKitProxy =
  import.meta.env.PUBLIC_IMAGEKIT_ENABLED === 'true' ||
  import.meta.env.PUBLIC_IMAGEKIT_ENABLED === true;

/** Strip leading slash and optional "public/" */
export function normalizeImagePath(src: string): string {
  return src.replace(/^\/+/, '').replace(/^public\//, '');
}

export function imageMeta(src: string): ImageMeta | undefined {
  return manifest[normalizeImagePath(src)];
}

/**
 * @param src - e.g. /images/cuadros-mascotas/01.jpg
 * @param width - target width for ImageKit transform
 */
export function imageUrl(src: string, width?: number): string {
  const path = normalizeImagePath(src);
  if (!useImageKitProxy) {
    return `/${path}`;
  }
  // /images/foo/01.jpg → /img/foo/01.jpg
  const underImages = path.replace(/^images\//, '');
  const tr = width ? `?tr=w-${width},f-auto,q-80` : '?tr=f-auto,q-80';
  return `/img/${underImages}${tr}`;
}

export function imageSrcSet(src: string, widths: number[] = [640, 1024]): string {
  if (!useImageKitProxy) {
    return '';
  }
  return widths.map((w) => `${imageUrl(src, w)} ${w}w`).join(', ');
}

export function imageDimensions(src: string, displayWidth = 800): { width: number; height: number } {
  const meta = imageMeta(src);
  if (!meta?.width || !meta?.height) {
    return { width: displayWidth, height: displayWidth };
  }
  const height = Math.round((displayWidth * meta.height) / meta.width);
  return { width: displayWidth, height };
}
