import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Asegúrate de que Tailwind esté configurado correctamente
    config: { path: './tailwind.config.js' }
  }), react()],
  site: "https://titan-flex.github.io",
  base: "" 
});