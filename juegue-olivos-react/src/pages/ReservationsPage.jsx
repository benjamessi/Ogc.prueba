import { Reservation } from "../components/Reservation.jsx";

export function ReservationsPage({ reservation, member }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Reservaciones</p>
          <h1>Reservar horario</h1>
        </div>
        <p>Elegí día y horario para consultar disponibilidad.</p>
      </section>
      <Reservation reservation={reservation} member={member} />
    </>
  );
}
