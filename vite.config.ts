import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/webgl-ctf/",
  plugins: [vue(
    {
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    }
  ),
  glsl()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
