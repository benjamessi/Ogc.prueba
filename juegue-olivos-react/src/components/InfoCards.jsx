export function InfoCards({ clubInfo, visitorInfo }) {
  return (
    <section className="section compact" id="club-info" aria-labelledby="club-info-title">
      <h2 className="visually-hidden" id="club-info-title">
        Información del club
      </h2>
      <div className="info-grid">
        {clubInfo.map((item) => (
          <article className="info-card highlight" key={item.title}>
            <span aria-hidden="true">{item.metric}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>

      <div className="section-subheading" id="visitantes">
        <div className="section-kicker">Antes de venir</div>
        <h2>Información clara para visitantes</h2>
      </div>
      <div className="info-grid">
        {visitorInfo.map((item) => (
          <article className="info-card" key={item.title}>
            <span aria-hidden="true">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
