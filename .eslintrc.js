module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "unused-imports", "@typescript-eslint/eslint-plugin"],
  extends: ["prettier", "eslint:recommended", "@mscdex/eslint-config"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
};
