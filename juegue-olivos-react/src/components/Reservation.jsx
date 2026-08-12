import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

function getReservationRule(dateValue, isMember, guestCount, rules) {
  const day = getLocalDay(dateValue);

  if (day === null) {
    return {
      isValid: false,
      message: rules.noDate
    };
  }

  if (day === 3) {
    return {
      isValid: true,
      message: rules.openWednesday
    };
  }

  if ([2, 4, 5].includes(day)) {
    if (!isMember) {
      return {
        isValid: false,
        message: rules.memberOnlyWeekdays
      };
    }

    if (guestCount > 1) {
      return {
        isValid: false,
        message: rules.maxOneGuest
      };
    }

    return {
      isValid: true,
      message: rules.weekdayOk
    };
  }

  if ([0, 6].includes(day)) {
    if (!isMember) {
      return {
        isValid: false,
        message: rules.weekendMembersOnly
      };
    }

    if (guestCount > 0) {
      return {
        isValid: false,
        message: rules.weekendNoGuests
      };
    }

    return {
      isValid: true,
      message: rules.weekendOk
    };
  }

  return {
    isValid: false,
    message: rules.unavailable
  };
}

export function Reservation({ reservation, member }) {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState(reservation.times[1]);
  const [selectedDate, setSelectedDate] = useState(getTomorrowDate);
  const [guestCount, setGuestCount] = useState(0);
  const [submitMessage, setSubmitMessage] = useState("");
  const isMember = Boolean(member);
  const validation = getReservationRule(selectedDate, isMember, guestCount, reservation.rules);

  useEffect(() => {
    if (!isMember && guestCount > 0) {
      setGuestCount(0);
    }
  }, [guestCount, isMember]);

  function handleDateChange(event) {
    const nextDate = event.target.value;
    const nextRule = getReservationRule(nextDate, isMember, guestCount, reservation.rules);

    setSelectedDate(nextDate);
    setSubmitMessage(nextRule.isValid ? "" : nextRule.message);
  }

  function handleGuestCountChange(nextGuestCount) {
    const nextRule = getReservationRule(selectedDate, isMember, nextGuestCount, reservation.rules);

    setGuestCount(nextGuestCount);
    setSubmitMessage(nextRule.isValid ? "" : nextRule.message);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextRule = getReservationRule(selectedDate, isMember, guestCount, reservation.rules);
    if (!nextRule.isValid) {
      setSubmitMessage(nextRule.message);
      return;
    }

    navigate("/contacto");
  }

  const message = submitMessage || validation.message;

  return (
    <section className="section reservation-section" id="reservar" aria-labelledby="reservar-title">
      <div className="reservation-layout">
        <div className="reservation-copy">
          <p className="section-kicker">{reservation.kicker}</p>
          <h2 id="reservar-title">{reservation.title}</h2>
          <p>{reservation.intro}</p>

          {/* Las reglas van a la vista antes de elegir: evitan el error en
              lugar de corregirlo después. */}
          <div className="reservation-schedule">
            <h3>{reservation.scheduleTitle}</h3>
            <ul>
              {reservation.schedule.map((item) => (
                <li key={item.day}>
                  <strong>{item.day}</strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit} noValidate>
          <div className="field-row">
            <label className="field-label" htmlFor="reservation-date">
              {reservation.dateLabel}
            </label>
            <input
              className="field-control"
              id="reservation-date"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              aria-describedby="reservation-rule"
            />
          </div>

          {/* Grilla de horarios en vez de un desplegable: se ven todos juntos */}
          <fieldset className="field-row">
            <legend className="field-label">{reservation.timeLabel}</legend>
            <div className="slot-grid">
              {reservation.times.map((time) => (
                <label className={`slot ${selectedTime === time ? "is-selected" : ""}`} key={time}>
                  <input
                    type="radio"
                    name="reservation-time"
                    value={time}
                    checked={selectedTime === time}
                    onChange={() => setSelectedTime(time)}
                  />
                  <span>{time}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="field-row">
            <span className="field-label">{reservation.statusLabel}</span>
            <div className="field-status">
              <span className={`status-mark ${isMember ? "is-member" : ""}`} aria-hidden="true" />
              <span>{isMember ? reservation.memberLabel : reservation.nonMemberLabel}</span>
            </div>
            {!isMember ? <p className="field-hint">{reservation.memberLoginHint}</p> : null}
          </div>

          <fieldset className="field-row" disabled={!isMember}>
            <legend className="field-label">{reservation.guestsLabel}</legend>
            <div className="slot-grid slot-grid-guests">
              {[
                { value: 0, label: reservation.noGuests },
                { value: 1, label: reservation.oneGuest }
              ].map((option) => (
                <label
                  className={`slot ${guestCount === option.value ? "is-selected" : ""}`}
                  key={option.value}
                >
                  <input
                    type="radio"
                    name="reservation-guests"
                    value={option.value}
                    checked={guestCount === option.value}
                    onChange={() => handleGuestCountChange(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/*
            role="alert" sólo cuando bloquea: los lectores de pantalla lo
            anuncian al instante. El estado válido usa aria-live cortés para
            no interrumpir mientras se completa el formulario.
          */}
          <p
            className={`reservation-rule ${validation.isValid ? "is-valid" : "is-blocked"}`}
            id="reservation-rule"
            role={validation.isValid ? undefined : "alert"}
            aria-live={validation.isValid ? "polite" : undefined}
          >
            {message}
          </p>

          <div className="reservation-summary" aria-live="polite">
            <span>{reservation.summaryLabel}</span>
            <strong>
              {selectedDate} · {selectedTime} · {isMember ? reservation.memberLabel : reservation.nonMemberLabel}
            </strong>
          </div>

          <button className="button primary full" type="submit">
            {reservation.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
