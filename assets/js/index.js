// Simple fade-in on scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.fade-section').forEach(section => observer.observe(section));

// Smooth scroll for nav links (works with Tailwind anchor targets)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', evt => {
    const targetId = anchor.getAttribute('href');
    const el = document.querySelector(targetId);
    if (el) {
      evt.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
