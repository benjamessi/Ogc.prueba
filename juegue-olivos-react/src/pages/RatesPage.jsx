import { Policies } from "../components/Policies.jsx";
import { Rates } from "../components/Rates.jsx";

export function RatesPage({ rates, policies }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Tarifas y condiciones</p>
          <h1>Tarifas y condiciones</h1>
        </div>
        <p>Valores, condiciones de juego y reglas importantes para visitantes.</p>
      </section>
      <Rates rates={rates} />
      <Policies items={policies} />
    </>
  );
}
