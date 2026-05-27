import { Reservation } from "../components/Reservation.jsx";

export function ReservationsPage({ page, reservation, member }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
        </div>
        <p>{page.intro}</p>
      </section>
      <Reservation reservation={reservation} member={member} />
    </>
  );
}
