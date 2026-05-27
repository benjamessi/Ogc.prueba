export function Rates({ rates, booking }) {
  return (
    <section className="section rates-section" id="tarifas" aria-labelledby="tarifas-title">
      <div className="section-heading">
        <div>
          <div className="section-kicker">{rates.sectionKicker}</div>
          <h2 id="tarifas-title">{rates.title}</h2>
        </div>
        <p>{rates.alert}</p>
      </div>

      <div className="rate-board" aria-label={rates.boardAria}>
        <div className="rate-row rate-row-head" aria-hidden="true">
          <span>{rates.labels.category}</span>
          <span>{rates.labels.days}</span>
          <span>{rates.labels.price}</span>
          <span>{rates.labels.notes}</span>
        </div>
        {rates.rows.map((row) => (
          <article className="rate-row" key={`${row.category}-${row.days}`}>
            <div>
              <span>{rates.labels.category}</span>
              <strong>{row.category}</strong>
            </div>
            <div>
              <span>{rates.labels.days}</span>
              <p>{row.days}</p>
            </div>
            <div>
              <span>{rates.labels.price}</span>
              <b>{row.price}</b>
            </div>
            <div>
              <span>{rates.labels.notes}</span>
              <p>{row.notes}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="rates-cta">
        <p>{rates.ctaText}</p>
        <a className="button primary" href={booking.phoneHref}>
          {rates.ctaButton}
        </a>
      </div>
    </section>
  );
}
