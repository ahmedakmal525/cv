module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      classes: true,
      jsx: true
    }
  },
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended",
    "plugin:flowtype/recommended"
  ],
  plugins: ["jsx-a11y", "import", "flowtype"],
  rules: {
    "no-new": "off",
    "no-shadow": "off",
    "prefer-const": "off",
    "global-require": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-one-expression-per-line": "off",
    "import/no-extraneous-dependencies": ["off", { devDependencies: true }],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }]
  }
};
