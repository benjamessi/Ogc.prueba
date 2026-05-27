import { Rates } from "../components/Rates.jsx";

export function RatesPage({ page, rates, booking }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
        </div>
        <p>{page.intro}</p>
      </section>
      <Rates rates={rates} booking={booking} />
    </>
  );
}
