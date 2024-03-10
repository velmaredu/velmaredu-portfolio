import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://velmaredu.github.io",
  integrations: [
    tailwind({
      nesting: true,
    }),
  ],
  output: "server",
  adapter: netlify(),
});
