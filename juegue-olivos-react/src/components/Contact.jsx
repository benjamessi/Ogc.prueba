export function Contact({ contact, booking, club }) {
  const encodedMapQuery = encodeURIComponent(club.mapQuery ?? club.address);

  return (
    <section className="section contact" id="contacto" aria-labelledby="contacto-title">
      <div className="contact-info">
        <div className="section-kicker">{contact.kicker}</div>
        <h2 id="contacto-title">{contact.title}</h2>
        <dl className="contact-list">
          <div>
            <dt>{contact.labels.hours}</dt>
            <dd>{booking.hours}</dd>
          </div>
          <div>
            <dt>{contact.labels.phone}</dt>
            <dd>
              <a href={booking.phoneHref}>(54 11) 4587-1076 int. 112 / 101 / 102</a>
            </dd>
          </div>
          <div>
            <dt>{contact.labels.email}</dt>
            <dd>
              <a href={`mailto:${club.email}`}>{club.email}</a>
            </dd>
          </div>
          <div>
            <dt>{contact.labels.address}</dt>
            <dd>{club.address}</dd>
          </div>
        </dl>
      </div>

      <div className="contact-panel">
        <div className="contact-card">
          <p className="contact-label">{contact.cardLabel}</p>
          <h3>{contact.cardTitle}</h3>
          <p>{contact.cardText}</p>
          <div className="contact-actions">
            <a className="button primary" href={booking.phoneHref}>
              {contact.callButton}
            </a>
            <a className="button secondary contact-button" href={`mailto:${club.email}`}>
              {contact.emailButton}
            </a>
            <a
              className="button secondary contact-button contact-map-button"
              href={`https://www.google.com/maps/search/?api=1&query=${encodedMapQuery}`}
              target="_blank"
              rel="noreferrer"
            >
              {contact.mapButton}
            </a>
          </div>
        </div>
        <iframe
          className="map-frame contact-map"
          title={contact.mapTitle}
          src={`https://www.google.com/maps?q=${encodedMapQuery}&z=15&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
