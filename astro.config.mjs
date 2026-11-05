import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Troque SITE_URL pelo domínio definitivo (variável de ambiente no Cloudflare Pages)
export default defineConfig({
  site: process.env.SITE_URL || 'https://portilhoconsultoria.com.br',
  integrations: [sitemap({ filter: (p) => !p.includes('/obrigado') })],
});
