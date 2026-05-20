export function NotFoundPage() {
  return (
    <section className="page-hero not-found">
      <div>
        <p className="eyebrow">Página no encontrada</p>
        <h1>Ese camino no existe todavía.</h1>
      </div>
      <p>
        Volvé a la home o elegí una categoría del menú principal. Buen momento para respirar: hasta las rutas necesitan
        fairway.
      </p>
      <a className="button primary" href="#/">
        Volver al inicio
      </a>
    </section>
  );
}
