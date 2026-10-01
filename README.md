# World Crime Net — Next.js + Strapi

Figma-driven implementation of the World Crime Net homepage and long-form story detail template.

## Stack
- Next.js 15 (App Router)
- React 19
- Strapi 5
- TypeScript
- CSS modules/global CSS

## Local development

### Frontend
```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```
Open http://localhost:3000

### Strapi
```bash
cd cms
cp .env.example .env
npm install
npm run develop
```
Open http://localhost:1337/admin

## Strapi model
The included `story` collection type supports title, slug, excerpt, topic, secondary topic, author, publication date, read time, hero image, body, featured, and chapter data.

## Vercel
Deploy the `frontend` folder as the Vercel project root. Set `NEXT_PUBLIC_STRAPI_URL` to your hosted Strapi API URL. The frontend includes fallback content when Strapi is unavailable.

> Strapi should be hosted on a persistent Node.js host (for example Railway, Render, Fly.io, or a VM) with a managed PostgreSQL database. Vercel is used for the Next.js frontend.
