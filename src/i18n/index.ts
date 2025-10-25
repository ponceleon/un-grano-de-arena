import { es } from './es';
import { en } from './en';
import type { Translation } from './es';

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es,
  en,
} as const;

export type Language = keyof typeof ui;

/**
 * Obtiene el idioma de la URL
 * @param pathname - El pathname de la URL (ej: /en/nosotros)
 * @returns El idioma detectado o el idioma por defecto
 */
export function getLanguageFromURL(pathname: string): Language {
  const langMatch = pathname.match(/^\/([a-z]{2})\/?/);
  const lang = langMatch ? langMatch[1] : defaultLang;
  return lang in ui ? (lang as Language) : defaultLang;
}

/**
 * Obtiene las traducciones para un idioma específico
 * @param lang - El idioma
 * @returns Las traducciones para ese idioma
 */
export function getTranslations(lang: Language = defaultLang): Translation {
  return ui[lang] || ui[defaultLang];
}

/**
 * Obtiene una ruta traducida
 * @param path - La ruta (sin el prefijo de idioma)
 * @param lang - El idioma
 * @returns La ruta con el prefijo de idioma si no es el idioma por defecto
 */
export function getLocalizedPath(path: string, lang: Language = defaultLang): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path === '/' ? '' : path}`;
}

/**
 * Obtiene todas las rutas posibles para un path dado
 * @param path - La ruta base (sin prefijo de idioma)
 * @returns Un array de objetos con params para cada idioma
 */
export function getStaticPaths() {
  return Object.keys(ui).map((lang) => ({
    params: { lang },
  }));
}

