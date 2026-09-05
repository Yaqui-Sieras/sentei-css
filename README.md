# Sentei CSS (Monorepo)

Este es el repositorio oficial de **Sentei CSS**, organizado como un monorepo utilizando **PNPM Workspaces**.

El repositorio contiene tanto la librería base de estilos CSS como la aplicación web de su documentación oficial.

## 📁 Estructura del Proyecto

```text
.
├── LICENSE
├── package.json          # Scripts globales y orquestación del monorepo
├── packages/
│   ├── docs/             # Sitio web de documentación oficial (Astro)
│   └── sentei-css/       # Paquete de la librería CSS publicado en npm
├── pnpm-lock.yaml
├── pnpm-workspace.yaml   # Configuración del workspace de PNPM
└── README.md
```

## 🚀 Requisitos Previos

Node.js: v24 o superior.

PNPM: v11 o superior (se recomienda seguir la versión definida en devEngines).

## 🛠️ Instalación y Desarrollo Local

1. Clona el repositorio:

```bash
  git clone https://github.com/Yaqui-Sieras/sentei-css.git
  cd sentei-css
```

2. Instala todas las dependencias del monorepo:

```bash
pnpm install
```

3. Levanta el entorno de desarrollo:

```bash
pnpm dev
```

## 📜 Scripts Disponibles

Desde la raíz del proyecto puedes ejecutar los siguientes comandos:

- pnpm dev: Compila la librería CSS e inicia el entorno dev de la web de documentación.

- pnpm build: Ejecuta el build de producción tanto de la librería CSS como de la web de documentación.

- pnpm build:css: Compila únicamente el paquete sentei-css.

- pnpm build:docs: Compila únicamente el sitio web sentei-css-docs.

- pnpm publish:css: Publica la nueva versión del paquete CSS en la registry de npm (ejecutar solo al lanzar releases).

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
