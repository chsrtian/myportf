(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------- Scroll progress bar -------- */
  const progress = document.getElementById('scroll-progress');
  if (progress) {
    const fill = document.createElement('span');
    progress.appendChild(fill);
    let ticking = false;
    const update = () => {
      const doc = document.documentElement;
      const max = (doc.scrollHeight - window.innerHeight) || 1;
      const ratio = Math.max(0, Math.min(1, window.scrollY / max));
      fill.style.transform = `scaleX(${ratio})`;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  /* -------- Scroll reveal + stagger -------- */
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const reveal = () => {
      // Stagger siblings inside known grid/list parents
      const containers = document.querySelectorAll(
        '.skills-grid, .projects-grid, .certificates-list, .timeline, .socials, .about-grid'
      );
      containers.forEach((container) => {
        const children = container.querySelectorAll(':scope > .animate-on-scroll');
        children.forEach((child, i) => {
          child.style.setProperty('--reveal-delay', `${Math.min(i, 5) * 0.08}s`);
        });
      });

      document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', reveal, { once: true });
    } else {
      reveal();
    }
  } else {
    // No animations — show everything immediately
    document.querySelectorAll('.animate-on-scroll').forEach((el) => el.classList.add('in-view'));
  }
})();
