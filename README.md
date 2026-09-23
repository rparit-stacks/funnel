# FUME Funnel (Next.js)

Mobile-first VSL landing page, ready for serverless deploy (Vercel / Netlify / Cloudflare).

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (serverless)

```bash
npm run build
```

Deploy the `funnel` folder to Vercel (recommended), Netlify, or any Next.js serverless host. App Router routes are served as serverless functions by default on Vercel.

## Structure

- `src/app` — App Router entry (`layout.tsx`, `page.tsx`)
- `src/components/funnel` — mobile-first UI sections
- `_reference.html` — original static HTML (reference only)
