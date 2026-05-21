import homeHeroImage from "../assets/olivos-home.jpg";
import clubLogo from "../assets/logo-ogc.png";
import courseMapImage from "../assets/cancha-plano.jpg";
import holeFifteenImage from "../assets/hoyo-15.jpeg";
import clubhouseImage from "../assets/encabezado-salones.jpg";

export const siteData = {
  club: {
    name: "Olivos Golf Club",
    location: "Buenos Aires, Argentina",
    address: "Ruta Panamericana Km 32, Acceso Norte Ramal Pilar, B1613, Provincia de Buenos Aires",
    logo: clubLogo,
    heroImage: homeHeroImage
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
  clubhouse: {
    image: clubhouseImage,
    hours: "Abierto de martes a domingos de 8 AM a 12 AM."
  },
  course: {
    map: courseMapImage,
    holeFifteenImage,
    routes: ["Roja", "Azul", "Blanca"],
    feature:
      "El hoyo 15, un par 5 de 470 yardas, es uno de los más emblemáticos de la cancha y fue reconocido por Golf Digest entre los mejores hoyos de golf del mundo. Se trata de un dogleg a la derecha que, para los aficionados, se juega como par 5, aunque en torneos profesionales suele disputarse como par 4. Su diseño exige precisión y potencia desde el tee: un drive de al menos 260 yardas deja abierta la posibilidad de alcanzar el green en dos golpes. El segundo tiro es el verdadero desafío. Son aproximadamente 200 yardas sobre el agua hacia un green pequeño, rápido y bien defendido por bunkers. Es un hoyo que resume perfectamente el espíritu de riesgo y recompensa: agresividad para buscar el premio, pero con muy poco margen de error.",
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
      "Elegí día y horario. El sistema valida automáticamente si la reserva está permitida según la condición del jugador.",
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
