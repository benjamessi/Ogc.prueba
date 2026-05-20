export function Rates({ rates }) {
  return (
    <section className="section split" id="tarifas" aria-labelledby="tarifas-title">
      <div>
        <div className="section-kicker">Valores</div>
        <h2 id="tarifas-title">Green fees</h2>
        <p>Valores de referencia para visitantes. Confirmar importes vigentes antes de publicar.</p>
        <a className="text-link" href="#editar">
          Editar valores
        </a>
      </div>
      <div className="rate-board" aria-label="Tarifas">
        <div className="rate-alert">{rates.alert}</div>
        {rates.rows.map((row) => (
          <article className="rate-row" key={`${row.group}-${row.detail}`}>
            <div>
              <strong>{row.group}</strong>
              <p>{row.detail}</p>
            </div>
            <b>{row.price}</b>
          </article>
        ))}
      </div>
    </section>
  );
}
