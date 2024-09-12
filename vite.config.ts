/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import tsconfigPaths from 'vite-tsconfig-paths';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: 'src/main.tsx',
          filename: 'index.html',
          template: 'public/index.html',
          injectOptions: {
            data: {
              title: 'index',
              injectScript: `<script src="./inject.js"></script>`,
            },
            tags: [
              {
                injectTo: 'body-prepend',
                tag: 'div',
                attrs: {
                  id: 'tag1',
                },
              },
            ],
          },
        },
      ],
    }),
  ],
  base: '/', // Specify the base URL for your application
  build: {
    outDir: 'dist', // Customize the output directory
    minify: 'terser', // Minify JavaScript output using Terser
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.* calls in production build
      },
    },
  },
  test: {
    reporters: ['default'], //choose report style
    //configure vitest coverage
    coverage: {
      reporter: ['json'],
      enabled: true,
    },
    setupFiles: ['./vitest-setUp.ts'], //global mocking
    globals: true, //no need to import anything from vitest in test files
  },
});
