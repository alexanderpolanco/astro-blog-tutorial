import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://e6e44178.astro-blog-tutorial-6co.pages.dev/",
  integrations: [preact()],
});