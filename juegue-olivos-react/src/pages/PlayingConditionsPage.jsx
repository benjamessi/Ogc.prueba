import { Link } from "react-router-dom";

function ConditionCard({ item, index }) {
  return (
    <article className="condition-card">
      <span className="condition-number" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3>{item.title}</h3>
        {item.text ? <p>{item.text}</p> : null}
        {item.list ? (
          <ul>
            {item.list.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        ) : null}
        {item.note ? <p className="condition-note">{item.note}</p> : null}
      </div>
    </article>
  );
}

export function PlayingConditionsPage({ conditions, booking }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">{conditions.heroEyebrow}</p>
          <h1>{conditions.title}</h1>
        </div>
        <p>{conditions.intro}</p>
      </section>

      <section className="section playing-conditions" aria-labelledby="playing-conditions-title">
        <h2 className="visually-hidden" id="playing-conditions-title">
          {conditions.title}
        </h2>
        {conditions.sections.map((section) => (
          <div className="condition-section" key={section.title}>
            <div className="condition-section-heading">
              <p className="section-kicker">{conditions.heroEyebrow}</p>
              <h2>{section.title}</h2>
              <p>{section.intro}</p>
            </div>
            <div className="condition-grid">
              {section.items.map((item, index) => (
                <ConditionCard item={item} index={index} key={item.title} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="section condition-final-cta" aria-labelledby="condition-cta-title">
        <div>
          <p className="section-kicker">{conditions.heroEyebrow}</p>
          <h2 id="condition-cta-title">{conditions.cta.title}</h2>
          <p>{conditions.cta.text}</p>
        </div>
        <div className="condition-cta-actions">
          <a className="button primary" href={booking.phoneHref}>
            {conditions.cta.contact}
          </a>
          <Link className="button secondary" to="/reservaciones">
            {conditions.cta.reserve}
          </Link>
        </div>
      </section>
    </>
  );
}
