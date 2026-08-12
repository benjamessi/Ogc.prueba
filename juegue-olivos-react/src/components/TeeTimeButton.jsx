import { Link } from "react-router-dom";
import { TeeIcon } from "./TeeIcon.jsx";

/*
 * La palabra se pinta de dorado al pasar el mouse y el tee viaja en el frente
 * de la pintura, como si la estuviera trazando.
 *
 * Son dos capas del mismo texto: la base apagada y, encima, una copia dorada
 * que arranca con ancho 0 y crece. El tee va en un "corredor" que crece con la
 * misma duración, anclado a su borde derecho: así queda siempre justo en el
 * límite de lo pintado sin necesidad de medir nada por JS.
 */
export function TeeTimeButton({ to, label, onClick }) {
  return (
    <Link className="tee-time" to={to} onClick={onClick}>
      {/* El interior mide exactamente el texto: así las capas se alinean con él
          y no con la caja de padding del botón. */}
      <span className="tee-time-inner">
        <span className="tee-time-base">{label}</span>
        <span className="tee-time-glow" aria-hidden="true">
          {label}
        </span>
        <span className="tee-time-runner" aria-hidden="true">
          <TeeIcon className="tee-time-tee" />
        </span>
      </span>
    </Link>
  );
}
