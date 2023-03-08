import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://davao.page",
  integrations: [
    tailwind(),
    robotsTxt({
      sitemapBaseFileName: "sitemap-0",
    }),
    sitemap(),
    compress({
      exclude: [
        (file) => {
          if (file.includes("./dist/images/")) return file;
        },
      ],
    }),
    astroImageTools,
    mdx(),
  ],
  server: {
    port: 3000,
    host: false,
  },
});
