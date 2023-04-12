import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://davao.page",
  integrations: [tailwind(), robotsTxt(), sitemap(), astroImageTools, mdx()],
  server: {
    port: 3000,
    host: false,
  },
});
