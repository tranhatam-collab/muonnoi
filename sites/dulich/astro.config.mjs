import { defineConfig } from 'astro/config';

// Static site for Cloudflare Pages.
// No @astrojs/cloudflare adapter needed for purely static output;
// the adapter is only required for SSR (output: 'server' | 'hybrid').
// `wrangler pages deploy dist` handles static deployment directly.

export default defineConfig({
  output: 'static',
  site: 'https://dulich.muonnoi.org',
});
