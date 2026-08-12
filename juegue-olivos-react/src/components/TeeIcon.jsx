/*
 * Tee de golf: copa arriba, punta abajo. Quien lo usa lo rota según necesite
 * (el menú lo da vuelta al abrirse; el deslizable lo apunta a la derecha).
 */
export function TeeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 24" fill="currentColor" aria-hidden="true">
      <path d="M3.4 5.3Q10 2.1 16.6 5.3L12.9 8.9Q11.6 15.2 10 22.5Q8.4 15.2 7.1 8.9Z" />
    </svg>
  );
}
