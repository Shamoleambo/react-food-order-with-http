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
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'arrow-parens': ['warn', 'as-needed'],
    'react/prop-types': 'off',
    'react/display-name': 'off'
  }
}
