module.exports = {
  root: true,
  env: { browser: true, es2020: true, "jest/globals": true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:storybook/recommended",
    "plugin:jest/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "jest.config.js", "jest.setup.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./jest.config.js"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh", "jest"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",
  },
};
