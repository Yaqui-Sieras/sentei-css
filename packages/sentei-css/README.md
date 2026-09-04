# 🎋 Sentei-CSS

Un reset y sistema de estilos base extremadamente liviano, modular y diseñado para prototipado rápido sin JavaScript.

---

## 📦 Instalación

Podés instalar `sentei-css` en tu proyecto usando tu gestor de paquetes preferido:

```bash
# Con npm
npm install sentei-css

# Con pnpm
pnpm add sentei-css

# Con yarn
yarn add sentei-css
```

## 🚀 Uso

### 1. Importación Completa (Bundle unificado)

Importa todos los módulos unificados con su jerarquía de capas ya configurada:
**En tu archivo CSS principal:**

```css
@import "sentei-css";
```

**En Frameworks y Bundlers (Astro, Next.js, Vite, React, Vue, etc.):**

Importalo en el punto de entrada global de tu aplicación (por ejemplo en `src/layouts/Layout.astro` o `src/main.js`):

```js
import "sentei-css";
```

### 2. Importación Modular (A la carta)

Si solo necesitas secciones específicas para mantener un paquete ultra liviano

```css
/* Módulos core */
@import "sentei-css/reset";
@import "sentei-css/theme";
@import "sentei-css/forms";
@import "sentei-css/layout";
@import "sentei-css/utilities";

/* Todos los componentes */
@import "sentei-css/components";

/* O componentes específicos de forma individual */
@import "sentei-css/components/buttons.css";
@import "sentei-css/components/cards.css";
```

## 🎯 Jerarquía de Capas (@layer)

sentei-css organiza todas sus reglas dentro de la siguiente estructura de @layer para evitar conflictos de especificidad y permitirte sobrescribir estilos desde tu código sin recurrir a `css !important`:

1. reset: Limpieza y normalización universal de elementos HTML.

2. theme: Variables CSS globales, paleta de colores y tipografía base.

3. form-controls: Sensibilidad visual predeterminada para formularios nativos.

4. layout: Estructuras de maquetado responsive (.container, .grid-auto, .stack, etc.).

5. components: Clases de componentes visuales completas (.btn, .card, .alert, .badge, etc.).

6. utilities: Clases helper y ajustes rápidos de alta prioridad.

## ✨ Características

- **🧹 Reset Moderno:** Elimina márgenes, paddings y comportamientos heredados inconsistentes.
  - **📐 Box-Sizing Normalizado:** Define `box-sizing: border-box` globalmente de forma predeterminada.
  - **🔤 Tipografía Base:** Ajustes legibles de renderizado tipográfico (`text-rendering`, antialiasing).
  - **🖼️ Medios Responsivos:** Ajustes por defecto para `img`, `video` y `svg` para evitar desbordamientos.
- **⚡ 100% CSS Nativo:** Cero dependencias de JavaScript y cero procesamiento pesado.
- **📐 Layout Responsivo:** Clases de maquetado directo basadas en CSS Grid y Flexbox.
- **🎨 Tematización Nativa:** Configurado con variables CSS para fácil personalización.
- **🧩 Módulos Independientes:** Importa la librería completa o únicamente lo que necesites.

## 🌐 Documentación

Visita la documentación oficial y ejemplos en vivo en: [https://yaqui-sieras.github.io/sentei-css](https://yaqui-sieras.github.io/sentei-css)

## 📄 Licencia

Licencia [MIT](../../LICENSE) © [Yaqui-Sieras](https://github.com/Yaqui-Sieras)
