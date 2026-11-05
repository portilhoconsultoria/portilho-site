# Site — Portilho Inteligência Comercial
Astro estático, publicado no Cloudflare Pages.
- Rodar: `npm i` e `npm run dev`. Build: `npm run build` (saída em `dist/`).
- Textos: `src/pages/*.astro`. Dados centrais (WhatsApp, e-mail, cidade): `src/site.ts`. Visual: `src/styles.css`.
- Formulário: `functions/api/lead.js` repassa o lead para `LEAD_WEBHOOK_URL`. Sem webhook, o lead cai no WhatsApp com os dados preenchidos.
- Variáveis no Cloudflare Pages: `SITE_URL` (domínio), `LEAD_WEBHOOK_URL`, `PUBLIC_GA4_ID`, `PUBLIC_META_PIXEL_ID`.
- Cloudflare Pages: framework Astro, build `npm run build`, saída `dist`.
- Fotos do fundador: `public/img/jhonatan-*.jpg/.webp` (originais em `_fotos-originais`, fora do build).
