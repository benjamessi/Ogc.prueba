import { Contact } from "../components/Contact.jsx";

export function ContactPage({ booking, club }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Contacto</p>
          <h1>Hablá con Secretaría.</h1>
        </div>
        <p>Consultá horarios, disponibilidad de juego, green fees, eventos y servicios del club.</p>
      </section>
      <Contact booking={booking} club={club} />
    </>
  );
}
