import { Link } from "react-router-dom";

const homeCards = [
  {
    title: "Información del club",
    body: "Historia, recorridos y ubicación.",
    href: "/info-club"
  },
  {
    title: "Reservar horario",
    body: "Elegí día, hora y cancha.",
    href: "/reservaciones"
  },
  {
    title: "Acceso socios",
    body: "Ingreso privado para socios.",
    href: "/socios"
  }
];

export function HomePage({ siteData }) {
  const { club, booking } = siteData;

  return (
    <section className="home-screen" aria-labelledby="home-title">
      <div
        className="home-screen-media"
        role="img"
        aria-label="Cancha del Olivos Golf Club"
        style={{ "--home-image": `url(${club.heroImage})` }}
      />
      <div className="home-screen-content">
        <div className="home-logo-card">
          <img src={club.logo} alt="" />
          <p>Olivos Golf Club</p>
        </div>

        <div className="home-main-copy">
          <p className="eyebrow">Golf en Buenos Aires</p>
          <h1 id="home-title">Juegue en el Olivos</h1>
          <p>
            Una cancha histórica, tres recorridos y una experiencia de golf reconocida en la Argentina.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/reservaciones">
              Reservar horario
            </Link>
            <Link className="button secondary" to="/info-club">
              Información del club
            </Link>
          </div>
        </div>

        <aside className="home-availability" aria-label="Información de secretaría">
          <span className="status-pill">Secretaría</span>
          <h2>Atención</h2>
          <p>{booking.hours}</p>
          <p>{booking.phoneDisplay}</p>
        </aside>
      </div>

      <div className="home-card-strip" aria-label="Accesos principales">
        {homeCards.map((card) => (
          <Link className="home-action-card" to={card.href} key={card.title}>
            <span>{card.title}</span>
            <p>{card.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
