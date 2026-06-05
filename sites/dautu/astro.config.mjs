import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://dautu.muonnoi.org',
  integrations: [react(), tailwind()],
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en', 'zh', 'ko', 'ja', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
