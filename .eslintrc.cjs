/* eslint-env node */

module.exports = {
  extends: ["@axross/eslint-config", "next/core-web-vitals"],
  overrides: [
    {
      files: ["*.@(js|mjs|cjs|ts|mts|cts)"],
      rules: {
        "no-magic-numbers": ["error", { ignore: [0, 1] }],
      },
    },
  ],
};
