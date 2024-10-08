//TODO update eslint config to version >= 9 (flat config file)

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: [
    'node_modules',
    'dist',
    '.eslintrc.cjs',
    '.storybook/**/*',
    'postcss.config.js',
    'tailwind.config.ts',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'sonarjs',
    'simple-import-sort',
    'react',
    'functional',
    'unused-imports',
    'formatjs',
    'import',
  ],
  rules: {
    // Add or modify rules as needed
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off', // React 17 does not require import React from 'react'
    '@typescript-eslint/explicit-module-boundary-types': 'off', // May be redundant with React 18's automatic JSX import behavior
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore unused variables prefixed with _
    'no-console': 'error', // You might want to keep console.warn or console.error
    'no-debugger': 'warn', // Warn against debugger statements
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
    'react/prop-types': 'error',
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
    'no-extra-boolean-cast': 'off',
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
    'import/no-unresolved': 'error',
    'formatjs/no-offset': 'error',
    'formatjs/enforce-default-message': ['error', 'literal'],
    'formatjs/no-multiple-whitespaces': 'error',
    'formatjs/enforce-id': 'error',
  },
  overrides: [
    {
      files: ['**/*.stories.@(js|jsx|ts|tsx)'], // Target all Storybook files
      rules: {
        'import/no-default-export': 'off', // Disable the rule for Storybook
        'storybook/default-exports': 'error',
        'storybook/prefer-pascal-case': 'error',
        'storybook/no-title-property-in-meta': 'error',
        'storybook/story-exports': 'error',
        'storybook/no-redundant-story-name': 'error',
        'storybook/use-storybook-expect': 'error',
        'storybook/use-storybook-testing-library': 'error',
        'storybook/csf-component': 'error',
        'storybook/await-interactions': 'error',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.paths.json',
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    project: ['tsconfig.app.json', './tsconfig.json', 'tsconfig.node.json'],
  },
};
