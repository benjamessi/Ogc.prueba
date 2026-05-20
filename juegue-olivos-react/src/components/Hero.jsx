export function Hero({ club, booking }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div
        className="hero-media"
        role="img"
        aria-label="Vista de la cancha del Olivos Golf Club"
        style={{ "--hero-image": `url(${club.heroImage})` }}
      />
      <div className="hero-copy">
        <p className="eyebrow">Golf para visitantes</p>
        <h1 id="hero-title">Juegue una vuelta en una cancha histórica.</h1>
        <p className="lead">
          Consulte disponibilidad, requisitos de handicap y condiciones para jugar en el Olivos Golf Club. La
          experiencia pública queda clara; el área de socios suma inicio de sesión y contenido exclusivo.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#/info-club">
            Información del club
          </a>
          <a className="button secondary" href="#/reservaciones">
            Reservar horario
          </a>
        </div>
      </div>
      <aside className="booking-card" aria-label="Datos rápidos para reservas">
        <span className="status-pill">Secretaría</span>
        <h2>Reservas y disponibilidad</h2>
        <p>{booking.phoneDisplay}</p>
        <p>{booking.hours}</p>
        <p className="note">{booking.note}</p>
      </aside>
    </section>
  );
}
