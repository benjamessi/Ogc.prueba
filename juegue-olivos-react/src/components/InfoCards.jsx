export function InfoCards({ clubInfo }) {
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
    </section>
  );
}
