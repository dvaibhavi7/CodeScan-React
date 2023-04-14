module.exports = {
    root: true,
    env: {
      browser: true,
      es6: true
    },
    extends: [
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    rules: {
      'no-unused-vars': ['warn', { 'args': 'none' }],
      'no-dupe-keys': 'warn',
      'no-dupe-args': 'warn',
      'no-duplicate-case': 'warn',
      'no-empty': 'warn',
      'no-extra-semi': 'warn',
      'no-unreachable': 'warn',
      'no-console': 'warn',
      'example-rule': 'error'
    }
  };
