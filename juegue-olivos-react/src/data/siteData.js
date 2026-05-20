export const siteData = {
  club: {
    name: "Olivos Golf Club",
    location: "Buenos Aires, Argentina",
    heroImage:
      "https://olivosgolf.cc/wp/wp-content/uploads/2010/06/encabezado-cartel-OGC-2.jpg"
  },
  navigation: [
    { label: "Home", href: "#/" },
    { label: "Info del club", href: "#/info-club" },
    { label: "Reservar horario", href: "#/reservaciones", featured: true },
    { label: "Tarifas", href: "#/tarifas" },
    { label: "Socios", href: "#/socios" },
    { label: "Contacto", href: "#/contacto" }
  ],
  clubInfo: [
    {
      title: "27 hoyos",
      body: "La cancha cuenta con 27 hoyos distribuidos en tres recorridos.",
      metric: "27 hoyos"
    },
    {
      title: "Azul, Roja y Blanca",
      body: "Tres recorridos con características propias para distintas experiencias de juego.",
      metric: "Azul · Roja · Blanca"
    },
    {
      title: "Atención",
      body: "La secretaría informa disponibilidad, horarios y condiciones para jugar.",
      metric: "8:00 a 16:30"
    }
  ],
  booking: {
    phoneDisplay: "(5411) 4587-1076 int. 112 / 101 / 102",
    phoneHref: "tel:+541145871076",
    hours: "Martes a sábado, 8:00 a 16:30.",
    note: "Domingo: secretaría cerrada. Validar disponibilidad y reciprocidad antes de acercarse."
  },
  visitors: [
    {
      title: "Disponibilidad primero",
      body: "La reserva es el primer paso: día, horario, modalidad, cupos y condiciones según categoría.",
      icon: "01"
    },
    {
      title: "Handicap y requisitos",
      body: "La experiencia separa visitantes extranjeros, jugadores con handicap nacional, menores y acompañados por socios.",
      icon: "02"
    },
    {
      title: "Reciprocidad visible",
      body: "Los convenios con otros clubes tienen un lugar propio para que nadie tenga que buscarlos en un párrafo escondido.",
      icon: "03"
    }
  ],
  rates: {
    alert: "Importes de referencia tomados de la página vieja. Reemplazar por valores vigentes antes de publicar.",
    rows: [
      {
        group: "Visitas extranjeras",
        detail: "Green fee martes a viernes",
        price: "USD 120"
      },
      {
        group: "Visitas extranjeras",
        detail: "Sábados, domingos y feriados",
        price: "USD 150"
      },
      {
        group: "Caballeros con handicap nacional",
        detail: "Martes a viernes, con variantes por organizador o mid-week",
        price: "Actualizar"
      },
      {
        group: "Damas y menores de 18 años",
        detail: "Martes a viernes, con variantes por organizador o mid-week",
        price: "Actualizar"
      },
      {
        group: "Driving range",
        detail: "Balde de 25 pelotas",
        price: "Actualizar"
      }
    ]
  },
  policies: [
    {
      title: "Fines de semana",
      body: "La página original indica juego únicamente acompañado por un socio y sin jugar torneo. Validar si la política sigue vigente.",
      icon: "A"
    },
    {
      title: "Devolución de green fee",
      body: "Una vez iniciado el juego, si se suspende por cualquier motivo, el importe cobrado no tiene devolución según el texto original.",
      icon: "B"
    },
    {
      title: "Vestuarios",
      body: "Caballeros: 07:00 a 20:00. Damas: 08:00 a 18:00. Conviene confirmar horarios actuales y servicios disponibles.",
      icon: "C"
    }
  ],
  reservation: {
    intro:
      "Elegí una cancha y dejá preparada la consulta. En producción este módulo se conecta al sistema de turnos o a secretaría.",
    courses: [
      {
        id: "azul",
        name: "Cancha Azul",
        tone: "Clásica y competitiva",
        description: "Ideal para una vuelta desafiante, con prioridad para jugadores que buscan ritmo de campeonato."
      },
      {
        id: "roja",
        name: "Cancha Roja",
        tone: "Técnica y estratégica",
        description: "Pensada para quienes prefieren precisión, buena lectura de fairways y un juego más táctico."
      },
      {
        id: "blanca",
        name: "Cancha Blanca",
        tone: "Ágil y social",
        description: "Una opción más liviana para combinar disponibilidad, práctica y encuentros entre socios o invitados."
      }
    ],
    times: ["08:00", "09:30", "11:00", "13:30", "15:00"]
  },
  gallery: [
    {
      src: "https://olivosgolf.cc/wp/wp-content/gallery/welcome/thumbs/thumbs_hoyo-1-salida.jpg",
      alt: "Salida del hoyo 1"
    },
    {
      src: "https://olivosgolf.cc/wp/wp-content/gallery/welcome/thumbs/thumbs_dpp07da05040c2307.jpg",
      alt: "Vista de fairway del Olivos Golf Club"
    },
    {
      src: "https://olivosgolf.cc/wp/wp-content/gallery/welcome/thumbs/thumbs_dpp07da05040c2423.jpg",
      alt: "Paisaje de la cancha"
    }
  ],
  memberArea: {
    demoEmail: "socio@olivos.test",
    demoPassword: "olivos",
    cards: [
      {
        title: "Reservas internas",
        body: "Acceso rápido a turnos, condiciones del día y avisos de secretaría."
      },
      {
        title: "Torneos y resultados",
        body: "Espacio preparado para fixtures, resultados y comunicaciones deportivas."
      },
      {
        title: "Beneficios y reciprocidad",
        body: "Convenios vigentes, datos útiles y novedades exclusivas para socios."
      }
    ]
  }
};
