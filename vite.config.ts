import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "json-summary", "json"],
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/vite-env.d.ts",
        "**/vite.config.ts",
        "package/index.ts",
        "package/*/index.ts",
      ],
    },
    reporters: ["default", "junit"],
    outputFile: "vitest-report.xml",
  },
  build: {
    outDir: "dist/bundle",
    lib: {
      entry: "package/index.ts",
      name: "kr-corekit",
      fileName: "kr-corekit",
    },
  },
});
