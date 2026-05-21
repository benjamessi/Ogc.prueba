export function Rates({ rates, booking }) {
  return (
    <section className="section rates-section" id="tarifas" aria-labelledby="tarifas-title">
      <div className="section-heading">
        <div>
          <div className="section-kicker">Valores</div>
          <h2 id="tarifas-title">Green fees</h2>
        </div>
        <p>{rates.alert}</p>
      </div>

      <div className="rate-board" aria-label="Green fees">
        <div className="rate-row rate-row-head" aria-hidden="true">
          <span>Categoría</span>
          <span>Días disponibles</span>
          <span>Valor</span>
          <span>Observaciones</span>
        </div>
        {rates.rows.map((row) => (
          <article className="rate-row" key={`${row.category}-${row.days}`}>
            <div>
              <span>Categoría</span>
              <strong>{row.category}</strong>
            </div>
            <div>
              <span>Días disponibles</span>
              <p>{row.days}</p>
            </div>
            <div>
              <span>Valor</span>
              <b>{row.price}</b>
            </div>
            <div>
              <span>Observaciones</span>
              <p>{row.notes}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="rates-cta">
        <p>Para confirmar valores vigentes y disponibilidad, comunicate con Secretaría.</p>
        <a className="button primary" href={booking.phoneHref}>
          Contactar Secretaría
        </a>
      </div>
    </section>
  );
}
