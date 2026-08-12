import { useEffect, useRef, useState } from "react";
import { TeeIcon } from "./TeeIcon.jsx";

const COMPLETE_AT = 0.9;
const RESET_DELAY = 320;

/*
 * Deslizable para reservar: se arrastra el tee de izquierda a derecha y al
 * llegar al final dispara onComplete.
 *
 * Usa Pointer Events (un solo camino para mouse, dedo y lápiz) con captura del
 * puntero, así el arrastre sigue funcionando aunque el dedo se salga del riel.
 * El teclado no queda afuera: es un <button> real y Enter/Espacio completan la
 * acción sin arrastrar.
 */
export function SlideToReserve({ label, hint, onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [travel, setTravel] = useState(0);
  const trackRef = useRef(null);
  const knobRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, startProgress: 0 });
  const resetTimerRef = useRef(null);

  /*
   * El recorrido se mide en píxeles y se aplica con translateX: en CSS un 100%
   * dentro del transform sería el ancho de la propia perilla, no el del riel.
   */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return undefined;
    }

    const observer = new ResizeObserver(() => {
      const knobWidth = knobRef.current?.offsetWidth ?? 0;
      setTravel(Math.max(track.clientWidth - knobWidth - 8, 1));
    });
    observer.observe(track);

    return () => observer.disconnect();
  }, []);

  useEffect(() => () => window.clearTimeout(resetTimerRef.current), []);

  function getTravel() {
    return travel || 1;
  }

  function complete() {
    setProgress(1);
    setIsDragging(false);
    onComplete();
    resetTimerRef.current = window.setTimeout(() => setProgress(0), RESET_DELAY);
  }

  function handlePointerDown(event) {
    window.clearTimeout(resetTimerRef.current);
    // La captura es una mejora, no un requisito: si falla, el arrastre sigue
    try {
      knobRef.current?.setPointerCapture(event.pointerId);
    } catch {
      /* sin captura: el arrastre funciona igual mientras el puntero no se vaya */
    }
    dragRef.current = { active: true, startX: event.clientX, startProgress: progress };
    setIsDragging(true);
  }

  function handlePointerMove(event) {
    if (!dragRef.current.active) {
      return;
    }
    const travel = getTravel();
    const moved = dragRef.current.startProgress * travel + (event.clientX - dragRef.current.startX);
    setProgress(Math.min(Math.max(moved / travel, 0), 1));
  }

  function handlePointerUp(event) {
    if (!dragRef.current.active) {
      return;
    }
    dragRef.current.active = false;
    try {
      knobRef.current?.releasePointerCapture(event.pointerId);
    } catch {
      /* nada que liberar */
    }
    setIsDragging(false);

    if (progress >= COMPLETE_AT) {
      complete();
      return;
    }
    setProgress(0);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      complete();
    }
  }

  return (
    <div
      className={`slide-reserve ${isDragging ? "is-dragging" : ""} ${progress >= COMPLETE_AT ? "is-complete" : ""}`}
      ref={trackRef}
      style={{ "--slide-progress": progress }}
    >
      <span
        className="slide-reserve-fill"
        aria-hidden="true"
        style={{ clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)` }}
      />
      <span
        className="slide-reserve-label"
        aria-hidden="true"
        style={{ transform: `translateX(${progress * travel}px)` }}
      >
        {label}
      </span>
      <button
        className="slide-reserve-knob"
        type="button"
        ref={knobRef}
        aria-label={hint}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        style={{ transform: `translateX(${progress * travel}px)` }}
      >
        <TeeIcon className="slide-reserve-tee" />
      </button>
    </div>
  );
}
