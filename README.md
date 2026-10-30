# Chatter — website

Marketing and download site for **Chatter**, the unofficial client for Yapper.
Next.js 14 (App Router), plain CSS, no extra dependencies.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Deploys as-is to Vercel, Netlify or any Node host. All release data lives in
`lib/data.js` (version, download URLs, themes, changelog). Update `VERSION`
and `CHANGELOG` when a new release ships; the download button always points
to the latest GitHub release, so it never needs a new link.
