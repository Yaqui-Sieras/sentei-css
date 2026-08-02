# 🎋 Sentei-CSS

Un CSS Reset moderno combinado con estilos base esenciales para iniciar tus proyectos web rápidamente y sin preocuparte por la inconsistencia entre navegadores.

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

### En tu archivo CSS principal
Podés importarlo directamente al inicio de tu hoja de estilos principal:

```css
@import "sentei-css";
```

### En Frameworks y Bundlers (Astro, Next.js, Vite, React, Vue, etc.)
Importalo en el punto de entrada global de tu aplicación (por ejemplo en src/layouts/Layout.astro o src/main.js):

```js
import 'sentei-css';
```

## ✨ Características
- **🧹 Reset Moderno:** Elimina márgenes, paddings y comportamientos heredados inconsistentes.
- **📐 Box-Sizing Normalizado:** Define `box-sizing: border-box` globalmente de forma predeterminada.
- **🔤 Tipografía Base:** Ajustes legibles de renderizado tipográfico (`text-rendering`, antialiasing).
- **🖼️ Medios Responsivos:** Ajustes por defecto para `img`, `video` y `svg` para evitar desbordamientos.

## 📄 Licencia
Licencia [MIT](./LICENSE) © [Yaqui-Sieras](https://github.com/Yaqui-Sieras)
