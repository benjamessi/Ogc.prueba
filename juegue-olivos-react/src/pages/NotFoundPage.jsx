import { Link } from "react-router-dom";

export function NotFoundPage({ copy }) {
  return (
    <section className="page-hero not-found">
      <div>
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
      </div>
      <p>{copy.intro}</p>
      <Link className="button primary" to="/">
        {copy.button}
      </Link>
    </section>
  );
}
