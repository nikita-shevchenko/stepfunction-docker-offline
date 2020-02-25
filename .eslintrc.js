module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  parserOptions: {
    "ecmaVersion": 6,
  },
  rules: {
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.ts'] }],
    '@typescript-eslint/indent': [2, 2],
    'no-unused-vars': ["error", { 'vars': 'all', 'args': 'after-used' }],
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/ban-ts-ignore': 1,
    '@typescript-eslint/explicit-function-return-type': 1,
    'no-return-await': 1,
    'comma-dangle': 0,
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
    }],
  },
  "env": {
    "jest": true
  }
};
