import { ui, defaultLang } from './ui';

type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return (ui[lang] as any)[key] ?? ui[defaultLang][key];
  };
}

export type TranslationKey = keyof typeof ui[typeof defaultLang];
