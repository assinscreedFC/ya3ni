// https://vitejs.dev/config/
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      assetsDir: "assets",
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        forum: resolve(__dirname, "contact.html"),
        menu: resolve(__dirname, "menu.html"),
      },
      output: {
        // Conserve les noms de fichiers d'origine pour les ressources statiques
        assetFileNames: "[name][extname]",
      },
    },
  },
  base: "/ya3ni/",
});
