var OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {
  "env": {
    "es6": true
  },

  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "block-scoped-var": WARN,
    "curly": ERROR,
    "default-case": WARN,
    "dot-location": [WARN, "property"],
    "eqeqeq": [WARN, "smart"],
    "guard-for-in": WARN,
    "no-alert": WARN,
    "no-case-declarations": WARN,
    "no-else-return": WARN,
    "no-empty-pattern": WARN,
    "no-eq-null": WARN,
    "no-eval": ERROR,
    "no-multi-spaces": ERROR,
    "no-redeclare": ERROR,
    "no-self-compare": ERROR,
    "no-use-before-define": ERROR,
    "constructor-super": ERROR,
  },
  "parserOptions": {
    "sourceType": "module",
  }
};
