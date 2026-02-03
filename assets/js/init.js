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
    descripcion: `Nacimos en 2019 como un grupo empresarial enfocado en diseñar y gestionar proyectos que transformen el potencial productivo de Chiapas en crecimiento real y sostenible.`,
    imagen: `./assets/img/agrinol-1.jpeg`,
    contenido: `En Agrinol diseñamos, estructuramos y gestionamos proyectos estratégicos en agroindustria, infraestructura e innovación.<br><br>Conectamos inversión, conocimiento técnico y colaboración público-privada para generar impacto económico, social y territorial en Chiapas.`,
    mision: {
      titulo: `Misión y Visión`,
      texto: `Gestionar e implementar proyectos sustentables y sostenibles para impulsar el desarrollo y bienestar.`
    },
    imagenMisionVision: `https://huubie.com.mx/video/barquito.png`
  },

  // Sección "Equipo" - Fuente única de datos para organigrama y carrusel
  // row: nivel jerárquico (1=CEO, 2=Directores, 3=Líderes de proyecto, 4=Subordinados)
  // associatedWith: id del miembro al que reporta/está asociado (para dibujar líneas de conexión)
  equipo: [
    // ROW 1: CEO
    {
      id: 1,
      name: `Carlos Alberto Vila Serrano`,
      position: `CEO`,
      image: `./assets/img/carlos_vila.png`,
      description: `Ingeniero civil y empresario con amplia trayectoria en el desarrollo de proyectos regionales de alto impacto. Es fundador y director de AGRINOL, SAPI de C.V., empresa enfocada en la estructuración, gestión e implementación de proyectos estratégicos que impulsan el crecimiento económico y social del sureste de México. A lo largo de su carrera ha liderado iniciativas en infraestructura, agroindustria, logística y conectividad regional, articulando la participación del sector privado, organizaciones sociales y los distintos niveles de gobierno.<br><br>Ha encabezado proyectos de alcance nacional como la Terminal Portuaria Remota en Puerto Chiapas y los Polos de Desarrollo para el Bienestar (PODEBIs) Tapachula I y II, consolidándose como una figura clave en la planeación y ejecución de proyectos que transforman territorios y fortalecen el desarrollo regional.`,
      row: 1
    },
    // Asistente del CEO (lado derecho)
    {
      id: 14,
      name: `Alicia M Glez Torra`,
      position: ``,
      image: `./assets/img/alicia_margarita.png`,
      description: ``,
      row: 1,
      linkedTo: 1,
      side: `right`
    },
    // ROW 2: Directores

    {
      id: 2,
      name: `Roberto Rocha`,
      position: `Industria y negocios`,
      image: `./assets/img/roberto_rocha.png`,
      description: `Roberto Rocha Macías
Roberto Rocha Macías es un profesional mexicano con una sólida trayectoria en el sector de los agronegocios, especializado en el desarrollo, evaluación y gestión de proyectos agroindustriales. Ingeniero Agrónomo Zootecnista y MBA en Comercialización Estratégica, cuenta además con habilitación como Consultor Senior en Agronegocios por FIRA–Banco de México
A lo largo de su carrera ha participado en áreas clave como banca agropecuaria, industria harinera, avícola, extractora y de alimentos, liderando procesos de compras, logística, importación de materias primas, dirección industrial y desarrollo de cadenas de valor. Ha colaborado con empresas e instituciones como FIRA, Minsa, PROPALMA y proyectos agroindustriales de alto impacto, combinando visión estratégica, experiencia operativa y enfoque en la integración productiva.`,
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
    // Asociados de Directores (row 2)
    // {
    //   id: 15,
    //   name: `Alberto Pineda Tuells`,
    //   position: ``,
    //   image: `./assets/img/pineda.jpg`,
    //   description: `Ingeniero en Electrónica y Comunicaciones, con una trayectoria que cruza finanzas, desarrollo económico, transformación institucional y liderazgo estratégico en los sectores público y privado. Ha ocupado posiciones clave en banca especializada, organismos empresariales, consejos directivos y gobiernos locales, participando en proyectos de alto impacto regional y nacional.<br><br>En 2024 fue distinguido con el Tony Buzan Award for Strategic Leadership, otorgado en la House of Lords, Palacio de Westminster, Londres, reconocimiento internacional a su liderazgo y visión estratégica. Su perfil combina capacidad técnica, experiencia financiera y articulación multisectorial, consolidándolo como una figura clave en la planeación y ejecución de iniciativas orientadas al crecimiento sostenible.`,
    //   row: 2,
    //   linkedTo: 2,
    //   side: `left`
    // },
    {
      id: 17,
      name: `Héctor López M`,
      position: ``,
      // image: `./assets/img/hector_lopez_gutierrez.png`,
      description: ``,
      row: 2,
      linkedTo: 3,
      side: `right`
    },
    // ROW 3: Líderes del Proyecto (bajo "LIDER DEL PROYECTO")
    {
      id: 4,
      name: `Javier GTZ Reynoso`,
      position: `Proyectos y presupuesto`,
      image: `./assets/img/javier_gutierrez.png`,
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
      id: 8,
      name: `Carlos Winkler Schroeder`,
      position: `Promoción industrial y negocios`,
      image: `./assets/img/carlos_winkler_s1.png`,
      description: `Consultor empresarial y emprendedor con más de 20 años de experiencia en el desarrollo de negocios, estrategia comercial e inversión. Es fundador y director de VITAL Consultoría, firma desde la cual acompaña a empresas en procesos de profesionalización, crecimiento y atracción de capital, ayudándolas a construir modelos de negocio sólidos y escalables.<br><br>A lo largo de su trayectoria ha impulsado y liderado proyectos de alto impacto en sectores como tecnología, entretenimiento, agronegocios y energía. Destaca como creador de HolaStaff, plataforma tecnológica de reclutamiento y capital humano, así como inversionista y fundador de TX América Cinemas, cadena de cines en Estados Unidos enfocada en el mercado latino.<br><br>Su visión estratégica, liderazgo y capacidad para identificar oportunidades lo han posicionado como un aliado clave en proyectos empresariales innovadores y de largo alcance.`,
      row: 3
    },
    {
      id: 7,
      name: `Alfredo Cerdio S`,
      position: `Proyecto agroindustrial`,
      image: `./assets/img/alfredo_cerdio.png`,
      description: ``,
      row: 3
    },
    {
      id: 9,
      name: `Claudia Velasco`,
      position: `Difusión y medios`,
      image: `./assets/img/claudia_velazco.png`,
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
    // ROW 4: Subordinados de los Líderes del Proyecto
    {
      id: 12,
      name: `José Luis Díaz Covarrubias`,
      position: `Planes de desarrollo`,
      image: `./assets/img/jose_luis_diaz.png`,
      description: `Ejecutivo y consultor especializado en administración portuaria, con más de cuatro décadas de experiencia en la operación, planeación y desarrollo de puertos, terminales marítimas y proyectos de infraestructura logística en México.<br><br>A lo largo de su trayectoria ha ocupado posiciones de alta dirección en el sistema portuario nacional, incluyendo la Gerencia de Operaciones de la Administración Portuaria Integral de Altamira y la Subdirección Administrativa de una de las principales terminales multipropósito del país. Actualmente asesora proyectos estratégicos en diseño portuario, concesiones, operación, licitaciones y desarrollo de nuevos puertos, integrando una visión técnica, financiera y operativa orientada a resultados, seguridad y sostenibilidad.`,
      row: 4,
      associatedWith: 4
    },
    {
      id: 13,
      name: `Miguel Cid del Prado Martínez`,
      position: `Universidades existentes`,
      image: `./assets/img/miguel_cid_del_prado.png`,

      description: `Doctor en Ingeniería Aplicada y especialista en Ingeniería en Gestión Empresarial, con una sólida trayectoria en planeación estratégica, desarrollo de proyectos y economía social y solidaria. Actualmente se desempeña como Coordinador de la Especialidad en Economía Social y Solidaria en el Instituto Tecnológico de Tuxtla Gutiérrez, donde impulsa modelos de emprendimiento con enfoque sostenible y de impacto social.<br><br>Ha participado como asesor en estrategias de desarrollo económico local, auditor líder de sistemas de gestión de calidad y docente en áreas clave como planes de negocio, ingeniería económica y gestión de la producción. Su experiencia combina rigor académico, aplicación práctica y transferencia de tecnología, contribuyendo al fortalecimiento de proyectos productivos, innovación social y formación de talento orientado al desarrollo regional sostenible.`,
      row: 4,
      associatedWith: 6
    },
    {
      id: 18,
      name: `Alicia M. Glez Torra`,
      position: `Análisis y Gestión`,
      image: `./assets/img/alicia_margarita.png`,
      description: ``,
      row: 4,
      associatedWith: 6
    },
    {
      id: 19,
      name: `Alberto Pineda T.`,
      position: `Análisis y Gestión`,
      image: `./assets/img/pineda.jpg`,
      description: ``,
      row: 4,
      associatedWith: 7
    },
    {
      id: 16,
      name: `Rafael Alfredo Nava Ricaño`,
      position: `Cluster Agroalimentario`,
      image: `./assets/img/rafael_nava.jpg`,
      description: `Empresario agroindustrial y presidente de NAVA Corp., con una trayectoria construida desde la tercera generación familiar dedicada a la producción y comercialización agroalimentaria en Chiapas. Lidera un ecosistema empresarial integrado que abarca producción, transformación, logística y exportación de productos agrícolas de alto valor.<br><br>A lo largo de su carrera ha impulsado modelos productivos enfocados en trazabilidad, innovación, sostenibilidad y expansión de mercados, trabajando con cultivos estratégicos como plátano, cacao del Soconusco, café de altura y mango Ataulfo. Además, participa activamente en organismos clave del sector, desde donde contribuye al fortalecimiento y profesionalización de la agroindustria regional, con una visión de impacto nacional e internacional.`,
      row: 4,
      associatedWith: 7
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
      { poster: "./assets/img/polos-de-desarrollo/corredor-interoceanico-01.jpg", src: "https://www.agrinol.mx/vid/gespro.mp4", size: "large", title: "Corredor Interoceánico" },
      { poster: "./assets/img/project-terminal-portuaria/EV2.jpg", src: "https://www.agrinol.mx/vid/gespro.mp4", size: "small", title: "Terminal Portuaria" },
      { poster: "./assets/img/polos-de-desarrollo/polos-de-desarrollo-01.jpg", src: "https://www.agrinol.mx/vid/gespro.mp4", size: "small", title: "Polos de Desarrollo" },
      { poster: "./assets/img/polos-de-desarrollo/corredor-interoceanico-02.jpg", src: "https://www.agrinol.mx/vid/gespro.mp4", size: "small", title: "Corredor Interoceánico" },
      { poster: "./assets/img/linea-k/linea-k-1.jpg", src: "https://www.agrinol.mx/vid/gespro.mp4", size: "small", title: "Línea K" },
      { poster: "./assets/img/bioetanol/bioetanol.jpeg", src: "https://www.youtube.com/watch?v=E6vSyIbPjHA", size: "small", title: "Bioetanol" },
      { poster: "./assets/img/fertilizantes/Planta-de-Fertilizantes-1_.png", src: "https://www.agrinol.mx/vid/gespro.mp4", size: "small", title: "Planta de Fertilizantes" },
      { poster: "https://img.youtube.com/vi/EypHEKZDuf4/maxresdefault.jpg", src: "https://www.youtube.com/watch?v=EypHEKZDuf4", size: "small", title: "Camino Saca Cosecha" },
      { poster: "https://img.youtube.com/vi/IrMPztPHlPg/maxresdefault.jpg", src: "https://www.youtube.com/watch?v=IrMPztPHlPg", size: "small", title: "Supercomputo" }
    ]
  },

  // Sección "Portafolio"
  portafolio: {
    titulo: "Proyectos",
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
          { type: "video", url: "https://www.youtube.com/embed/E6vSyIbPjHA" },
          // { type: "video", url: "https://www.agrinol.mx/vid/gespro.mp4" },
          { type: "image", url: "./assets/img/bioetanol/bioetanol.jpeg" },
          // { type: "image", url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800" }
        ]
      },
      {
        id: 2,
        name: "Planta de Fertilizantes",
        description: "Proyecto enfocado en el fortalecimiento de la soberanía agrícola mediante la producción local de insumos esenciales.",
        class_id: 1,
        media: [
          { type: "image", url: "./assets/img/fertilizantes/Planta-de-Fertilizantes-1.png" },
          { type: "image", url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800" }
        ]
      },
      {
        id: 3,
        name: "Salas de Empaque para Insectos Benéficos",
        description: "[CASO DE ÉXITO] Construcción y equipamiento integral de instalaciones especializadas para el control biológico de plagas.",
        class_id: 1,
        media: [
          { type: "image", url: "./assets/img/sala-empaque/sala-empaque-01.jpeg" },
          { type: "image", url: "./assets/img/sala-empaque/sala-empaque-02.jpeg" },
          { type: "image", url: "./assets/img/sala-empaque/sala-empaque-03.jpeg" }
        ]
      },
      {
        id: 4,
        name: "Rehabilitación de la Línea K del Ferrocarril",
        description: "[CASO DE ÉXITO] Gestión histórica y culminación exitosa de la rehabilitación del tramo Ixtepec, Oaxaca a Ciudad Hidalgo, Chiapas, incluyendo el ramal estratégico hacia Puerto Chiapas.",
        class_id: 2,
        media: [
          { type: "image", url: "./assets/img/linea-k/linea-k-1.jpg" },
          { type: "image", url: "./assets/img/linea-k/linea-k-2.jpg" },
          { type: "image", url: "./assets/img/linea-k/linea-k-3.jpg" },
          { type: "image", url: "./assets/img/linea-k/linea-k-4.jpg" },
          { type: "image", url: "./assets/img/linea-k/lineaK7.png" },
          { type: "image", url: "./assets/img/linea-k/lineaK8.png" },
          { type: "image", url: "./assets/img/linea-k/mapa-lineaK.png" },
        ]
      },
      {
        id: 5,
        name: "Caminos Rurales \"Saca Cosechas\"",
        description: "Implementación de rutas logísticas para optimizar el transporte de productos desde el campo hacia los centros de distribución.",
        class_id: 2,
        media: [
          { type: "video", url: "https://www.youtube.com/embed/EypHEKZDuf4" },
          // { type: "image", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" },
          // { type: "image", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800" }
        ]
      },
      {
        id: 6,
        name: "Terminal Portuaria Remota",
        description: "Proyecto de inversión y conectividad vinculado al corredor interoceánico del Istmo de Tehuantepec.",
        class_id: 2,
        media: [
          { type: "video", url: "https://www.youtube.com/embed/JKmrL99Zaic" },
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
          { type: "image", url: "./assets/img/tren_ligero/trenligero1.jpg" },
          { type: "image", url: "./assets/img/tren_ligero/trenligero2.png" },
          { type: "image", url: "./assets/img/tren_ligero/trenligero3.png" },
        ]
      },
      {
        id: 8,
        name: "Transporte y Terminales de Corto Recorrido",
        description: "Optimización de la movilidad regional mediante infraestructura de transferencia de pasajeros y carga.",
        class_id: 3,
        media: [
          { type: "image", url: "./assets/img/transporte/terminal-de-corto-recorrido1.png" },
          { type: "image", url: "./assets/img/transporte/terminal-de-corto-recorrido2.png" },
        ]
      },
      {
        id: 9,
        name: "Laboratorio Regional de Supercómputo",
        description: "Desarrollo de un centro tecnológico de \"Súper Cómputo\" para el procesamiento de datos y apoyo a la investigación de alto nivel.",
        class_id: 4,
        media: [
          { type: "video", url: "https://www.youtube.com/embed/IrMPztPHlPg" },
        ]
      },
      {
        id: 10,
        name: "Corredor Interoceánico y Polos de Desarrollo",
        description: "Actualmente, nuestra organización lidera la gestión para la consolidación de los Polos de Desarrollo 1 y 2 en las regiones de Tapachula y Ciudad Hidalgo, Chiapas.",
        class_id: 5,
        media: [
          { type: "image", url: "assets/img/polos-de-desarrollo/corredor-interoceanico-01.jpg" },
          { type: "image", url: "assets/img/polos-de-desarrollo/corredor-interoceanico-05.jpeg" },
          { type: "image", url: "assets/img/polos-de-desarrollo/corredor-interoceanico-02.jpg" },
          { type: "image", url: "assets/img/polos-de-desarrollo/corredor-interoceanico-03.jpg", position: "top" },
          { type: "image", url: "assets/img/polos-de-desarrollo/corredor-interoceanico-04.jpg" },
          { type: "image", url: "assets/img/polos-de-desarrollo/polos-de-desarrollo-01.jpg" },
          { type: "image", url: "assets/img/polos-de-desarrollo/polos-de-desarrollo-02.jpg" },
          { type: "image", url: "assets/img/polos-de-desarrollo/polos-de-desarrollo-03.jpeg" },
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
        <p class="text-sm md:text-lg text-slate-600 mt-2 md:mt-3 max-w-4xl mx-auto">${data.descripcion}</p>
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
          <div>
            <h3 class="text-xl md:text-2xl font-heading font-semibold text-primary">${data.mision.titulo}</h3>
            <p class='text-sm md:text-lg'>${data.mision.texto}</p>
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

  // Filtrar por row (sin associatedWith ni linkedTo para los principales de cada nivel)
  const ceo = equipo.find(m => m.row === 1 && !m.associatedWith && !m.linkedTo);
  const ceoAsociados = equipo.filter(m => m.row === 1 && m.associatedWith);
  const ceoLinkedTo = equipo.filter(m => m.row === 1 && m.linkedTo);
  const directores = equipo.filter(m => m.row === 2 && !m.associatedWith && !m.linkedTo);
  const directoresAsociados = equipo.filter(m => m.row === 2 && m.associatedWith);
  const directoresLinkedTo = equipo.filter(m => m.row === 2 && m.linkedTo);
  const lideres = equipo.filter(m => m.row === 3 && !m.associatedWith && !m.linkedTo);
  const subordinados = equipo.filter(m => m.row === 4);

  // Crear data attributes para el modal
  const createDataAttrs = (persona) => {
    return `data-name="${persona.name}" data-role="${persona.position}" data-img="${persona.image}" data-bio="${persona.description}"`;
  };

  // Card template estilo organigrama corporativo
  // fixedCargoSize: si es true, usa tamaño fijo para la caja del cargo (para rows 3 y 4)
  const createOrgCard = (persona, size = 'md', fixedCargoSize = false) => {
    const sizes = {
      lg: { img: 'w-24 h-24 md:w-28 md:h-28', border: 'border-[3px]', text: 'text-xs md:text-sm', subtext: 'text-[10px] md:text-xs', minW: 'min-w-[140px] md:min-w-[180px]', icon: 'w-12 h-12 md:w-14 md:h-14' },
      md: { img: 'w-20 h-20 md:w-24 md:h-24', border: 'border-[3px]', text: 'text-[10px] md:text-xs', subtext: 'text-[9px] md:text-[10px]', minW: 'min-w-[120px] md:min-w-[160px]', icon: 'w-10 h-10 md:w-12 md:h-12' },
      sm: { img: 'w-16 h-16 md:w-20 md:h-20', border: 'border-2', text: 'text-[9px] md:text-[10px]', subtext: 'text-[8px] md:text-[9px]', minW: 'min-w-[100px] md:min-w-[130px]', icon: 'w-8 h-8 md:w-10 md:h-10' },
      xs: { img: 'w-14 h-14 md:w-16 md:h-16', border: 'border-2', text: 'text-[8px] md:text-[9px]', subtext: 'text-[7px] md:text-[8px]', minW: 'min-w-[90px] md:min-w-[110px]', icon: 'w-6 h-6 md:w-8 md:h-8' }
    };
    const s = sizes[size];

    // Clases para la caja del cargo: tamaño fijo para rows 3 y 4
    const cargoClasses = fixedCargoSize
      ? 'w-[100px] md:w-[130px] h-[40px] md:h-[40px] flex items-center justify-center'
      : s.minW;

    // Clases para la caja del nombre: mismo ancho que cargo, alto 35px para rows 3 y 4
    const nameClasses = fixedCargoSize
      ? 'w-[100px] md:w-[130px] h-[35px] md:h-[35px] flex items-center justify-center'
      : s.minW;

    // Verificar si existe imagen
    const hasImage = persona.image && persona.image.trim() !== '';

    // Verificar si existe position
    const hasPosition = persona.position && persona.position.trim() !== '';

    const imageContent = hasImage
      ? `<img src="${persona.image}" alt="${persona.name}" class="w-full h-full object-cover object-top">`
      : `<div class="w-full h-full flex items-center justify-center bg-slate-100">
           <i data-lucide="user" class="${s.icon} text-slate-400"></i>
         </div>`;

    return `
      <div class="org-card flex flex-col items-center organigrama-card cursor-pointer hover:scale-105 transition-transform" ${createDataAttrs(persona)}>
        <div class="relative ${s.img} rounded-full overflow-hidden ${s.border} border-[#034B84]">
          ${imageContent}
        </div>
        <!-- Nombre en recuadro blanco con borde azul -->
        <div class="org-name bg-white border-2 border-[#034B84] px-2 py-1 md:px-3 md:py-1.5 mt-2 ${nameClasses}">
          <h4 class="font-bold ${s.text} text-[#034B84] text-center leading-tight">${persona.name}</h4>
        </div>
        ${hasPosition ? `
        <!-- Cargo en recuadro azul sólido -->
        <div class="org-cargo bg-[#034B84] px-2 py-1 md:px-3 md:py-1.5 ${cargoClasses}">
          <p class="${s.subtext} text-white text-center font-semibold uppercase">${persona.position}</p>
        </div>
        ` : ''}
      </div>
    `;
  };

  // Función para crear director con sus asociados laterales (associatedWith = línea sólida, linkedTo = línea punteada)
  const createDirectorWithAssociates = (director, asociados, linkedTos) => {
    const asociadoIzq = asociados.find(a => a.associatedWith === director.id && a.side === 'left');
    const asociadoDer = asociados.find(a => a.associatedWith === director.id && a.side === 'right');
    const linkedIzq = linkedTos.find(a => a.linkedTo === director.id && a.side === 'left');
    const linkedDer = linkedTos.find(a => a.linkedTo === director.id && a.side === 'right');

    // Si tiene asociados laterales, usar posicionamiento relativo para no afectar el centrado
    const hasLeftAssociate = asociadoIzq || linkedIzq;
    const hasRightAssociate = asociadoDer || linkedDer;

    return `
      <div class="relative flex items-center justify-center">
        ${hasLeftAssociate ? `
          <div class="hidden md:flex absolute right-full items-center mr-2 md:mr-4">
            ${asociadoIzq ? `
              <div class="flex items-center">
                ${createOrgCard(asociadoIzq, 'xs')}
                <div class="w-4 md:w-8 h-[2px] bg-[#034B84]"></div>
              </div>
            ` : ''}
            ${linkedIzq ? `
              <div class="flex items-start">
                ${createOrgCard(linkedIzq, 'xs')}
                <div class="flex items-center w-4 md:w-8 mt-[28px] md:mt-[32px]"><div class="w-full h-[3px] border-t-[3px] border-dashed border-[#034B84]"></div></div>
              </div>
            ` : ''}
          </div>
        ` : ''}
        <div class="flex flex-col items-center">
          <div class="hidden md:block w-[2px] h-4 bg-[#034B84] -mt-4"></div>
          ${createOrgCard(director, 'md')}
        </div>
        ${hasRightAssociate ? `
          <div class="hidden md:flex absolute left-full items-center ml-2 md:ml-4">
            ${asociadoDer ? `
              <div class="flex items-center">
                <div class="w-4 md:w-8 h-[2px] bg-[#034B84]"></div>
                ${createOrgCard(asociadoDer, 'xs')}
              </div>
            ` : ''}
            ${linkedDer ? `
              <div class="flex items-start">
                <div class="flex items-center w-4 md:w-8 mt-[28px] md:mt-[32px]"><div class="w-full h-[3px] border-t-[3px] border-dashed border-[#034B84]"></div></div>
                ${createOrgCard(linkedDer, 'xs')}
              </div>
            ` : ''}
          </div>
        ` : ''}
      </div>
    `;
  };

  // Función para crear líder con sus subordinados (row 4) - subordinados en la misma fila con líneas hacia arriba
  const createLiderWithSubordinados = (lider, subs) => {
    const misSubordinados = subs.filter(s => s.associatedWith === lider.id);

    if (misSubordinados.length === 0) {
      return `
        <div class="flex flex-col items-center">
          <div class="hidden md:block w-[2px] h-4 bg-[#034B84] -mt-4 mb-2"></div>
          ${createOrgCard(lider, 'sm', true)}
        </div>
      `;
    }

    return `
      <div class="flex flex-col items-center">
        <div class="hidden md:block w-[2px] h-4 bg-[#034B84] -mt-4 mb-2"></div>
        ${createOrgCard(lider, 'sm', true)}
        <!-- Línea vertical hacia subordinados -->
        <div class="hidden md:block w-[2px] h-6 bg-[#034B84] mt-1"></div>
        <!-- Contenedor de subordinados con línea horizontal -->
        <div class="relative flex flex-col items-center w-full">
          <!-- Subordinados en fila horizontal -->
          <div class="flex justify-center gap-1 md:gap-4">
            ${misSubordinados.map((sub, index) => `
              <div class="flex flex-col items-center relative">
                <!-- Línea vertical del subordinado -->
                <div class="hidden md:block w-[2px] h-4 bg-[#034B84]"></div>
                <!-- Línea horizontal hacia los lados (solo si hay más de 1 subordinado) -->
                ${misSubordinados.length > 1 ? `
                  ${index === 0 ? `<div class="hidden md:block absolute top-0 left-1/2 h-[2px] bg-[#034B84]" style="width: calc(50% + 2rem);"></div>` : ''}
                  ${index === misSubordinados.length - 1 ? `<div class="hidden md:block absolute top-0 right-1/2 h-[2px] bg-[#034B84]" style="width: calc(50% + 2rem);"></div>` : ''}
                  ${index > 0 && index < misSubordinados.length - 1 ? `<div class="hidden md:block absolute top-0 left-0 right-0 h-[2px] bg-[#034B84]"></div>` : ''}
                ` : ''}
                ${createOrgCard(sub, 'xs', true)}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  };

  // Obtener asociado del CEO (lado derecho) - associatedWith usa línea sólida
  const ceoAsociadoDer = ceoAsociados.find(a => a.side === 'right');
  const ceoAsociadoIzq = ceoAsociados.find(a => a.side === 'left');

  // Obtener linkedTo del CEO - usa línea punteada
  const ceoLinkedDer = ceoLinkedTo.find(a => a.linkedTo === ceo?.id && a.side === 'right');
  const ceoLinkedIzq = ceoLinkedTo.find(a => a.linkedTo === ceo?.id && a.side === 'left');

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 md:px-6 space-y-6 md:space-y-10">
      <div class="text-center mt-4 md:mt-10 mb-6 md:mb-10">
        <h2 class="text-2xl md:text-4xl font-heading font-semibold mt-2 md:mt-6 mb-3 md:mb-6">${data.titulo}</h2>
        <p class="text-sm md:text-base text-slate-600 mt-2 md:mt-3 max-w-3xl mx-auto px-4 md:px-16">${data.descripcion}</p>
      </div>

      <!-- Organigrama Corporativo -->
      <div class="relative bg-gradient-to-b from-white to-slate-50 rounded-2xl p-6 md:p-10 shadow-xl border border-slate-200 overflow-hidden">

        <!-- Nivel 1: CEO con asociado lateral -->
        <div class="org-level-ceo relative flex justify-center items-center mb-0">
          ${ceo ? `
            <!-- CEO centrado absolutamente -->
            <div class="flex justify-center w-full">
              ${createOrgCard(ceo, 'lg')}
            </div>
            
            <!-- Asociados laterales con posicionamiento absoluto -->
            ${ceoAsociadoIzq ? `
              <div class="absolute left-[5%] md:left-[25%] top-1/2 -translate-y-1/2 flex items-center gap-2">
                ${createOrgCard(ceoAsociadoIzq, 'xs')}
                <div class="hidden md:block w-5 h-[2px] bg-[#034B84]"></div>
              </div>
            ` : ''}
            ${ceoLinkedIzq ? `
              <div class="absolute left-[5%] md:left-[25%] top-1/2 -translate-y-1/2 flex items-start gap-2">
                ${createOrgCard(ceoLinkedIzq, 'xs')}
                <div class="hidden md:flex items-center w-5 mt-[28px] md:mt-[32px]"><div class="w-full h-[3px] border-t-[3px] border-dashed border-[#034B84]"></div></div>
              </div>
            ` : ''}
            ${ceoAsociadoDer ? `
              <div class="absolute right-[5%] md:right-[25%] top-1/2 -translate-y-1/2 flex items-center gap-2">
                <div class="hidden md:block w-5 h-[2px] bg-[#034B84]"></div>
                ${createOrgCard(ceoAsociadoDer, 'xs')}
              </div>
            ` : ''}
            ${ceoLinkedDer ? `
              <div class="absolute right-[5%] md:right-[25%] top-1/2 -translate-y-1/2 flex items-start gap-2">
                <div class="hidden md:flex items-center w-8 mt-[28px] md:mt-[32px]"><div class="w-full border-t-[3px] border-dashed border-[#034B84]"></div></div>
                ${createOrgCard(ceoLinkedDer, 'xs')}
              </div>
            ` : ''}
          ` : ''}
        </div>

        <!-- Línea vertical del CEO que conecta con la horizontal -->
        <div class="org-connector-vertical w-[2px] h-12 md:h-16 bg-[#034B84] mx-auto"></div>

        <!-- Nivel 2: Directores con asociados laterales -->
        <div class="org-level-directores relative -mt-[2px]">
          <!-- Línea horizontal que conecta directores (solo entre los directores principales) -->
          <div class="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[200px] lg:w-[448px] h-[2px] bg-[#034B84]"></div>

          <!-- Contenedor de directores con líneas verticales -->
          <div class="flex justify-center items-center gap-4 md:gap-[200px] lg:gap-[280px] pt-0 md:pt-4 flex-wrap">
            ${directores.map(d => createDirectorWithAssociates(d, directoresAsociados, directoresLinkedTo)).join('')}
          </div>
        </div>

        <!-- Línea vertical a líderes -->
        <div class="org-connector-vertical w-[2px] h-6 md:h-8 bg-[#034B84] mx-auto mt-4"></div>

        <!-- Etiqueta "Lider del Proyecto" -->
        <div class="flex justify-center my-4">
          <div class="bg-[#034B84] text-white px-6 py-2 font-bold text-sm md:text-base tracking-wider uppercase">
            Lider del Proyecto
          </div>
        </div>

        <!-- Nivel 3: Líderes del Proyecto con sus subordinados (row 4) -->
        <div class="org-level-lideres relative flex justify-center">
          <div class="relative inline-flex flex-col items-center">
            <!-- Línea horizontal adaptativa que conecta los líderes -->
            <div class="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#034B84]" style="width: calc(100% - 130px);"></div>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-4 pt-4">
              ${lideres.map(l => createLiderWithSubordinados(l, subordinados)).join('')}
            </div>
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
    <div class="max-w-6xl mx-auto px-4 md:px-6 text-center space-y-4 md:space-y-6 flex flex-col justify-center h-full">
      <div class="text-center mt-4 md:mt-10 mb-6 md:mb-16">
        <h2 class="text-2xl md:text-4xl font-heading font-semibold mt-2 md:mt-6 mb-3 md:mb-6">${data.titulo}</h2>
        <p class="text-sm md:text-base text-slate-600 mt-2 md:mt-3 max-w-3xl mx-auto px-4 md:px-16">${data.descripcion}</p>
      </div>
      <div class="brands_carousel-container relative flex items-center justify-center">
        <button class="brands_nav-btn brands_nav-prev absolute left-0 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-500 hover:bg-gray-600 shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all hover:scale-110" aria-label="Anterior">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div class="brands_list-wrapper mx-auto">
          <div class="brands_list">${miembrosDuplicados}</div>
        </div>
        <button class="brands_nav-btn brands_nav-next absolute right-0 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-500 hover:bg-gray-600 shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all hover:scale-110" aria-label="Siguiente">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <div class="relative w-full h-full portafolio-video-wrapper" data-video-url="${m.url}" data-is-youtube="${m.url.includes('youtube.com') || m.url.includes('youtu.be') ? 'true' : 'false'}">
                    ${m.url.includes('youtube.com') || m.url.includes('youtu.be') ? `
                      <div class="portafolio-youtube-container w-full h-full relative">
                        <img src="https://img.youtube.com/vi/${m.url.includes('/embed/') ? m.url.split('/embed/')[1]?.split('?')[0] : m.url.includes('v=') ? m.url.split('v=')[1]?.split('&')[0] : m.url.split('youtu.be/')[1]?.split('?')[0]}/maxresdefault.jpg" class="portafolio-youtube-poster w-full h-full object-cover" alt="Video thumbnail">
                        <div class="portafolio-youtube-player hidden absolute inset-0" data-youtube-id="${m.url.includes('/embed/') ? m.url.split('/embed/')[1]?.split('?')[0] : m.url.includes('v=') ? m.url.split('v=')[1]?.split('&')[0] : m.url.split('youtu.be/')[1]?.split('?')[0]}"></div>
                        <!-- Play overlay para YouTube -->
                        <div class="portafolio-play-overlay absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer">
                          <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 ml-1 text-primary" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    ` : `
                      <video class="carousel-video w-full h-full object-cover" preload="metadata" playsinline>
                        <source src="${m.url}" type="video/mp4">
                      </video>
                    `}
                    <!-- Video Controls -->
                    <div class="video-controls absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <!-- Barra de progreso -->
                      <div class="video-progress-container relative w-full h-1.5 bg-white/30 rounded-full mb-3 cursor-pointer group/progress">
                        <div class="video-progress-bar absolute top-0 left-0 h-full bg-white rounded-full transition-all" style="width: 0%"></div>
                        <div class="video-progress-handle absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-all" style="left: 0%"></div>
                      </div>
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
                        <button class="video-fullscreen p-1.5 hover:bg-white/20 rounded-full transition-colors" title="Pantalla completa">
                          <svg class="fullscreen-expand-icon h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                          <svg class="fullscreen-compress-icon h-4 w-4 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                          </svg>
                        </button>
                        <button class="video-exit-fullscreen hidden absolute top-3 right-3 p-2 bg-black/60 hover:bg-black/80 rounded-full transition-colors z-50" title="Salir de pantalla completa (Esc)">
                          <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ` : `
                  <div class="relative w-full h-full group/img">
                    <img src="${m.url}" alt="${p.name}" class="w-full h-full ${m.position === 'top' ? 'object-cover object-top' : 'object-contain'}">
                    <!-- Expand Button -->
                    <button class="image-expand-btn absolute top-3 right-3 h-9 w-9 rounded-full bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center z-10" data-img-url="${m.url}" data-img-alt="${p.name}">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                    <!-- Click overlay for expand -->
                    <div class="image-expand-overlay absolute inset-0 cursor-pointer" data-img-url="${m.url}" data-img-alt="${p.name}"></div>
                  </div>
                `}
              </div>
            `).join('')}
          </div>

          <!-- Navigation Arrows -->
          ${mediaItems.length > 1 ? `
            <button class="carousel-prev absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-transparent md:bg-black/40 text-gray-300 hover:text-gray-400 md:text-white md:hover:bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button class="carousel-next absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-transparent md:bg-black/40 text-gray-300 hover:text-gray-400 md:text-white md:hover:bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center">
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

      // Doble clic para expandir video
      video.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        if (!document.fullscreenElement) {
          const videoContainer = video.parentElement;
          if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen();
          } else if (videoContainer.webkitRequestFullscreen) {
            videoContainer.webkitRequestFullscreen();
          } else if (videoContainer.msRequestFullscreen) {
            videoContainer.msRequestFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
      });

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
      filterButtons.forEach(b => {
        b.classList.remove('active', 'bg-primary', 'text-white');
        b.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-200');
      });
      btn.classList.add('active', 'bg-primary', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-200');

      const category = btn.dataset.category;

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

  const carousels = document.querySelectorAll('.portafolio-carousel');

  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const dotsContainer = carousel.closest('.portafolio-card').querySelector('.carousel-dots');
    const dots = dotsContainer ? dotsContainer.querySelectorAll('.carousel-dot') : [];

    if (slides.length <= 1) {
      // Aún necesitamos inicializar los controles de video para proyectos con un solo slide
      // La inicialización se hace al final de la función
    }

    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach(slide => {
        const video = slide.querySelector('video');
        if (video) video.pause();
      });

      slides.forEach(slide => {
        slide.classList.add('hidden');
        slide.classList.remove('active');
      });

      slides[index].classList.remove('hidden');
      slides[index].classList.add('active');

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

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });

    // Inicializar controles de video para todos los slides
    function initVideoControls(slide) {
      const videoWrapper = slide.querySelector('.portafolio-video-wrapper');
      if (!videoWrapper) return;

      const isYouTube = videoWrapper.dataset.isYoutube === 'true';
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
      const exitFullscreenBtn = slide.querySelector('.video-exit-fullscreen');
      const fullscreenExpandIcon = slide.querySelector('.fullscreen-expand-icon');
      const fullscreenCompressIcon = slide.querySelector('.fullscreen-compress-icon');
      const timeDisplay = slide.querySelector('.video-time');
      const progressContainer = slide.querySelector('.video-progress-container');
      const progressBar = slide.querySelector('.video-progress-bar');
      const progressHandle = slide.querySelector('.video-progress-handle');

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

      function updateFullscreenUI(isFullscreen) {
        if (isFullscreen) {
          fullscreenExpandIcon?.classList.add('hidden');
          fullscreenCompressIcon?.classList.remove('hidden');
          exitFullscreenBtn?.classList.remove('hidden');
          controls?.classList.add('fullscreen-controls');
        } else {
          fullscreenExpandIcon?.classList.remove('hidden');
          fullscreenCompressIcon?.classList.add('hidden');
          exitFullscreenBtn?.classList.add('hidden');
          controls?.classList.remove('fullscreen-controls');
        }
      }

      // Listener para cambios de fullscreen
      document.addEventListener('fullscreenchange', () => {
        const isFullscreen = document.fullscreenElement === videoWrapper;
        updateFullscreenUI(isFullscreen);
      });

      // Listener para salir de fullscreen con botón X
      exitFullscreenBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
      });

      if (isYouTube) {
        const youtubeContainer = videoWrapper.querySelector('.portafolio-youtube-container');
        const poster = youtubeContainer.querySelector('.portafolio-youtube-poster');
        const playerContainer = youtubeContainer.querySelector('.portafolio-youtube-player');
        const playOverlay = youtubeContainer.querySelector('.portafolio-play-overlay');
        const youtubeId = playerContainer.dataset.youtubeId;
        let youtubePlayer = null;
        let playerInitialized = false;

        function initYouTubePlayer() {
          if (playerInitialized) return;

          // Si la API de YouTube no está lista, esperar y reintentar
          if (typeof YT === 'undefined' || !YT.Player) {
            console.log('YouTube API not ready, waiting...');
            setTimeout(initYouTubePlayer, 100);
            return;
          }

          playerInitialized = true;

          playerContainer.classList.remove('hidden');
          playerContainer.id = `yt-player-${Date.now()}`;

          youtubePlayer = new YT.Player(playerContainer.id, {
            videoId: youtubeId,
            playerVars: { controls: 0, modestbranding: 1, rel: 0, showinfo: 0, playsinline: 1, autoplay: 1, iv_load_policy: 3, disablekb: 1, fs: 0, origin: window.location.origin },
            events: {
              onReady: () => {
                poster.classList.add('hidden');
                playOverlay.classList.add('hidden');
                youtubePlayer.playVideo();

                playPauseBtn?.addEventListener('click', (e) => {
                  e.stopPropagation();
                  if (youtubePlayer.getPlayerState() === 1) {
                    youtubePlayer.pauseVideo();
                  } else {
                    youtubePlayer.playVideo();
                  }
                });

                rewindBtn?.addEventListener('click', (e) => {
                  e.stopPropagation();
                  youtubePlayer.seekTo(Math.max(0, youtubePlayer.getCurrentTime() - 10), true);
                });

                forwardBtn?.addEventListener('click', (e) => {
                  e.stopPropagation();
                  youtubePlayer.seekTo(Math.min(youtubePlayer.getDuration(), youtubePlayer.getCurrentTime() + 10), true);
                });

                muteBtn?.addEventListener('click', (e) => {
                  e.stopPropagation();
                  if (youtubePlayer.isMuted()) {
                    youtubePlayer.unMute();
                    volumeIcon.classList.remove('hidden');
                    muteIcon.classList.add('hidden');
                    if (volumeSlider) volumeSlider.value = youtubePlayer.getVolume() / 100;
                  } else {
                    youtubePlayer.mute();
                    volumeIcon.classList.add('hidden');
                    muteIcon.classList.remove('hidden');
                    if (volumeSlider) volumeSlider.value = 0;
                  }
                });

                volumeSlider?.addEventListener('input', (e) => {
                  e.stopPropagation();
                  const vol = e.target.value * 100;
                  youtubePlayer.setVolume(vol);
                  if (vol === 0) {
                    youtubePlayer.mute();
                    volumeIcon.classList.add('hidden');
                    muteIcon.classList.remove('hidden');
                  } else {
                    youtubePlayer.unMute();
                    volumeIcon.classList.remove('hidden');
                    muteIcon.classList.add('hidden');
                  }
                });

                fullscreenBtn?.addEventListener('click', (e) => {
                  e.stopPropagation();
                  if (videoWrapper.requestFullscreen) videoWrapper.requestFullscreen();
                  else if (videoWrapper.webkitRequestFullscreen) videoWrapper.webkitRequestFullscreen();
                });

                // Barra de progreso - click para seek
                progressContainer?.addEventListener('click', (e) => {
                  e.stopPropagation();
                  const rect = progressContainer.getBoundingClientRect();
                  const percent = (e.clientX - rect.left) / rect.width;
                  const duration = youtubePlayer.getDuration();
                  if (duration) {
                    youtubePlayer.seekTo(percent * duration, true);
                  }
                });

                // Actualizar progreso y tiempo
                setInterval(() => {
                  if (youtubePlayer && youtubePlayer.getCurrentTime && youtubePlayer.getDuration) {
                    const current = youtubePlayer.getCurrentTime();
                    const duration = youtubePlayer.getDuration();
                    if (duration) {
                      const percent = (current / duration) * 100;
                      if (progressBar) progressBar.style.width = percent + '%';
                      if (progressHandle) progressHandle.style.left = percent + '%';
                      if (timeDisplay) timeDisplay.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
                    }
                  }
                }, 500);
              },
              onStateChange: (event) => {
                updatePlayPauseUI(event.data === 1);
                if (event.data === 1) {
                  playOverlay.classList.add('hidden');
                  poster.classList.add('hidden');
                }
                // Cuando el video termina (state 0), mostrar poster y ocultar player
                if (event.data === 0) {
                  poster.classList.remove('hidden');
                  playOverlay.classList.remove('hidden');
                  playerContainer.classList.add('hidden');
                  playerInitialized = false;
                  youtubePlayer.destroy();
                  youtubePlayer = null;
                }
              }
            }
          });
        }

        playOverlay?.addEventListener('click', () => {
          if (!playerInitialized) {
            initYouTubePlayer();
          } else if (youtubePlayer) {
            youtubePlayer.playVideo();
          }
        });

        poster?.addEventListener('click', () => {
          if (!playerInitialized) {
            initYouTubePlayer();
          }
        });

        // Doble clic para expandir video de YouTube
        poster?.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          if (!document.fullscreenElement) {
            if (videoWrapper.requestFullscreen) {
              videoWrapper.requestFullscreen();
            } else if (videoWrapper.webkitRequestFullscreen) {
              videoWrapper.webkitRequestFullscreen();
            }
          } else {
            document.exitFullscreen();
          }
        });

        youtubeContainer?.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          if (!document.fullscreenElement) {
            if (videoWrapper.requestFullscreen) {
              videoWrapper.requestFullscreen();
            } else if (videoWrapper.webkitRequestFullscreen) {
              videoWrapper.webkitRequestFullscreen();
            }
          } else {
            document.exitFullscreen();
          }
        });

      } else {
        const video = videoWrapper.querySelector('video');
        if (!video) return;

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

        video.addEventListener('loadedmetadata', () => {
          if (timeDisplay) {
            timeDisplay.textContent = `0:00 / ${formatTime(video.duration)}`;
          }
        });

        video.addEventListener('timeupdate', () => {
          if (timeDisplay) {
            timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
          }
          // Actualizar barra de progreso
          if (progressBar && progressHandle && video.duration) {
            const percent = (video.currentTime / video.duration) * 100;
            progressBar.style.width = percent + '%';
            progressHandle.style.left = percent + '%';
          }
        });

        rewindBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          video.currentTime = Math.max(0, video.currentTime - 10);
        });

        forwardBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          video.currentTime = Math.min(video.duration, video.currentTime + 10);
        });

        muteBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          video.muted = !video.muted;
          if (video.muted) {
            volumeIcon.classList.add('hidden');
            muteIcon.classList.remove('hidden');
            if (volumeSlider) volumeSlider.value = 0;
          } else {
            volumeIcon.classList.remove('hidden');
            muteIcon.classList.add('hidden');
            if (volumeSlider) volumeSlider.value = video.volume;
          }
        });

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

        fullscreenBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          if (!document.fullscreenElement) {
            if (videoWrapper.requestFullscreen) {
              videoWrapper.requestFullscreen();
            }
          } else {
            document.exitFullscreen();
          }
        });

        video.addEventListener('click', () => {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        });

        // Doble clic para expandir video
        video.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          if (!document.fullscreenElement) {
            if (videoWrapper.requestFullscreen) {
              videoWrapper.requestFullscreen();
            }
          } else {
            document.exitFullscreen();
          }
        });

        // Barra de progreso - click para seek
        let isDragging = false;

        function seekToPosition(e) {
          const rect = progressContainer.getBoundingClientRect();
          const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          video.currentTime = percent * video.duration;
        }

        progressContainer?.addEventListener('mousedown', (e) => {
          e.stopPropagation();
          isDragging = true;
          seekToPosition(e);
        });

        document.addEventListener('mousemove', (e) => {
          if (isDragging) seekToPosition(e);
        });

        document.addEventListener('mouseup', () => {
          isDragging = false;
        });
      }
    }

    // Inicializar controles de video para todos los slides
    slides.forEach(slide => initVideoControls(slide));
  });
}


// ==========================================
// LIGHTBOX PARA IMÁGENES DEL PORTAFOLIO
// ==========================================

function createImageLightbox() {
  const lightbox = document.createElement('div');
  lightbox.id = 'imageLightbox';
  lightbox.className = 'fixed inset-0 z-[60] hidden items-center justify-center bg-black/90 backdrop-blur-sm';
  lightbox.innerHTML = `
    <!-- Close button -->
    <button id="closeLightbox" class="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Image container -->
    <div class="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
      <img id="lightboxImage" src="" alt="" class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl">
    </div>

    <!-- Image caption -->
    <div id="lightboxCaption" class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm"></div>
  `;
  document.body.appendChild(lightbox);
}

function initImageLightbox() {
  createImageLightbox();

  const lightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('closeLightbox');

  function openLightbox(imgUrl, imgAlt) {
    lightboxImage.src = imgUrl;
    lightboxImage.alt = imgAlt;
    lightboxCaption.textContent = imgAlt;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = '';
    lightboxImage.src = '';
  }

  // Event delegation for expand buttons and overlays
  document.addEventListener('click', (e) => {
    const expandBtn = e.target.closest('.image-expand-btn');
    const expandOverlay = e.target.closest('.image-expand-overlay');

    if (expandBtn) {
      e.stopPropagation();
      openLightbox(expandBtn.dataset.imgUrl, expandBtn.dataset.imgAlt);
    } else if (expandOverlay) {
      e.stopPropagation();
      openLightbox(expandOverlay.dataset.imgUrl, expandOverlay.dataset.imgAlt);
    }
  });

  // Close events
  closeBtn?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      closeLightbox();
    }
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
  // renderProyectos();
  renderPortafolio();
  renderFooter();

  // Inicializar funcionalidades después del renderizado
  initFadeObserver();
  initSmoothScroll();
  initCarouselNavigation();
  initModal();
  initCarouselModal();
  initProyectosVideoControls();
  initPortafolioCarousels();
  initImageLightbox();
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
    { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
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
        <!-- Botón CV -->
        <div class="flex justify-end items-center mt-4 md:mt-6 pt-4 border-t border-slate-100 flex-shrink-0">
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

function initProyectosVideoControls() {
  document.querySelectorAll('.proyecto-video-container').forEach(container => {
    const videoElement = container.querySelector('.proyecto-video');
    const playOverlay = container.querySelector('.proyecto-play-overlay');
    const progressContainer = container.querySelector('.proyecto-progress-container');
    const progressBar = container.querySelector('.proyecto-progress-bar');
    const progressHandle = container.querySelector('.proyecto-progress-handle');
    const rewindBtn = container.querySelector('.proyecto-rewind');
    const playPauseBtn = container.querySelector('.proyecto-play-pause');
    const forwardBtn = container.querySelector('.proyecto-forward');
    const playIcon = container.querySelector('.proyecto-play-icon');
    const pauseIcon = container.querySelector('.proyecto-pause-icon');
    const timeDisplay = container.querySelector('.proyecto-time');
    const muteBtn = container.querySelector('.proyecto-mute');
    const volumeIcon = container.querySelector('.proyecto-volume-icon');
    const muteIcon = container.querySelector('.proyecto-mute-icon');
    const volumeSlider = container.querySelector('.proyecto-volume-slider');
    const fullscreenBtn = container.querySelector('.proyecto-fullscreen');
    const expandPosterBtn = container.querySelector('.proyecto-expand-poster');

    if (!videoElement) return;

    const video = videoElement;

    // Evento para expandir poster
    expandPosterBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const posterUrl = expandPosterBtn.dataset.poster;
      if (posterUrl) {
        openPosterModal(posterUrl);
      }
    });

    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return mins + ':' + secs.toString().padStart(2, '0');
    }

    function updatePlayPauseUI(playing) {
      if (playing) {
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        playOverlay.classList.add('opacity-0', 'pointer-events-none');
      } else {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        playOverlay.classList.remove('opacity-0', 'pointer-events-none');
      }
    }

    function pauseOtherVideos() {
      document.querySelectorAll('.proyecto-video-container').forEach(other => {
        if (other === container) return;
        const otherVideo = other.querySelector('video.proyecto-video');
        if (otherVideo && !otherVideo.paused) {
          otherVideo.pause();
        }
      });
    }

    playOverlay?.addEventListener('click', () => {
      pauseOtherVideos();
      video.play();
    });

    playPauseBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (video.paused) {
        pauseOtherVideos();
        video.play();
      } else {
        video.pause();
      }
    });

    video.addEventListener('play', () => updatePlayPauseUI(true));
    video.addEventListener('pause', () => updatePlayPauseUI(false));
    video.addEventListener('ended', () => updatePlayPauseUI(false));

    video.addEventListener('loadedmetadata', () => {
      if (timeDisplay) timeDisplay.textContent = `0:00 / ${formatTime(video.duration)}`;
    });

    video.addEventListener('timeupdate', () => {
      const percent = (video.currentTime / video.duration) * 100;
      progressBar.style.width = percent + '%';
      progressHandle.style.left = percent + '%';
      if (timeDisplay) timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
    });

    rewindBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      video.currentTime = Math.max(0, video.currentTime - 10);
    });

    forwardBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      video.currentTime = Math.min(video.duration, video.currentTime + 10);
    });

    muteBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      video.muted = !video.muted;
      if (video.muted) {
        volumeIcon.classList.add('hidden');
        muteIcon.classList.remove('hidden');
        if (volumeSlider) volumeSlider.value = 0;
      } else {
        volumeIcon.classList.remove('hidden');
        muteIcon.classList.add('hidden');
        if (volumeSlider) volumeSlider.value = video.volume;
      }
    });

    volumeSlider?.addEventListener('input', (e) => {
      e.stopPropagation();
      video.volume = e.target.value;
      video.muted = video.volume === 0;
      if (video.muted) {
        volumeIcon.classList.add('hidden');
        muteIcon.classList.remove('hidden');
      } else {
        volumeIcon.classList.remove('hidden');
        muteIcon.classList.add('hidden');
      }
    });

    fullscreenBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (container.requestFullscreen) container.requestFullscreen();
      else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
      else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
    });

    // Doble clic para expandir video
    video.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      if (!document.fullscreenElement) {
        if (container.requestFullscreen) {
          container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
          container.webkitRequestFullscreen();
        } else if (video.webkitEnterFullscreen) {
          video.webkitEnterFullscreen();
        }
      } else {
        document.exitFullscreen();
      }
    });

    let isDragging = false;

    function seekToPosition(e) {
      const rect = progressContainer.getBoundingClientRect();
      const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      video.currentTime = percent * video.duration;
    }

    progressContainer?.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      isDragging = true;
      seekToPosition(e);
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) seekToPosition(e);
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  });
}

// Modal para ver poster/imagen en grande
function openPosterModal(posterUrl) {
  // Crear modal si no existe
  let modal = document.getElementById('posterModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'posterModal';
    modal.className = 'fixed inset-0 z-50 hidden items-center justify-center bg-black/90 p-4';
    modal.innerHTML = `
      <button class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10" id="closePosterModal">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img id="posterModalImage" src="" alt="Imagen ampliada" class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl">
    `;
    document.body.appendChild(modal);

    // Eventos para cerrar
    document.getElementById('closePosterModal').addEventListener('click', closePosterModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePosterModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closePosterModal();
      }
    });
  }

  // Mostrar imagen
  document.getElementById('posterModalImage').src = posterUrl;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closePosterModal() {
  const modal = document.getElementById('posterModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
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
