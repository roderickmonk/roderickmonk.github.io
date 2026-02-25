// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://roderickmonk.github.io',
  base: 'rod-monk-site',
  vite: {
    plugins: [tailwindcss()]
  }
});