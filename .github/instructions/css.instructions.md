---
applyTo: "**/*.css"
---
# CSS Rules

- Always use CSS custom properties for colors, fonts, and spacing
  Never hardcode values like #ffffff or 16px directly in rules
  Always reference variables: var(--color-text), var(--spacing-md)

- Follow this variable naming convention:
  --color-[name]     for colors     (e.g. --color-bg, --color-accent)
  --font-[name]      for fonts      (e.g. --font-heading, --font-body)
  --spacing-[size]   for spacing    (e.g. --spacing-sm, --spacing-lg)
  --radius-[size]    for borders    (e.g. --radius-md)
  --transition-base  for animation speed

- Write mobile styles first, then use min-width for larger screens:
  /* mobile — default */
  .hero { font-size: 2rem; }

  /* tablet and up */
  @media (min-width: 768px) { .hero { font-size: 3rem; } }

  /* desktop and up */
  @media (min-width: 1280px) { .hero { font-size: 4rem; } }

- Comment every major section:
  /* ========================
     HERO SECTION
  ======================== */

- Always include reduced motion support for animations:
  @media (prefers-reduced-motion: reduce) {
    .animate { animation: none; transition: none; }
  }

- Use class names in kebab-case only:
  Good: .project-card, .nav-link, .hero-title
  Bad:  .projectCard, .NavLink, .herotitle