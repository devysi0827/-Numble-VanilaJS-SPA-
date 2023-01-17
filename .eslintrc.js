module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    sourceType: "module",
    // jsx: true,
    ecmaVersion: 8,
    requireConfigFile: false,
  },
  rules: {
    globals: {
      axios: true,
    },
  },
};
