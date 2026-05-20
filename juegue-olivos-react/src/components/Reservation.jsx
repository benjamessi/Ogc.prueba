import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import reservationBackground from "../assets/reservation-bg.jpg";

function getTomorrowDate() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toISOString().slice(0, 10);
}

function getLocalDay(dateValue) {
  if (!dateValue) {
    return null;
  }

  const [year, month, day] = dateValue.split("-").map(Number);
  return new Date(year, month - 1, day).getDay();
}

function getReservationRule(dateValue, isMember, guestCount) {
  const day = getLocalDay(dateValue);

  if (day === null) {
    return {
      isValid: false,
      message: "Elegí un día para consultar disponibilidad."
    };
  }

  if (day === 3) {
    return {
      isValid: true,
      message: "Miércoles de golf abierto: pueden reservar socios y no socios."
    };
  }

  if ([2, 4, 5].includes(day)) {
    if (!isMember) {
      return {
        isValid: false,
        message: "Los martes, jueves y viernes sólo pueden reservar socios. Los no socios pueden reservar los miércoles."
      };
    }

    if (guestCount > 1) {
      return {
        isValid: false,
        message: "Los martes, jueves y viernes cada socio puede invitar como máximo a 1 invitado."
      };
    }

    return {
      isValid: true,
      message: "Día habilitado para socios. Podés sumar como máximo 1 invitado."
    };
  }

  if ([0, 6].includes(day)) {
    if (!isMember) {
      return {
        isValid: false,
        message: "Los sábados y domingos sólo pueden reservar socios."
      };
    }

    if (guestCount > 0) {
      return {
        isValid: false,
        message: "Los sábados y domingos no se permiten invitados externos."
      };
    }

    return {
      isValid: true,
      message: "Día habilitado para socios, sin invitados externos."
    };
  }

  return {
    isValid: false,
    message: "Ese día no está habilitado para reservas. Elegí miércoles, o martes, jueves, viernes, sábado o domingo si sos socio."
  };
}

export function Reservation({ reservation, member }) {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState(reservation.times[1]);
  const [selectedDate, setSelectedDate] = useState(getTomorrowDate);
  const [guestCount, setGuestCount] = useState(0);
  const [submitMessage, setSubmitMessage] = useState("");
  const isMember = Boolean(member);
  const validation = getReservationRule(selectedDate, isMember, guestCount);

  useEffect(() => {
    if (!isMember && guestCount > 0) {
      setGuestCount(0);
    }
  }, [guestCount, isMember]);

  function handleDateChange(event) {
    const nextDate = event.target.value;
    const nextRule = getReservationRule(nextDate, isMember, guestCount);

    setSelectedDate(nextDate);
    setSubmitMessage(nextRule.isValid ? "" : nextRule.message);
  }

  function handleGuestCountChange(event) {
    const nextGuestCount = Number(event.target.value);
    const nextRule = getReservationRule(selectedDate, isMember, nextGuestCount);

    setGuestCount(nextGuestCount);
    setSubmitMessage(nextRule.isValid ? "" : nextRule.message);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextRule = getReservationRule(selectedDate, isMember, guestCount);
    if (!nextRule.isValid) {
      setSubmitMessage(nextRule.message);
      return;
    }

    navigate("/contacto");
  }

  return (
    <section className="section reservation-section" id="reservar" aria-labelledby="reservar-title">
      <div className="reservation-shell" style={{ "--reservation-image": `url(${reservationBackground})` }}>
        <div className="reservation-copy">
          <div className="section-kicker">Reservar horario</div>
          <h2 id="reservar-title">Elegí día y hora.</h2>
          <p>{reservation.intro}</p>
          <div className="reservation-summary" aria-live="polite">
            <span>Consulta preparada</span>
            <strong>
              {selectedDate} · {selectedTime} · {isMember ? "Socio" : "No socio"}
            </strong>
          </div>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label>
              Día
              <input type="date" value={selectedDate} onChange={handleDateChange} aria-describedby="reservation-rule" />
            </label>
            <label>
              Horario
              <select value={selectedTime} onChange={(event) => setSelectedTime(event.target.value)}>
                {reservation.times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-row">
            <label>
              Condición
              <input type="text" value={isMember ? "Socio" : "No socio"} readOnly />
            </label>
            <label>
              Invitados externos
              <select value={guestCount} onChange={handleGuestCountChange} disabled={!isMember}>
                <option value={0}>Sin invitados</option>
                <option value={1}>1 invitado</option>
              </select>
            </label>
          </div>

          <div
            className={`reservation-rule ${validation.isValid ? "is-valid" : "is-blocked"}`}
            id="reservation-rule"
            aria-live="polite"
          >
            {submitMessage || validation.message}
          </div>

          <button className="button primary full" type="submit">
            Consultar disponibilidad
          </button>
        </form>
      </div>
    </section>
  );
}
