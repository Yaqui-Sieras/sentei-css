import { bundle, transform } from "lightningcss";
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  statSync,
} from "fs";
import { join, relative } from "path";

const DIST_DIR = "dist";
const SRC_STYLES_DIR = "src/styles";

function ensureDir(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

ensureDir(DIST_DIR);

async function build() {
  console.log("⚡ Compilando sentei-css...");

  try {
    // 1. Compilar el paquete completo unificado
    const bundled = await bundle({
      filename: join(SRC_STYLES_DIR, "sentei.css"),
      minify: true,
      targets: {
        chrome: 90 << 16,
        safari: 14 << 16,
        firefox: 88 << 16,
      },
    });

    writeFileSync(join(DIST_DIR, "sentei.css"), bundled.code);

    // 2. Procesar módulos individuales y subcarpetas (ej. components/)
    function processDirectory(dir) {
      const entries = readdirSync(dir);

      for (const entry of entries) {
        const fullPath = join(dir, entry);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          processDirectory(fullPath);
        } else if (entry.endsWith(".css") && entry !== "sentei.css") {
          const relativePath = relative(SRC_STYLES_DIR, fullPath);
          const outputPath = join(DIST_DIR, relativePath);

          ensureDir(join(DIST_DIR, relative(SRC_STYLES_DIR, dir)));

          const code = readFileSync(fullPath);
          const transformed = transform({
            filename: fullPath,
            code,
            minify: true,
          });

          writeFileSync(outputPath, transformed.code);
        }
      }
    }

    processDirectory(SRC_STYLES_DIR);

    console.log(" Build de sentei-css completado en 'dist/'");
  } catch (error) {
    console.error("❌ Error en la compilación:", error);
    process.exit(1);
  }
}

build();
