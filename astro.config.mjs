import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    optimizeDeps: {
      include: ['jquery'],
    },

    build: {
      commonjsOptions: {
        include: [/jquery/],
      },
    },

    plugins: [tailwindcss()],
  },
});