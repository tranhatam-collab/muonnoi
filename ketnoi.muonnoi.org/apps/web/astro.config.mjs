import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ketnoi.muonnoi.org',
  output: 'static',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    build: {
      target: 'es2022',
    },
  },
});
