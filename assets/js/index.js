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

// Modal de Asociados - Crear modal dinámicamente
function createModal() {
  const modal = document.createElement('div');
  modal.id = 'asociadoModal';
  modal.className = 'fixed inset-0 z-50 hidden items-center justify-center bg-black/60 backdrop-blur-sm';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden transform transition-all">
      <div class="relative pt-8 pb-4 px-6 text-center">
        <button id="closeModal" class="absolute top-4 right-4 bg-slate-100 rounded-full p-2 hover:bg-slate-200 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img id="modalImg" src="" alt="" class="w-40 h-40 rounded-full object-cover object-top mx-auto border-4 border-primary/20 shadow-lg">
        <h3 id="modalName" class="text-2xl font-heading font-semibold text-slate-800 mt-5"></h3>
        <p id="modalRole" class="text-primary font-medium mt-1"></p>
      </div>
      <div class="px-6 pb-6">
        <p id="modalBio" class="text-slate-600 text-center leading-relaxed"></p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

// Inicializar modal
const modal = createModal();
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalBio = document.getElementById('modalBio');
const closeModalBtn = document.getElementById('closeModal');

function openModal(card) {
  modalImg.src = card.dataset.img;
  modalImg.alt = card.dataset.name;
  modalName.textContent = card.dataset.name;
  modalRole.textContent = card.dataset.role;
  modalBio.textContent = card.dataset.bio;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Abrir modal al hacer click en un asociado
document.querySelectorAll('.brands_item-block').forEach(card => {
  card.addEventListener('click', () => openModal(card));
});

// Cerrar modal
closeModalBtn.addEventListener('click', closeModal);

// Cerrar modal al hacer click fuera
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Cerrar modal con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

// Video Play/Pause functionality
document.querySelectorAll('.video-container').forEach(container => {
  const video = container.querySelector('video');
  const playBtn = container.querySelector('.play-btn');

  playBtn.addEventListener('click', () => {
    if (video.paused) {
      // Pausar otros videos
      document.querySelectorAll('.video-container video').forEach(v => {
        if (v !== video) {
          v.pause();
          v.closest('.video-container').querySelector('.play-btn').classList.remove('hidden');
        }
      });
      video.play();
      playBtn.classList.add('hidden');
    }
  });

  video.addEventListener('click', () => {
    video.pause();
    playBtn.classList.remove('hidden');
  });

  video.addEventListener('ended', () => {
    playBtn.classList.remove('hidden');
  });
});
