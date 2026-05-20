import { Hero } from "../components/Hero.jsx";

const homeCards = [
  {
    title: "Información del club",
    body: "Historia, recorridos, requisitos y datos útiles antes de jugar.",
    href: "#/info-club"
  },
  {
    title: "Reservar horario",
    body: "Elegí día, hora y cancha Azul, Roja o Blanca para preparar la consulta.",
    href: "#/reservaciones"
  },
  {
    title: "Acceso socios",
    body: "Ingreso privado para reservas internas, torneos y beneficios.",
    href: "#/socios"
  }
];

export function HomePage({ siteData }) {
  return (
    <>
      <Hero club={siteData.club} booking={siteData.booking} />
      <section className="section home-router" aria-labelledby="home-router-title">
        <div className="section-heading centered">
          <div className="section-kicker">Elegí una pantalla</div>
          <h2 id="home-router-title">La home ahora es la puerta de entrada, no todo el sitio.</h2>
          <p>Cada botón te lleva a una página React distinta, con su propio contenido y foco.</p>
        </div>
        <div className="category-grid">
          {homeCards.map((card) => (
            <a className="category-card" href={card.href} key={card.title}>
              <span>{card.title}</span>
              <p>{card.body}</p>
              <strong>Entrar</strong>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
