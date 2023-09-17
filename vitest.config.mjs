import { defineConfig } from "vitest/config";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      all: true,
      lines: 90,
      functions: 90,
      branches: 90,
      statements: 90,
      include: ["src/**"],
      exclude: ["src/app/**"],
    },
  },
});
