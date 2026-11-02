# Software Engineer & AI Developer Portfolio

A responsive, dark-first portfolio and technical blog built with TanStack Start, React 19, TypeScript, Tailwind CSS v4, and local Markdown content.

## Features

- Recruiter-focused home, profile, skills, journey, credentials, resume, contact, and project case studies
- Filterable project gallery and searchable blog
- Markdown posts with frontmatter, reading time, table of contents, code-copy controls, related posts, and article navigation
- Dark/light themes, mobile navigation, print-ready resume, RSS, sitemap, and route-level SEO metadata
- Zod-validated contact form in demo mode

## Local development

```bash
bun install
bun run dev
```

Open `http://localhost:8080`.

## Project structure

- `src/data/portfolio.ts` — profile, skills, projects, education, journey, certifications
- `src/content/posts/` — Markdown articles
- `src/data/posts.ts` — Markdown loading and frontmatter parsing
- `src/components/` — shared navigation, cards, forms, and article UI
- `src/routes/` — pages, project/article detail routes, RSS, and sitemap
- `src/styles.css` — design tokens, themes, article typography, print styles

## Personalize the portfolio

1. Replace `Your Name`, contact links, location, role, and bio in `src/data/portfolio.ts`.
2. Replace generated `src/assets/profile-technical.jpg` if you prefer a real portrait.
3. Replace placeholder repository/demo links and verify every project statement.
4. Replace the placeholder education and certification records with verified details.
5. Review the resume at `/resume`, then use **Print / Save PDF** to export it.

## Add a project

Add a complete object to the `projects` array in `src/data/portfolio.ts`. Include a unique slug and import a local project image. Its detail route is generated automatically.

## Add a blog post

Create a `.md` file in `src/content/posts/` with this frontmatter:

```md
---
title: Article title
subtitle: Short supporting line
slug: unique-slug
category: Artificial Intelligence
tags: AI, Python
published: 2026-09-11
updated: 2026-09-11
featured: false
popular: false
draft: false
seo: Description under 160 characters.
---
```

Write Markdown below the frontmatter. Draft posts do not appear.

## Contact delivery

The form currently validates on-device and deliberately sends nothing. To deliver messages, connect an email provider through a server function, keep its secret in an environment variable, revalidate inputs on the server with Zod, and add abuse protection.

## Deployment

Run `bun run build`, then deploy through Lovable. No environment variables are required until contact delivery or external APIs are added.
