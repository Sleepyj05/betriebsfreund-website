// Astro-Konfiguration. Die Adresse der Seite (für kanonische Links, Sitemap) steht in src/config.ts → seite.url.
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://schichtklar.de", // MUSS mit src/config.ts → seite.url übereinstimmen
  output: "static",
  trailingSlash: "never",
  build: { format: "file" }, // /demo statt /demo/index.html → saubere URLs auch ohne Weiterleitung
  compressHTML: true,
});
