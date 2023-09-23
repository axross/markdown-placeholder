/* eslint-env node */

module.exports = {
  extends: ["@axross/eslint-config", "next/core-web-vitals"],
  overrides: [
    {
      files: ["*.@(js|mjs|cjs|ts|mts|cts)"],
      rules: {
        "@typescript-eslint/no-magic-numbers": ["error", { ignore: [0, 1] }],
      },
    },
    {
      files: ["*.@(js|mjs|cjs|jsx|ts|mts|cts|tsx)"],
      extends: ["plugin:unicorn/recommended"],
      rules: {
        "unicorn/numeric-separators-style": "off",
      },
    },
    {
      files: [
        "*rc.@(js|mjs|cjs|ts|mts|cts|json)",
        "*.config.@(js|mjs|cjs|ts|mts|cts|json)",
      ],
      plugins: ["eslint-plugin-unicorn"],
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
  ],
};
