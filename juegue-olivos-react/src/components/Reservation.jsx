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

  function handleGuestCountChange(event) {
    const nextGuestCount = Number(event.target.value);
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

  return (
    <section className="section reservation-section" id="reservar" aria-labelledby="reservar-title">
      <div className="reservation-shell" style={{ "--reservation-image": `url(${reservationBackground})` }}>
        <div className="reservation-copy">
          <div className="section-kicker">{reservation.kicker}</div>
          <h2 id="reservar-title">{reservation.title}</h2>
          <p>{reservation.intro}</p>
          <div className="reservation-summary" aria-live="polite">
            <span>{reservation.summaryLabel}</span>
            <strong>
              {selectedDate} · {selectedTime} · {isMember ? reservation.memberLabel : reservation.nonMemberLabel}
            </strong>
          </div>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label>
              {reservation.dateLabel}
              <input type="date" value={selectedDate} onChange={handleDateChange} aria-describedby="reservation-rule" />
            </label>
            <label>
              {reservation.timeLabel}
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
              {reservation.statusLabel}
              <input type="text" value={isMember ? reservation.memberLabel : reservation.nonMemberLabel} readOnly />
            </label>
            <label>
              {reservation.guestsLabel}
              <select value={guestCount} onChange={handleGuestCountChange} disabled={!isMember}>
                <option value={0}>{reservation.noGuests}</option>
                <option value={1}>{reservation.oneGuest}</option>
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
            {reservation.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
