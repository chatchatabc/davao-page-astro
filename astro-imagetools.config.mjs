import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
  format: "webp",
  fallbackFormat: "webp",
  includeSourceFormat: false,
  breakpoints: { maxWidth: 1024, count: 3 },
  objectFit: "fill",
});
