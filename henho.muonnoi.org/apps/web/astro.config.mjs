import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://henho.muonnoi.org',
  output: 'static',
  outDir: './dist',
  integrations: [tailwind()],
});
