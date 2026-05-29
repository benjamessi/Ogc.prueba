import homeHeroImage from "../assets/olivos-home.jpg";
import clubLogo from "../assets/logo-ogc.png";
import courseMapImage from "../assets/cancha-plano.jpg";
import holeFifteenImage from "../assets/hoyo-15.jpeg";
import clubhouseImage from "../assets/encabezado-salones.jpg";
import zurichLogo from "../assets/Zurich_Insurance_Group_Logo_Horizontal.svg.png";
import omintLogo from "../assets/logo-omint-contentful.png";
import galiciaEminentLogo from "../assets/sponsor-galicia-eminent-logo.png";
import nicasiaBlackLogo from "../assets/nicasiaLetrasNegras-removebg-preview.png";

const commonClub = {
  name: "Olivos Golf Club",
  logo: clubLogo,
  heroImage: homeHeroImage,
  email: "secretaria@olivosgolf.com.ar",
  address: "Ruta Panamericana Km 32, acceso Norte Ramal Pilar, Ingeniero Pablo Nogués, Provincia de Buenos Aires.",
  shortAddress: "Ruta Panamericana Km 32, Ramal Pilar",
  mapQuery: "Olivos Golf Club, Ingeniero Pablo Nogués, Provincia de Buenos Aires"
};

const sharedAssets = {
  clubhouseImage,
  courseMapImage,
  holeFifteenImage
};

const sponsors = [
  {
    name: "Zurich",
    slug: "zurich",
    homeLogo: zurichLogo,
    footerLogo: zurichLogo,
    needsFooterCard: true
  },
  {
    name: "Omint",
    slug: "omint",
    homeLogo: omintLogo,
    footerLogo: omintLogo,
    needsFooterCard: true
  },
  {
    name: "Galicia Éminent",
    slug: "galicia",
    homeLogo: galiciaEminentLogo,
    footerLogo: galiciaEminentLogo,
    needsFooterCard: true
  },
  {
    name: "Nicasia Vineyards",
    slug: "nicasia",
    homeLogo: nicasiaBlackLogo,
    footerLogo: nicasiaBlackLogo,
    needsFooterCard: true
  }
];

