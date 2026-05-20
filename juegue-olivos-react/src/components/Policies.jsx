export function Policies({ items }) {
  return (
    <section className="section" id="condiciones" aria-labelledby="condiciones-title">
      <div className="section-heading centered">
        <div className="section-kicker">Condiciones</div>
        <h2 id="condiciones-title">Reglas importantes</h2>
        <p>Condiciones generales para visitantes y jugadores.</p>
      </div>
      <div className="policy-grid">
        {items.map((item) => (
          <article className="policy-card" key={item.title}>
            <span aria-hidden="true">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
