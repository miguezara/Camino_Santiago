import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Camino_Santiago/',
  server: {
    host: '0.0.0.0'
  },
  build: {
    outDir: 'dist'
  }
});