// Astro-Konfiguration. Die Adresse der Seite (für kanonische Links, Sitemap) steht in src/config.ts → seite.url.
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://betriebsfreund.de", // MUSS mit src/config.ts → seite.url übereinstimmen
  output: "static",
  trailingSlash: "never",
  build: { format: "file" }, // /demo statt /demo/index.html → saubere URLs auch ohne Weiterleitung
  compressHTML: true,
  integrations: [sitemap({ filter: (u) => !u.includes("/danke") })],
});
