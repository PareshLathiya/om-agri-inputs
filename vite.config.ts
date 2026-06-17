import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/om-agri-inputs/', // GitHub repository name

  plugins: [react()],

  resolve: {
    alias: {
      '@': '/src',
    },
  },

  server: {
    port: 5173,
    strictPort: true,
  },
});