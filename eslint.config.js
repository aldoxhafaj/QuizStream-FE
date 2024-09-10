import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import formatjs from 'eslint-plugin-formatjs';
import functional from 'eslint-plugin-functional';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import storybook from 'eslint-plugin-storybook';
import unusedImports from 'eslint-plugin-unused-imports';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
      functional.configs.externalTypescriptRecommended,
      functional.configs.recommended,
      functional.configs.stylistic,
      importPlugin.flatConfigs.recommended,
      reactPlugin.configs.flat.recommended,
      ...sonarjs.configs['recommended-legacy'],
      ...storybook.configs['flat/recommended'],
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-plugin': reactPlugin,
      'react-refresh': reactRefresh,
      'intl-format': formatjs,
      'simple-import-sort': simpleImportSort,
      'sonar-js': sonarjs,
      'unused-imports': unusedImports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off', // React 17 does not require import React from 'react'
      '@typescript-eslint/explicit-module-boundary-types': 'off', // May be redundant with React 18's automatic JSX import behavior
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ], // Ignore unused variables prefixed with _
      'no-console': 'error', // You might want to keep console.warn or console.error
      'no-debugger': 'error', // Warn against debugger statements
      '@typescript-eslint/no-empty-function': 'error', // Allow empty functions, which might be placeholders for future implementations
      '@typescript-eslint/explicit-function-return-type': 'off', // Allow TypeScript's inference of return types
      '@typescript-eslint/no-explicit-any': 'error', // Avoid explicit `any` types
      '@typescript-eslint/no-non-null-assertion': 'error', // Avoid non-null assertion operator `!`
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            '{}': false, // Allow `{}` as a type
            object: false, // Allow `object` as a type
          },
          extendDefaults: true,
        },
      ],
      'sonarjs/no-useless-catch': 'error',
      'sonarjs/no-all-duplicated-branches': 'error',
      'sonarjs/no-duplicate-string': 'error',
      'sonarjs/prefer-single-boolean-return': 'error',
      'sonarjs/no-redundant-boolean': 'error',
      'sonarjs/no-gratuitous-expressions': 'error',
      'simple-import-sort/imports': 'error',
      'sonarjs/no-inverted-boolean-check': 'error',
      'sonarjs/no-identical-conditions': 'error',
      'sonarjs/no-ignored-return': 'error',
      'sonarjs/no-use-of-empty-return-value': 'error',
      'sonarjs/no-identical-expressions': 'error',
      'react/prop-types': 'off',
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
        },
      ],
      'react/no-unstable-nested-components': [
        'error',
        {
          allowAsProps: true,
        },
      ],
      'no-nested-ternary': 'error',
      'functional/prefer-immutable-types': 'off',
      'functional/no-loop-statements': 'error',
      'functional/no-let': 'error',

      'prefer-const': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'no-extra-boolean-cast': 'error',
      'object-shorthand': 'error',
      'react/jsx-boolean-value': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-no-useless-fragment': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      eqeqeq: 'error',
      'no-empty-pattern': 'error',
      'import/named': 'off',
      'import/no-named-as-default': 'error',
      'import/no-default-export': 'error',
      'import/first': 'error',
      'import/default': 'off',
      'import/newline-after-import': 'error',
      'import/no-cycle': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'off',
      'formatjs/no-offset': 'error',
      'formatjs/enforce-default-message': ['error', 'literal'],
      'formatjs/no-multiple-whitespaces': 'error',
      'formatjs/enforce-id': 'error',
    },
  },
);
