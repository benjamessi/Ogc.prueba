import { Link } from "react-router-dom";
import homeCoverImage from "../assets/olivos-cancha-hero.jpg";

export function HomePage({ siteData }) {
  const { club, booking, home } = siteData;

  return (
    <>
      <section className="home-cover" aria-labelledby="home-cover-title">
        <img src={homeCoverImage} alt={home.coverAlt} />
        <div className="home-cover-title">
          <p className="eyebrow">est. 1926</p>
          <h1 id="home-cover-title" data-reflection="Olivos Golf Club">
            Olivos Golf Club
          </h1>
        </div>
      </section>

      <section className="home-screen" aria-labelledby="home-title">
        <div className="home-main-copy">
          <div className="home-logo-card">
            <img src={club.logo} alt="" />
            <p>Olivos Golf Club</p>
          </div>
          <p className="eyebrow">{home.eyebrow}</p>
          <h1 id="home-title">{home.title}</h1>
          <p>{home.intro}</p>
          <div className="hero-actions">
            <Link className="button primary" to="/reservaciones">
              {home.reserveCta}
            </Link>
            <Link className="button secondary light" to="/historia-club">
              {home.historyCta}
            </Link>
          </div>
        </div>

        <div className="home-photo-panel">
          <img src={club.heroImage} alt={home.heroAlt} />
          <aside className="home-availability" aria-label={home.secretaryAria}>
            <span className="status-pill">{home.secretaryLabel}</span>
            <h2>{home.attentionTitle}</h2>
            <p>{booking.hours}</p>
            <p>{booking.phoneDisplay}</p>
          </aside>
        </div>
      </section>

      <section className="section home-access-section" aria-labelledby="home-access-title">
        <div className="section-heading">
          <h2 id="home-access-title">{home.accessTitle}</h2>
          <p>{home.accessIntro}</p>
        </div>
        <div className="home-card-strip" aria-label={home.cardsAria}>
          {home.cards.map((card) => (
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
