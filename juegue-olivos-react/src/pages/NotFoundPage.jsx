import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="page-hero not-found">
      <div>
        <p className="eyebrow">Página no encontrada</p>
        <h1>Página no encontrada</h1>
      </div>
      <p>Volvé al inicio o elegí una sección del menú principal.</p>
      <Link className="button primary" to="/">
        Volver al inicio
      </Link>
    </section>
  );
}
