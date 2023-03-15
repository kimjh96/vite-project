import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'index',
      fileName: 'index'
    },
    rollupOptions: {
      input: './src/index.ts',
      external: Object.keys(pkg.peerDependencies)
    },
  },
  plugins: [react({
    jsxImportSource: '@emotion/react',
    babel: {
      plugins: ['@emotion/babel-plugin'],
    },
  }),dts()]
})
