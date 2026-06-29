import js from '@eslint/js';
import react from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores([
    '**/node_modules/**',
    '**/build/**',
    '**/.docusaurus/**',
    '**/.cache/**',
    '**/coverage/**',
    '**/dist/**',
    '**/*.min.js',
  ]),

  js.configs.recommended,

  ...tseslint.configs.recommended,

  react.configs.flat.recommended,

  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],

      'prefer-const': 'error',
      'no-var': 'error',
      'no-debugger': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
    },
  },
]);
