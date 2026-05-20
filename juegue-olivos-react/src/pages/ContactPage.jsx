import { Contact } from "../components/Contact.jsx";

export function ContactPage({ booking }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Contacto</p>
          <h1>Hablá con secretaría.</h1>
        </div>
        <p>Teléfono, horarios de atención y futuros canales como WhatsApp o formulario pueden vivir acá.</p>
      </section>
      <Contact booking={booking} />
    </>
  );
}
