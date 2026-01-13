// ==========================================
// DATOS SIMULADOS DE LA API
// ==========================================
const apiData = {
  // Sección "Quiénes somos"
  quienesSomos: {
    titulo: "¿A qué nos dedicamos en <span class='font-bold'>Agrinol</span>?",
    descripcion: "Nuestro grupo empresarial surge en 2019 para impulsar el desarrollo regional del soconusco. Detonando el potencial del pacífico mexicano al convertir a puerto chiapas en un polo de desarrollo marítimo - industrial.",
    imagen: "https://huubie.com.mx/video/barquito.png",
    contenido: "Tenemos como misión desarrollar el potencial de puerto chiapas con el concurso de las autoridades, invitando a la sociedad civil a ser copartícipe de este proyecto en beneficio del interés nacional.<br><br>Con la visión y gestión del ing. Carlos Alberto Vila Serrano, conocedor del entorno de negocios del sector público y privado, con la firma: AGRINOL SAPI DE CV, es el líder de esta gran promoción en beneficio de chiapas y méxico.",
    mision: {
      titulo: "Misión",
      texto: "Gestionar e implementar proyectos sustentables del desarrollo y bienestar."
    },
    vision: {
      titulo: "Visión",
      texto: "Provocar el desarrollo y bienestar de Chiapas en forma sostenible."
    },
    imagenMisionVision: "https://huubie.com.mx/video/barquito.png"
  },

  // Sección "Asociados"
  asociados: {
    titulo: "Asociados",
    descripcion: "Conformamos un equipo estratégico integrado por profesionales altamente comprometidos que suman conocimientos especializados para el éxito de cada proyecto.",
    miembros: [
      {
        nombre: "Carlos Alberto Vila Serrano",
        rol: "Director General",
        imagen: "./assets/img/carlos_agrinol.png",
        bio: `Ingeniero civil y empresario con amplia trayectoria en el desarrollo de proyectos regionales de alto impacto. Es fundador y director de AGRINOL, SAPI de C.V., empresa enfocada en la estructuración, gestión e implementación de proyectos estratégicos que impulsan el crecimiento económico y social del sureste de México.
A lo largo de su carrera ha liderado iniciativas en infraestructura, agroindustria, logística y conectividad regional, articulando la participación del sector privado, organizaciones sociales y los distintos niveles de gobierno. Ha encabezado proyectos de alcance nacional como la Terminal Portuaria Remota en Puerto Chiapas y los Polos de Desarrollo para el Bienestar (PODEBIs) Tapachula I y II, consolidándose como una figura clave en la planeación y ejecución de proyectos que transforman territorios y fortalecen el desarrollo regional.
`
      },
      {
        nombre: "María González",
        rol: "Directora de Operaciones",
        imagen: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80",
        bio: "Especialista en gestión de proyectos sustentables con más de 15 años de experiencia en el sector energético y desarrollo regional."
      },
      {
        nombre: "Roberto Hernández",
        rol: "Director Financiero",
        imagen: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
        bio: "Experto en finanzas corporativas y estructuración de proyectos de inversión. Amplia trayectoria en el sector portuario."
      },
      {
        nombre: "Ana Martínez",
        rol: "Directora Legal",
        imagen: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
        bio: "Abogada especializada en derecho corporativo y regulación portuaria. Asesora en temas de comercio internacional."
      },
      {
        nombre: "Luis Ramírez",
        rol: "Director de Proyectos",
        imagen: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
        bio: "Ingeniero civil con especialidad en infraestructura portuaria. Líder de proyectos de desarrollo marítimo-industrial."
      },
      {
        nombre: "Pedro Sánchez",
        rol: "Director Comercial",
        imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        bio: "Especialista en desarrollo de negocios y relaciones comerciales internacionales. Promotor de alianzas estratégicas."
      }
    ]
  },

  // Sección "Proyectos"
  proyectos: {
    titulo: "Nuestros Proyectos<br>Más Recientes",
    items: [
      {
        nombre: "Terminal Portuaria Remota",
        detalles: [
          "Complementar puerto Chiapas con una terminal mar adentro sin asolvés (25 Ha).",
          "Tres muelles (150, 225, 300).",
          "Podebi en zona de reserva de la asipona (270 Ha).",
          "Construcción y operación regulada por SEMAR.",
          "Inversión privada complementando a la inversión pública."
        ]
      },
      {
        nombre: "Construcción de las rutas comerciales",
        detalles: [
          "Nuevo terminal portuaria.",
          "Instalaciones de cada plantel.",
          "Centro de datos."
        ]
      }
    ],
    videos: [
      { poster: "https://huubie.com.mx/video/palomas.png", src: "https://www.agrinol.mx/vid/gespro.mp4", size: "large" },
      { poster: "https://huubie.com.mx/video/computadora.png", src: "https://www.agrinol.mx/vid/gespro.mp4", size: "small" },
      { poster: "https://huubie.com.mx/video/pasto.png", src: "https://www.agrinol.mx/vid/gespro.mp4", size: "small" },
      { poster: "https://huubie.com.mx/video/pasto.png", src: "https://www.agrinol.mx/vid/gespro.mp4", size: "small" },
      { poster: "https://huubie.com.mx/video/computadora.png", src: "https://www.agrinol.mx/vid/gespro.mp4", size: "small" }
    ]
  },

  // Sección "Portafolio"
  portafolio: {
    titulo: "Portafolio",
    proyectos: [
      {
        nombre: "Proyecto 1",
        descripcion: "Terminal portuaria de última generación",
        imagen: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        destacado: true
      },
      {
        nombre: "Proyecto 2",
        descripcion: "Centro de negocios marítimo",
        imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        destacado: false
      },
      {
        nombre: "Proyecto 3",
        descripcion: "Infraestructura industrial",
        imagen: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
        destacado: false
      },
      {
        nombre: "Proyecto 4",
        descripcion: "Desarrollo sustentable regional",
        imagen: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
        destacado: true
      }
    ]
  },

  // Footer / Contacto
  footer: {
    logo: "assets/img/logo-agrinol.png",
    copyright: "Todos los derechos reservados | 2026",
    contacto: {
      titulo: "Contacto",
      direccion: {
        texto: "19 Oriente #38, colonia centro. Tapachula, Chiapas",
        url: "https://www.google.com/maps/place/Capsula+CC/@14.9131086,-92.2544204,89m/data=!3m1!1e3!4m6!3m5!1s0x858e0f24609096f3:0xfb9517e5666ed8a8!8m2!3d14.9129978!4d-92.2544324!16s%2Fg%2F11fp3pwhf9?hl=es-ES&entry=ttu"
      },
      telefono: {
        texto: "+52 962 184 0551",
        url: "https://api.whatsapp.com/send/?phone=%2B529621840551&text&type=phone_number&app_absent=0"
      },
      email: {
        texto: "presidencia@agrinol.mx",
        url: "mailto:presidencia@agrinol.mx"
      }
    }
  }
};


