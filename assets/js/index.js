// ==========================================
// DATOS SIMULADOS DE LA API
// ==========================================
const apiData = {
  // Haciendo partícipe a la sociedad civil y al Gobierno de este proyecto en beneficio del interés nacional
  // con el apoyo de las autoridades,
  //  invitando a la sociedad civil a ser copartícipe de este proyecto en beneficio del interés nacional.<br><br>
  //   Agrinol busca desarrollar el potencial del estado de Chiapas, haciendo partícipe a la sociedad civil y
  //    al Gobierno de este proyecto en beneficio del interés nacional
  // Sección "Quiénes somos"
  // En Agrinol tenemos como misión desarrollar el potencial del Estado de Chiapas implementando proyectos de sectores importantes como el sector agrícola, agroindustrial, infraestructura y comunicaciones, innovación y tecnología, entre otros. 
  //     Haciendo partícipe a la sociedad civil y al Gobierno de estos proyectos en beneficio del interés nacional.
  quienesSomos: {
    titulo: `¿A qué nos dedicamos?`,
    descripcion: `Nuestro grupo empresarial surge en 2019 para impulsar el desarrollo y bienestar de Chiapas.`,
    imagen: `https://huubie.com.mx/video/barquito.png`,
    contenido: `

      En Agrinol impulsamos el desarrollo sostenible de Chiapas mediante la implementación de proyectos estratégicos en los sectores agrícola, agroindustrial, infraestructura, comunicaciones, innovación y tecnología.
Trabajamos de la mano con la sociedad civil y el Gobierno para generar impacto positivo, fortalecer la economía regional y contribuir al bienestar del país.
    `,
    mision: {
      titulo: `Misión`,
      texto: `Gestionar e implementar proyectos sustentables del desarrollo y bienestar.`
    },
    vision: {
      titulo: `Visión`,
      texto: `Implementar el desarrollo y bienestar de Chiapas en forma sostenible.`
    },
    imagenMisionVision: `https://huubie.com.mx/video/barquito.png`
  },

  // Sección "Equipo" - Fuente única de datos para organigrama y carrusel
  equipo: [
    {
      id: 1,
      name: `Carlos Alberto Vila Serrano`,
      position: `CEO`,
      image: `./assets/img/carlos_vila.png`,
      description: `Ingeniero civil y empresario con amplia trayectoria en el desarrollo de proyectos regionales de alto impacto. Es fundador y director de AGRINOL, SAPI de C.V., empresa enfocada en la estructuración, gestión e implementación de proyectos estratégicos que impulsan el crecimiento económico y social del sureste de México. A lo largo de su carrera ha liderado iniciativas en infraestructura, agroindustria, logística y conectividad regional, articulando la participación del sector privado, organizaciones sociales y los distintos niveles de gobierno.<br><br>Ha encabezado proyectos de alcance nacional como la Terminal Portuaria Remota en Puerto Chiapas y los Polos de Desarrollo para el Bienestar (PODEBIs) Tapachula I y II, consolidándose como una figura clave en la planeación y ejecución de proyectos que transforman territorios y fortalecen el desarrollo regional.`,
      row: 1
    },
    {
      id: 2,
      name: `Roberto Rocha`,
      position: `Industria y negocios`,
      image: ``,
      description: ``,
      row: 2
    },
    {
      id: 3,
      name: `Héctor López Gutiérrez`,
      position: `Desarrollo Tecnológico`,
      image: `./assets/img/hector_lopez_gutierrez.png`,
      description: ``,
      row: 2
    },
    {
      id: 4,
      name: `Javier GTZ Reynoso`,
      position: `Proyectos y presupuesto`,
      image: ``,
      description: ``,
      row: 3
    },
    {
      id: 5,
      name: `José Ignacio Irigoyen Palacios`,
      position: `Análisis financiero`,
      image: `./assets/img/jose_i_irigoyen_p1.png`,
      description: `Líder financiero con más de 20 años de experiencia en capital privado, venture capital y fusiones y adquisiciones. Es cofundador de Sentinel Capital Fund, donde encabeza la estructuración financiera, recaudación de capital y relaciones con inversionistas. Actualmente también se desempeña como Presidente de TX America Cinemas y Director de Finanzas (CFO) en VITAL y HolaStaff.<br><br>A lo largo de su trayectoria ha acompañado a empresas en procesos de crecimiento, expansión internacional y exit, aportando una visión estratégica enfocada en maximizar rendimientos ajustados al riesgo. Ha sido reconocido como Premio Nacional del Emprendedor, conferencista en Harvard Business School y miembro de Endeavor y del Salón de la Fama de EY Entrepreneur Of The Year™, consolidándose como una referencia en el ecosistema financiero y de inversión.`,
      row: 3
    },
    {
      id: 6,
      name: `Jorge O. Castañeda`,
      position: `Universidad corporativa`,
      image: `./assets/img/jorge_o_castaneda.png`,
      description: `CEO global del Tony Buzan Group & Academy y una de las voces más influyentes a nivel internacional en pensamiento estratégico, innovación y liderazgo organizacional. Su trabajo se centra en el diseño de modelos que impulsan el crecimiento económico sostenible, integrando visión empresarial, gobernanza y desarrollo de talento.<br><br>Es creador del Mapeo Sistémico de Causas Raíz, metodología aplicada en gobiernos y empresas para comprender ecosistemas complejos y acelerar la toma de decisiones estratégicas. Ha desarrollado modelos propios de liderazgo e innovación utilizados en proyectos de gran escala que requieren alineación entre actores públicos y privados.<br><br>Académico, autor y coautor de diversas obras junto a Tony Buzan, el Dr. Castañeda combina rigor intelectual con aplicación práctica, aportando valor en iniciativas de transformación organizacional, atracción de inversión y desarrollo industrial de largo plazo.`,
      row: 3
    },
    {
      id: 7,
      name: `Alfredo Cerdio S`,
      position: `Proyecto agroindustrial`,
      image: ``,
      description: ``,
      row: 3
    },
    {
      id: 8,
      name: `Carlos Winkler Schroeder`,
      position: `Promoción industrial y negocios`,
      image: `./assets/img/carlos_winkler_s1.png`,
      description: `Consultor empresarial y emprendedor con más de 20 años de experiencia en el desarrollo de negocios, estrategia comercial e inversión. Es fundador y director de VITAL Consultoría, firma desde la cual acompaña a empresas en procesos de profesionalización, crecimiento y atracción de capital, ayudándolas a construir modelos de negocio sólidos y escalables.<br><br>A lo largo de su trayectoria ha impulsado y liderado proyectos de alto impacto en sectores como tecnología, entretenimiento, agronegocios y energía. Destaca como creador de HolaStaff, plataforma tecnológica de reclutamiento y capital humano, así como inversionista y fundador de TX América Cinemas, cadena de cines en Estados Unidos enfocada en el mercado latino.<br><br>Su visión estratégica, liderazgo y capacidad para identificar oportunidades lo han posicionado como un aliado clave en proyectos empresariales innovadores y de largo alcance.`,
      row: 3
    },
    {
      id: 9,
      name: `Claudia Velasco`,
      position: `Difusión y medios`,
      image: ``,
      description: ``,
      row: 3
    },
    {
      id: 10,
      name: `Jorge Romo G`,
      position: `Digitalización`,
      image: `./assets/img/jorge_romo.jpg`,
      description: ``,
      row: 3
    },
    {
      id: 11,
      name: `Jean Francois Encinas`,
      position: `Desarrollador de negocios`,
      image: `./assets/img/jean_francois_encinas.png`,
      description: ``,
      row: 3
    },
    {
      id: 12,
      name: `José Luis Díaz Covarrubias`,
      position: `Planes de desarrollo`,
      image: `./assets/img/jose_luis_diaz.png`,
      description: `Ejecutivo y consultor especializado en administración portuaria, con más de cuatro décadas de experiencia en la operación, planeación y desarrollo de puertos, terminales marítimas y proyectos de infraestructura logística en México.<br><br>A lo largo de su trayectoria ha ocupado posiciones de alta dirección en el sistema portuario nacional, incluyendo la Gerencia de Operaciones de la Administración Portuaria Integral de Altamira y la Subdirección Administrativa de una de las principales terminales multipropósito del país. Actualmente asesora proyectos estratégicos en diseño portuario, concesiones, operación, licitaciones y desarrollo de nuevos puertos, integrando una visión técnica, financiera y operativa orientada a resultados, seguridad y sostenibilidad.`,
      row: 3
    },
    {
      id: 13,
      name: `Miguel Cid del Prado Martínez`,
      position: `Universidades existentes`,
      image: `./assets/img/miguel_cid_del_prado.png`,
      description: `Doctor en Ingeniería Aplicada y especialista en Ingeniería en Gestión Empresarial, con una sólida trayectoria en planeación estratégica, desarrollo de proyectos y economía social y solidaria. Actualmente se desempeña como Coordinador de la Especialidad en Economía Social y Solidaria en el Instituto Tecnológico de Tuxtla Gutiérrez, donde impulsa modelos de emprendimiento con enfoque sostenible y de impacto social.<br><br>Ha participado como asesor en estrategias de desarrollo económico local, auditor líder de sistemas de gestión de calidad y docente en áreas clave como planes de negocio, ingeniería económica y gestión de la producción. Su experiencia combina rigor académico, aplicación práctica y transferencia de tecnología, contribuyendo al fortalecimiento de proyectos productivos, innovación social y formación de talento orientado al desarrollo regional sostenible.`,
      row: 3
    },
    {
      id: 14,
      name: `Alicia M Glez Torra`,
      position: `Subceo`,
      image: ``,
      description: ``,
      row: 3
    },
    {
      id: 15,
      name: `Alberto Pineda Tuells`,
      position: `Análisis y Gestión`,
      image: `./assets/img/pineda.jpg`,
      description: `Ingeniero en Electrónica y Comunicaciones, con una trayectoria que cruza finanzas, desarrollo económico, transformación institucional y liderazgo estratégico en los sectores público y privado. Ha ocupado posiciones clave en banca especializada, organismos empresariales, consejos directivos y gobiernos locales, participando en proyectos de alto impacto regional y nacional.<br><br>En 2024 fue distinguido con el Tony Buzan Award for Strategic Leadership, otorgado en la House of Lords, Palacio de Westminster, Londres, reconocimiento internacional a su liderazgo y visión estratégica. Su perfil combina capacidad técnica, experiencia financiera y articulación multisectorial, consolidándolo como una figura clave en la planeación y ejecución de iniciativas orientadas al crecimiento sostenible.`,
      row: 3
    },
    {
      id: 16,
      name: `Rafael Alfredo Nava Ricaño`,
      position: `Cluster Agroalimentario`,
      image: `./assets/img/rafael_nava.jpg`,
      description: `Empresario agroindustrial y presidente de NAVA Corp., con una trayectoria construida desde la tercera generación familiar dedicada a la producción y comercialización agroalimentaria en Chiapas. Lidera un ecosistema empresarial integrado que abarca producción, transformación, logística y exportación de productos agrícolas de alto valor.<br><br>A lo largo de su carrera ha impulsado modelos productivos enfocados en trazabilidad, innovación, sostenibilidad y expansión de mercados, trabajando con cultivos estratégicos como plátano, cacao del Soconusco, café de altura y mango Ataulfo. Además, participa activamente en organismos clave del sector, desde donde contribuye al fortalecimiento y profesionalización de la agroindustria regional, con una visión de impacto nacional e internacional.`,
      row: 3
    }
  ],

  // Sección "Organigrama" - Configuración de visualización
  organigrama: {
    titulo: `Estructura Organizacional`,
    descripcion: `Nuestro equipo está conformado por líderes estratégicos con amplia experiencia en sus áreas de especialización.`
  },

  // Sección "Asociados" - Configuración de visualización
  asociados: {
    titulo: `Asociados`,
    descripcion: `Conformamos un equipo estratégico integrado por profesionales altamente comprometidos que aportan conocimientos especializados para el éxito de cada proyecto.`
  },

  // Sección "Proyectos"
  proyectos: {
    titulo: "Proyectos",
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
        nombre: "Promoción de rutas comerciales y cabotaje",
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
    descripcion: "Nos especializamos en la gestión y desarrollo de proyectos de alto impacto que impulsan la economía regional y nacional. Nuestra trayectoria se define por la transformación de visiones en realidades tangibles.",
    clasificaciones: [
      { id: 1, name: "🌿 Sector Agroindustrial y Sustentabilidad" },
      { id: 2, name: "🏗️ Infraestructura y Comunicaciones" },
      { id: 3, name: "🚆 Movilidad y Transporte Urbano" },
      { id: 4, name: "💻 Innovación y Tecnología de Alto Desempeño" },
      { id: 5, name: "📍 Proyectos en Gestión y Desarrollo Estratégico" }
    ],
    proyectos: [
      {
        id: 1,
        name: "Planta de Bioetanol (Sustentabilidad Energética)",
        description: "Desarrollo de infraestructura avanzada para la producción de biocombustible a partir de sorgo y caña de azúcar.",
        class_id: 1,
        media: [
          { type: "video", url: "https://www.agrinol.mx/vid/gespro.mp4" },
          { type: "image", url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800" },
          { type: "image", url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800" }
        ]
      },
      {
        id: 2,
        name: "Planta de Fertilizantes",
        description: "Proyecto enfocado en el fortalecimiento de la soberanía agrícola mediante la producción local de insumos esenciales.",
        class_id: 1,
        media: [
          { type: "image", url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800" },
          { type: "image", url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800" }
        ]
      },
      {
        id: 3,
        name: "Salas de Empaque para Insectos Benéficos",
        description: "[CASO DE ÉXITO] Construcción y equipamiento integral de instalaciones especializadas para el control biológico de plagas.",
        class_id: 1,
        media: [
          { type: "image", url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800" },
          { type: "image", url: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800" }
        ]
      },
      {
        id: 4,
        name: "Rehabilitación de la Línea K del Ferrocarril",
        description: "[CASO DE ÉXITO] Gestión histórica y culminación exitosa de la rehabilitación del tramo Ixtepec, Oaxaca a Ciudad Hidalgo, Chiapas, incluyendo el ramal estratégico hacia Puerto Chiapas.",
        class_id: 2,
        media: [
          { type: "image", url: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800" },
          { type: "image", url: "https://images.unsplash.com/photo-1527684651001-731c474bbb5a?w=800" }
        ]
      },
      {
        id: 5,
        name: "Caminos Rurales \"Saca Cosechas\"",
        description: "Implementación de rutas logísticas para optimizar el transporte de productos desde el campo hacia los centros de distribución.",
        class_id: 2,
        media: [
          { type: "image", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" },
          { type: "image", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800" }
        ]
      },
      {
        id: 6,
        name: "Terminal Portuaria Remota",
        description: "Proyecto de inversión y conectividad vinculado al corredor interoceánico del Istmo de Tehuantepec.",
        class_id: 2,
        media: [
          { type: "video", url: "./assets/img/project-terminal-portuaria/proyecto1.mp4" },
          { type: "image", url: "./assets/img/project-terminal-portuaria/EV2.jpg" },
          { type: "image", url: "./assets/img/project-terminal-portuaria/EV4.jpg" },
          { type: "image", url: "./assets/img/project-terminal-portuaria/EV7.jpeg" }
        ]
      },
      {
        id: 7,
        name: "Tren Ligero Tapachula - Puerto Chiapas",
        description: "Proyecto de transporte masivo diseñado para conectar de manera eficiente el núcleo urbano con la zona portuaria.",
        class_id: 3,
        media: [
          { type: "image", url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" },
          { type: "image", url: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800" }
        ]
      },
      {
        id: 8,
        name: "Transporte y Terminales de Corto Recorrido",
        description: "Optimización de la movilidad regional mediante infraestructura de transferencia de pasajeros y carga.",
        class_id: 3,
        media: [
          { type: "image", url: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800" },
          { type: "image", url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800" }
        ]
      },
      {
        id: 9,
        name: "Laboratorio Regional de Supercómputo",
        description: "Desarrollo de un centro tecnológico de \"Súper Cómputo\" para el procesamiento de datos y apoyo a la investigación de alto nivel.",
        class_id: 4,
        media: [
          { type: "image", url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800" },
          { type: "image", url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800" }
        ]
      },
      {
        id: 10,
        name: "Corredor Interoceánico y Polos de Desarrollo",
        description: "Actualmente, nuestra organización lidera la gestión para la consolidación de los Polos de Desarrollo 1 y 2 en las regiones de Tapachula y Ciudad Hidalgo, Chiapas.",
        class_id: 5,
        media: [
          { type: "image", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" },
          { type: "image", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" }
        ]
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
        texto: "+52 962 460 0000",
        url: "https://api.whatsapp.com/send/?phone=%2B529624600000&text&type=phone_number&app_absent=0"
      },
      email: {
        texto: "presidencia@agrinol.mx",
        url: "mailto:presidencia@agrinol.mx"
      }
    }
  },

  // Terminal Portuaria - Galería
  terminalPortuaria: {
    nombre: "Terminal Portuaria Remota",
    galeria: [
      { type: "video", src: "./assets/img/project-terminal-portuaria/proyecto1.mp4" },
      { type: "image", src: "./assets/img/project-terminal-portuaria/EV2.jpg" },
      { type: "image", src: "./assets/img/project-terminal-portuaria/EV4.jpg" },
      { type: "image", src: "./assets/img/project-terminal-portuaria/EV7.jpeg" }
    ]
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
    <div class="max-w-6xl mx-auto px-4 md:px-6 space-y-4 md:space-y-6">
      <div class="text-center mt-4 md:mt-10 mb-6 md:mb-10">
        <h2 class="text-2xl md:text-4xl text-primary font-heading font-semibold mt-4 md:mt-6 mb-4 md:mb-6">${data.titulo}</h2>
        <p class="text-sm md:text-lg text-slate-600 mt-2 md:mt-3 max-w-3xl mx-auto px-4 md:px-16">${data.descripcion}</p>
      </div>
      <div class="flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
        <div class="relative w-full md:w-2/5 rounded-2xl md:rounded-3xl shadow-lg overflow-hidden min-h-[200px] md:min-h-[260px]">
          <img src="${data.imagen}" alt="Puerto" class="absolute inset-0 w-full h-full object-cover">
        </div>
        <div class="bg-[#F8F7F2] rounded-2xl md:rounded-3xl p-4 md:p-6 w-full md:w-3/5 text-sm md:text-lg text-slate-700 text-justify ">
          <p>${data.contenido}</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
        <div class="bg-[#F8F7F2] rounded-2xl md:rounded-3xl p-4 md:p-6 w-full md:w-3/5 text-sm md:text-base text-slate-700 text-justify flex flex-col justify-center">
          <div class="mb-6 md:mb-3">
            <h3 class="text-xl md:text-2xl font-heading font-semibold text-primary">${data.mision.titulo}</h3>
            <p class='text-sm md:text-lg'>${data.mision.texto}</p>
          </div>
          <div>
            <h3 class="text-xl md:text-2xl font-heading font-semibold text-primary">${data.vision.titulo}</h3>
            <p class='text-sm md:text-lg'>${data.vision.texto}</p>
          </div>
        </div>
        <div class="relative w-full md:w-2/5 rounded-2xl md:rounded-3xl shadow-lg overflow-hidden min-h-[200px] md:min-h-[260px]">
          <img src="${data.imagenMisionVision}" alt="Puerto" class="absolute inset-0 w-full h-full object-cover">
        </div>
      </div>
    </div>
  `;
}

function renderOrganigrama() {
  const section = document.getElementById('organigrama');
  if (!section) return;

  const data = apiData.organigrama;
  const equipo = apiData.equipo;

  // Filtrar por row
  const ceo = equipo.find(m => m.row === 1);
  const directores = equipo.filter(m => m.row === 2);
  const especialistas = equipo.filter(m => m.row === 3);

  // Crear data attributes para el modal
  const createDataAttrs = (persona) => {
    return `data-name="${persona.name}" data-role="${persona.position}" data-img="${persona.image}" data-bio="${persona.description}"`;
  };

  // Card template estilo organigrama corporativo
  const createOrgCard = (persona, size = 'md') => {
    const sizes = {
      lg: { img: 'w-24 h-24 md:w-28 md:h-28', border: 'border-[3px]', text: 'text-xs md:text-sm', subtext: 'text-[10px] md:text-xs', minW: 'min-w-[140px] md:min-w-[180px]', icon: 'w-12 h-12 md:w-14 md:h-14' },
      md: { img: 'w-20 h-20 md:w-24 md:h-24', border: 'border-[3px]', text: 'text-[10px] md:text-xs', subtext: 'text-[9px] md:text-[10px]', minW: 'min-w-[120px] md:min-w-[160px]', icon: 'w-10 h-10 md:w-12 md:h-12' },
      sm: { img: 'w-16 h-16 md:w-20 md:h-20', border: 'border-2', text: 'text-[9px] md:text-[10px]', subtext: 'text-[8px] md:text-[9px]', minW: 'min-w-[100px] md:min-w-[130px]', icon: 'w-8 h-8 md:w-10 md:h-10' }
    };
    const s = sizes[size];

    // Verificar si existe imagen
    const hasImage = persona.image && persona.image.trim() !== '';

    const imageContent = hasImage
      ? `<img src="${persona.image}" alt="${persona.name}" class="w-full h-full object-cover object-top">`
      : `<div class="w-full h-full flex items-center justify-center bg-slate-100">
           <i data-lucide="user" class="${s.icon} text-slate-400"></i>
         </div>`;

    return `
      <div class="org-card flex flex-col items-center organigrama-card cursor-pointer hover:scale-105 transition-transform" ${createDataAttrs(persona)}>
        <div class="relative ${s.img} rounded-full overflow-hidden ${s.border} border-[#1a5fb4]">
          ${imageContent}
        </div>
        <!-- Nombre en recuadro blanco con borde azul -->
        <div class="org-name bg-white border-2 border-[#1a5fb4] px-2 py-1 md:px-3 md:py-1.5 mt-2 ${s.minW}">
          <h4 class="font-bold ${s.text} text-[#1a5fb4] text-center leading-tight">${persona.name}</h4>
        </div>
        <!-- Cargo en recuadro azul sólido -->
        <div class="org-cargo bg-[#1a5fb4] px-2 py-1 md:px-3 md:py-1.5 ${s.minW}">
          <p class="${s.subtext} text-white text-center font-semibold uppercase">${persona.position}</p>
        </div>
      </div>
    `;
  };

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 md:px-6 space-y-6 md:space-y-10">
      <div class="text-center mt-4 md:mt-10 mb-6 md:mb-10">
        <h2 class="text-2xl md:text-4xl font-heading font-semibold mt-2 md:mt-6 mb-3 md:mb-6">${data.titulo}</h2>
        <p class="text-sm md:text-base text-slate-600 mt-2 md:mt-3 max-w-3xl mx-auto px-4 md:px-16">${data.descripcion}</p>
      </div>

      <!-- Organigrama Corporativo -->
      <div class="relative bg-gradient-to-b from-white to-slate-50 rounded-2xl p-6 md:p-10 shadow-xl border border-slate-200 overflow-hidden">

        <!-- Nivel 1: CEO -->
        <div class="org-level-ceo flex justify-center mb-4">
          ${ceo ? createOrgCard(ceo, 'lg') : ''}
        </div>

        <!-- Línea vertical del CEO -->
        <div class="org-connector-vertical w-[2px] h-8 md:h-10 bg-[#1a5fb4] mx-auto"></div>

        <!-- Nivel 2: Directores -->
        <div class="org-level-directores relative">
          <!-- Línea horizontal que conecta directores -->
          <div class="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[2px] bg-[#1a5fb4]"></div>

          <!-- Contenedor de directores con líneas verticales -->
          <div class="flex justify-center gap-8 md:gap-24 lg:gap-32 pt-0 md:pt-4">
            ${directores.map(d => `
              <div class="flex flex-col items-center">
                <div class="hidden md:block w-[2px] h-4 bg-[#1a5fb4] -mt-4"></div>
                ${createOrgCard(d, 'md')}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Línea vertical a especialistas -->
        <div class="org-connector-vertical w-[2px] h-6 md:h-8 bg-[#1a5fb4] mx-auto mt-4"></div>

        <!-- Etiqueta "Lider del Proyecto" -->
        <div class="flex justify-center my-4">
          <div class="bg-[#1a5fb4] text-white px-6 py-2 font-bold text-sm md:text-base tracking-wider uppercase">
            Lider del Proyecto
          </div>
        </div>

        <!-- Línea horizontal para especialistas -->
        <div class="hidden md:block w-[95%] h-[2px] bg-[#1a5fb4] mx-auto mb-4"></div>

        <!-- Nivel 3: Especialistas -->
        <div class="org-level-especialistas relative">
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
            ${especialistas.map(e => `
              <div class="flex flex-col items-center">
                <div class="hidden md:block w-[2px] h-4 bg-[#1a5fb4] -mt-4 mb-2"></div>
                ${createOrgCard(e, 'sm')}
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `;

  // Renderizar íconos de Lucide después de agregar el contenido
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function renderAsociados() {
  const section = document.getElementById('asociados');
  if (!section) return;

  const data = apiData.asociados;
  const equipo = apiData.equipo;

  // Mostrar todos los miembros del equipo en el carrusel
  const miembrosHTML = equipo.map(m => {
    const isCeo = m.row === 1;
    const nameColor = isCeo ? '#1e40af' : '#000000';
    return `
    <div class="brands_item-block cursor-pointer" data-name="${m.name}" data-role="${m.position}" data-img="${m.image}" data-bio="${m.description}">
      <div class="brands_item-logo-wrap">
        ${m.image ? `<img src="${m.image}" loading="lazy" alt="${m.name}" class="brands_item-logo">` : `<div class="brands_item-logo bg-slate-100 flex items-center justify-center"><i data-lucide="user" class="w-16 h-16 text-slate-400"></i></div>`}
      </div>
      <div class="brands_item-texts">
        <h4 class="brands_item-name" style="color: ${nameColor}">${m.name}</h4>
        <p class="brands_item-desc">${m.position}</p>
      </div>
    </div>
  `}).join('');

  // Duplicar para el loop infinito
  const miembrosDuplicados = miembrosHTML + miembrosHTML;

  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-4 md:px-6 text-center space-y-4 md:space-y-6">
      <div class="text-center mt-4 md:mt-10 mb-6 md:mb-16">
        <h2 class="text-2xl md:text-4xl font-heading font-semibold mt-2 md:mt-6 mb-3 md:mb-6">${data.titulo}</h2>
        <p class="text-sm md:text-base text-slate-600 mt-2 md:mt-3 max-w-3xl mx-auto px-4 md:px-16">${data.descripcion}</p>
      </div>
      <div class="brands_carousel-container relative">
        <button class="brands_nav-btn brands_nav-prev absolute left-0 md:left-0 top-[6rem] md:top-[7.5rem] z-10 bg-white/90 hover:bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all hover:scale-110" aria-label="Anterior">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div class="brands_list-wrapper">
          <div class="brands_list">${miembrosDuplicados}</div>
        </div>
        <button class="brands_nav-btn brands_nav-next absolute right-0 md:right-0 top-[6rem] md:top-[7.5rem] z-10 bg-white/90 hover:bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all hover:scale-110" aria-label="Siguiente">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  `;

  // Renderizar íconos de Lucide si hay placeholders
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function renderProyectos() {
  const section = document.getElementById('proyectos');
  if (!section) return;

  const data = apiData.proyectos;

  const proyectosHTML = data.items.map(p => {
    const isTerminalPortuaria = p.nombre === "Terminal Portuaria Remota";
    const nombreHTML = isTerminalPortuaria
      ? `<p class="font-semibold">${p.nombre}. <a href="#" onclick="openTerminalPortuariaModal(); return false;" class="text-primary hover:text-cyan-600 underline decoration-2 underline-offset-2 transition-colors ml-1">Ver galería →</a></p>`
      : `<p class="font-semibold">${p.nombre}.</p>`;

    return `
      <div class="mb-6">
        ${nombreHTML}
        <ul class="list-disc list-inside space-y-1">
          ${p.detalles.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    `;
  }).join('');

  const videosHTML = data.videos.map((v, i) => {
    const isLarge = v.size === 'large';
    return `
      <div class="relative rounded-3xl shadow-lg overflow-hidden ${isLarge ? 'col-span-1 md:col-span-2 h-48 md:h-64' : 'col-span-1 h-48 md:h-32'} video-container">
        <video class="w-full h-full object-cover" poster="${v.poster}" preload="metadata">
          <source src="${v.src}" type="video/mp4">
        </video>
        <div class="control-overlay absolute inset-0 flex items-center justify-center transition-opacity duration-300">
          <button class="play-btn absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
            <div class="w-14 h-14 md:${isLarge ? 'w-16 md:h-16' : 'w-10 md:h-10'} bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-1 md:${isLarge ? 'h-8 md:w-8 ml-1' : 'h-5 md:w-5 ml-0.5'} text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </button>
          <button class="pause-btn hidden absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
            <div class="w-14 h-14 md:${isLarge ? 'w-16 md:h-16' : 'w-10 md:h-10'} bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 md:${isLarge ? 'h-8 md:w-8' : 'h-5 md:w-5'} text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    `;
  }).join('');

  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
      <div class="space-y-4">
        <h2 class="text-3xl md:text-4xl font-heading font-semibold leading-tight text-primary mb-6">${data.titulo}</h2>
        <div class="text-slate-700 text-sm md:text-base space-y-1">${proyectosHTML}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 md:pt-16">${videosHTML}</div>
    </div>
  `;
}

function renderPortafolio() {
  const section = document.getElementById('portafolio');
  if (!section) return;

  const data = apiData.portafolio;

  // Generate category filter buttons
  const categoriasHTML = `
    <button class="portafolio-filter active px-4 py-2 rounded-full text-sm font-medium transition-all bg-primary text-white" data-category="all">
      Todos
    </button>
    ${data.clasificaciones.map(c => `
      <button class="portafolio-filter px-4 py-2 rounded-full text-sm font-medium transition-all bg-white text-slate-700 border border-slate-200 hover:border-primary hover:bg-primary hover:text-white" data-category="${c.id}">
        ${c.name}
      </button>
    `).join('')}
  `;

  // Generate project cards with carousels
  const proyectosHTML = data.proyectos.map(p => {
    const mediaItems = p.media || [{ type: 'image', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800' }];

    return `
      <div class="portafolio-card flex flex-col" data-category="${p.class_id}">
        <h3 class="text-lg md:text-xl font-semibold text-slate-800 mb-1">${p.name}</h3>
        <p class="text-xs uppercase tracking-widest text-primary font-medium mb-3">Galería de Proyecto</p>

        <!-- Media Carousel -->
        <div class="portafolio-carousel relative aspect-video bg-[#0A2540] rounded-xl overflow-hidden group" data-project-id="${p.id}">
          <!-- Media Container -->
          <div class="carousel-media-container w-full h-full">
            ${mediaItems.map((m, idx) => `
              <div class="carousel-slide ${idx === 0 ? 'active' : 'hidden'}" data-index="${idx}">
                ${m.type === 'video' ? `
                  <div class="relative w-full h-full">
                    <video class="carousel-video w-full h-full object-cover" preload="metadata" playsinline>
                      <source src="${m.url}" type="video/mp4">
                    </video>
                    <!-- Video Controls -->
                    <div class="video-controls absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div class="flex items-center gap-2 text-white">
                        <button class="video-rewind p-1.5 hover:bg-white/20 rounded-full transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                          </svg>
                        </button>
                        <button class="video-play-pause p-1.5 hover:bg-white/20 rounded-full transition-colors">
                          <svg class="play-icon h-4 w-4" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                          <svg class="pause-icon h-4 w-4 hidden" fill="white" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                        </button>
                        <button class="video-forward p-1.5 hover:bg-white/20 rounded-full transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                          </svg>
                        </button>
                        <span class="video-time text-xs ml-1">0:00 / 0:00</span>
                        <div class="flex-1"></div>
                        <button class="video-mute p-1.5 hover:bg-white/20 rounded-full transition-colors">
                          <svg class="volume-icon h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          </svg>
                          <svg class="mute-icon h-4 w-4 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                          </svg>
                        </button>
                        <input type="range" class="video-volume w-16 h-1 bg-white/30 rounded-full appearance-none cursor-pointer" min="0" max="1" step="0.1" value="1">
                        <button class="video-fullscreen p-1.5 hover:bg-white/20 rounded-full transition-colors">
                          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ` : `
                  <img src="${m.url}" alt="${p.name}" class="w-full h-full object-cover">
                `}
              </div>
            `).join('')}
          </div>

          <!-- Navigation Arrows -->
          ${mediaItems.length > 1 ? `
            <button class="carousel-prev absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 text-white hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button class="carousel-next absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 text-white hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ` : ''}
        </div>

        <!-- Pagination Dots -->
        ${mediaItems.length > 1 ? `
          <div class="carousel-dots flex justify-center gap-2 mt-3">
            ${mediaItems.map((_, idx) => `
              <button class="carousel-dot w-2 h-2 rounded-full transition-colors ${idx === 0 ? 'bg-primary' : 'bg-slate-300 hover:bg-slate-400'}" data-index="${idx}"></button>
            `).join('')}
          </div>
        ` : ''}

        <!-- Description -->
        <p class="text-sm text-slate-600 mt-4 leading-relaxed text-justify">${p.description}</p>
      </div>
    `;
  }).join('');

  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-4 md:px-6 space-y-6 md:space-y-8">
      <div class="text-center mb-6 md:mb-10 mt-4 md:mt-10">
        <h2 class="text-2xl md:text-4xl font-heading font-semibold">${data.titulo}</h2>
      </div>

      <!-- Category Filters -->
      <div class="flex flex-wrap justify-center gap-2 md:gap-3">
        ${categoriasHTML}
      </div>

      <!-- Projects Grid -->
      <div class="portafolio-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-0 md:px-8">
        ${proyectosHTML}
      </div>
    </div>
  `;
}

function renderFooter() {
  const footer = document.getElementById('contacto');
  if (!footer) return;

  const data = apiData.footer;
  const c = data.contacto;

  footer.innerHTML = `
    <div class="max-w-5xl mx-auto px-4 md:px-6 space-y-6 md:space-y-8">
      <div class="text-center">
        <img src="${data.logo}" alt="AGRINOL logo" class="mx-auto h-16 md:h-20 w-auto mb-1">
        <h3 class="text-xl md:text-2xl font-heading font-semibold text-primary mb-4 md:mb-6">${c.titulo}</h3>
      </div>
      <div class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-sm text-slate-600">
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
// MODAL CARRUSEL PARA TERMINAL PORTUARIA
// ==========================================

function createCarouselModal() {
  const modal = document.createElement('div');
  modal.id = 'terminalPortuariaModal';
  modal.className = 'fixed inset-0 z-50 hidden items-center justify-center bg-slate-800/70 backdrop-blur-sm p-2 md:p-4';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-auto overflow-hidden transform transition-all flex flex-col relative h-[95vh]">
      <!-- Botón cerrar -->
      <button id="closeCarouselModal" class="absolute top-3 right-3 z-20 bg-white/90 hover:bg-white rounded-full p-1.5 text-slate-500 hover:text-slate-700 transition-colors shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Contenedor del carrusel -->
      <div class="w-full p-3 md:p-5 flex flex-col h-full min-h-0">
        <!-- Título -->
        <div class="mb-3 flex-shrink-0">
          <h3 class="text-lg md:text-xl font-heading font-semibold text-slate-800 mb-1 pr-8">Proyecto Terminal Marítima Remota – Puerto Chiapas</h3>
          <p class="text-xs uppercase tracking-widest text-primary font-medium">Galería de Proyecto</p>
        </div>

        <!-- Slide Container - Ahora ocupa el espacio disponible -->
        <div class="relative flex-1 min-h-0">
          <div id="carouselSlide" class="relative w-full h-full bg-slate-900 rounded-lg overflow-hidden shadow-md">
          </div>

          <!-- Controles de navegación -->
          <button id="carouselPrev" class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button id="carouselNext" class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Indicadores debajo del carousel -->
        <div id="carouselIndicators" class="flex justify-center gap-2 py-3 flex-shrink-0">
        </div>

        <!-- Descripción del proyecto - Altura flexible con scroll -->
        <div class="pt-5 border-t border-slate-100 flex-shrink-0 max-h-[30vh] overflow-y-auto">
          <div class="text-slate-600 text-xs md:text-sm leading-relaxed text-justify space-y-2 pr-2">
            <p>La Terminal Marítima Remota de Puerto Chiapas es un proyecto estratégico de infraestructura portuaria diseñado, impulsado y gestionado por Agrinol y su equipo de especialistas, concebido como una iniciativa privada para transformar la capacidad logística de la frontera sur de México.</p>
            <p>El proyecto plantea la construcción de una terminal marítima de 25 hectáreas, ubicada aproximadamente a 3 kilómetros mar adentro, capaz de recibir buques de gran calado y superar el rezago operativo de casi cinco décadas del puerto original.</p>
            <p>Con una inversión estimada de 10 mil millones de pesos, incluyendo participación de capital extranjero, la terminal fue planeada para posicionar a Puerto Chiapas como un nodo clave del comercio internacional, fortaleciendo el manejo de graneles, contenedores y carga refrigerada, así como su integración al corredor transístmico.</p>
            <p>El proyecto se encuentra validado y proyectado para iniciar su construcción en una siguiente etapa, contemplando además la modernización ferroviaria y la conectividad terrestre del puerto.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function initCarouselModal() {
  createCarouselModal();

  const modal = document.getElementById('terminalPortuariaModal');
  const closeBtn = document.getElementById('closeCarouselModal');
  const slideContainer = document.getElementById('carouselSlide');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const indicatorsContainer = document.getElementById('carouselIndicators');

  let currentIndex = 0;
  const galeria = apiData.terminalPortuaria.galeria;

  function renderSlide(index) {
    const item = galeria[index];
    let content = '';

    if (item.type === 'video') {
      content = `
        <div class="relative w-full h-full group">
          <video id="carouselVideo" class="w-full h-full object-cover cursor-pointer" poster="${item.poster || ''}" preload="metadata" playsinline>
            <source src="${item.src}" type="video/mp4">
          </video>

          <!-- Barra de controles inferior -->
          <div id="videoControls" class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 pt-10 transition-all opacity-0 group-hover:opacity-100">

            <!-- Barra de progreso -->
            <div class="relative w-full h-1.5 bg-white/30 rounded-full mb-4 cursor-pointer group/progress" id="progressContainer">
              <div id="progressBar" class="absolute top-0 left-0 h-full bg-white rounded-full transition-all" style="width: 0%"></div>
              <div id="progressHandle" class="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-all" style="left: 0%"></div>
            </div>

            <!-- Controles -->
            <div class="flex items-center justify-between gap-4">

              <!-- Grupo izquierdo: controles de reproducción -->
              <div class="flex items-center gap-2">
                <!-- Retroceder 10s -->
                <button id="rewindBtn" class="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 transition-all hover:scale-110" title="Retroceder 10s">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                  </svg>
                </button>

                <!-- Play/Pause -->
                <button id="playPauseBtn" class="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all hover:scale-110">
                  <svg id="playIcon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <svg id="pauseIcon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white hidden" fill="white" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                </button>

                <!-- Adelantar 10s -->
                <button id="forwardBtn" class="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 transition-all hover:scale-110" title="Adelantar 10s">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                  </svg>
                </button>

                <!-- Tiempo -->
                <div class="text-white text-sm font-medium ml-2 tabular-nums">
                  <span id="currentTime">0:00</span>
                  <span class="text-white/50 mx-1">/</span>
                  <span id="duration">0:00</span>
                </div>
              </div>

              <!-- Grupo derecho: volumen y fullscreen -->
              <div class="flex items-center gap-2">
                <button id="muteBtn" class="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 transition-all hover:scale-110">
                  <svg id="volumeIcon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <svg id="muteIcon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                </button>
                <input type="range" id="volumeSlider" min="0" max="1" step="0.1" value="1" class="w-20 h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer">

                <!-- Fullscreen -->
                <button id="fullscreenBtn" class="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 transition-all hover:scale-110 ml-1" title="Pantalla completa">
                  <svg id="expandIcon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <svg id="compressIcon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      content = `
        <div class="relative w-full h-full flex items-center justify-center p-4">
          <img src="${item.src}" alt="Imagen ${index + 1}" class="max-w-full max-h-full object-contain rounded-lg">
        </div>
      `;
    }

    slideContainer.innerHTML = content;
    updateIndicators(index);

    // Configurar controles de video si existe
    const video = document.getElementById('carouselVideo');
    if (video) {
      const playPauseBtn = document.getElementById('playPauseBtn');
      const playIcon = document.getElementById('playIcon');
      const pauseIcon = document.getElementById('pauseIcon');
      const rewindBtn = document.getElementById('rewindBtn');
      const forwardBtn = document.getElementById('forwardBtn');
      const progressContainer = document.getElementById('progressContainer');
      const progressBar = document.getElementById('progressBar');
      const progressHandle = document.getElementById('progressHandle');
      const currentTimeEl = document.getElementById('currentTime');
      const durationEl = document.getElementById('duration');
      const muteBtn = document.getElementById('muteBtn');
      const volumeIcon = document.getElementById('volumeIcon');
      const muteIcon = document.getElementById('muteIcon');
      const volumeSlider = document.getElementById('volumeSlider');
      const videoControls = document.getElementById('videoControls');

      // Formatear tiempo
      function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return mins + ':' + secs.toString().padStart(2, '0');
      }

      // Actualizar UI de play/pause
      function updatePlayPauseUI(isPlaying) {
        if (isPlaying) {
          playIcon.classList.add('hidden');
          pauseIcon.classList.remove('hidden');
        } else {
          playIcon.classList.remove('hidden');
          pauseIcon.classList.add('hidden');
        }
      }

      // Toggle play/pause
      function togglePlay() {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }

      // Event listeners para play/pause
      playPauseBtn.addEventListener('click', togglePlay);
      video.addEventListener('click', togglePlay);

      video.addEventListener('play', () => updatePlayPauseUI(true));
      video.addEventListener('pause', () => updatePlayPauseUI(false));
      video.addEventListener('ended', () => updatePlayPauseUI(false));

      // Cargar duración
      video.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(video.duration);
      });

      // Actualizar progreso
      video.addEventListener('timeupdate', () => {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.width = percent + '%';
        progressHandle.style.left = percent + '%';
        currentTimeEl.textContent = formatTime(video.currentTime);
      });

      // Click y drag en barra de progreso para seek
      let isDragging = false;

      function seekToPosition(e) {
        const rect = progressContainer.getBoundingClientRect();
        const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        video.currentTime = percent * video.duration;
      }

      progressContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        seekToPosition(e);
      });

      document.addEventListener('mousemove', (e) => {
        if (isDragging) {
          seekToPosition(e);
        }
      });

      document.addEventListener('mouseup', () => {
        isDragging = false;
      });

      progressContainer.addEventListener('click', seekToPosition);

      // Retroceder 10s
      rewindBtn.addEventListener('click', () => {
        video.currentTime = Math.max(0, video.currentTime - 10);
      });

      // Adelantar 10s
      forwardBtn.addEventListener('click', () => {
        video.currentTime = Math.min(video.duration, video.currentTime + 10);
      });

      // Función para actualizar el visual del slider de volumen
      function updateVolumeSliderVisual(value) {
        const percent = value * 100;
        volumeSlider.style.setProperty('--volume-percent', percent + '%');
      }

      // Mute toggle
      muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        if (video.muted) {
          volumeIcon.classList.add('hidden');
          muteIcon.classList.remove('hidden');
          volumeSlider.value = 0;
          updateVolumeSliderVisual(0);
        } else {
          volumeIcon.classList.remove('hidden');
          muteIcon.classList.add('hidden');
          volumeSlider.value = video.volume;
          updateVolumeSliderVisual(video.volume);
        }
      });

      // Control de volumen
      volumeSlider.addEventListener('input', (e) => {
        video.volume = e.target.value;
        video.muted = e.target.value == 0;
        updateVolumeSliderVisual(e.target.value);
        if (video.muted) {
          volumeIcon.classList.add('hidden');
          muteIcon.classList.remove('hidden');
        } else {
          volumeIcon.classList.remove('hidden');
          muteIcon.classList.add('hidden');
        }
      });

      // Inicializar visual del volumen
      updateVolumeSliderVisual(1);

      // Fullscreen toggle
      const fullscreenBtn = document.getElementById('fullscreenBtn');
      const expandIcon = document.getElementById('expandIcon');
      const compressIcon = document.getElementById('compressIcon');

      function updateFullscreenUI(isFullscreen) {
        if (isFullscreen) {
          expandIcon.classList.add('hidden');
          compressIcon.classList.remove('hidden');
        } else {
          expandIcon.classList.remove('hidden');
          compressIcon.classList.add('hidden');
        }
      }

      fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          // Entrar en fullscreen
          const videoContainer = video.parentElement;
          if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen();
          } else if (videoContainer.webkitRequestFullscreen) {
            videoContainer.webkitRequestFullscreen();
          } else if (videoContainer.msRequestFullscreen) {
            videoContainer.msRequestFullscreen();
          }
        } else {
          // Salir de fullscreen
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
      });

      // Escuchar cambios de fullscreen
      document.addEventListener('fullscreenchange', () => {
        updateFullscreenUI(!!document.fullscreenElement);
      });
      document.addEventListener('webkitfullscreenchange', () => {
        updateFullscreenUI(!!document.webkitFullscreenElement);
      });

      // Mostrar controles al mover el mouse cuando está reproduciendo
      let controlsTimeout;
      video.parentElement.addEventListener('mousemove', () => {
        videoControls.classList.remove('opacity-0');
        videoControls.classList.add('opacity-100');
        clearTimeout(controlsTimeout);
        if (!video.paused) {
          controlsTimeout = setTimeout(() => {
            videoControls.classList.add('opacity-0');
            videoControls.classList.remove('opacity-100');
          }, 2500);
        }
      });

      // Atajos de teclado cuando el modal está abierto
      const handleKeyboard = (e) => {
        if (modal.classList.contains('hidden')) return;
        if (galeria[currentIndex].type !== 'video') return;

        switch (e.key) {
          case ' ':
            e.preventDefault();
            togglePlay();
            break;
          case 'ArrowLeft':
            if (e.shiftKey) {
              video.currentTime = Math.max(0, video.currentTime - 10);
            }
            break;
          case 'ArrowRight':
            if (e.shiftKey) {
              video.currentTime = Math.min(video.duration, video.currentTime + 10);
            }
            break;
          case 'm':
            muteBtn.click();
            break;
          case 'f':
            fullscreenBtn.click();
            break;
        }
      };
      document.addEventListener('keydown', handleKeyboard);
    }
  }

  function updateIndicators(activeIndex) {
    indicatorsContainer.innerHTML = galeria.map((_, i) => `
      <button class="carousel-indicator w-2.5 h-2.5 rounded-full transition-all ${i === activeIndex ? 'bg-primary w-8' : 'bg-slate-300 hover:bg-slate-400'}" data-index="${i}"></button>
    `).join('');

    document.querySelectorAll('.carousel-indicator').forEach(indicator => {
      indicator.addEventListener('click', () => {
        const index = parseInt(indicator.dataset.index);
        goToSlide(index);
      });
    });
  }

  function goToSlide(index) {
    const currentVideo = slideContainer.querySelector('video');
    if (currentVideo) {
      currentVideo.pause();
    }

    currentIndex = index;
    renderSlide(currentIndex);
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % galeria.length;
    goToSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentIndex - 1 + galeria.length) % galeria.length;
    goToSlide(prevIndex);
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  function closeModal() {
    const video = slideContainer.querySelector('video');
    if (video) {
      video.pause();
    }

    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    }
  });

  window.openTerminalPortuariaModal = function () {
    currentIndex = 0;
    renderSlide(currentIndex);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };
}


// ==========================================
// PORTAFOLIO - Carousels e Filtros
// ==========================================

function initPortafolioCarousels() {
  // Category filter functionality
  const filterButtons = document.querySelectorAll('.portafolio-filter');
  const projectCards = document.querySelectorAll('.portafolio-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(b => {
        b.classList.remove('active', 'bg-primary', 'text-white');
        b.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-200');
      });
      btn.classList.add('active', 'bg-primary', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-200');

      const category = btn.dataset.category;

      // Filter projects
      projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Initialize carousels
  const carousels = document.querySelectorAll('.portafolio-carousel');

  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const dotsContainer = carousel.closest('.portafolio-card').querySelector('.carousel-dots');
    const dots = dotsContainer ? dotsContainer.querySelectorAll('.carousel-dot') : [];

    if (slides.length <= 1) return;

    let currentIndex = 0;

    function showSlide(index) {
      // Pause any playing videos
      slides.forEach(slide => {
        const video = slide.querySelector('video');
        if (video) video.pause();
      });

      // Hide all slides
      slides.forEach(slide => {
        slide.classList.add('hidden');
        slide.classList.remove('active');
      });

      // Show current slide
      slides[index].classList.remove('hidden');
      slides[index].classList.add('active');

      // Update dots
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('bg-primary');
          dot.classList.remove('bg-slate-300');
        } else {
          dot.classList.remove('bg-primary');
          dot.classList.add('bg-slate-300');
        }
      });

      currentIndex = index;
    }

    function nextSlide() {
      const next = (currentIndex + 1) % slides.length;
      showSlide(next);
    }

    function prevSlide() {
      const prev = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(prev);
    }

    // Button events
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Dot events
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });

    // Initialize video controls for this carousel
    slides.forEach(slide => {
      const video = slide.querySelector('.carousel-video');
      if (!video) return;

      const controls = slide.querySelector('.video-controls');
      const playPauseBtn = slide.querySelector('.video-play-pause');
      const playIcon = slide.querySelector('.play-icon');
      const pauseIcon = slide.querySelector('.pause-icon');
      const rewindBtn = slide.querySelector('.video-rewind');
      const forwardBtn = slide.querySelector('.video-forward');
      const muteBtn = slide.querySelector('.video-mute');
      const volumeIcon = slide.querySelector('.volume-icon');
      const muteIcon = slide.querySelector('.mute-icon');
      const volumeSlider = slide.querySelector('.video-volume');
      const fullscreenBtn = slide.querySelector('.video-fullscreen');
      const timeDisplay = slide.querySelector('.video-time');

      function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return mins + ':' + secs.toString().padStart(2, '0');
      }

      function updatePlayPauseUI(isPlaying) {
        if (isPlaying) {
          playIcon.classList.add('hidden');
          pauseIcon.classList.remove('hidden');
        } else {
          playIcon.classList.remove('hidden');
          pauseIcon.classList.add('hidden');
        }
      }

      // Play/Pause
      playPauseBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });

      video.addEventListener('play', () => updatePlayPauseUI(true));
      video.addEventListener('pause', () => updatePlayPauseUI(false));
      video.addEventListener('ended', () => updatePlayPauseUI(false));

      // Time update
      video.addEventListener('loadedmetadata', () => {
        if (timeDisplay) {
          timeDisplay.textContent = `0:00 / ${formatTime(video.duration)}`;
        }
      });

      video.addEventListener('timeupdate', () => {
        if (timeDisplay) {
          timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
        }
      });

      // Rewind/Forward
      rewindBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        video.currentTime = Math.max(0, video.currentTime - 10);
      });

      forwardBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        video.currentTime = Math.min(video.duration, video.currentTime + 10);
      });

      // Mute
      muteBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        video.muted = !video.muted;
        if (video.muted) {
          volumeIcon.classList.add('hidden');
          muteIcon.classList.remove('hidden');
          volumeSlider.value = 0;
        } else {
          volumeIcon.classList.remove('hidden');
          muteIcon.classList.add('hidden');
          volumeSlider.value = video.volume;
        }
      });

      // Volume slider
      volumeSlider?.addEventListener('input', (e) => {
        e.stopPropagation();
        video.volume = e.target.value;
        video.muted = e.target.value == 0;
        if (video.muted) {
          volumeIcon.classList.add('hidden');
          muteIcon.classList.remove('hidden');
        } else {
          volumeIcon.classList.remove('hidden');
          muteIcon.classList.add('hidden');
        }
      });

      // Fullscreen
      fullscreenBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!document.fullscreenElement) {
          const container = slide.querySelector('.relative');
          if (container?.requestFullscreen) {
            container.requestFullscreen();
          }
        } else {
          document.exitFullscreen();
        }
      });

      // Click on video to toggle play
      video.addEventListener('click', () => {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    });
  });
}


