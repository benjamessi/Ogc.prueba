export function InfoCards({ items }) {
  return (
    <section className="section compact" id="visitantes" aria-labelledby="visitantes-title">
      <div className="section-kicker">Antes de venir</div>
      <div className="section-heading">
        <h2 id="visitantes-title">Información clara para visitantes</h2>
        <p>
          La página original mezcla contacto, galería, tarifas antiguas y widgets laterales. Acá lo ordenamos en
          decisiones simples y bloques escaneables.
        </p>
      </div>
      <div className="info-grid">
        {items.map((item) => (
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
