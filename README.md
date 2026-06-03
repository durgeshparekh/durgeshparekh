# Durgesh Parekh — Portfolio

A modern, animated single-page portfolio for a **Product Engineer & Builder**. Built with the Next.js App Router, TypeScript, Tailwind CSS v4, Shadcn UI, and Framer Motion, with light/dark theming and built-in SEO.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + `tw-animate-css`
- **UI:** Shadcn UI (Base UI primitives), `lucide-react` icons
- **Animation:** Framer Motion
- **Theming:** `next-themes` (light/dark)
- **Forms:** React Hook Form + Zod
- **Analytics:** Vercel Analytics & Speed Insights

## Sections

The page is composed of focused sections rendered by `src/components/portfolio-shell.tsx`:

- Hero
- About
- Skills
- Projects
- Experience
- Testimonials
- Contact

## Project Structure

```
src/
├── app/                  # App Router entry (layout, page, globals, sitemap, robots)
├── components/
│   ├── sections/         # Page sections (hero, about, skills, projects, …)
│   ├── layout/           # Navbar, footer, section header, social/resume buttons
│   ├── ui/               # Shadcn UI primitives
│   ├── effects/          # Visual effects (cursor glow, parallax, scroll reveal, …)
│   └── providers/        # Theme + app providers
├── hooks/                # Custom hooks (e.g. use-active-section)
└── lib/
    ├── data/site.ts      # Central content: profile, projects, experience, skills…
    └── utils.ts
public/
└── resume/               # Resume PDF
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Customizing Content

All content (profile info, social links, skills, projects, experience, testimonials, and education) lives in a single source of truth:

```
src/lib/data/site.ts
```

Update `siteConfig.url` to your production domain so SEO metadata, the sitemap, and `robots.ts` resolve correctly.

## Resume

The downloadable resume is served from `public/resume/Durgesh-Parekh-Resume.pdf` (path configured via `siteConfig.resumePath`).

## Deploy

Deploy to [Vercel](https://vercel.com) with zero configuration. Set `siteConfig.url` to your production domain before deploying.
