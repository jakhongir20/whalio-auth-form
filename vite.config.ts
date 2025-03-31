import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import path from "path";
import svgr from "vite-plugin-svgr";

const PORT = process.env.VITE_PORT;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
    }),
    eslint({
      cache: false,
      include: ["./src/**/*.ts", "./src/**/*.tsx"],
      exclude: [],
    }),
  ],
  server: {
    port: +PORT || 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
