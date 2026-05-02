# Portfolio Project Rules

## Project Purpose
A personal developer portfolio website. Must be fast, lightweight,
and visually clean. Built to run smoothly on low-spec laptops.

## Tech Stack (Do Not Change)
- Framework: Astro (static site generator)
- Styling: Plain CSS — no Tailwind, no CSS frameworks
- Animations: CSS keyframes + Intersection Observer API (vanilla JS only)
- JavaScript: Vanilla JS only — no React, no Vue, no heavy libraries
- Deployment: Vercel or GitHub Pages

## Astro-Specific Rules
- Every page section is its own Astro component (.astro file)
- All personal data lives in /src/data/portfolio.js as a plain JS object
- Pages go in /src/pages/
- Components go in /src/components/
- Global CSS goes in /src/styles/global.css
- Images go in /public/images/ and must be WebP format

## CSS Rules
- Use CSS custom properties (variables) for all colors, fonts, and spacing
- Define all variables in :root inside global.css
- Mobile-first — write mobile styles first, then use min-width media queries
- No inline styles — everything goes in CSS files or <style> blocks in .astro files

## Animation Rules
- Use CSS @keyframes for entrance animations (fade in, slide up)
- Use Intersection Observer in a single /src/scripts/animations.js file
  to trigger animations when sections scroll into view
- Always add: @media (prefers-reduced-motion: reduce) to disable animations
  for users who need it
- Keep animations subtle — no spinning, bouncing, or flashy effects
- Max animation duration: 0.6 seconds

## Performance Rules
- No JavaScript libraries or CDN scripts unless absolutely necessary
- All images must have width and height attributes to prevent layout shift
- Use loading="lazy" on all images below the fold
- Target Lighthouse score: 95+ on all categories

## SEO Rules
- Set title and description in every page's frontmatter
- Add Open Graph meta tags in the base layout
- Use semantic HTML — header, main, section, footer, article, nav
- Headings must be in order: h1 → h2 → h3

## Code Style
- Indent with 2 spaces
- Use kebab-case for CSS class names (e.g. hero-section, project-card)
- Use camelCase for JavaScript variables
- Comment every major CSS section and JS function