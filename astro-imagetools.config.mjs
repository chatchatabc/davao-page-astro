import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
  format: "webp",
  fallbackFormat: "webp",
  includeSourceFormat: false,
  breakpoints: [320, 768, 1024],
  objectFit: "cover",
});
