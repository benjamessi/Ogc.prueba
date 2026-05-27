export function ClubhousePage({ club, clubhouse }) {
  const encodedMapQuery = encodeURIComponent(club.mapQuery ?? club.address);

  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">{clubhouse.heroEyebrow}</p>
          <h1>{clubhouse.title}</h1>
        </div>
        <p>{clubhouse.intro}</p>
      </section>

      <section className="section clubhouse-section" aria-labelledby="clubhouse-title">
        <div className="clubhouse-card">
          <figure className="clubhouse-photo">
            <img src={clubhouse.image} alt={clubhouse.imageAlt} />
          </figure>
          <div className="clubhouse-copy">
            <div className="section-kicker">{clubhouse.kicker}</div>
            <h2 id="clubhouse-title">{clubhouse.salonsTitle}</h2>
            <p>{clubhouse.hours}</p>
            <p>{clubhouse.salonsText}</p>
          </div>
        </div>
        <div className="clubhouse-service-card">
          <p className="section-kicker">{clubhouse.gastronomyKicker}</p>
          <h2>{clubhouse.gastronomyTitle}</h2>
          <p>{clubhouse.gastronomyText}</p>
        </div>
      </section>

      <section className="section location-section" aria-labelledby="clubhouse-location-title">
        <div className="location-card">
          <div className="location-copy">
            <p className="section-kicker">{clubhouse.locationKicker}</p>
            <h2 id="clubhouse-location-title">{clubhouse.locationTitle}</h2>
            <p>{club.address}</p>
            <a
              className="button primary"
              href={`https://www.google.com/maps/search/?api=1&query=${encodedMapQuery}`}
              target="_blank"
              rel="noreferrer"
            >
              {clubhouse.mapButton}
            </a>
          </div>
          <iframe
            className="map-frame"
            title={clubhouse.mapTitle}
            src={`https://www.google.com/maps?q=${encodedMapQuery}&z=15&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
