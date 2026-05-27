export function ClubhousePage({ club, clubhouse }) {
  const encodedMapQuery = encodeURIComponent(club.mapQuery ?? club.address);

  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Club</p>
          <h1>Clubhouse</h1>
        </div>
        <p>
          Un espacio de encuentro para socios, visitantes e invitados, con salones, gastronomía y vistas al entorno del
          club.
        </p>
      </section>

      <section className="section clubhouse-section" aria-labelledby="clubhouse-title">
        <div className="clubhouse-card">
          <figure className="clubhouse-photo">
            <img src={clubhouse.image} alt="Salones del clubhouse del Olivos Golf Club" />
          </figure>
          <div className="clubhouse-copy">
            <div className="section-kicker">Clubhouse</div>
            <h2 id="clubhouse-title">Salones</h2>
            <p>{clubhouse.hours}</p>
            <p>
              El club cuenta con tres salones para eventos sociales y corporativos, con capacidad máxima de hasta 500
              personas y estacionamiento para invitados.
            </p>
          </div>
        </div>
        <div className="clubhouse-service-card">
          <p className="section-kicker">Gastronomía</p>
          <h2>Gastronomía</h2>
          <p>Servicio gastronómico para socios, eventos, reuniones y torneos.</p>
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
              href={`https://www.google.com/maps/search/?api=1&query=${encodedMapQuery}`}
              target="_blank"
              rel="noreferrer"
            >
              Abrir en Google Maps
            </a>
          </div>
          <iframe
            className="map-frame"
            title="Mapa de ubicación de Olivos Golf Club"
            src={`https://www.google.com/maps?q=${encodedMapQuery}&z=15&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
