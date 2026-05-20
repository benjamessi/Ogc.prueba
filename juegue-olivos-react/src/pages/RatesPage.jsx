import { Rates } from "../components/Rates.jsx";

export function RatesPage({ rates }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Green fees</p>
          <h1>Green fees</h1>
        </div>
        <p>Valores de referencia para visitantes.</p>
      </section>
      <Rates rates={rates} />
    </>
  );
}
