# Premium developer portfolio and technical blog

## Goal

Build a polished, responsive personal portfolio for a software engineer and AI developer, with recruiter-focused project storytelling and a first-class technical blog. Use clearly labeled placeholders wherever personal facts, links, credentials, or assets were not supplied.

## Pages and navigation

- Shared sticky header with responsive navigation, active states, theme switcher, resume access, and mobile menu.
- Home page with identity-led opening, profile summary, skills, featured projects, learning journey, education, certifications, writing highlights, and contact.
- Separate pages for About, Skills, Projects, Experience, Certifications, Resume, Blog, and Contact.
- Detail pages for Zora, the RAG Question Answering Bot, and MovieDB.
- Article pages for the requested sample technical topics, plus a custom not-found experience.

## Content model

- Keep editable portfolio data, projects, certifications, and posts in centralized typed content files.
- Use local Markdown files as the blog source, with frontmatter for title, slug, category, tags, dates, draft status, cover image, and SEO description.
- Parse and render Markdown safely with headings, table of contents, code blocks, copy controls, related posts, sharing, and previous/next navigation.
- Add RSS and sitemap endpoints generated from the same content.

## Design

- Create a custom dark-first design system in the global stylesheet with a restrained cyan/blue accent, neutral surfaces, occasional warm signal color, distinctive display/body/mono typography, and an equally polished light theme.
- Use subtle grid motion, selective reveal effects, crisp borders, restrained glass surfaces, and clear focus states; respect reduced-motion settings.
- Generate original technical artwork for the profile, AI voice system, RAG pipeline, and movie application rather than using stock imagery.
- Preserve strong recruiter scanning: concise identity, featured work, skills taxonomy, credible journey, credentials, writing, and contact.

## Functionality

- Project category filtering and search.
- Blog search, category/tag filtering, reading time, and featured/latest/popular groupings based on explicit metadata.
- Reading progress, table of contents, copyable code, share actions, and article navigation.
- Client-side validated contact form with a clear success state and an honest note that email delivery requires configuration.
- Resume screen with print styling plus view/download behavior using a customizable printable document.
- Back-to-top control and keyboard-accessible interactions.

## Quality and verification

- Add unique SEO metadata to every content page, semantic headings, canonical links, Open Graph text, accessible labels, and useful image alt text.
- Update the README with customization, local setup, content editing, deployment, and contact-delivery instructions.
- Verify links, filters, theme switching, mobile menu, forms, project/article routes, responsive layouts, image loading, console output, and build status.

## Technical details

- Keep the existing TanStack Start, React 19, TypeScript, and Tailwind v4 architecture.
- Use file-based routes and shared React components; do not add a database because Markdown is the simplest maintainable content workflow for this portfolio.
- Use Zod for form and content validation, with no secrets or unsupported server integrations.
