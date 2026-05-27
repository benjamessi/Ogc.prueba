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
          <p className="eyebrow">{course.heroEyebrow}</p>
          <h1>{course.title}</h1>
        </div>
        <p>{course.intro}</p>
      </section>

      <section className="section course-overview" aria-labelledby="course-title">
        <div className="course-map-card">
          <div className="course-map-copy">
            <div className="section-kicker">{course.overviewKicker}</div>
            <h2 id="course-title">{course.overviewTitle}</h2>
            <p>{course.overviewText}</p>
          </div>
          <figure className="course-map-figure">
            <img src={course.map} alt={course.mapAlt} />
          </figure>
        </div>
      </section>

      <section className="section course-routes-section" aria-labelledby="routes-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">{course.routesKicker}</p>
            <h2 id="routes-title">{course.routesTitle}</h2>
          </div>
          <p>{course.routesIntro}</p>
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
                  {isOpen ? course.closeRoute : course.viewHoles}
                </button>
                {isOpen ? (
                  <div className="course-holes-grid">
                    {holes.map((hole) => (
                      <figure className="course-hole-card" key={`${route.name}-${hole.number}`}>
                        <img src={hole.src} alt={`${course.holeAltPrefix} ${hole.number} - ${route.name}`} />
                        <figcaption>{course.holeCaption} {hole.number}</figcaption>
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
            <div className="section-kicker">{course.featureKicker}</div>
            <h2 id="feature-title">{course.featureTitle}</h2>
            <div className="course-feature-stats" aria-label={course.featureAria}>
              {course.stats.map((stat) => (
                <span key={stat}>{stat}</span>
              ))}
            </div>
            <p>{course.feature}</p>
          </div>
          <figure className="course-feature-photo">
            <img src={course.holeFifteenImage} alt={course.featureAlt} />
          </figure>
        </article>
      </section>
    </>
  );
}
