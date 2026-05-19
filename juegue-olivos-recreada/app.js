const pageData = {
  booking: {
    phoneDisplay: "(5411) 4587-1076 int. 112 / 101 / 102",
    phoneHref: "tel:+541145871076",
    hours: "Martes a sábado, 8:00 a 16:30.",
    note: "Domingo: secretaría cerrada. Validar disponibilidad y reciprocidad antes de acercarse."
  },
  visitors: [
    {
      title: "Disponibilidad primero",
      body: "La reserva debería ser el primer paso. El visitante necesita confirmar día, horario, modalidad y si hay cupos antes de planificar el viaje.",
      icon: "01"
    },
    {
      title: "Handicap y requisitos",
      body: "Separar visitantes extranjeros, jugadores con handicap nacional, damas, menores y acompañados por socios evita confusiones en recepción.",
      icon: "02"
    },
    {
      title: "Reciprocidad visible",
      body: "La consulta sobre convenios con otros clubes merece un acceso directo, no un enlace perdido dentro de un párrafo.",
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
  ]
};

const qs = (selector) => document.querySelector(selector);

function renderBooking() {
  qs("#booking-phone").textContent = pageData.booking.phoneDisplay;
  qs("#booking-hours").textContent = pageData.booking.hours;
  qs("#booking-note").textContent = pageData.booking.note;
  qs("#contact-phone").textContent = pageData.booking.phoneDisplay;
  qs("#contact-phone").href = pageData.booking.phoneHref;
  qs("#contact-hours").textContent = pageData.booking.hours;
  qs("#contact-cta").href = pageData.booking.phoneHref;
}

function renderCards() {
  qs("#visitor-cards").innerHTML = pageData.visitors
    .map(
      (item) => `
        <article class="info-card">
          <span aria-hidden="true">${item.icon}</span>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");

  qs("#policy-grid").innerHTML = pageData.policies
    .map(
      (item) => `
        <article class="policy-card">
          <span aria-hidden="true">${item.icon}</span>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function renderRates() {
  qs("#rate-board").innerHTML = `
    <div class="rate-alert">${pageData.rates.alert}</div>
    ${pageData.rates.rows
      .map(
        (row) => `
          <article class="rate-row">
            <div>
              <strong>${row.group}</strong>
              <p>${row.detail}</p>
            </div>
            <b>${row.price}</b>
          </article>
        `
      )
      .join("")}
  `;
}

function renderGallery() {
  qs("#gallery").innerHTML = pageData.gallery
    .map(
      (image) => `
        <figure>
          <img src="${image.src}" alt="${image.alt}" loading="lazy" />
        </figure>
      `
    )
    .join("");
}

function wireMenu() {
  const button = qs(".menu-button");
  const menu = qs("#menu");
  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
  });
}

renderBooking();
renderCards();
renderRates();
renderGallery();
wireMenu();
