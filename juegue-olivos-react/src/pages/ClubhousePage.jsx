export function ClubhousePage({ club, clubhouse }) {
  const encodedAddress = encodeURIComponent(club.address);

  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Club</p>
          <h1>Clubhouse</h1>
        </div>
        <p>{clubhouse.hours}</p>
      </section>

      <section className="section clubhouse-section" aria-labelledby="clubhouse-title">
        <div className="clubhouse-card">
          <figure className="clubhouse-photo">
            <img src={clubhouse.image} alt="Clubhouse del Olivos Golf Club" />
          </figure>
          <div className="clubhouse-copy">
            <div className="section-kicker">Horarios</div>
            <h2 id="clubhouse-title">Martes a domingos</h2>
            <p>{clubhouse.hours}</p>
          </div>
        </div>
      </section>

      <section className="section location-section" aria-labelledby="clubhouse-location-title">
        <div className="location-card">
          <div className="location-copy">
            <p className="section-kicker">Ubicación</p>
            <h2 id="clubhouse-location-title">Olivos Golf Club</h2>
            <p>{club.address}</p>
            <a
              className="button primary"
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target="_blank"
              rel="noreferrer"
            >
              Abrir en Google Maps
            </a>
          </div>
          <iframe
            className="map-frame"
            title="Mapa de ubicación de Olivos Golf Club"
            src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
