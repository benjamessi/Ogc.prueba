import { Link } from "react-router-dom";

const homeCards = [
  {
    title: "Historia del club",
    body: "Información institucional y tradición.",
    href: "/historia-club"
  },
  {
    title: "Reservar horario",
    body: "Elegí día y hora.",
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
    <>
      <section className="home-screen" aria-labelledby="home-title">
        <div className="home-main-copy">
          <div className="home-logo-card">
            <img src={club.logo} alt="" />
            <p>Olivos Golf Club</p>
          </div>
          <p className="eyebrow">Golf en Buenos Aires</p>
          <h1 id="home-title">Juegue en el Olivos</h1>
          <p>
            Una cancha histórica, tres recorridos y una experiencia de golf reconocida en la Argentina.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/reservaciones">
              Reservar horario
            </Link>
            <Link className="button secondary light" to="/historia-club">
              Historia del club
            </Link>
          </div>
        </div>

        <div className="home-photo-panel">
          <img src={club.heroImage} alt="Cancha del Olivos Golf Club" />
          <aside className="home-availability" aria-label="Información de secretaría">
            <span className="status-pill">Secretaría</span>
            <h2>Atención</h2>
            <p>{booking.hours}</p>
            <p>{booking.phoneDisplay}</p>
          </aside>
        </div>
      </section>

      <section className="section home-access-section" aria-labelledby="home-access-title">
        <div className="section-heading">
          <h2 id="home-access-title">Accesos principales</h2>
          <p>Ingresá a la información del club, reservas o área de socios.</p>
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
    </>
  );
}
