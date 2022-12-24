import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import compress from "astro-compress";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://davao.page",
  integrations: [tailwind(), sitemap(), compress(), astroImageTools],
  server: {
    port: 3000,
    host: false,
  },
});
