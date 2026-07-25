import { defineConfig } from 'astro/config';

// GitHub Actions define automáticamente la variable GITHUB_ACTIONS
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
    // URL completa de tu sitio de GitHub Pages
    site: 'https://Yaqui-Sieras.github.io',

    // Nombre del repositorio (solo si NO es un repositorio de tipo usuario/organización principal)
    // Ej: si tu repo se llama 'mi-proyecto', usa '/mi-proyecto/'
    // Si se está compilando en GitHub Actions usa la subcarpeta,
    // si es en Vercel, Netlify o en local (npm run dev), usa la raíz '/'
    base: isGitHubActions ? '/miResetCSS/' : '/',
});
