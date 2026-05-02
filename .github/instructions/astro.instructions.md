---
applyTo: "**/*.astro"
---
# Astro Component Rules

- Every .astro component must have a <style> block at the bottom
  for its own scoped styles
- Never import React, Vue, or any JS framework inside .astro files
- Always define TypeScript-style props using the Astro.props pattern
  even if we are not using TypeScript
- Use semantic HTML inside every component:
  - Navbar goes inside <nav>
  - Page sections go inside <section> with an id attribute
  - Cards go inside <article>
- Every section component must have a class matching its filename
  Example: Hero.astro must have <section class="hero">
- Always add an id to each section for smooth scroll navigation
  Example: <section id="about" class="about-section">
- Never use inline styles — put everything in the <style> block
- Image tags must always include: alt, width, height, loading="lazy"