// ==========================================
// FUNCIONES DE RENDERIZADO
// ==========================================

function renderQuienesSomos() {
  const section = document.getElementById('quienes');
  if (!section) return;

  const data = apiData.quienesSomos;
  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-6 space-y-6">
      <div class="text-center mt-10 mb-10">
        <h2 class="text-4xl text-primary font-heading font-semibold mt-6 mb-6">${data.titulo}</h2>
        <p class="text-sm md:text-base text-slate-600 mt-3 max-w-3xl mx-auto px-16">${data.descripcion}</p>
      </div>
      <div class="flex flex-col md:flex-row items-stretch gap-6">
        <div class="relative w-full md:w-2/5 rounded-3xl shadow-lg overflow-hidden min-h-[260px]">
          <img src="${data.imagen}" alt="Puerto" class="absolute inset-0 w-full h-full object-cover">
        </div>
        <div class="bg-[#F8F7F2] rounded-3xl p-6 w-full md:w-3/5 text-sm md:text-base text-slate-700">
          <p>${data.contenido}</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-stretch gap-6">
        <div class="bg-[#F8F7F2] rounded-3xl p-6 w-full md:w-3/5 text-sm md:text-base text-slate-700 flex flex-col justify-center">
          <div class="mb-10">
            <h3 class="text-2xl font-heading font-semibold text-primary">${data.mision.titulo}</h3>
            <p>${data.mision.texto}</p>
          </div>
          <div>
            <h3 class="text-2xl font-heading font-semibold text-primary">${data.vision.titulo}</h3>
            <p>${data.vision.texto}</p>
          </div>
        </div>
        <div class="relative w-full md:w-2/5 rounded-3xl shadow-lg overflow-hidden min-h-[260px]">
          <img src="${data.imagenMisionVision}" alt="Puerto" class="absolute inset-0 w-full h-full object-cover">
        </div>
      </div>
    </div>
  `;
}

function renderAsociados() {
  const section = document.getElementById('asociados');
  if (!section) return;

  const data = apiData.asociados;
  const miembrosHTML = data.miembros.map(m => `
    <div class="brands_item-block cursor-pointer" data-name="${m.nombre}" data-role="${m.rol}" data-img="${m.imagen}" data-bio="${m.bio}">
      <div class="brands_item-logo-wrap">
        <img src="${m.imagen}" loading="lazy" alt="${m.nombre}" class="brands_item-logo">
      </div>
      <div class="brands_item-texts">
        <h4 class="brands_item-name">${m.nombre}</h4>
        <p class="brands_item-desc">${m.rol}</p>
      </div>
    </div>
  `).join('');

  // Duplicar para el loop infinito
  const miembrosDuplicados = miembrosHTML + miembrosHTML;

  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-6 text-center space-y-6">
      <div class="text-center mt-10 mb-16">
        <h2 class="text-4xl font-heading font-semibold mt-6 mb-6">${data.titulo}</h2>
        <p class="text-sm md:text-base text-slate-600 mt-3 max-w-3xl mx-auto px-16">${data.descripcion}</p>
      </div>
      <div class="brands_list-wrapper">
        <div class="brands_list">${miembrosDuplicados}</div>
      </div>
    </div>
  `;
}

