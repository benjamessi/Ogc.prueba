import { Policies } from "../components/Policies.jsx";
import { Rates } from "../components/Rates.jsx";

export function RatesPage({ rates, policies }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Tarifas y condiciones</p>
          <h1>Valores claros, políticas cerca.</h1>
        </div>
        <p>
          Los valores quedan separados de la reserva para poder actualizar precios, condiciones y reglas sin tocar otras
          pantallas.
        </p>
      </section>
      <Rates rates={rates} />
      <Policies items={policies} />
    </>
  );
}
