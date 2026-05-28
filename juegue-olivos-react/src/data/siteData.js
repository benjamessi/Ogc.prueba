import homeHeroImage from "../assets/olivos-home.jpg";
import clubLogo from "../assets/logo-ogc.png";
import courseMapImage from "../assets/cancha-plano.jpg";
import holeFifteenImage from "../assets/hoyo-15.jpeg";
import clubhouseImage from "../assets/encabezado-salones.jpg";

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

const siteContent = {
  es: {
    languageName: "Español",
    ui: {
      header: {
        primaryNav: "Principal",
        homeAria: "Olivos Golf Club inicio",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
        logout: "Salir",
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
      attentionTitle: "Atención",
      accessTitle: "Accesos principales",
      accessIntro: "Ingresá a la información del club, reservas o área de socios.",
      cardsAria: "Accesos principales",
      cards: [
        { title: "Historia del club", body: "Información institucional y tradición.", href: "/historia-club" },
        { title: "Reservar horario", body: "Elegí día y hora.", href: "/reservaciones" },
        { title: "Acceso socios", body: "Ingreso privado para socios.", href: "/socios" }
      ]
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
      routesTitle: "Tres formas de jugar Olivos",
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
        "Un hoyo emblemático del club: exige potencia desde el tee, precisión sobre el agua y una decisión clara entre asegurar el par o buscar el premio.",
      featureAlt: "Hoyo 15 del Olivos Golf Club",
      routeCards: [
        { name: "Blanca", description: "Uno de los recorridos principales del club, exigente y tradicional." },
        { name: "Colorada", description: "Recorrido estratégico, con hoyos de alto valor competitivo." },
        { name: "Azul", description: "Alternativa complementaria dentro de los 27 hoyos del club." }
      ],
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
    booking: {
      phoneDisplay: "(5411) 4587-1076 int. 112 / 101 / 102",
      phoneHref: "tel:+541145871076",
      hours: "Martes a sábado, 8:00 a 16:30.",
      note: "Domingo: secretaría cerrada. Validar disponibilidad y reciprocidad antes de acercarse."
    },
    reservationsPage: {
      eyebrow: "Reservaciones",
      title: "Reservar horario",
      intro: "Elegí día y horario para consultar disponibilidad."
    },
    reservation: {
      intro:
        "Elegí día y horario. El sistema valida automáticamente si la reserva está permitida según la condición del jugador.",
      times: ["08:00", "09:30", "11:00", "13:30", "15:00"],
      kicker: "Reservar horario",
      title: "Elegí día y hora.",
      summaryLabel: "Consulta preparada",
      dateLabel: "Día",
      timeLabel: "Horario",
      statusLabel: "Condición",
      memberLabel: "Socio",
      nonMemberLabel: "No socio",
      guestsLabel: "Invitados externos",
      noGuests: "Sin invitados",
      oneGuest: "1 invitado",
      submit: "Consultar disponibilidad",
      rules: {
        noDate: "Elegí un día para consultar disponibilidad.",
        openWednesday: "Miércoles de golf abierto: pueden reservar socios y no socios.",
        memberOnlyWeekdays:
          "Los martes, jueves y viernes sólo pueden reservar socios. Los no socios pueden reservar los miércoles.",
        maxOneGuest: "Los martes, jueves y viernes cada socio puede invitar como máximo a 1 invitado.",
        weekdayOk: "Día habilitado para socios. Podés sumar como máximo 1 invitado.",
        weekendMembersOnly: "Los sábados y domingos sólo pueden reservar socios.",
        weekendNoGuests: "Los sábados y domingos no se permiten invitados externos.",
        weekendOk: "Día habilitado para socios, sin invitados externos.",
        unavailable:
          "Ese día no está habilitado para reservas. Elegí miércoles, o martes, jueves, viernes, sábado o domingo si sos socio."
      }
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
      demoEmail: "socio@olivos.test",
      demoPassword: "olivos",
      demoName: "Socio OGC",
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
        "Olivos Golf Club mantiene vínculos de reciprocidad con clubes de Argentina y del exterior. Para utilizar este beneficio, se recomienda consultar previamente con Secretaría las condiciones vigentes.",
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
    policies: {
      kicker: "Condiciones",
      title: "Reglas importantes",
      intro: "Condiciones generales para visitantes y jugadores.",
      items: [
        {
          title: "Fines de semana",
          body:
            "La página original indica juego únicamente acompañado por un socio y sin jugar torneo. Validar si la política sigue vigente.",
          icon: "A"
        },
        {
          title: "Devolución de green fee",
          body:
            "Una vez iniciado el juego, si se suspende por cualquier motivo, el importe cobrado no tiene devolución según el texto original.",
          icon: "B"
        },
        {
          title: "Vestuarios",
          body:
            "Caballeros: 07:00 a 20:00. Damas: 08:00 a 18:00. Conviene confirmar horarios actuales y servicios disponibles.",
          icon: "C"
        }
      ]
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
      attentionTitle: "Office hours",
      accessTitle: "Main access",
      accessIntro: "Explore club information, bookings or the members area.",
      cardsAria: "Main access",
      cards: [
        { title: "Club history", body: "Institutional information and tradition.", href: "/historia-club" },
        { title: "Book a tee time", body: "Choose your day and time.", href: "/reservaciones" },
        { title: "Members access", body: "Private access for members.", href: "/socios" }
      ]
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
        "An emblematic hole at the club: it demands power from the tee, precision over the water and a clear decision between securing par or chasing the reward.",
      featureAlt: "Hole 15 at Olivos Golf Club",
      routeCards: [
        { name: "Blanca", description: "One of the club's main layouts, demanding and traditional." },
        { name: "Colorada", description: "A strategic layout, with holes of strong competitive value." },
        { name: "Azul", description: "A complementary alternative within the club's 27 holes." }
      ],
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
    booking: {
      phoneDisplay: "(5411) 4587-1076 ext. 112 / 101 / 102",
      phoneHref: "tel:+541145871076",
      hours: "Tuesday to Saturday, 8:00 AM to 4:30 PM.",
      note: "Sunday: secretary's office closed. Please confirm availability and reciprocity before visiting."
    },
    reservationsPage: {
      eyebrow: "Bookings",
      title: "Book a tee time",
      intro: "Choose a day and time to check availability."
    },
    reservation: {
      intro: "Choose a day and time. The system automatically validates whether the booking is allowed for the player type.",
      times: ["08:00", "09:30", "11:00", "13:30", "15:00"],
      kicker: "Book a tee time",
      title: "Choose day and time.",
      summaryLabel: "Request prepared",
      dateLabel: "Day",
      timeLabel: "Time",
      statusLabel: "Status",
      memberLabel: "Member",
      nonMemberLabel: "Non-member",
      guestsLabel: "External guests",
      noGuests: "No guests",
      oneGuest: "1 guest",
      submit: "Check availability",
      rules: {
        noDate: "Choose a day to check availability.",
        openWednesday: "Wednesday is open golf: members and non-members may book.",
        memberOnlyWeekdays: "Tuesday, Thursday and Friday are members-only. Non-members may book on Wednesdays.",
        maxOneGuest: "On Tuesday, Thursday and Friday, each member may invite up to 1 guest.",
        weekdayOk: "Day available for members. You may add up to 1 guest.",
        weekendMembersOnly: "Saturday and Sunday bookings are members-only.",
        weekendNoGuests: "External guests are not allowed on Saturdays and Sundays.",
        weekendOk: "Day available for members, with no external guests.",
        unavailable:
          "That day is not available for bookings. Choose Wednesday, or Tuesday, Thursday, Friday, Saturday or Sunday if you are a member."
      }
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
      demoEmail: "socio@olivos.test",
      demoPassword: "olivos",
      demoName: "OGC Member",
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
    policies: {
      kicker: "Conditions",
      title: "Important rules",
      intro: "General conditions for visitors and players.",
      items: [
        {
          title: "Weekends",
          body:
            "The original site states that play is allowed only when accompanied by a member and not while playing a tournament. Please confirm whether this policy is still current.",
          icon: "A"
        },
        {
          title: "Green fee refunds",
          body:
            "Once play has started, if it is suspended for any reason, the amount charged is not refundable according to the original text.",
          icon: "B"
        },
        {
          title: "Locker rooms",
          body:
            "Men: 07:00 to 20:00. Ladies: 08:00 to 18:00. We recommend confirming current hours and available services.",
          icon: "C"
        }
      ]
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
    }
  };
}
