import { Contact } from "../components/Contact.jsx";

export function ContactPage({ page, contact, booking, club }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
        </div>
        <p>{page.intro}</p>
      </section>
      <Contact contact={contact} booking={booking} club={club} />
    </>
  );
}
