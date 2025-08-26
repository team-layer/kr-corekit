import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "json-summary", "json"],
      exclude: [],
    },
  },
  build: {
    outDir: "dist/bundle",
    lib: {
      entry: "package/index.ts",
      name: "DoriUtils",
      fileName: "dori-utils",
    },
  },
});