const siteContent = {
  es: {
    languageName: "Español",
    ui: {
      header: {
        primaryNav: "Principal",
        homeAria: "Olivos Golf Club inicio",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
        logout: "Cerrar sesión",
        languageLabel: "Idioma"
      },
      skipLink: "Saltar al contenido",
      quickActionsAria: "Acciones rápidas para celular",
      footerAria: "Datos de contacto",
      footerTagline: '"La Augusta de Argentina"',
      footerLegal: "© Olivos Golf Club. Todos los derechos reservados."
    },
    quickActions: [
      { label: "Inicio", path: "/" },
      { label: "Reservar", path: "/reservaciones" },
      { label: "Club", path: "/historia-club" },
      { label: "Socios", path: "/socios" }
    ],
    club: {
      location: "Buenos Aires, Argentina"
    },
    navigation: [
      { label: "Inicio", href: "/" },
      {
        label: "Club",
        children: [
          { label: "Clubhouse", href: "/clubhouse" },
          { label: "Historia del club", href: "/historia-club" },
          { label: "Reciprocidad", href: "/reciprocidad" }
        ]
      },
      {
        label: "Golf",
        featured: true,
        children: [
          { label: "Cancha", href: "/cancha" },
          { label: "Condiciones de juego", href: "/condiciones-juego" },
          { label: "Reservar horario", href: "/reservaciones" },
          { label: "Green fees", href: "/tarifas" }
        ]
      },
      { label: "Socios", href: "/socios" },
      { label: "Contacto", href: "/contacto" }
    ],
    home: {
      coverAlt: "Jugadores caminando en la cancha del Olivos Golf Club",
      eyebrow: "Golf en Buenos Aires",
      title: '"La Augusta Argentina."',
      intro: "Una cancha histórica, tres recorridos y una experiencia de golf reconocida en la Argentina.",
      reserveCta: "Reservar horario",
      historyCta: "Historia del club",
      heroAlt: "Cancha del Olivos Golf Club",
      secretaryAria: "Información de secretaría",
      secretaryLabel: "Secretaría",
      attentionTitle: "Atención"
    },
    sponsorsSection: {
      kicker: "Sponsors",
      title: "Acompañan al Olivos Golf Club",
      text: "Empresas que acompañan la actividad institucional, deportiva y social del club.",
      aria: "Sponsors del Olivos Golf Club",
      footerTitle: "Sponsors"
    },
    history: {
      eyebrow: "Historia del club",
      title: "100 años de historia.",
      intro:
        "Una de las instituciones más emblemáticas del golf argentino, con una cancha reconocida por su diseño, sus recorridos y su exigencia deportiva.",
      timelineAria: "Hitos principales del Olivos Golf Club",
      timeline: [
        { year: "1926", label: "Fundación del club" },
        { year: "1928", label: "Primera cancha en Olivos" },
        { year: "1950", label: "Traslado a Ingeniero Pablo Nogués" },
        { year: "27 hoyos", label: "Recorridos Blanca, Colorada y Azul" },
        { year: "2010", label: "Sede de campeonato internacional" }
      ],
      kicker: "Desde 1926",
      sectionTitle: "Una historia ligada al golf argentino.",
      imageAlt: "Bandera del Olivos Golf Club",
      sections: [
        {
          title: "Los primeros años",
          paragraphs: [
            "La historia del Olivos Golf Club comenzó en 1926, cuando un grupo de treinta golfistas, convencidos del futuro del golf en la Argentina, decidió fundar un club que estuviera a la altura de las grandes tradiciones del deporte. Aquella iniciativa marcó el nacimiento de una de las instituciones más emblemáticas del golf argentino.",
            "En sus primeros años, el club funcionó en Olivos, en la zona de las calles Marcelino Ugarte y España. Allí desarrolló una cancha de 18 hoyos de estilo británico y se consolidó rápidamente como uno de los referentes del país."
          ]
        },
        {
          title: "La segunda fundación",
          paragraphs: [
            "Sin embargo, el crecimiento urbano llevó a que en 1950 el club se trasladara a su actual ubicación en Ingeniero Pablo Nogués, en lo que fue considerado una verdadera “segunda fundación”."
          ]
        },
        {
          title: "Una cancha de referencia",
          paragraphs: [
            "El diseño de la cancha estuvo a cargo de Luther H. Koontz, vinculado a la escuela de Alister MacKenzie, uno de los grandes nombres de la arquitectura de golf mundial. El resultado fue una cancha de 27 hoyos, distribuida en tres recorridos —Blanca, Colorada y Azul—, caracterizada por sus desniveles naturales, sus árboles añosos, sus greens exigentes y un trazado que obliga al jugador a manejar distintos efectos y leer con precisión el viento."
          ]
        },
        {
          title: "Prestigio deportivo",
          paragraphs: [
            "A lo largo de su historia, el Olivos Golf Club fue sede de torneos de enorme prestigio, entre ellos el Abierto de la República Argentina, el Torneo de Maestros y el Campeonato Mundial Amateur por Equipos de 2010, disputado en sus canchas junto con el Buenos Aires Golf Club.",
            "Por su nivel deportivo, su historia y la calidad de su cancha, Olivos Golf Club es considerado uno de los grandes campos de golf de la Argentina y de Sudamérica. Incluso ha sido reconocido por Golf Digest entre las mejores canchas del mundo fuera de Estados Unidos, confirmando el lugar de privilegio que ocupa dentro del golf argentino."
          ]
        }
      ]
    },
    clubhouse: {
      image: sharedAssets.clubhouseImage,
      heroEyebrow: "Club",
      title: "Clubhouse",
      intro:
        "Un espacio de encuentro para socios, visitantes e invitados, con salones, gastronomía y vistas al entorno del club.",
      imageAlt: "Salones del clubhouse del Olivos Golf Club",
      kicker: "Clubhouse",
      salonsTitle: "Salones",
      hours: "Abierto de martes a domingo, de 8:00 a 24:00.",
      salonsText:
        "El club cuenta con tres salones para eventos sociales y corporativos, con capacidad máxima de hasta 500 personas y estacionamiento para invitados.",
      gastronomyKicker: "Gastronomía",
      gastronomyTitle: "Gastronomía",
      gastronomyText: "Servicio gastronómico para socios, eventos, reuniones y torneos.",
      locationKicker: "Ubicación",
      locationTitle: "Olivos Golf Club",
      mapButton: "Abrir en Google Maps",
      mapTitle: "Mapa de ubicación de Olivos Golf Club"
    },
    course: {
      map: sharedAssets.courseMapImage,
      holeFifteenImage: sharedAssets.holeFifteenImage,
      heroEyebrow: "Golf",
      title: "Cancha",
      intro:
        "La cancha de Olivos Golf Club cuenta con 27 hoyos distribuidos en los recorridos Blanca, Colorada y Azul. Su diseño combina arboledas añosas, desniveles naturales, greens exigentes y un trazado que premia la precisión.",
      overviewKicker: "Recorridos",
      overviewTitle: "Blanca, Colorada y Azul",
      overviewText: "Los tres recorridos permiten combinar distintas vueltas y experiencias dentro de una misma cancha.",
      mapAlt: "Plano de la cancha del Olivos Golf Club",
      routesKicker: "Recorridos",
      routesTitle: "Los recorridos de la cancha",
      routesIntro: "Cada recorrido contiene 9 hoyos. Abrí uno para ver el detalle sin desplegar toda la cancha a la vez.",
      closeRoute: "Cerrar recorrido",
      viewHoles: "Ver hoyos",
      holeAltPrefix: "Hoyo",
      holeCaption: "Hoyo",
      featureKicker: "Hoyo destacado",
      featureTitle: "Hoyo 15",
      featureAria: "Datos del hoyo 15",
      stats: ["Par 5", "470 yardas", "Riesgo y recompensa"],
      feature:
        "Este es el hoyo insignia del club. Incluido en 1001 Golf Holes You Must Play Before You Die y reconocido entre los grandes hoyos de golf del mundo, ofrece un desafío memorable de riesgo y recompensa.\n\nEl hoyo asciende levemente desde el tee, con un bosque denso sobre el lado derecho del fairway, y luego desciende hacia un green protegido por agua corta a la derecha y tres bunkers.\n\nPara los jugadores amateurs, intentar llegar al green en dos golpes puede ser tentador, pero un mal tiro puede transformar rápidamente una oportunidad de birdie en un score alto.",
      featureAlt: "Hoyo 15 del Olivos Golf Club",
      routeCards: [
        { name: "Blanca", description: "Uno de los recorridos principales del club, exigente y tradicional." },
        { name: "Colorada", description: "Recorrido estratégico, con hoyos de alto valor competitivo." },
        { name: "Azul", description: "Alternativa complementaria dentro de los 27 hoyos del club." }
      ],
      conditionsCta: {
        kicker: "Antes de jugar",
        title: "Condiciones de juego",
        text: "Consultá las reglas de la cancha y las condiciones del club antes de salir a jugar.",
        button: "Ver condiciones de juego",
        href: "/condiciones-juego"
      },
      highlights: [
        {
          title: "27 hoyos",
          body: "La cancha cuenta con 27 hoyos distribuidos en tres recorridos.",
          metric: "27 hoyos"
        },
        {
          title: "Atención",
          body: "La secretaría informa disponibilidad, horarios y condiciones para jugar.",
          metric: "8:00 a 16:30"
        }
      ]
    },
    playingConditions: {
      heroEyebrow: "Golf",
      title: "Condiciones de juego",
      intro: "Información importante para jugadores, socios e invitados antes de salir a la cancha.",
      sections: [
        {
          title: "Reglas de la cancha",
          intro:
            "Para preservar la calidad de la cancha y garantizar una buena experiencia de juego, se solicita a todos los jugadores respetar las siguientes pautas.",
          items: [
            {
              title: "Cuidado del campo",
              list: [
                "Arreglar los piques.",
                "Reponer los divots.",
                "Rastrillar los bunkers.",
                "Cuidar las marcas ubicadas en los tees de salida.",
                "Cuidar las estacas ubicadas en los laterales de los fairways."
              ]
            },
            {
              title: "Bunkers y rastrillos",
              text:
                "Los rastrillos deben colocarse en el centro del bunker, de modo que interfieran lo menos posible en el desarrollo del juego. Si una pelota descansa contra un rastrillo, el jugador deberá marcarla antes de retirarlo. En caso de que la pelota se mueva, podrá ser repuesta sin penalidad. Luego, el rastrillo deberá colocarse nuevamente dentro del bunker."
            },
            {
              title: "Toques de sirena",
              list: [
                "Un toque de sirena: suspensión temporal.",
                "Nuevo toque de sirena: reanudación del juego.",
                "Dos toques de sirena: suspensión definitiva."
              ]
            },
            {
              title: "Suspensión del juego",
              text:
                "Cuando el juego sea suspendido por el Comité, los jugadores deberán interrumpir el juego de inmediato y no podrán reanudarlo hasta que el Comité así lo disponga. La falta a esta disposición podrá ser sancionada con descalificación.",
              note:
                "Esta norma aplica también para modalidad match play y para jugadores que estén por iniciar un nuevo hoyo."
            }
          ]
        },
        {
          title: "Condiciones del club",
          intro:
            "Las siguientes condiciones forman parte de las normas de convivencia, presentación y uso de las instalaciones del club.",
          items: [
            {
              title: "Vestimenta",
              text: "No está permitido el uso de las siguientes vestimentas para la práctica de golf:",
              list: [
                "Joggings.",
                "Remeras sin cuello.",
                "Remeras musculosas.",
                "Remeras sin mangas en caballeros.",
                "Camisetas de fútbol, rugby u otros deportes.",
                "Trajes de baño.",
                "Shorts y calzas en damas."
              ]
            },
            {
              title: "Control y cumplimiento",
              text:
                "Los miembros de la Comisión de Golf y los starters están a cargo de controlar el cumplimiento de estas normas."
            },
            {
              title: "Recomendación general",
              text:
                "Antes de asistir al club, se recomienda confirmar con Secretaría cualquier condición vigente sobre horarios, vestimenta, salidas, invitados o suspensión por clima."
            }
          ]
        }
      ],
      cta: {
        title: "¿Tenés dudas antes de jugar?",
        text: "Comunicate con Secretaría para confirmar condiciones vigentes, horarios y disponibilidad.",
        contact: "Contactar Secretaría",
        reserve: "Reservar horario"
      }
    },
    booking: {
      phoneDisplay: "(5411) 4587-1076 int. 112 / 101 / 102",
      phoneHref: "tel:+541145871076",
      hours: "Martes a sábado, 8:00 a 16:30."
    },
    reservationsPage: {
      eyebrow: "Reservaciones",
      title: "Reservar horario",
      intro: "Elegí día y horario para consultar disponibilidad."
    },
    reservation: {
      intro:
        "Elegí día y horario. El sistema comprueba automáticamente si la reserva está permitida según la condición del jugador.",
      times: ["08:00", "09:30", "11:00", "13:30", "15:00"],
      kicker: "Reservar horario",
      title: "Elegí día y hora.",
      summaryLabel: "Consulta preparada",
      dateLabel: "Día",
      timeLabel: "Horario",
      statusLabel: "Condición",
      memberLabel: "Socio",
      nonMemberLabel: "No socio",
      memberLoginHint: "Para reservar como socio, primero tenés que iniciar sesión.",
      guestsLabel: "Invitados externos",
      noGuests: "Sin invitados",
      oneGuest: "1 invitado",
      submit: "Consultar disponibilidad",
      rules: {
        noDate: "Elegí un día para consultar disponibilidad.",
        openWednesday: "Miércoles de golf abierto: pueden reservar socios y no socios.",
        memberOnlyWeekdays:
          "Los martes, jueves y viernes sólo pueden reservar socios. Para reservar como socio, primero tenés que iniciar sesión.",
        maxOneGuest: "Los martes, jueves y viernes cada socio puede invitar como máximo a 1 invitado.",
        weekdayOk: "Día habilitado para socios. Podés sumar como máximo 1 invitado.",
        weekendMembersOnly: "Los sábados y domingos sólo pueden reservar socios.",
        weekendNoGuests: "Los sábados y domingos no se permiten invitados externos.",
        weekendOk: "Día habilitado para socios, sin invitados externos.",
        unavailable:
          "Ese día no está habilitado para reservas. Elegí miércoles, o martes, jueves, viernes, sábado o domingo si sos socio."
      }
    },
    scorecard: {
      eyebrow: "Imprimir",
      title: "Descargá tu tarjeta",
      text:
        "Antes de salir a la cancha, podés descargar e imprimir la tarjeta de juego con el mapa de la cancha y la información de los recorridos Blanca, Colorada y Azul.",
      helper: "La tarjeta incluye información de la cancha, recorridos y scorecard para uso del jugador.",
      downloadButton: "Descargar tarjeta",
      printButton: "Imprimir tarjeta",
      previewLabel: "Tarjeta de juego",
      fileName: "Tarjeta de juego - Olivos Golf Club.pdf"
    },
    ratesPage: {
      eyebrow: "Green fees",
      title: "Green fees",
      intro: "Valores de referencia para visitantes."
    },
    rates: {
      imageAlt: "Green del Olivos Golf Club",
      sectionKicker: "Valores",
      title: "Green fees",
      alert: "Valores de referencia sujetos a confirmación con Secretaría.",
      boardAria: "Green fees",
      labels: {
        category: "Categoría",
        days: "Días disponibles",
        price: "Valor",
        notes: "Observaciones"
      },
      ctaText: "Para confirmar valores vigentes y disponibilidad, comunicate con Secretaría.",
      ctaButton: "Contactar Secretaría",
      rows: [
        { category: "Visitas extranjeras", days: "Martes a viernes", price: "USD 120", notes: "Sujeto a disponibilidad." },
        {
          category: "Visitas extranjeras",
          days: "Sábados, domingos y feriados",
          price: "USD 150",
          notes: "Sujeto a disponibilidad."
        },
        {
          category: "Caballeros con handicap nacional",
          days: "Martes a viernes",
          price: "Consultar",
          notes: "Sujeto a disponibilidad."
        },
        {
          category: "Damas y menores de 18 años",
          days: "Martes a viernes",
          price: "Consultar",
          notes: "Sujeto a disponibilidad."
        },
        {
          category: "Driving range",
          days: "Balde de 25 pelotas",
          price: "Consultar",
          notes: "Consultar condiciones vigentes."
        }
      ]
    },
    membersPage: {
      eyebrow: "Socios",
      title: "Acceso socios",
      intro: "Ingreso al área privada para socios del club."
    },
    memberArea: {
      authEmail: "socio@olivosgolf.com.ar",
      authPassword: "olivos",
      memberName: "Socio OGC",
      errorMessage: "Los datos ingresados no son correctos. Verificá tu email y contraseña.",
      kicker: "Exclusivo socios",
      title: "Inicio de sesión",
      intro: "Accedé con tus credenciales para consultar información y beneficios exclusivos del club.",
      dashboardAria: "Área privada de socios",
      welcome: "Bienvenido",
      emailLabel: "Email de socio",
      emailPlaceholder: "tuemail@ejemplo.com",
      passwordLabel: "Contraseña",
      showPassword: "Mostrar",
      hidePassword: "Ocultar",
      submit: "Iniciar sesión",
      forgotPassword: "Olvidé mi contraseña",
      forgotPasswordHref: "mailto:secretaria@olivosgolf.com.ar?subject=Recuperar%20contrase%C3%B1a",
      contactSecretary: "Contactar Secretaría",
      cards: [
        { title: "Reservas internas", body: "Acceso rápido a turnos, condiciones del día y avisos de secretaría." },
        {
          title: "Torneos y resultados",
          body: "Espacio preparado para fixtures, resultados y comunicaciones deportivas."
        },
        { title: "Beneficios y reciprocidad", body: "Convenios vigentes, datos útiles y novedades exclusivas para socios." }
      ]
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Hablá con Secretaría.",
      intro: "Consultá horarios, disponibilidad de juego, green fees, eventos y servicios del club."
    },
    contact: {
      kicker: "Secretaría",
      title: "Consultar disponibilidad",
      labels: {
        hours: "Horarios de atención",
        phone: "Teléfono",
        email: "Email",
        address: "Dirección"
      },
      cardLabel: "Contacto directo",
      cardTitle: "Secretaría del club",
      cardText: "Para confirmar horarios, disponibilidad, green fees, eventos o servicios, comunicate con Secretaría.",
      callButton: "Llamar a Secretaría",
      emailButton: "Enviar email",
      mapButton: "Abrir en Google Maps",
      mapTitle: "Mapa de ubicación de Olivos Golf Club"
    },
    reciprocity: {
      eyebrow: "Reciprocidad",
      title: "Convenios y visitas.",
      intro:
        "Olivos Golf Club mantiene convenios de reciprocidad con clubes de Argentina y de distintos países del exterior, ampliando las posibilidades de juego para sus socios en instituciones afines. Para utilizar este beneficio, se recomienda consultar previamente con Secretaría las condiciones vigentes.",
      kicker: "Clubes con convenio",
      sectionTitle: "Reciprocidad por país",
      sectionIntro: "Desplegá cada país para ver los datos disponibles de contacto y ubicación.",
      clubSingular: "club",
      clubPlural: "clubes",
      details: {
        address: "Dirección",
        phone: "Teléfono",
        reservations: "Reservas",
        fax: "Fax",
        email: "Email",
        website: "Web"
      },
      countryNames: {}
    },
    notFound: {
      eyebrow: "Página no encontrada",
      title: "Página no encontrada",
      intro: "Volvé al inicio o elegí una sección del menú principal.",
      button: "Volver al inicio"
    }
  },
  en: {
    languageName: "English",
    ui: {
      header: {
        primaryNav: "Primary",
        homeAria: "Olivos Golf Club home",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        logout: "Log out",
        languageLabel: "Language"
      },
      skipLink: "Skip to content",
      quickActionsAria: "Mobile quick actions",
      footerAria: "Contact details",
      footerTagline: '"The Augusta of Argentina"',
      footerLegal: "© Olivos Golf Club. All rights reserved."
    },
    quickActions: [
      { label: "Home", path: "/" },
      { label: "Book", path: "/reservaciones" },
      { label: "Club", path: "/historia-club" },
      { label: "Members", path: "/socios" }
    ],
    club: {
      location: "Buenos Aires, Argentina"
    },
    navigation: [
      { label: "Home", href: "/" },
      {
        label: "Club",
        children: [
          { label: "Clubhouse", href: "/clubhouse" },
          { label: "Club history", href: "/historia-club" },
          { label: "Reciprocity", href: "/reciprocidad" }
        ]
      },
      {
        label: "Golf",
        featured: true,
        children: [
          { label: "Course", href: "/cancha" },
          { label: "Playing conditions", href: "/condiciones-juego" },
          { label: "Book a tee time", href: "/reservaciones" },
          { label: "Green fees", href: "/tarifas" }
        ]
      },
      { label: "Members", href: "/socios" },
      { label: "Contact", href: "/contacto" }
    ],
    home: {
      coverAlt: "Players walking along the Olivos Golf Club course",
      eyebrow: "Golf in Buenos Aires",
      title: '"The Augusta of Argentina."',
      intro: "A historic course, three layouts and a golf experience recognized across Argentina.",
      reserveCta: "Book a tee time",
      historyCta: "Club history",
      heroAlt: "Olivos Golf Club course",
      secretaryAria: "Secretary information",
      secretaryLabel: "Secretary",
      attentionTitle: "Office hours"
    },
    sponsorsSection: {
      kicker: "Sponsors",
      title: "Supporting Olivos Golf Club",
      text: "Companies supporting the club's institutional, sporting and social activity.",
      aria: "Olivos Golf Club sponsors",
      footerTitle: "Sponsors"
    },
    history: {
      eyebrow: "Club history",
      title: "100 years of history.",
      intro:
        "One of Argentina's most emblematic golf institutions, with a course recognized for its design, routing and sporting challenge.",
      timelineAria: "Olivos Golf Club key milestones",
      timeline: [
        { year: "1926", label: "The club is founded" },
        { year: "1928", label: "First course in Olivos" },
        { year: "1950", label: "Move to Ingeniero Pablo Nogués" },
        { year: "27 holes", label: "Blanca, Colorada and Azul layouts" },
        { year: "2010", label: "Host of an international championship" }
      ],
      kicker: "Since 1926",
      sectionTitle: "A history linked to Argentine golf.",
      imageAlt: "Olivos Golf Club flag",
      sections: [
        {
          title: "The early years",
          paragraphs: [
            "The history of Olivos Golf Club began in 1926, when a group of thirty golfers, convinced of the future of golf in Argentina, decided to found a club worthy of the sport's great traditions. That initiative marked the birth of one of Argentine golf's most emblematic institutions.",
            "In its early years, the club operated in Olivos, around Marcelino Ugarte and España streets. There it developed an 18-hole course with a British character and quickly became one of the country's leading clubs."
          ]
        },
        {
          title: "The second foundation",
          paragraphs: [
            "Urban growth eventually led the club to move in 1950 to its current location in Ingeniero Pablo Nogués, a moment regarded as a true “second foundation”."
          ]
        },
        {
          title: "A benchmark course",
          paragraphs: [
            "The course was designed by Luther H. Koontz, connected to the school of Alister MacKenzie, one of the great names in golf architecture. The result was a 27-hole course, arranged across the Blanca, Colorada and Azul layouts, known for its natural slopes, mature trees, demanding greens and a routing that requires shot-shaping and careful reading of the wind."
          ]
        },
        {
          title: "Sporting prestige",
          paragraphs: [
            "Throughout its history, Olivos Golf Club has hosted prestigious tournaments, including the Argentine Open, the Masters Tournament and the 2010 World Amateur Team Championship, held together with Buenos Aires Golf Club.",
            "Because of its sporting level, history and course quality, Olivos Golf Club is regarded as one of the great golf courses in Argentina and South America. It has also been recognized by Golf Digest among the best courses in the world outside the United States."
          ]
        }
      ]
    },
    clubhouse: {
      image: sharedAssets.clubhouseImage,
      heroEyebrow: "Club",
      title: "Clubhouse",
      intro: "A meeting place for members, visitors and guests, with event rooms, dining service and views of the club grounds.",
      imageAlt: "Olivos Golf Club clubhouse event rooms",
      kicker: "Clubhouse",
      salonsTitle: "Event rooms",
      hours: "Open Tuesday to Sunday, from 8:00 AM to midnight.",
      salonsText:
        "The club has three rooms for social and corporate events, with maximum capacity for up to 500 guests and parking for attendees.",
      gastronomyKicker: "Dining",
      gastronomyTitle: "Dining",
      gastronomyText: "Dining service for members, events, meetings and tournaments.",
      locationKicker: "Location",
      locationTitle: "Olivos Golf Club",
      mapButton: "Open in Google Maps",
      mapTitle: "Olivos Golf Club location map"
    },
    course: {
      map: sharedAssets.courseMapImage,
      holeFifteenImage: sharedAssets.holeFifteenImage,
      heroEyebrow: "Golf",
      title: "Course",
      intro:
        "Olivos Golf Club features 27 holes across the Blanca, Colorada and Azul layouts. Its design combines mature trees, natural elevation changes, demanding greens and a routing that rewards precision.",
      overviewKicker: "Layouts",
      overviewTitle: "Blanca, Colorada and Azul",
      overviewText: "The three layouts allow different rounds and experiences within the same course.",
      mapAlt: "Olivos Golf Club course map",
      routesKicker: "Layouts",
      routesTitle: "Three ways to play Olivos",
      routesIntro: "Each layout has 9 holes. Open one layout at a time to view the details without expanding the whole course.",
      closeRoute: "Close layout",
      viewHoles: "View holes",
      holeAltPrefix: "Hole",
      holeCaption: "Hole",
      featureKicker: "Featured hole",
      featureTitle: "Hole 15",
      featureAria: "Hole 15 details",
      stats: ["Par 5", "470 yards", "Risk and reward"],
      feature:
        "This is the club's signature hole. Featured in 1001 Golf Holes You Must Play Before You Die and recognized among the great golf holes of the world, it offers a memorable risk-and-reward challenge.\n\nThe hole rises gently from the tee, with dense woodland along the right side of the fairway, before descending toward a green protected by water short right and three bunkers.\n\nFor amateur players, trying to reach the green in two can be tempting, but one poor shot can quickly turn a birdie opportunity into a high score.",
      featureAlt: "Hole 15 at Olivos Golf Club",
      routeCards: [
        { name: "Blanca", description: "One of the club's main layouts, demanding and traditional." },
        { name: "Colorada", description: "A strategic layout, with holes of strong competitive value." },
        { name: "Azul", description: "A complementary alternative within the club's 27 holes." }
      ],
      conditionsCta: {
        kicker: "Before playing",
        title: "Playing conditions",
        text: "Review course rules and club conditions before going out to play.",
        button: "View playing conditions",
        href: "/condiciones-juego"
      },
      highlights: [
        {
          title: "27 holes",
          body: "The course has 27 holes distributed across three layouts.",
          metric: "27 holes"
        },
        {
          title: "Secretary",
          body: "The secretary's office provides availability, schedules and playing conditions.",
          metric: "8:00 to 16:30"
        }
      ]
    },
    playingConditions: {
      heroEyebrow: "Golf",
      title: "Playing conditions",
      intro: "Important information for players, members and guests before going out on the course.",
      sections: [
        {
          title: "Course rules",
          intro:
            "To preserve course quality and ensure a good playing experience, all players are asked to respect the following guidelines.",
          items: [
            {
              title: "Course care",
              list: [
                "Repair pitch marks.",
                "Replace divots.",
                "Rake bunkers.",
                "Take care of the markers located on teeing areas.",
                "Take care of the stakes located along fairway sides."
              ]
            },
            {
              title: "Bunkers and rakes",
              text:
                "Rakes should be placed in the center of the bunker so they interfere as little as possible with play. If a ball rests against a rake, the player should mark the ball before removing it. If the ball moves, it may be replaced without penalty. The rake should then be placed back inside the bunker."
            },
            {
              title: "Siren signals",
              list: [
                "One siren signal: temporary suspension.",
                "New siren signal: play resumes.",
                "Two siren signals: definitive suspension."
              ]
            },
            {
              title: "Suspension of play",
              text:
                "When play is suspended by the Committee, players must stop play immediately and may not resume until the Committee authorizes it. Failure to comply may result in disqualification.",
              note: "This rule also applies to match play and to players who are about to start a new hole."
            }
          ]
        },
        {
          title: "Club conditions",
          intro:
            "The following conditions are part of the club's standards for coexistence, presentation and use of facilities.",
          items: [
            {
              title: "Dress code",
              text: "The following clothing is not permitted for playing golf:",
              list: [
                "Jogging pants.",
                "Collarless shirts.",
                "Tank tops.",
                "Sleeveless shirts for men.",
                "Football, rugby or other sports jerseys.",
                "Swimwear.",
                "Shorts and leggings for ladies."
              ]
            },
            {
              title: "Control and compliance",
              text: "Golf Committee members and starters are responsible for monitoring compliance with these rules."
            },
            {
              title: "General recommendation",
              text:
                "Before visiting the club, we recommend confirming current conditions with the Secretary's office regarding schedules, dress code, tee times, guests or weather suspensions."
            }
          ]
        }
      ],
      cta: {
        title: "Any questions before playing?",
        text: "Contact the Secretary's office to confirm current conditions, schedules and availability.",
        contact: "Contact Secretary",
        reserve: "Book a tee time"
      }
    },
    booking: {
      phoneDisplay: "(5411) 4587-1076 ext. 112 / 101 / 102",
      phoneHref: "tel:+541145871076",
      hours: "Tuesday to Saturday, 8:00 AM to 4:30 PM."
    },
    reservationsPage: {
      eyebrow: "Bookings",
      title: "Book a tee time",
      intro: "Choose a day and time to check availability."
    },
    reservation: {
      intro: "Choose a day and time. The system automatically checks whether the booking is allowed for the player type.",
      times: ["08:00", "09:30", "11:00", "13:30", "15:00"],
      kicker: "Book a tee time",
      title: "Choose day and time.",
      summaryLabel: "Request prepared",
      dateLabel: "Day",
      timeLabel: "Time",
      statusLabel: "Status",
      memberLabel: "Member",
      nonMemberLabel: "Non-member",
      memberLoginHint: "To book as a member, you must sign in first.",
      guestsLabel: "External guests",
      noGuests: "No guests",
      oneGuest: "1 guest",
      submit: "Check availability",
      rules: {
        noDate: "Choose a day to check availability.",
        openWednesday: "Wednesday is open golf: members and non-members may book.",
        memberOnlyWeekdays: "Tuesday, Thursday and Friday are members-only. To book as a member, you must sign in first.",
        maxOneGuest: "On Tuesday, Thursday and Friday, each member may invite up to 1 guest.",
        weekdayOk: "Day available for members. You may add up to 1 guest.",
        weekendMembersOnly: "Saturday and Sunday bookings are members-only.",
        weekendNoGuests: "External guests are not allowed on Saturdays and Sundays.",
        weekendOk: "Day available for members, with no external guests.",
        unavailable:
          "That day is not available for bookings. Choose Wednesday, or Tuesday, Thursday, Friday, Saturday or Sunday if you are a member."
      }
    },
    scorecard: {
      eyebrow: "Print",
      title: "Download your scorecard",
      text:
        "Before going out on the course, you can download and print the scorecard with the course map and information for the Blanca, Colorada and Azul layouts.",
      helper: "The card includes course information, layouts and scorecard details for player use.",
      downloadButton: "Download scorecard",
      printButton: "Print scorecard",
      previewLabel: "Scorecard",
      fileName: "Olivos Golf Club scorecard.pdf"
    },
    ratesPage: {
      eyebrow: "Green fees",
      title: "Green fees",
      intro: "Reference rates for visitors."
    },
    rates: {
      imageAlt: "Olivos Golf Club green",
      sectionKicker: "Rates",
      title: "Green fees",
      alert: "Reference values subject to confirmation with the Secretary's office.",
      boardAria: "Green fees",
      labels: {
        category: "Category",
        days: "Available days",
        price: "Rate",
        notes: "Notes"
      },
      ctaText: "To confirm current rates and availability, please contact the Secretary's office.",
      ctaButton: "Contact Secretary",
      rows: [
        { category: "Foreign visitors", days: "Tuesday to Friday", price: "USD 120", notes: "Subject to availability." },
        {
          category: "Foreign visitors",
          days: "Saturdays, Sundays and holidays",
          price: "USD 150",
          notes: "Subject to availability."
        },
        {
          category: "Gentlemen with national handicap",
          days: "Tuesday to Friday",
          price: "Ask",
          notes: "Subject to availability."
        },
        {
          category: "Ladies and under-18s",
          days: "Tuesday to Friday",
          price: "Ask",
          notes: "Subject to availability."
        },
        {
          category: "Driving range",
          days: "Bucket of 25 balls",
          price: "Ask",
          notes: "Please confirm current conditions."
        }
      ]
    },
    membersPage: {
      eyebrow: "Members",
      title: "Members access",
      intro: "Access to the club's private members area."
    },
    memberArea: {
      authEmail: "socio@olivosgolf.com.ar",
      authPassword: "olivos",
      memberName: "OGC Member",
      errorMessage: "The details entered are not correct. Please check your email and password.",
      kicker: "Members only",
      title: "Sign in",
      intro: "Sign in with your credentials to view exclusive club information and benefits.",
      dashboardAria: "Private members area",
      welcome: "Welcome",
      emailLabel: "Member email",
      emailPlaceholder: "you@example.com",
      passwordLabel: "Password",
      showPassword: "Show",
      hidePassword: "Hide",
      submit: "Sign in",
      forgotPassword: "Forgot my password",
      forgotPasswordHref: "mailto:secretaria@olivosgolf.com.ar?subject=Password%20recovery",
      contactSecretary: "Contact Secretary",
      cards: [
        { title: "Internal bookings", body: "Quick access to tee times, daily conditions and secretary notices." },
        { title: "Tournaments and results", body: "A space prepared for fixtures, results and sports communications." },
        { title: "Benefits and reciprocity", body: "Current agreements, useful details and exclusive member news." }
      ]
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Contact the Secretary's office.",
      intro: "Ask about schedules, playing availability, green fees, events and club services."
    },
    contact: {
      kicker: "Secretary",
      title: "Check availability",
      labels: {
        hours: "Office hours",
        phone: "Phone",
        email: "Email",
        address: "Address"
      },
      cardLabel: "Direct contact",
      cardTitle: "Club Secretary",
      cardText: "To confirm schedules, availability, green fees, events or services, please contact the Secretary's office.",
      callButton: "Call Secretary",
      emailButton: "Send email",
      mapButton: "Open in Google Maps",
      mapTitle: "Olivos Golf Club location map"
    },
    reciprocity: {
      eyebrow: "Reciprocity",
      title: "Agreements and visits.",
      intro:
        "Olivos Golf Club maintains reciprocal relationships with clubs in Argentina and abroad. To use this benefit, we recommend checking current conditions with the Secretary's office in advance.",
      kicker: "Reciprocal clubs",
      sectionTitle: "Reciprocity by country",
      sectionIntro: "Open each country to view available contact and location details.",
      clubSingular: "club",
      clubPlural: "clubs",
      details: {
        address: "Address",
        phone: "Phone",
        reservations: "Reservations",
        fax: "Fax",
        email: "Email",
        website: "Website"
      },
      countryNames: {
        Brasil: "Brazil",
        España: "Spain",
        Italia: "Italy",
        Perú: "Peru",
        Suiza: "Switzerland"
      }
    },
    notFound: {
      eyebrow: "Page not found",
      title: "Page not found",
      intro: "Return home or choose a section from the main menu.",
      button: "Back to home"
    }
  }
};

export function getSiteData(language = "es") {
  const content = siteContent[language] ?? siteContent.es;

  return {
    ...content,
    club: {
      ...commonClub,
      ...content.club
    },
    sponsors
  };
}
