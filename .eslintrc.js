module.exports = {
  env: {
      browser: true,
      es6: true
  },
  extends: [
      "eslint:recommended",
      "plugin:vue/essential",
      "prettier/vue",
      "plugin:prettier/recommended"
  ],
  globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly"
  },
  parserOptions: {
      parser: "babel-eslint",
      ecmaVersion: 2018,
      sourceType: "module"
  },
  plugins: ["vue"],
  rules: {}
};
