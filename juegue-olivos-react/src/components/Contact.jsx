export function Contact({ booking, club }) {
  const encodedMapQuery = encodeURIComponent(club.mapQuery ?? club.address);

  return (
    <section className="section contact" id="contacto" aria-labelledby="contacto-title">
      <div className="contact-info">
        <div className="section-kicker">Secretaría</div>
        <h2 id="contacto-title">Consultar disponibilidad</h2>
        <dl className="contact-list">
          <div>
            <dt>Horarios de atención</dt>
            <dd>{booking.hours}</dd>
          </div>
          <div>
            <dt>Teléfono</dt>
            <dd>
              <a href={booking.phoneHref}>(54 11) 4587-1076 int. 112 / 101 / 102</a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${club.email}`}>{club.email}</a>
            </dd>
          </div>
          <div>
            <dt>Dirección</dt>
            <dd>{club.address}</dd>
          </div>
        </dl>
      </div>

      <div className="contact-panel">
        <div className="contact-card">
          <p className="contact-label">Contacto directo</p>
          <h3>Secretaría del club</h3>
          <p>Para confirmar horarios, disponibilidad, green fees, eventos o servicios, comunicate con Secretaría.</p>
          <div className="contact-actions">
            <a className="button primary" href={booking.phoneHref}>
              Llamar a Secretaría
            </a>
            <a className="button secondary contact-button" href={`mailto:${club.email}`}>
              Enviar email
            </a>
            <a
              className="button secondary contact-button contact-map-button"
              href={`https://www.google.com/maps/search/?api=1&query=${encodedMapQuery}`}
              target="_blank"
              rel="noreferrer"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
        <iframe
          className="map-frame contact-map"
          title="Mapa de ubicación de Olivos Golf Club"
          src={`https://www.google.com/maps?q=${encodedMapQuery}&z=15&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
