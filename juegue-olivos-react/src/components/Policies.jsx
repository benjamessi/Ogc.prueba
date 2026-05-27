export function Policies({ policies }) {
  return (
    <section className="section" id="condiciones" aria-labelledby="condiciones-title">
      <div className="section-heading centered">
        <div className="section-kicker">{policies.kicker}</div>
        <h2 id="condiciones-title">{policies.title}</h2>
        <p>{policies.intro}</p>
      </div>
      <div className="policy-grid">
        {policies.items.map((item) => (
          <article className="policy-card" key={item.title}>
            <span aria-hidden="true">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
