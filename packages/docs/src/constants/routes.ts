// src/constants/routest.ts

/**
 * Base URL limpia que garantiza siempre una barra final ('/').
 */
export const BASE_URL = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/**
 * Helper opcional para construir rutas internas sin preocuparte por barras dobles.
 * @param path Ruta relativa, ej: "lenguajes/html/" o "/lenguajes/html/"
 */
export function buildUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE_URL}${cleanPath}`;
}

/**
 * Diccionario de secciones base del proyecto.
 * Si mañana cambia la carpeta física, solo actualizas este diccionario.
 */
export const ROUTES = {
  HOME: buildUrl("/"),
  DEMO: buildUrl("demo/"),
  DOCS: buildUrl("docs/"),
  NOTFOUND: buildUrl("loquesea/"),
  GITHUB: "https://github.com/Yaqui-Sieras/sentei-css",
} as const;

export interface NavItem {
  title: string;
  href: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { title: "Inicio", href: ROUTES.HOME },
  { title: "Demo", href: ROUTES.DEMO },
  { title: "Docs.", href: ROUTES.DOCS },
  { title: "404", href: ROUTES.NOTFOUND },
  { title: "GitHub", href: ROUTES.GITHUB },
] as const;
