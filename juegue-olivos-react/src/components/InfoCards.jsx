export function InfoCards({ clubInfo, id = "club-info", title = "Información del club" }) {
  return (
    <section className="section compact" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="visually-hidden" id={`${id}-title`}>
        {title}
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
