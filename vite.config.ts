import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist/bundle",
    lib: {
      entry: "package/index.ts",
      name: "DoriUtils",
      fileName: "dori-utils",
    },
  },
});
