import { Reservation } from "../components/Reservation.jsx";
import scorecardPdf from "../assets/Tarjeta.pdf?url";
import scorecardPreviewFront from "../assets/tarj1-300x212.jpg";
import scorecardPreviewBack from "../assets/tarj2-300x212.jpg";

export function ReservationsPage({ page, reservation, scorecard, member }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
        </div>
        <p>{page.intro}</p>
      </section>
      <Reservation reservation={reservation} member={member} />
      <section className="section scorecard-section" aria-labelledby="scorecard-title">
        <div className="scorecard-card">
          <div className="scorecard-copy">
            <p className="section-kicker">{scorecard.eyebrow}</p>
            <h2 id="scorecard-title">{scorecard.title}</h2>
            <p>{scorecard.text}</p>
            <p className="scorecard-helper">{scorecard.helper}</p>
            <div className="scorecard-actions">
              <a className="button primary" href={scorecardPdf} download={scorecard.fileName} target="_blank" rel="noreferrer">
                {scorecard.downloadButton}
              </a>
              <a className="button secondary light" href={scorecardPdf} target="_blank" rel="noreferrer">
                {scorecard.printButton}
              </a>
            </div>
          </div>
          <figure className="scorecard-preview" aria-label={scorecard.previewLabel}>
            <span>{scorecard.previewLabel}</span>
            <div className="scorecard-preview-grid">
              <img src={scorecardPreviewFront} alt={`${scorecard.previewLabel} 1`} />
              <img src={scorecardPreviewBack} alt={`${scorecard.previewLabel} 2`} />
            </div>
          </figure>
        </div>
      </section>
    </>
  );
}
