import { useState } from "react";

const holeImageModules = import.meta.glob("../assets/course-holes/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: "?url"
});

function getHoleNumber(path) {
  return Number(path.match(/_(\d+)\./)?.[1] ?? 0);
}

function getRouteHoles(routeName) {
  return Object.entries(holeImageModules)
    .filter(([path]) => path.includes(`/course-holes/${routeName}/`))
    .map(([path, src]) => ({
      number: getHoleNumber(path),
      src
    }))
    .sort((a, b) => a.number - b.number);
}

export function CoursePage({ course }) {
  const [openRoute, setOpenRoute] = useState(null);

  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Golf</p>
          <h1>Cancha</h1>
        </div>
        <p>
          La cancha de Olivos Golf Club cuenta con 27 hoyos distribuidos en los recorridos Blanca, Colorada y Azul. Su
          diseño combina arboledas añosas, desniveles naturales, greens exigentes y un trazado que premia la precisión.
        </p>
      </section>

      <section className="section course-overview" aria-labelledby="course-title">
        <div className="course-map-card">
          <div className="course-map-copy">
            <div className="section-kicker">Recorridos</div>
            <h2 id="course-title">Blanca, Colorada y Azul</h2>
            <p>Los tres recorridos permiten combinar distintas vueltas y experiencias dentro de una misma cancha.</p>
          </div>
          <figure className="course-map-figure">
            <img src={course.map} alt="Plano de la cancha del Olivos Golf Club" />
          </figure>
        </div>
      </section>

      <section className="section course-routes-section" aria-labelledby="routes-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Recorridos</p>
            <h2 id="routes-title">Tres formas de jugar Olivos</h2>
          </div>
          <p>Cada recorrido contiene 9 hoyos. Abrí uno para ver el detalle sin desplegar toda la cancha a la vez.</p>
        </div>
        <div className="course-route-accordion">
          {course.routeCards.map((route) => {
            const holes = getRouteHoles(route.name);
            const isOpen = openRoute === route.name;

            return (
              <article className={`course-route-card ${isOpen ? "is-open" : ""}`} key={route.name}>
                <div>
                  <h3>{route.name}</h3>
                  <p>{route.description}</p>
                </div>
                <button
                  className="button secondary route-toggle"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenRoute(isOpen ? null : route.name)}
                >
                  {isOpen ? "Cerrar recorrido" : "Ver hoyos"}
                </button>
                {isOpen ? (
                  <div className="course-holes-grid">
                    {holes.map((hole) => (
                      <figure className="course-hole-card" key={`${route.name}-${hole.number}`}>
                        <img src={hole.src} alt={`Hoyo ${hole.number} del recorrido ${route.name}`} />
                        <figcaption>Hoyo {hole.number}</figcaption>
                      </figure>
                    ))}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="section course-feature" aria-labelledby="feature-title">
        <article className="course-feature-card">
          <div className="course-feature-copy">
            <div className="section-kicker">Hoyo destacado</div>
            <h2 id="feature-title">Hoyo 15</h2>
            <div className="course-feature-stats" aria-label="Datos del hoyo 15">
              <span>Par 5</span>
              <span>470 yardas</span>
              <span>Riesgo y recompensa</span>
            </div>
            <p>{course.feature}</p>
          </div>
          <figure className="course-feature-photo">
            <img src={course.holeFifteenImage} alt="Hoyo 15 del Olivos Golf Club" />
          </figure>
        </article>
      </section>
    </>
  );
}
