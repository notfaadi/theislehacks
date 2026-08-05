# IsleHacks — Marketing Site

Static Astro 7 site for [theislehacks.com](https://theislehacks.com). Primary SEO focus: **IsleHacks** (supporting: The Isle hacks, isle esp, isle aimbot).

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Workers with static assets (`wrangler.toml`)

## Quick start

```bash
npm install
npm run generate:i18n   # after editing scripts/i18n-data/*
npm run dev
```

Build and validate sitemaps:

```bash
npm run build:validate
```

Refresh atmosphere images (optional):

```bash
npm run fetch:images
npm run optimize:images
```

## Deploy (Cloudflare Worker)

1. Worker name: **theislehacks** (`wrangler.toml`)
2. Build: `npm run build`
3. Deploy: `npm run deploy` (or `npx wrangler deploy`)
4. Custom domain **theislehacks.com** (apex) and redirect **www** → apex
5. Enable SSL **Always Use HTTPS**

## Environment

- Node.js >= 22.12.0
- Checkout URL in `src/data/site.ts` (`siteConfig.checkoutUrl`)
- Canonical site URL: `https://theislehacks.com`

## License

Private — for theislehacks.com deployment only.
