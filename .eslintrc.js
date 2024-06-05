module.exports = {
    parser: 'babel-eslint', // Use babel-eslint to parse modern JavaScript
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'import', // Add the import plugin
    ],
    rules: {
      'jsx-a11y/alt-text': 'off',
      'jsx-a11y/img-redundant-alt': 'off',
      // other rules
    },
  };
  