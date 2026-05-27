import flagImage from "../assets/bandera-olivos.jpg";

export function ClubInfoPage({ history }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">{history.eyebrow}</p>
          <h1>{history.title}</h1>
        </div>
        <p>{history.intro}</p>
      </section>
      <section className="section history-timeline" aria-label={history.timelineAria}>
        <ol>
          {history.timeline.map((item) => (
            <li key={`${item.year}-${item.label}`}>
              <strong>{item.year}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ol>
      </section>
      <section className="section history-section" id="historia" aria-labelledby="history-title">
        <div className="history-card">
          <div className="history-aside">
            <div className="history-intro">
              <p className="section-kicker">{history.kicker}</p>
              <h2 id="history-title">{history.sectionTitle}</h2>
            </div>
            <figure className="history-photo">
              <img src={flagImage} alt={history.imageAlt} />
            </figure>
          </div>
          <div className="history-copy">
            {history.sections.map((section) => (
              <article className="history-copy-block" key={section.title}>
                <h3>{section.title}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
