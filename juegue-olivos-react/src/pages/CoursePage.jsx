import { InfoCards } from "../components/InfoCards.jsx";
import { Policies } from "../components/Policies.jsx";

export function CoursePage({ course, policies }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Golf</p>
          <h1>Cancha</h1>
        </div>
        <p>La cancha se organiza en tres recorridos: Roja, Azul y Blanca.</p>
      </section>

      <section className="section course-overview" aria-labelledby="course-title">
        <div className="course-map-card">
          <div className="course-map-copy">
            <div className="section-kicker">Recorridos</div>
            <h2 id="course-title">Roja, Azul y Blanca</h2>
            <p>La cancha cuenta con tres alternativas de juego claramente identificadas.</p>
            
          </div>
          <figure className="course-map-figure">
            <img src={course.map} alt="Plano de la cancha del Olivos Golf Club" />
          </figure>
        </div>
      </section>

      <section className="section course-feature" aria-labelledby="feature-title">
        <article className="course-feature-card">
          <div className="course-feature-copy">
            <div className="section-kicker">Hoyo destacado</div>
            <h2 id="feature-title">Hoyo 15</h2>
            <p>{course.feature}</p>
          </div>
          <figure className="course-feature-photo">
            <img src={course.holeFifteenImage} alt="Hoyo 15 del Olivos Golf Club" />
          </figure>
        </article>
      </section>

      <InfoCards clubInfo={course.highlights} id="cancha-info" title="Información de la cancha" />

      <Policies items={policies} />
    </>
  );
}
