import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://davao.page",
  integrations: [
    tailwind(),
    robotsTxt({ sitemapBaseFileName: "sitemap-0" }),
    sitemap(),
    astroImageTools,
    compress({
      exclude: [
        (file) => {
          if (file.includes("./dist/images/")) return file;
        },
      ],
    }),
  ],
  server: {
    port: 3000,
    host: false,
  },
});
