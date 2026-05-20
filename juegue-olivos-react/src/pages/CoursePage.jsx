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
            <div className="course-route-list" aria-label="Recorridos de la cancha">
              {course.routes.map((route) => (
                <span key={route}>{route}</span>
              ))}
            </div>
          </div>
          <figure className="course-map-figure">
            <img src={course.map} alt="Plano de la cancha del Olivos Golf Club" />
          </figure>
        </div>
      </section>

      <section className="section course-feature" aria-labelledby="feature-title">
        <article className="course-feature-card">
          <div className="section-kicker">Hoyo destacado</div>
          <h2 id="feature-title">Hoyo 15</h2>
          <p>{course.feature}</p>
        </article>
      </section>

      <Policies items={policies} />
    </>
  );
}
