import { Reservation } from "../components/Reservation.jsx";

export function ReservationsPage({ reservation }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Reservaciones</p>
          <h1>Reservá por cancha, día y horario.</h1>
        </div>
        <p>
          La reserva vive en su propia pantalla para que el usuario no tenga que bajar por toda la home. Próximo paso:
          conectar este formulario a disponibilidad real.
        </p>
      </section>
      <Reservation reservation={reservation} />
    </>
  );
}