// ==========================================
// INICIALIZACIÓN
// ==========================================

function initApp() {
  // Renderizar todas las secciones con datos de la "API"
  renderQuienesSomos();
  renderOrganigrama();
  renderAsociados();
  renderProyectos();
  renderPortafolio();
  renderFooter();

  // Inicializar funcionalidades después del renderizado
  initFadeObserver();
  initSmoothScroll();
  initCarouselNavigation();
  initModal();
  initCarouselModal();
  initVideoPlayers();
  initPortafolioCarousels();
  initBackToTop();
  initMobileMenu();

  // Inicializar iconos de Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('mobileMenuOverlay');
  const menuLinks = document.querySelectorAll('.mobile-menu-link');

  if (!menuBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  menuOverlay?.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      closeMenu();
    }
  });
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

function initCarouselNavigation() {
  const wrapper = document.querySelector('.brands_list-wrapper');
  const list = document.querySelector('.brands_list');
  const prevBtn = document.querySelector('.brands_nav-prev');
  const nextBtn = document.querySelector('.brands_nav-next');
  const container = document.querySelector('.brands_carousel-container');

  if (!wrapper || !list || !prevBtn || !nextBtn) return;

  const itemWidth = 256; // 15rem + gap
  const animationDuration = 30; // segundos
  let isManualMode = false;
  let currentPosition = 0;

  function getCurrentAnimationProgress() {
    const computedStyle = window.getComputedStyle(list);
    const matrix = new DOMMatrix(computedStyle.transform);
    return matrix.m41 || 0;
  }

  function enterManualMode() {
    if (isManualMode) return;
    isManualMode = true;

    // Capturar posición actual de la animación
    currentPosition = getCurrentAnimationProgress();

    // Detener animación y fijar posición
    list.style.animation = 'none';
    list.style.transform = `translateX(${currentPosition}px)`;
  }

  function resumeAnimation() {
    if (!isManualMode) return;
    isManualMode = false;

    // Calcular delay para continuar desde la posición actual
    const totalWidth = list.scrollWidth / 2;
    const progress = Math.abs(currentPosition) / totalWidth;
    const delay = -(progress * animationDuration);

    // Restaurar animación desde donde quedó
    list.style.transition = '';
    list.style.transform = '';
    list.style.animation = `scroll-left ${animationDuration}s linear infinite`;
    list.style.animationDelay = `${delay}s`;
  }

  function scrollCarousel(direction) {
    enterManualMode();

    // Calcular nueva posición
    const scrollAmount = direction === 'next' ? -itemWidth : itemWidth;
    const totalWidth = list.scrollWidth / 2;
    let newPosition = currentPosition + scrollAmount;

    // Normalizar posición para el loop
    if (newPosition < -totalWidth) newPosition += totalWidth;
    if (newPosition > 0) newPosition -= totalWidth;

    // Animar al nuevo punto
    list.style.transition = 'transform 0.4s ease';
    list.style.transform = `translateX(${newPosition}px)`;

    // Actualizar posición actual
    currentPosition = newPosition;

    // Quitar transición después de completar
    setTimeout(() => {
      list.style.transition = '';
    }, 400);
  }

  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    scrollCarousel('prev');
  });

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    scrollCarousel('next');
  });

  // Reanudar animación al hacer clic fuera del carrusel
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) {
      resumeAnimation();
    }
  });

  // Pausar al pasar mouse sobre las cards
  const cards = wrapper.querySelectorAll('.brands_item-block');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      if (!isManualMode) {
        list.style.animationPlayState = 'paused';
      }
    });
    card.addEventListener('mouseleave', () => {
      if (!isManualMode) {
        list.style.animationPlayState = 'running';
      }
    });
  });
}