function renderProyectos() {
  const section = document.getElementById('proyectos');
  if (!section) return;

  const data = apiData.proyectos;

  const proyectosHTML = data.items.map(p => `
    <div class="mb-6">
      <p class="font-semibold">${p.nombre}.</p>
      <ul class="list-disc list-inside space-y-1">
        ${p.detalles.map(d => `<li>${d}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  const videosHTML = data.videos.map((v, i) => {
    const isLarge = v.size === 'large';
    return `
      <div class="relative rounded-3xl shadow-lg overflow-hidden ${isLarge ? 'col-span-2 h-64' : 'h-32'} video-container">
        <video class="w-full h-full object-cover" poster="${v.poster}" preload="metadata">
          <source src="${v.src}" type="video/mp4">
        </video>
        <button class="play-btn absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
          <div class="${isLarge ? 'w-16 h-16' : 'w-10 h-10'} bg-white/90 rounded-full flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="${isLarge ? 'h-8 w-8 ml-1' : 'h-5 w-5 ml-0.5'} text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </button>
      </div>
    `;
  }).join('');

  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
      <div class="space-y-4">
        <h2 class="text-4xl font-heading font-semibold leading-tight text-primary mb-6">${data.titulo}</h2>
        <div class="text-slate-700 text-sm md:text-base space-y-1">${proyectosHTML}</div>
      </div>
      <div class="grid grid-cols-2 gap-4 pt-16">${videosHTML}</div>
    </div>
  `;
}

function renderPortafolio() {
  const section = document.getElementById('portafolio');
  if (!section) return;

  const data = apiData.portafolio;

  const proyectosHTML = data.proyectos.map(p => `
    <div class="${p.destacado ? 'md:col-span-2' : ''} bg-white rounded-3xl overflow-hidden shadow-lg">
      <img src="${p.imagen}" class="w-full ${p.destacado ? 'h-72' : 'h-64'} object-cover" alt="${p.nombre}">
      <div class="p-4">
        <p class="font-semibold text-sm uppercase tracking-wide">${p.nombre}</p>
        <p class="text-slate-600 text-sm">${p.descripcion}</p>
      </div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-6 space-y-8">
      <div class="text-center mb-10 mt-10">
        <h2 class="text-3xl font-heading font-semibold">${data.titulo}</h2>
      </div>
      <div class="grid md:grid-cols-3 gap-4 px-20">${proyectosHTML}</div>
    </div>
  `;
}

function renderFooter() {
  const footer = document.getElementById('contacto');
  if (!footer) return;

  const data = apiData.footer;
  const c = data.contacto;

  footer.innerHTML = `
    <div class="max-w-5xl mx-auto px-6 space-y-8">
      <div class="text-center">
        <img src="${data.logo}" alt="AGRINOL logo" class="mx-auto h-20 w-auto mb-1">
        <h3 class="text-2xl font-heading font-semibold text-primary mb-6">${c.titulo}</h3>
      </div>
      <div class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm text-slate-600">
        <a href="${c.direccion.url}" target="_blank" class="flex items-center gap-2 hover:text-primary transition-colors">
          <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          ${c.direccion.texto}
        </a>
        <a href="${c.telefono.url}" target="_blank" class="flex items-center gap-2 hover:text-primary transition-colors">
          <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          ${c.telefono.texto}
        </a>
        <a href="${c.email.url}" class="flex items-center gap-2 hover:text-primary transition-colors">
          <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          ${c.email.texto}
        </a>
      </div>
      <div class="text-center pt-6 border-t border-slate-200">
        <p class="text-slate-400 text-sm">${data.copyright}</p>
      </div>
    </div>
  `;
}


// ==========================================
// INICIALIZACIÓN
// ==========================================

function initApp() {
  // Renderizar todas las secciones con datos de la "API"
  renderQuienesSomos();
  renderAsociados();
  renderProyectos();
  renderPortafolio();
  renderFooter();

  // Inicializar funcionalidades después del renderizado
  initFadeObserver();
  initSmoothScroll();
  initModal();
  initVideoPlayers();
}

function initFadeObserver() {
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
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', evt => {
      evt.preventDefault();
      const targetId = anchor.getAttribute('href');
      const el = document.querySelector(targetId);
      if (el) {
        // Usar setTimeout para asegurar que el layout esté calculado
        setTimeout(() => {
          const offsetTop = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }, 15);
      }
    });
  });
}

function initModal() {
  // Crear modal dinámicamente - diseño horizontal
  const modal = document.createElement('div');
  modal.id = 'asociadoModal';
  modal.className = 'fixed inset-0 z-50 hidden items-center justify-center bg-black/50 backdrop-blur-sm';
  modal.innerHTML = `
    <div class="bg-[#f5f5f5] rounded-xl shadow-2xl max-w-4xl w-full mx-4 overflow-hidden transform transition-all flex flex-col md:flex-row">
      <!-- Imagen lado izquierdo -->
      <div class="relative w-full md:w-2/5 bg-white">
        <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary"></div>
        <img id="modalImg" src="" alt="" class="w-full h-64 md:h-full object-cover object-top">
      </div>
      <!-- Contenido lado derecho -->
      <div class="w-full md:w-3/5 p-8 md:p-10 relative">
        <button id="closeModal" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 id="modalName" class="text-3xl md:text-4xl font-heading font-semibold text-slate-800 mb-2"></h3>
        <p id="modalRole" class="text-sm uppercase tracking-widest text-slate-500 mb-6 border-b border-slate-200 pb-4"></p>
        <p id="modalBio" class="text-slate-600 leading-relaxed text-sm md:text-base"></p>
        <!-- Iconos sociales decorativos -->
        <div class="flex gap-4 mt-8 pt-6 border-t border-slate-200">
          <a href="#" class="text-slate-400 hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="#" class="text-slate-400 hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" class="text-slate-400 hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

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

  // Event listeners
  document.querySelectorAll('.brands_item-block').forEach(card => {
    card.addEventListener('click', () => openModal(card));
  });

  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  });
}

function initVideoPlayers() {
  document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('video');
    const playBtn = container.querySelector('.play-btn');
    if (!video || !playBtn) return;

    playBtn.addEventListener('click', () => {
      if (video.paused) {
        document.querySelectorAll('.video-container video').forEach(v => {
          if (v !== video) {
            v.pause();
            v.closest('.video-container')?.querySelector('.play-btn')?.classList.remove('hidden');
          }
        });
        video.play();
        playBtn.classList.add('hidden');
      }
    });

    video.addEventListener('click', () => { video.pause(); playBtn.classList.remove('hidden'); });
    video.addEventListener('ended', () => { playBtn.classList.remove('hidden'); });
  });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);
