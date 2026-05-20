import { useState } from "react";

function getTomorrowDate() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toISOString().slice(0, 10);
}

export function Reservation({ reservation }) {
  const [selectedCourse, setSelectedCourse] = useState(reservation.courses[0].id);
  const [selectedTime, setSelectedTime] = useState(reservation.times[1]);
  const [selectedDate, setSelectedDate] = useState(getTomorrowDate);
  const course = reservation.courses.find((item) => item.id === selectedCourse);

  return (
    <section className="section reservation-section" id="reservar" aria-labelledby="reservar-title">
      <div className="reservation-shell">
        <div className="reservation-copy">
          <div className="section-kicker">Reservar horario</div>
          <h2 id="reservar-title">Elegí día, hora y cancha.</h2>
          <p>{reservation.intro}</p>
          <div className="reservation-summary" aria-live="polite">
            <span>Consulta preparada</span>
            <strong>
              {course.name} · {selectedDate} · {selectedTime}
            </strong>
          </div>
        </div>

        <form className="reservation-form">
          <div className="form-row">
            <label>
              Día
              <input type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} />
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

          <fieldset>
            <legend>Cancha</legend>
            <div className="course-grid">
              {reservation.courses.map((item) => (
                <label className={`course-card ${selectedCourse === item.id ? "is-selected" : ""}`} key={item.id}>
                  <input
                    type="radio"
                    name="course"
                    value={item.id}
                    checked={selectedCourse === item.id}
                    onChange={() => setSelectedCourse(item.id)}
                  />
                  <span>{item.name}</span>
                  <strong>{item.tone}</strong>
                  <small>{item.description}</small>
                </label>
              ))}
            </div>
          </fieldset>

          <a className="button primary full" href="#contacto">
            Consultar disponibilidad
          </a>
        </form>
      </div>
    </section>
  );
}
