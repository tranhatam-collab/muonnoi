import { defineConfig } from 'astro/config';

// Static site for Cloudflare Pages.
// No @astrojs/cloudflare adapter needed for purely static output.
// The adapter is only required for SSR (output: 'server' | 'hybrid').

export default defineConfig({
  output: 'static',
  site: 'https://hoctap.muonnoi.org',
});