function initModal() {
  // Crear modal dinámicamente - diseño horizontal en desktop, vertical en móvil
  const modal = document.createElement('div');
  modal.id = 'asociadoModal';
  modal.className = 'fixed inset-0 z-50 hidden items-center justify-center bg-slate-800/70 backdrop-blur-sm p-4';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-auto overflow-hidden transform transition-all flex flex-col md:flex-row relative max-h-[90vh] md:max-h-[90vh]">
      <!-- Botón cerrar - siempre visible arriba -->
      <button id="closeModal" class="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 text-slate-500 hover:text-slate-700 transition-colors shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <!-- Imagen - arriba en móvil, izquierda en desktop -->
      <div class="w-full md:w-2/5 p-4 pt-12 md:pt-6 md:p-6 flex items-center justify-center flex-shrink-0">
        <img id="modalImg" src="" alt="" class="w-40 h-52 md:w-56 md:h-72 object-cover object-top rounded-lg shadow-md">
      </div>
      <!-- Contenido - abajo en móvil, derecha en desktop -->
      <div class="w-full md:w-3/5 p-4 md:p-8 md:pt-6 flex flex-col overflow-y-auto">
        <h3 id="modalName" class="text-xl md:text-3xl font-heading font-semibold text-slate-800 mb-1 pr-2"></h3>
        <p id="modalRole" class="text-xs uppercase tracking-widest text-primary font-medium mb-3 md:mb-4"></p>
        <div class="overflow-y-auto flex-grow max-h-[30vh] md:max-h-[50vh] pr-2">
          <p id="modalBio" class="text-slate-600 leading-relaxed text-sm text-justify"></p>
        </div>
        <!-- Iconos sociales y botón CV -->
        <div class="flex justify-between items-center mt-4 md:mt-6 pt-4 border-t border-slate-100 flex-shrink-0">
          <div class="flex items-center gap-4">
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
          <a id="modalCvBtn" href="#" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            CV
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
    modalBio.innerHTML = card.dataset.bio;
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

  // Event listeners para organigrama
  document.querySelectorAll('.organigrama-card').forEach(card => {
    if (card.dataset.name) {
      card.addEventListener('click', () => openModal(card));
    }
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
    const overlay = container.querySelector('.control-overlay');
    const playBtn = container.querySelector('.play-btn');
    const pauseBtn = container.querySelector('.pause-btn');
    if (!video || !playBtn || !pauseBtn || !overlay) return;

    // Helper: mostrar estado de play
    function showPlayState() {
      playBtn.classList.remove('hidden');
      pauseBtn.classList.add('hidden');
      overlay.classList.remove('playing');
    }

    // Helper: mostrar estado de pause
    function showPauseState() {
      playBtn.classList.add('hidden');
      pauseBtn.classList.remove('hidden');
      overlay.classList.add('playing');
    }

    // Helper: pausar todos los otros videos
    function pauseOtherVideos() {
      document.querySelectorAll('.video-container').forEach(otherContainer => {
        if (otherContainer === container) return;
        const otherVideo = otherContainer.querySelector('video');
        const otherPlayBtn = otherContainer.querySelector('.play-btn');
        const otherPauseBtn = otherContainer.querySelector('.pause-btn');
        const otherOverlay = otherContainer.querySelector('.control-overlay');
        if (otherVideo && !otherVideo.paused) {
          otherVideo.pause();
          otherPlayBtn?.classList.remove('hidden');
          otherPauseBtn?.classList.add('hidden');
          otherOverlay?.classList.remove('playing');
        }
      });
    }

    // Click en play
    playBtn.addEventListener('click', () => {
      pauseOtherVideos();
      video.play();
      showPauseState();
    });

    // Click en pause
    pauseBtn.addEventListener('click', () => {
      video.pause();
      showPlayState();
    });

    // Click en video para pausar
    video.addEventListener('click', () => {
      if (!video.paused) {
        video.pause();
        showPlayState();
      }
    });

    // Video terminado
    video.addEventListener('ended', () => {
      showPlayState();
    });
  });
}

function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  // Obtener la altura del hero (primera sección)
  const heroSection = document.querySelector('section');
  if (!heroSection) return;

  function toggleBackToTop() {
    const heroHeight = heroSection.offsetHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > heroHeight) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  // Scroll suave al inicio al hacer click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Escuchar el evento de scroll
  window.addEventListener('scroll', toggleBackToTop, { passive: true });

  // Verificar estado inicial
  toggleBackToTop();
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);
