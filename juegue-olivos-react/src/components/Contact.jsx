export function Contact({ booking }) {
  return (
    <section className="section contact" id="contacto" aria-labelledby="contacto-title">
      <div>
        <div className="section-kicker">Contacto</div>
        <h2 id="contacto-title">Consultar disponibilidad</h2>
        <p>
          Este bloque puede conectarse a WhatsApp, formulario, integración con turnos o datos actualizados de secretaría.
        </p>
      </div>
      <div className="contact-card">
        <p className="contact-label">Teléfono</p>
        <a href={booking.phoneHref}>{booking.phoneDisplay}</a>
        <p className="contact-label">Atención</p>
        <p>{booking.hours}</p>
        <a className="button primary full" href={booking.phoneHref}>
          Llamar a secretaría
        </a>
      </div>
    </section>
  );
}
