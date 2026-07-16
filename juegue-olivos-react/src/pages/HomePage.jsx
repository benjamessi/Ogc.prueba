import { useRef } from "react";
import { Link } from "react-router-dom";

const STAT_ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true
};

const STAT_ICONS = {
  building: (
    <svg {...STAT_ICON_PROPS}>
      <path d="M3.5 21.5h17" />
      <path d="M6 18.5v-7.5" />
      <path d="M10 18.5v-7.5" />
      <path d="M14 18.5v-7.5" />
      <path d="M18 18.5v-7.5" />
      <path d="M12 2.5l8.5 5.5h-17L12 2.5Z" />
    </svg>
  ),
  flag: (
    <svg {...STAT_ICON_PROPS}>
      <path d="M7 21V3.5" />
      <path d="M7 4.5l9.5 2.6L7 9.8" />
      <path d="M4.5 21h5" />
    </svg>
  ),
  trophy: (
    <svg {...STAT_ICON_PROPS}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  ),
  routes: (
    <svg {...STAT_ICON_PROPS}>
      <path d="M5 3.5c1 8 7 9.5 7 17.5" />
      <path d="M12 3.5V21" />
      <path d="M19 3.5c-1 8-7 9.5-7 17.5" />
    </svg>
  )
};
import homeCoverImage from "../assets/olivos-cancha-hero.jpg";
import holeFifteenImage from "../assets/hoyo-15.jpeg";
import historyFlagImage from "../assets/bandera-olivos.jpg";
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
            <span>100 AÑOS</span>
            <span>1926 — 2026</span>
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

      <section className="section home-stats" aria-label={home.stats.aria}>
        <ul data-reveal-group>
          {home.stats.items.map((stat) => (
            <li className="home-stat" key={stat.label}>
              <span className="stat-icon">{STAT_ICONS[stat.icon]}</span>
              <strong>
                {stat.prefix ? <span className="stat-prefix">{stat.prefix}</span> : null}
                <span data-count={stat.value} data-count-from={stat.from}>
                  {stat.value}
                </span>
              </strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
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
              <span className="route-dot" aria-hidden="true" />
              <h3>{route.name}</h3>
              <p>{route.description}</p>
              <span className="route-arrow" aria-hidden="true">
                →
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
