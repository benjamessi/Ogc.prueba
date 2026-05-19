export function Policies({ items }) {
  return (
    <section className="section" id="condiciones" aria-labelledby="condiciones-title">
      <div className="section-heading centered">
        <div className="section-kicker">Condiciones</div>
        <h2 id="condiciones-title">Reglas importantes sin letra chica escondida</h2>
        <p>
          Las políticas operativas conviene mostrarlas cerca de la reserva, no enterradas al final de una página larga.
        </p>
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
