import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    ssr: true,
    lib: {
      entry: './src/index.ts',
      name: 'index',
      fileName: 'index'
    },
    rollupOptions: {
      input: './src/index.ts',
    }
  },
  plugins: [react({
    jsxImportSource: '@emotion/react',
    babel: {
      plugins: ['@emotion/babel-plugin'],
    },
  }),dts()]
})
