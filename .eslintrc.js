module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
      pragma: 'React'
    }
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/prop-types': 'off',
    'react/display-name': 'off'
  }
}
