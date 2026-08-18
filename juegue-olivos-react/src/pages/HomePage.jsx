import { useRef } from "react";
import { Link } from "react-router-dom";

import homeCoverImage from "../assets/olivos-cancha-hero.jpg";
import holeFifteenImage from "../assets/hoyo-15.jpeg";
import historyFlagImage from "../assets/bandera-olivos.jpg";
import routeBlancaImage from "../assets/recorrido-blanca.jpg";
import routeColoradaImage from "../assets/recorrido-colorada.jpg";
import routeAzulImage from "../assets/recorrido-azul.jpg";

const ROUTE_PHOTOS = {
  blanca: routeBlancaImage,
  colorada: routeColoradaImage,
  azul: routeAzulImage
};
import { useHomeAnimations } from "../hooks/useHomeAnimations.js";

export function HomePage({ siteData }) {
  const { club, booking, home, sponsors, sponsorsSection } = siteData;
  const pageRef = useRef(null);

  useHomeAnimations(pageRef);

  return (
    <div ref={pageRef}>
      <section className="home-cover" aria-labelledby="home-cover-title">
        <img src={homeCoverImage} alt={home.coverAlt} />
        <div className="home-cover-title">
          <p className="centenary-badge" aria-label="100 años, 1926 a 2026">
            <span className="centenary-title">100 años</span>
            <span className="centenary-years">1926 — 2026</span>
          </p>
          <h1 id="home-cover-title" data-reflection="Olivos Golf Club">
            Olivos Golf Club
          </h1>
        </div>
        <span className="home-cover-cue" aria-hidden="true" />
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
            <Link className="button primary" to="/contacto">
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

      <section className="section home-course-teaser" aria-labelledby="home-course-title">
        <div className="section-heading" data-reveal>
          <div>
            <p className="section-kicker">{home.courseTeaser.kicker}</p>
            <h2 id="home-course-title">{home.courseTeaser.title}</h2>
          </div>
          <p>{home.courseTeaser.text}</p>
        </div>
        <div className="home-routes-grid" data-reveal-group>
          {home.courseTeaser.routes.map((route) => (
            <Link className={`home-route-card route-${route.slug}`} to="/cancha" key={route.name}>
              <img className="route-photo" src={ROUTE_PHOTOS[route.slug]} alt="" loading="lazy" />
              <span className="route-dot" aria-hidden="true" />
              {/* El panel sube al hover: en reposo asoma sólo la franja del nombre */}
              <span className="route-panel">
                <span className="route-name">{route.name}</span>
                <span className="route-text">{route.description}</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="home-teaser-cta" data-reveal>
          <Link className="text-cta" to="/cancha">
            {home.courseTeaser.cta}
          </Link>
        </div>
      </section>

      <section className="section home-feature" aria-labelledby="home-feature-title">
        <article className="home-feature-card" data-reveal>
          <div className="home-feature-copy">
            <p className="section-kicker">{home.holeFeature.kicker}</p>
            <h2 id="home-feature-title">{home.holeFeature.title}</h2>
            <div className="course-feature-stats">
              {home.holeFeature.stats.map((stat) => (
                <span key={stat}>{stat}</span>
              ))}
            </div>
            <p>{home.holeFeature.text}</p>
            <div className="hero-actions">
              <Link className="button secondary light" to="/cancha">
                {home.holeFeature.cta}
              </Link>
            </div>
          </div>
          <figure className="home-feature-photo">
            <img src={holeFifteenImage} alt={home.holeFeature.imageAlt} loading="lazy" />
          </figure>
        </article>
      </section>

      <section className="section home-history-teaser" aria-labelledby="home-history-title">
        <article className="home-history-card" data-reveal>
          <figure className="home-history-photo">
            <img src={historyFlagImage} alt={home.historyTeaser.imageAlt} loading="lazy" />
          </figure>
          <div className="home-history-copy">
            <p className="section-kicker">{home.historyTeaser.kicker}</p>
            <h2 id="home-history-title">{home.historyTeaser.title}</h2>
            <p>{home.historyTeaser.text}</p>
            <div className="hero-actions">
              <Link className="button on-dark" to="/historia-club">
                {home.historyTeaser.cta}
              </Link>
            </div>
          </div>
        </article>
      </section>

      <section className="section home-sponsors-section" aria-labelledby="home-sponsors-title">
        <div className="section-heading" data-reveal>
          <div>
            <p className="section-kicker">{sponsorsSection.kicker}</p>
            <h2 id="home-sponsors-title">{sponsorsSection.title}</h2>
          </div>
          <p>{sponsorsSection.text}</p>
        </div>
        <div className="sponsor-grid" aria-label={sponsorsSection.aria} data-reveal-group>
          {sponsors.map((sponsor) => (
            <div className={`sponsor-card sponsor-${sponsor.slug}`} key={sponsor.name}>
              <img src={sponsor.homeLogo} alt={sponsor.name} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
