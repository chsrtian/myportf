---
applyTo: "**/*.js"
---
# JavaScript Rules

- Vanilla JS only — never import or require any library
- Always use const by default, let only when reassignment is needed
  Never use var

- Always check if an element exists before using it:
  const btn = document.querySelector('.menu-btn')
  if (!btn) return

- Use descriptive function names that explain what they do:
  Good: initMobileMenu(), observeSections(), handleScroll()
  Bad:  init(), run(), doStuff()

- Comment every function with what it does and what it takes:
  /**
   * Adds .visible class to sections when they enter the viewport
   * Uses Intersection Observer for performance
   */
  function observeSections() { ... }

- All DOM queries go at the top of the file
- All event listeners go after DOM queries
- All functions go below event listeners

- For Intersection Observer animations, always use this pattern:
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target) // stop watching after animation
      }
    })
  }, { threshold: 0.1 })

- Never use setTimeout for animations — use CSS transitions instead